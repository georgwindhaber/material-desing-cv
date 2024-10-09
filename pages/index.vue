<script setup lang="ts">
useHead({
  title: "Georg Windhaber - CV",
  meta: [
    {
      name: "description",
      content: "Georg Windhaber - CV",
    },
  ],
});
</script>

<template>
  <div class="text-onSurface flex flex-col-reverse md:flex-row-reverse justify-center py-5 gap-5">
    <main class="flex flex-col gap-5 max-w-prose px-3 md:px-0">
      <cv-entry
        title="DINA Elektronik - Senior Frontend Developer"
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
    <aside class="flex flex-col gap-5 max-w-prose md:max-w-[24ch] md:text-right px-3 md:px-0">
      <nuxt-img src="/profile-picture.jpg" alt="Profile Picture" class="rounded-lg" width="24ch" height="24ch" />
      <h1 class="text-3xl text-primary italic font-bold p-3">Georg Windhaber</h1>
      <section class="bg-surfaceContainerLowest p-3">Friedrichshain-Kreuzberg, Berlin, Germany</section>
      <section class="bg-surfaceContainerLowest p-3">
        <h2 class="uppercase text-xl font-bold text-primary">Education</h2>
        <p class="text-primary my-5">
          HTL Wiener Neustadt, Informatics <br />
          2012 - 2018
        </p>

        <p>
          Graduated with Matura in Programming, Systemengineering & Project management, Business management &
          Accounting, German, English and Math Honors thesis: Developing a cross-platform app with Ionic 2 and iBeacons
          for room based location information display
        </p>
      </section>
      <section class="bg-surfaceContainerLowest p-3">
        <h2 class="uppercase text-xl font-bold text-primary">TECHNOLOGIES</h2>

        <h3 class="font-bold text-primary mt-5">Frontend</h3>
        <p class="mb-5">Vue, React, MobX, Zustand, Pinia</p>

        <h3 class="font-bold text-primary mt-5">Full Stack</h3>
        <p>Next.js, Nuxt, Remix, Drizzle, Prisma</p>

        <h3 class="font-bold text-primary mt-5">Backend</h3>
        <p>Nest.js, Express.js, MongoDB, SQL</p>

        <h3 class="font-bold text-primary mt-5">Scripting</h3>
        <p>Typescript, Javascript, Node.js, Bun, Deno</p>

        <h3 class="font-bold text-primary mt-5">Styling</h3>
        <p>HTML5, CSS, LESS, SCSS, MaterialUI, TailwindCSS</p>

        <h3 class="font-bold text-primary mt-5">Testing & others</h3>
        <p>Cypress, MapLibre/Mapbox, Strapi, Interact.js, i18n,...</p>

        <h2 class="uppercase text-xl font-bold text-primary mt-5">OTHER QUALIFICATIONS LANGUAGE SKILLS</h2>
        <ul class="mt-5">
          <li>German (Mother tongue)</li>
          <li>English (C1)</li>
        </ul>

        <h2 class="uppercase text-xl font-bold text-primary mt-5">DESIGN EXPERIENCE IN</h2>
        <ul>
          <li>Figma</li>
          <li>Adobe XD</li>
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>Adobe InDesign</li>
        </ul>
        <ul class="mt-5">
          <li>Experience in presentation</li>
          <li>Good knowledge of the GDPR and the BVergG (AT)</li>
          <li>Professional Photography</li>
        </ul>
      </section>
    </aside>
  </div>
</template>
