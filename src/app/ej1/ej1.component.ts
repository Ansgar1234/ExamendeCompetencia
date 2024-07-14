import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {  FormGroup, ReactiveFormsModule ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-ej1',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ej1.component.html',
  styleUrl: './ej1.component.css'
})
export class Ej1Component {
  @Input('nombre') nombre!: string;
  @Input('nacimiento') nacimiento!: number;
  @Input('var') nota!: number;
  actual: number= new Date().getFullYear();

  
}