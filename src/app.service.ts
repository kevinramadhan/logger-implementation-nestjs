import { Injectable } from '@nestjs/common';
import { MofiLogging } from './utilities/mofi-logging';

@Injectable()
export class AppService {
    constructor(private mofiLogging: MofiLogging) {}

    getHello(): string {
        this.mofiLogging.logger.info('Hello World From Service1');
        return 'Hello World!';
    }

    async getHello2(): Promise<string> {
        this.mofiLogging.logger.info('STARTING SERVICE 2');
        await this.delay(5000); // Delay for 3 seconds
        this.mofiLogging.logger.info('FINISH SERVICE 2');
        this.mofiLogging.logger.info('Hello World From Service2');
        return 'Hello World!';
    }

    async delay(ms: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
}
