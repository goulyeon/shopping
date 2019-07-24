import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

//컴포넌트 전역에서 사용될 기능목록을 가지고 있는 서비스
export class CartService {
  //장바구니에 담길 아이템 목록
  items = [];

  constructor(private http: HttpClient) { }

  //장바구니 담기
  addToCart(product) {
    this.items.push(product);
  }

  //아이템 목록 얻기
  getItems() {
    return this.items;
  }

  //장바구니 비우기
  clearCart() {
    this.items = [];
    return this.items;
  }

  //배송비용 정보 가져오기 
  getShippingPrices() {
    return this.http.get('assets/shipping.json');
  }

}
