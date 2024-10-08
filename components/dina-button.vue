<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    variant?: "filled" | "outlined" | "text" | "elevated" | "tonal";
    icon?: string;
    disabled?: boolean;
  }>(),
  {
    variant: "filled",
  }
);
</script>

<template>
  <button
    class="flex gap-2 items-center px-5 py-2 rounded-full relative"
    :class="[
      {
        'enabled:bg-primary enabled:text-onPrimary': props.variant === 'filled',
      },
      {
        'outline outline-1 enabled:outline-outline disabled:outline-onSurface/16 text-primary':
          props.variant === 'outlined',
      },
      {
        'text-primary ': props.variant === 'text',
      },
      {
        'bg-surfaceContainerLow text-primary enabled:shadow-md': props.variant === 'elevated',
      },
      {
        'bg-secondaryContainer text-onSecondaryContainer': props.variant === 'tonal',
      },
      {
        'text-onSurface/40': props.disabled,
      },
      {
        'bg-onSurface/12':
          props.disabled && (props.variant === 'filled' || props.variant === 'elevated' || props.variant === 'tonal'),
      },
    ]"
    :disabled="props.disabled"
  >
    <dina-icon v-if="icon" :name="icon" />
    <slot />
    <!-- State overlay -->
    <div
      v-if="!props.disabled"
      class="absolute inset-0 rounded-full z-20"
      :class="[
        {
          'hover:bg-primary/8 active:bg-primary/12':
            props.variant === 'outlined' || props.variant === 'text' || props.variant === 'elevated',
        },
        { 'hover:bg-onPrimary/8 active:bg-onPrimary/12': props.variant === 'filled' },
        {
          'hover:bg-onSecondaryContainer/8 active:bg-onSecondaryContainer/12': props.variant === 'tonal',
        },
      ]"
    />
  </button>
</template>
