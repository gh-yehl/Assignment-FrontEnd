export class IPODetails {
    constructor(
        public id: string,
        public companyName: string,
        public stockExchange: string,
        public pricePerShare: string,
        public numberOfShares: string,
        public openTime: string,
        public remarks: string,  

    ) {}
}