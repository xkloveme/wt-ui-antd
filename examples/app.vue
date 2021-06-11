<template>
    <div class="g-demo layout">
        <nav>
            <ul>
                <li><router-link to="/table">Table</router-link></li>
                <li>
                    <div>
                        <wt-preview ref="previewRef" v-model="visible" @close="visible=false" :autoplay="true"  :tool="true"></wt-preview>
                    </div>
                    <div @click="handleOpen">{{visible}}</div>
                </li>
            </ul>
        </nav>
        <transition name="fade-in" mode="out-in">
            <router-view />
        </transition>
    </div>
</template>

<script>
export default {
    data(){
        return{
            visible:false,
            value:[
                {   
                    label: 'bing每日一图',
                    url:'https://api.xygeng.cn/Bing/'
                },
                {
                    label: '20210605',
                    url:'https://www.bing.com/th?id=OHR.ArromanchesLesBains_ZH-CN0631947158_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp'
                },
                {
                    label: '20210604',
                    url:'https://www.bing.com/th?id=OHR.ToucanRainforest_ZH-CN0522556036_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp'
                },
                {
                    label: '20210603',
                    url:'https://www.bing.com/th?id=OHR.Pilat_ZH-CN0091553547_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp'
                },
                {
                    label: '20210602',
                    url:'https://www.bing.com/th?id=OHR.SocaCycles_ZH-CN3583247274_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp'
                },
                {
                    label: '20210601',
                    url:'https://www.bing.com/th?id=OHR.EstoshaSpringbok_ZH-CN3452100881_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp'
                }
                // {
                //     url:'https://b.zol-img.com.cn/soft/6/616/ceHlJ6dRjw6H.jpg'
                // },
                // {
                //     url:'https://img0-arch.pconline.com.cn/pconline/1610/14/8459562_1476413606280_931_thumb.png'
                // },
                // {
                //     url:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F70c3a8d416c11dec851920de4d1dbda59142afbf.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1625303451&t=e164b7c8c13bf5be57e174136e658558'
                // },
                // {
                //     label: '航天1', 
                //     url:'https://th.bing.com/th/id/Rf816f20c676406cb2455ea0a572df769?rik=g2Vzsy4K79GnHg&riu=http%3a%2f%2fupload.cankaoxiaoxi.com%2f2021%2f0519%2f1621431502154.jpg&ehk=7eFlakhr6seoIKO17zT5v0rntScwdlwgMjcNVz5X628%3d&risl=&pid=ImgRaw'
                // },
                // {
                //     label: '航天2', 
                //     url:'https://n.sinaimg.cn/sinakd2021517s/200/w640h360/20210517/07f1-kpzzqna8546162.jpg'
                // },
                // {
                //     label: '航天3', 
                //     url:'https://th.bing.com/th/id/Rb2f0e6ba6c3c4b6faa9c4af8288b1826?rik=mGZ9aeW2dddlzw&riu=http%3a%2f%2fpic.kuaizhan.com%2fg1%2fM00%2fFD%2f6C%2fCgpQU1j43d-ABARZAAFI5auYPow9793406&ehk=tthyxud%2feUv9W0OB7x2nF3nit6VMYytBYuqbt5mN8Pc%3d&risl=&pid=ImgRaw'
                // },
                // {
                //     url:'https://tse1-mm.cn.bing.net/th/id/OIP.gyr28yghcgtkVEQ3-4dhmwHaEL?pid=ImgDet&rs=1'
                // },
                // {
                //     url:'https://tse1-mm.cn.bing.net/th/id/OIP.T0GPCDyUdkY284Y5JAZu7wHaE4?pid=ImgDet&rs=1'
                // },
                // {
                //     url:'https://rs1.huanqiucdn.cn/dp/api/files/imageDir/0cd80357fa1f11b2f62e1eff24528728u5.jpg'
                // },
                // {
                //     url: 'https://www.flyxg.com/uploadfile/2021/0520/20210520090515117.png'
                // },
                // {
                //     url:'https://th.bing.com/th/id/R438e1598c2a63b0c19a12fbd2bfd1036?rik=AZYBfmJKnHjHfQ&riu=http%3a%2f%2fimg0.xinmin.cn%2f2021%2f05%2f19%2f20210519213434259208.jpg&ehk=oPI7kg9iVTRx3EEXQhTRcsx8CcB76GoNw4PFRmYZv1k%3d&risl=&pid=ImgRaw'
                // },
                // {
                //     url:'https://ie.bjd.com.cn/images/202105/19/60a51463e4b022396e8788c2.png'
                // },
                // {
                //     url:'https://x0.ifengimg.com/ucms/2021_21/CB0048BA6CA674BD318C4B9B50409F95F29637E6_size65_w650_h366.jpg'
                // },
                // {
                //     url:'https://pic.cyol.com/img/20210519/img_966a92ee83d803fcd691dfc6729b1d9003_c.jpg'
                // },
                // {
                //     url:'https://tse1-mm.cn.bing.net/th/id/OIP.g5vu6GRznDAYB0e6kHiC0QHaHa?pid=ImgDet&rs=1'
                // },
                // {
                //     url:'https://x0.ifengimg.com/ucms/2021_21/C7FB92205F29EF9AA881058508B80F5751A8A338_size41_w550_h550.jpg'
                // },
                // {
                //     url:'https://inews.gtimg.com/newsapp_bt/0/13534746148/1000'
                // },
                // {
                //     url:'https://th.bing.com/th/id/R54534e388387a0dcf6101fa07fd26b1d?rik=iHDBliYNRhM9mg&riu=http%3a%2f%2fupload.taihainet.com%2f2021%2f0519%2f1621407266819.jpg&ehk=WyXqR7HXkMifIvbK4xp6%2fNaFhSy2QVsQbWmpWwHAIak%3d&risl=&pid=ImgRaw'
                // },
                // {
                //     url:'https://n.sinaimg.cn/sinakd2021519s/557/w869h488/20210519/67de-kqhwhrk2917959.jpg'
                // }
            ]
        }
    },
    methods:{
        handleOpen(){
            this.visible = true
            this.$refs.previewRef.handleOpen(this.value)
        }
    }
}
</script>

<style lang="less" scoped>
.g-demo {
    margin: 20px 50px;

    & > * {
        margin: 10px 0;
    }

    .u-table {
        .u-icon {
            margin-right: 8px;
        }
    }

    .cloud-music {
        width: 50px;
    }

    nav {
        margin-bottom: 40px;
        ul {
            display: flex;
            flex-wrap: wrap;
        }
        li {
            display: inline-block;
        }
        li + li {
            border-left: solid 1px #bbb;
            padding-left: 10px;
            margin-left: 10px;
        }
    }
    .v-link-active {
        color: #bbb;
    }
}
</style>
