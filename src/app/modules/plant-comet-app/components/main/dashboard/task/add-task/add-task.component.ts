import { User } from 'firebase';
import { AuthService } from './../../../../../services/auth.service';
import { PRIORITY } from './../../../../../models/Priority';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Task } from 'src/app/modules/plant-comet-app/models/Task';
import { STATUS } from 'src/app/modules/plant-comet-app/models/Status';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  currentUser: User;
  priority = PRIORITY;
  status = STATUS;
  task: Task = new Task();

  constructor(public firestore: AngularFirestore, private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.afAuth.user.subscribe(user => {
      this.currentUser = user;
    });
  }

  onSubmit() {
    const data: Task = {
      todoId: "",
      description: this.task.description,
      endDate: new Date('2020-06-30'),
      priority: this.task.priority,
      startDate: new Date('2020-06-20'),
      status: this.task.status,
      userShared: [
        this.currentUser.uid
      ],
      uxTemplateUrl: "",
      uxTemplateName: ""
    };

    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('tasks')
        .add(data)
        .then(res => { }, err => reject(err));
    });

  }
}
