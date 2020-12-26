import { Metadata } from 'grpc';
import { Observable } from 'rxjs';
import { GetLargestBlocksSizes24hRequest, GetLargestBlocksSizes24hResponse, GetLargestBlocksSizesRequest, GetLargestBlocksSizesResponse, GetLastBlocksByHourRequest, GetLastBlocksByHourResponse, MainNetDataServiceController } from './grpc/main-net-data-service';
export declare class MainNetController implements MainNetDataServiceController {
    get123hours(request: GetLargestBlocksSizesRequest, metadata?: Metadata): GetLargestBlocksSizesResponse | Promise<GetLargestBlocksSizesResponse> | Observable<GetLargestBlocksSizesResponse>;
    getLargestBlocksSizes123hours(request: GetLargestBlocksSizesRequest, metadata?: Metadata): Promise<GetLargestBlocksSizesResponse> | Observable<GetLargestBlocksSizesResponse> | GetLargestBlocksSizesResponse;
    getLargestBlocksSizes48hours(request: GetLargestBlocksSizes24hRequest, metadata?: Metadata): GetLargestBlocksSizes24hResponse | Promise<GetLargestBlocksSizes24hResponse> | Observable<GetLargestBlocksSizes24hResponse>;
    getLastBlocksByHour(request: GetLastBlocksByHourRequest, metadata?: Metadata): Promise<GetLastBlocksByHourResponse> | Observable<GetLastBlocksByHourResponse> | GetLastBlocksByHourResponse;
    getLargestBlocksSizes24h(request: GetLargestBlocksSizes24hRequest, metadata?: Metadata): Promise<GetLargestBlocksSizes24hResponse> | Observable<GetLargestBlocksSizes24hResponse> | GetLargestBlocksSizes24hResponse;
    getLargestBlocksSizes(request: GetLargestBlocksSizesRequest, metadata?: Metadata): Promise<GetLargestBlocksSizesResponse> | Observable<GetLargestBlocksSizesResponse> | GetLargestBlocksSizesResponse;
    getLargestBlocksSizes12(request: GetLargestBlocksSizesRequest, metadata?: Metadata): Promise<GetLargestBlocksSizesResponse> | Observable<GetLargestBlocksSizesResponse> | GetLargestBlocksSizesResponse;
    getLargestBlocksSizes24(request: GetLargestBlocksSizes24hRequest, metadata?: Metadata): Promise<GetLargestBlocksSizes24hResponse> | Observable<GetLargestBlocksSizes24hResponse> | GetLargestBlocksSizes24hResponse;
    getLargestBlocksSizes48h(request: GetLargestBlocksSizes24hRequest, metadata?: Metadata): Promise<GetLargestBlocksSizes24hResponse> | Observable<GetLargestBlocksSizes24hResponse> | GetLargestBlocksSizes24hResponse;
}
