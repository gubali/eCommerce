import { Injectable } from '@angular/core';
import { apiEndPoint } from 'src/app/constant/constant';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs';

// interface ItemsResponseObj {
//   id: string,
//   title: string,
//   price: string,
//   description:string,
//   category:string
//   image
// }
@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {
  readonly apiEndPoint = 'https://fakestoreapi.com/';
  constructor(private http:HttpClient) { }
  getProduct(){
    return this.http.get(`${apiEndPoint}products`);
  }
}
