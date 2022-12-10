export function isObject(object: any) {
  return typeof object === "object" && !Array.isArray(object) && object !== null && object;
}
