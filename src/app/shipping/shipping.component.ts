import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  //배송비용 정보
  shippingCosts;

  constructor(private cartService: CartService) { 
    //생성자 호출시 카트서비스 항목중에 getShippingPrices()호출해서 배송비용 정보에 저장
    this.shippingCosts = this.cartService.getShippingPrices();
  }

  ngOnInit() {
  }

}
