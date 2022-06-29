import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubcategoryService {

  constructor(private http: HttpClient) { }

  getSubCategory(){
    let url = environment.SUB_CATEGORY_BASE_URL + environment.SUB_CATEGORIES.GET_ALL_SUBCATEGORIES;
    return this.http.get<any>(url);
  }

  viewSubCategory(id:any){
    let url = `${environment.SUB_CATEGORIES + environment.SUB_CATEGORIES.GET_SUBCATEGORY_DETAILS}/${id}`;
    return this.http.get<any>(url);
  }

  addSubCategory(data:any){
    let url = environment.SUB_CATEGORY_BASE_URL + environment.SUB_CATEGORIES.ADD_SUBCATEGORY_DETAILS;
    return this.http.post<any>(url,data);
  }

  editSubCategory(data:any){
    let url = `${environment.SUB_CATEGORY_BASE_URL + environment.SUB_CATEGORIES.UPDATE_SUBCATEGORY_DETAILS}/${data.id}`
    return this.http.put<any>(url,data);
  }

  updateSubCategory(id:any,data:any){
    let url = `${environment.SUB_CATEGORY_BASE_URL + environment.SUB_CATEGORIES.UPDATE_SUBCATEGORY_DETAILS}/${id}`;
    return this.http.put<any>(url,data)
  }

  deleteSubCategory(data:any){
    let url = `${environment.SUB_CATEGORY_BASE_URL + environment.SUB_CATEGORIES.ADD_SUBCATEGORY_DETAILS}/${data.id}`;
    return this.http.delete<any>(url,data)
  }

}
