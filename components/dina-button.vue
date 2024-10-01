<script lang="ts" setup>
const { variant } = withDefaults(
  defineProps<{
    variant?: "filled" | "outlined" | "text" | "elevated" | "tonal";
  }>(),
  {
    variant: "filled",
  }
);
</script>

<template>
  <button
    :class="[
      'px-5 py-2 rounded-full relative',
      {
        'bg-primary text-onPrimary ': variant === 'filled',
      },
      {
        'outline outline-1 outline-outline text-primary hover:bg-primary/8 active:bg-primary/12':
          variant === 'outlined',
      },
      {
        'text-primary ': variant === 'text',
      },
      {
        'bg-surfaceContainerLow text-primary shadow-md hover:bg-primary/8 active:bg-primary/12': variant === 'elevated',
      },
      {
        'bg-secondaryContainer text-onSecondaryContainer': variant === 'tonal',
      },
    ]"
  >
    <slot />
    <!-- State overlay -->
    <div
      :class="[
        'absolute inset-0 rounded-full',
        {
          'hover:bg-primary/8 active:bg-primary/12':
            variant === 'outlined' || variant === 'text' || variant === 'elevated',
        },
        {
          'hover:bg-onPrimary/8 active:bg-onPrimary/12': variant === 'filled',
        },
        {
          'hover:bg-onSecondaryContainer/8 active:bg-onSecondaryContainer/12': variant === 'tonal',
        },
      ]"
    />
  </button>
</template>
