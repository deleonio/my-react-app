import { test } from '@playwright/test';

test.use({
	viewport: {
		height: 600,
		width: 800,
	},
});

test.describe('Suno Song Tests', () => {
	test.describe.configure({ mode: 'parallel' });
	['066077da-ae8e-40f1-a51d-64bdd3c89668', '4d05d147-088c-4e03-88a2-5535cb4665b9', '5414713c-1422-4b59-9187-791f9ff1c3b5'].forEach((hash) => {
		test(`Test ${hash}`, async ({ page }) => {
			await page.goto(`https://suno.com/song/${hash}`);
			await page.getByRole('button', { name: 'Playbar: Play button' }).click();
			await page.waitForTimeout(5000);
		});
	});
});
