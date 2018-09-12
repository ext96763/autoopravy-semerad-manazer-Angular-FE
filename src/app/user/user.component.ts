import { Component, OnInit, Input } from '@angular/core';
import { UserSService } from '../user/user-s.service'
import { UserModel } from '../shared/models/UserModel';
import { UserListModel } from '../shared/models/UserListModel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'userList',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers: [UserSService],
  template: `
<div class="row">
  <div class="col-sm-4"  *ngFor="let user of users">
    <div class="card text-white bg-dark mb-3" style="margin-top:5px">
      <div class="card-body">
        <h5 class="card-title"><h2>{{user.userName}} {{user.userForeName}}</h2></h5>
        <p class="card-text"><b>ID: </b> {{user.userId}}</p>
        <p class="card-text"><b>Rodne cislo: </b>{{user.userRc}}</p>
        <p class="card-text"><b>Telefon: </b>{{user.userPhone}}</p>
        <p class="card-text"><b>Email: </b>{{user.userEmail}}</p>
        <p class="card-text"><b>Popis uzivatele: </b>{{user.userDetail}}</p>
        <p class="card-text"><b>Popis uzivatele: </b>{{user.userDetail}}</p>
        <p class="card-text"><b>CarID: </b>{{user.carId}}</p>
        <a href="#" class="btn btn-primary">Detail klienta</a> <a href="#" class="btn btn-info">Auta uzivatele</a> <a href="#" class="btn btn-secondary">Opravy</a> <a href="#" class="btn btn-warning">Dily</a>
      </div>
    </div>
  </div>
</div>
`

})
export class UserComponent implements OnInit {
  users: Array<UserListModel>;

  constructor(private usrServ: UserSService) { }

  ngOnInit() {
    this.getUserList();
    }

    getUserList(){
      this.usrServ.getUserList().subscribe(data =>{
        this.users = data;
        console.log('user service: ' + this.users);        
      })
    }
   
}
