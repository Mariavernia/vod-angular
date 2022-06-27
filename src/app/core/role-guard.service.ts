import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router} from "@angular/router";
import {UserService} from "../users/user.service";
import {Role} from "../users/role.model";

@Injectable({
  providedIn: 'root',
})
export class RoleGuardService implements CanActivate {
  constructor(public auth: UserService, public router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const roles: Role[] = route.data['roles'];
    if (this.auth.hasRoles(roles)) {
      console.log("ROLEEESSS");
      return true;
    } else {
      this.router.navigate(['']).then();
      console.log("NO HA ENTRADO");
      return false;
    }
  }

}
