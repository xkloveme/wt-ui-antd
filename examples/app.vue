<template>
    <div class="g-demo layout">
        <nav>
            <ul>

                <li><router-link to="/table">Table</router-link></li>
         
            </ul>
        </nav>
        <transition name="fade-in" mode="out-in">
            <router-view />
        </transition>
    </div>
</template>

<script>
export default {}
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
