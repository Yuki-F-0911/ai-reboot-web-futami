const { chromium } = require('playwright');
const fs = require('fs').promises;
const path = require('path');

async function performDesignCheck() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  
  // Create screenshots directory
  const screenshotsDir = path.join(__dirname, 'design-check-screenshots');
  await fs.mkdir(screenshotsDir, { recursive: true });
  
  const page = await context.newPage();
  
  // Define viewport sizes
  const viewports = [
    { name: 'desktop', width: 1440, height: 900 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'mobile', width: 390, height: 844 }
  ];
  
  console.log('Starting design check...\n');
  
  // Check main page at different viewports
  for (const viewport of viewports) {
    console.log(`\n📱 Testing ${viewport.name} viewport (${viewport.width}x${viewport.height})`);
    await page.setViewportSize(viewport);
    
    // Navigate to main page
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000); // Wait for animations
    
    // Take full page screenshot
    await page.screenshot({ 
      path: path.join(screenshotsDir, `home-${viewport.name}.png`),
      fullPage: true 
    });
    console.log(`✅ Screenshot saved: home-${viewport.name}.png`);
    
    // Check hero section
    const hero = await page.locator('section').first();
    if (await hero.isVisible()) {
      await hero.screenshot({ 
        path: path.join(screenshotsDir, `hero-${viewport.name}.png`) 
      });
      console.log(`✅ Hero section screenshot saved`);
    }
    
    // Test interactive elements
    console.log('\n🔍 Testing interactive elements...');
    
    // Find all buttons and links
    const buttons = await page.locator('button').all();
    const links = await page.locator('a').all();
    
    console.log(`Found ${buttons.length} buttons and ${links.length} links`);
    
    // Test hover states on buttons
    for (let i = 0; i < Math.min(3, buttons.length); i++) {
      const button = buttons[i];
      if (await button.isVisible()) {
        await button.hover();
        await page.waitForTimeout(500);
        console.log(`✅ Tested hover state on button ${i + 1}`);
      }
    }
    
    // Check color contrast
    console.log('\n🎨 Checking visual elements...');
    
    // Get computed styles for text elements
    const textElements = await page.locator('h1, h2, h3, p').all();
    console.log(`Found ${textElements.length} text elements`);
    
    // Sample a few elements for contrast checking
    for (let i = 0; i < Math.min(5, textElements.length); i++) {
      const element = textElements[i];
      if (await element.isVisible()) {
        const color = await element.evaluate(el => 
          window.getComputedStyle(el).color
        );
        const bgColor = await element.evaluate(el => 
          window.getComputedStyle(el).backgroundColor
        );
        console.log(`Text ${i + 1}: color=${color}, bg=${bgColor}`);
      }
    }
    
    // Check for animations
    console.log('\n✨ Checking animations...');
    const animatedElements = await page.locator('[class*="animate"], [class*="transition"]').all();
    console.log(`Found ${animatedElements.length} potentially animated elements`);
    
    // Scroll to test scroll animations
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await page.waitForTimeout(1000);
    await page.screenshot({ 
      path: path.join(screenshotsDir, `scroll-${viewport.name}.png`) 
    });
    console.log(`✅ Scroll state screenshot saved`);
    
    // Navigate to academy page
    console.log('\n📚 Checking /academy page...');
    await page.goto('http://localhost:3000/academy', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    
    await page.screenshot({ 
      path: path.join(screenshotsDir, `academy-${viewport.name}.png`),
      fullPage: true 
    });
    console.log(`✅ Academy page screenshot saved`);
  }
  
  // Additional accessibility checks on desktop
  console.log('\n♿ Performing accessibility checks...');
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  
  // Check for proper heading hierarchy
  const headings = await page.locator('h1, h2, h3, h4, h5, h6').all();
  console.log(`\nHeading structure:`);
  for (const heading of headings) {
    if (await heading.isVisible()) {
      const tagName = await heading.evaluate(el => el.tagName);
      const text = await heading.textContent();
      console.log(`${tagName}: ${text?.substring(0, 50)}...`);
    }
  }
  
  // Check for alt text on images
  const images = await page.locator('img').all();
  let imagesWithoutAlt = 0;
  for (const img of images) {
    const alt = await img.getAttribute('alt');
    if (!alt || alt.trim() === '') {
      imagesWithoutAlt++;
    }
  }
  console.log(`\n🖼️ Images: ${images.length} total, ${imagesWithoutAlt} missing alt text`);
  
  // Check focus states
  console.log('\n🎯 Testing keyboard navigation...');
  await page.keyboard.press('Tab');
  await page.waitForTimeout(500);
  await page.screenshot({ 
    path: path.join(screenshotsDir, 'focus-state.png') 
  });
  console.log(`✅ Focus state screenshot saved`);
  
  // Performance metrics
  console.log('\n⚡ Checking performance metrics...');
  const metrics = await page.evaluate(() => {
    const paint = performance.getEntriesByType('paint');
    return {
      firstPaint: paint.find(p => p.name === 'first-paint')?.startTime,
      firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime,
    };
  });
  console.log(`First Paint: ${metrics.firstPaint?.toFixed(2)}ms`);
  console.log(`First Contentful Paint: ${metrics.firstContentfulPaint?.toFixed(2)}ms`);
  
  await browser.close();
  console.log('\n✅ Design check complete! Screenshots saved in:', screenshotsDir);
}

performDesignCheck().catch(console.error);