<script setup lang="ts"></script>

<template>
  <main class="text-onSurface flex flex-col gap-5 p-5 mx-auto max-w-prose">
    <cv-entry
      title="DINA ELEKTRONIK - Senior Frontend Developer"
      date="August 2024 - now"
      text="Adding new features to a machine risk assessment platform using TailwindCSS, TypeScript and Vue. Moving from AntDesignVue to a custom component library using plain Vue and TailwindCSS"
    >
      <template #icons>
        <cv-icon name="simple-icons:tailwindcss" />
        <cv-icon name="simple-icons:vuedotjs" />
      </template>
    </cv-entry>
    <cv-entry
      title="Journi - Senior Frontend Developer"
      date="March 2023 - May 2024"
      text="Expanding on the rich web experiences of the Journi Print web editors and marketing pages. Bringing the system to the bleeding edge with automated Cypress end-to-end testing, TypeScript and replacing the oldschool Express.js reverse proxy with native Next.js functionality. Rewriting the blogging platform from scratch in Next.js 13+, TypeScript, Zustand and TailwindCSS"
    >
      <template #icons>
        <cv-icon name="simple-icons:react" />
        <cv-icon name="simple-icons:nextdotjs" />
        <cv-icon name="simple-icons:tailwindcss" />
        <cv-icon name="simple-icons:cypress" />
      </template>
    </cv-entry>
    <cv-entry
      title="all about apps - Typescript Frontend Engineer"
      date="September 2022 - November 2022"
      text="Creating a cutting edge trading platform for shares on YouTube video revenue. Implementing the frontend and handle the data from Supabase in the Next.js frontend with TypeScript, auto-type- generation from Supabase and Material UI as frontend library"
    >
      <template #icons>
        <cv-icon name="simple-icons:styledcomponents" />
        <cv-icon name="simple-icons:react" />
        <cv-icon name="simple-icons:nextdotjs" />
      </template>
    </cv-entry>
    <cv-entry
      title="Fluxguide - Full Stack App Engineer"
      date="March 2020 - August 2022"
      text="Developing mobile apps from UX/UI concepts (mostly done in Adobe XD) to implementing them in a Cordova container running Vue and using a custom CMS. Rewriting this PHP based CMS backend to Express.js with clean REST APIs"
    >
      <template #icons>
        <cv-icon name="simple-icons:apachecordova" />
        <cv-icon name="simple-icons:less" />
        <cv-icon name="simple-icons:php" />
        <cv-icon name="simple-icons:vuedotjs" />
      </template>
    </cv-entry>
    <cv-entry
      title="Wiener Zeitung Digital Digital Publications -Junior Full Stack Engineer"
      date="May 2019 - January 2020"
      text="Full stack development of an eTendering platform with ASP.Net Core, Blazor/Razor components and Typescript. Building with Domain Driven Design, Event Sourcing and Test Driven Development as design principles in an agile scrum team"
    >
      <template #icons>
        <cv-icon name="simple-icons:csharp" />
        <cv-icon name="simple-icons:dotnet" />
      </template>
    </cv-entry>
    <h3 class="uppercase font-black text-xl text-primary p-3">Personal- and community projects</h3>
    <cv-entry
      title="Schoubl Stack / CMS"
      date="2024 - now"
      text="Creating a Vue / Nuxt based stack for quick creation of new projects including Nuxt Auth for authentification, Turso and SQLite as database, Drizzle as ORM and TailwindCSS for styling"
      link="https://github.com/georgwindhaber/schoubl-stack/tree/cms"
    >
      <template #icons>
        <cv-icon name="simple-icons:nuxtdotjs" />
        <cv-icon name="simple-icons:drizzle" />
        <cv-icon name="simple-icons:turso" />
        <cv-icon name="simple-icons:tailwindcss" />
      </template>
    </cv-entry>
    <cv-entry
      title="Vienna Free Tampon Finder"
      date="May 2024"
      text="Creating a online map with Maplibre and Maptiler to make free menstrual products discoverable in the city of Vienna"
      link="https://gratismenstruieren.at"
    >
      <template #icons>
        <cv-icon name="simple-icons:nuxtdotjs" />
        <cv-icon name="simple-icons:maplibre" />
      </template>
    </cv-entry>
    <cv-entry
      title="Stammtisch"
      date="2022 - 2023"
      text="Creating a drink counting website with Next.js and MaterialUI as frontend communicating with Express and PostgreSQL via REST-API"
      link="https://github.com/georgwindhaber/stammtisch"
    >
      <template #icons>
        <cv-icon name="simple-icons:postgresql" />
        <cv-icon name="simple-icons:express" />
        <cv-icon name="simple-icons:mui" />
        <cv-icon name="simple-icons:nextdotjs" />
      </template>
    </cv-entry>
  </main>
</template>
