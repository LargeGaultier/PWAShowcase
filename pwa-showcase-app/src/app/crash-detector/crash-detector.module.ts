import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { AutoIncidentSheetComponent } from './components/auto-incident-sheet/auto-incident-sheet.component';
import { CrashDectectorComponent } from './components/crash-dectector/crash-dectector.component';
import { CrashDetectorRoutingModule } from './crash-detector-routing.module';

@NgModule({
  declarations: [CrashDectectorComponent, AutoIncidentSheetComponent],
  entryComponents: [AutoIncidentSheetComponent],
  imports: [CommonModule, CrashDetectorRoutingModule, CustomMaterialModule]
})
export class CrashDetectorModule {}
