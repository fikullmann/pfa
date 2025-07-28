import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [NgOptimizedImage, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

}
