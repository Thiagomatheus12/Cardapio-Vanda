import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';



const modules = [
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatTabsModule
]

@NgModule({
  imports: [CommonModule, ...modules], exports: [ ...modules ]
})
export class MaterialModule { }
