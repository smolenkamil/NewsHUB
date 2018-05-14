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

  }

  signOut() {
    this.authService.logout();
  }
}
