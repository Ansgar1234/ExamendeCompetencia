import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ej3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ej3.component.html',
  styleUrl: './ej3.component.css'
})
export class Ej3Component {
  @Input('var') nota!: number ;
  @Input('ventana') ventana: boolean= false;
  @Output() close = new EventEmitter<void>();

  closeModal() {
    this.ventana=false;
    this.close.emit();
  }
  
}
