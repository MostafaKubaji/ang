import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  numPages: number = 1;
  numSize: number = this.service.pageSize;

  constructor(public service: ProductService, private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.service.getAlProducts();
  }

  next() {
    this.numPages += 1;
    this.numSize = this.service.pageSize * this.numPages;
    this.service.next();
    this.service.getAlProducts();
  }

  Previous() {
    if (this.numPages > 1) {
      this.numPages -= 1;
      this.numSize -= this.service.pageSize;
      this.service.Previous();
      this.service.getAlProducts();
    }
  }

  deletePat(id: string) {
    let con = confirm("Do you need to delete item");
    if (con) {
      this.service.deleteProduct(id).subscribe(res => {
        this.service.getAlProducts();
      });
    }
  }
}
