import { Component, OnInit } from '@angular/core';
import { ProductServicesService } from '../product-services.service';

@Component({
  selector: 'app-product-gallary',
  templateUrl: './product-gallary.component.html',
  styleUrls: ['./product-gallary.component.css'],
})
export class ProductGallaryComponent implements OnInit {
  public imageUrl: string = '';
  public description: string = '';
  public title: string = '';
  public productData: any = [];
  isLoading: boolean = false;
  constructor(private apiServices: ProductServicesService) {}
  ngOnInit(): void {
    this.isLoading = true;
    this.apiServices.getProduct().subscribe((data) => {
      this.productData = data;
      this.isLoading = false;
      
      //console.log(data.map(({image}) => ({image})))
    });
  }
}
