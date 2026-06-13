import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { World } from './world/world';
import { Map } from './map/map';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, World, Map],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('test-pjet');
}
