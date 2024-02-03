import { Routes } from '@angular/router';
import { Hoja1Component } from './hoja1/hoja1.component';
import { Hoja2Component } from './hoja2/hoja2.component';
import { Hoja3Component } from './hoja3/hoja3.component';
import { Hoja4Component } from './hoja4/hoja4.component';

export const routes: Routes = [
    {path:'hoja1', component: Hoja1Component},
    {path:'hoja2', component: Hoja2Component},
    {path:'hoja3', component: Hoja3Component},
    {path:'hoja4', component: Hoja4Component}
    
];
