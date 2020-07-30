import { WelcomeRoutingModule } from './welcome-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeHeaderComponent } from './components/header/welcome-header/welcome-header.component';
import { WelcomeFooterComponent } from './components/footer/welcome-footer/welcome-footer.component';
import { WelcomeDataComponent } from './welcome-data/welcome-data.component';
import { WelcomePageComponent } from './components/main/welcome-page/welcome-page.component';


@NgModule({
  declarations: [
    WelcomeHeaderComponent,
    WelcomeFooterComponent,
    WelcomeDataComponent,
    WelcomePageComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule
  ],
  bootstrap: [WelcomeDataComponent]
})
export class WelcomePageModule { }
