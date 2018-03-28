import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class GetlistService {

  	constructor(private http:Http) { }
  	getData() {

  		return this.http.get("assets/products.json").map(res => res.json());
	}
}
