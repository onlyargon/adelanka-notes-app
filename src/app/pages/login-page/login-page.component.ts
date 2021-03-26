import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { WebServiceService } from 'src/app/services/web-service.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  username: any;
  password: any;

  constructor(private router: Router, private webService : WebServiceService, private commonService: CommonService) { }

  ngOnInit(): void {

  }

  signIn() {
    this.commonService.setIsBusy();
    const val = this.webService.signIn(this.username, this.password).subscribe((resp: any) => {
      if (resp === false) {
        //this.toastr.warning('Please check your Username / Password and try again');
      } else {
        localStorage.setItem('token', resp.Data.token);
        localStorage.setItem('userId', resp.Data.userId);
        localStorage.setItem('user', this.username);
        this.router.navigate(['home']);
      }

      this.commonService.setIsBusy();
    });

  }


}
