import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule
  ]
})

export class MaterialModule { }
