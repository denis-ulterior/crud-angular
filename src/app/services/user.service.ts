import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUlr = 'https://sheet.best/api/sheets/4a627dff-1090-4eb9-bc42-a8fef311479e'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  //Retorna a lista de usuários
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUlr)
  }
  //Salvar no banco
  postUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiUlr, user,this.httpOptions)
  }

  //exclui o usuario
  deleteUser(id:number):Observable<User>{
    return this.httpClient.delete<User>(`${this.apiUlr}/id/${id}`)
  }

  //edita user
  updateUser(id:string,user:User):Observable<User>{
    return this.httpClient.put<User>(`${this.apiUlr}/id/${id}`,user,this.httpOptions)
  }
  //pega por id
  getUser(id:string):Observable<User>{
    return this.httpClient.get<User>(`${this.apiUlr}/id/${id}`)
  }
}
