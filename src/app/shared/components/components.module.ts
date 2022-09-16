import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

const components = [
  HeaderComponent
]

@NgModule({
  imports: [
    CommonModule

  ],exports: [...components],
  declarations: [...components]
})
export class ComponentsModule { }
