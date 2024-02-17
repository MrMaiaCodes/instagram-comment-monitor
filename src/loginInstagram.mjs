async function isUserLoggedIn(page, username){
    const selector = `a[href="/${username}/"]`;
    try {
        const isLoggedIn = !!(await page.$(selector));
        return isLoggedIn;
    } catch (error) {
        console.log(error);
        return false;

    }

}

export default async function loginInstagram(page, username, password){
    await page.goto('https://instagram.com')
    const isLoggedIn = await isUserLoggedIn(page, username);
    if(isLoggedIn) {
        return page
    }
    await page.waitForSelector('input[name="username"]');
    await page.type('input[name="username"]', username, {delay:33});
    await page.waitForSelector('input[name="password"]');
    await page.type('input[name="password"]', password, {delay:33});
    await page.click('button[type="submit"]');
    await page.waitForNavigation({waitUntil:'networkidle2', timeOut: 1000});
  }
