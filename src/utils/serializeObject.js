export function serializeObject(obj, prefix) {
  let str = [],
    p;
  for (p in obj) {
    if (obj.hasOwnProperty(p)) {
      var k = prefix ? prefix + "[" + p + "]" : p,
        v = obj[p];
      str.push(
        v !== null && typeof v === "object"
          ? serializeObject(v, k)
          : encodeURIComponent(k) + "=" + encodeURIComponent(v)
      );
    }
  }
  return str.join("&");
}
