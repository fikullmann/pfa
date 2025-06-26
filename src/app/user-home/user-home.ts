import { Component, model, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from './user';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-home',
  imports: [FormsModule, DatePipe],
  templateUrl: './user-home.html',
  styleUrl: './user-home.css'
})
export class UserHome {
  currentUser = model<User>(
    { id: 1, name: "Anoi", poms: [] }
  );
  nr: number = 0;

  logPoms() {
    this.currentUser.update ((user: User) => {
      for (let i = 0; i < this.nr; i++) {
        user.poms.push({
          id: user.poms.length,
          datetime: new Date()
        })
      }
      return user;
    } );
    this.nr = 0;
  }
}
