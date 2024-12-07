import { Injectable, NgZone, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { User } from '../services/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isBrowser: boolean;
  userData: any;
  currentPhotoURL: any;
  newDisplayName: any;
  newPhoneNumber: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    private toastr: ToastrService,
    private afStorage: AngularFireStorage,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

   
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        localStorage.setItem('user', 'null');
      }
    });
  }

  async initializeUserData() {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr);
      console.log('User found in localStorage:', user);
  
      this.currentPhotoURL = user?.photoURL || '';
      this.newDisplayName = user?.displayName || '';
  
      if (user?.uid) {
        console.log('Loading phone number from Firestore');
        await this.loadUserPhoneNumber(user.uid);
      }
    } else {
      console.error('No user found in localStorage');
    }
  }
  
  saveTokenToLocalStorage(token: string): void {
    if (this.isBrowser) {
      localStorage.setItem('authToken', token);
    }
  }

  getTokenFromLocalStorage(): string | null {
    return this.isBrowser ? localStorage.getItem('authToken') : null;
  }

  SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then(async (result) => {
        this.SetUserData(result.user);
        console.log('Login success, fetching user data');
        if (result.user) {
          await this.initializeUserData();
          this.router.navigate(['home']);
          this.toastr.success('Welcome!');
        }
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }
  
  // Sign up with email & password
  SignUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.SendVerificationMail();
        this.SetUserData(result.user);
      })
      .catch((error) => {
        console.error('SignUp failed:', error.message);
        this.toastr.error(error.message);
      });
  }

  // Send email verification
  SendVerificationMail() {
    return this.afAuth.currentUser
      .then((user) => user?.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
        this.toastr.success('Verification email sent');
      })
      .catch((error) => {
        console.error('Email verification failed:', error);
        this.toastr.error('Failed to send email verification');
      });
  }

  // Forgot password handler
  ForgotPassword(email: string) {
    return this.afAuth
      .sendPasswordResetEmail(email)
      .then(() => {
        this.toastr.success('Password reset email sent');
      })
      .catch((error) => {
        console.error('Failed to send password reset email:', error);
        this.toastr.error('Failed to send password reset email');
      });
  }

  // Check if user is logged in
  get isLoggedIn(): boolean {
    const userStr = localStorage.getItem('user');
    if (!userStr) return false;

    try {
      const user = JSON.parse(userStr);
      return user?.emailVerified === true;
    } catch (error) {
      console.error('Failed to parse user data from localStorage', error);
      return false;
    }
  }


  getUserPhoneNumber(uid: string): Promise<string> {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${uid}`);
    return new Promise<string>((resolve, reject) => {
      userRef.get().subscribe(
        (doc) => {
          console.log('Firestore data:', doc.data());
          resolve(doc.exists ? doc.data()?.phoneNumber || '' : '');
        },
        (error) => {
          console.error('Error fetching phone number:', error);
          reject(error);
        }
      );
    });
  }


  SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
      phoneNumber: user.phoneNumber || '',
    };
  
    return userRef.set(userData, { merge: true })
      .then(() => console.log('User data successfully saved to Firestore'))
      .catch((error) => console.error('Error saving user data to Firestore:', error));
  }
  
  async loadUserPhoneNumber(uid: string) {
    try {
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${uid}`);
      const userDoc = await userRef.get().toPromise();
      
      console.log('Firestore document data fetched:', userDoc?.data());
  
      if (userDoc?.exists && userDoc?.data()?.phoneNumber) {
        const phoneNumber = userDoc.data()?.phoneNumber;
        console.log('Phone number found:', phoneNumber);
  
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        user.phoneNumber = phoneNumber; // Persist the phone number to localStorage
        localStorage.setItem('user', JSON.stringify(user));
      } else {
        console.warn('No phone number in Firestore document or document does not exist');
      }
    } catch (error) {
      console.error('Error loading phone number:', error);
    }
  }
  

 
  async updateDisplayName(
    newDisplayName: string,
    newPhotoFile: File | null,
    newPhoneNumber: string
  ) {
    try {
      const user = await this.afAuth.currentUser;
      if (user) {
        let newPhotoURL: string | null = null;

        if (newPhotoFile) {
          const filePath = `profile_photos/${user.uid}/${newPhotoFile.name}`;
          const fileRef = this.afStorage.ref(filePath);

          await this.afStorage.upload(filePath, newPhotoFile).snapshotChanges().toPromise();
          newPhotoURL = await fileRef.getDownloadURL().toPromise();
        } else {
          newPhotoURL = user.photoURL;
        }

        await user.updateProfile({
          displayName: newDisplayName,
          photoURL: newPhotoURL,
        });

        const userRef: AngularFirestoreDocument<any> = this.afs.doc(
          `users/${user.uid}`
        );
        await userRef.update({
          displayName: newDisplayName,
          photoURL: newPhotoURL,
          phoneNumber: newPhoneNumber,
        });

        this.toastr.success('Profile updated successfully');
      } else {
        this.toastr.error('No user logged in');
      }
    } catch (error) {
      console.error('Failed to update profile:', error);
      this.toastr.error('Error updating profile');
    }
  }

  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
      this.toastr.success('Signed out successfully');
    });
  }

  GoHome() {
    if (this.isLoggedIn) {
      this.router.navigate(['home']);
    } else {
      this.toastr.error('Please log in');
      this.router.navigate(['sign-in']);
    }
  }

  GoDashboard() {
    if (this.isLoggedIn) {
      this.router.navigate(['dashboard']);
    } else {
      this.toastr.error('Login required');
      this.router.navigate(['sign-in']);
    }
  }
  GoPopular(){
    if (this.isLoggedIn) {
      this.router.navigate(['popular']);
    } else {
      this.toastr.error('Login required');
      this.router.navigate(['sign-in']);
    }
  }
  GoTopRated(){
    if (this.isLoggedIn) {
      this.router.navigate(['top-rated']);
    } else {
      this.toastr.error('Login required');
      this.router.navigate(['sign-in']);
    }
  }
}
