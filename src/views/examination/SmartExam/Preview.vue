<template>
 <div
  v-if="data"
  class="smartexam-preview"
 >
  <app-editor-title></app-editor-title>

  <div class="clearfix smartexam-preview__hearder">
    <!-- 学员选择 -->
    <Select
      v-model="currentStudentTestId"
      class="smartexam-preview__select"
      @on-change="changeStudentTestId"
    >
      <Option
        v-for="item in student_data"
        :value="item.id"
        :key="item.id"
      >{{ item.id }}</Option>
    </Select>

    <!-- 操作按钮 -->
    <div class="right">
      <Button type="success" icon="search">下载预览</Button>
      <Button type="primary" icon="printer">Word直接下载</Button>
    </div>
  </div>


  <!-- 试卷公共头部 -->
  <paper-preview-header
    :data="data"
  ></paper-preview-header>

  <!-- 这里到时候还要展示各种提交情况，未提交，上传拍照等 -->
  <paper-preview-detail
    :data="data"
  ></paper-preview-detail>

 </div>
</template>

<script>
/**
 * 测试管理 - 智能测试 - 查看试卷
 * @author zhoumenglin
 * @version 2017-10-27
 */

import { mapState } from 'vuex'
import { GLOBAL, EXAMINATION } from '@/store/mutationTypes'
import PaperPreviewDetail from './components/PaperPreviewDetail'
import PaperPreviewHeader from './components/PaperPreviewHeader'

export default {
  name: 'app-examination-smartexam-preview',

  components: {
    PaperPreviewHeader,
    PaperPreviewDetail,
  },

  data() {
    return {
      currentStudentTestId: null, // 当前选中的测试学员的测试id

      data: null, // 试卷信息
    }
  },

  computed: {
    // 参加测试的学员信息
    ...mapState({
      student_data: state => state.examination.smartexam.student_data,
    }),

    // 测试id
    testid() {
      return +this.$route.params.testid
    },
  },

  methods: {
    // 获取试卷详情
    getPaperData(student_test_id) {
      return this.$http.get(`/test/paperinspection/${student_test_id}`)
        .then((res) => {
          this.data = res
        })
    },

    // 切换测试学员
    changeStudentTestId(student_test_id) {
      this.currentStudentTestId = student_test_id
      this.getPaperData(student_test_id)
    },
  },

  created() {
    this.$store.dispatch(EXAMINATION.SMARTEXAM.STUDENT_DATA, this.testid)
      .then(() => {
        // 这里还有待优化，先取第一个学生
        const firstStudentId = this.student_data[0].id
        this.currentStudentTestId = firstStudentId
        this.getPaperData(firstStudentId)
          .then(() => {
            this.$store.commit(GLOBAL.LOADING.HIDE)
          })
      })
  },

}
</script>

<style lang="less">
.smartexam-preview{
  &__hearder {
    width: 885px;
  }

  &__select {
    width: 200px;
  margin-bottom: 30px;
  }
}
</style>