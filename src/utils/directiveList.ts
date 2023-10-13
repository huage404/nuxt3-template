import useUserStore from "~/stores/userStore";
import {Directive} from "vue";

const vPermission: Directive = {
  mounted (el, binding) {
    const route = useRoute();
    const userStore = useUserStore();
    const all_permission = "*:*:*";

    if(!Array.isArray(binding.value) || binding.value.length === 0){
      console.error("🚀 ~ log error: ----- v-permission: 无效的绑定值 ---- ", route.fullPath);
      return;
    }

    const hasPermission = userStore.permission.some(permission => {
      return all_permission === permission || binding.value.includes(permission);
    })

    if(!hasPermission){
      el.parentNode?.removeChild(el);
    }
  },
  getSSRProps () {
    return {}
  }
}

/**
 * 在这里编写的指令会被自动注册
 */
export default [
  { name: 'permission', bind: vPermission }
]
