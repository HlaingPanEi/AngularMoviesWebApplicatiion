import { Component, OnInit} from '@angular/core';

import { MovieService } from '../../movie.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
 

  isCollapsed = true;
  isDarkMode = false;
  movies: any;
  searchTerm: string = '';
 buttonColor: string = 'light-mode-toggle';
 btnIcon: string = 'far fa-moon'
 searching: boolean = false; 
 currentPhotoURL :any;
 
  constructor(private movieService: MovieService,public authService: AuthService) {const user = JSON.parse(localStorage.getItem('user')!);
    this.currentPhotoURL = user?.photoURL || '';
    }

ngOnInit(): void {
  
    this.movies = this.movieService.getMovies()
}
  
Searching() {
  this.searching = !this.searching;
}
notSearching(){
  this.searching = false;
}
toggleDarkMode() {
  this.isDarkMode = !this.isDarkMode;
  this.buttonColor = (this.buttonColor === 'dark-mode-toggle') ? 'light-mode-toggle' : 'dark-mode-toggle';
  this.btnIcon = (this.btnIcon === 'far fa-lightbulb')? 'far fa-moon' : 'far fa-lightbulb';
  // Add or remove the 'dark-mode' class to the root element based on dark mode status
  if (this.isDarkMode) {
    document.body.classList.add('dark-mode');
    
  } else {
    document.body.classList.remove('dark-mode');
  }
}


  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

}

