export class ProposedTraining {
    constructor(
        public userId: string,
        public mentorId:string,
        public technologyId: string,
        public startTime: string,
        public endTime: string,

        public mentorName: string,
        public workingYears: string,
        public trainingsDelivered: string,
        public contactNumber: string,
        public email: string
    ) {}
}
