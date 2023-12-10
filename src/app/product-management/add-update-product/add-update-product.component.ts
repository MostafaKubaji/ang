import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { ProductService } from 'src/app/service/product.service';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-update-product',
  templateUrl: './add-update-product.component.html',
  styleUrls: ['./add-update-product.component.css']
})
export class AddUpdateProductComponent implements OnInit {

  constructor(public service: ProductService, private router: Router) { }

  ngOnInit(): void {
    // this.service.product = {
    //   id: "",
    //   name: "",
    //   price: 0,
    //   description: "",
    //   categoryId: ""
    // }

  }

  addPatientData = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
  });

  submit() {
    this.service.postProduct(this.addPatientData).subscribe(
      res => {
        this.service.getAlProducts();
        console.log("add");
        alert("added successfully");
        timeout(2000);
        this.router.navigateByUrl('/productslist');
      },
      err => {
        console.log("error");
      }
    )
  }
}
