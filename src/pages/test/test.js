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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the Test page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TestPage = (function () {
    function TestPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [
            { title: 'test_1', value: 1 },
            { title: 'test_2', value: 2 },
            { title: 'test_3', value: 3 },
            { title: 'test_4', value: 4 },
            { title: 'test_5', value: 5 }
        ];
    }
    TestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Test');
    };
    return TestPage;
}());
TestPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-test',
        templateUrl: 'test.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], TestPage);
export { TestPage };
//# sourceMappingURL=test.js.map