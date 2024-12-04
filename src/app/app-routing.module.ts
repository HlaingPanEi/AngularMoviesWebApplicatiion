import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './compoonents/home-page/home-page.component';
import { PopularMoviesComponent } from './compoonents/popular-movies/popular-movies.component';
import { TopRatedMoviesComponent } from './compoonents/top-rated-movies/top-rated-movies.component';
import { MovieDetailsComponent } from './compoonents/movie-details/movie-details.component';

const routes: Routes = [
  {path: 'home',component: HomePageComponent},
  {path: 'popular',component: PopularMoviesComponent},
  {path: 'top-rated', component: TopRatedMoviesComponent},
  {path: '', component: HomePageComponent},
  {path: ':title',component: MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
