import { Controller, Get, HttpCode, Param, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { query, Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';

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

  @Get('ticket/:num')
  getNumber(@Param('num',ParseIntPipe) num: number) {
    return num + 10;
  }

  @Get('greet')
  @UseGuards(AuthGuard)
  greet(@Query(ValidateuserPipe) query: {name: string, age: number}){
    return `Hello ${query.name},you are ${query.age} years old`;
  }
}
