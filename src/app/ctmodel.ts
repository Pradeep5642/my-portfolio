export class Ctmodel {
    constructor(
        public Name: string,
        public Email: string,
        public Phone: number | null,
        public Purpose: string,
        public Preference: string,
        public Street: string,
        public City: string,
        public State: string,
        public Message: string,
        public Postalcode: number | null
    ){}
}
