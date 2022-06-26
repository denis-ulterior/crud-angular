import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  text = 'Denis Souza'
  imageUrl = 'https://picsum.photos/300/300'
  imageDesc = ''
  buttonText = 'Clique aqui'
  textRed = false
  bgColor = 'green'
  widthImg = 600
  textInput = ''
  number = 0
  destroi= false
  constructor() { }

  ngOnInit(): void {
  }

  retornaNome() {
    return this.text
  }
  clicou(value: any) {
    console.log('clicou', value)
    this.textRed = true
  }

  clicouNoFilho(text: any) {
    console.log(text)
  }
  incrementa(){
    this.number++
  }
  destroiComponente(){
    this.destroi =true
  }
}
