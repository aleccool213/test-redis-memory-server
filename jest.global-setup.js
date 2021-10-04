const RedisMemoryServer = require("redis-memory-server");

module.exports = async () => {
  const redis = await RedisMemoryServer();
  await redis.stop();
};
