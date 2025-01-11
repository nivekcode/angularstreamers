import {inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable()
export class ThemeSwitcherService {

  #document = inject(DOCUMENT);

  darkMode(){
    this.#document.body.classList.remove('light');
    this.#document.body.classList.add('dark');
  }

  lightMode(){
    this.#document.body.classList.remove('dark');
    this.#document.body.classList.add('light');
  }
}
