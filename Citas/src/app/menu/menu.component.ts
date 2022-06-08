import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



import { AppModule } from 'src/app/app.module';




@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

 tittle = 'menu';
paciente:string;
tipo:String;
medico:String;
 constructor(private fb: FormBuilder,
  private module: AppModule) {
  {

  }
 }
 ngOnInit(): void {
  this.tipo = String(sessionStorage.getItem('tipo'))
  if(this.tipo == "paciente"){

    this.paciente = String('paciente')
    }else if(this.tipo == "medico"){
      this.medico = String('medico')
    }

}




}
