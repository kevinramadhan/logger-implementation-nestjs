import { Injectable } from '@nestjs/common';
import { InitLogging } from 'logging';

@Injectable()
export class MofiLogging{
  public logger: any;

  onModuleInit() {
    const initLogging = new InitLogging()
      .withRedaction(['password', 'token'])
      .withFormatter('pino-pretty')
      .withLevel('debug')
      .initialize();

    this.logger = initLogging;
  }
}