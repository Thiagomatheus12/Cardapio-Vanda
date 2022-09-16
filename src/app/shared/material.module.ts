import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

const modules = [
  MatToolbarModule,
  MatCardModule
]

@NgModule({
  imports: [CommonModule, ...modules], exports: [ ...modules ]
})
export class MaterialModule { }
