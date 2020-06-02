import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions} from '@ionic-native/launch-navigator';
import Parse from 'parse';

/**
 * Generated class for the TasklistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tasklist',
  templateUrl: 'tasklist.html',
})
export class TasklistPage {
  username: string;
  startpoint: string;
  destination: string;
  distance:string;
  time:string;
  instruction:string;
  task:string;
  date:string;
  service: string;
  number:string;
  vehicle:string;
  complete:string;
  taskinfo:any;
  taskdatas: Array<any>=[];
  data:any;
  displayinfo: any;
  displayusername: string;
  displaystartpoint: string;
  displaydestination: string;
  displaydistance:string;
  displaytime:string;
  displayinstruction:string;
  displaytask:string;
  displaydate:string;
  displayservice: string;
  displaynumber:string;
  displayvehicle:string;
  displaycomplete:string;

  //navigate
  stop: string;

  //heros:any;

  heros: Array <any>=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private LaunchNavigator: LaunchNavigator) {
    let taskdatas  = this.navParams.get("taskinfo");
    this.username= taskdatas[0];
    console.log('TaskReceive: ' + taskdatas);
    this.displayinfo=this.username;

    for(let i=0;i<taskdatas.length;i++){
      this.heros.push(taskdatas[i]);
    }
    this.startpoint = "West Brompton,UK";
    this.destination = "Westminster, London, UK";
    console.log('hero: '+this.heros);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TasklistPage');
  }

  navigate(){
    let options: LaunchNavigatorOptions = {
      start: this.startpoint
    };
    console.log(this.startpoint,this.destination);
    this.LaunchNavigator.navigate("Manchester+to:Birmingham", options)
        .then(
            success => alert('Launched navigator'),
            error => alert('Error launching navigator: ' + error)
    );
  }
}



