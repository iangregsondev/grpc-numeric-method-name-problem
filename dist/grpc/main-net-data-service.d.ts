import { Metadata } from 'grpc';
import { Observable } from 'rxjs';
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
export declare function MainNetDataServiceControllerMethods(): (constructor: Function) => void;
export declare const protobufPackage = "main_net_data_service";
export declare const MAIN_NET_DATA_SERVICE_PACKAGE_NAME = "main_net_data_service";
export declare const MAIN_NET_DATA_SERVICE_NAME = "MainNetDataService";
