/* eslint-disable */
import { Metadata } from 'grpc';
import { Observable } from 'rxjs';
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';


export interface GetLastBlocksByHourRequest {
  hours: number;
}

export interface GetLastBlocksByHourResponse {
  blocks: Block[];
}

export interface GetLargestBlocksSizes24hRequest {
}

export interface GetLargestBlocksSizes24hResponse {
  blocks: Block[];
}

export interface GetLargestBlocksSizesRequest {
}

export interface GetLargestBlocksSizesResponse {
  blocks: Block[];
}

export interface Block {
  hash: string;
  previousBlock: string;
  time: string;
  height: number;
  size: string;
  numberOfTxs: number;
  difficulty: number;
  version: string;
  merkleRoot: string;
  medianTime: string;
  nonce: string;
  bits: string;
  chainWork: string;
  longestChain: boolean;
}

export interface MainNetDataServiceClient {

  getLastBlocksByHour(request: GetLastBlocksByHourRequest, metadata?: Metadata): Observable<GetLastBlocksByHourResponse>;

  getLargestBlocksSizes24h(request: GetLargestBlocksSizes24hRequest, metadata?: Metadata): Observable<GetLargestBlocksSizes24hResponse>;

  getLargestBlocksSizes(request: GetLargestBlocksSizesRequest, metadata?: Metadata): Observable<GetLargestBlocksSizesResponse>;

  getLargestBlocksSizes12(request: GetLargestBlocksSizesRequest, metadata?: Metadata): Observable<GetLargestBlocksSizesResponse>;

  getLargestBlocksSizes24(request: GetLargestBlocksSizes24hRequest, metadata?: Metadata): Observable<GetLargestBlocksSizes24hResponse>;

  getLargestBlocksSizes48h(request: GetLargestBlocksSizes24hRequest, metadata?: Metadata): Observable<GetLargestBlocksSizes24hResponse>;

  getLargestBlocksSizes48hours(request: GetLargestBlocksSizes24hRequest, metadata?: Metadata): Observable<GetLargestBlocksSizes24hResponse>;

  getLargestBlocksSizes123hours(request: GetLargestBlocksSizesRequest, metadata?: Metadata): Observable<GetLargestBlocksSizesResponse>;

  get123hours(request: GetLargestBlocksSizesRequest, metadata?: Metadata): Observable<GetLargestBlocksSizesResponse>;

}

export interface MainNetDataServiceController {

  getLastBlocksByHour(request: GetLastBlocksByHourRequest, metadata?: Metadata): Promise<GetLastBlocksByHourResponse> | Observable<GetLastBlocksByHourResponse> | GetLastBlocksByHourResponse;

  getLargestBlocksSizes24h(request: GetLargestBlocksSizes24hRequest, metadata?: Metadata): Promise<GetLargestBlocksSizes24hResponse> | Observable<GetLargestBlocksSizes24hResponse> | GetLargestBlocksSizes24hResponse;

  getLargestBlocksSizes(request: GetLargestBlocksSizesRequest, metadata?: Metadata): Promise<GetLargestBlocksSizesResponse> | Observable<GetLargestBlocksSizesResponse> | GetLargestBlocksSizesResponse;

  getLargestBlocksSizes12(request: GetLargestBlocksSizesRequest, metadata?: Metadata): Promise<GetLargestBlocksSizesResponse> | Observable<GetLargestBlocksSizesResponse> | GetLargestBlocksSizesResponse;

  getLargestBlocksSizes24(request: GetLargestBlocksSizes24hRequest, metadata?: Metadata): Promise<GetLargestBlocksSizes24hResponse> | Observable<GetLargestBlocksSizes24hResponse> | GetLargestBlocksSizes24hResponse;

  getLargestBlocksSizes48h(request: GetLargestBlocksSizes24hRequest, metadata?: Metadata): Promise<GetLargestBlocksSizes24hResponse> | Observable<GetLargestBlocksSizes24hResponse> | GetLargestBlocksSizes24hResponse;

  getLargestBlocksSizes48hours(request: GetLargestBlocksSizes24hRequest, metadata?: Metadata): Promise<GetLargestBlocksSizes24hResponse> | Observable<GetLargestBlocksSizes24hResponse> | GetLargestBlocksSizes24hResponse;

  getLargestBlocksSizes123hours(request: GetLargestBlocksSizesRequest, metadata?: Metadata): Promise<GetLargestBlocksSizesResponse> | Observable<GetLargestBlocksSizesResponse> | GetLargestBlocksSizesResponse;

  get123hours(request: GetLargestBlocksSizesRequest, metadata?: Metadata): Promise<GetLargestBlocksSizesResponse> | Observable<GetLargestBlocksSizesResponse> | GetLargestBlocksSizesResponse;

}

export function MainNetDataServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['getLastBlocksByHour', 'getLargestBlocksSizes24h', 'getLargestBlocksSizes', 'getLargestBlocksSizes12', 'getLargestBlocksSizes24', 'getLargestBlocksSizes48h', 'getLargestBlocksSizes48hours', 'getLargestBlocksSizes123hours', 'get123hours'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod('MainNetDataService', method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod('MainNetDataService', method)(constructor.prototype[method], method, descriptor);
    }
  }
}

export const protobufPackage = 'main_net_data_service'

export const MAIN_NET_DATA_SERVICE_PACKAGE_NAME = 'main_net_data_service'
export const MAIN_NET_DATA_SERVICE_NAME = 'MainNetDataService';