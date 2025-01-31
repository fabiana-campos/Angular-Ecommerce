import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  template: '<app-header />',
  styles: '',
})
export class AppComponent {
  title = 'angular-ecomm';
}
