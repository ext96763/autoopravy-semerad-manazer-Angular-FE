import { Component, OnInit } from '@angular/core';
import { RepairList } from '../shared/models/RepairList';
import { RepairService } from './repair.service';
import { RepairModel } from '../shared/models/RepairModel';

@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.scss']
})
export class ReparComponent implements OnInit {

  repairs: Array<RepairList>;
  repairDetail: RepairModel;

  constructor(private repairService: RepairService) { }

  ngOnInit() {
    this.getRepairs();
    this.getRepairsDetail();
    }

    getRepairs(){
      this.repairService.getRepairList().subscribe(data =>{
        this.repairs = data;
        console.log('Repairs in component: ' + this.repairs);        
      })
    }

    getRepairsDetail(){
      this.repairService.getRepairDetail().subscribe(data => {
        this.repairDetail = data;
        console.log('Repair Detail in component: ' + this.repairDetail);
      })
    }

}
