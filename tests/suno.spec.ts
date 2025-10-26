import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 600,
    width: 800
  }
});

test('test', async ({ page }) => {
  await page.goto('https://suno.com/song/066077da-ae8e-40f1-a51d-64bdd3c89668');
  await page.locator('.absolute.inset-0').click();
  await page.getByRole('button', { name: 'Play Count' }).click();
  await page.locator('.relative.inline-block.font-sans.font-medium.text-center.before\\:absolute.before\\:inset-0.before\\:pointer-events-none.before\\:rounded-\\[inherit\\].before\\:border.before\\:border-transparent.before\\:bg-transparent.after\\:absolute.after\\:inset-0.after\\:pointer-events-none.after\\:rounded-\\[inherit\\].after\\:bg-transparent.after\\:opacity-0.enabled\\:hover\\:after\\:opacity-100.transition.duration-75.before\\:transition.before\\:duration-75.after\\:transition.after\\:duration-75.select-none.cursor-pointer.px-4.py-2.text-\\[15px\\].leading-\\[24px\\].rounded-md.text-background-primary.bg-foreground-primary.enabled\\:hover\\:before\\:bg-overlay-on-light.disabled\\:after\\:bg-background-primary.disabled\\:after\\:opacity-50.grow').click();
});