import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostofficeService {

  constructor(private http:HttpClient) { }

  apiUrl='http://localhost:3000/posts'

  addUser(user:any){
    return this.http.post(this.apiUrl,user)
  }
  getuser(){
    return this.http.get(this.apiUrl)
}
deleteUser(id:number){
  return this.http.delete(this.apiUrl+id)
}
 updateEmployee(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
}
getUserById(id: number) {
  return this.http.get(`${this.apiUrl}/${id}`);
}

}

