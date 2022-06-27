import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategories(){
    let url = environment.CATEGORY_BASE_URL + environment.CATEGORIES.GET_ALL_CATEGORIES;
    return this.http.get<any[]>(url);
  }

  viewCategory(id:any){
    let url = `${environment.CATEGORY_BASE_URL + environment.CATEGORIES.GET_CATEGORY_DETAILS}/${id}`;
    return this.http.get<any[]>(url);
  }

  addCategory(data:any){
    let url = environment.CATEGORY_BASE_URL + environment.CATEGORIES.ADD_CATEGORY_DETAILS;
    return this.http.post<any>(data,url);
  }

  deleteCategory(data:any){
    let url =`${environment.CATEGORY_BASE_URL + environment.CATEGORIES.DELETE_CATEGORY_DETAILS}/${data.id}`;
    return this.http.delete<any>(url,data); 
  }

  editCategory(data:any){
    let url = `${environment.CATEGORY_BASE_URL + environment.CATEGORIES.UPDATE_CATEGORY_DETAILS}/${data.id}`;
    return this.http.put<any>(url,data)
  }

  updateCategory(id:any,data:any){
    console.log("Id:"+ id);
    let url = `${environment.CATEGORY_BASE_URL + environment.CATEGORIES.UPDATE_CATEGORY_DETAILS}/${id}`;
    return this.http.put<any>(url,data);
  }

}
