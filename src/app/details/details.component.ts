import { Component, OnInit } from '@angular/core';
import { CartService } from '../order/cart.service';
import { Dish } from '../menu/dish.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  cartItems: Dish[] = [];
  cartTotal!: number;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
    this.cartTotal = this.cartService.getFinalTotal();
  }

  
  addToCart(dish: Dish) {
    this.cartService.addToCart(dish);
    this.cartTotal = this.cartService.getFinalTotal(); 
  }
 
}
