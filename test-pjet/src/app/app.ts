import { Component, signal } from '@angular/core';
import { World } from './world/world';
import { Map } from './map/map';

@Component({
  selector: 'app-root',
  imports: [ World, Map],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('test-pjet');
}

