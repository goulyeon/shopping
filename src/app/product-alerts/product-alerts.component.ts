import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  //Input데코레이터 product 프로퍼티에 할당되는 값이 부모컴포넌트(제목목록product-list)에서 전달된다.
  @Input() product;
  //Output데코레이터 자식컴포넌트에서 이벤트를 보낼때 사용
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
