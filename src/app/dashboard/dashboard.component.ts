import { Component, inject, signal } from '@angular/core';
import { Book } from '../shared/book';
import { BookComponent } from '../book/book.component';
import { CartDisplayComponent } from '../cart-display/cart-display.component';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BookComponent, CartDisplayComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  books = signal<Book[]>([]);
  cart = signal<Book[]>([]);

  private bs = inject(BookStoreService);

  constructor() {
    this.bs.getAll().subscribe(books => {
      // this.books = books;
      this.books.set(books);
    })
  }


  addToCart(book: Book) {
    // this.cart.push(book); // !!!
    // this.cart = [...this.cart, book];

    this.cart.update(currentCart => [...currentCart, book]);
    // this.cart.set([...this.cart(), book]);
  }
}






