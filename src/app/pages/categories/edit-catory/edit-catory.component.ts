import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-edit-catory',
  templateUrl: './edit-catory.component.html',
  styleUrls: ['./edit-catory.component.scss']
})
export class EditCatoryComponent implements OnInit {

  categoryForm = new FormGroup({
    categoryName:new FormControl(),
    categoryLanguage: new FormControl(),
    categorySlug: new FormControl(),
    categoryDescription: new FormControl(),
    categoryKeyword: new FormControl(),
    categoryOrder: new FormControl(),
    categoryShowMenu: new FormControl(),
    categoryDate: new FormControl()
  })

  constructor(private fb: FormBuilder, private categoriesService: CategoriesService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.categoriesService.getCategories();
    console.log(this.route.snapshot.params['id']);
    this.categoriesService.viewCategory(this.route.snapshot.params['id']).subscribe((data:any)=>{
      this.categoryForm = new FormGroup({
        categoryName: new FormControl(data['categoryName']),
        categoryLanguage: new FormControl(data['categoryLanguage']),
        categorySlug: new FormControl(data['categorySlug']),
        categoryDescription: new FormControl(data['categoryDescription']),
        categoryKeyword: new FormControl(data['categgoryKeyword']),
        categoryOrder: new FormControl(data['categoryOrder']),
        categoryShowMenu: new FormControl(data['categoryShowMenu']),
        categoryDate: new FormControl(data['categoryDate'])
      })
    })
  }

  updateCategory(){
    console.log(this.route.snapshot.params['id'],this.categoryForm.value);
    this.categoriesService.updateCategory(this.route.snapshot.params['id'],this.categoryForm.value).subscribe((data)=>{
      console.log(data['categoryName']);
      
    })
    this.router.navigate(['/categories/view-category'])
  }

}
