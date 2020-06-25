import { Component, OnInit } from '@angular/core';
import { LivedataService } from '../service/livedata.service';

@Component({
  selector: 'app-heros-live',
  templateUrl: './heros-live.component.html',
  styleUrls: ['./heros-live.component.scss']
})
export class HerosLiveComponent implements OnInit {

  herosData = [];
  constructor(private iService: LivedataService) { }
 
  ngOnInit() {
     this.iService.getHerosData()
     .subscribe(data => this.herosData = data) 
   }

}
