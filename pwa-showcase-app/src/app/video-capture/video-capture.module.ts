import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoCaptureRoutingModule } from './video-capture-routing.module';
import { VideoCaptureComponent } from './components/video-capture/video-capture.component';

@NgModule({
  declarations: [VideoCaptureComponent],
  imports: [
    CommonModule,
    VideoCaptureRoutingModule
  ]
})
export class VideoCaptureModule { }
