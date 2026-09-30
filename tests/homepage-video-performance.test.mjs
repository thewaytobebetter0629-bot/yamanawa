import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { statSync } from "node:fs";
import test from "node:test";
import { fileURLToPath } from "node:url";

const demoVideo = fileURLToPath(new URL("../public/video/yamanawa-home-demo.mp4", import.meta.url));

test("Nike homepage demo stays within a web-playback budget", () => {
  const details = execFileSync(
    "ffprobe",
    ["-v", "error", "-select_streams", "v:0", "-show_entries", "stream=width,height,bit_rate", "-of", "json", demoVideo],
    { encoding: "utf8" },
  );
  const video = JSON.parse(details).streams[0];

  assert.ok(statSync(demoVideo).size <= 35 * 1024 * 1024, "demo video must stay at or below 35 MB");
  assert.ok(video.width <= 1920, "demo video must not exceed 1920 px wide");
  assert.ok(video.height <= 1080, "demo video must not exceed 1080 px tall");
  assert.ok(Number(video.bit_rate) <= 5_500_000, "demo video bitrate must stay at or below 5.5 Mbps");
});
