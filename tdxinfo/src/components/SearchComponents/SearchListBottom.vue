<template>
    <div>
        <!-- <div class="search-opts">
            <ul class="bottom-box clearfix" id="bind_search">
                <li data-class="origin-place" class="originPlace">
                    <i class="place"></i><span class="redPoint"></span>
                    <p class="description">出发地</p>
                </li>
                <li data-class="u-sort" class="uSort">
                    <i class="sort"></i><span class="redPoint"></span>
                    <p class="description">排序</p>
                </li>
                <li data-class="u-filter" class="uFilter">
                    <i class="filter"></i><span class="redPoint"></span>
                    <p class="description">筛选</p>
                </li>
            </ul>
        </div>
        <div class="search-content">
            <div class="w-mask"></div>
            <div class="origin-place content-wrapper">
                <h5 class="title">出发地</h5>
                <ul class="clearfix listTab-wrapper" id="originPlaceList">
                    <li class="active">不限</li>
                    <li></li>
                </ul>
            </div>
            <div class="u-sort content-wrapper">
                <ul class="listTab-wrapper" id="sortList">
                    <li data-sort="s1" class="active">默认排序</li>
                    <li data-sort="s2">最新</li>
                    <li data-sort="s3">最热</li>
                    <li data-sort="s4">价格 低 &rarr; 高</li>
                    <li data-sort="s5">价格 高 &rarr; 低</li>
                </ul>
            </div>
            <div class="u-filter content-wrapper">
                <form action="">
                    <div class="top">
                        <span class="fl" id="btnCancel">取消</span>
                        <span id="clearSel">清空筛选</span>
                        <span class="fr" id="selSubmit">确定</span>
                    </div>
                    <div class="tabs-container">
                        <ul class="tabs-menu filter-item-list">
                            <li class="tabs-nav filter-item1" name="#filter-item1">出行日期<span class="redPoint2"></span></li>
                            <li class="tabs-nav filter-item2" name="#filter-item2">出行天数<span class="redPoint2"></span></li>
                            <li class="tabs-nav filter-item3" name="#filter-item3">钻级<span class="redPoint2"></span></li>
                            <li class="tabs-nav filter-item4" name="#filter-item4">价格范围<span class="redPoint2"></span></li>
                        </ul>
                        <div class="panel-wrapper">
                            <div class="tabs-panel" id="filter-item1">
                                <ul class="radio-wrapper listTab-wrapper">
                                    <li class="active travelDate">不限</li>
                                    <li class="travelDate"></li>
                                </ul>
                            </div>
                            <div class="tabs-panel" id="filter-item2">
                                <ul class="radio-wrapper listTab-wrapper">
                                    <li class="active travelDay">不限</li>
                                    <li class="travelDay"></li>
                                </ul>
                            </div>
                            <div class="tabs-panel" id="filter-item3">
                                <ul class="radio-wrapper listTab-wrapper" id="transZJ">
                                    <li class="active zuanjiSel">不限</li>
                                    <li class="zuanjiSel"></li>
                                </ul>
                            </div>
                            <div class="tabs-panel" id="filter-item4">
                                <p class="grysfw">个人预算范围</p>
                                <div>
                                    <input type="number" class="priceMin" placeholder="最低价"><span class="ljf">&mdash;</span>
                                    <input type="number" class="priceMax" placeholder="最高价">
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div> -->
    </div>
  

</template>

<<script>
export default {
  
}
</script>

<style scoped>
    .search-opts{
        z-index: 9;
    }
</style>
