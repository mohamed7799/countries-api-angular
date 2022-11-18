import { Component, OnInit } from '@angular/core';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  //variables
  faMoon = faMoon;
  theme: string = 'light';
  constructor() {}

  ngOnInit(): void {
    document.documentElement.classList.add(this.theme);
  }

  //functions

  changeTheme() {
    document.documentElement.classList.remove(this.theme);
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    document.documentElement.classList.add(this.theme);
  }
}
