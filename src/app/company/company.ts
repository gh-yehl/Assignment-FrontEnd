export class Company {
    constructor(
        public id: string,
        public companyName: string,
        public stockCode: string,
        public stockExchange: string,
        public turnover: string,

        public ceo: string,
        public directors: string,
        public sectorName: string,
        public brief: string,
        public status: string

    ) {}
}