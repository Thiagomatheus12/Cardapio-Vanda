import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { MaterialModule } from './material.module';

const modules = [ComponentsModule, MaterialModule]

@NgModule({
  imports: [
    CommonModule,...modules
  ], exports: [...modules]
})
export class SharedModule { }
