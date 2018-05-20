import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router) { 
    console.log("404");
    setTimeout(() => this.router.navigateByUrl('/authentication') , 3000);
  }

  ngOnInit() {
  }

}
