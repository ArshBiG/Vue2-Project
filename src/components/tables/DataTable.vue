<script>
import BodyTable from './BodyTable.vue';
import FooterTable from './FooterTable.vue';
import HeaderTable from './HeaderTable.vue';

export default {
    props:{
        columns:{
            type: Array,
        },
        rows:{
            type:Array,
        },
        totalQuantity: {
            type: Number,
            required: true
        },

        totalPrice: {
            type: Number,
            required: true
        },
        selectedRows:{
            type:Array
        },
        selectedCount:{
            type:Number
        }
    },

    components:{
        HeaderTable,
        BodyTable,
        FooterTable,
    },

    methods:{
          handleScroll(event) {
            const element = event.target

            const isAtBottom =
            element.scrollTop + element.clientHeight >= element.scrollHeight

            if (isAtBottom) {
            this.handleLoadMore()
            }
        },

        handleAction(data){
            this.$emit('action', data )
        },
        handleLoadMore(){
            this.$emit('load-more')
        },
        handleSelectRow(row){
            this.$emit('select-row', row )
        }
    }
}
</script>

<template>
    <div class="main" >
        <div 
        class="main__table-wrapper"
        @scroll="handleScroll"
        >
            <table class="main__table" >
                <header-table
                :columns="columns"
                />
                <body-table
                :columns="columns"
                :rows="rows"
                :selected-rows="selectedRows"
                @action="handleAction"
                @load-more="handleLoadMore"
                @select-row="handleSelectRow"
                />
                <footer-table
                :total-price="totalPrice"
                :total-quantity="totalQuantity"
                :selected-count="selectedCount"
                />
            </table>
        </div>
    </div>
</template>

<style lang="scss" scoped >
.main{
  direction: rtl;
  width: 100%;
  overflow-x: auto;
  border: 1px solid;
  border-radius: 16px;
  background: white;

  &__table-wrapper{
    max-height: 500px;
    overflow-y: auto;
  }

  &__table{
    width: 100%;
    border-collapse: collapse;
  }

}
</style>