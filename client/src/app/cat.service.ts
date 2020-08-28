import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from './models/cat.model';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  private readonly API_URI = environment.apiUri + '/cats';

  constructor(private readonly http: HttpClient) {}

  /**
   * get HTTP request on /api/cats/random
   * Response is a random cat from the database
   */
  getRandomCat(): Observable<Cat> {
    return this.http.get(this.API_URI + '/random');
  }

  /**
   * put http request on /api/cats/vote/:id
   * increment vote property of a cat
   * @param id Id of the cat
   * Response is the voted cat
   */
  voteById(id: string): Observable<Cat> {
    return this.http.put(this.API_URI + '/vote/' + id, {});
  }

  /**
   * get http request on /api/cats
   * Response is all cats sort by vote
   */
  getAllCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(this.API_URI);
  }
}
