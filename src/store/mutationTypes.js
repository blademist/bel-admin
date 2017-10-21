export const GLOBAL = {
  TOKEN: {
    UPDATE: 'GLOBAL.TOKEN.UPDATE',
    REMOVE: 'GLOBAL.TOKEN.REMOVE',
  },

  USER: {
    UPDATE: 'GLOBAL.USER.UPDATE',
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
  DEPARTMENT: {
    INIT: 'SYSTEM.DEPARTMENT.INIT',
    CREATE: 'SYSTEM.DEPARTMENT.CREATE',
    UPDATE: 'SYSTEM.DEPARTMENT.UPDATE',
    DELETE: 'SYSTEM.DEPARTMENT.DELETE',
  },

  DATA: {
    PERMIS: {
      INIT: 'SYSTEM.DATA.PERMIS.INIT',
    },
    ROLES: {
      INIT: 'SYSTEM.DATA.ROLES.INIT',
    },
    PROCESS: {
      INIT: 'SYSTEM.DATA.PROCESS.INIT',
    },
  },

  ROLE: {
    INIT: 'SYSTEM.ROLE.INIT',
    DELETE: 'SYSTEM.ROLE.DELETE',
  },

  USER: {
    INIT: 'SYSTEM.USER.INIT',
    DELETE: 'SYSTEM.USER.DELETE',
  },

  PROCESS: {
    INIT: 'SYSTEM.PROCESS.INIT',
    DELETE: 'SYSTEM.PROCESS.DELETE',
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

// 学员课程
export const STUDENT = {
  // 班级管理
  CLASSES: {
    INIT: 'STUDENT.CLASSES.INIT',
    DELETE: 'STUDENT.CLASSES.DELETE',
  },

  // 学员管理
  STUDENT: {
    INIT: 'STUDENT.STUDENT.INIT',
    DELETE: 'STUDENT.STUDENT.DELETE',

    MEETING: { // 交流会(旧)
      INIT: 'STUDENT.STUDENT.MEETING.INIT',
      DELETE: 'STUDENT.STUDENT.MEETING.DELETE',
    },

    WARNING: { // 预警信息(旧)
      INIT: 'STUDENT.STUDENT.WARNING.INIT',
    },

    PRODUCT: { // 签约产品
      INIT: 'STUDENT.STUDENT.PRODUCT.INIT',
    },
  },

  STUDYPROGRESS: { // 学习进度
    STUDENT: { // (学员)
      INIT: 'STUDENT.STUDYPROGRESS.STUDENT.INIT',
      HISTORY: { // 历史计划(学员)
        INIT: 'STUDENT.STUDYPROGRESS.STUDENT.HISTORY.INIT',
      },
    },
    CLASSES: { // (班级)
      INIT: 'STUDENT.STUDYPROGRESS.CLASSES.INIT',
      HISTORY: { // 历史计划(班级)
        INIT: 'STUDENT.STUDYPROGRESS.CLASSES.HISTORY.INIT',
      },
    },
  },

  KNOWLEDGEPOINT: { // 学员知识点
    INIT: 'STUDENT.KNOWLEDGEPOINT.INIT',
  },

  PLAN: { // 学习计划
    INIT: 'STUDENT.PLAN.INIT',
    UPDATE: 'STUDENT.PLAN.UPDATE',
    CURRENT_ITEM_DATA: 'STUDENT.PLAN.CURRENT_ITEM_DATA',
    CURRENT_ITEM_TYPE: 'STUDENT.PLAN.CURRENT_ITEM_TYPE',
    CURRENT_ITEM_TEACHER: 'STUDENT.PLAN.CURRENT_ITEM_TEACHER',
    CURRENT_ITEM_COURSELIST: 'STUDENT.PLAN.CURRENT_ITEM_COURSELIST',
    CURRENT_CHAPTER: 'STUDENT.PLAN.CURRENT_CHAPTER',
    UPDATE_FIELD: 'STUDENT.PLAN.UPDATE_FIELD',
    FETCH_COACH_LIST: 'STUDENT.PLAN.FETCH_COACH_LIST',
  },

  SCHEDULE: { // 课表
    LIST: 'STUDENT.SCHEDULE.LIST',
    WEEKLY_LIST: 'STUDENT.SCHEDULE.WEEKLY_LIST',
    DAILY_LIST: 'STUDENT.SCHEDULE.DAILY_LIST',
  },
}

// 管理收藏标签
export const LABEL = {
  INIT: 'LABEL.INIT',
  CREATE: 'LABEL.CREATE',
  DELETE: 'LABEL.DELETE',
}

// 题库中心
export const QUESTION = {
  CHAPTER: { // 章节
    INIT: 'QUESTION.CHAPTER.INIT',
  },

  QUESTION: { // 试题
    INIT: 'QUESTION.QUESTION.INIT',
  },

  // 试卷
  PAPER: {
    COMPOSE: 'QUESTION.PAPER.COMPOSE',
    RECORD: 'QUESTION.PAPER.RECORD',
    RELOAD: 'QUESTION.PAPER.RELOAD',
    CONFIRM_TEMPORY: 'QUESTION.PAPER.CONFIRM_TEMPORY',
    CANCEL_TEMPORY: 'QUESTION.PAPER.CANCEL_TEMPORY',
  },
}

// 测试管理
export const EXAMINATION = {
  SMARTEXAM: {
    INIT: 'EXAMINATION.SMARTEXAM.INIT',
    DELETE: 'EXAMINATION.SMARTEXAM.DELETE',
  },
}
