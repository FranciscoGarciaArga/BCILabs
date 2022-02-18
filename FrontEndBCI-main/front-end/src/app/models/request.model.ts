import { Guid } from 'guid-typescript';
import { CompanyModel } from './company.model';
import { ClientModel } from './client.model';
import { PollModel } from './poll.model';
export class RequestModel {
    Id: string;
    client: ClientModel;
    company: CompanyModel;
    poll: PollModel;
    

    constructor() {
        this.Id = Guid.create().toString();
    }

    newRequestId(){
        this.Id = Guid.create().toString();
    }
}
