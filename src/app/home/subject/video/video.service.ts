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
    console.log("ha entrado a video service: " + seasonReference)
    /*return of([
      {name: "YouTube video player", description: "wefewrgrwt", link: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/qIDW6VZHJY4\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>", seasonReference: "wefg2ew4t"},
      {name: "YouTube video player", description: "wefewrgrwt", link: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/qIDW6VZHJY4\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>", seasonReference: "wefg2ew4t"},
      {name: "YouTube video player", description: "wefewrgrwt", link: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/qIDW6VZHJY4\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>", seasonReference: "wefg2ew4t"},
      {name: "YouTube video player", description: "wefewrgrwt", link: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/qIDW6VZHJY4\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>", seasonReference: "wefg2ew4t"},
      {name: "YouTube video player", description: "wefewrgrwt", link: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/qIDW6VZHJY4\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>", seasonReference: "wefg2ew4t"},
      {name: "YouTube video player", description: "wefewrgrwt", link: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/qIDW6VZHJY4\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>", seasonReference: "wefg2ew4t"},
    ]);*/
    return this.httpService.get(EndPoints.SEASON + '/'+ seasonReference + "/video");


  }

}
