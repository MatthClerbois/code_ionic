import { Component } from '@angular/core';
import {Database} from '@ionic/cloud-angular';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html'
})
export class ItemDetailsPage {
  selectedItem: any;

  constructor(
	public navCtrl: NavController,
  	public navParams: NavParams,
  	private database : Database
  	) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.database.connect();
  }
}
