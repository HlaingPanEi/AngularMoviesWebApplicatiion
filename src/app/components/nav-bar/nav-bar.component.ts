import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{
movies:any;
  constructor(private movieService: MovieService){}
   ngOnInit() {
       this.movies = this.movieService.getTopRated();
   }


}
