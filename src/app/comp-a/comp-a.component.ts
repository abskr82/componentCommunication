import { SharedService } from './../shared.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent implements OnInit, OnDestroy {

  private newString: string;
  subscription: Subscription;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.subscription = this.sharedService.sharedData
      .subscribe(str => {
        console.log('From compA');
        console.log(str);
        this.newString = str
      });

  }

  ngOnDestroy () {
    this.subscription.unsubscribe();
  }



}
