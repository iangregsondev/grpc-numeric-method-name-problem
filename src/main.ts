import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as path from 'path';
import { MAIN_NET_DATA_SERVICE_PACKAGE_NAME } from './grpc/main-net-data-service';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {});

  const microservice = app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      url: `0.0.0.0:5017`,
      package: [MAIN_NET_DATA_SERVICE_PACKAGE_NAME],
      protoPath: [
        path.join(__dirname, 'grpc/proto/main-net-data-service.proto'),
      ],
    },
  });

  await app.startAllMicroservicesAsync();

  await app.listen(3008, () => {
    console.log(`Rest ready and listening on port 3000`);
  });
}
bootstrap();
