import {Injectable} from "@angular/core";
import {HandleError, HttpErrorHandler} from "../core/http-error-handler.service";
import {HttpService} from "../core/http.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserRegister} from "./userRegister.model";
import {Observable} from "rxjs";
import {EndPoints} from "../share/end-points";
import {catchError, map} from "rxjs/operators";
import {User} from "./user.model";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Role} from "./role.model";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root',
})

export class UserService {

  static TOKEN = "/token";
  // @ts-ignore
  private user: User;

  private handleError: HandleError;

  constructor(private httpService: HttpService, private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('SubjectService');
  }

  create(user: UserRegister): Observable<any> {
    console.log("ya en el :" + user.role + " " + user.email);
    return this.http.post<UserRegister>(EndPoints.USER, user, httpOptions)
      .pipe(
        catchError(this.handleError('addUser', user))
      );
  }

  // @ts-ignore
  login(userActive: UserRegister): Observable<User> {
    console.log("On submit: " + userActive.email);
    return this.http
      .post<User>(EndPoints.USER + UserService.TOKEN, userActive, httpOptions);
      /*.pipe(
        map(jsonToken => {
          const jwtHelper = new JwtHelperService();
          this.user = jsonToken;
          this.user.email = jwtHelper.decodeToken(jsonToken.token).user;
          this.user.name = jwtHelper.decodeToken(jsonToken.token).name;
          this.user.role = jwtHelper.decodeToken(jsonToken.token).role;
          return this.user;
        })
      );*/
  }

  untilOperator(): boolean {
    return this.hasRoles([Role.ADMIN, Role.PROFESSOR, Role.STUDENT]);
  }
  hasRoles(roles: Role[]): boolean {
    return this.isAuthenticated() && roles.includes(<Role>this.user.role);
  }

  isAuthenticated(): boolean {
    return this.user != null && !(new JwtHelperService().isTokenExpired(this.user.token));
  }

}
