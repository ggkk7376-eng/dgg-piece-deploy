import * as migration_20251218_120000_add_button_links from './20251218_120000_add_button_links';
import * as migration_20251218_203000_add_media_category from './20251218_203000_add_media_category';
import * as migration_20251223_103000_add_rich_text from './20251223_103000_add_rich_text';

import * as migration_20251223_130000_add_richtext_tbl from './20251223_130000_add_richtext_tbl';
import * as migration_20251223_140000_add_debug_field from './20251223_140000_add_debug_field';

export const migrations = [
  // ... existing migrations
  {
    up: migration_20251223_103000_add_rich_text.up,
    down: migration_20251223_103000_add_rich_text.down,
    name: '20251223_103000_add_rich_text'
  },
  {
    up: migration_20251223_130000_add_richtext_tbl.up,
    down: migration_20251223_130000_add_richtext_tbl.down,
    name: '20251223_130000_add_richtext_tbl'
  },
  {
    up: migration_20251223_140000_add_debug_field.up,
    down: migration_20251223_140000_add_debug_field.down,
    name: '20251223_140000_add_debug_field'
  },
];
