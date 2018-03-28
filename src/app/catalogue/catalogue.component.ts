import { Component, OnInit,Pipe,PipeTransform } from '@angular/core';
import {GetlistService} from '../services/getlist.service';
import {NgbModule,NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
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
	selectedData:any;
	shipping:any;
	country:any;
	cost:any;
	total:any;
	discount:any=0;
  constructor(private listData:GetlistService,private modalService: NgbModal) {
  	this.listData.getData().subscribe(data =>{
  		console.log(data)
  		this.isValid=true;
  		this.cards=data;
  		this.cards[2].price="152.30";

  	});
  	console.log(this.cards)
  }

  ngOnInit() {
  	
  }
  buy(elem,a,b,elecountry)
  {	this.selectedData=a;
  	this.selectedData.quantityOd=b;
  	console.log(this.selectedData)
  	this.country=elecountry;
  	this.shipping=10;
  	this.cost=this.selectedData.price*b;
  	if(b>2||this.selectedData.price>150)
  	{	this.shipping=0;
  	}
  	this.total=this.cost+this.shipping
  	this.modalService.open(elem,{size:"lg"}).result.then((result) => {
  		if(result==="Buy")
	    {}
	})
  }
  onKey(event: any,b) { // without type info
  	if(b=="Singapore"){
  		if(this.cost<=300)
  		{	this.shipping=20}
  	}
  	if(b=="Brunei"){
  		if(this.cost<=300)
  		{	this.shipping=25}
  	}
    console.log(event.target.value);
    if(event.target.value=="OFF5PC")
    {	console.log(this.selectedData)
    	if(this.selectedData.quantityOd>=2)
    	{	this.cost=this.cost-(this.cost*0.05)
    		this.discount=(this.cost*0.05)
    	}
    	else{
    		this.cost=this.selectedData.price*this.selectedData.quantityOd;
    		this.discount=0;
    	}
    }
    else if(event.target.value=="GIVEME15")
    {	console.log(this.cost)
    	if(this.cost>=100)
    	{	this.cost=this.cost-15;
    		this.discount=15;
    	}
    	else{
    		this.cost=this.selectedData.price*this.selectedData.quantityOd;
    		this.discount=0;
    	}
    }
    else{
    	this.cost=this.selectedData.price*this.selectedData.quantityOd;
    	this.discount=0
    }
    this.total=this.cost+this.shipping
    console.log(b);
  }
}
