import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  _rest: any = {name: " "};
  constructor(private _rests: RestaurantService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
  	let robs = this._route.paramMap;
  	robs.subscribe(params=>this.getInfo(params.get('id')));
  }

  getInfo(id)
  {
  	let obs = this._rests.getOne(id);
  	obs.subscribe((data: any[])=>this._rest = data);
  	console.log(['data']);
  }

}
