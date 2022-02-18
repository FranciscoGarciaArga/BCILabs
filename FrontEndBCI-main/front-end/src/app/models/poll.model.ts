export class PollModel {
    stars:number;
    opinion:string;
    requestId:string;

    constructor(star:number, opinion:string, requestId:string) {
        this.stars = star;
        this.opinion = opinion;
        this.requestId = requestId;
    }
}
