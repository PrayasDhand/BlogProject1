import { Component } from '@angular/core';
import { AddCategoryRequest } from '../Models/add-category-request.model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  model: AddCategoryRequest;

  constructor(private cs:CategoryService){
    this.model =  
    {
      name:'',
      urlHandle:''
    };
  }

  onFormSubmit(){
this.cs.addCategory(this.model).subscribe({
  next:(response)=>{
  console.log("This was successful!");
  },
  error:(error)=>{

  }
});
  }

}
