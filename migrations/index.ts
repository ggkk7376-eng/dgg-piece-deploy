import * as migration_20251123_134529 from './20251123_134529';
import * as migration_20251218_120000_add_button_links from './20251218_120000_add_button_links';

export const migrations = [
  {
    up: migration_20251123_134529.up,
    down: migration_20251123_134529.down,
    name: '20251123_134529'
  },
  {
    up: migration_20251218_120000_add_button_links.up,
    down: migration_20251218_120000_add_button_links.down,
    name: '20251218_120000_add_button_links'
  },
];
