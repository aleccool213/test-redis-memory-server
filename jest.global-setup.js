const RedisMemoryServer = require("redis-memory-server");

module.exports = async () => {
  const redis = new RedisMemoryServer();
  await redis.stop();
};
