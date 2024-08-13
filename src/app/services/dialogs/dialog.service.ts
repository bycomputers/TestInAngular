//import Rx from 'rxjs/Rx';
import { Subject ,  Observable } from 'rxjs';
import { Component } from '@angular/core';
import { AlertPopupViewModel } from './alert-popup/alert-popup.model';
import { ConfirmDialogViewModel } from './confirm-dialog/confirm-dialog.model';
import { EStateAlertPopup } from './alert-popup/alert-popup.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class DialogService {
    public alertPopUpData: AlertPopupViewModel = new AlertPopupViewModel();
    public confirmDialogData: ConfirmDialogViewModel = new ConfirmDialogViewModel();
    public subject = new Subject();
    private timeOutPopup: number = 0;
    public isLoading: boolean = false;

    alertPrevStep: string = 'האם ברצונך לצאת מבלי לשמור את השינויים?';
    alertSaveDone: string = 'המידע נשמר';

    public constructor(private router: Router) {
    }

    ngOnInit() {
    }

    alertPopup(body: string[], state: EStateAlertPopup, title: string = ' ') {
        this.alertPopUpData.body = body;
       // this.alertPopUpData.body.push("המידע לא נשמר") ;
        this.alertPopUpData.title = title;

        switch (state) {
            case EStateAlertPopup.Success:
                this.alertPopUpData.classPopup = 'success';
                break;
            case EStateAlertPopup.Danger:
            case EStateAlertPopup.CriticalDanger:
                this.alertPopUpData.classPopup = 'danger';
                break;
            case EStateAlertPopup.Warning:
                this.alertPopUpData.classPopup = 'warning';
                break;
        }
        
        this.alertPopUpData.showPopup = true;

        if (state != EStateAlertPopup.CriticalDanger) {
            let that = this;
            setTimeout(function () {
                that.alertPopUpData.showPopup = false;
            }, 7000);
        }
    }

    alertConfirm(body: string, title: string = ' ') {
        this.confirmDialogData.title = title;
        this.confirmDialogData.body = body;
        this.confirmDialogData.showDialog = true;
    }

    setConfirmDialogResult(isConfirm: boolean): void {
        this.subject.next(isConfirm);
    }

  getConfirmDialogResult(): Observable<{}>/*void*/ {
        return this.subject.asObservable();
    }

    setAlertLoadingScreen(value: boolean): void {
        this.isLoading = value;
    }

}
