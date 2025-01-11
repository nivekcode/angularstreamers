import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShuffleService {

  public shuffle<T>(items: T[]): T[] {
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Random index
      [items[i], items[j]] = [items[j], items[i]];  // Swap elements
    }
    return items;
  }
}
