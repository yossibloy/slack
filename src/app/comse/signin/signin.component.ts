import { Component, OnInit, ViewChild, ElementRef, Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { datdService } from 'src/app/servises/servisdatd.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  checkError: boolean = false

  

  signin = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(2)])
  })

  constructor(private svc: datdService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    
    if (this.svc.userExists(this.signin.value.username)) {

      this.svc.workspacesName = this.signin.value.username
      this.svc.Error = true
  
    }
    else {
      this.svc.Error = false
      this.checkError = true
      this.svc.workspacesName =""
    }
  }
  

}
