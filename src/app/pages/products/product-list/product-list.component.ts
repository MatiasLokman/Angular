import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  loading = false;
  data = '';

  constructor() {}

  ngOnInit(): void {}

  changeLoading(): void {
    this.loading = !this.loading;
  }

  requestData(): void {
    this.loading = true;
    setTimeout(() => {
      this.data = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud`;
      this.loading = false;
    }, 5000);
  }
}
