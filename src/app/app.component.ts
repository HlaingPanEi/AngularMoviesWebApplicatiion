import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularMovie';
  isCollapsed = true;
  isDarkMode = false;
  
  movieTitle = '';

  constructor(private router: Router) {}

  searchMovie() {
    if (this.movieTitle.trim()) {
      this.router.navigate(['/', this.movieTitle]);
    }
  }


  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }


  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

}
