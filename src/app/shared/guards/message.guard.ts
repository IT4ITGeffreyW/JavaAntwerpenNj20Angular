import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {MessageService} from '../../core/services/message.service';

@Injectable({
  providedIn: 'root'
})
export class MessageGuard implements CanActivate {

  constructor(private messageService: MessageService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.messageService.getMessages().length > 3;
  }

}
