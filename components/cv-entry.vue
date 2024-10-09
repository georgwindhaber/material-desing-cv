<script setup lang="ts">
defineProps<{
  title: string;
  date: string;
  text: string;
  link?: string;
}>();
</script>

<template>
  <article class="bg-surfaceContainerLowest rounded-lg p-3">
    <div class="flex justify-between">
      {{ date }}
      <div class="flex gap-2">
        <slot name="icons"></slot>
      </div>
    </div>
    <h2 class="uppercase font-black text-primary my-3">{{ title }}</h2>
    <p>
      {{ text }}
    </p>
    <a v-if="link" :href="link" class="block text-primary underline mt-3">{{ link }}</a>
  </article>
</template>
