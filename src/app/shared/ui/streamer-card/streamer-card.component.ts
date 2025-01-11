import {ChangeDetectionStrategy, Component, input} from '@angular/core';

import {Streamer} from '../../../core/streamers';

@Component({
  selector: 'streamer-card',
  template: `
    <div class="card">
      <div class="card-header">
        <span class="name-white">{{ streamer().name }}</span>
        <div class="streaming-platforms-row">
          @if (streamer().youtube) {
            <a [href]="streamer().youtube" target="_blank">
              <img src="socials/youtube.svg"/>
            </a>
          }

          @if (streamer().twitch) {
            <a [href]="streamer().twitch" target="_blank">
              <img src="socials/twitch.svg"/>
            </a>
          }
        </div>
      </div>
      <img [src]="'streamers/' + streamer().imageUrl + '.webp'"/>
      <div class="card-content">
        <div class="card-description">
          {{ streamer().description }}
        </div>
      </div>
    </div>
  `,
  styleUrl: 'streamer-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StreamerCardComponent {
  streamer = input.required<Streamer>();
}
