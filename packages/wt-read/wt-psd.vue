<template>
    <div class="confirm-wrapper" v-if="display">
        <transition name="confirm-bounce" @after-leave="afterLeave">
            <div class="confirm-box" :style="{ 'max-width': maxWidth }">
                <span class="confirm-box-title">{{ title }}</span>
                <div class="modal" @click="handleAction('cancel')" @touchmove.prevent>X</div>
                <slot></slot>
                <!-- <div style="margin:0.5rem 0;fontSize:0.25rem;" v-if="!message">
          <div for="请输入密码:">浏览内容已经被保护,请输入密码验证</div>
          <div style="    position: relative;">
            <input :type="typePwd" v-model="psd" class="confirm-box-input" @keyup.enter="surePsd()" />
            <a-icon
              @click="showPwd"
              style="position: absolute;right: 0.3rem;top: 0.4rem;"
              :type="typePwd === 'password' ? 'eye' : 'eye-invisible'"
            />
          </div>
        </div> -->
                <!-- <div
          ref="messageHtml"
          style="margin-top:0.3rem;display:flex;justify-content: center;flex-direction: column;font-size:0.3rem;"
        >
          <div
            @click="handleAction('confirm', 3)"
            style="display:flex;align-items: center;color:#cf0000;"
          >高风险:{{ message.high || 0 }}</div>
          <div
            @click="handleAction('confirm', 2)"
            style="display:flex;align-items: center;color:#ff9800;"
          >中风险:{{ message.medium || 0 }}</div>
          <div
            @click="handleAction('confirm', 1)"
            style="display:flex;align-items: center;color:#ffeb3b;"
          >低风险:{{ message.low || 0 }}</div>
        </div> -->
                <div style="text-align:right;margin-top:0.3rem;" v-if="!message">
                    <button @click="handleAction('cancel')" class="cancel">取消</button>
                    <button style="margin-left:0.3rem" class="cancel sure" @click="surePsd()">
                        确认
                    </button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'WtPsd',
    data() {
        return {
            psd: '',
            display: false,
            disabled: true,
            typePwd: 'password'
        }
    },
    methods: {
        afterLeave() {
            this.display = false
        },
        handleAction(action, key) {
            this.callBack && this.callBack(action, key)
        },
        surePsd() {
            if (this.psd && localStorage.getItem('DataV-PSD') === this.psd) {
                localStorage.setItem('DataV-PSD-Hide', true)
                this.$message.success('密码校验成功')
                this.handleAction('confirm')
            } else {
                this.$error({ title: '请输入正确的密码' })
            }
        },
        showPwd() {
            this.typePwd = this.typePwd === 'password' ? 'text' : 'password'
        }
    },
    props: {
        message: null,
        title: {
            type: String,
            default: '提醒'
        },
        maxWidth: {
            type: String,
            default: '8rem'
        },
        callBack: Function
    }
}
</script>

<style lang="less" scoped>
.confirm-wrapper {
    // display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    z-index: 1000;
    min-height: 100vh;
    background-color: rgba(10, 49, 144, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
}
.building_map_div {
    border-radius: 0.2vw;
    padding: 0.5vw;
    background-size: 100% 100%;
    font-size: 0.2rem;
    font-weight: bold;
    line-height: 3vh;
    word-break: keep-all;
}

.building_map_header_title {
    color: #3afc06;
    padding-left: 0.3vw;
    margin-left: -0.3vw;
}
.confirm-box {
    border-radius: 4px;
    border-top: 3px solid #39eee9;
    color: #fff;
    width: 40%;
    min-height: 30%;
    max-width: 8rem;
    background-color: #2e4f56;
    padding: 0.3rem;
    font-size: 0.3rem;
    .modal {
        float: right;
        font-weight: 600;
        font-size: 0.3rem;
        cursor: pointer;
    }
    .confirm-box-title {
        padding-left: 0.3rem;
        border-left: 5px dashed #ff2d2c;
        font-size: 0.3rem;
    }
    .confirm-box-input {
        width: 100%;
        background: #17261c;
        margin-top: 0.3rem;
        border: 1px solid #39eee9;
    }
    .cancel {
        min-width: 1rem;
        min-height: 0.5rem;
        cursor: pointer;
        color: #ee9239;
        border: none;
        // background: url(~@/assets/dataV/psd/btn1.png) no-repeat center / cover;
    }
    .sure {
        color: #39eee9;
        // background: url(~@/assets/dataV/psd/btn2.png) no-repeat center / cover;
    }
    .latter-view {
        width: 1090px;
        height: 490px;
        position: relative;
        .close-bar {
            position: absolute;
            top: 0;
            right: 140px;
            z-index: 99;
            cursor: pointer;
            padding: 14px;
        }
        .latter-content-wrap {
            width: 520px;
            float: right;
            margin-right: 140px;
            padding: 65px 70px;
        }
        .title {
            font-size: 24px;
            color: #e02020;
            padding-bottom: 20px;
            margin-bottom: 20px;
            border-bottom: 1px solid #e7e9f4;
            text-align: center;
            font-weight: 600;
        }
        .content {
            font-size: 16px;
            font-weight: 600;
            color: rgba(0, 0, 0, 0.85);
            line-height: 22px;
        }
        .ant-btn-sure {
            width: 181px;
            height: 38px;
            position: absolute;
            bottom: 30px;
            right: 200px;
            color: #fff;
            background: #4c67ff;
            border-color: #4c67ff;
        }
        .ant-btn-grey {
            color: #fff;
            background: #b0b0b0;
            border-color: #b0b0b0;
        }
    }
}
// 添加动画效果
.confirm-bounce-enter-active,
.confirm-bounce-leave-active {
    transition: all 0.4s ease;
}
.confirm-bounce-enter {
    opacity: 0;
    transform: scale(0.5);
}
.confirm-bounce-leave-active {
    opacity: 0;
    transform: scale(0.4);
}
</style>
