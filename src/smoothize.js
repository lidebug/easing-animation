function smoothize(from, to, ease) {
  return from + (to - from) * ease;
}

module.exports = smoothize;