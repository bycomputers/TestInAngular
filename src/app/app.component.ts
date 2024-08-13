import { Component } from '@angular/core';
import { Router,ActivatedRoute, NavigationStart, NavigationEnd } from '@angular/router';
import { SpinnerVisibilityService } from 'ng-http-loader';
import { ViewChild, AfterViewInit } from "@angular/core";
import { _s } from './services/global';
import { HttpGeneralService } from './services/httpGeneralService.service';
import { tap, delay, map } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  @ViewChild("autocomplete", { static: false })
  public autocompleteData: Array<any> = [];
  public autocompleteVal: any;


  constructor(public s: _s, public httpGeneralService: HttpGeneralService, private router: Router, private route: ActivatedRoute,  private spinner: SpinnerVisibilityService) { 

  }
  isLoading: boolean = false;
  ngOnInit() {
    this.autocompleteVal = "1";


    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          this.spinner.show(); 
        }
        else if (event instanceof NavigationEnd) {
          let that = this;
          setTimeout(function () {
            that.spinner.hide();
          }, 100)
        }
      },
      error => {
        this.spinner.hide();
        console.log(error);
      })
  }

  

}
