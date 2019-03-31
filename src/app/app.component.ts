import {Component, OnInit} from '@angular/core';
import {DataServiceService} from './data-service.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  featureSets: any;

  constructor(private data: DataServiceService) {
  }

  ngOnInit() {
    this.data.getData()
      .subscribe(featureSets => {
        this.featureSets = featureSets;
      });
  }
}
