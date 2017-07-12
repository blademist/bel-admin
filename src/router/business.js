/**
 * 业务管理路由配置
 * @author hjz
 * @version 2017-06-06
 * @description 没有business路由组件，只用子路径下的四个路由组件
 */

import * as views from '@/views'

const BUSSINESS_HOTLINE = { name: '热线登记', link: '/business/hotline' }
const BUSSINESS_COMMUNICATION = { name: '沟通记录', link: '/business/communication' }
const BUSSINESS_PRODUCT = { name: '产品管理', link: '/business/product' }
const BUSSINESS_CONTRACT = { name: '合同审批', link: '/business/contract' }

export default [
  {
    path: '/business/hotline',
    name: 'BussinessHotline',
    component: views.Hotline,
    meta: {
      uri: 'hotline',
      breadcrumb: [
        { name: '业务管理' },
        { name: '热线登记' },
      ],
    },
  },
  {
    path: '/business/hotline/edit',
    name: 'BussinessHotlineCreate',
    component: views.HotlineEdit,
    meta: {
      uri: 'hotline',
      breadcrumb: [
        { name: '业务管理' },
        BUSSINESS_HOTLINE,
        { name: '添加热线' },
      ],
    },
  },
  {
    path: '/business/hotline/edit/:id',
    name: 'BussinessHotlineUpdate',
    component: views.HotlineEdit,
    meta: {
      uri: 'hotline',
      breadcrumb: [
        { name: '业务管理' },
        BUSSINESS_HOTLINE,
        { name: '编辑热线' },
      ],
    },
  },
  {
    path: 'business/communication',
    name: 'BussinessCommunication',
    component: views.Communication,
    meta: {
      uri: 'communication',
      breadcrumb: [
        { name: '业务管理' },
        { name: '沟通记录' },
      ],
    },
  },
  {
    path: 'business/communication/edit',
    name: 'BussinenssCommunicationCreate',
    component: views.CommunicationEdit,
    meta: {
      uri: 'communication',
      breadcrumb: [
        { name: '业务管理' },
        BUSSINESS_COMMUNICATION,
        { name: '添加记录' },
      ],
    },
  },
  {
    path: 'business/communication/edit/:id',
    name: 'BussinenssCommunicationUpdate',
    component: views.CommunicationEdit,
    meta: {
      uri: 'communication',
      breadcrumb: [
        { name: '业务管理' },
        BUSSINESS_COMMUNICATION,
        { name: '编辑记录' },
      ],
    },
  },
  {
    path: 'business/contract',
    name: 'BussinessContract',
    component: views.Contract,
    meta: {
      uri: 'contract',
      breadcrumb: [
        { name: '业务管理' },
        { name: '合同审批' },
      ],
    },
  },
  // 创建合同
  {
    path: 'business/contract/edit',
    name: 'BussinessContractCreate',
    component: views.ContractEdit,
    meta: {
      uri: 'contract',
      breadcrumb: [
        { name: '业务管理' },
        BUSSINESS_CONTRACT,
        { name: '添加审批' },
      ],
    },
  },
  // 更新合同
  {
    path: 'business/contract/edit/:id',
    name: 'BussinessContractUpdate',
    component: views.ContractEdit,
    meta: {
      uri: 'contract',
      breadcrumb: [
        { name: '业务管理' },
        { name: '合同审批' },
        { name: '审批详情' },
      ],
    },
  },
  // 更新退费合同
  {
    path: 'business/contract/refund/edit/:id',
    name: 'BussinessContractRefundUpdate',
    component: views.ContractRefund,
    meta: {
      uri: 'contract/refund',
      breadcrumb: [
        { name: '业务管理' },
        BUSSINESS_CONTRACT,
        { name: '更新审批' },
      ],
    },
  },
  // 创建退费合同
  {
    path: 'business/contract/refund/:id',
    name: 'BussinessContractRefundCreate',
    component: views.ContractRefund,
    meta: {
      uri: 'contract/refund',
      breadcrumb: [
        { name: '业务管理' },
        BUSSINESS_CONTRACT,
        { name: '添加审批' },
      ],
    },
  },
  // 审批合同
  {
    path: 'business/contract/audit/:id',
    name: 'BussinessContractAudit',
    component: views.ContractAudit,
    meta: {
      uri: 'contract/audit',
      breadcrumb: [
        { name: '业务管理' },
        BUSSINESS_CONTRACT,
        { name: '审批详情' },
      ],
    },
  },
  {
    path: 'business/product',
    name: 'BussinessProduct',
    component: views.Product,
    meta: {
      uri: 'product',
      breadcrumb: [
        { name: '业务管理' },
        { name: '产品管理' },
      ],
    },
  },
  {
    path: 'business/Product/edit',
    name: 'BussinessProductCreate',
    component: views.ProductEdit,
    meta: {
      uri: 'product',
      breadcrumb: [
        { name: '业务管理' },
        BUSSINESS_PRODUCT,
        { name: '添加产品' },
      ],
    },
  },
  {
    path: 'business/Product/edit/:id',
    name: 'BussinessProductUpdate',
    component: views.ProductEdit,
    meta: {
      uri: 'product',
      breadcrumb: [
        { name: '业务管理' },
        BUSSINESS_PRODUCT,
        { name: '编辑产品' },
      ],
    },
  },
]
