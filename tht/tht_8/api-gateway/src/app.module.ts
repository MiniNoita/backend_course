import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SERVICE_A',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 8888,
        },
      },
      {
        name: 'SERVICE_B',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 8889,
        },
      },
      {
        name: 'rocket-microservice',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 8890,
        },
      },
      {
        name: 'MATH_SERVICE',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 8866,
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
