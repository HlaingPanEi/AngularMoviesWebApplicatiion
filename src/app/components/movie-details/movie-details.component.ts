import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../movie.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit{
  title : any;
  
  Result:| any;
  stars = Array(5).fill(0); 
  rating = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ){}
  ngOnInit() {
    
    this.title = this.activatedRoute.snapshot.params['title'];
    console.log("Title from route:", this.title);

    const results = this.movieService.getMovies();
  

    this.Result = results.find(
      (p: { title: string }) =>
        p.title?.toLowerCase() === this.title?.toLowerCase()
    );

results.forEach((movie: any) => {
  
});
  }

  onBack(): void{
    this.router.navigate(['home']);

  }

}