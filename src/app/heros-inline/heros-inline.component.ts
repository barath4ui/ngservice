import { Component, OnInit } from '@angular/core';
import { InlinedataService } from '../service/inlinedata.service';

@Component({
  selector: 'app-heros-inline',
  templateUrl: './heros-inline.component.html',
  styleUrls: ['./heros-inline.component.scss']
})
export class HerosInlineComponent implements OnInit {

  herosData = [];

  constructor(private iService: InlinedataService) { }

  ngOnInit() {

    this.herosData = this.iService.getHerosData()
  }

}
