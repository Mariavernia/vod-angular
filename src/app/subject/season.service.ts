import {HandleError, HttpErrorHandler} from "../core/http-error-handler.service";
import {HttpService} from "../core/http.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Season} from "./season.model";
import {EndPoints} from "../share/end-points";
import {Injectable} from "@angular/core";
import {catchError} from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root',
})
export class SeasonService {

  private handleError: HandleError;


  constructor(private httpService: HttpService, private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('SeasonService');
  }

  create(season: Season): Observable<any> {
    return this.http.post<Season>(EndPoints.SEASON, season, httpOptions)
      .pipe(
        catchError(this.handleError('addSeason', season))
      );
  }

  getAllSeasonReferences() : Observable<String[]> {
    /*return this.httpService
      .get(EndPoints.SUBJECT + SubjectService.REFERENCES);*/
    return of(["613000095", "613000096"]);
  }
}
