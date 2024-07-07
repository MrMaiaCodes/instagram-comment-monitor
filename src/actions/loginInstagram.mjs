async function isUserLoggedIn(page, username){
    //inputs username into instagram
    const selector = `a[href="/${username}/"]`;
    //try catch, don't know the reason
    try {
        const isLoggedIn = !!(await page.$(selector));
        return isLoggedIn;
    } catch (error) {
        console.log(error);
        return false;

    }

}

//logs into instagram
export default async function loginInstagram(page, username, password){
    //goes to page
    await page.goto('https://instagram.com');
    //checks whether you logged in
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
