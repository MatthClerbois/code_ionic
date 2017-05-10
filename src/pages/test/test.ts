import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyApp } from '../../app/app';
/**
 * Generated class for the Test page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
		
export class TestPage {

	items: Array<{title:string,value:number}>;						
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    	this.items=[
	    	{title:'test_1',value:1},
	    	{title:'test_2',value:2},
	    	{title:'test_3',value:3},
	    	{title:'test_4',value:4},
	    	{title:'test_5',value:5}
    	]
    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad Test');
    }

}
