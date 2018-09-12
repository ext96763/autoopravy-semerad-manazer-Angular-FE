import { Component, OnInit } from '@angular/core';
import { UserModel } from '../shared/models/UserModel'; 
import { UserSService } from '../user/user-s.service';
import { CarModel } from '../shared/models/CarModel';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  template: `
  <div class="main-content" >
   <h1> 1  {{userDetail}}</h1>
   <p> 2  {{userDetail | json}}</p>
  </div>
  `
})
export class UserDetailComponent implements OnInit {
  
  userDetail: UserModel;

  constructor(private usrServ: UserSService) { }

  ngOnInit() {
    this.getUserDetail();
    }

    getUserDetail(){
      this.usrServ.getUserDetail().subscribe(data =>{
        this.userDetail = data;
        console.log('UserDetail' + this.userDetail);        
      })
    }

}
