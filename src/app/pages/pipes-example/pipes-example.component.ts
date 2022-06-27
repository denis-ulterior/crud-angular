import { UpperCasePipe } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  templateUrl: './pipes-example.component.html',
  styleUrls: ['./pipes-example.component.css']
})
export class PipesExampleComponent implements OnInit {

  number = 0
  text = 'hello-word'
  date = new Date
  pessoa = {
    nome: 'Denis',
    idade: 30,
    profissao: 'Desenvolvedor'
  }
  nomes = [
    'Denis'
  ]

  constructor(private upperCasePipe: UpperCasePipe, private changeDetection: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.text = this.upperCasePipe.transform(this.text)
  }
  add(text: string) {
    this.nomes.push(text)
    this.changeDetection.detectChanges()
  }
}
