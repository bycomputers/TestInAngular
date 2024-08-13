export enum EStatePopup {
    Success = 1, Danger = 2, Warning=3,
}

export class PopupViewModel {
    public constructor(title: string, body: string, state: EStatePopup) {
        this.title = title;
        this.body = body;
        this.state = state;
    }
  
    title: string;
    body: string;
    state: EStatePopup;
}