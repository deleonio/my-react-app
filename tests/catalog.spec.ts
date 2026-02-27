import { test } from '@playwright/test';

test.use({
	viewport: {
		height: 600,
		width: 800,
	},
});

test.describe('Kern-Katalog Tests', () => {
	test('Gefällt mir Button klicken', async ({ page }) => {
		await page.goto(Buffer.from('aHR0cHM6Ly9rYXRhbG9nLmtlcm4tdXguZGUvcHVibGljLXVpLWtvbGlicmktd2ViLWNvbXBvbmVudHM=', 'base64').toString());
		await page.getByRole('button', { name: /Gefällt mir/ }).click();
	});
});
