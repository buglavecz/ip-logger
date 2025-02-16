<script setup lang="ts">
import { FetchError } from 'ofetch';

const { $supabase } = useNuxtApp();
const { data: rows, error } = await $supabase
	.from('visitors')
	.select('*')
	.order('id', { ascending: false });

try {
	await useFetch('/api/log-visitor', {
		method: 'POST',
	});
}
catch (e: unknown) {
	if (e instanceof FetchError) {
		console.error(e.data.message);
	}
}
</script>

<template>
	<div>
		<h1>Visitors IPs</h1>

		<pre v-if="error">
      {{ error }}
    </pre>
		<div v-else-if="rows">
			<table
				style="border-collapse: collapse;border: 1px solid #000;"
				cellpadding="8"
				border="1"
			>
				<thead>
					<tr>
						<th>Date</th>
						<th>IP</th>
						<th>User Agent</th>
					</tr>
				</thead>
				<tbody>
					<tr
						v-for="visitor in rows"
						:key="visitor.id"
					>
						<td>{{ visitor.created_at }}</td>
						<td>{{ visitor.ip }}</td>
						<td>{{ visitor.user_agent }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
