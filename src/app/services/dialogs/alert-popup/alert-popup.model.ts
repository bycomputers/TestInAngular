export enum EStateAlertPopup {
    Success, Danger, Warning,CriticalDanger
}

export class AlertPopupViewModel {
    title: string;
    body: string[];
    classPopup: string;
    showPopup: boolean;
}