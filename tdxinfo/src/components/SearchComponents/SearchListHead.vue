<template>
    <div class="common-header">
        <div class="icon-back">
            <a @click="goBack()"></a>
        </div>
        <div class="common-title">{{title}}</div>
        <div class="icon-search">
            <a></a>
        </div>
    </div>

</template>
<script>
export default {

data() {
return {
}
},
props:["title"],
computed: {
},
watch: {
},
methods: {
    goBack(){
        this.$router.go(-1)
    }
},
mixins: [],
filters: {
},
directives: {
},
created() {
},
mounted() {
},
updated() {
},
activated() {
},
destroyed() {
},
}
</script>
<style scoped >
</style>
