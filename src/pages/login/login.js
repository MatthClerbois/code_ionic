var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController } from 'ionic-angular';
import { Auth, User } from '@ionic/cloud-angular';
import { HomePage } from '../hello-ionic/hello-ionic';
var LoginPage = (function () {
    function LoginPage(navCtrl, alertCtrl, loadingCtrl, auth, user) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.auth = auth;
        this.user = user;
        this.showLogin = true;
        this.email = '';
        this.password = '';
        this.name = '';
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('Hello LoginPage');
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        if (this.showLogin) {
            console.log('process login');
            if (this.email === '' || this.password === '') {
                var alert_1 = this.alertCtrl.create({
                    title: 'Register Error',
                    subTitle: 'All fields are rquired',
                    buttons: ['OK']
                });
                alert_1.present();
                return;
            }
            var loader_1 = this.loadingCtrl.create({
                content: "Logging in..."
            });
            loader_1.present();
            this.auth.login('basic', { 'email': this.email, 'password': this.password }).then(function () {
                console.log('ok i guess?');
                loader_1.dismissAll();
                _this.navCtrl.setRoot(HomePage);
            }, function (err) {
                loader_1.dismissAll();
                console.log(err.message);
                var errors = '';
                if (err.message === 'UNPROCESSABLE ENTITY')
                    errors += 'Email isn\'t valid.<br/>';
                if (err.message === 'UNAUTHORIZED')
                    errors += 'Password is required.<br/>';
                var alert = _this.alertCtrl.create({
                    title: 'Login Error',
                    subTitle: errors,
                    buttons: ['OK']
                });
                alert.present();
            });
        }
        else {
            this.showLogin = true;
        }
    };
    LoginPage.prototype.doRegister = function () {
        var _this = this;
        if (!this.showLogin) {
            console.log('process register');
            /*
            do our own initial validation
            */
            if (this.name === '' || this.email === '' || this.password === '') {
                var alert_2 = this.alertCtrl.create({
                    title: 'Register Error',
                    subTitle: 'All fields are rquired',
                    buttons: ['OK']
                });
                alert_2.present();
                return;
            }
            var details_1 = { 'email': this.email, 'password': this.password, 'name': this.name };
            console.log('details');
            console.log(details_1);
            var loader_2 = this.loadingCtrl.create({
                content: "Registering your account..."
            });
            loader_2.present();
            this.auth.signup(details_1).then(function () {
                console.log('ok signup');
                _this.auth.login('basic', { 'email': details_1.email, 'password': details_1.password }).then(function () {
                    loader_2.dismissAll();
                    _this.navCtrl.setRoot(HomePage);
                });
            }, function (err) {
                loader_2.dismissAll();
                var errors = '';
                for (var _i = 0, _a = err.details; _i < _a.length; _i++) {
                    var e = _a[_i];
                    console.log(e);
                    if (e === 'required_email')
                        errors += 'Email is required.<br/>';
                    if (e === 'required_password')
                        errors += 'Password is required.<br/>';
                    if (e === 'conflict_email')
                        errors += 'A user with this email already exists.<br/>';
                    //don't need to worry about conflict_username
                    if (e === 'invalid_email')
                        errors += 'Your email address isn\'t valid.';
                }
                var alert = _this.alertCtrl.create({
                    title: 'Register Error',
                    subTitle: errors,
                    buttons: ['OK']
                });
                alert.present();
            });
        }
        else {
            this.showLogin = false;
        }
    };
    LoginPage.prototype.goHome = function () {
        this.navCtrl.setRoot(HomePage);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-login',
        templateUrl: 'login.html',
    }),
    __metadata("design:paramtypes", [NavController,
        AlertController,
        LoadingController,
        Auth,
        User])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.js.map