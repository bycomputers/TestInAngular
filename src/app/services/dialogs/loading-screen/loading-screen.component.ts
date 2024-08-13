import { Component } from '@angular/core';
import { LoadingScreenComponentViewModel } from './loading-screen.model';
import { DialogService } from '../dialog.service';



@Component({
    selector: 'loading-screen-component',
    templateUrl: `loading-screen.template.html`,
	moduleId: 'module.id'
})
export class LoadingScreenComponent {
    private urlLoading: string = 'Content/images/ajax-loader.gif';

    constructor(public dialogService: DialogService) { }

    getIsLoading() {

    }

}
