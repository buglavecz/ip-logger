import { createClient } from '@supabase/supabase-js';

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig();
	const supabase = createClient(config.public.SBUrl, config.public.SBAnonKey, {
		db: { schema: config.public.SBSchema },
	});

	const ipHeader = getHeader(event, 'x-forwarded-for');
	const ip = ipHeader ? ipHeader.split(',')[0] : '-';

	const { error } = await supabase.from('visitors').insert({
		user_agent: getHeader(event, 'user-agent'),
		ip,
	});

	if (error) {
		throw createError({ statusCode: 500, message: error.message });
	}

	return { success: true };
});
