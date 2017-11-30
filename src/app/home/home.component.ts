import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  /**
   * On button click, navigate to weather report
   * @param event the click event dispatched
   */
  goToReport(event) {
    event.preventDefault();
    this.router.navigate(['weather']);
  }

}
