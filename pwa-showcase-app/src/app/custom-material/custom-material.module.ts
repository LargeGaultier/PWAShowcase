import { NgModule } from '@angular/core';
import {
  MatBottomSheetModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSelectModule,
  MatSnackBarModule
} from '@angular/material';

const modules = [
  MatProgressSpinnerModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatListModule,
  MatSnackBarModule,
  MatMenuModule,
  MatBottomSheetModule,
  MatRippleModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class CustomMaterialModule {}
