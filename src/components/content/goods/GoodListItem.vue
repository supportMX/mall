<template>
    <div class="goods-item" @click="itemClick">
        <img :src="good.show.img" alt="" @load="imageload" />
        <div class="goods-info">
            <p>{{ good.title }}</p>
            <span class="price">{{ good.price }}</span>
            <span class="collect">{{ good.cfav }}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'GoodListItem',
    props: {
        good: {
            type: Object,
            default() {
                return {}
            },
        },
    },
    methods: {
        imageload() {
            this.$bus.emit('gooditemimageload')
        },
        itemClick() {
            console.log('itemclick')
            this.$router.push('/detail/' + this.good.iid)
        },
    },
}
</script>
<style scoped>
.goods-item {
    position: relative;
    padding-bottom: 40px;
    width: 47%;
}
.goods-item img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
}

.goods-info {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 12px;
}
.goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
}

.goods-info .price {
    color: var(--color-high-text);
    padding-right: 20px;
}

.goods-info .collect {
    position: relative;
}

.goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url('../../../assets/img/common/collect.svg') 0 0/14px 14px;
}
</style>
