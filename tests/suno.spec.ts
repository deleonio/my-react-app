import { expect, test } from '@playwright/test';

test.use({
	viewport: {
		height: 600,
		width: 800,
	},
});

test.describe('Suno Song Tests', () => {
	test.describe.configure({
		mode: 'parallel',
	});
	[
		'066077da-ae8e-40f1-a51d-64bdd3c89668', // The Little Hummingbird
		'4d05d147-088c-4e03-88a2-5535cb4665b9', // Kleiner KoliBri flieg
		'5414713c-1422-4b59-9187-791f9ff1c3b5', // Hummingbird fly
		'98662b90-21a3-4adc-8244-8e0f17e6ae9f', // Hummingbird fly (Psychedelic electro)
		'a9dabf08-c38c-4025-a298-2215c4d08358', // Hummingbird fly (Uplifting indie pop)
		'0bd693c9-8261-459b-a298-8888d570718c', // Hummingbird fly (Madball)
		'b0eb435d-19b9-48cb-8e47-bb85efb6cff0', // Hummingbird fly (Melodic Techno)
		'df883ab7-454a-45cf-8047-4bb23513843f', // Hummingbird fly (Orchestral)
		'29b9708b-c19e-4809-b02c-d41ba9a84aed', // Hummingbird fly (Dance-Punk)
		'c0dcb245-9a92-4e7b-8a7a-7e02a9bdc611', // Hummingbird fly (Pop-Rock)
		'528cdb8c-56ff-431c-b201-2ac6ed6bb382', // Hummingbird fly (Christmas-Chor)
		'151f2a53-9784-49a8-8bd5-49f2b3c8e88d', // Hummingbird fly (Cyberpunk)
		'3fc2773d-ac50-49a2-b791-71fb79cd76e9', // Hummingbird fly (Piano)
	].forEach((hash) => {
		test(`Test ${hash}`, async ({ page }) => {
			await page.goto(`https://suno.com/song/${hash}`);
			await page.getByRole('button', { name: 'Playbar: Play button' }).click();
			await page.waitForTimeout(5000);
		});
	});
});

test.describe('StackBlitz Projects', () => {
	test.describe.configure({
		mode: 'serial',
	});
	const stackblitzBaseUrl = 'https://stackblitz.com/edit/';
	const stackblitzHashes = [
		'vitejs-vite-zmnbtsbi', // v4
		'vitejs-vite-ihadrw', // v3
		'vitejs-vite-kkfhk5', // v2
		'vitejs-vite-dcg6xo', // v1
	];

	stackblitzHashes.forEach((hash) => {
		const projectUrl = `${stackblitzBaseUrl}${hash}?file=src%2FApp.jsx`;
		test(`Load StackBlitz project ${hash}`, async ({ page }) => {
			await page.goto(projectUrl, { waitUntil: 'domcontentloaded' });
			await page.waitForLoadState('networkidle');
			await expect(page).toHaveURL(/stackblitz\.com\/edit\//);
			await page.waitForTimeout(3000);
		});
	});
});
