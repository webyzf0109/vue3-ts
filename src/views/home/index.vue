<template>
  <div class="home">
    {{ category }}
    <homeHeader></homeHeader>
    <homeSwiper></homeSwiper>
    <homeList></homeList>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import homeHeader from "./home-header.vue";
import homeSwiper from "./home-swiper.vue";
import homeList from "./home-list.vue";
import { useStore } from "vuex";
import { IGlobalState } from "@/store";
import * as Types from "../../store/action-types";
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
    let base64Data = computed(() => {
      return store.state.home.base64Data;
    });
    store.dispatch(`home/${Types.GET_CAPTCHA}`);
    return {
      category,
    };
  },
});
</script>
