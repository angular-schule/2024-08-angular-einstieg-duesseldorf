import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { Book } from '../shared/book';
import { CurrencyPipe } from '@angular/common';
import { EuroPipe } from '../euro.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [EuroPipe, RouterLink],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {

  // Output: hier dürfen Daten zur Elternkomponente
  // hinausfließen. von unten nach oben
  // @Output() addCart = new EventEmitter<Book>();
  addCart = output<Book>();

  // Input: hier dürfen Daten von der Elternkomponente
  // hineinfließen. von oben nach unten
  // @Input() book?: Book;
  book = input.required<Book>();

  addToCart() {
    this.addCart.emit(this.book());
  }
}
