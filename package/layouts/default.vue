<script setup lang="ts">

const title = ref("Matdash - Nuxt3 Typescript based Free Admin Dashboard Template");
useHead({
  meta: [{ content: title }],
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - Nuxt3 Typescript based Free Admin Dashboard Template`
      : "Matdash - Nuxt3 Typescript based Free Admin Dashboard Template";
  },
});
</script>

<template>
    <v-locale-provider >
        <v-app>
            <LayoutFullMain/>
            <v-main class="mr-md-4">
                <div class="mb-3 hr-layout bg-containerBg">
                    <v-container fluid class="page-wrapper bg-background pt-md-8 rounded-xl">
                        <div class="maxWidth">
                            <NuxtPage />
                        </div>
                    </v-container>
                </div>
            </v-main>
        </v-app>
    </v-locale-provider>
</template>
