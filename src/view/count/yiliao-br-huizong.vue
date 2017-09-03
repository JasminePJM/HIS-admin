<template>
	<div class="ylbr-hz">
		<el-table :data="tableData" border show-summary style="width: 100%" sum-text="总计（人数）">

		    <el-table-column prop="date" label="日期" width="180" >
		    </el-table-column>

		    <el-table-column prop="amount1"  label="诊所人员">
		    </el-table-column>

		    <el-table-column  prop="amount2"    label="微信推广">
		    </el-table-column>

		    <el-table-column   prop="amount3"   label="客户推广">
		    </el-table-column>

		    <el-table-column   prop="amount4"   label="其他">
		    </el-table-column>

		    <el-table-column   prop="amount5"   label="自行就医">
		    </el-table-column>

		    <el-table-column   prop="sum2"   label="总计">
		    </el-table-column>

		    <el-table-column align="center"  label="操作" >
		        <template scope=" ">
		          <el-button @click="" type="text" size="small" icon="document">查看详情</el-button>
		        </template>
		    </el-table-column>

		  </el-table>
	</div>
</template>

<script>
export default {
    data() {
      return {
        tableData: [

        {
          date: '2017-08-08',
          amount1: '20',
          amount2: '20',
          amount3: '20',
          amount4: '20',
          amount5: '20'
        }, {
          date: '2017-08-08',
          amount1: '20',
          amount2: '20',
          amount3: '20',
          amount4: '20',
          amount5: '20'
        }, {
          date: '2017-08-08',
          amount1: '20',
          amount2: '20',
          amount3: '20',
          amount4: '20',
          amount5: '20'
        }, {
          date: '2017-08-08',
          amount1: '20',
          amount2: '20',
          amount3: '20',
          amount4: '20',
          amount5: '20'
        }, {
          date: '2017-08-08',
          amount1: '20',
          amount2: '20',
          amount3: '20',
          amount4: '20',
          amount5: '20'
        }]
      };
    },
    // methods: {
    //   getSummaries(param) {
    //     const { columns, data } = param;
    //     const sums = [];
    //     columns.forEach((column, index) => {
    //       if (index === 0) {
    //         sums[index] = '总价';
    //         return;
    //       }
    //       const values = data.map(item => Number(item[column.property]));
    //       if (!values.every(value => isNaN(value))) {
    //         sums[index] = values.reduce((prev, curr) => {
    //           const value = Number(curr);
    //           if (!isNaN(value)) {
    //             return prev + curr;
    //           } else {
    //             return prev;
    //           }
    //         }, 0);
    //         sums[index] += ' 元';
    //       } else {
    //         sums[index] = 'N/A';
    //       }
    //     });

    //     return sums;
    //   }
    // }
  };
</script>
</script>

<style>
</style>