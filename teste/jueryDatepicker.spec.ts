import { test, expect, Locator, Page } from '@playwright/test';

async function selectDate(targetYear: string, targetMonth: string, targetDate: string, page: Page, isFuture: boolean) {
    await page.locator('.ui-datepicker').waitFor({ state: 'visible', timeout: 15000 });

    while (true) {
        const currentMonth = (await page.locator('.ui-datepicker-month').textContent())?.trim();
        const currentYear = (await page.locator('.ui-datepicker-year').textContent())?.trim();

        if (currentMonth === targetMonth && currentYear === targetYear) {
            break;
        }

        if (isFuture) {
            await page.locator('.ui-icon.ui-icon-circle-triangle-e').click();
        } else {
            await page.locator('.ui-icon.ui-icon-circle-triangle-w').click();
        }
    }

    const allDates = await page.locator('.ui-datepicker-calendar td').all();

    for (const dt of allDates) {
        const dateText = (await dt.innerText()).trim();

        if (dateText && Number(dateText) === Number(targetDate)) {
            await dt.click();
            break;
        }
    }
}

test('jquery datepicker', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const dateinput: Locator = page.locator('#datepicker');
    await expect(dateinput).toBeVisible();

    await dateinput.scrollIntoViewIfNeeded();
    await page.waitForFunction(() => Boolean((window as any).jQuery && typeof (window as any).jQuery.fn.datepicker === 'function'));
    await page.evaluate(() => {
        const $ = (window as any).jQuery;
        $('#datepicker').datepicker('show');
    });
    await page.locator('.ui-datepicker').waitFor({ state: 'visible', timeout: 15000 });

    const year = '2027';
    const month = 'April';
    const day = '08';

    await selectDate(year, month, day, page, true);

    const expectedDate = '04/08/2027';
    await expect(dateinput).toHaveValue(expectedDate);
});