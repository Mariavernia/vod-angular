import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {HandleError, HttpErrorHandler} from "../../../core/http-error-handler.service";
import {HttpService} from "../../../core/http.service";
import {Video} from "../models/video.model";
import {Observable, of} from "rxjs";
import {EndPoints} from "../../../share/end-points";
import {catchError} from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn:"root"
})
export class VideoService{

  private handleError: HandleError;

  constructor(private httpService: HttpService, private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('SeasonService');
  }

  create(video: Video): Observable<any> {
    return this.http.post<Video>(EndPoints.VIDEO, video, httpOptions)
      .pipe(
        catchError(this.handleError('addVideo', video))
      );
  }

  getVideosBySeason(seasonReference: String): Observable<Video[]> {
    return this.httpService.get(EndPoints.SEASON + '/'+ seasonReference + "/video");
  }

}
