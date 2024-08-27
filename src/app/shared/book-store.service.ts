import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {
  private http = inject(HttpClient);
  private apiUrl = 'https://api.angular.schule';

  getAll() {
    return this.http.get<Book[]>(`${this.apiUrl}/books`);
    // this.http.get(this.apiUrl + '/books');
  }

  getSingle(isbn: string) {
    return this.http.get<Book>(`${this.apiUrl}/books/${isbn}`);
  }
}
