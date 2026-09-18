<script>
export default {
    props:{
        columns:{
            type:Array,
            required: true
        },
        rows:{
            type:Array,
            required: true
        },
        selectedRows:{
            type:Array
        }
    },

    methods:{
        handleAction(action, row){
            this.$emit('action', {action,row})
        },
        handleSelect(row){
            this.$emit('select-row', row )
        },
        isSelected(row) {
            return this.selectedRows.includes(row.orderId)
        }
    }
}

</script>

<template>
    <tbody class="table-body">
        <tr
        v-for="row in rows"
        :key="row.orderId"
        >
        <td
        v-for="column in columns"
        :key="column.key"
        >
        
        <input
        v-if="column.type === 'select'"
        type="checkbox"
        :checked="isSelected(row)"
        @change="handleSelect(row)"
        :selected-rows="selectedRows"
        >

          <span v-else-if="column.type === 'text' "
          :class="{
                'table-body__category-cell': column.key === 'category',
                'table-body__product-cell': column.key === 'product',
                'table-body__orderId-cell': column.key === 'orderId', 
                }">
                {{ row[column.key] }}
                <span v-if="column.key === 'quantity'">
                    {{ row.quantityUnit }}
                </span>
            </span>
          
            <span
            v-else-if="column.type === 'badge'"
            class="table-body__badge"
            :class="column.badge[row[column.key]]"
            >
                • {{ row[column.key] }}
            </span>
            
            <div
            v-else-if="column.type === 'actions'
            ">
            <button
            v-for="action in column.actions"
            :key="action.name"
            @click="handleAction(action, row)"
            :style="{background: action.color}"
            class="table-body__icon-actions"
            >
            <i :class="['fas', action.icon]">  </i>
        </button>
    </div>
</td>
        </tr>
      </tbody>
</template>


<style lang="scss" scoped >
.green{
    color: green;
    background-color: rgb(162, 249, 162);
    border-radius: 20px;
        white-space: nowrap;

}
.red{
    color: red;
    background-color: rgb(255, 217, 217);
        border-radius: 20px;
            white-space: nowrap;

}
.purple{
    color: purple;
    background-color: rgb(244, 167, 244) ;
    border-radius: 20px;
    white-space: nowrap;

}
.blue{
    color: blue;
    background-color: rgb(203, 203, 247) ;
        border-radius: 20px;
            white-space: nowrap;

}

.table-body {

  &__badge{
    padding: 8px;

  }

  &__category-cell{
    background-color: rgb(212, 212, 255);
    white-space: nowrap;
    border-radius: 20px;
    padding: 8px;
  }

  &__product-cell{
  white-space: nowrap;
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  }

  &__orderId-cell{
    color: rgb(154, 154, 255);
    color: rgb(0, 84, 253);
  }

  &__icon-actions{
    padding:7px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    color: white;

    & + & {
      margin-right: 8px;
    }
  }

  td {
    padding: 12px;
    // margin-bottom: 10px;
    border-bottom: 1px  #ddd;
    text-align: center;
  }
}
</style>