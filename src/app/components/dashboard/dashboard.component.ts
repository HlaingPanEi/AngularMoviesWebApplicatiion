import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  isBrowser: boolean;
  previewPhotoURL: string | null = '';
  imgSrc: any = '../dummy-user.webp';
  selectedImg: any;
  displayName: any;
  phoneNumber: any;
  newPhotoFile: File | null = null;
  newDisplayName: string = '';
  ToUpdate: boolean = false;
  newPhoneNumber: any;
  currentPhotoURL: string | null = '';

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    public authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.initializeUserData();
    }
  }

  /**
   * Safely parse user data and load phone number from Firestore if available.
   */
  async initializeUserData() {
    try {
      const userStr = localStorage.getItem('user');
      if (userStr) {
        const user = JSON.parse(userStr);
        this.currentPhotoURL = user?.photoURL || '';
        this.newDisplayName = user?.displayName || '';
        this.newPhoneNumber = user?.newPhoneNumber ||'';

        if (user?.uid) {
          await this.loadUserPhoneNumber(user.uid);
        }
      }
    } catch (error) {
      console.error('Error parsing user data from localStorage:', error);
    }
  }

  /**
   * Fetch the user's phone number safely and update localStorage with it.
   */
  async loadUserPhoneNumber(uid: string) {
    try {
      const phoneNumber = await this.authService.getUserPhoneNumber(uid);
      if (phoneNumber) {
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        user.phoneNumber = phoneNumber;
        localStorage.setItem('user', JSON.stringify(user));
        this.newPhoneNumber = phoneNumber;
        console.log('Phone number updated in localStorage');
      }
    } catch (error) {
      console.error('Error fetching phone number:', error);
    }
  }

 
  toUpadate() {
    this.ToUpdate = !this.ToUpdate;
  }

  onPhotoFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.newPhotoFile = file;
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.previewPhotoURL = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  
  newPhotoURLPreview() {
    return this.previewPhotoURL || this.currentPhotoURL;
  }

 
  async updateProfile() {
    if (this.newDisplayName.trim()) {
      try {
        await this.authService.updateDisplayName(
          this.newDisplayName,
          this.newPhotoFile,
          this.newPhoneNumber
        );

        const userStr = localStorage.getItem('user');
        if (userStr) {
          const user = JSON.parse(userStr);
          this.currentPhotoURL = user?.photoURL || '';
          this.newPhoneNumber = user?.phoneNumber || '';
        }

        this.router.navigate(['dashboard']);
        this.ToUpdate = false;
        this.toastr.success('Profile updated successfully!');
      } catch (error) {
        console.error('Error during profile update:', error);
        this.toastr.error('Could not update profile.');
      }
    } else {
      this.toastr.error('Please provide a display name.');
    }
  }
}
