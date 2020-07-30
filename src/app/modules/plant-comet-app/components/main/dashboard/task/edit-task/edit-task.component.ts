import { Component, OnInit, Input } from '@angular/core';
import { User } from 'firebase';
import { PRIORITY } from 'src/app/modules/plant-comet-app/models/Priority';
import { STATUS } from 'src/app/modules/plant-comet-app/models/Status';
import { Task } from 'src/app/modules/plant-comet-app/models/Task';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AuthService } from 'src/app/modules/plant-comet-app/services/auth.service';
import { Observable, Timestamp } from 'rxjs';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  currentUser: User;
  priority = PRIORITY;
  status = STATUS;
  taskRef: AngularFirestoreDocument<any>;
  task: Observable<any>;
  editedTask: any = new Task();
  @Input() id: string;

  constructor(public firestore: AngularFirestore) {
  }

  ngOnInit() {
    this.taskRef = this.firestore.collection('tasks').doc<Task>(this.id);
    this.task = this.firestore.collection('tasks').doc<Task>(this.id).valueChanges();

    this.task.subscribe(item => {
      this.editedTask.description = item.description;
      this.editedTask.startDate = item.startDate;
      this.editedTask.endDate = item.endDate;
      this.editedTask.status = item.status;
      this.editedTask.priority = item.priority;

    });
  }

  onSubmit() {

    this.task.subscribe(item => {
      item.description = this.editedTask.description;
      item.startDate = this.editedTask.startDate;
      item.endDate = this.editedTask.endDate;
      item.status = this.editedTask.status;
      item.priority = this.editedTask.priority;

      return this.taskRef
        .update(item)
        .then(() => {
          console.log('Document successfully updated!');
        })
        .catch((error) => {
          console.error('Error updating document: ', error);
        });
    });
  }
}
