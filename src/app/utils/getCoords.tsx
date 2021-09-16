export default async function getCoords(): Promise {
  const position = await new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
  const coordinates = {
    long: position.coords.longitude,
    lat: position.coords.latitude,
  };
  return coordinates;
}
