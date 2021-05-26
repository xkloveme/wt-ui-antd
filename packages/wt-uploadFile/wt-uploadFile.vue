<template >
  <div class="wt-upload">
    <form class="wt-upload-form" ref="form">
      <input ref="input" type="file" :multiple="multiple" @change="change">
      <ul class="wt-upload-files">
        <li v-for="(item, index) in value" :key="index" :title="item.filename">
          <slot :file="item" :index="index">
            <div class="wt-upload-files-preview" :style="getStyle(item)">
              <div class="wt-upload-files-preview-error" v-if="item.error">
                上传失败
              </div>
              <!-- <div class="wt-upload-files-preview-progress" v-if="item.percentage !== 100 && !item.error">
            <div></div>
          </div> -->
              <div class="wt-upload-files-preview-mask"></div>
              <div class="wt-upload-files-preview-delete"><i class="el-icon-delete"></i></div>
            </div>
          </slot>
        </li>
      </ul>
    </form>
    <div class="wt-upload-button" v-if="maxlength > value.length" @click="addFile"><slot name="button" v-if="!disabled">
      <div class="wt-upload-button-container">
        <a-icon type="plus" />
      </div>
    </slot></div>
  </div>
</template>

<script>
export default {
  name: 'WtUploadFile',
  props: {
    value: {
      type: Array,
      default: () => []
    },
    multiple: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    config: {
      type: Object,
      default: null
    },
    accept: {
      type: Function,
      default: () => true
    },
    maxlength: {
      type: Number,
      default: 9
    },
    name: {
      type: String,
      default: 'file'
    },
    autoUpload: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      index: 0
    }
  },
  methods: {
    getStyle ({ url }) {
      return {
        'background-image': `url("${url}")`
      }
    },
    change (e) {
      const files = [...e.target.files]
      console.log('🐛: ~ file: wt-uploadFile.vue ~ line 80 ~ change ~ files', files)
      this.$refs.form.reset()
      if (files.find(file => !this.accept(file))) return
      const value = [...this.value] || []
      files.forEach(raw => {
        const file = {
          id: `${Date.now()}-${this.index++}`,
          url: URL.createObjectURL(raw),
          filename: raw.name,
          raw: raw,
          lastModified: raw.lastModified,
          size: raw.size,
          type: raw.type,
          percentage: 0,
          error: null
        }
        value.push(file)
        if (this.autoUpload) this.upload(file)
      })
      this.$emit('input', value.slice(0, this.maxlength))
    },
    addFile () {
      if (this.disabled) {
        this.$message.error('已禁用上传')
      } else {
        this.$refs.input.click()
      }
    },
    upload (file) {
      this.$message.info('正在上传请等待')
      const formData = new FormData()
      formData.append('file', file.raw)
      formData.append('pathPrefix', '/linanjiwei/')
      this.$api.postUploadFileApi(formData)
        .then(data => {
          const files = [...data.msg] || []
          const index = files.findIndex(({ id }) => id === file.id)
          if (index !== -1) {
            files[index].percentage = 100
            files[index].data = data
            this.$emit('input', files)
            this.$emit('success', data)
          }
        })
        .catch(error => {
          const files = [...this.value] || []
          const index = files.findIndex(({ id }) => id === file.id)
          if (index !== -1) {
            files[index].percentage = 0
            files[index].error = error
            this.$error(error.response.data.message)
            this.$emit('input', files)
          }
        })
    },
    deleteFile (index) {
      const files = [...this.value] || []
      files.splice(index, 1)
      this.$emit('input', files.slice(0, this.maxlength))
    }
  }
}
</script>

<style lang="less">
.wt-upload {
  &-form,
  input[type='file'] {
    display: none;
  }
  &-files {
    display: inline;
    margin: 0 auto;
    padding: 0;
    list-style: none;
    vertical-align: top;
    li {
      display: inline-block;
    }
    &-preview {
      width: 90px;
      height: 90px;
      line-height: 90px;
      background-color: #fff;
      // border: 1px solid #c0ccda;
      border-radius: 7px;
      margin-right: 10px;
      margin: 0 8px 8px 0;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      position: relative;
      overflow: hidden;
      &-error {
        background-color: rgba(255, 0, 0, 0.6);
        color: #fff;
        font-size: 14px;
        text-align: center;
      }
      &-progress {
        padding: 10px;
        background-color: rgba(0, 0, 0, 0.4);
      }
      .el-progress__text {
        color: #fff;
      }
      &-mask {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0;
        background-color: rgba(0, 0, 0, 0.4);
        transition: opacity 0.3s linear;
      }
      &-delete {
        position: absolute;
        top: 50%;
        left: 50%;
        display: none;
        transform: translate(-50%, -50%);
        font-size: 20px;
        color: #fff;
        cursor: pointer;
      }
      &:hover {
        .wt-upload-files-preview-mask {
          opacity: 1;
        }
        .wt-upload-files-preview-delete {
          display: block;
        }
      }
    }
  }
  &-button {
    display: inline-block;
    vertical-align: top;
    &-container {
      width: 90px;
      height: 90px;
      line-height: 90px;
      font-size: 30px;
      text-align: center;
      background-color: #fbfdff;
      border: 1px dashed #c0ccda;
      border-radius: 7px;
      margin: 0 8px 8px 0;
      cursor: pointer;
      &:hover {
        border-color: #005bea;
        color: #005bea;
      }
    }
  }
}
</style>
