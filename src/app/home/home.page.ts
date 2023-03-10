import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';
import { info } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  radioSelecionada:string='';
  resultado:string="";
  altura:string="";
  calcular:number=0


  constructor(
    public toastController: ToastController,
    public alertController: AlertController
  ) {}


  calc(){
    if(this.radioSelecionada=='Homem'){
      this.calcular = parseFloat(this.altura) * 72.7 -58;
    }


  else{
    this.calcular= parseFloat(this.altura) * 62.1 -44.7;
  }
}

verificarRadio (){
  this.calc()
  this.exibirAlerta();
}

  async exibirAlerta(){
    const alert = await this.alertController.create({
      message: "Seu peso deve ser:",
      buttons: ['OK']
    });
    alert.present();
  }
}
