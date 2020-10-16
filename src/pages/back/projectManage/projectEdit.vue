<template>
  <div class="project-edit">
    <div class="main-screen">
      <div class="detail-main">
        <div class="main-info-wrap">
          <div class="info-content-wrap">
            <div class="info-box l">
              <div class="info-title">项目名称</div>
              <el-input
                v-model="project.title"
                placeholder="请输入内容"
              ></el-input>
            </div>
            <div class="info-box s">
              <div class="info-title">编号</div>
              <el-input
                v-model="project.pid"
                placeholder="请输入内容"
              ></el-input>
            </div>
            <div class="info-box m">
              <div class="info-title">工期</div>
              <el-date-picker
                class="info-sel"
                v-model="project.period"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              >
              </el-date-picker>
            </div>
            <div class="info-box m">
              <div class="info-title">里程碑</div>
              <el-input
                v-model="project.marker"
                placeholder="请输入内容"
              ></el-input>
            </div>
            <div class="info-box s">
              <div class="info-title">优先级</div>
              <el-input
                v-model="project.priority"
                placeholder="请输入内容"
              ></el-input>
            </div>
            <div class="info-box l">
              <div class="info-title">属性</div>
              <el-select
                class="info-sel"
                v-model="project.attr"
                multiple
                filterable
                allow-create
                default-first-option
                placeholder="请选择文章标签"
              >
                <el-option
                  v-for="(item, index) in attrOpts"
                  :key="index"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="info-img-wrap">
            <el-tabs tab-position="bottom" style="height: 200px;">
              <el-tab-pane label="用户管理">用户管理</el-tab-pane>
              <el-tab-pane label="配置管理">配置管理</el-tab-pane>
              <el-tab-pane label="角色管理">角色管理</el-tab-pane>
              <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
            </el-tabs>
          </div>
        </div>
        <div class="main-progress-wrap"></div>
        <div class="bot-btn-wrap"></div>
        <input type="file" ref="uploadImg" @change="selectImg()" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "projectEdit",
  components: {},
  data() {
    return {
      project: {
        title: "aaa",
        pid: "bbb",
        period: [],
        priority: "sss",
        marker: "ddd",
        attr: ["Mogo", "Binla", "CCC"]
      },
      attrOpts: [
        {
          value: "Mogo",
          label: "Mogo"
        },
        {
          value: "Binla",
          label: "Binla"
        },
        {
          value: "CCC",
          label: "CCC"
        }
      ],
      InfoImgList: []
    };
  },
  computed: {},
  methods: {
    selectImg() {
      var that = this;
      var file = this.$refs.uploadImg.files[0];
      if (file.type == "image/png" || file.type == "image/jepg") {
        var reader = new FileReader();
        if (file) {
          reader.readAsDataURL(file);
        }
        reader.onloadend = function() {
          that.InfoImgList.push(reader.result);
        };
      } else {
        this.$message.error("请上传图片！");
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
}

.detail-main {
  background-color: #fff;
  padding: 20px;
}

.main-info-wrap {
  display: flex;
  .info-content-wrap {
    width: 60%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    .info-box {
      width: 33.33%;
      padding: 5px 30px 5px 0;
      .info-title {
        padding: 5px 0;
      }
      .info-sel {
        width: 100%;
      }
    }

    .info-box.l {
      width: 66.66%;
    }

    .info-box.m {
      width: 50%;
    }

    .info-box.s {
      width: 33.33%;
    }
  }
  .info-img-wrap {
    width: 40%;
    .main-img-box {
      width: 100%;
      height: 350px;
      border: 1px solid #cdcdcd;
      background-color: #dfdfdf;
      border-radius: 5px;
    }
    .pre-img-box {
    }
  }
}

.main-progress-wrap {
}

.bot-btn-wrap {
}
</style>
