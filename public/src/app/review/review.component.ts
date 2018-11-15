import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  errors: any;
  _review: any;
  _rest: any;
  constructor(private _rests: RestaurantService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
  	let robs = this._route.paramMap;
  	robs.subscribe(params=> this.getInfo(params.get('id')));
  	this._rest = {
  		name: " ",
  		cuisie: " ",
  		reviews: [{}]
  	}
  	this._review = {
  		name: " ",
  		rating: 1,
  		review: " "
  	}
  	this.errors = []
  }

   getInfo(id)
  {
  	let obs = this._rests.getOne(id);
  	obs.subscribe((data: any[])=>this._rest = data);
  }

  addReview()
  {
  	let obs = this._rests.addReview(this._rest._id, this._review);
  	obs.subscribe(data=>{
  		if(data['errors'])
  			
  		{
  			console.log(data['errors'])
  			console.log(data['errors']['message'])
  			this.errors = []
  			for(let x in data['errors'])
  			{
  				this.errors.push(data['errors'][x]['message']);
  			}
  			// console.log(this.errors)
  		}else{
  			this._router.navigate(['/restaurants'])	
  		}
  	})
  }

  // addReview()
  // {
  //   let obs = this._rests.addReview(this._rest._id, this._review);
  //   obs.subscribe(data=>{
  //     if('errors' in data)
  //     {
  //       for(let x in data['errors'])
  //       {
  //         this.errors.push(data['errors'][x]['messages']);
  //       }
  //       console.log(this.errors);
  //     }else{
  //       this._router.navigate(['/restaurants'])
  //     }
  //   })
  // }

}
