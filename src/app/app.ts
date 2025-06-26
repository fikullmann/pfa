import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserHome } from './user-home/user-home';

@Component({
  selector: 'app-root',
  imports: [UserHome],
  template: `
  <h1>Hello world!</h1>
  <app-user-home />
  `,
  styleUrl: './app.css'
})
export class App {
  protected title = 'pomfight adventure';
}
