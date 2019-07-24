import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    //처음 컴포넌트를 실행할 때 초기화해야할 것들을 안쪽에서 수행한다.
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

  //장바구니에 상품 담기
  addToCart(product) {
    window.alert('제품을 장바구니에 담았습니다.');
    //실제로 장바구니에 담기위해서 카트서비스 항목중에 addToCart()메소드를 호출해서 사용한다. 
    this.cartService.addToCart(product);
  }

}
