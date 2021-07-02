export interface TrimmedRoverData {
    name: string,
    max_sol: number,
    cameras: string[]
};

export function trimRoverData(rovers: any[]): TrimmedRoverData[] {
    const trimmedRovers: TrimmedRoverData[] = [];

    rovers.forEach(rover => {
        const trimmedRoverData:TrimmedRoverData = {
            name: rover.name,
            max_sol: rover.max_sol,
            cameras: []
        };

        const cameras: any[] = rover.cameras;

        cameras.forEach(camera => {
            trimmedRoverData.cameras.push(camera.name);
        });

        trimmedRovers.push(trimmedRoverData);
    });

    return trimmedRovers;
}