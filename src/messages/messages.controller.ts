import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {CreateMessageDTO} from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {

    @Get()
    getAllMessages() {
        return "All messages";
    }

    @Post()
    postMessage(@Body() body: CreateMessageDTO) {
        console.log(body);
        return "Post message";
    }

    @Get(":id")
    getMessage(@Param('id') id: string) {
        console.log(id);
        return "Certain message";
    }

}
