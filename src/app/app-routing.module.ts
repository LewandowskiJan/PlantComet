import { PlantCometComponent } from './modules/plant-comet-app/components/plant-comet/plant-comet.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundErrorPageComponent } from './core/error-page/not-found-error-page/not-found-error-page.component';
import { WelcomeDataComponent } from './modules/welcome-page/welcome-data/welcome-data.component';
import { AppPageComponent } from './components/main/app-page/app-page.component';
import { PlantCometAdminModule } from './modules/plant-comet-app/plant-comet-admin.module';

const routes: Routes = [
  { path: '', redirectTo: '/app-page', pathMatch: 'full' },
  { path: 'app-page', component: AppPageComponent },
  {
    path: 'welcome-page', component: WelcomeDataComponent,
    loadChildren: () => import('./modules/welcome-page/welcome-page.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'plant-comet', component: PlantCometComponent,
    loadChildren: () => import('./modules/plant-comet-app/plant-comet-admin.module').then(m => m.PlantCometAdminModule)
  },
  { path: '**', component: NotFoundErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
