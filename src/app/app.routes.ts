import { Routes } from '@angular/router';
import { Ej1Component } from './ej1/ej1.component';
import { Ej2Component } from './ej2/ej2.component';
import { Ej3Component } from './ej3/ej3.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: 'ej1/:nombre/:nacimiento/:var', component: Ej1Component},
    {path: 'ej2/:nombre/:edad', component: Ej2Component},
    {path: 'ej3/:var/:ventana', component: Ej3Component},
];
