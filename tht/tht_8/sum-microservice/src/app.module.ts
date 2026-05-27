import { Module } from '@nestjs/common';
import { MathController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [MathController],
  providers: [AppService],
})
export class AppModule {}
