"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainNetController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const grpc_1 = require("grpc");
let MainNetController = class MainNetController {
    get123hours(request, metadata) {
        throw new Error('Method not implemented.');
    }
    getLargestBlocksSizes123hours(request, metadata) {
        throw new Error('Method not implemented.');
    }
    getLargestBlocksSizes48hours(request, metadata) {
        throw new Error('Method not implemented.');
    }
    getLastBlocksByHour(request, metadata) {
        throw new Error('Method not implemented.');
    }
    getLargestBlocksSizes24h(request, metadata) {
        throw new Error('Method not implemented.');
    }
    getLargestBlocksSizes(request, metadata) {
        return undefined;
    }
    getLargestBlocksSizes12(request, metadata) {
        return undefined;
    }
    getLargestBlocksSizes24(request, metadata) {
        return undefined;
    }
    getLargestBlocksSizes48h(request, metadata) {
        return undefined;
    }
};
__decorate([
    microservices_1.GrpcMethod('MainNetDataService', 'get123hours'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, grpc_1.Metadata]),
    __metadata("design:returntype", Object)
], MainNetController.prototype, "get123hours", null);
__decorate([
    microservices_1.GrpcMethod('MainNetDataService', 'getLargestBlocksSizes123hours'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, grpc_1.Metadata]),
    __metadata("design:returntype", Object)
], MainNetController.prototype, "getLargestBlocksSizes123hours", null);
__decorate([
    microservices_1.GrpcMethod('MainNetDataService', 'getLargestBlocksSizes48hours'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, grpc_1.Metadata]),
    __metadata("design:returntype", Object)
], MainNetController.prototype, "getLargestBlocksSizes48hours", null);
__decorate([
    microservices_1.GrpcMethod('MainNetDataService', 'getLastBlocksByHour'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, grpc_1.Metadata]),
    __metadata("design:returntype", Object)
], MainNetController.prototype, "getLastBlocksByHour", null);
__decorate([
    microservices_1.GrpcMethod('MainNetDataService', 'getLargestBlocksSizes24h'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, grpc_1.Metadata]),
    __metadata("design:returntype", Object)
], MainNetController.prototype, "getLargestBlocksSizes24h", null);
__decorate([
    microservices_1.GrpcMethod('MainNetDataService', 'getLargestBlocksSizes'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, grpc_1.Metadata]),
    __metadata("design:returntype", Object)
], MainNetController.prototype, "getLargestBlocksSizes", null);
__decorate([
    microservices_1.GrpcMethod('MainNetDataService', 'getLargestBlocksSizes12'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, grpc_1.Metadata]),
    __metadata("design:returntype", Object)
], MainNetController.prototype, "getLargestBlocksSizes12", null);
__decorate([
    microservices_1.GrpcMethod('MainNetDataService', 'getLargestBlocksSizes24'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, grpc_1.Metadata]),
    __metadata("design:returntype", Object)
], MainNetController.prototype, "getLargestBlocksSizes24", null);
__decorate([
    microservices_1.GrpcMethod('MainNetDataService', 'getLargestBlocksSizes48h'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, grpc_1.Metadata]),
    __metadata("design:returntype", Object)
], MainNetController.prototype, "getLargestBlocksSizes48h", null);
MainNetController = __decorate([
    common_1.Controller()
], MainNetController);
exports.MainNetController = MainNetController;
//# sourceMappingURL=main-net.controller.js.map