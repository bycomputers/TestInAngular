import { Injectable } from '@angular/core';
import { DialogService } from '../services/dialogs/dialog.service';
import { EStateAlertPopup } from '../services/dialogs/alert-popup/alert-popup.model';
import { HttpGeneralService } from '../services/httpGeneralService.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, Params, RouterStateSnapshot, CanActivate, ActivatedRouteSnapshot } from '@angular/router';


@Injectable()
export class OutsideService implements CanActivate {
    private controller = `Data`;
    //private getUserNameMethod = `getUserName`;
    //private getUserNameMethod = `getUserObj`;


    constructor(private router: Router, private rout: ActivatedRoute, public httpGeneralService: HttpGeneralService, private dialogService: DialogService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        console.log(this.router);
        console.log("outside.service->canActivate");

        // if (this.generalService.user && this.generalService.Lookup_GetTextEditor != undefined)
        //     return true
        // else {
        return new Promise((resolve) => {
            this.httpGeneralService.GetData("Users/getPermissionUser", null, null, null).subscribe((data: any) => {
                console.log("Permission: " + data);
                this.httpGeneralService.Permission = data;
                if (data == undefined) 
                    this.dialogService.alertPopup(["אין הרשאות"], EStateAlertPopup.Warning);
            });
            this.httpGeneralService.GetData("Users/GetUser", null, null, null).subscribe((data: any) => {
                console.log("CurrentUser: " + data);
                this.httpGeneralService.CurrentUser = data;
                if (data == undefined) 
                    this.dialogService.alertPopup(["יוזר לא רשום"], EStateAlertPopup.Warning);
                else
                    resolve(true);
            });
        });
       
    }
}


