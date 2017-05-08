var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
import { CloudModule } from '@ionic/cloud-angular';
var cloudSettings = {
    'core': {
        'app_id': 'APP_ID'
    }
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
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
            { provide: ErrorHandler, useClass: IonicErrorHandler }
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map