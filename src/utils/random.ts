const chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
export const generateRandomString = () => {
  return Array.from(crypto.getRandomValues(new Uint32Array(20)))
    .map((x) => chars[x % chars.length])
    .join("");
};


