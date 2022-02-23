import {Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  constructor() {}
islogged(){
  let userLogged=localStorage.getItem('isUserValid')
  if(userLogged!==null){
    return JSON.parse(userLogged)
  }
}
}
