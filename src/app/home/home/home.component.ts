import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {

    if (this.router.url === 'employess') {
      this.router.navigateByUrl('/employees');
    }

    if (this.router.url === 'projects') {
      this.router.navigateByUrl('/projects');
    }

   }

  ngOnInit() {
  }

}
