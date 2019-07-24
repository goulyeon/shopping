import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  //장바구니 목록이 담겨있다.
  items;
  //주문하기폼
  checkoutForm;

  constructor(private cartService: CartService, private formBuilder: FormBuilder,) { 
    //생성자 호출시 카트서비스 항목중 getItems()메소드를 호출하여 현재 장바구니에 담겨진 목록을 
    //리턴받아서 items에 저장
    this.items = this.cartService.getItems();
    //주문하기폼에 저장할 값은 이름과 주소
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
  }

  //주문하기를 누르면 수행하는 기능
  onSubmit(customerData) {
    // 주문 로직은 여기에 구현합니다.
    alert('주문하기가 완료되었습니다.');
    console.warn('주문하기가 완료되었습니다.', customerData);
    
    //장바구니를 비운다.
    this.items = this.cartService.clearCart();
    //주문하기 폼을 reset한다.
    this.checkoutForm.reset();
  }

}
