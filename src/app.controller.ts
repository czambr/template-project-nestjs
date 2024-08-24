import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {

  constructor() { }

  @Get('check-status')
  getStatus(@Res() res: Response) {
    return res.status(200).json({
      success: true,
      message: 'active'
    });
  }
}
