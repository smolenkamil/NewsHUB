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
      var logOut = document.getElementById('logOutBtn');
      if (logOut.innerHTML == 'logout' || logOut.innerHTML == 'WYLOGUJ') {
        this.authService.logout();
      }
    });
  }

  signout() {
    this.authService.logout();
  }

}
