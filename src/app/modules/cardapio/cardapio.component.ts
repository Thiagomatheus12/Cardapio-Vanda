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
      { "name": "X-Burguer", "description": "Pão de hambúrguer, hambúrguer 120g, maionese e queijo prato", "price": 10.00 },
      { "name": "X-Salada", "description": "pão de hambúrguer, hamburguer 120g, queijo prato, maionese, alface e tomate", "price": 12.00 },
        { "name": "X-Egg", "description": "pão de hambúrguer, hamburguer 120g, queijo prato, maionese, ovo, alface e tomate", "price": 14.00 },
        { "name": "X-Bacon", "description": "pão de hambúrguer, hamburguer 120g, queijo prato, maionese, bacon alface e tomate", "price": 15.00 },
        { "name": "X-Tudo", "description": "pão de x-tudo, hamburguer 120g, queijo prato, maionese, bacon, ovo, calabresa, presunto, alface e tomate", "price": 18.00 },
        { "name": "Misto Quente", "description": "Pão francês, presunto e queijo", "price": 8.00 },
        { "name": "Bauru", "description": "Pão francês, maionese, presunto, mussarela e tomate", "price": 9.00 },
        { "name": "Americano", "description": "Pão francês, maionese, presunto, queijo prato, alface e tomate", "price": 11.00 },
        { "name": "Americano Bacon", "description": "Pão frânces, maionese, presunto, queijo prato, ovo, bacon, alface e tomate", "price": 14.00 },
        { "name": "Galinhão", "description": "Pão de hot dog, frango desfiado, catupiry original e milho", "price": 12.00 },
        { "name": "Galinhão Bacon", "description": "Pão de hot dog, frango desfiado, bacon, catupiry original e milho", "price": 15.00 },
        { "name": "Calafrango", "description": "Pão de hot dog, frango desfiado, calabresa em fatias, catupiry original e milho", "price": 14.00 }
    ],
    "snacksExtras": [
        { "name": "Salsicha", "description": "", "price": 2.00 },
        { "name": "Bacon", "description": "", "price": 3.00 },
        { "name": "Mussarela", "description": "", "price": 3.00 },
        { "name": "Queijo Prato", "description": "", "price": 3.00 },
        { "name": "Ovo", "description": "", "price": 2.00 },
        { "name": "Catupiry Original", "description": "", "price": 3.00 },
        { "name": "Cheddar", "description": "", "price": 3.00 },
        { "name": "Hambúrguer 120G", "description": "", "price": 3.00 }
    ],
    "drinks": [
        { "name": "Água Garrafa 510ML", "description": "", "price": 2.00 },
        { "name": "H2O Garrafa 500ML", "description": "", "price": 5.00 },
        { "name": "Suco de laranja natural", "description": "", "price": 6.00 },
        { "name": "Del Valle frut garrafa 450ML", "description": "Laranja, Uva e Limão", "price": 5.00 },
        { "name": "Skinka Garrafa 450ML", "description": "Frutas vermelhas, Frutas citricas e Uva", "price": 4.00 },
        { "name": "Tampico Laranja Garrafa 450ML", "description": "", "price": 5.00 },
        { "name": "Refrigerante Mini-Pet 237ML", "description": "Guaraná Antartica, Coca-Cola, Fanta Laranja e Sprite", "price": 2.50 },
        { "name": "Refrigerante Lata 350ML", "description": "Guaraná Antartica, Coca-Cola, Coca_Cola Zero, Fanta Laranja, Fanta Uva, Schweppes Citrus, Sprite, Kuat e Itubaína", "price": 5.00 },
        { "name": "Sprite 2 Litros", "description": "", "price": 12.00 },
        { "name": "Fanta Laranja 2 Litros", "description": "", "price": 12.00 },
        { "name": "Coca-Cola 2 Litros", "description": "", "price": 12.00 },
        { "name": "Coca-Cola Zero 2 Litros", "description": "", "price": 12.00 },
        { "name": "Brahma 350ML", "description": "", "price": 5.00 },
        { "name": "Brahma Duplo Malte 350ML", "description": "", "price": 6.00 },
        { "name": "Skol 350ML", "description": "", "price": 5.00 },
        { "name": "Amstel 350ML", "description": "", "price": 6.00 },
        { "name": "Petra 350ML", "description": "", "price": 6.00 },
        { "name": "Eisenbahn 350ML", "description": "", "price": 6.00 },
        { "name": "Heineken 350ML", "description": "", "price": 8.00 }
    ],
    "pastry": [
        { "name": "Pastel de queijo", "description": "", "price": 6.00 },
        { "name": "Pastel de pizza", "description": "", "price": 6.00 },
        { "name": "Pastel de carne", "description": "", "price": 6.00 },
        { "name": "Pastel de bauru", "description": "", "price": 6.00 },
        { "name": "Pastel de frango", "description": "", "price": 6.00 },
        { "name": "Pastel de calabresa", "description": "", "price": 6.00 }
      ],
      "specialPastries": [
        { "name": "Frango com milho", "description": "", "price": 7.00 },
        { "name": "Frango com calabresa", "description": "", "price": 7.50 },
        { "name": "Frango com mussarela", "description": "", "price": 7.50 },
        { "name": "Frango com cheddar", "description": "", "price": 7.50 },
        { "name": "Frango com catupiry original", "description": "", "price": 7.50 },
        { "name": "Carne com catupiry original", "description": "", "price": 7.50 },
        { "name": "Carne com mussarela", "description": "", "price": 7.50 },
        { "name": "Carne com cheddar", "description": "", "price": 7.50 },
        { "name": "Carne com ovo", "description": "", "price": 7.50 },
        { "name": "Queijo com bacon", "description": "", "price": 7.50 },
        { "name": "Calabresa com mussarela", "description": "", "price": 7.50 },
        { "name": "Calabresa com catupiry original", "description": "", "price": 7.50 },
        { "name": "Calabresa com cheddar", "description": "", "price": 7.50 }
      ],
      "additionalPastry": [
          { "name": "Milho", "description": "", "price": 1.00 },
          { "name": "Mussarela", "description": "", "price": 1.50 },
          { "name": "Queijo Prato", "description": "", "price": 1.50 },
          { "name": "Catupiry Original", "description": "", "price": 1.50 },
          { "name": "Cheddar", "description": "", "price": 1.50 },
          { "name": "Bacon", "description": "", "price": 1.50 },
          { "name": "Calabresa", "description": "", "price": 1.50 }
        ],
      "portions": [
        { "name": "Batata frita 250G", "description": "", "price": 7.50 },
        { "name": "Batata frita 250G Com Cheddar e Bacon", "description": "", "price": 12.00 },
        { "name": "Batata frita 250G Com Catupiry Original e Bacon", "description": "", "price": 13.50 },
        { "name": "Batata frita 500G", "description": "", "price": 15.00 },
        { "name": "Batata frita 500G Com Cheddar e Bacon", "description": "", "price": 20.00 },
        { "name": "Batata frita 500G Com Catupiry Original e Bacon", "description": "", "price": 21.00 }
      ],
      "portionsExtras": [
          { "name": "Catupiry Original", "description": "", "price": 2.50 },
          { "name": "Cheddar", "description": "", "price": 2.00 },
          { "name": "Bacon", "description": "", "price": 2.50 },
          { "name": "Catupiry Original", "description": "", "price": 3.00 },
          { "name": "Cheddar", "description": "", "price": 2.00 },
          { "name": "Bacon", "description": "", "price": 3.00 }
      ]
  }

  itens = {
    "data": [
      {"name": "Lanches"},
      {"name": "Pastéis"},
      {"name": "Pastéis Especiais"},
      {"name": "Porções"},
      {"name": "Bebidas"}
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
