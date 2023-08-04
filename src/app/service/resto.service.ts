import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RestoService {
url:string='http://localhost:3000/restaurants'
rootUrl:string='http://localhost:3000/'
  navigate: any;
  constructor( private http:HttpClient) { }
  getlist(){
    return this.http.get(this.url)
  }

  saveResto(data:any){
    // console.warn(data)
    return this.http.post(this.url,data)
  }
  deleteResto(id: any){
    return this.http.delete<number>(`${this.url}/${id}`)
  }
  getCurrentResto(id: any){
    return this.http.get(`${this.url}/${id}`)
  }
  updateResto(id: any,data:any){
    return this.http.put(`${this.url}/${id}`,data)
  }
  registerUser(data:any){
    return this.http.post(this.rootUrl+"users", data);
  }
}
