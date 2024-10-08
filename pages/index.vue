<script setup lang="ts">
const checkbox = ref<boolean | undefined>(undefined);
const textfield = ref("");
</script>

<template>
  <main class="flex flex-col gap-5 p-5">
    <div class="bg-surfaceContainerLowest rounded-lg p-3 flex flex-wrap gap-3">
      <h2 class="text-xl font-bold w-full">Button Enabled + Icon</h2>
      <dina-button icon="format-color-fill-rounded">Filled</dina-button>
      <dina-button variant="outlined" icon="circle-outline">Outlined</dina-button>
      <dina-button variant="text" icon="text-fields-rounded">Text</dina-button>
      <dina-button variant="elevated" icon="elevation-outline-rounded">Elevated</dina-button>
      <dina-button variant="tonal" icon="tonality">Tonal</dina-button>
    </div>
    <div class="bg-surfaceContainerLowest rounded-lg p-3 flex flex-wrap gap-3">
      <h2 class="text-xl font-bold w-full">Button Disabled</h2>
      <dina-button disabled>Filled</dina-button>
      <dina-button variant="outlined" disabled>Outlined</dina-button>
      <dina-button variant="text" disabled>Text</dina-button>
      <dina-button variant="elevated" disabled>Elevated</dina-button>
      <dina-button variant="tonal" disabled>Tonal</dina-button>
    </div>
    <div class="bg-surfaceContainerLowest rounded-lg p-3 flex flex-wrap gap-3">
      <h2 class="text-xl font-bold w-full">Checkbox</h2>
      <dina-checkbox :value="checkbox" @change="checkbox = !checkbox" />
      <dina-checkbox :value="checkbox" @change="checkbox = !checkbox" disabled />
    </div>
    <div class="bg-surfaceContainerLowest rounded-lg p-3 flex flex-wrap gap-3">
      <h2 class="text-xl font-bold w-full">Textfield</h2>
      <dina-textfield
        label="Label"
        leading-icon="search-rounded"
        supporting-text="Supporting text"
        :value="textfield"
        @input="
          (e) => {
            textfield = e.target.value;
          }
        "
      />
      <dina-textfield
        label="Label"
        placeholder="Placeholder"
        leading-icon="format-color-text-rounded"
        :value="textfield"
        @input="
          (e) => {
            textfield = e.target.value;
          }
        "
      />
      <dina-textfield
        label="Disabled"
        placeholder="Placeholder"
        leading-icon="disabled-by-default-rounded"
        supporting-text="Supporting text disabled"
        disabled
        :value="textfield"
        @input="
          (e) => {
            textfield = e.target.value;
          }
        "
      />
    </div>
  </main>
</template>
