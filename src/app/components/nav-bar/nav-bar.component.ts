import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{
  @Input() searchTerm: string = '';  
  movies:any;


  constructor(private movieService: MovieService, private router: Router){}

   ngOnInit() {
       this.movies = this.movieService.getMovies();
   }
   navigateAndRefresh(movieTitle: string) {
    return this.router.navigate([`/${movieTitle}`]).then(() => {
      // After navigation, trigger a refresh by navigating to the same route again
      // window.location.reload();
    });
   
  }

   
}
