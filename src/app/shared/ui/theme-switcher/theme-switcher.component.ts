import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {DOCUMENT} from '@angular/common';

import {ThemeSwitcherService} from './theme-switcher.service';

@Component({
  selector: 'theme-switcher',
  template: `
      <div class="thumb"></div>
  `,
  styleUrl: 'theme-switcher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ThemeSwitcherService],
  host: {
    '[class.light]': 'light()',
    '[class.dark]': '!light()',
    '(click)': 'toggleTheme()'
  }
})
export class ThemeSwitcherComponent {
  #document = inject(DOCUMENT);
  #themeSwitcherService = inject(ThemeSwitcherService);

  light = signal(this.#getPreferedColorScheme());

  toggleTheme() {
    this.light.update(v => !v);

    if (this.light()) {
      this.#themeSwitcherService.lightMode();
    } else {
      this.#themeSwitcherService.darkMode();
    }
  }

  #getPreferedColorScheme() {
    if (!this.#document.defaultView?.matchMedia) {
      return false;
    }
    return !this.#document.defaultView?.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}
