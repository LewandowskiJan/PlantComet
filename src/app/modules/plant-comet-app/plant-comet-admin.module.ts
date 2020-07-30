import { AuthGuard } from 'src/app/modules/plant-comet-app/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { RegisterComponent } from './components/auth/register/register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { NumberFormatPipe } from 'src/app/core/pipes/number-format.pipe';
import { TextFormatPipe } from './pipes/text-format.pipe';
import { PlantCometRoutingModule } from './plant-comet-routing.module';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { DropDownMenuComponent } from './components/header/drop-down-menu/drop-down-menu.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthService } from './services/auth.service';
import { PlantCometComponent } from './components/plant-comet/plant-comet.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/auth/verify-email/verify-email.component';
import { MustMatchDirective } from './directives/must-match.directive';
import { environment } from 'src/environments/environment.prod';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AddPlantComponent } from './components/main/dashboard/plant/add-plant/add-plant.component';
import { EditPlantComponent } from './components/main/dashboard/plant/edit-plant/edit-plant.component';
import { PlantsListComponent } from './components/main/dashboard/plant/plants-list/plants-list.component';
import { TaskComponent } from './components/main/dashboard/task/task.component';
import { AddTaskComponent } from './components/main/dashboard/task/add-task/add-task.component';
import { EditTaskComponent } from './components/main/dashboard/task/edit-task/edit-task.component';
import { TaskListComponent } from './components/main/dashboard/task/task-list/task-list.component';
import { EnumToArrayPipe } from './components/main/dashboard/enum-to-array.pipe';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    HeaderComponent,
    DropDownMenuComponent,
    DashboardComponent,
    TextFormatPipe,
    NumberFormatPipe,
    PlantCometComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    MustMatchDirective,
    AddPlantComponent,
    EditPlantComponent,
    PlantsListComponent,
    TaskComponent,
    AddTaskComponent,
    EditTaskComponent,
    TaskListComponent,
    EnumToArrayPipe,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    CommonModule,
    PlantCometRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [],
  providers: [AuthService, AuthGuard],
  bootstrap: [PlantCometComponent]
})
export class PlantCometAdminModule { }
