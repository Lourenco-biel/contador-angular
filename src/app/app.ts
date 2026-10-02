import { Component, signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly titulo = signal('Contador Angular');

  contador = signal(0);
  incremento = signal(1);
   situacao = computed(()=>{
    const valor = this.contador();

    if(valor > 0 ){
      return 'positivo';
    }

    if(valor < 0 ){
      return 'negativo';
    }
    return 'zero';
  })

  aumentar(): void {
    this.contador.update((valorAtual) => valorAtual + this.incremento());
  }

  diminuir(): void {
    this.contador.update((valorAtual) => valorAtual - this.incremento());
  }

  zerar(): void {
    this.contador.set(0);
  }

  alterarIncremento(event: Event): void {
    const campo = event.target as HTMLInputElement;
    const novoIncremento = Number(campo.value);

    if (novoIncremento >= 1) {
      this.incremento.set(novoIncremento);
    }
  }

 
}
