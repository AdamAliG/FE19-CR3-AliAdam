import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { Dish } from '../menu/dish.model';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  
  

  items!: Dish[];

  constructor(public cartService: CartService) { }
  
  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }
  
  getTotal() {
    let total = 0;
    for(let item of this.items) {
      total += item.price;
    }
    return total;
  }
}
