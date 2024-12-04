import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopularMoviesComponent } from './compoonents/popular-movies/popular-movies.component';
import { TopRatedMoviesComponent } from './compoonents/top-rated-movies/top-rated-movies.component';
import { HomePageComponent } from './compoonents/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './compoonents/nav-bar/nav-bar.component';
import { MovieDetailsComponent } from './compoonents/movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    PopularMoviesComponent,
    TopRatedMoviesComponent,
    HomePageComponent,
    NavBarComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
