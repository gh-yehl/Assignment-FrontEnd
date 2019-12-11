export class Profile {
    constructor(    
        public id: string,
        public userName: string,
        public password: string,
        public userType: string,
        public email: string,
        public mobileNumber: string
    ) {}
}