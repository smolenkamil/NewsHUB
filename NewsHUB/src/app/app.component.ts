import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
    document.getElementById('logInBtn').addEventListener('click', () => {
      var logIn = document.getElementById('logInBtn');
      if (logIn.innerHTML == 'WYLOGUJ') {
        this.authService.logout();
        document.getElementById('modal').classList.add('hidden');
      }
    });
  }
}
