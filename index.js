function reverse(string) {
  const arr = string.split("");
  const revarr = arr.reverse();
  const revstring = revarr.join("");
  return revstring;
}
module.exports = reverse;
