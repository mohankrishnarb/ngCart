import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-view-catgory',
  templateUrl: './view-catgory.component.html',
  styleUrls: ['./view-catgory.component.scss']
})
export class ViewCatgoryComponent implements OnInit {

  categoryForm!: FormGroup;
  submitted: boolean = false;
  categoryId:string = '';
  categoryResult:any;
  categoryList: any; 

  constructor(private fb: FormBuilder, private categoriesService: CategoriesService,private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      categorySelect:['', Validators.required],
      categoryName:['', Validators.required],
      categorySlug:['',Validators.required],
      categoryDesc:['',Validators.required],
      categoryKey:['', Validators.required],
      categoryOrder:['', Validators.required],
      categoryMenu:['',Validators.required]
    });

    this.getCategoryList();
    this.activatedRoute.params.subscribe(data=>{
      this.categoryId = data['id'];
      console.log(this.categoryId);
    })
  }

  get f(){
    return this.categoryForm.controls
  }

  getCategoryList(){
    this.categoriesService.getCategories().subscribe((data: any[]) => {
      this.categoryResult = data;
      this.categoryList = this.categoryResult.results;
      console.log(this.categoryResult);
    })
  }

  onSubmit(){

  }

}
