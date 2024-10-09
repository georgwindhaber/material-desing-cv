<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>

<template>
  <Icon :name="name" class="text-primary h-6 w-6" />
</template>
