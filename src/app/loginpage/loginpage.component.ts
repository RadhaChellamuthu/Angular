import { Component, OnInit } from '@angular/core';
import { loginPageServices } from '../loginpage/loginpage.services';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
userId: string = '2';

  constructor(private loginServices: loginPageServices) { }

  ngOnInit() {
  }

  getdata() {
    this.loginServices.getdatafromAPI().subscribe(retdata => {
      console.log(retdata.userId);
      // this.userId = retdata.userId;
    })
  }
}
