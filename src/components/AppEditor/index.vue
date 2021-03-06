<template>
  <div :id="id"></div>
</template>

<script>
import defaultConfig from './config'

window.CKEDITOR_BASEPATH = '/assets/1.0.0/lib/ckeditor/'
// MathJax配置
window.MathJax = {
  jax: ['input/MathML', 'output/SVG'],
  extensions: ['mml2jax.js'],
  showMathMenu: false,
  showProcessingMessages: false,
  messageStyle: 'none',
  SVG: {
    font: 'STIX-Web',
    useGlobalCache: false,
    matchFontHeight: false,
  },
  MathML: {
    extensions: ['content-mathml.js'],
  },
}
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    width: {
      type: [Number, String],
      default: 'auto',
    },
    height: {
      type: Number,
      default: 250,
    },
    config: {
      type: Object,
      default: () => ({}),
    },
    type: {
      type: String,
      default: 'lesson',
    },
  },

  data() {
    return {
      id: `editor-${Math.random().toString(32).slice(2)}`,
      editor: null,
    }
  },

  methods: {
    loadScript(src) {
      return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.addEventListener('load', () => {
          resolve()
        })
        document.body.appendChild(script)
      })
    },

    init() {
      const CKEDITOR = window.CKEDITOR

      CKEDITOR.plugins.addExternal('base64image', '/assets/1.0.0/vue/ckeditor/plugins/base64image/plugin.js')
      CKEDITOR.plugins.addExternal('base64', '/assets/1.0.0/vue/ckeditor/plugins/base64/plugin.js')
      CKEDITOR.plugins.addExternal('wiris', '/assets/1.0.0/vue/ckeditor/plugins/wiris/plugin.js')

      // 上面是全局性设置，这里需要在初始化编辑器时单独把config传入，以便每个实例实现不同的尺寸
      const config = {
        // 默认字体大小
        fontSize_defaultLabel: '14px',
        width: `${this.width}px`,
        height: `${this.height}px`,
        extraPlugins: 'wiris,base64,base64image',
        ...defaultConfig[this.type],
        ...this.config,
      }

      function isWysiwygareaAvailable() {
      // eslint-disable-next-line
      if (CKEDITOR.revision === ('%RE' + 'V%')) {
          return true
        }
        return !!CKEDITOR.plugins.get('wysiwygarea')
      }

      const wysiwygareaAvailable = isWysiwygareaAvailable()
      const editorElement = CKEDITOR.document.getById(this.id)

      if (wysiwygareaAvailable) {
        this.editor = CKEDITOR.replace(this.id, config)
      } else {
        editorElement.setAttribute('contenteditable', 'true')
        this.editor = CKEDITOR.inline(this.id, config)
      }

      // 设置编辑器的初始内容
      this.editor.setData(this.value)
      // 监听编辑器的内容变化，并派发input事件使得调用此组件的地方可以直接使用v-model绑定值
      this.editor.on('change', (event) => {
        this.$emit('input', event.editor.getData())
      })
      // 监听双击公式打开公式编辑及更新
      this.editor.on('doubleclick', (event) => {
        const dataMathml = event.data.element.getAttribute('data-mathml')
        if (event.data.element && !event.data.element.isReadOnly() && event.data.element.getName() === 'img' && dataMathml) {
          // eslint-disable-next-line
          event.data.dialog = 'wiris'
          this.editor.getSelection().selectElement(event.data.element)
          // 打开公式编辑器
          this.editor.execCommand('abbr')
          return false
        }
        return true
      })

      // 派发编辑器的实例本身，以应对更灵活的使用情况
      this.$emit('init', this.editor)
    },
  },

  /**
   * 初始化编辑器
   * 初始化时所需的依赖，在这里通过动态插入script标签来载入，以避免一进入应用就要请求编辑器相关的大量资源
   * 依赖仅需载入一次，载入依赖前，需先判断是否已载入过，如果已载入直接执行初始化代码
   * `window.com`是wiris编辑器挂载的一个全局变量，这里通过这个变量来判断是否已载入过依赖
   */
  mounted() {
    if (window.com) {
      this.init()
    } else {
      Promise.all([
        this.loadScript('/assets/1.0.0/lib/ckeditor/ckeditor.js'),
        this.loadScript('/assets/1.0.0/lib/wiris/editor.js'),
        this.loadScript('/assets/1.0.0/lib/MathJax/MathJax.js'),
      ])
        .then(() => {
          // 指定wiris编辑器的资源请求地址（图标、字体等等）
          window.com.wiris.js.defaultBasePath = '/assets/1.0.0/lib/wiris/editor/resources'
          window.com.wiris.js.defaultServicePath = '/assets/1.0.0/lib/wiris/editor'
        })
        .then(this.init)
    }
  },
}
</script>

<style lang="postcss">
.wiris-wrapper {
  display: none;
  position: fixed;
  top: 200px;
  left: 50%;
  margin-left: -300px;
  width: 600px;
  padding: 10px;
  border: 1px solid #ccc;
  background: #fff;
}

.wrs_panelContainer * {
  vertical-align: middle !important;
  box-sizing: border-box !important;
}

/* wiris在此应用里有一些怪异的行为，暂未查清，但可使用简单的CSS来绕过 */
.wrs_formulaDisplay {
  height: 150px !important;
}

.wrs_tickContainer {
  display: none;
}

.wrs_linkButton.wrs_imageContainer[title="手册"] {
  display: none;
}
</style>
