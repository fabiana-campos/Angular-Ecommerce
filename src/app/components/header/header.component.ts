import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { CartService } from '../../services/cart.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-header',
  imports: [PrimaryButtonComponent, NgIf],
  standalone: true,
  template: ` <div class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center"> 
    <span class="text-x1"> My Store </span> 
    <app-primary-button [label]="'Cart (' + cartService.cart().length +  ' )'" (btnClicked)="showButtonClicked()"/> </div>`,


  styles: ``,
})
export class HeaderComponent {

  cartService = inject(CartService);

  showButtonClicked(){
    console.log('clicked');
  }
}
