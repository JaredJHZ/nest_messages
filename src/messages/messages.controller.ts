import { Body, Controller, Get, Param, Post, NotFoundException } from '@nestjs/common';
import {CreateMessageDTO} from './dtos/create-message.dto';
import { MessagesRepository } from './messages.repository';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {

    

    constructor(private messageService: MessagesService) {}

    @Get()
    getAllMessages() {
        return this.messageService.findAll();
    }

    @Post()
    postMessage(@Body() body: CreateMessageDTO) {
        console.log(body);
        return this.messageService.create(body.content);
    }

    @Get(":id")
    async getMessage(@Param('id') id: string) {
        
        const message = await this.messageService.findOne(id);

        if(!message) {
            throw new NotFoundException('Message not found');
        }

        return message;


    }

}
