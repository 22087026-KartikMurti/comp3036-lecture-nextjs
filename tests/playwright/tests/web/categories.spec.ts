import test, { expect } from "@playwright/test";

test.describe("Categories Page", () => {
    test(
        "Renders the posts of the category",
        { tag: "@pages",},
        async ({ page }) : Promise<void> => {
            await page.goto("/category/react");

            await expect(await page.getByText("No front end framework is the best")).toBeVisible();
            await expect(await page.getByText("Better front ends with Fatboy Slim")).toBeVisible();
        },
    );
});