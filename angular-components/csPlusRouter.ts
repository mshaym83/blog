import {Routes} from "@angular/router";
import { UserLoginComponent } from "./user/login/user.login.component";
export const csPlusRouter:Routes = [
    {path:'login',component:UserLoginComponent},
    {path:'', component: UserLoginComponent}
];