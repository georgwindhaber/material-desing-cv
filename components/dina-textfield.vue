<script setup lang="ts">
const props = defineProps<{
  label: string;
  value: string;
  placeholder?: string;
}>();

const isInputBig = computed(() => props.value || props.placeholder); // :focus is done via tailwind
</script>

<template>
  <label class="relative bg-surfaceContainerHighest rounded-t py-1 pl-4">
    <div class="flex flex-col-reverse justify-center h-12">
      <input
        type="text"
        class="peer focus:h-6 bg-transparent outline-none transition-all"
        :class="[isInputBig ? 'h-6' : 'h-0']"
        v-bind="props"
      />
      <span class="peer-focus:text-xs transition-all" :class="[isInputBig ? 'text-xs' : 'text-base']">{{ label }}</span>
      <div
        class="h-[0.0625rem] peer-focus:h-[0.1875rem] peer-focus:bg-primary bg-onSurfaceVariant absolute bottom-0 left-0 right-0 transition-all"
      />
    </div>
  </label>
</template>
