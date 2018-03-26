<template>
<div>
    <search-list-head :title="title"></search-list-head>
    <search-list-products :title="title"></search-list-products>
</div>
</template>
<script>
import SearchListHead from '../../components/SearchComponents/SearchListHead'
import SearchListProducts from '../../components/SearchComponents/SearchListProducts'
export default {
    components:{
        SearchListHead,
        SearchListProducts
    },
    data() {
        return {
            // title:[]
        }
    },
    computed:{
        title(){
            return this.$route.query.keyWord
        }
    },
    mounted(){
    }
}
</script>
<style scoped >

</style>
