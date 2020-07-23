import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { datdService } from 'src/app/servises/servisdatd.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private svc:datdService) { }

  crate = new FormGroup({
  name: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })


  ngOnInit(): void {
  }
  oncreate(){
      this.svc.postdb(this.crate.value);
      console.log("מעבר לצאט!!!");
      
  }
}
