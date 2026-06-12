import { Routes } from '@angular/router';
import { World } from './world/world';

export const routes: Routes = [
    { path: '', redirectTo: 'world', pathMatch: 'full' },
    { path: 'world', component: World }
];
