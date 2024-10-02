<script lang="ts" setup>
const props = withDefaults(
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
        'bg-primary text-onPrimary ': props.variant === 'filled',
      },
      {
        'outline outline-1 outline-outline text-primary hover:bg-primary/8 active:bg-primary/12':
          props.variant === 'outlined',
      },
      {
        'text-primary ': props.variant === 'text',
      },
      {
        'bg-surfaceContainerLow text-primary shadow-md hover:bg-primary/8 active:bg-primary/12':
          props.variant === 'elevated',
      },
      {
        'bg-secondaryContainer text-onSecondaryContainer': props.variant === 'tonal',
      },
    ]"
  >
    <span class="material-symbols-outlined"> search </span>
    <slot />
    <!-- State overlay -->
    <div
      :class="[
        'absolute inset-0 rounded-full',
        {
          'hover:bg-primary/8 active:bg-primary/12':
            props.variant === 'outlined' || props.variant === 'text' || props.variant === 'elevated',
        },
        {
          'hover:bg-onPrimary/8 active:bg-onPrimary/12': props.variant === 'filled',
        },
        {
          'hover:bg-onSecondaryContainer/8 active:bg-onSecondaryContainer/12': props.variant === 'tonal',
        },
      ]"
    />
  </button>
</template>
