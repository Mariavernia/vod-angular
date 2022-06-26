import {HttpService} from "../../core/http.service";
import {Observable, of} from "rxjs";
import {Subject} from "./models/subject.model";
import {Injectable} from "@angular/core";
import {EndPoints} from "../../share/end-points";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {HandleError, HttpErrorHandler} from "../../core/http-error-handler.service";
import {Season} from "./models/season.model";

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
  static REFERENCE = "/reference";

  private handleError: HandleError;

  constructor(private httpService: HttpService, private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('SubjectService');
  }

  create(subject: Subject): Observable<any> {
    console.log("SUBJECT En endpoint: " +  subject.authors[0])
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
    return this.httpService
      .get(EndPoints.SUBJECT + SubjectService.REFERENCE);
  }



}
