import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})

export class NewComponent implements OnInit {
  errors: any;
  _rest: any;
  constructor(private _rests: RestaurantService, private _router: Router) { }

  ngOnInit(){
  	this._rest = {
  		name: " ",
  		cuisine: " "
  	}
  	this.errors = [];
  }

  makeRestaurant(){
  	let obs = this._rests.createOne(this._rest);
  	obs.subscribe(data=>{
  		if('errors' in data){
  			this.errors = [];
  			for(let x in data['errors']){
  				this.errors.push(data['errors'][x]['message'])
  			}
  			console.log(this.errors);
  		}else{
  			this._router.navigate(['/restaurants'])
  		}
  	})
  	console.log("you tried to add a new restaurant")
  }

}
