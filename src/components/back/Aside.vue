<template>
  <div ref="leftBlock" class="left-block">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#001529"
      text-color="#BEBEBE"
      active-text-color="#FFFFFF"
      :collapse-transition="false"
      router
      @select="handleSelect"
    >
      <el-menu-item index="/back/index">
        <i class="iconfont iconyysc"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="/back/projectManage">
        <template slot="title">
          <router-link to="/back/projectManage">
            <i class="iconfont iconlcgl"></i>
            <span>项目管理</span>
          </router-link>
        </template>
        <el-menu-item index="/back/projectManage/projectList">项目</el-menu-item>
        <el-menu-item index="/back/projectManage/projectDetail">项目详情</el-menu-item>
        <el-menu-item index="/back/projectManage/additionalItems">附加项</el-menu-item>
      </el-submenu>
      <el-submenu index="/back/itemManage">
        <template slot="title">
          <router-link to="/back/itemManage">
            <i class="iconfont iconhomepage_menu_09"></i>
            <span>库存管理</span>
          </router-link>
        </template>
        <el-menu-item index="/back/itemManage/itemList">库存</el-menu-item>
      </el-submenu>
          <el-submenu index="/back/userManage">
          <template slot="title">
          <router-link to="/back/userManage">
            <i class="iconfont iconhomepage_menu_04"></i>
            <span>用户管理</span>
          </router-link>
          </template>
        <el-menu-item index="/back/userManage/userList">用户</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "backAside",
  components: {},
  props: {},
  data() {
    return {
      activeIndex: ""
    };
  },
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse;
    }
  },
  watch: {
    isCollapse(val, oldVal) {
      if (val) {
        this.$emit("change-aside", 64);
      } else {
        this.$emit("change-aside", 240);
      }
    },
    $route() {
      this.handleSelect(this.activeIndex);
    }
  },
  methods: {
    test() {
      console.log("666");
    },
    handleOpen() {},
    handleClose() {},
    handleSelect(index) {
      this.activeIndex = index;
    }
  },
  created() {
    console.log("11", this.$route.path);
    console.log(this.$store.state.isCollapse);
    this.index;
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.el-menu-vertical:not(.el-menu--collapse) {
  width: 240px;
  height:100%;
  min-height:400px;
}

.left-block {
  height: 100%;
  background-color: #001529;
}
.logo {
  max-width: 240px;
  height: 60px;
  background-color: #a100ff;
  i {
    position: relative;
    color: #ffffff;
  }
  i.iconwhite_logo {
    font-size: 32px;
    top: 10px;
  }
  i.iconsmall_logo {
    top: 22px;
  }
}
.el-menu {
  text-align: left;
  border-right: none;
  .el-menu-item {
    i,
    span {
      cursor: pointer;
    }
    i:nth-child(1) {
      color: #bebebe;
      margin-right: 10px;
      position: relative;
      top: -1px;
    }
  }
  .el-menu-item:hover {
    i,
    span {
      color: #ffffff;
    }
  }
  /deep/ .el-submenu__title {
    i,
    span {
      cursor: pointer;
    }
    i:nth-child(1) {
      color: #bebebe;
      margin-right: 10px;
      position: relative;
      top: -1px;
    }
  }
  /deep/ .el-submenu__title:hover {
    i,
    span {
      color: #ffffff;
    }
  }
}
.el-submenu__title a {
  color: #bebebe;
}
</style>