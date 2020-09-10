<template>
  <div>
    <el-container>
      <el-aside ref="elAside" width="auto">
        <Aside @change-aside="changeAside"></Aside>
      </el-aside>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import Aside from "@/components/back/Aside";
import Header from "@/components/back/Header";

export default {
  name: "backIndex",
  components: {
    Header,
    Aside
  },
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {
    $route() {}
  },
  methods: {
    changeAside(val) {
      this.$refs.elAside.width = val + "px";
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.el-main {
  background-color: #bcbcbc;
}
</style>