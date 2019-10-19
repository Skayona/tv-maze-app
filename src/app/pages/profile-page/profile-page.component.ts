import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '@models/user';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  user$: Observable<IUser>;

  constructor(
    private auth: AuthService
  ) {
    this.user$ = auth.userProfile$;
  }

  ngOnInit() {
  }

}
