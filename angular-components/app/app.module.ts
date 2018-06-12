import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../nav/nav.component';
import { UserLoginComponent } from '../user/login/user.login.component';
import { csPlusRouter } from '../csPlusRouter';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(csPlusRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
