export const GLOBAL = {
  TOKEN: {
    UPDATE: 'GLOBAL.TOKEN.UPDATE',
    REMOVE: 'GLOBAL.TOKEN.REMOVE',
  },

  USER: {
    UPDATE: 'GLOBAL.USER.UPDATE',
  },

  MENUS: {
    UPDATE: 'GLOBAL.MENUS.UPDATE',
  },

  ROLES: {
    UPDATE: 'GLOBAL.ROLES.UPDATE',
  },

  PERMISSIONS: {
    UPDATE: 'GLOBAL.PERMISSIONS.UPDATE',
  },

  LOADING: {
    SHOW: 'GLOBAL.LOADING.SHOW',
    HIDE: 'GLOBAL.LOADING.HIDE',
  },

  DICTS: {
    INIT: 'GLOBAL.DICTS.INIT',
  },

  LOGIN: 'GLOBAL.LOGIN',
  SWITCH: 'GLOBAL.SWITCH',
  LOGOUT: 'GLOBAL.LOGOUT',
}

export const SYSTEM = {
  FORM_LOADING: {
    UPDATE: 'SYSTEM.FORM_LOADING.UPDATE',
  },

  DEPARTMENT: {
    INIT: 'SYSTEM.DEPARTMENT.INIT',
    CREATE: 'SYSTEM.DEPARTMENT.CREATE',
    UPDATE: 'SYSTEM.DEPARTMENT.UPDATE',
    DELETE: 'SYSTEM.DEPARTMENT.DELETE',
  },

  ROLE: {
    INIT: 'SYSTEM.ROLE.INIT',
    CREATE: 'SYSTEM.ROLE.CREATE',
    UPDATE: 'SYSTEM.ROLE.UPDATE',
    DELETE: 'SYSTEM.ROLE.DELETE',

    PERMIS: {
      INIT: 'SYSTEM.ROLE.PERMIS.INIT',
    },
  },

  USER: {
    INIT: 'SYSTEM.USER.INIT',
  },
}

export const BUSINESS = {
  SETURI: 'BUSINESS.SETURI',
  PAGE: {
    INIT: 'BUSINESS.PAGE.INIT',
  },
  EDIT: {
    INIT: 'BUSINESS.EDIT.INIT',
    CREATE: 'BUSINESS.EDIT.CREATE',
    UPDATE: 'BUSINESS.EDIT.UPDATE',
    DELETE: 'BUSINESS.EDIT.DELETE',
  },
}

// 学员管理
export const STUDENT = {
  // 班级管理
  CLASSES: {
    INIT: 'STUDENT.CLASSES.INIT',
    // CREATE: 'STUDENT.CLASSES.CREATE',
    // UPDATE: 'STUDENT.CLASSES.UPDATE',
    DELETE: 'STUDENT.CLASSES.DELETE',
  },
  // 学员信息
  STUDENT: {
    INIT: 'STUDENT.STUDENT.INIT',
    DELETE: 'STUDENT.STUDENT.DELETE',
  },
}
