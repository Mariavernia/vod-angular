import {HandleError, HttpErrorHandler} from "../../../core/http-error-handler.service";
import {HttpService} from "../../../core/http.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Season} from "../models/season.model";
import {EndPoints} from "../../../share/end-points";
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
  static REFERENCE = "/reference";


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
    return this.httpService
      .get(EndPoints.SEASON + SeasonService.REFERENCE);
  }

  getSeasonsBySubject(subjectReference: String): Observable<Season[]> {
    console.log("PIDE LAS REFERENCIAS")
    return this.httpService
      .get(EndPoints.SUBJECT+ '/' + subjectReference + "/season");
    /*return of([
      {reference: "wqvewr", name:"2016/17", subjectReference:"e3cqrv"},
      {reference: "wed", name:"2017/18", subjectReference:"e3cqrv"},
      {reference: "wqvcwxewr", name:"2018/19", subjectReference:"e3cqrv"}
    ])*/
  }
}
