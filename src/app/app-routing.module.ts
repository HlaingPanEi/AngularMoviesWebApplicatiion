import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';
import { TopRatedMoviesComponent } from './components/top-rated-movies/top-rated-movies.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

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
