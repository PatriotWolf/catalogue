import { Component, OnInit,Pipe,PipeTransform } from '@angular/core';
import {GetlistService} from '../services/getlist.service';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  public transform(values: any[], filter: string): any[] {
    
    
    return values.filter(v =>{ v.ori=(v.price*0.05)+ +v.price; v.buyQuantity=[1,2,3,4,5,6,7,8,9,10];return (v.price>=25&&v.price<=200)});
  }
}

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
	cards:any=[];
	isValid=false;
  constructor(private listData:GetlistService) {
  	this.listData.getData().subscribe(data =>{
  		console.log(data)
  		this.isValid=true;
  		this.cards=data;
  	});
  	console.log(this.cards)
  }

  ngOnInit() {
  	
  }
  buy(a,b)
  {	console.log(a);
  	console.log(b)
  }
}
