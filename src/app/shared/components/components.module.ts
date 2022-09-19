import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BoxComponent } from './box/box.component';

const components = [
  HeaderComponent, BoxComponent
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,


  ],exports: [...components],
  declarations: [...components, BoxComponent]
})
export class ComponentsModule { }
