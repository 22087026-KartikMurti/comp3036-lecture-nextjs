// import { seed } from "@repo/db/seed";
import { expect, test } from "./fixtures";

// test.beforeAll(async () => {
//   await seed();
// });

test.describe("SPEC NAME", () => {
  test(
    "Spec details",
    {
      tag: "@your-tag",
    },
    async ({ page }) => {
      await page.goto("/");

      await expect(await page.getByText("text")).toBeVisible();
    },
  );
});
