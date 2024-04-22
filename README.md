--- the following json titles are shortcuts to be used in the Terminal to access the commands they describe ---
```
"scripts": {
    "start": "node src/index.mjs",
    "chrome": "/mnt/c/Program\\ Files/Google/Chrome/Application/chrome.exe --remote-debugging-port=9922",
    "chrome:windows": "startChrome.bat",
    "clear": "rm -rf ./data/*"
}
```

--- this is how you use puppeteer to open chrome on windows without using wsl ---
```
SET CHROME_PATH=C:\Program Files\Google\Chrome\Application
CALL "%CHROME_PATH%\chrome.exe" --remote-debugging-port=9922
```

--- this is how 