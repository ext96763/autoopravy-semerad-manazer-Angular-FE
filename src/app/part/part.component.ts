import { Component, OnInit } from '@angular/core';
import { Part } from '../shared/models/Part';
import { PartService } from './part.service';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.scss']
})
export class PartComponent implements OnInit {

  parts: Array<Part>;

  constructor(private partServ: PartService) { }

  ngOnInit() {
    this.getParts();
    }

    getParts(){
      this.partServ.getPartsList().subscribe(data =>{
        this.parts = data;
        console.log('Repairs in component: ' + this.parts);        
      })
    }

}
