1. didn't show the screenshot in the report. the serenity-js/web version is "^3.0.0-rc.6",

Fix:
```
In order to get it run under 3.0.0-rc.6, follow the next steps.

In your Actors.ts change this line to 
BrowseTheWebWithWebdriverIO.using(browser) and 
import { BrowseTheWebWithWebdriverIO } from '@serenity-js/webdriverio 
instead of BrowseTheWeb
```

