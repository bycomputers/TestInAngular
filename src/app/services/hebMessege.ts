import { Injectable } from "@angular/core";
//import { MessageService } from "@progress/kendo-angular-l10n";

const messages = {
    "kendo.grid.groupPanelEmpty": "כדי לקבץ לפי העמודה גרור כותרת העמודה לכאן",
    "kendo.grid.noRecords": "אין רשומות זמינות.",
    "kendo.grid.pagerFirstPage": "לעמוד הראשון",
    "kendo.grid.pagerPreviousPage": "לעמוד הקודם",
    "kendo.grid.pagerNextPage": "לעמוד הבא",
    "kendo.grid.pagerLastPage": "לעמוד האחרון",
    "kendo.grid.pagerPage": "עמוד",
    "kendo.grid.pagerOf": "מתוך",
    "kendo.grid.pagerItems": "פריטים",
    "kendo.grid.pagerItemsPerPage": "פריטים בעמוד"
};

@Injectable()
export class HebMessegeService{// extends MessageService {
    public get(key: string): string {
        return messages[key];
    }
}