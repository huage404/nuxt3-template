<script setup lang="ts">
import registerManifest from "~/utils/registerManifest";
import themeOverrides from "~/config/theme";

registerManifest();
</script>

<template>
  <Html>
  <Body>
  <NuxtLayout>
    <n-config-provider :theme-overrides="themeOverrides">
      <NuxtPage/>
    </n-config-provider>
  </NuxtLayout>

  <footer class="footer fixed-footer"/>
  </Body>
  </Html>
</template>
