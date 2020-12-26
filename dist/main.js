"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path = require("path");
const main_net_data_service_1 = require("./grpc/main-net-data-service");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {});
    const microservice = app.connectMicroservice({
        transport: microservices_1.Transport.GRPC,
        options: {
            url: `0.0.0.0:5017`,
            package: [main_net_data_service_1.MAIN_NET_DATA_SERVICE_PACKAGE_NAME],
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
//# sourceMappingURL=main.js.map