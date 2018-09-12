import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';
import { CarList } from '../shared/models/CarList';
import { CarModel } from '../shared/models/CarModel';

@Component({
  selector: 'car-list',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']

})
export class CarComponent implements OnInit {
  cars: Array<CarList>;
  carDetail: CarModel;

  constructor(private carServ: CarService) { }

  ngOnInit() {
    this.getCarList();
    this.getCarDetail();
    }

    getCarList(){
      this.carServ.getCarList().subscribe(data =>{
        this.cars = data;
        console.log('user service: ' + this.cars);        
      })
    }

    getCarDetail(){
      this.carServ.getCarDetail().subscribe(data =>{
        this.carDetail = data;
        console.log('userDetail service: ' + this.carDetail); 
      })
    }

}
