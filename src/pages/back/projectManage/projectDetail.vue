<template>
  <div class="project-detail">
    <div class="main-screen">
      <div class="detail-main">
        <div class="main-info-wrap">
          <div class="info-content-wrap">
            <div class="info-box"></div>
            <div class="info-box"></div>
            <div class="info-box"></div>
            <div class="info-box"></div>
          </div>
          <div class="info-img-wrap">
            <div class="main-img-box"></div>
            <div class="pre-img-box">
              <div class="pre-img"></div>
            </div>
          </div>
        </div>
        <div class="main-progress-wrap"></div>
        <div class="bot-btn-wrap"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "projectDetail",
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
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
}

.main-info-wrap {
  .info-content-wrap {
    .info-box {
    }
  }
  .info-img-wrap {
    .main-img-box {
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
