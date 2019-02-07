import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {RequestService} from "../../service/request.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private requestService: RequestService, private router: Router) { }

  ngOnInit() {
  }

  verifyUser() {
      this.requestService.verifyUser(this.user.username, this.user.password)
          .subscribe(data => {
            if (User.fromJson(data).id) {
              console.log('Success!');
              this.router.navigateByUrl('/file')
            }
          });
  }

}
