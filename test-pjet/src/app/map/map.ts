import { Component,OnInit, AfterViewInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Api } from '../api';

@Component({
  selector: 'app-map',
  imports: [CommonModule],
  templateUrl: './map.html',
  styleUrl: './map.css',
})
export class Map implements OnInit, AfterViewInit{
  
  @ViewChild('mapSvg') mapSvg!: ElementRef<SVGSVGElement>;

 
  @Output() countrySelected = new EventEmitter<any>();

  countries: any[] = [];
  selectedCountry: any = null;

  
  private lastSelectedPath: SVGPathElement | null = null;

  constructor(private api: Api) {}

   ngOnInit(): void {
   
    this.api.getCountryInformation().subscribe(data => {
      this.countries = data;
    });
  }

  ngAfterViewInit(): void {
    
  }

  
  onSvgClick(evt: MouseEvent) {
    const el = evt.target as Element | null;
    if (!el || el.tagName.toLowerCase() !== 'path') return;
  
    const path = el as SVGPathElement;
  
    const byName = path.getAttribute('name');
    const byId   = path.getAttribute('id');
    const byClass = path.getAttribute('class');
  
    const aliasMap: Record<string, string> = {
      "United States of America": "United States",
      "United States": "United States",   
      "Russian Federation": "Russia",
      "Czech Republic": "Czechia"
    };
  
   
    let lookupName = byName || byClass || '';
  
    
    if (aliasMap[lookupName]) {
      lookupName = aliasMap[lookupName];
    }
  
    let match =
      (lookupName && this.countries.find(c => c.name.toLowerCase() === lookupName.toLowerCase())) ||
      (byId && byId.length === 2 && this.countries.find(c => c.iso2 === byId)) ||
      null;
  
    if (!match) return;
  
    this.selectedCountry = match;
  
    if (this.lastSelectedPath) this.lastSelectedPath.classList.remove('selected');
    path.classList.add('selected');
    this.lastSelectedPath = path;
  
    this.countrySelected.emit(this.selectedCountry);
  }
}
