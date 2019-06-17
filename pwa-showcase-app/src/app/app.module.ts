import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CrashDetectorModule } from './crash-detector/crash-detector.module';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideoCaptureModule } from './video-capture/video-capture.module';

@NgModule({
  declarations: [AppComponent],
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
