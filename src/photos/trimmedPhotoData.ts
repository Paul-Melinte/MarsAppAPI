export interface TrimmedPhotoData {
    id: number;
    img_url: string;
    sol: number;
    earth_date: string;
}


export function trimPhotoData(photos: any[]): TrimmedPhotoData[] {
    const trimmedPhotos: TrimmedPhotoData[] = [];

    photos.forEach(photo => {
        const trimmedPhotoData: TrimmedPhotoData = {
            id: photo.id,
            img_url: photo.img_src,
            sol: photo.sol,
            earth_date: photo.earth_date
        };

        trimmedPhotos.push(trimmedPhotoData);
    });

    return trimmedPhotos;
}