import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { CookbookModule } from './cookbook.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(CookbookModule);
