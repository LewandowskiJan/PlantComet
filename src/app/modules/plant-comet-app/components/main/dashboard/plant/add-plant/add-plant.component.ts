import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-add-plant',
  templateUrl: './add-plant.component.html',
  styleUrls: ['./add-plant.component.scss']
})
export class AddPlantComponent implements OnInit {

  plant: any = {};

  constructor(public firestore: AngularFirestore) { }

  ngOnInit() { }

  onSubmit() {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('plants')
        .add(this.plant)
        .then(res => { }, err => reject(err));
    });
  }
}
