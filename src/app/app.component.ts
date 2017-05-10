import { Component, ViewChild } from '@angular/core';

import {Deploy} from '@ionic/cloud-angular';
import { Platform, MenuController, Nav } from 'ionic-angular';

import { HomePage } from '../pages/hello-ionic/hello-ionic';
import { UserPage } from '../pages/user/user';
import { TestPage } from '../pages/test/test';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HomePage the root (or first) page
  rootPage = LoginPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public deploy: Deploy
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Users', component: UserPage },
      { title: 'Test', component: TestPage },
      { title: 'Item List', component: ListPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.menu.close();
    this.nav.setRoot(page.component);
  }
}
