import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {UsersPage} from "../users/users";
import {ShopPage} from "../shop/shop";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usrPage = UsersPage;

  constructor(public navCtrl: NavController) {

  };

  goToPage() {
    this.navCtrl.push(ShopPage)
      .catch((error) =>
        console.log("access denied",error)
      )
    ;
  }

}
