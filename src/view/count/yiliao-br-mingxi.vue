<template>
	<div class="ylbr-mx">
		<el-table :data="tableData" style="width: 100%">

          <el-table-column prop="date" label="日期" width="180">
          </el-table-column>

          <el-table-column prop="name" label="客户姓名" width="">
          </el-table-column>

          <el-table-column prop="source" label="来源类型">
          </el-table-column>

          <el-table-column prop="referee" label="推荐人">
          </el-table-column>

        </el-table>
	</div>
</template>

<script>
export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            source: '医生',
            referee:'王医生'
          }, {
            date: '2016-05-02',
            name: '王小虎',
            source: '医生',
            referee:'王医生'
          }, {
            date: '2016-05-02',
            name: '王小虎',
            source: '医生',
            referee:'王医生'
          }, {
            date: '2016-05-02',
            name: '王小虎',
            source: '医生',
            referee:'王医生'
          }]
        }
      }
    }
</script>
</script>

<style>
</style>