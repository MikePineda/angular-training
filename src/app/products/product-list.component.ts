import { Component, OnInit} from "@angular/core";
import productsJson from '../../api/products/products.json';
import { IProduct } from "./product";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit{
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;

  errorMessage = false;
  showImage:boolean = false;
  products: IProduct[] = productsJson;
  filteredProducts:IProduct[] = [];

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string){
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  performFilter(filterBy:string) : IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().includes(filterBy));
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    console.log("oninit");
    this.filteredProducts = this.products;
  }

}
