import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  showMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  navigateTo(navigateId: string) {
    document.getElementById(navigateId).scrollIntoView({
      behavior: 'smooth'
    });
    if(this.showMenu) {
      setTimeout(() => {
        window.scrollBy(0, -80);
      }, 800);
    }
    this.showMenu = false;
  }

}
