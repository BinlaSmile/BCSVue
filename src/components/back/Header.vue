<template>
  <div class="top-block">
    <div class="account">
      <div class="fl website-title">
        <a href="javascript:;" class="pack-up" @click="handlePickup" v-show="!isCollapse">
          <i class="iconfont iconfold" v-show="!isCollapse"></i>
        </a>
        <a href="javascript:;" class="an" @click="handleAn" v-show="isCollapse">
          <i class="iconfont iconfold" v-show="isCollapse"></i>
        </a>
        <span>本拉管理中心</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "backHeader",
  components: {},
  props: {},
  data() {
    return {
      lan: "中文",
      userName: "Admin"
    };
  },
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse;
    }
  },
  watch: {},
  methods: {
    // 收起
    handlePickup() {
      this.$store.commit("updateIsCollapse", { isCollapse: true });
    },
    // 展开
    handleAn() {
      this.$store.commit("updateIsCollapse", { isCollapse: false });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style>
.el-header {
  padding: 0;
}
</style>
<style lang="less" scoped>
.top-block {
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
  height: 60px;
  background: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  .account {
    display: block;
    flex: 1;
    flex-basis: auto;
    line-height: 60px;
  }
  .top-item {
    display: inline-block;
    margin-right: 30px;
    color: #999999;
    i {
      font-size: 14px;
    }
    i.icondrop_downarrow {
      font-size: 12px;
    }
    span {
      margin-left: 2px;
      margin-right: 2px;
    }
    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
  }
  .top-item:nth-child(3) {
    color: #333333;
  }
}
.top-item-wrap a .top-item {
  color: #333;
  cursor: pointer;
}
.top-item-wrap a .top-item:hover {
  color: #a100ff;
}
.website-title {
  a {
    margin-left: 20px;
    cursor: pointer;
  }
  i {
    margin-right: 20px;
    font-size: 14px;
  }
  .pack-up {
    i {
      color: #999999;
    }
  }
  .an {
    i {
      color: #a100ff;
    }
  }
}
</style>