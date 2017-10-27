import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html',
})
export class BuyoutPage {
productData:{name:string,qty:number};
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.productData=this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuyoutPage');
  }
  onConfirmation(){
    this.navCtrl.popToRoot();
  }

}
