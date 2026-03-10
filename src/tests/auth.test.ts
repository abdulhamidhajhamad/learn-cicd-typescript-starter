import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth"; 

describe("getAPIKey", () => {
  test("returns null if no authorization header", () => {
    const headers = {};
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });

  test("returns the key if the header is valid", () => {
    const headers = { authorization: "ApiKey secret123" };
    const result = getAPIKey(headers);
    expect(result).toBe("secret123");
  });

  test("returns null if header is malformed (missing ApiKey prefix)", () => {
    const headers = { authorization: "Bearer secret123" };
    const result = getAPIKey(headers);
    expect(result).toBeNull();
  });
});