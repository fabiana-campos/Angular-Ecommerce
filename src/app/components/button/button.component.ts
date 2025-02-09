import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button class= "text-black w-full px-5 py-2 rounded-x1 shadow-md hover:bg-"
    (click)="btnClicked.emit()">
      {{ label() }}
    </button>
  `,
  styles: ``
})
export class ButtonComponent {
 
  label = input('');
  btnClicked = output();
}
