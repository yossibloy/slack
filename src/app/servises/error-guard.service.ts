import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { datdService } from './servisdatd.service';

@Injectable({
  providedIn: 'root'
})

  export class ErrorGuardService implements CanActivate {

    constructor(private svc: datdService){}
  
    canActivate():boolean{
    if(this.svc.Error){
      return true;
    }
    else{return false}
  }
    
  }


