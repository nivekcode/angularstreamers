import {Component, inject, signal} from '@angular/core';

import {StreamerCardComponent} from './shared/ui/streamer-card/streamer-card.component';
import {FooterComponent} from './core/footer.component';
import {HeaderComponent} from './core/header.component';
import {ShuffleService} from './core/shuffle.service';
import {STREAMERS} from './core/streamers';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, StreamerCardComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  #shuffleService = inject(ShuffleService);
  streamers = signal(this.#shuffleService.shuffle(STREAMERS));
}
