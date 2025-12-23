import * as migration_20251218_120000_add_button_links from './20251218_120000_add_button_links';
import * as migration_20251218_203000_add_media_category from './20251218_203000_add_media_category';
import * as migration_20251223_103000_add_rich_text from './20251223_103000_add_rich_text';

export const migrations = [
  // {
  //   up: migration_20251123_134529.up,
  //   down: migration_20251123_134529.down,
  //   name: '20251123_134529'
  // },
  {
    up: migration_20251218_120000_add_button_links.up,
    down: migration_20251218_120000_add_button_links.down,
    name: '20251218_120000_add_button_links'
  },
  {
    up: migration_20251218_203000_add_media_category.up,
    down: migration_20251218_203000_add_media_category.down,
    name: '20251218_203000_add_media_category'
  },
  {
    up: migration_20251223_103000_add_rich_text.up,
    down: migration_20251223_103000_add_rich_text.down,
    name: '20251223_103000_add_rich_text'
  },
];
