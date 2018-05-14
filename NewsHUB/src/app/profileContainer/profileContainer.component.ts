import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profileContainer',
  templateUrl: './profileContainer.component.html',
  styleUrls: ['./profileContainer.component.css']
})
export class ProfileContainerComponent implements OnInit {
  constructor(public authService: AuthService) { }

  ngOnInit() {
    document.getElementById('logOutBtn').addEventListener('click', () => {
      var logIn = document.getElementById('logOutBtn');
      if (logIn.innerHTML == 'logout' || logIn.innerHTML == 'WYLOGUJ') {
        this.authService.logout();
      }
    });
  }

  signout() {
    this.authService.logout();
  }

}
