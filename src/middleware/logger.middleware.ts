import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { MofiLogging } from 'src/utilities/mofi-logging';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    constructor(private mofiLogging: MofiLogging) {}

    use(req: Request, res: Response, next: NextFunction) {
        this.mofiLogging.logger.httpMiddleware(req, res);
        next();
    }
}
