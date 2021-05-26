<script>
export default {
  name: 'WtUpload',
  props: {
    api: {
      default: 'postUploadFileApi',
      type: String
    },
    name: {
      default: 'multipartFile',
      type: String
    },
    year: {
      default: '',
      type: String
    },
    message: {
      default: '导入',
      type: String
    },
    multiple: {
      default: false,
      type: Boolean
    },
    showUploadList: {
      default: true,
      type: Boolean
    },
    uploadId: {
      default: '',
      type: String
    },
    type: {
      type: String,
      default: null
      // default: 'image/jpeg,image/png,application/pdf'
    },
    limitNum: {
      default: 10000,
      type: Number
    },
    disabled: {
      default: false,
      type: Boolean
    },
    fileList: {
      default: () => [],
      type: Array
    }
  },
  data () {
    return {
      url: '',
      loading: false,
      file: null,
      fileName: '',
      fileListAll: this.fileList || []
    }
  },
  methods: {
    beforeUpload (file, fileList) {
      console.log('🐛:: beforeUpload -> file', file, fileList)
      const ext = file.name.substr(file.name.lastIndexOf('.') + 1)
      if (this.type) {
        if (this.type.indexOf(ext) === -1) {
          this.$message.error(`文件类型仅支持${this.type}`)
          return false
        }
      }
      if (this.multiple && this.fileListAll.length >= this.limitNum) {
        this.$message.error(`最多只能上传${this.limitNum}个文件`)
        return false
      }
      console.log(fileList.length, 999)
      file.status = 'done'
      this.fileName = file.name
      this.$emit('beforeUpload', file)
      this.loading = true
      if (file.size / 1024 / 1024 > 30) {
        this.$message.error('文件大小不能超过 30MB!')
      } else {
        this.file = file
        // this.fileListAll = fileList
        this.handleUpload()
        return false
      }
    },
    handleUpload () {
      const formData = new FormData()
      formData.append('pathPrefix', '/linanjiwei/web')
      this.uploadId && formData.append('moduleId', this.uploadId)
      this.year && formData.append('year', this.year)
      formData.append(this.name, this.file)
      this.$api[this.api](formData)
        .then(res => {
          if (res.code === 0) {
            this.file.status = 'done'
            this.$message.success('上传成功！')
            this.fileListAll.push({ name: this.fileName, url: res.msg })
            this.$emit('all', this.fileListAll)
            this.$emit('customRequest', { name: this.fileName, url: res.msg })
            this.$emit('customRequestData', res.data)
          } else {
            this.$error({
              title: '上传失败',
              content: res.msg
            })
            this.$emit('Error', res)
          }
          this.loading = false
        })
        .catch(err => {
          this.loading = false
          this.$error({
            title: '上传失败',
            content: err.msg
          })
        })
    },
    remove (index) {
      console.log('🐛 ~ file: wt-upload.vue ~ line 104 ~ remove ~ index', index)
      this.fileListAll.splice(index, 1)
      this.$emit('file', null)
      this.$emit('all', this.fileListAll)
    },
    mouseenter (item) {
      this.$api.getDownloadFileApi({ objectName: item.url }).then(res => {
        this.url = res.signedUrl
      })
    },
    openUrl (url, name) {
      this.$api.getDownloadFileApi({ objectName: url }).then(res => {
        fetch(res.signedUrl)
          .then(function (response) {
            return response.blob()
          })
          .then(function (myBlob) {
            const url = window.URL.createObjectURL(myBlob)
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', name)
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            window.URL.revokeObjectURL(link.href)
          })
      })
    }
  },
  watch: {
    fileList: { // 深度监听
      handler (val, oldVal) {
        this.fileListAll = val || []
      },
      deep: true
    }
  },
  render (h) {
    return (
      <div class="wt-upload">
        {this.disabled ? null : <a-upload
          multiple={this.multiple}
          change={this.change}
          fileList={this.fileListAll}
          beforeUpload={this.beforeUpload}
          remove={this.remove}
          showUploadList={false}
          name="file"
          {...this.$attrs}
        >
          <a-button block type="primary" icon={this.loading ? 'loading' : 'upload'}>
            {this.message}
          </a-button>
        </a-upload>}
        <ul>
          {this.showUploadList ? this.fileListAll.map((item, index) =>
            (<li><a onClick={() => this.openUrl(item.url, item.name)} target="_blank"><a-icon type="paper-clip" />
              {
                'png、jpg、jpeg'.indexOf(item.name.substr(item.name.lastIndexOf('.') + 1)) === -1 ? item.name : (<a-popover title="预览" onMouseenter={() => this.mouseenter(item)}>
                  <template slot="content">
                    <img src={this.url} alt={item.name} style="width:300px;"></img>
                  </template>
                  <span style="maxWidth:300px;display:inline-block;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;word-break:break-all;height: 28px;" title={item.name}>{item.name}</span>
                </a-popover>)
              }
            </a>
            {this.disabled ? null : <a-icon type="delete" style="cursor:pointer" onClick={() => this.remove(index)}/>}
            </li>)
          ) : null}
        </ul>

      </div>
    )
  }
}
</script>
<style lang="less" scoped>
.wt-upload {
  display: inline-block;
}
</style>
