interface dateDataInterface {
    year: number;
    month: number;
    date: number;
}
export interface dataInterface {
    artistName: string;
    productName: string;
    url: string;
    date: dateDataInterface;
    location: string;
    thumbnailUrl: string;
}