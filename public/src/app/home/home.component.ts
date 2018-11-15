import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  rests: any[] = [];
  constructor(private _rests: RestaurantService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
  	let obs = this._rests.getAll()
  	obs.subscribe((data:any[])=>this.rests = data);
  	console.log(['data']);
  }

  seeAll() 
  {
    let obs = this._rests.getAll()
    obs.subscribe((data:any[])=>this.rests = data);
  }


  
  deleteOne(id)
  {
    console.log("You deleted", id);
    let obs = this._rests.deleteOne(id);
    obs.subscribe(data=>{
      if(data['status'] == "blah")
      {
        console.log("it didnt work");
      }else{
        this.seeAll()
      }
    })
  }

}
