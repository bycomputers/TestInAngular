import { Component } from '@angular/core';
import { ConfirmDialogViewModel } from './confirm-dialog.model';
import { DialogService } from '../dialog.service';



@Component({
    selector: 'confirm-dialog-component',
    templateUrl: `confirm-dialog.template.html`,
    moduleId: 'module.id'
})
export class ConfirmDialogComponent {
    public open = true;
   
    constructor(public dialogService: DialogService) {    }

    cancel() {
        this.dialogService.setConfirmDialogResult(false);
        this.dialogService.confirmDialogData.showDialog = false;
    }

    confirm() {
        this.dialogService.setConfirmDialogResult(true);
        this.dialogService.confirmDialogData.showDialog = false;
    }

    

 
}
