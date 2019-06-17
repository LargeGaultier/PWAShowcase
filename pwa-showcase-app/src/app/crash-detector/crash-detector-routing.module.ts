import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrashDectectorComponent } from './components/crash-dectector/crash-dectector.component';

const routes: Routes = [{ path: 'crash', component: CrashDectectorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrashDetectorRoutingModule {}
