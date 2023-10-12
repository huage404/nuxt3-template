<script setup lang="ts">
import registerManifest from "~/utils/registerManifest";

registerManifest();
</script>

<template>
  <Html>
  <Body>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>

  <footer class="footer fixed-footer"/>
  </Body>
  </Html>
</template>
