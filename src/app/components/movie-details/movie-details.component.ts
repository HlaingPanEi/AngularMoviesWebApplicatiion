import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../movie.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit{
  title : any;
  
  Result:| any;
  stars = Array(5).fill(0); // Array for 5 stars
  rating = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
  ){}
  ngOnInit() {
    
    this.title = this.activatedRoute.snapshot.params['title'];
    console.log("Title from route:", this.title);

    const results = this.movieService.getMovies();
    console.log("Movies from service:", results);

    this.Result = results.find(
      (p: { title: string }) =>
        p.title?.toLowerCase() === this.title?.toLowerCase()
    );
    console.log(this.Result)
    console.log("Results from service:", results);
console.log("Title to match:", this.title);

results.forEach((movie: any) => {
  console.log(`Comparing "${movie.title?.toLowerCase()}" with "${this.title?.toLowerCase()}"`);
});
  }



}