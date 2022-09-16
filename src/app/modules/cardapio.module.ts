import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardapioRoutingModule } from './cardapio-routing.module';
import { CardapioComponent } from './cardapio/cardapio.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CardapioComponent
  ],
  imports: [
    CommonModule,
    CardapioRoutingModule,
    SharedModule

  ]
})
export class CardapioModule { }
