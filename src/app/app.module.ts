import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/hello-ionic/hello-ionic';
import { TestPage } from '../pages/test/test';
import { LoginPage } from '../pages/login/login';
import { UserPage } from '../pages/user/user';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
 
const cloudSettings: CloudSettings = {
  'core': {
    "app_id": "1147aee3"
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TestPage,
    UserPage,
    LoginPage,
    ItemDetailsPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [
    IonicApp
  ],
  entryComponents: [
    MyApp,
    HomePage,
    TestPage,
    LoginPage,
    UserPage,
    ItemDetailsPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
