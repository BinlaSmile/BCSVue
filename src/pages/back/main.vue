<template>
    <div class="project-manage">
    <div class="main-screen">
      <div class="top-overview-wrap">
        <div
          class="overview-item"
          v-for="(item, index) in topOverview"
          :key="index"
        >
          <div class="overflow-icon">这是图标</div>
          <div class="overview-info">
            <div class="title">{{ item.title }}</div>
            <div class="num">{{ item.data }}</div>
          </div>
        </div>
      </div>
      <div class="main-card-wrap ongoing-project-wrap">
        <div class="ongoing-title-wrap">
          <div class="ongoing-title">当前进行过中项目</div>
          <div class="status-wrap">
            <div class="status-box urgent">
              紧急
            </div>
            <div class="status-box regular">
              正常
            </div>
            <div class="status-box projet">
              计划
            </div>
          </div>
        </div>
        <div class="ongoing-content-wrap">
          <div
            v-for="(item, index) in ongoingProject"
            :key="index"
            class="main-card"
          >
            <div class="card-img"></div>
            <div class="card-title">{{ item.title }}</div>
            <div class="card-sdata">开始时间：{{ item.startDate }}</div>
            <div class="card-edata">结束时间：{{ item.endDate }}</div>
            <div class="card-progress">
              <el-progress
                :text-inside="true"
                :stroke-width="18"
                :percentage="parseInt(item.progress)"
                :color="customColorMethod"
              ></el-progress>
            </div>
            <div class="card-option">
              <i class="iconfont icon-elipsis"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="main-card-wrap inventory-wrap">
        <div v-for="(item, index) in inventory" :key="index" class="main-card">
          <div class="card-img"></div>
          <div class="card-title">{{ item.title }}</div>

          <div class="card-num">当前数量：{{ item.num }}</div>
          <div class="card-option">
            <i class="iconfont icon-elipsis"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "backMain",
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
  methods: {
    customColorMethod(progress) {
      if (progress < 30) {
        return "#909399";
      } else if (progress < 70) {
        return "#e6a23c";
      } else {
        return "#67c23a";
      }
    }
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.main-screen {
  width: 1440px;
  margin: 0 auto;
  padding: 20px;
  .top-overview-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .overview-item {
      width: 24%;
      min-width: 275px;
      background-color: #fff;
      margin-bottom: 15px;
      position: relative;
      padding: 15px;
      box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
      border-radius: 3px;
      .overflow-icon {
        position: absolute;
        top: 50%;
        left: 15px;
        transform: translateY(-50%);
      }
      .overview-info {
        padding: 20px;
        .title {
          text-align: right;
          font-weight: 700;
          font-size: 16px;
          padding-bottom: 15px;
        }
        .num {
          text-align: right;
        }
      }
    }
  }

  .main-card-wrap {
    background-color: #fff;
    border: 1px solid #acacac;
    border-radius: 3px;
    margin-bottom: 20px;
    padding: 15px;

    .main-card {
      border: 1px solid #acacac;
      border-radius: 3px;
      margin: 0 33px 15px;
      width: 275px;

      .card-img {
        height: 100px;
        background-color: #dfdfdf;
        border-bottom: 1px solid #acacac;
      }
      .card-title {
        text-align: center;
        line-height: 30px;
        font-size: 17px;
        font-weight: 700;
      }
      .card-sdata,
      .card-edata {
        line-height: 20px;
        text-align: center;
        color: #7f7f7f;
      }

      .card-progress {
        margin: 15px 15px 0px;
      }
      .card-option {
        display: flex;
        justify-content: flex-end;
        padding: 0px 15px;
        .icon-elipsis {
          color: #7f7f7f;
          font-size: 30px;
        }
      }

      .card-num {
        text-align: center;
      }
    }
  }
  .ongoing-project-wrap {
    .ongoing-title-wrap {
      display: flex;
      justify-content: space-between;
      .ongoing-title {
        font-size: 18px;
        color: #7f7f7f;
        line-height: 35px;
      }
      .status-wrap {
        display: flex;
        justify-content: flex-end;
        .status-box {
          padding-left: 50px;
          position: relative;
          line-height: 35px;
        }

        .urgent {
          color: #f56c6c;
        }
        .urgent::before {
          background-color: #f56c6c;
        }
        .regular {
          color: #67c23a;
        }
        .regular::before {
          background-color: #67c23a;
        }
        .projet {
          color: #409eff;
        }
        .projet::before {
          background-color: #409eff;
        }
        .urgent::before,
        .regular::before,
        .projet::before {
          display: block;
          content: "";
          position: absolute;
          top: 50%;
          left: 15px;
          width: 25px;
          height: 25px;
          transform: translate(0, -50%);
          border-radius: 2px;
        }
      }
    }
    .ongoing-content-wrap {
      padding-top: 20px;
      display: flex;
      flex-wrap: wrap;
    }
  }

  .inventory-wrap {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
