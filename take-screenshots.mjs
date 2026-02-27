import puppeteer from 'puppeteer';
import { mkdir } from 'fs/promises';
import { join } from 'path';

const APP_URL = 'https://smart-release-planner1.vercel.app/';
const SCREENSHOTS_DIR = './public/screenshots';

async function takeScreenshots() {
  console.log('🚀 Launching browser...');
  
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: {
      width: 1920,
      height: 1080,
      deviceScaleFactor: 5 // Ultra HD quality - 5x for crystal clear screenshots
    },
    args: ['--force-device-scale-factor=5']
  });

  try {
    // Create screenshots directory
    await mkdir(SCREENSHOTS_DIR, { recursive: true });
    console.log('📁 Created screenshots directory');

    const page = await browser.newPage();
    
    // Navigate to app
    console.log('🌐 Loading app...');
    await page.goto(APP_URL, { waitUntil: 'networkidle0', timeout: 30000 });
    
    // Wait for initial load and fonts to render
    await new Promise(resolve => setTimeout(resolve, 4000));

    const screenshots = [
      { name: 'capability-1.png', desc: 'Main Dashboard View', action: null },
      { name: 'capability-2.png', desc: 'Teams View', action: async () => {
        const buttons = await page.$$('button');
        for (const btn of buttons) {
          const text = await btn.evaluate(el => el.textContent);
          if (text.toLowerCase().includes('team')) {
            await btn.click();
            break;
          }
        }
      }},
      { name: 'capability-3.png', desc: 'Timeline/Gantt View', action: async () => {
        await page.evaluate(() => window.scrollTo(0, 300));
      }},
      { name: 'capability-4.png', desc: 'Capacity Planning', action: async () => {
        const buttons = await page.$$('button, [role="tab"]');
        if (buttons.length > 2) await buttons[2].click();
      }},
      { name: 'capability-5.png', desc: 'Full Interface', action: async () => {
        await page.evaluate(() => window.scrollTo(0, 0));
      }},
    ];

    for (let i = 0; i < screenshots.length; i++) {
      const shot = screenshots[i];
      console.log(`📸 Taking screenshot ${i + 1}: ${shot.desc}`);
      
      if (shot.action) {
        try {
          await shot.action();
          await new Promise(resolve => setTimeout(resolve, 2500));
        } catch (err) {
          console.log(`⚠️  Action failed for ${shot.desc}:`, err.message);
        }
      }
      
      await page.screenshot({
        path: join(SCREENSHOTS_DIR, shot.name),
        fullPage: false,
        type: 'png',
        omitBackground: false
      });
    }

    console.log('\n✅ Screenshots saved to:', SCREENSHOTS_DIR);
    console.log('📸 Files created:');
    screenshots.forEach((s, i) => console.log(`   ${i + 1}. ${s.name} - ${s.desc}`));

  } catch (error) {
    console.error('❌ Error taking screenshots:', error);
    throw error;
  } finally {
    await browser.close();
    console.log('\n🎉 Done!');
  }
}

takeScreenshots();
