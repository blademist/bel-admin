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

  LASTRECORD: 'GLOBAL.LASTRECORD',
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

  // 预约记录模块
  RESERVATION: {
    INIT: 'BUSINESS.RESERVATION.INIT',
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

    PRODUCT: { // 签约产品
      INIT: 'STUDENT.STUDENT.PRODUCT.INIT',
    },
  },

  PLAN: { // 学习计划
    INIT: 'STUDENT.PLAN.INIT',
    UPDATE: 'STUDENT.PLAN.UPDATE',
    CURRENT_ITEM_DATA: 'STUDENT.PLAN.CURRENT_ITEM_DATA',
    CURRENT_ITEM_STORE: 'STUDENT.PLAN.CURRENT_ITEM_STORE',
    CURRENT_ITEM_TYPE: 'STUDENT.PLAN.CURRENT_ITEM_TYPE',
    CURRENT_ITEM_COURSELIST: 'STUDENT.PLAN.CURRENT_ITEM_COURSELIST',
    CURRENT_ITEM_UPDATE: 'STUDENT.PLAN.CURRENT_ITEM_UPDATE',
    UPDATE_FIELD: 'STUDENT.PLAN.UPDATE_FIELD',
    FETCH_COACH_LIST: 'STUDENT.PLAN.FETCH_COACH_LIST',
  },

  SCHEDULE: { // 课表
    LIST: 'STUDENT.SCHEDULE.LIST',
    WEEKLY_LIST: 'STUDENT.SCHEDULE.WEEKLY_LIST',
    DAILY_LIST: 'STUDENT.SCHEDULE.DAILY_LIST',
    GET_TIP: 'STUDENT.SCHEDULE.GET_TIP',
    COURSE_ITEM: 'STUDENT.SCHEDULE.COURSE_ITEM',
    COURSE_ITEM_CHAPTER: 'STUDENT.SCHEDULE.COURSE_ITEM_CHAPTER',
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
  // 章节
  CHAPTER: {
    INIT: 'QUESTION.CHAPTER.INIT',
  },
  // 试题
  QUESTION: {
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
  // 报告配置
  REPORT: {
    INIT: 'QUESTION.REPORT.INIT',
    DELETE: 'QUESTION.REPORT.DELETE',
  },
}

// 测试管理
export const EXAMINATION = {
  // 智能测试
  SMARTEXAM: {
    INIT: 'EXAMINATION.SMARTEXAM.INIT',
    MY: 'EXAMINATION.SMARTEXAM.MY',
    DELETE: 'EXAMINATION.SMARTEXAM.DELETE',
    STUDENT_DATA: 'EXAMINATION.SMARTEXAM.STUDENT_DATA',
  },
}

// 备课管理
export const PREPARE = {
  // 教案管理
  PREPAREPLAN: {
    INIT: 'PREPARE.PREPAREPLAN.INIT',
    TEACHERNAME: 'PREPARE.PREPAREPLAN.TEACHERNAME',
    DETAIL: {
      INIT: 'PREPARE.PREPAREPLAN.DETAIL.INIT',
    },
  },
}

export const SETTING = {
  // 学校管理
  SCHOOL: {
    LIST: 'SETTING.SCHOOL.LIST',
  },
}
