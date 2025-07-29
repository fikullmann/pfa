import { Component } from '@angular/core';
import { User } from '../user';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-create-user',
  imports: [FormsModule, JsonPipe],
  templateUrl: './create-user.html',
  styleUrl: './create-user.css'
})
export class CreateUser {
  user = {
    username: '',
    email: '',
    password: '',
    password2: '',
  };

  onSubmit() {
    console.log(this.user.username + ' ' + this.user.password);
  }
}
