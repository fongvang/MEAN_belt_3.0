import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RestaurantService {
  constructor(private _http: HttpClient) { }

  getAll(){return this._http.get("/api/restaurants");}
  deleteOne(id){return this._http.delete("/api/restaurants/"+id);}
  createOne(data){return this._http.post("/api/restaurants/new", data);}
  getOne(id){return this._http.get("/api/restaurants/"+id);}
  editOne(id, data){return this._http.patch("/api/restaurants/edit/"+id, data)}
  addReview(id, data){return this._http.put("/api/restaurants/"+id+"/review/", data);}

}
