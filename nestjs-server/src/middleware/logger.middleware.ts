import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('\n\n\n\nRequest...\n\n');
    console.log('MIDDLEWARE');
    console.log(req.hostname);
    console.log(req.ip);
    console.log(req.params);
    console.log(req.headers);
    console.log(req.body);
    console.log(req.url, req.method);
    console.log(res.statusCode);
    console.log('\n\nMIDDLEWARE\n\n\n\n\n\n');
    next();
  }
}
