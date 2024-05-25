import { Controller, Get, HttpCode, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller({ path: '/' })
export class HelloController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
  @Get('about')
  index(@Req() request: Request, @Res() response: Response) {
    console.log(request.url);
    response.status(200).send('About page');
  }
  @Get('notfound')
  @HttpCode(404)
  notFoundPage() {
    return 'Not found page';
  }
  @Get('errorpage')
  @HttpCode(500)
  errorPage() {
    return 'Error page';
  }
}
