<script setup lang="ts">
const props = defineProps<{
  value?: boolean;
  disabled?: boolean;
}>();
</script>

<template>
  <label
    :class="[
      'flex justify-center items-center w-12 h-12 rounded-full',
      { 'hover:bg-primary/8 hover:cursor-pointer active:bg-primary/12': !props.disabled },
      !props.disabled ? 'text-primary' : 'text-onSurface/40',
    ]"
  >
    <input type="checkbox" hidden :disabled="props.disabled" />

    <Icon v-if="props.value" name="material-symbols:check-box" class="w-6 h-6" />
    <Icon
      v-else-if="props.value === undefined"
      name="material-symbols:indeterminate-check-box-rounded"
      class="w-6 h-6"
    />
    <Icon v-else name="material-symbols:check-box-outline-blank" class="w-6 h-6" />
  </label>
</template>
