import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent implements OnInit {

  private data: string;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

  doClick (input) {
    this.data = input;
    this.sharedService.changeValue(this.data);
  }

}
