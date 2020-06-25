import { Component, OnInit } from '@angular/core';
import { LocaldataService } from '../service/localdata.service';


@Component({
  selector: 'app-heros-detail',
  templateUrl: './heros-detail.component.html',
  styleUrls: ['./heros-detail.component.scss']
})
export class HerosDetailComponent implements OnInit {


 herosData = [];
 constructor(private iService: LocaldataService) { }

 ngOnInit() {
    this.iService.getHerosData()
    .subscribe(data => this.herosData = data) 
  }

}
