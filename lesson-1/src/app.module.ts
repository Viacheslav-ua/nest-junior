import { Module } from '@nestjs/common';
import { TestController } from './test/test.controller';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [TestController]
})
export class AppModule {}
