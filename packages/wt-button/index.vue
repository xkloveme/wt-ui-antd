<template>
    <a-tooltip v-if="tips || typeof tips == 'number'">
        <template slot="title">{{ tips }}</template>
        <a-button :type="type" v-debounce="handleClick" v-bind="$attrs">
            <slot></slot>
        </a-button>
    </a-tooltip>
    <a-button v-else :type="type" v-debounce="handleClick" v-bind="$attrs">
        <slot></slot>
    </a-button>
</template>

<script>
export default {
    name: 'wt-button',
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        tips: {
            default: null
        }
    },
    methods: {
        handleClick(e) {
            this.$emit('click', e)
        }
    }
}
</script>
