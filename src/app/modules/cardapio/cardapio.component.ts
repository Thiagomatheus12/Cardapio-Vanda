import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent implements OnInit {

  data = {
    "snacks": [
      { "name": "Hot-Dog Simples", "description": "Pão de hot dog, maionese, purê, uma salsicha, ketchup, mostarda, batat palha, vinagrete e milho", "price": 10.00 },
      { "name": "Hot-Dog Completo", "description": "Pão de hot dog, maionese, purê, uma salsicha, ketchup, mostarda, calabresa em fatias, batat palha, vinagrete, milho, bacon e mussarela", "price": 12.00 },
      { "name": "X-salada", "description": "pão de hamburguer, hamburguer 120g, queijo prato, maionese, alface e tomate", "price": 14.99 },
        { "name": "X-salada", "description": "Salada", "price": 14.99 },
        { "name": "X-salada", "description": "Salada", "price": 14.99 },
        { "name": "X-salada", "description": "Salada", "price": 14.99 },
        { "name": "X-salada", "description": "Salada", "price": 14.99 },
        { "name": "X-salada", "description": "Salada", "price": 14.99 },
        { "name": "X-salada", "description": "Salada", "price": 14.99 }
    ],
    "drinks": [
        { "name": "Coca-cola", "description": "Zero", "price": 4.99 },
        { "name": "Coca-cola", "description": "Zero", "price": 4.99 },
        { "name": "Coca-cola", "description": "Zero", "price": 4.99 },
        { "name": "Coca-cola", "description": "Zero", "price": 4.99 },
        { "name": "Coca-cola", "description": "Zero", "price": 4.99 },
        { "name": "Coca-cola", "description": "Zero", "price": 4.99 }
    ],
    "pastry": [
        { "name": "Pastel de queijo", "description": "Pastel de queijo", "price": 6.00 },
        { "name": "Pastel de pizza", "description": "Pastel de pizza", "price": 6.00 },
        { "name": "Pastel de carne", "description": "Pastel de carne", "price": 6.00 },
        { "name": "Pastel de bauru", "description": "Pastel de bauru", "price": 6.00 },
        { "name": "Pastel de frango", "description": "Pastel de frango", "price": 6.00 },
        { "name": "Pastel de calabresa", "description": "Pastel de calabresa", "price": 6.00 }
    ],
    "portions": [
        { "name": "Batata frita 500G", "description": "", "price": 4.99 },
        { "name": "Batata frita 500G", "description": "", "price": 4.99 },
        { "name": "Batata frita 500G", "description": "", "price": 4.99 },
        { "name": "Batata frita 500G", "description": "", "price": 4.99 },
        { "name": "Batata frita 500G", "description": "", "price": 4.99 },
        { "name": "Batata frita 500G", "description": "", "price": 4.99 }
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
