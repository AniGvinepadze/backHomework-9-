const randomMidlleaware = (req, res, next) => {
    const random = Math.random()
    console.log(`Random value: ${random}`);
  if (random < 0.5) {
    return res.status(403).json({ message: "random rejected" });
  }
  next();
};
module.exports = randomMidlleaware;
