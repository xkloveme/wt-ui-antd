<!-- 图片显示 -->
<template>
    <div class="wt-preview" v-if="visible">
        <div class="wt-preview-content">
            <header class="wt-preview-content-header wt-preview-content-tool">
                <div>{{ imgLabel }}</div>
                <div @click="onClickClose">
                    <a-icon type="close" />
                </div>
            </header>
            <div class="wt-preview-content-box">
                <div
                    class="left wt-preview-content-box-button"
                    v-if="arrow === 'always'"
                    v-show="visibleLeft"
                    @click="onClickLeft"
                >
                    <a-icon type="left" />
                </div>
                <div class="center">
                    <img :src="imgSrc" :alt="imgLabel" />
                    <div class="center-tool" v-if="tool">
                        <div @click="onClickAdd">
                            <a-icon type="file-add" />
                            保存
                        </div>
                        <div @click="onCheckImage">
                            <a-icon type="file-image" />
                            查看图片
                        </div>
                    </div>
                </div>
                <div
                    class="right wt-preview-content-box-button"
                    v-if="arrow === 'always'"
                    v-show="visibleRight"
                    @click="onClickRight"
                >
                    <a-icon type="right" />
                </div>
            </div>
            <div class="wt-preview-content-fotter wt-preview-content-tool">
                <div class="wt-preview-content-fotter-center">
                    <ul
                        class="wt-preview-content-fotter-center-list"
                        ref="imgListRef"
                        @mouseover="onMouseover"
                        @mouseout="onMouseout"
                    >
                        <li></li>
                        <li
                            v-for="(item, index) in imageDataList"
                            :key="index"
                            :class="imgSrc === item.url && 'mark'"
                            @click="onClickImage(index)"
                        >
                            <img :src="item.url" />
                        </li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const oneOf = (value, validList) => {
    for (let i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true
        }
    }
    return false
}
export default {
    name: 'wt-preview',
    components: {},
    model: {
        prop: 'visible',
        even: 'close'
    },
    props: {
        // visible:{
        //   type: Boolean,
        //   default: false
        // },
        // 是否自动切换
        autoplay: {
            type: Boolean,
            default: false
        },
        // 间隔时间
        interval: {
            type: Number,
            default: 3000
        },
        initialIndex: {
            type: Number || String,
            default: 0
        },
        arrow: {
            validator(value) {
                return oneOf(value, ['always', 'never'])
            },
            default: 'always'
        },
        tool: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            visible: false,
            imageDataList: [],
            imgSrc: '',
            imgLabel: '',
            visibleRight: false,
            visibleLeft: false,
            scrollLeft: 0,
            oldScroll: 0,
            carouselTime: null,
            uniquelyIdentifies: ''
        }
    },
    // watch: {
    //   visible:{
    //     handler(nowData){
    //       if(nowData){
    //         console.log(nowData)
    //       }else{
    //         console.log(this.carouselTime)
    //         clearInterval(this.carouselTime)
    //       }
    //     }
    //   }
    // },
    methods: {
        handleGetValue(nowData) {
            this.$nextTick(() => {
                if (nowData && nowData.length) {
                    this.handleOpen(nowData)
                } else {
                    this.handleDataEmpty()
                }
            })
        },
        handleOpen(nowData = []) {
            if (nowData && nowData.length) {
                this.imageDataList = nowData.map((item, index) => {
                    if (item.url) {
                        // 唯一标识符
                        item['uniquelyIdentifies'] = `${window.btoa(item) + index}`
                    }
                    return item
                })
                this.visible = true
                if (this.initialIndex <= this.imageDataList.length - 1) {
                    this.imgSrc = this.imageDataList[this.initialIndex].url
                    this.imgLabel = this.imageDataList[this.initialIndex].label
                    this.uniquelyIdentifies = this.imageDataList[
                        this.initialIndex
                    ].uniquelyIdentifies
                } else {
                    console.error('character “initialIndex” out of range ')
                }

                this.handleKeyboard()
                if (this.imageDataList.length && this.imageDataList.length > 1) {
                    this.visibleRight = true
                    this.handleCarousel()
                }
            } else {
                console.error('no pictures')
            }
        },
        handleKeyboard() {
            document.onkeydown = e => {
                let e1 = e || window.event || arguments.callee.caller.arguments[0]
                //键盘按键判断:左箭头-37;上箭头-38；右箭头-39;下箭头-40
                if (e1 && e1.keyCode == 37 && this.visibleLeft) {
                    this.handleImgOrder('left')
                } else if (e1 && e1.keyCode == 39 && this.visibleRight) {
                    this.handleImgOrder('right')
                }
            }
        },
        handleDataEmpty() {
            this.imgSrc = this.imageDataList[0].url
            this.imgLabel = this.imageDataList[0].label
            this.uniquelyIdentifies = this.imageDataList[0].uniquelyIdentifies
        },
        async handleImgOrder(direction = 'right') {
            const imgLength = this.imageDataList ? this.imageDataList.length : null
            let src, alt, uis
            this.imageDataList.forEach((item, index) => {
                if (direction === 'left') {
                    if (
                        this.uniquelyIdentifies === item.uniquelyIdentifies &&
                        this.imageDataList[0].uniquelyIdentifies !== this.uniquelyIdentifies
                    ) {
                        src = this.imageDataList[index - 1].url
                        alt = this.imageDataList[index - 1].label
                        uis = this.imageDataList[index - 1].uniquelyIdentifies
                        this.visibleRight = true
                    }
                } else {
                    if (
                        this.uniquelyIdentifies === item.uniquelyIdentifies &&
                        index + 1 < imgLength
                    ) {
                        src = this.imageDataList[index + 1].url
                        alt = this.imageDataList[index + 1].label
                        uis = this.imageDataList[index + 1].uniquelyIdentifies
                        this.visibleLeft = true
                    }
                }
            })
            this.handleScroll(direction)
            this.imgSrc = src
            this.imgLabel = alt
            this.uniquelyIdentifies = uis
            if (
                direction === 'left' &&
                this.imageDataList[0].uniquelyIdentifies === this.uniquelyIdentifies
            ) {
                this.visibleLeft = false
            } else if (
                direction === 'right' &&
                this.imgSrc === this.imageDataList[imgLength - 1].url
            ) {
                this.visibleRight = false
            }
            return await true
        },
        async onClickRight() {
            clearInterval(this.carouselTime)
            const state = await this.handleImgOrder('right')
            if (state) {
                this.handleCarousel()
            }
        },
        async onClickLeft() {
            clearInterval(this.carouselTime)
            const state = await this.handleImgOrder('left')
            if (state) {
                this.handleCarousel()
            }
        },
        onClickImage(index) {
            if (index === 0) {
                this.visibleLeft = false
                this.visibleRight = true
            } else if (index === this.imageDataList.length - 1) {
                this.visibleRight = false
                this.visibleLeft = true
            } else if (index !== 0 && index !== this.imageDataList.length - 1) {
                this.visibleRight = true
                this.visibleLeft = true
            }
            this.imgSrc = this.imageDataList[index].url
            this.imgLabel = this.imageDataList[index].label
            this.uniquelyIdentifies = this.imageDataList[index].uniquelyIdentifies
            const ceil = Math.ceil(this.$refs.imgListRef.clientWidth / 60)
            const scrollIndex = index <= ceil ? index : ceil
            this.$refs.imgListRef.scrollLeft = parseInt(
                (this.$refs.imgListRef.clientWidth / ceil) * scrollIndex
            )
        },
        handleScroll(states) {
            this.oldScroll = this.$refs.imgListRef.scrollLeft
            if (states === 'left' && this.oldScroll) {
                this.scrollLeft = this.oldScroll - 60
            } else if (states === 'right' && this.$refs.imgListRef.clientWidth >= this.oldScroll) {
                this.scrollLeft = this.oldScroll + 60
            }
            this.$refs.imgListRef.scrollLeft = this.scrollLeft
        },
        onMouseover() {
            clearInterval(this.carouselTime)
            // this.$refs.imgListRef.style.overflowY = 'auto'
        },
        onMouseout() {
            this.handleCarousel()
            // this.$refs.imgListRef.style.overflowY = ''
        },
        onCheckImage() {
            this.handleFileLink(this.imgSrc)
        },
        handleFileLink(fileUrl) {
            const a = document.createElement('a')
            document.body.appendChild(a)
            a.href = fileUrl
            a.target = '_blank'
            a.click()
            window.URL.revokeObjectURL(fileUrl)
            a.remove()
        },
        onClickAdd() {
            this.handleDownload(this.imgSrc, this.imgLabel)
        },
        handleDownload(url, filename) {
            /**
             * 获取 blob
             * @param  {String} url 目标文件地址
             * @return {Promise}
             */
            function getBlob(url) {
                return new Promise((resolve, reject) => {
                    const xhr = new XMLHttpRequest()
                    xhr.open('GET', url, true)
                    xhr.responseType = 'blob'
                    xhr.onload = () => {
                        if (xhr.status === 200) {
                            resolve(xhr.response)
                        }
                    }
                    xhr.send()
                })
            }
            function saveAs(blob, filename) {
                if (window.navigator.msSaveOrOpenBlob) {
                    navigator.msSaveBlob(blob, filename)
                } else {
                    const link = document.createElement('a')
                    const body = document.querySelector('body')
                    link.href = window.URL.createObjectURL(blob)
                    link.download = filename
                    // fix Firefox
                    link.style.display = 'none'
                    body.appendChild(link)
                    link.click()
                    body.removeChild(link)
                    window.URL.revokeObjectURL(link.href)
                }
            }
            /**
             * 下载
             * @param  {String} url 目标文件地址
             * @param  {String} filename 想要保存的文件名称
             */
            getBlob(url).then(blob => {
                saveAs(blob, filename)
            })
        },
        onClickClose() {
            this.$emit('handleClose', false)
            this.visible = false
            this.handleDataEmpty()
            clearInterval(this.carouselTime)
        },
        // 轮播
        handleCarousel() {
            if (!this.autoplay) {
                return
            }
            this.carouselTime = setInterval(() => {
                if (
                    this.uniquelyIdentifies ===
                    this.imageDataList[this.imageDataList.length - 1].uniquelyIdentifies
                ) {
                    this.$refs.imgListRef.scrollLeft = 0
                    this.handleDataEmpty()
                    this.visibleLeft = false
                    this.visibleRight = true
                } else {
                    this.handleImgOrder('right')
                }
            }, this.interval)
        }
    }
}
</script>
<style lang="less" scoped>
@color222: #222;
.wt-preview {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    min-height: 640px;
    min-width: 400px;
    z-index: 999;
    background-color: #2b2b2b;
    user-select: none;
    color: #cacaca;
    &-content {
        // position: relative;
        height: 100%;
        &-tool {
            width: 100%;
            background-color: @color222;
        }
        &-header {
            height: 60px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 15px 0 10px;
            > div {
                &:first-child {
                    font-size: 18px;
                }
                &:last-child {
                    font-size: 18px;
                    cursor: pointer;
                    &:hover {
                        color: #fff;
                    }
                }
            }
        }
        // 图片列表
        &-fotter {
            height: 80px;
            display: flex;
            justify-content: center;
            &-center {
                width: 60%;
                height: 100%;
                padding: 12px 0 12px;
                overflow: hidden;
                position: relative;
                &-list {
                    min-width: 100%;
                    width: 100%;
                    overflow: auto;
                    height: 100%;
                    padding-inline-start: 0;
                    display: flex;
                    &::-webkit-scrollbar {
                        display: none;
                    }
                    &:hover {
                        > li {
                            opacity: 1;
                        }
                    }
                    > li {
                        min-width: 60px;
                        max-width: 60px;
                        height: 100%;
                        list-style-type: none;
                        margin: 0 2px;
                        cursor: pointer;
                        position: relative;
                        opacity: 0.3;
                        transition: opacity 0.5s;
                        &::marker {
                            display: none;
                        }
                        > img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .mark {
                        opacity: 1;
                        &::after {
                            content: '';
                            display: inline-block;
                            position: absolute;

                            bottom: 0;
                            left: 0;
                            width: 100%;
                            height: 2px;
                            background-color: #fff;
                        }
                    }
                }
                &::after {
                    content: '';
                    position: absolute;
                    z-index: 999;
                    left: 0;
                    top: 0;
                    display: inline-block;
                    width: 30px;
                    height: 100%;
                    background: linear-gradient(to right, #222, transparent);
                }
                &::before {
                    content: '';
                    position: absolute;
                    z-index: 999;
                    right: 0;
                    top: 0;
                    display: inline-block;
                    width: 30px;
                    height: 100%;
                    background: linear-gradient(to left, #222, transparent);
                }
            }
        }
        // 图片主体
        &-box {
            height: calc(100% - 140px);
            position: relative;
            > div {
                position: absolute;
            }
            &-button {
                width: 60px;
                height: 20%;
                top: 40%;
                color: #cacaca;
                cursor: pointer;
                transition: width 0.25s cubic-bezier(0.3, 0.55, 0.1, 1);
                display: flex;
                align-content: center;
                > i {
                    display: inline-block;
                    font-size: 42px;
                    font-weight: 500;
                    width: 100%;
                }
                &:hover {
                    color: #fff;
                }
            }
            .left {
                &:hover {
                    width: 90px;
                }
            }
            .right {
                right: 0;
                &:hover {
                    width: 90px;
                }
            }
            .center {
                width: calc(100% - 200px);
                height: 90%;
                left: 100px;
                padding-top: 30px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                position: relative;
                > img {
                    max-width: 100%;
                    max-height: 100%;
                    overflow: hidden;
                }
                &-tool {
                    position: absolute;
                    bottom: -50px;
                    width: 40%;
                    height: 30px;
                    line-height: 30px;
                    display: flex;
                    justify-content: center;
                    > div {
                        color: #cacaca;
                        padding: 0 15px;
                        cursor: pointer;
                        font-size: 14px;
                        &:first-child {
                            &:hover {
                                color: #fff;
                            }
                        }
                        &:last-child {
                            &:hover {
                                color: #fff;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
