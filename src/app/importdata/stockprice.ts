export class StockPrice {
    constructor(
        public stockCode: string,
        public stockExchange: string,
        public currentPrice: string,
        public dateTime: string,
        public totalRows: string,
        public companyName: string,  
        public fromDateTime: string,
        public toDateTime: string, 
    ) {}
}