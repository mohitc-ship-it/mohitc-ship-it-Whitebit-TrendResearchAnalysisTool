// chrome-wrapper.js
const { chromium } = require("playwright");

// Load user profile from env var
const userDataDir = process.env.USER_DATA_DIR;
const profile = process.env.PROFILE || "Default";

async function setup() {
  console.log("🔥 Launching Chrome with persistent user profile:", userDataDir);

  global.__pw_context__ = await chromium.launchPersistentContext(
    userDataDir,
    {
      headless: false,
      args: [
        `--profile-directory=${profile}`,
        "--disable-web-security",
        "--disable-blink-features=AutomationControlled"
      ]
    }
  );

  console.log("✅ Chrome launched with real user session.");
}

setup();
