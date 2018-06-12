import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
    templateUrl: './user.login.component.html',
    styles: [`input[type="text"]{padding:5px;width:250px;border:1px solid #c9c9c9;}
    em{color:red;padding:0 0 0 10px;}
    `]
})
export class UserLoginComponent{
    userName:string;
    password:string;
    mouserOverLogin;
    constructor(private navrouter : Router){
    }

    cancelLogin(){
        this.navrouter.navigate(['acessdenied']);
    }
    submitLogin(values){
        console.log(values);
    }
}