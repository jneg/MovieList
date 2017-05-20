import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TmdbService {
  constructor (private http: Http) {}
  searchMovies(keyword: string): Observable<any> {
    return this.http.get("https://api.themoviedb.org/3/search/movie?api_key=0fa6916bbd5581f0f08ea29ae7f6349e&language=en-US&query="+keyword+"&include_adult=false")
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let titles: string[] = [];
    let body = res.json();
    body.results.forEach(function(e: {}) {
      if (titles.length < 10) {
        titles.push(e.title);
      }
    });
    return titles || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
