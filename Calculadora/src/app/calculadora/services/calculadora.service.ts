import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  //Definição das constantes para identificar as operações
  static readonly SOMA: string = "+";
  static readonly SUBTRACAO: string = "-";
  static readonly DIVISAO: string = "/";
  static readonly MULTIPLICACAO: string = "*";

  constructor() { }

/**
 * Metodo utilizado para calcular o valor da operação
 * @param num1: primeiro valor inserido pelo usuário na calculadora
 * @param num2: segundo valor inserido pelo usuário na calculadora
 * @param operacao: Operação solicitada pelo usuário
 * @returns: Resultado
 */
calcular(num1: number, num2: number, operacao: string): number{
  let resultado: number;

  switch(operacao){
    case CalculadoraService.SOMA:
      resultado = num1 + num2;
      break;
    case CalculadoraService.SUBTRACAO:
      resultado = num1 - num2;
      break;
    case CalculadoraService.DIVISAO:
      resultado = num1 / num2;
      break;
    case CalculadoraService.MULTIPLICACAO:
      resultado = num1 * num2;
      break;
    default:
        resultado = 0;
  }
  return resultado
}

}
