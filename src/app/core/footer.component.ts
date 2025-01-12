import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `

    Made with ❤️ by <a href="https://x.com/nivekcode" target="_blank">Nivek</a>
  `,
  styles: `

    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 60px;
      font-size: 18px;
      border-top: 1px solid var(--ngs-border-color);
      box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
      padding: 48px;
      width: 100%;
      font-family: "Nanum Gothic", sans-serif;
      color: var(--ngs-text-color);
    }

    a {
      font-family: "Rock Salt", cursive;
      font-size: 24px;
      cursor: pointer;
      margin-left: 8px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
}
