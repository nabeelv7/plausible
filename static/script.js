// initialize the bowser instance
const browser = bowser.getParser(window.navigator.userAgent);

// get the current domain from the <script data-domain=""> that the user has put in their website
const getDomain = () => {
  const currentScript = document.currentScript;
  const domain = currentScript.dataset.domain;
  return domain;
};

// get the country of the visitor on the user's site
const getLocation = async () => {
  try {
    const response = await fetch(`https://ipwho.is/`);
    const data = await response.json();
    const country = data.country;
    const city = data.city;
    const flag = data.flag.emoji;
    let location = {
      country,
      city,
      flag,
    };
    return location;
  } catch (error) {
    let location = {
      country: "Unknown",
      city: "Unknown",
      flag: "🌍",
    };
    return location;
  }
};

// get the referrer of the visitor on the user's site
const getReferrer = () => {
  const referrer = document.referrer;
  return referrer;
};

// get the device of the visitor on the user's site
const getDevice = () => {
  const device = browser.getPlatformType();
  console.log(device);
};

// get the browser of the visitor on the user's site
const getBrowser = () => {
  const browserName = browser.getBrowserName();
  return browserName;
};

// get the OS of the visitor on the user's site
const getOS = () => {
  const os = browser.getOSName();
  return os;
};

// get the current time
const getTime = () => {
  const time = new Date();
  return time;
};
