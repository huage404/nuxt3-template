<script lang="ts" setup>
import {useI18n} from '#imports';

definePageMeta({
  key: route => route.fullPath
})
const { locale } = useI18n();

const toggleLanguage = () => {
  locale.value = locale.value === 'zhCN' ? 'enUS' : 'zhCN'
}
</script>

<template>
  <div>
    <h1 class="text-3xl underline">{{$t('欢迎')}}</h1>
    <n-button type="primary" @click="toggleLanguage">
      切换语言
    </n-button>
  </div>
</template>
