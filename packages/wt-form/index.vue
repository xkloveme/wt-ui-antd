<template>
    <div>
        <formCreate
            ref="fc"
            v-bind="$attrs"
            v-model="fApi"
            :class="isSearch ? 'ant-form-inline' : ''"
            :option="newOption"
            :value.sync="fromValue"
        >
        </formCreate>
        <slot name="customBtn"></slot>
    </div>
</template>

<script>
// import formCreate from '@form-create/ant-design-vue'
export default {
    name: 'wt-form',
    // components: { formCreate: formCreate.$form() },
    props: {
        value: {
            type: Object,
            default: () => {}
        },
        isSearch: {
            type: Boolean,
            default: false
        },
        option: {
            type: Object,
            default: () => {}
        },
        submitBtn: {
            type: Boolean,
            default: true
        },
        isResetBtn: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        '$attrs.visible': {
            handler(val, oldval) {
                this.fApi.resetFields()
                this.fApi.setValue(this.$attrs.formData)
            }
        }
    },
    data() {
        return {
            //实例对象
            fApi: {}
        }
    },
    computed: {
        //表单数据
        fromValue: {
            get() {
                console.log(this.value)
                return this.value || {}
            },
            set(val) {
                this.$emit('input', val)
            }
        },
        newOption() {
            const self = this
            const defOption = {
                onSubmit: function(data) {
                    self.$emit('submit', data)
                },
                onReload: function(formData) {
                    console.log('表单已重载')
                },
                submitBtn: {
                    disabled: false,
                    ghost: false,
                    loading: false,
                    type: 'primary',
                    block: false,
                    icon: self.isSearch ? 'search' : 'check',
                    innerText: self.isSearch ? '搜索' : '提交',
                    col: { span: self.isSearch ? 2 : 12, push: '6' },
                    show: self.submitBtn
                },
                resetBtn: {
                    disabled: false,
                    ghost: false,
                    icon: 'sync',
                    loading: false,
                    type: 'default',
                    block: false,
                    innerText: '重置',
                    col: { span: self.isSearch ? 2 : 12 },
                    show: self.isSearch
                }
            }
            return { ...defOption, ...this.option }
        }
    },
    methods: {
        changeValue(field, value) {
            this.fApi.setValue(field, value)
        },
        // 手动重新渲染指定组件
        reloadField(field) {
            this.fApi.sync(field)
        },
        getApi() {
            return this.fApi
        }
    }
}
</script>

<style lang="less" scoped></style>
