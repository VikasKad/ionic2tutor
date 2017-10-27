import {Component} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {
  name: string;

  constructor(private navParams: NavParams,
              private navCtrl: NavController) {
  }
  ngOnInit(){
    this.name=this.navParams.get('username');
  }
}
