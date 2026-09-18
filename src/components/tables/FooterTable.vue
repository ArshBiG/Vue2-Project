<script>
export default {
    props:{
        totalPrice:{
            type: Number,
            required: true
        },
        totalQuantity:{
            type: Number,
            required: true
        },
        selectedCount:{
            type:Number
        }
    }
}
</script>

<template>
<tfoot class="table-footer">
  <tr>
    <td colspan="100%">
      مجموع تعداد: {{ totalQuantity }} |
      مجموع مبلغ: {{ totalPrice }} |
      انتخاب شده: {{ selectedCount }}
    </td>
  </tr>
</tfoot>
</template>

<style lang="scss" scoped >
.table-footer {
  position: sticky;
  bottom: 0;
  z-index: 10;
  background-color: aliceblue;

  td {
    padding: 10px;
    text-align: center;
  }
}

</style>