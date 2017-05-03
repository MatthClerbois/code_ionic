import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

	coords:Coords;

	constructor(private geolocation: Geolocation) {}

	watch(){

		let watch = this.geolocation.watchPosition();

		watch.subscribe((data) => {
			this.coords=new Coords(data.coords.latitude,data.coords.longitude);
		});
		
	}
}

export class Coords{
	latitude:number;
	longitude:number;

	constructor(public lat:number,public long:number){
		this.latitude=lat;
		this.longitude=long;
		console.log('hello');
		console.log('lat:'+lat);
		console.log('long: '+long);
	}
}
