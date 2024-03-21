import { Injectable } from '@nestjs/common';
import { MofiLogging } from './utilities/mofi-logging';

@Injectable()
export class AppService {
    constructor(private mofiLogging: MofiLogging) {}

    async getHello(): Promise<string> {
        this.mofiLogging.logger.info('Hello World From Service1');
        return 'Hello World 1!';
    }

    async getHello2(): Promise<string> {
        this.mofiLogging.logger.info('STARTING SERVICE 2');
        await this.delay(10000);
        this.mofiLogging.logger.info('FINISH SERVICE 2');
        return 'Hello World 2!';
    }

    async getHello3(): Promise<string> {
        this.mofiLogging.logger.info('STARTING SERVICE 3');
        await this.delay(5000);
        this.mofiLogging.logger.info('FINISH SERVICE 3');
        return 'Hello World 3!';
    }

    async delay(ms: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}
