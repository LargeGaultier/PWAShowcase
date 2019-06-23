import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrashDetectorModule } from './crash-detector/crash-detector.module';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { VideoCaptureModule } from './video-capture/video-capture.module';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

@NgModule({
  declarations: [AppComponent, WelcomePageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    CrashDetectorModule,
    CustomMaterialModule,
    BrowserAnimationsModule,
    VideoCaptureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
