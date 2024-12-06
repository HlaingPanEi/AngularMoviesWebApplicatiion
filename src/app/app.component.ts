import { Component,Input, OnInit} from '@angular/core';

import { MovieService } from './movie.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
 

  isCollapsed = true;
  isDarkMode = false;
  movies: any;
  searchTerm: string = '';
 buttonColor: string = 'light-mode-toggle';
 btnIcon: string = 'far fa-moon'
 searching: boolean = false; 
  constructor(private movieService: MovieService) {}

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
  }


  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

}
