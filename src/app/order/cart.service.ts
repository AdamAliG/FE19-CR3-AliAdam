import { Injectable } from '@angular/core';
import { Dish } from '../menu/dish.model'; 

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: Dish[] = [];

  addToCart(dish: Dish) {
    this.items.push(dish);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getTotal(): number {
    let total = 0;
    for(let item of this.items) {
      total += item.price;
    }
    return total;
  }
  getServiceCharge(): number {
    return this.getTotal() * 0.10;
  }

  getDiscount(): number {
    let total = this.getTotal();
    return total > 40 ? total * 0.15 : 0;
  }

  getFinalTotal(): number {
    let total = this.getTotal();
    return (total + this.getServiceCharge()) - this.getDiscount();
  }
}
