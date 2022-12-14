import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  dadosProdutos:any = [];

  @Input() title!: string
  @Input() data!: Array<any>
  @Input() active? = true

  constructor() { }

  ngOnInit(): void {
    this.dadosProdutos.push(this.data)
  }

}
