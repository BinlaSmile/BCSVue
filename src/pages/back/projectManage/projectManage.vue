<template>
  <div class="project-manage com">
    <div class="main-screen">
      <div class="top-overview-wrap">
        <div class="overview-item" v-for="(item,index) in topOverview" :key="index">
          <div class="overflow-icon">11</div>
          <div class="overview-info">
            <div class="title">{{item.title}}</div>
            <div class="num">{{item.data}}</div>
          </div>
        </div>
      </div>
      <div class="main-card ongoing-project-wrap">2222</div>
      <div class="main-card inventory-wrap">3333</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "projectManage",
  components: {},
  data() {
    return {
      topOverview: [
        {
          title: "正在进行中项目",
          data: "102400",
          icon: ""
        },
        {
          title: "未开始项目",
          data: "81212",
          icon: ""
        },
        {
          title: "已完成项目",
          data: "9280",
          icon: ""
        },
        {
          title: "所有项目",
          data: "13600",
          icon: ""
        }
      ],
      ongoingProject: [
        {
          title: "项目01",
          startDate: "2020-08-09",
          endDate: "2020-10-20",
          progress: "30"
        },
        {
          title: "项目02",
          startDate: "2020-08-09",
          endDate: "2020-10-20",
          progress: "50"
        },
        {
          title: "项目03",
          startDate: "2020-08-09",
          endDate: "2020-10-20",
          progress: "70"
        },
        {
          title: "项目04",
          startDate: "2020-08-09",
          endDate: "2020-10-20",
          progress: "90"
        }
      ],
      inventory: [
        {
          title: "库存01",
          num: "999"
        },
        {
          title: "库存02",
          num: "999"
        },
        {
          title: "库存03",
          num: "999"
        }
      ]
    };
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>
<style lang="less" scoped>
.main-screen {
}
</style>
