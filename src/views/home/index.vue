<template>
  <div class="home">
    {{ category }}
    <homeHeader></homeHeader>
    <homeSwiper></homeSwiper>
    <homeList></homeList>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import homeHeader from "./home-header.vue";
import homeSwiper from "./home-swiper.vue";
import homeList from "./home-list.vue";
import { useStore } from "vuex";
import { IGlobalState } from "@/store";

export default defineComponent({
  components: {
    homeHeader,
    homeSwiper,
    homeList,
  },

  setup() {
    let store = useStore<IGlobalState>();
    let category = computed(() => {
      return store.state.home.currentCategory;
    });
    return {
      category,
    };
  },
});
</script>
