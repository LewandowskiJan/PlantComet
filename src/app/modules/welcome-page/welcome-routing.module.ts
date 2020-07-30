import { WelcomePageComponent } from './components/main/welcome-page/welcome-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: WelcomePageComponent,
    children: [
      { path: '', redirectTo: '/welcome-page', pathMatch: 'full' },
      { path: 'welcome-page', component: WelcomePageComponent }
    ]
  },
  { path: '**', component: WelcomePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
