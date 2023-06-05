export default interface IServerWidgetData {
    totalOffers: number
    totalRepeatersExp: number
    totalRepeatersCtrl: number
    totalCLVExp: number
    totalCLVCtrl: number
}

export default class ChartCLVData {
    label: string;
    expSum: number;
    ctrlSum: number;

    constructor(label: string, expSum: number, ctrlSum: number) {
        this.label = label;
        this.expSum = expSum;
        this.ctrlSum = ctrlSum;
    }
}

export interface ChartData {
    label: string;
    expSum: number;
    ctrlSum: number;
}

export interface DailyOfferData {
    name: string;
    data: [string?, number?][]
}