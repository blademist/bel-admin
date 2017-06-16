/**
 * 业务管理状态
 * @author hjz
 * @version 2017-06-08
 */

import { Http } from '@/utils'
import { BUSINESS } from '../mutationTypes'

export default {
  state: {
    buffer: null,
    uri: '',
  },

  actions: {
    [BUSINESS.SETURI]({ state, commit }, to) {
      commit(BUSINESS.SETURI, to.meta.uri)
    },
    // index 初始化
    [BUSINESS.PAGE.INIT]({ state, commit }, to) {
      commit(BUSINESS.SETURI, to.meta.uri)
      const index = to.fullPath.indexOf('?')
      if (index === -1) {
        return Http.get(`/${state.uri}`)
          .then(res => commit(BUSINESS.PAGE.INIT, res))
      }
      const query = to.fullPath.substr(index)
      return Http.get(`/${state.uri}${query}`)
        .then(res => commit(BUSINESS.PAGE.INIT, res))
    },
    [BUSINESS.EDIT.INIT]({ state, commit }, to) {
      const id = to.params.id
      const uri = to.meta.uri
      commit(BUSINESS.SETURI, uri)
      if (id) {
        return Http.get(`/${uri}/${id}`)
      }
      return Promise.reject()
    },
    // 编辑页面 提交添加信息
    [BUSINESS.EDIT.CREATE]({ state, commit }, payload) {
      // 提交成功后回到index组件
      return Http.post(`/${state.uri}`, payload)
    },
    // 编辑页面 提交修改信息
    [BUSINESS.EDIT.UPDATE]({ state, commit }, payload) {
      // 提交成功后回到index组件
      return Http.patch(`/${state.uri}/${payload.id}`, payload.fdata)
    },
    // index页面 删除信息
    [BUSINESS.EDIT.DELETE]({ state, commit }, id) {
      return Http.delete(`/${state.uri}/${id}`).then(() => commit(BUSINESS.EDIT.DELETE, id))
    },
  },

  mutations: {
    [BUSINESS.PAGE.INIT](state, res) {
      // res是否要做处理
      state.buffer = res
    },
    // 在router的钩子中使用
    [BUSINESS.SETURI](state, uri) {
      state.uri = uri
    },
    [BUSINESS.EDIT.DELETE](state, id) {
      const data = state.buffer.data
      const index = data.findIndex(item => item.id === id)
      if (index !== -1) data.splice(index, 1)
    },
  },
}
