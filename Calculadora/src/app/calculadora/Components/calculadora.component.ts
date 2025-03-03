import { Component, OnInit } from '@angular/core';
import { CalculadoraService } from '../services/calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  numero1: string;
  numero2: string;
  resultado: number;
  operacao: string;

  constructor( private CalculadoraService: CalculadoraService ) {
  }

  ngOnInit(): void {
    this.limpar();
   }

  limpar(): void {
    this.numero1 = '0';
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }

  adicionarNumero(Numero: string): void{
    if (this.operacao === null){
      this.numero1 = this.concatenarNumero(this.numero1, Numero);
    }
    else{
      this.numero2 = this.concatenarNumero(this.numero2, Numero);
    }
  }

  concatenarNumero(numAtual: string, numConcat: string): string{
    if (numAtual === '0'|| numAtual === null){
      numAtual = '';
    }
    if(numConcat === '.' && numAtual === ''){
      return '0.'
    }
    if (numConcat === '.' && numAtual.indexOf('.') > -1 ){
      return numAtual;
    }

    return numAtual + numConcat;
  }

  definirOperacao(operacao: string): void{
    if (this.operacao === null){
      this.operacao = operacao;
      return;
    }
    if (this.numero2 !== null){
      this.resultado = this.CalculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao
      )
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    }
  }

  calcular(): void{
    if (this.numero2 === null){
      return
    }
    this.resultado = this.CalculadoraService.calcular(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao
    );
  }

  get display(): string{
    if (this.resultado !== null){
      return this.resultado.toString();
    }
    if (this.numero2 !== null){
      return this.numero2;
    }
    return this.numero1;
  }
}
