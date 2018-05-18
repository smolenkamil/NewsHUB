import { Component } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database-deprecated';
import {FirebaseDatabase} from '@firebase/database-types';
import {AngularFireAuth} from "angularfire2/auth";

@Component({
  selector: 'weatherChoice',
  templateUrl: './weatherChoice.html',
  styleUrls: ['./weatherChoice.css']
})
export class WeatherChoiceComponent {

  db:FirebaseDatabase;
  userID:string;

  constructor(db: AngularFireDatabase, auth: AngularFireAuth) {
    this.db=db.database;
    auth.authState.subscribe((user) => {
      if(user) this.userID = user.uid;
      this.getWetChoice()
    });
  }
  whichMetric(standard, metric, imperial):number{
    if(standard)
      return 1
    else if(metric)
      return 2
    else if(imperial)
      return 3
  }

  getWetChoice(){
    let standard = <HTMLInputElement> document.getElementById("standardInput");
    let metric = <HTMLInputElement> document.getElementById("metricInput");
    let imperial = <HTMLInputElement> document.getElementById("imperialInput");
    let city = <HTMLSelectElement>document.getElementById("selectCity");
    this.db.ref('weather/'+this.userID).on('value', (snapshot) => {
      switch (snapshot.val().unit){
        case 1: standard.checked = true; break;
        case 2: metric.checked = true; break;
        case 3: imperial.checked = true; break;
      }
      city.value = snapshot.val().city;
    });
  }

  addWetChoice(): void {
    let standard = <HTMLInputElement> document.getElementById("standardInput");
    let metric = <HTMLInputElement> document.getElementById("metricInput");
    let imperial = <HTMLInputElement> document.getElementById("imperialInput");
    let city = <HTMLSelectElement>document.getElementById("selectCity");
    let choosen = this.whichMetric(standard.checked,metric.checked,imperial.checked);
    this.db.ref('weather/'+this.userID).set({
      unit: choosen,
      city: city.options[city.selectedIndex].value
    })
  }
}

