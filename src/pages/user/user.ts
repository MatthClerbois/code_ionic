import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Database} from '@ionic/cloud-angular';
/**
 * Generated class for the User page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  constructor(	
	public navCtrl: NavController,
	public navParams: NavParams,
  	private database : Database) {  	
	    this.database.connect();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad User');
  }

}
