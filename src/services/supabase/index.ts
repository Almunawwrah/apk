
// Re-export all services
export * from './santri.service';
export * from './setoran.service';
export * from './achievement.service';
export { supabase } from './client';

// Default export with all services
import * as santriService from './santri.service';
import * as setoranService from './setoran.service';
import * as achievementService from './achievement.service';

export default {
  ...santriService,
  ...setoranService,
  ...achievementService
};
