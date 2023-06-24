import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedButton = '';
  imageSource = '';
  
  handleClick(button: string, imageUrl: string) {
    this.selectedButton = button;
    this.imageSource = imageUrl;

    
  }

  resetButton() {
    this.selectedButton = '';
    this.imageSource = '';
  }
}
