import { Component, OnInit  } from '@angular/core';
import { Dish } from './dish.model';
import { CartService } from '../order/cart.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  
  constructor(private cartService: CartService) { }

  orderDish(dish: Dish): void {
    this.cartService.addToCart(dish);
  }


  dishes: Dish[] = [
    new Dish('Pizza Inferno', 'https://floresti.pizzapocoloco.ro/278-large_default/pizza-inferno.jpg', 'A delicious classic pizza with tomato and chilli, mozzarella, and basil', 15.50, true),

    new Dish('Pizza cappriciosa', 'https://www.italianstylecooking.net/wp-content/uploads/2022/01/Pizza-capricciosa-1200x900.jpg', 'A tasty pizza topped with slices of pepperoni', 12.20, true),
    
    new Dish('Pizza Margherita', 'https://img.taste.com.au/DhThzPm9/taste/2016/11/eat-pray-love-39581-3.jpeg', 'A tasty pizza topped with slices of pepperoni', 11.10, false),

    new Dish('Pizza prosciutto', 'https://www.gutekueche.ch/upload/rezept/12049/1600x900_pizza-prosciutto-e-fungi.jpg', 'A tasty pizza topped with slices of pepperoni', 11, true),

    new Dish('Penne al gorgonzola', 'https://www.eatclub.tv/wp-content/uploads/sites/4/2022/05/pizza-gorgonzola-mit-honig.jpg', 'A tasty pizza topped with slices of pepperoni', 14, false),

    new Dish('Classic tiramisu', 'https://static01.nyt.com/images/2017/04/05/dining/05COOKING-TIRAMISU1/05COOKING-TIRAMISU1-articleLarge.jpg', 'A tasty pizza topped with slices of pepperoni', 11, true),

    new Dish('Spaghetti Carbonara', 'https://ais.kochbar.de/kbrezept/297430_1134691/1500x1500/spaghetti-carbonara-mit-kraeutern-rezept-bild-nr-3.jpg', 'A tasty pizza topped with slices of pepperoni', 11, false)
  ];
  

}
