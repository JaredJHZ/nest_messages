import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";

@Injectable()
export class MessagesService {


    private messageRepos: MessagesRepository;

    constructor() {
        this.messageRepos = new MessagesRepository();
    }

    findOne(id: string) {
        return this.messageRepos.findOne(id);
    }


    findAll() {
        return this.messageRepos.findAll();
    }

    create(content: string) {
        return this.messageRepos.create(content);
    }

}
