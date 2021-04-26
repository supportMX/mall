<template>
    <div class="wrapper" ref="wrapper">
        <ul class="content">
            <span @click="btnClick">按钮</span>
            <li>类别列表1</li>
            <li>类别列表2</li>
            <li>类别列表3</li>
            <li>类别列表4</li>
            <li>类别列表5</li>
            <li>类别列表6</li>
            <li>类别列表7</li>
            <li>类别列表8</li>
            <li>类别列表9</li>
            <li>类别列表10</li>
            <li>类别列表11</li>
            <li>类别列表12</li>
            <li>类别列表13</li>
            <li>类别列表14</li>
            <li>类别列表15</li>
            <li>类别列表16</li>
            <li>类别列表17</li>
            <li>类别列表18</li>
            <li>类别列表19</li>
            <li>类别列表20</li>
            <li>类别列表21</li>
            <li>类别列表22</li>
            <li>类别列表23</li>
            <li>类别列表24</li>
            <li>类别列表25</li>
            <li>类别列表26</li>
            <li>类别列表27</li>
            <li>类别列表28</li>
            <li>类别列表29</li>
            <li>类别列表30</li>
            <li>类别列表31</li>
            <li>类别列表32</li>
            <li>类别列表33</li>
            <li>类别列表34</li>
            <li>类别列表35</li>
            <li>类别列表36</li>
            <li>类别列表37</li>
            <li>类别列表38</li>
            <li>类别列表39</li>
            <li>类别列表40</li>
            <li>类别列表41</li>
            <li>类别列表42</li>
            <li>类别列表43</li>
            <li>类别列表44</li>
            <li>类别列表45</li>
            <li>类别列表46</li>
            <li>类别列表47</li>
            <li>类别列表48</li>
            <li>类别列表49</li>
            <li>类别列表50</li>
            <li>类别列表51</li>
            <li>类别列表52</li>
            <li>类别列表53</li>
            <li>类别列表54</li>
            <li>类别列表55</li>
            <li>类别列表56</li>
            <li>类别列表57</li>
            <li>类别列表58</li>
            <li>类别列表59</li>
            <li>类别列表60</li>
            <li>类别列表61</li>
            <li>类别列表62</li>
            <li>类别列表63</li>
            <li>类别列表64</li>
            <li>类别列表65</li>
            <li>类别列表66</li>
            <li>类别列表67</li>
            <li>类别列表68</li>
            <li>类别列表69</li>
            <li>类别列表70</li>
            <li>类别列表71</li>
            <li>类别列表72</li>
            <li>类别列表73</li>
            <li>类别列表74</li>
            <li>类别列表75</li>
            <li>类别列表76</li>
            <li>类别列表77</li>
            <li>类别列表78</li>
            <li>类别列表79</li>
            <li>类别列表80</li>
            <li>类别列表81</li>
            <li>类别列表82</li>
            <li>类别列表83</li>
            <li>类别列表84</li>
            <li>类别列表85</li>
            <li>类别列表86</li>
            <li>类别列表87</li>
            <li>类别列表88</li>
            <li>类别列表89</li>
            <li>类别列表90</li>
            <li>类别列表91</li>
            <li>类别列表92</li>
            <li>类别列表93</li>
            <li>类别列表94</li>
            <li>类别列表95</li>
            <li>类别列表96</li>
            <li>类别列表97</li>
            <li>类别列表98</li>
            <li>类别列表99</li>
            <li>类别列表100</li>
        </ul>
    </div>
</template>
<script>
import BScroll from 'better-scroll'

export default {
    name: 'Category',
    created() {
        this.$nextTick(() => {
            // console.log(this.$refs.wrapper)
            this.scroll = new BScroll(this.$refs.wrapper, {
                // 1. probeType 为 0，在任何时候都不派发 scroll 事件，
                // 2. probeType 为 1，仅仅当手指按在滚动区域上，每隔 momentumLimitTime 毫秒派发一次 scroll 事件，
                // 3. probeType 为 2，仅仅当手指按在滚动区域上，一直派发 scroll 事件，自然滑动都会检测point位置
                // 4. probeType 为 3，任何时候都派发 scroll 事件，包括调用 scrollTo 或者触发 momentum 滚动动画
                probeType: 3,
                click: true,
                pullUpLoad: true,
            })

            this.scroll.on('scroll', point => {
                // console.log(point)
            })
            this.scroll.on('pullingUp', point => {
                console.log('加载更多')
                setTimeout(() => {
                    // 延迟调用完成加载方法。不然只能加载一次
                    this.scroll.finishPullUp()
                }, 2000)
            })
        })
    },
    data() {
        return {
            scroll: {},
        }
    },
    methods: {
        btnClick() {
            console.log('惦记按钮')
        },
    },
}
</script>
<style scoped>
.wrapper {
    height: 100px;
    background-color: lawngreen;

    /* overflow: scroll; */
}
</style>
