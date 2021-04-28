<template>
    <div class="openXML">
        <input
            type="file"
            ref="upload"
            accept=".xml"
            @change="executorListchange"
            id="file_executor"
            class="outputlist_upload"
        />
        <button @click="loadData">加载数据</button>
        <!-- 月份 -->
        <select name="" id="" v-model="month">
            <option v-for="(item, index) in filterM" :key="index" :value="item">{{ item }}</option>
        </select>
        <!-- 成员 -->
        <select name="" id="" v-model="user">
            <option v-for="(item, index) in filterUsers" :key="index" :value="item">{{
                item
            }}</option>
        </select>
        <button @click="searchData">查询</button>
        <table v-if="isShowTable" class="mainTable">
            <tr>
                <td>年份</td>
                <td>日期</td>
                <td>月份</td>
                <td>成员</td>
                <td>大类</td>
                <td>二类</td>
                <td>金额</td>
                <td>明细</td>
            </tr>
            <tr v-for="(item, index) in filterData" :key="index">
                <td>{{ item.年份 }}</td>
                <td>{{ showNowDate(item.日期) }}</td>
                <td>{{ item.月份 }}</td>
                <td>{{ item.成员 }}</td>
                <td>{{ item.大类 }}</td>
                <td>{{ item.二类 }}</td>
                <td>{{ item.金额 }}</td>
                <td>{{ item.明细 }}</td>
            </tr>
        </table>
    </div>
</template>
<script>
Date.prototype.format = function(fmt) {
    var o = {
        'M+': this.getMonth() + 1, //月份
        'd+': this.getDate(), //日
        'h+': this.getHours(), //小时
        'm+': this.getMinutes(), //分
        's+': this.getSeconds(), //秒
        'q+': Math.floor((this.getMonth() + 3) / 3), //季度
        S: this.getMilliseconds(), //毫秒
    }

    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
    }

    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(
                RegExp.$1,
                RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length),
            )
        }
    }

    return fmt
}

Date.prototype.addDays = function(num) {
    var value = this.valueOf()
    value += 86400000 * num
    return new Date(value)
}

Array.prototype.select = function(name) {
    if (this instanceof Array) {
        let arrs = []
        for (var i = 0; i < this.length; i++) {
            if (this[i][name] != undefined) {
                arrs.push(this[i][name])
            }
        }
        return arrs
    }
    return ''
}

import XLSX from 'xlsx'

export default {
    name: 'Home',
    data() {
        return {
            excelData: [],
            filterData: [],
            //过滤用的年分列表
            filterY: [],
            //过滤用的月份列表
            filterM: [],
            //过滤用的成员列表
            filterUsers: [],
            //过滤用的大类列表
            filterCategory: [],
            //过滤用的二类列表
            filterCategory2: [],
            month: '',
            user: '',
        }
    },
    methods: {
        executorListchange(e) {
            this.readXML(e)
        },
        readXML(e) {
            let that = this
            var files = e.target.files
            var reader = new FileReader() //新建一个FileReader
            // console.log(files)
            var files = e.target.files,
                f = files[0]
            var reader = new FileReader()
            reader.onload = function(e) {
                var data = new Uint8Array(e.target.result)
                let workbook = XLSX.read(data, { type: 'array' })
                console.log(workbook)

                var worksheet = workbook.Sheets['总表']
                // var desired_cell = worksheet['A1']
                /* Get the value */
                // var desired_value = desired_cell ? desired_cell.v : undefined
                // console.log(worksheet)
                // console.log(desired_cell)
                // console.log(desired_value)
                let jsonSheet = XLSX.utils.sheet_to_json(worksheet)
                console.log(jsonSheet)
                that.excelData = jsonSheet
                that.filterData = jsonSheet
            }
            reader.readAsArrayBuffer(f)
        },
        loadData() {
            console.log('点击加载数据')
            this.filterData = this.excelData
            this.filterM = this.getGroupList(this.excelData.select('月份'))
            this.filterUsers = this.getGroupList(this.excelData.select('成员'))
            console.log(this.filterM)
            // this.filterM=this.excelData.
            // console.log(d.format('yyyy年MM月dd日'))
        },
        showNowDate(dayCount) {
            let d = new Date(1899, 11, 31)
            d = d.addDays(dayCount)
            return d.format('yyyy年MM月dd日')
        },
        searchData() {
            console.log(this.month)
            console.log(this.user)
            this.filterData = this.excelData.filter(n => {
                return n.月份 == this.month && n.成员 == this.user
            })
            console.log(this.filterData)
            console.log('点击查询按钮')
        },
        getGroupList(baseData) {
            let groupList = []
            baseData.forEach(n => {
                if (groupList.some(g => g == n)) {
                } else {
                    groupList.push(n)
                }
            })
            return groupList
        },
    },
    computed: {
        isShowTable() {
            return this.excelData.length > 0
        },
    },
}
</script>
<style scoped>
table {
    table-layout: fixed;
    word-break: break-all;
}
</style>
