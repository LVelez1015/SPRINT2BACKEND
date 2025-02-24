import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:4201';
  public apiUrl = this.baseUrl + '/recipes';
  private fallbackDataPath = 'assets/recipes.json';

  constructor(private http: HttpClient) {}

  fetchRecipes(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      catchError(() => {
        console.warn('API unavailable. Using local data instead.');
        return this.http.get(this.fallbackDataPath);
      })
    );
  }
}
