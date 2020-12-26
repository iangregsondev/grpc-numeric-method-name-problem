"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAIN_NET_DATA_SERVICE_NAME = exports.MAIN_NET_DATA_SERVICE_PACKAGE_NAME = exports.protobufPackage = exports.MainNetDataServiceControllerMethods = void 0;
const microservices_1 = require("@nestjs/microservices");
function MainNetDataServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ['getLastBlocksByHour', 'getLargestBlocksSizes24h', 'getLargestBlocksSizes', 'getLargestBlocksSizes12', 'getLargestBlocksSizes24', 'getLargestBlocksSizes48h', 'getLargestBlocksSizes48hours', 'getLargestBlocksSizes123hours', 'get123hours'];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            microservices_1.GrpcMethod('MainNetDataService', method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            microservices_1.GrpcStreamMethod('MainNetDataService', method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.MainNetDataServiceControllerMethods = MainNetDataServiceControllerMethods;
exports.protobufPackage = 'main_net_data_service';
exports.MAIN_NET_DATA_SERVICE_PACKAGE_NAME = 'main_net_data_service';
exports.MAIN_NET_DATA_SERVICE_NAME = 'MainNetDataService';
//# sourceMappingURL=main-net-data-service.js.map