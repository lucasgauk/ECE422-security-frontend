import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../service/http.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  string: String;
  user: User

  constructor(private httpService: HttpService<User>) { }

  ngOnInit() {
    this.httpService.getMany('', 'todos/1').subscribe(data => this.string = (User.fromJson(data)).toString() );
  }

}
