import { Component } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  books: Book[] = [];

  constructor() {
    this.books = [
      {
        isbn: '12345',
        title: 'Angular',
        description: 'Grundlagen und Best Practices',
        rating: 5,
        price: 36.9,
        firstThumbnailUrl: 'https://api.angular.schule/avatar/5',
      },
      {
        isbn: '23456',
        title: 'React',
        description: 'Das Framework von Facebook',
        rating: 3,
        price: 32.9,
        firstThumbnailUrl: 'https://api.angular.schule/avatar/3',
      },
      {
        isbn: '34567',
        title: 'Vue.js',
        description: 'Grün und vunderbar',
        rating: 5,
        price: 29.9,
        firstThumbnailUrl: 'https://api.angular.schule/avatar/4',
      },
    ]
  }
}






