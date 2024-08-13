import { Component } from '@angular/core';
import { AlertPopupViewModel } from './alert-popup.model';
import { DialogService } from '../dialog.service';


@Component({
    selector: 'alert-popup-component',
    templateUrl: `alert-popup.template.html`,
    moduleId: 'module.id'
})
export class AlertPopupComponent {
    constructor(public dialogService: DialogService) {    }
   

    close() {
        this.dialogService.alertPopUpData.showPopup = false;
     }

}
