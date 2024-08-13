//import { newArray } from '@angular/compiler/src/util';
import { Component, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SpinnerVisibilityService } from 'ng-http-loader';
import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';
import { BooleanLiteral } from 'typescript';
import { KeyValuePair } from '../model/array.interface';
import { EStateAlertPopup } from '../services/dialogs/alert-popup/alert-popup.model';
import { DialogService } from '../services/dialogs/dialog.service';
import { HttpGeneralService } from '../services/httpGeneralService.service';
import { AlertService } from '../services/_alert';
import { ViewChild, AfterViewInit } from "@angular/core";
import { tap, delay, map } from "rxjs/operators";
import { environment } from "../../environments/environment";

@Injectable()
export class _s {
    public Id: string;
    
    constructor( public datepipe: DatePipe, private router: Router, private route: ActivatedRoute, public httpGeneralService: HttpGeneralService, private spinner: SpinnerVisibilityService, private dialogService: DialogService) {

    }



    goToLink(url: string) {
        window.open(url, "_blank");
    }


    IfIdIn(obj: any, id) {
        for (var item of obj) {
            if (item.id == id)
                return true;
        }
        return false;
    }
    IfIdIn2(obj: any, id) {
        for (let w = 0; w < obj.length; w++) {
            console.log("IfIdIn2==?", obj[w].id, id);
            if (obj[w].id == id) {
                return true;
            }
        }
        return false;
    }
    Mathfloor(value) { return Math.floor(value); }
}