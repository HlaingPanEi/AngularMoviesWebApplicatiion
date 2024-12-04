import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../movie.service';
import { Results } from '../../models/results';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit{
  title : any;
  Result: Results| any;
  movieListResults: any;
  groupedMovieList:any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
  ){}
  ngOnInit() {
    
    this.title = this.activatedRoute.snapshot.params['title'];
    this.movieListResults = this.movieService.getMovies()
    this.groupedMovieList = this.chunkArray(this.movieListResults, 5);
    const results = this.movieService.getMovies(); 
    this.Result = results.find((p: { title: string; }) => p.title?.toLowerCase() === this.title?.toLowerCase()
    );
    
  }

  chunkArray(array: any[], chunkSize: number): any[] {
    const list = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      list.push(array.slice(i, i + chunkSize));
    }
    return list;
  }


  

}
