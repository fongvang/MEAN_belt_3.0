import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  _rest: any;
  errors: any;
  constructor(private _rests: RestaurantService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
  	let robs = this._route.paramMap;
  	robs.subscribe(params=> this.getInfo(params.get('id')));
  	this.errors = [];
  	this._rest = {
  		name: " ",
  		cuisine: " "
  	}
  }

  getInfo(id)
  {
  	let obs = this._rests.getOne(id);
  	obs.subscribe((data: any[])=>this._rest = data);
  	console.log(['data']);
  }

  editRest()
  {
  	let obs = this._rests.editOne(this._rest._id, this._rest);
  	obs.subscribe(data=>{
  		if('errors' in data)
  		{
  			this.errors = [];
  			for(let x in data['errors'])
  			{
  				this.errors.push(data['errors'][x]['message']);
  			}
  			console.log(this.errors);
  		}else{
  			this._router.navigate(['/restaurants']);
  		}
  	})
  }

}
