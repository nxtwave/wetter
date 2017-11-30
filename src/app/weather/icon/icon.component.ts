import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit{
  @Input() icon: string;

  /**
   * The base url for all icons
   */
  baseUrl = 'http://openweathermap.org/img/w/';

  /**
   * The full url after applying input icon value;
   */
  iconUrl: string;

  /**
   * Component constructor
   */
  constructor() { }

  /**
   * Initialize and create iconUrl
   */
  ngOnInit() {
    console.log('baseUrl', this.baseUrl);
    console.log('icon', this.icon);
    this.iconUrl = `${this.baseUrl}${this.icon}.png`;
    console.log('iconUrl', this.iconUrl);
  }

}
