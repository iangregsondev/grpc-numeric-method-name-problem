import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata } from 'grpc';
import { from, Observable } from 'rxjs';
import {
  GetLargestBlocksSizes24hRequest,
  GetLargestBlocksSizes24hResponse,
  GetLargestBlocksSizesRequest,
  GetLargestBlocksSizesResponse,
  GetLastBlocksByHourRequest,
  GetLastBlocksByHourResponse,
  MainNetDataServiceController,
} from './grpc/main-net-data-service';

@Controller()
export class MainNetController implements MainNetDataServiceController {
  @GrpcMethod('MainNetDataService', 'get123hours')
  get123hours(
    request: GetLargestBlocksSizesRequest,
    metadata?: Metadata,
  ):
    | GetLargestBlocksSizesResponse
    | Promise<GetLargestBlocksSizesResponse>
    | Observable<GetLargestBlocksSizesResponse> {
    throw new Error('Method not implemented.');
  }

  @GrpcMethod('MainNetDataService', 'getLargestBlocksSizes123hours')
  getLargestBlocksSizes123hours(
    request: GetLargestBlocksSizesRequest,
    metadata?: Metadata,
  ):
    | Promise<GetLargestBlocksSizesResponse>
    | Observable<GetLargestBlocksSizesResponse>
    | GetLargestBlocksSizesResponse {
    throw new Error('Method not implemented.');
  }

  @GrpcMethod('MainNetDataService', 'getLargestBlocksSizes48hours')
  getLargestBlocksSizes48hours(
    request: GetLargestBlocksSizes24hRequest,
    metadata?: Metadata,
  ):
    | GetLargestBlocksSizes24hResponse
    | Promise<GetLargestBlocksSizes24hResponse>
    | Observable<GetLargestBlocksSizes24hResponse> {
    throw new Error('Method not implemented.');
  }

  @GrpcMethod('MainNetDataService', 'getLastBlocksByHour')
  getLastBlocksByHour(
    request: GetLastBlocksByHourRequest,
    metadata?: Metadata,
  ):
    | Promise<GetLastBlocksByHourResponse>
    | Observable<GetLastBlocksByHourResponse>
    | GetLastBlocksByHourResponse {
    throw new Error('Method not implemented.');
  }

  @GrpcMethod('MainNetDataService', 'getLargestBlocksSizes24h')
  getLargestBlocksSizes24h(
    request: GetLargestBlocksSizes24hRequest,
    metadata?: Metadata,
  ):
    | Promise<GetLargestBlocksSizes24hResponse>
    | Observable<GetLargestBlocksSizes24hResponse>
    | GetLargestBlocksSizes24hResponse {
    throw new Error('Method not implemented.');
  }

  @GrpcMethod('MainNetDataService', 'getLargestBlocksSizes')
  getLargestBlocksSizes(
    request: GetLargestBlocksSizesRequest,
    metadata?: Metadata,
  ):
    | Promise<GetLargestBlocksSizesResponse>
    | Observable<GetLargestBlocksSizesResponse>
    | GetLargestBlocksSizesResponse {
    return undefined;
  }

  @GrpcMethod('MainNetDataService', 'getLargestBlocksSizes12')
  getLargestBlocksSizes12(
    request: GetLargestBlocksSizesRequest,
    metadata?: Metadata,
  ):
    | Promise<GetLargestBlocksSizesResponse>
    | Observable<GetLargestBlocksSizesResponse>
    | GetLargestBlocksSizesResponse {
    return undefined;
  }

  @GrpcMethod('MainNetDataService', 'getLargestBlocksSizes24')
  getLargestBlocksSizes24(
    request: GetLargestBlocksSizes24hRequest,
    metadata?: Metadata,
  ):
    | Promise<GetLargestBlocksSizes24hResponse>
    | Observable<GetLargestBlocksSizes24hResponse>
    | GetLargestBlocksSizes24hResponse {
    return undefined;
  }
  @GrpcMethod('MainNetDataService', 'getLargestBlocksSizes48h')
  getLargestBlocksSizes48h(
    request: GetLargestBlocksSizes24hRequest,
    metadata?: Metadata,
  ):
    | Promise<GetLargestBlocksSizes24hResponse>
    | Observable<GetLargestBlocksSizes24hResponse>
    | GetLargestBlocksSizes24hResponse {
    return undefined;
  }
}
