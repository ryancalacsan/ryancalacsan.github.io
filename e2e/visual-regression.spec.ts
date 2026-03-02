import { test, expect } from '@playwright/test'

test.describe('Visual Regression', () => {
  test('homepage sections render correctly (desktop, light mode)', async ({
    page,
  }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    // Let Framer Motion animations settle
    await page.waitForTimeout(2000)

    await expect(page).toHaveScreenshot('homepage-desktop-light.png', {
      fullPage: true,
    })
  })

  test('homepage sections render correctly (desktop, dark mode)', async ({
    page,
  }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await page.waitForTimeout(2000)

    // Toggle dark mode via class
    await page.evaluate(() =>
      document.documentElement.classList.add('dark')
    )
    // Let theme transition settle
    await page.waitForTimeout(500)

    await expect(page).toHaveScreenshot('homepage-desktop-dark.png', {
      fullPage: true,
    })
  })

  test('homepage mobile layout (light mode)', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await page.waitForTimeout(2000)

    await expect(page).toHaveScreenshot('homepage-mobile-light.png', {
      fullPage: true,
    })
  })

  test('homepage mobile layout (dark mode)', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 })
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await page.waitForTimeout(2000)

    await page.evaluate(() =>
      document.documentElement.classList.add('dark')
    )
    await page.waitForTimeout(500)

    await expect(page).toHaveScreenshot('homepage-mobile-dark.png', {
      fullPage: true,
    })
  })
})
