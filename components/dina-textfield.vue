<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<template>
  <label class="relative bg-surfaceContainerHighest rounded-t py-1 pl-4">
    <div class="flex flex-col-reverse justify-center h-12">
      <input type="text" class="peer h-0 focus:h-6 bg-transparent outline-none transition-all" />
      <span class="text-base peer-focus:text-xs transition-all">{{ label }}</span>
      <div
        class="h-[0.0625rem] peer-focus:h-[0.1875rem] peer-focus:bg-primary bg-onSurfaceVariant absolute bottom-0 left-0 right-0 transition-all"
      />
    </div>
  </label>
</template>
