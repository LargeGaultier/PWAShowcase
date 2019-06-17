import { VideoCaptureComponent } from './components/video-capture/video-capture.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'videocapture', component: VideoCaptureComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoCaptureRoutingModule {}
