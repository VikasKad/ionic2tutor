import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {BuyoutPage} from "../buyout/buyout";

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopPage');
  }

  ionViewWillEnter() {
    console.log("will enter");
  }

  ionViewCanLeave(): boolean | Promise<boolean> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    })
    return promise;
  }

  ionViewCanEnter(): boolean | Promise<boolean> {

    const rnd = Math.random();
    console.log("ion view can enter", rnd);
    return rnd > 0.5;
  }

  onBuy(productData: { name: string, qty: number }) {
    this.navCtrl.push(BuyoutPage, productData);
  }
}
