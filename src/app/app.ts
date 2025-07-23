import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserHome } from './user-home/user-home';
import { Header } from './header/header';


@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  template: `
  <app-header />
  <main>
    <router-outlet />
  </main>
  `,
  styleUrl: './app.css'
})
export class App {
  protected title = 'pomfight adventure';
}
