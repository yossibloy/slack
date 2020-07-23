import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class datdService {

  workspace: {email: ""
  name: ""
  password: ""}


  constructor(public http: HttpClient) {
    this.getdb().subscribe(r => {
      r.forEach(element => {
        this.workspaces.push(element.workspace);

      });
    })
  }

  userExists(username): boolean {
    return this.workspaces.some(el => {
      this.workspace = el;
      console.log( this.workspace );
    
      return el.name == username;
    });
  }

  workspaces: any[] = [];
  workspacesName: string = "";
  Error: boolean = false

  url = "https://5f1454912710570016b37e66.mockapi.io/workspaces"

  getdb(): Observable<any> {
    return this.http.get<any>(this.url)
  }

  postdb(val: string) {

    return this.http.post(this.url, { workspace: val }).subscribe(res => console.log(res));


  }
}

