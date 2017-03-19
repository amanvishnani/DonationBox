import { Component } from '@angular/core';
// import { NavController, NavParams } from 'ionic-angular';
import { NavController} from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { AngularFire,AuthProviders,AuthMethods, FirebaseListObservable } from 'angularfire2';
import { Page2 } from '../page2/page2';

/*
  Generated class for the Login1 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login1',
  templateUrl: 'login1.html',
})
export class Login1Page {
  public email:string;
  public password:string;
items: FirebaseListObservable<any[]>;
constructor(public navCtrl: NavController,public af: AngularFire,private _auth: AuthService) {
    this.items = af.database.list('/items');
  }
  // constructor(public navCtrl: NavController, public navParams: NavParams) {}
signInWithEmail(): void {

  console.log("EMail="+this.email+":Password="+this.password)
  
      this.af.auth.login({
        email:  this.email,
        password: this.password
      },
      {
        provider: AuthProviders.Password,
        method: AuthMethods.Password,
      }).then(
        (success) => {
        console.log(success);
        this.navCtrl.setRoot(Page2);
      }).catch(
        (err) => {
        console.log(err);
      })
    
  }

  private onSignInSuccess(res): void {
    console.log(res);
    console.log("Facebook display name ",this._auth.displayName());
    this.navCtrl.setRoot(Page2);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Login1Page');
  }

}