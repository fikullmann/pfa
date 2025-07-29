import { Component } from '@angular/core';
import { FormsModule, FormGroup} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  username = '';
  password = '';
  login_form!: FormGroup;

  onSubmit() {
    console.log("submitted");
  }
}
