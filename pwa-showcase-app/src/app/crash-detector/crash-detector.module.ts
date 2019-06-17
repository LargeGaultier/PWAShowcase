import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrashDetectorRoutingModule } from './crash-detector-routing.module';
import { CrashDectectorComponent } from './components/crash-dectector/crash-dectector.component';

@NgModule({
  declarations: [CrashDectectorComponent],
  imports: [CommonModule, CrashDetectorRoutingModule]
})
export class CrashDetectorModule {}
