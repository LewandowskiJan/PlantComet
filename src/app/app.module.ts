import { FormsModule } from '@angular/forms';
import { WelcomePageModule } from './modules/welcome-page/welcome-page.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InternalServerErrorPageComponent } from './core/error-page/internal-server-error-page/internal-server-error-page.component';
import { NotFoundErrorPageComponent } from './core/error-page/not-found-error-page/not-found-error-page.component';
import { BadRequestErrorPageComponent } from './core/error-page/bad-request-error-page/bad-request-error-page.component';
import { UnauthorizedErrorPageComponent } from './core/error-page/unauthorized-error-page/unauthorized-error-page.component';
import { ErrorPageComponent } from './core/error-page/error-page/error-page.component';
import { AppFooterComponent } from './components/footer/app-footer/app-footer.component';
import { AppHeaderComponent } from './components/header/app-header/app-header.component';
import { AppPageComponent } from './components/main/app-page/app-page.component';
import { PlantCometAdminModule } from './modules/plant-comet-app/plant-comet-admin.module';

@NgModule({
  declarations: [
    AppComponent,
    InternalServerErrorPageComponent,
    NotFoundErrorPageComponent,
    BadRequestErrorPageComponent,
    UnauthorizedErrorPageComponent,
    ErrorPageComponent,
    AppFooterComponent,
    AppHeaderComponent,
    AppPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlantCometAdminModule,
    WelcomePageModule,
    FormsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
