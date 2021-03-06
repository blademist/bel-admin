/**
 * 系统管理模块某些表单所需的额外数据
 * @author lmh
 * @version 2017-06-30
 */

import { Http } from '@/utils'
import { transform, generatePaths } from '@/utils/helpers'
import { SYSTEM } from '../mutationTypes'

export default {
  state: {
    departments: [],
    data_auths: [],
    permissions: [],
    departmentPaths: [],

    roles: [],
    rolePaths: [],

    process: {
      types: [],
      departments: [],
    },
  },

  mutations: {
    [SYSTEM.DATA.PERMIS.INIT](state, { departments, data_auths, permissions }) {
      state.departments = transform(departments)
      state.data_auths = data_auths
      state.permissions = permissions
      state.departmentPaths = generatePaths(departments)
    },

    [SYSTEM.DATA.ROLES.INIT](state, roles) {
      state.roles = transform(roles)
      state.rolePaths = generatePaths(roles)
    },

    [SYSTEM.DATA.PROCESS.INIT](state, { type_list, department_list }) {
      state.process.types = type_list
      state.process.departments = department_list
    },
  },

  actions: {
    [SYSTEM.DATA.PERMIS.INIT]({ commit }) {
      return Http.get('/role/create')
        .then(res => commit(SYSTEM.DATA.PERMIS.INIT, res))
    },

    [SYSTEM.DATA.ROLES.INIT]({ commit }) {
      return Http.get('/department_role')
        .then(res => commit(SYSTEM.DATA.ROLES.INIT, res))
    },

    [SYSTEM.DATA.PROCESS.INIT]({ commit }) {
      return Http.get('/process/create')
        .then(res => commit(SYSTEM.DATA.PROCESS.INIT, res))
    },
  },
}
