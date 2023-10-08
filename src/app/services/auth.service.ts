import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUsuario } from '../models/login-usuario';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'http://localhost:8080/authenticate';

  constructor(private http:HttpClient,
    private jwtHelper: JwtHelperService) { }

  public login(loginUsuario:LoginUsuario){
    return this.http.post<LoginUsuario>(this.authURL,loginUsuario)
  }

  public isAuth():boolean
  {
    const jwttoken = localStorage.getItem('jwttoken');
    if(this.jwtHelper.isTokenExpired(jwttoken) || !localStorage.getItem("jwttoken"))
    {
      return false
    }

    return true;
  }
}
