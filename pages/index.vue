<template>
  <main class="flex flex-col gap-5 p-5">
    <div class="bg-surfaceContainerLowest rounded-lg p-3 flex flex-wrap gap-3">
      <h2 class="text-xl font-bold w-full">Enabled + Icon</h2>
      <dina-button icon="format-color-fill-rounded">Filled</dina-button>
      <dina-button variant="outlined" icon="circle-outline">Outlined</dina-button>
      <dina-button variant="text" icon="text-fields-rounded">Text</dina-button>
      <dina-button variant="elevated" icon="elevation-outline-rounded">Elevated</dina-button>
      <dina-button variant="tonal" icon="tonality">Tonal</dina-button>
    </div>
    <div class="bg-surfaceContainerLowest rounded-lg p-3 flex flex-wrap gap-3">
      <h2 class="text-xl font-bold w-full">Disabled</h2>
      <dina-button disabled>Filled</dina-button>
      <dina-button variant="outlined" disabled>Outlined</dina-button>
      <dina-button variant="text" disabled>Text</dina-button>
      <dina-button variant="elevated" disabled>Elevated</dina-button>
      <dina-button variant="tonal" disabled>Tonal</dina-button>
    </div>
  </main>
</template>
