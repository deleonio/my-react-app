import { test } from '@playwright/test';

test.use({
	viewport: {
		height: 600,
		width: 800,
	},
});

test.describe('Suno Song Tests', () => {
	test.describe.configure({ mode: 'parallel', repeatEach: 10 });
	[
		'066077da-ae8e-40f1-a51d-64bdd3c89668', // https://suno.com/song/066077da-ae8e-40f1-a51d-64bdd3c89668 (The Little Hummingbird)
		'4d05d147-088c-4e03-88a2-5535cb4665b9', // https://suno.com/song/4d05d147-088c-4e03-88a2-5535cb4665b9 (Kleiner KoliBri flieg)
		'5414713c-1422-4b59-9187-791f9ff1c3b5', // https://suno.com/song/5414713c-1422-4b59-9187-791f9ff1c3b5 (Hummingbird fly)
		'98662b90-21a3-4adc-8244-8e0f17e6ae9f', // https://suno.com/song/98662b90-21a3-4adc-8244-8e0f17e6ae9f (Hummingbird fly - Psychedelic electro)
		'2ef33e4e-0761-4702-b2d2-4487db559c22', // https://suno.com/song/2ef33e4e-0761-4702-b2d2-4487db559c22 (Hummingbird fly - Hardcode)
		'a9dabf08-c38c-4025-a298-2215c4d08358', // https://suno.com/song/a9dabf08-c38c-4025-a298-2215c4d08358 (Hummingbird fly - Uplifting indie pop)
		'6c5c2ced-e9b9-459a-b424-e84cd6fe6b6b', // https://suno.com/song/6c5c2ced-e9b9-459a-b424-e84cd6fe6b6b (Hummingbird fly - Classic)
	].forEach((hash) => {
		test(`Test ${hash}`, async ({ page }) => {
			await page.goto(`https://suno.com/song/${hash}`);
			await page.getByRole('button', { name: 'Playbar: Play button' }).click();
			await page.waitForTimeout(5000);
		});
	});
});
