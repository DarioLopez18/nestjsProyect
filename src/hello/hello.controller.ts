import { Controller, Get } from '@nestjs/common';

@Controller({path:"/"})
export class HelloController {
    @Get()
    getHello(): string {
        return 'Hello World!';
    }
}
