import { Component, OnInit,NgZone} from '@angular/core';
//import {GetlistService} from '../services/getlist.service';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	images: Array<string>;;
	cards:any;
	isValid:any =true;
  constructor(private http:HttpClient,private zone:NgZone,private router: Router) { this.getData().subscribe(data => {
            this.cards=data
            this.isValid=false;
            console.log(this.cards)
        });}

  ngOnInit() {
  	this.images=["http://crizaze.com/wp-content/uploads/2014/12/modeling-agency.jpg","https://i.ytimg.com/vi/sDf0LKR82-4/maxresdefault.jpg","http://jonvilma.com/images/model-18.jpg"]
  }
  getData(){
  	return this.http.get("assets/products.json")

  }
  move(){
  	localStorage.setItem('product',JSON.stringify(this.cards));
	  	this.zone.run(() => this.router.navigate(['/catalogue']));
  }
}
