import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';

import { AlertPopupComponent } from './dialogs/alert-popup/alert-popup.component';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';
import { LoadingScreenComponent } from './dialogs/loading-screen/loading-screen.component';
import { DialogService } from "./dialogs/dialog.service";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AlertPopupComponent, ConfirmDialogComponent, LoadingScreenComponent],
    providers: [DialogService],
    exports: [AlertPopupComponent, ConfirmDialogComponent, LoadingScreenComponent]
})

export class ServicesModule {

}