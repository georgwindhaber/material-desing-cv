<!-- Uses: https://icon-sets.iconify.design/material-symbols/ -->

<script setup lang="ts">
defineProps<{
  name: string;
}>();
</script>

<template>
  <Icon :name="`material-symbols:${name}`" />
</template>
