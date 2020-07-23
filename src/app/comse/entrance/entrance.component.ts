import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { datdService } from 'src/app/servises/servisdatd.service';

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.css']
})
export class EntranceComponent implements OnInit {
  checkError2: boolean = false

  Entrance = new FormGroup({
    gmail: new FormControl('', [Validators.required, Validators.email]),
    pasword: new FormControl('', [Validators.required, Validators.minLength(6)])
  })


  constructor(public svc:datdService) { }
  wN:string =this.svc.workspacesName

  ngOnInit(): void {
  }
  onSubmit() { 
     if(this.Entrance.value.gmail==this.svc.workspace.email && this.Entrance.value.pasword==this.svc.workspace.password){
       console.log("מעבר לצאט!!!");
     }else{
      this.checkError2 = true

     }
     
  }

  
}
