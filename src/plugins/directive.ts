import directiveList from "~/utils/directiveList";

export default defineNuxtPlugin(nuxtApp => {
  directiveList.forEach(item => {
    nuxtApp.vueApp.directive(item.name, item.bind);
  })
})
