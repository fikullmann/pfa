import { Component } from '@angular/core';
import { User } from '../user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  imports: [FormsModule],
  templateUrl: './create-user.html',
  styleUrl: './create-user.css'
})
export class CreateUser {
  user: User = {
    id: 1,
    name: '',
    poms: []
  };
}
