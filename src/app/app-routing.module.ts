import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './comse/signin/signin.component';
import { EntranceComponent } from './comse/entrance/entrance.component';
import { CreateComponent } from './comse/create/create.component';
import { ErrorGuardService } from './servises/error-guard.service';


const routes: Routes = [
  {path:"signin",component: SigninComponent},
  {path:"signin/Entrance",component: EntranceComponent,
  canActivate:[ErrorGuardService]},
  {path:"signin/create",component: CreateComponent},
  {path: '', redirectTo: 'signin', pathMatch: 'full' },
  {path: '**', redirectTo: 'signin', pathMatch: 'full' }
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
