<script setup lang="ts">
import registerManifest from "~/utils/registerManifest";
import themeOverrides from "~/config/theme";

registerManifest();
</script>

<template>
  <Html>
    <Body>
      <n-config-provider
        class="h-full"
        :theme-overrides="themeOverrides"
      >
        <n-message-provider>
          <NuxtLayout>
            <NuxtPage />
          </NuxtLayout>
        </n-message-provider>
      </n-config-provider>

      <footer class="footer fixed-footer" />
    </Body>
  </Html>
</template>
