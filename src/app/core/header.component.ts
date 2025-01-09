import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <img src="angular-logo-long.png">
      <span>Streamers</span>
    </header>
  `,
  styles: `
    header {
      display: flex;
      align-items: center;

      padding-left: 12px;

      height: 80px;
      background: #ecf0f3;
      box-shadow: -3px -3px 7px #ffffff,
      3px 3px 5px #ceced1;
    }

    img {
      height: 60px;
    }

    span {
      font-family: "Ubuntu", sans-serif;
      font-weight: bold;
      font-size: 40px;
      padding-bottom: 3px;
      background: -webkit-linear-gradient(left, #9139FF, #F03CF0);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
}
