//import { newArray } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SpinnerVisibilityService } from 'ng-http-loader';
import { Subscription, forkJoin } from 'rxjs';
import { DatePipe } from '@angular/common';
import { BooleanLiteral } from 'typescript';
import { KeyValuePair } from '../model/array.interface';
import { EStateAlertPopup } from '../services/dialogs/alert-popup/alert-popup.model';
import { DialogService } from '../services/dialogs/dialog.service';
import { HttpGeneralService } from '../services/httpGeneralService.service';
import { AlertService } from '../services/_alert';
import { _s } from '../services/global';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})


export class HomeComponent {//implements AfterViewInit
 
  constructor( private fb: FormBuilder, public s: _s, public datepipe: DatePipe, private router: Router, private route: ActivatedRoute, public httpGeneralService: HttpGeneralService, private spinner: SpinnerVisibilityService, private dialogService: DialogService) {
    route.params.subscribe(params => {
      if (params["Id"] != undefined) {
        this.s.Id = params["Id"];
      }
    });

  }
  public Lookup_permission: KeyValuePair<number, string>[];
  contactForm: FormGroup;
  cities: { value: string, label: string }[] = [
    { value: '23919fc1-2abf-e911-81ad-005056967590', label: 'אבו ג\'ווייעד (שבט)' },
    // Add more cities here
  ];
  ngOnInit() {
    this.Lookup_permission = [{ key: 1, value: 'ניהול' }, { key: 3, value: 'עריכה' }, { key: 6, value: 'צפייה' }];
    console.log("start");
    this.contactForm = this.fb.group({
      salutation: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      govId: ['', Validators.required],
      organization: [''],
      mobilePhone: [''],
      homePhone: [''],
      fax: [''],
      email: ['', [Validators.email]],
      city: [''],
      address: [''],
      zipcode: [''],
      isRepresenting: [false],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      // Handle form submission
    }
  }

  onIsRepresentingChange() {
    const isRepresenting = this.contactForm.get('isRepresenting').value;
    // Logic to show/hide YipuyKoach div
  }


  
}
