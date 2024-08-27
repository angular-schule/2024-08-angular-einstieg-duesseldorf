import { Component, inject, signal } from '@angular/core';
import { Book } from '../shared/book';
import { BookComponent } from '../book/book.component';
import { CartDisplayComponent } from '../cart-display/cart-display.component';
import { BookStoreService } from '../shared/book-store.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BookComponent, CartDisplayComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  private bs = inject(BookStoreService);

  // books = signal<Book[]>([]);
  books = toSignal(this.bs.getAll());
  cart = signal<Book[]>([]);


  constructor() {
    /*this.bs.getAll().subscribe(books => {
      // this.books = books;
      this.books.set(books);
    })*/
  }


  addToCart(book: Book) {
    // this.cart.push(book); // !!!
    // this.cart = [...this.cart, book];

    this.cart.update(currentCart => [...currentCart, book]);
    // this.cart.set([...this.cart(), book]);
  }
}






