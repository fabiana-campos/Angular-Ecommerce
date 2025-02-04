import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = signal<Product[]>([]);

  addToCart(product: Product){ //função para adicionar no carrinho
    this.cart.set([...this.cart(), product]);
  }  

  constructor() { }
}
