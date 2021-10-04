import Redis from "ioredis";
import RedisMemoryServer from "redis-memory-server";

// jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
let con;
let redisServer;

beforeAll(async () => {
  redisServer = new RedisMemoryServer();
  const host = await redisServer.getHost();
  const port = await redisServer.getPort();
  con = new Redis({
    host,
    port,
  });
});

afterAll(async () => {
  if (con) {
    con.disconnect();
  }
  if (redisServer) {
    await redisServer.stop();
  }
});

describe("Single redisServer", () => {
  it("should start redis server", async () => {
    expect(con).toBeDefined();
    expect(await con.ping()).toBe("PONG");
  });
});
