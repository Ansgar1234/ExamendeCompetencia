import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ej2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ej2.component.html',
  styleUrl: './ej2.component.css'
})
export class Ej2Component {
  @Input('edad') edad!:number;
  @Input('nombre') nombre!:string;
  
}
