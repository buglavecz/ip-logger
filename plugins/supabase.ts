import { createClient } from '@supabase/supabase-js';

export default defineNuxtPlugin(() => {
	const config = useRuntimeConfig();
	const supabase = createClient(config.public.SBUrl, config.public.SBAnonKey, {
		db: { schema: config.public.SBSchema },
	});
	return {
		provide: {
			supabase,
		},
	};
});
