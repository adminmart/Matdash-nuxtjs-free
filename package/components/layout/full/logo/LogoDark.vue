<script setup lang="ts">
import Logoimg from "/images/logos/logo.svg";
</script>
<template>
  <div class="logo">
    <NuxtLink to="/">
      <img :src="Logoimg" alt="home" />
    </NuxtLink>
  </div>
</template>
