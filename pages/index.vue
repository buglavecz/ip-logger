<script setup lang="ts">
const { $supabase } = useNuxtApp();
const { data: rows, error } = await $supabase.from('users').select('*')
 console.log(rows);
 console.log(error);
</script>

<template>
  <h1>Hello</h1>
  <div v-if="rows">
    <ol>
      <li v-for="user in rows" :key="user.id">{{ user.last_name }} {{ user.first_name }}</li>
    </ol>
  </div>
</template>

<style scoped>

</style>