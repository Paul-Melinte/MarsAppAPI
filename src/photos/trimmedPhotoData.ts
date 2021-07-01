export interface TrimmedPhotoData {
    id: number;
    img_url: string;
    sol: number;
    earth_date: string;
}


export function trimPhotoData(photos: any[]): TrimmedPhotoData[] {
    const trimmedPhotos: TrimmedPhotoData[] = [];

    while(photos.length > 0) {
        const photoData = photos.pop();
        const trimmedPhotoData: TrimmedPhotoData = {
            id: photoData.id,
            img_url: photoData.img_src,
            sol: photoData.sol,
            earth_date: photoData.earth_date
        };

        trimmedPhotos.push(trimmedPhotoData);
    }

    return trimmedPhotos;
}