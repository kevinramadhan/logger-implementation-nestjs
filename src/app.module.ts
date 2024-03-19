import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { LoggerMiddleware } from './middleware/logger.middleware';
import { AppService } from './app.service';
import { MofiLogging } from './utilities/mofi-logging';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, MofiLogging],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}