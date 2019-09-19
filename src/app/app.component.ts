import { Component } from '@angular/core';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';

@Component({
  selector: 'has-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World!';
  foto = 'favicon.ico';
  peso = 0;
  altura = 0;
  exibir(){
    alert(this.title);
  }
  IMC(){
    let imc = this.peso/(this.altura*this.altura)
      alert(imc);
  }
}
