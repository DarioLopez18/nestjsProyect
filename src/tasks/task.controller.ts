import { Controller, Get } from "@nestjs/common";

@Controller({path: 'tasks'})
export class TaskController{
    @Get('/')
    getTasks(){
        return 'Get all tasks';
    }
}