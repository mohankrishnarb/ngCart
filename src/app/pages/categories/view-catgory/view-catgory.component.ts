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
  categoryData: any;
  newCategoryData: any;
  selectedOption: any;
  public term: any = null;
  p: number = 1;

  constructor(private fb: FormBuilder, private categoriesService: CategoriesService,private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.categoryForm = this.fb.group({
      categoryLanguage:['', Validators.required],
      categoryName:['', Validators.required],
      categorySlug:['',Validators.required],
      categoryDescription:['',Validators.required],
      categoryKeyword:['', Validators.required],
      categoryOrder:['', Validators.required],
      categoryShowMenu:['',Validators.required]
    });

    this.getCategoryList();
    this.activatedRoute.params.subscribe(data=>{
      this.categoryId = data['id'];
    })
  }

  get f(){
    return this.categoryForm.controls
  }

  getCategoryList(){
    this.categoriesService.getCategories().subscribe((data: any[]) => {
      this.categoryData = data;
      this.categoryList = this.categoryData.results;
      console.log(this.categoryData);
    })
  }

  options = [
    {name: 'Arabic', value: 1},
    {name: 'Engilsh', value: 2}
  ]

  languages = [
    {name:'All', value:1},
    {name:'Arabic', value: 2},
    {name:'Engilsh', value: 3}
  ]


  onSubmit(data:any){
    console.log("hello this is used for testing");
    
    this.categoriesService.addCategory(data).subscribe((data:any[])=>{
      this.categoryData = data;
      console.log("dummy:" , data);
      
      this.newCategoryData = this.categoryData.results;
      console.log(this.categoryData);
    })
    this.router.navigate(['/categories/view-category']).then(()=>{
      window.location.reload();
    })
  }

  deleteCategory(data:any){
    this.categoriesService.deleteCategory(data).subscribe((data:any)=>{
      console.log("deleted data",data);
      this.categoryData = 'successfully deleted category details'
    })
    this.router.navigate(['/categories/view-category']).then(()=>{
      window.location.reload();
    })
  }

}
