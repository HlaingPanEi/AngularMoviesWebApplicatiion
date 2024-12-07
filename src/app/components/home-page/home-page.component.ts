import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit{
  topRated: any;
  movieListResults:any;
   constructor(private movieService: MovieService,public authService: AuthService){
    
   }
   ngOnInit(): void {
    this.movieListResults = this.movieService.getMovies();
    this.topRated = this.movieService.getTopRated();
   }
   
}
