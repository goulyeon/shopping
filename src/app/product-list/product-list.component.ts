import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products=products;
  
  constructor() { }

  ngOnInit() {
  }

  //공유하기 기능 
  share(){
    alert('공유하였습니다.');
  }

  //알림 메세지 기능
  onNotify() {
    window.alert('이제품이 세일을 하면 알려주겠습니다.');
  }

}
