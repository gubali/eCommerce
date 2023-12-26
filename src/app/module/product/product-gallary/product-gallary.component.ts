import { Component, OnInit } from '@angular/core';
import { ProductServicesService } from '../product-services.service';

@Component({
  selector: 'app-product-gallary',
  templateUrl: './product-gallary.component.html',
  styleUrls: ['./product-gallary.component.css'],
})
export class ProductGallaryComponent implements OnInit {
  public imageUrl:string = '';
  public description:string = '';
  public title:string = '';
public productData:any = [];
  constructor(private apiServices:ProductServicesService){}
ngOnInit(): void {
  this.apiServices.getProduct().subscribe(data =>{
    this.productData = data;
    //console.log(data.map(({image}) => ({image})))
  })
}
}
