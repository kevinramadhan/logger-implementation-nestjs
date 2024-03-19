import { Injectable } from '@nestjs/common';
import { MofiLogging } from './utilities/mofi-logging';

@Injectable()
export class AppService {
  constructor(private mofiLogging: MofiLogging) {}

  getHello(): string {
    this.mofiLogging.logger.info('Hello World From Service');
    return 'Hello World!';
  }
}
