import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Auth, User } from '@ionic/cloud-angular';
import { LoginPage } from '../login/login';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HomePage {
  	constructor(
		public navCtrl: NavController,
  		public user:User,
  		public auth:Auth, 
  		public alertCtrl: AlertController) {
  			console.log('Welcome User:');
    		console.log(user);
    		this.user.set('phone','0477777777');
	}

	userInfo(){		
	    let alert = this.alertCtrl.create({
		    title: 'User Info',
		    subTitle: this.user.details.name,
		    message:'phone number : '+this.user.get('phone','11111')+'<br/> password: '+this.user.details.password,
		    buttons: ['GOT IT']
	  	});
		alert.present();
		console.log('phone: '+this.user.get('phone','00000000'));
	}

	logout() {
	   this.auth.logout();
	   this.navCtrl.setRoot(LoginPage);
	}
}
