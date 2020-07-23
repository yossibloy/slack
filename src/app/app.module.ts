import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './comse/signin/signin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './mymoduls/mymoduls.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EntranceComponent } from './comse/entrance/entrance.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './comse/create/create.component';
import { StyleDirectivDirective } from './directives/style-directiv.directive';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    EntranceComponent,
    CreateComponent,
    StyleDirectivDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
