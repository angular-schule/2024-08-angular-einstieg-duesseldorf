import { Component, computed, input } from '@angular/core';
import { Book } from '../shared/book';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-display',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart-display.component.html',
  styleUrl: './cart-display.component.scss'
})
export class CartDisplayComponent {
  // Input: hier fließen Daten von der Elternkomponente hinein (von oben nach unten)
  books = input.required<Book[]>();

  // Gesamtpreis des Warenkorbs:
  // bei Änderungen an `this.books` wird Computed Signal neu berechnet
  totalValue = computed(() => this.books().reduce((acc, book) => acc + book.price, 0));
}
