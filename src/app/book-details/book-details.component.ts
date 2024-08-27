import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss'
})
export class BookDetailsComponent {
  // ISBN aus der URL lesen
  // HTTP Buch laden BookStoreService

  private route = inject(ActivatedRoute);
  private bs = inject(BookStoreService);

  book = signal<Book | undefined>(undefined);
  bookX = toSignal(this.bs.getSingle(this.route.snapshot.paramMap.get('isbn')!))

  constructor() {
    const isbn = this.route.snapshot.paramMap.get('isbn')!; // Non-Null Assertion
    this.bs.getSingle(isbn).subscribe(book => {
      this.book.set(book);
    });
  }

}
