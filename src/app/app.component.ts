import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Ej2Component } from "./ej2/ej2.component";
import { Ej3Component } from './ej3/ej3.component';
import { Ej1Component } from "./ej1/ej1.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ReactiveFormsModule, CommonModule, Ej2Component, Ej3Component, Ej1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ex';
  form:FormGroup;
  nombre: string='';
  nacimiento!: number;
  nota!: number;
  edad!: string;
  ventana: boolean = false;
  vari!: string;



  constructor(private fb: FormBuilder, private router: Router){
    this.form= this.fb.group({
      nombre:'',
      nacimiento:'',
      nota:''
    })
  }

  asignar(){
    this.nombre=this.form.get('nombre')?.value;
    this.nacimiento=this.form.get('nacimiento')?.value;
    this.nota=this.form.get('nota')?.value;
    this.ventana=true;
    if(this.nacimiento<=new Date().getFullYear() && this.nacimiento>=new Date().getFullYear()-100){
      this.edad= String(new Date().getFullYear() - this.nacimiento)
    }else{
      this.edad= ''
    }
    this.router.navigate(['/ej1/'+this.nombre+'/'+this.nacimiento+'/'+this.nota]);

  }
}
