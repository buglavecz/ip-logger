<script setup lang="ts">

  // const { data } = await useFetch('/api/data')
  const { body } = await $fetch('/api/log', {
    method: 'post',
    body: { test: 123 }
  })
</script>

<template>
<h1>welcome</h1>
<h3>{{ body }}</h3>
</template>

<style scoped>

</style>