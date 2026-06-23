import { test, expect, Page } from '@playwright/test'

// Force scroll-reveal content visible without relying on IntersectionObserver,
// scroll position, or transition timing — fully deterministic for screenshots.
async function prepare(page: Page) {
  await page.addStyleTag({
    content: `
      .reveal-section, .reveal-stagger-item {
        opacity: 1 !important;
        transform: none !important;
      }
      .hero-fade-up, .hero-name-reveal {
        opacity: 1 !important;
        transform: none !important;
        animation: none !important;
      }
    `,
  })
  await page.waitForTimeout(500)
}

// Remote images (Vercel Blob) load non-deterministically; mask them so the diff
// tests CSS layout/typography/color (incl. each image's box) without flaking on
// pixel content.
const shot = (page: Page) => ({
  fullPage: true,
  mask: [page.locator('img')],
})

test.describe('Visual Regression', () => {
  test('homepage sections render correctly (desktop, light mode)', async ({
    page,
  }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await prepare(page)

    await expect(page).toHaveScreenshot('homepage-desktop-light.png', shot(page))
  })

  test('homepage sections render correctly (desktop, dark mode)', async ({
    page,
  }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await page.evaluate(() => document.documentElement.classList.add('dark'))
    await prepare(page)

    await expect(page).toHaveScreenshot('homepage-desktop-dark.png', shot(page))
  })

  test('homepage mobile layout (light mode)', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await prepare(page)

    await expect(page).toHaveScreenshot('homepage-mobile-light.png', shot(page))
  })

  test('homepage mobile layout (dark mode)', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await page.evaluate(() => document.documentElement.classList.add('dark'))
    await prepare(page)

    await expect(page).toHaveScreenshot('homepage-mobile-dark.png', shot(page))
  })
})
