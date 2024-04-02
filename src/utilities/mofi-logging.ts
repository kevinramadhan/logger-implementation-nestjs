import { Injectable } from '@nestjs/common';
import { InitLogging, InitMiddleware } from 'logging';

@Injectable()
export class MofiLogging{
    public logger: any;
    public loggerMiddleware: any;

    onModuleInit() {
        const initLogging = new InitLogging()
            .withRedaction(['password', 'token'])
            .withFormatter('pino-pretty')
            .withLevel('debug')
            .initialize();

        this.logger = initLogging;
        this.loggerMiddleware = new InitMiddleware().handleLogger(initLogging).initialize();
    }
}