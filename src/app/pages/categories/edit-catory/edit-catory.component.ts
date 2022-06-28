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

  selectedOption: any;

  categoryForm = new FormGroup({
    categoryName:new FormControl(),
    categoryLanguage: new FormControl(),
    categorySlug: new FormControl(),
    categoryDescription: new FormControl(),
    categoryKeyword: new FormControl(),
    categoryOrder: new FormControl(),
    categoryShowMenu: new FormControl(),
  })

  constructor(private fb: FormBuilder, private categoriesService: CategoriesService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.categoriesService.getCategories();
    this.categoriesService.viewCategory(this.route.snapshot.params['id']).subscribe((data:any)=>{
      this.categoryForm = new FormGroup({
        categoryName: new FormControl(data['categoryName']),
        categoryLanguage: new FormControl(data['categoryLanguage']),
        categorySlug: new FormControl(data['categorySlug']),
        categoryDescription: new FormControl(data['categoryDescription']),
        categoryKeyword: new FormControl(data['categoryKeyword']),
        categoryOrder: new FormControl(data['categoryOrder']),
        categoryShowMenu: new FormControl(data['categoryShowMenu']),
      })
      console.log(this.route.snapshot.params['id'],this.categoryForm.value);
    })
  }

  updateCategory(){
    console.log(this.route.snapshot.params['id'],this.categoryForm.value);
    this.categoriesService.updateCategory(this.route.snapshot.params['id'],this.categoryForm.value).subscribe((data)=>{
      console.log(data['categoryName']);
      
    })
    this.router.navigate(['/categories/view-category'])
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

}
