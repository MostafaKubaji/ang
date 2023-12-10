import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  product = new Product();
  products: Product[] = [];
  constructor(private http: HttpClient) { }

  url: string = "";
  pageSize: number = 5;
  pageNumber: number = 1;

  postProduct(product: any) {
    return this.http.post(this.url, this.product);
  }

  getProductById(id: string) {
    return this.http.get(this.url + "/" + id);
  }

  updateProductData(id: string, data: any) {
    return this.http.put(this.url + "/" + id, data);
  }
  tt = [{
    "id": "1",
    "name": "Iphon 15 pro max",
    "price": 45,
    "description": "is butifull"
  },
  {
    "id": "2",
    "name": "Iphon 12 pro max",
    "price": 400,
    "description": "is butifull"
  },
  {
    "id": "3",
    "name": "Redmi 10 pro",
    "price": 120,
    "description": "is vey good"
  },
  {
    "id": "4",
    "name": "hawawi",
    "price": 100,
    "description": "is bad"
  },
  {
    "id": "5",
    "name": "hawawi",
    "price": 100,
    "description": "is bad"
  }];
  getAlProducts() {
    this.http.get<Product[]>(this.url + "/all?PageNumber=" + this.pageNumber + "&PageSize=" + this.pageSize).subscribe(

      res => {
        this.products = res as Product[];
      }
    );
    this.products = this.tt as Product[];
  }

  deleteProduct(id: string) {
    return this.http.delete(this.url + '/' + id);
  }

  next() {
    this.pageNumber += 1;
  }
  Previous() {
    if (this.pageNumber > 1) {
      this.pageNumber -= 1;
    }
  }
}
