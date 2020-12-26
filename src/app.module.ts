import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MainNetController } from './main-net.controller';

@Module({
  imports: [],
  controllers: [AppController, MainNetController],
  providers: [AppService],
})
export class AppModule {}
