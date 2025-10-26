import { expect, Page, test } from "@playwright/test";

const SONG_URL = "https://suno.com/song/066077da-ae8e-40f1-a51d-64bdd3c89668";

async function tryStartPlayback(page: Page) {
  const playButtonLabel = "Playbar: Play button";
  const playButton = page.getByLabel(playButtonLabel);

  try {
    await playButton.click({ timeout: 5_000 });
    await page.waitForTimeout(2_000);
    return;
  } catch {
    // Fall back to any visible button with a generic play label.
  }

  const fallbackButton = page.getByRole("button", { name: /play/i }).first();
  if (await fallbackButton.isVisible()) {
    await fallbackButton.click({ timeout: 5_000 });
    await page.waitForTimeout(2_000);
  }
}

test("Suno song shows a play count greater than zero", async ({ page }) => {
  await page.goto(SONG_URL, { waitUntil: "domcontentloaded" });

  await tryStartPlayback(page);

  const playCountHandle = await page.waitForFunction(() => {
    const html = document.documentElement.innerHTML;
    const match = html.match(/"play_count":(\d+)/);
    return match ? Number.parseInt(match[1], 10) : undefined;
  });

  const playCount = await playCountHandle.jsonValue<number>();

  expect(
    playCount,
    "Expected to detect a play_count value on the page"
  ).toBeDefined();
  expect(playCount!).toBeGreaterThan(0);
});
