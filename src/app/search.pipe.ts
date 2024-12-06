import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
    transform(movies: any[], searchTerm: string): any[] {
        if (!searchTerm) {
          return movies; 
        }
        
        return movies.filter(movie =>
          movie.title.toLowerCase().includes(searchTerm.toLowerCase()) 
        );
      }
}