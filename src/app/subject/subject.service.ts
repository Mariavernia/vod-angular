import {HttpService} from "../core/http.service";
import {Observable, of, throwError as observableThrowError} from "rxjs";
import {Subject} from "./subject.model";
import {Injectable} from "@angular/core";
import {EndPoints} from "../share/end-points";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {HandleError, HttpErrorHandler} from "../core/http-error-handler.service";
import {Video} from "./video.model";
import {Season} from "./season.model";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root',
})
export class SubjectService {

  static SEARCH = "/search";
  static SEASON = "/season";
  static VIDEOS = "/videos";
  static REFERENCES = "/references";

  private handleError: HandleError;

  constructor(private httpService: HttpService, private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('SubjectService');
  }

  create(subject: Subject): Observable<any> {
    return this.http.post<Subject>(EndPoints.SUBJECT, subject, httpOptions)
      .pipe(
        catchError(this.handleError('addSubject', subject))
      );
  }

  searchAll(): Observable<Subject[]> {
    return this.httpService
      .get(EndPoints.SUBJECT + SubjectService.SEARCH);
  }

  getSubjectSeason(subjectReference: String): Observable<Season[]> {
    return this.httpService
      .get(EndPoints.SUBJECT+ SubjectService.SEASON + '/' + subjectReference);
  }

  getAllSubjectsReferences(): Observable<String[]> {
    /*return this.httpService
      .get(EndPoints.SUBJECT + SubjectService.REFERENCES);*/
    return of(["613000095", "613000096"]);
  }

  getAllSeasonReferences() : Observable<String[]> {
    /*return this.httpService
      .get(EndPoints.SUBJECT + SubjectService.REFERENCES);*/
    return of(["613000095", "613000096"]);
  }

}
