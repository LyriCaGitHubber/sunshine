export default async function getCoords(): Promise<{
  long: number;
  lat: number;
}> {
  const position = await new Promise((resolve: PositionCallback, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

  const coordinates = {
    long: position.coords.longitude,
    lat: position.coords.latitude,
  };
  return coordinates;
}
