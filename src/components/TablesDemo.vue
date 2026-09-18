<script>
import DataTable from './tables/DataTable.vue';

export default {
    data(){
        return{
            selectedRows: [],
            
            columns: [
                {
                    title: "",
                    key: "selected",
                    type:"select",
                },
                {
                    title: "شناسه سفارش",
                    key: "orderId",
                    type: "text"
                },
                {
                    title: "عنوان محصول",
                    key: "product",
                    type: "text"
                },
                {
                    title: "دسته‌بندی",
                    key: "category",
                    type: "text"
                },
                {
                    title: "تعداد",
                    key: "quantity",
                    type: "text",
                },
                {
                    title: "مبلغ واحد",
                    key: "price",
                    type: "text"
                },
                {
                    title: "وضعیت سفارش",
                    key: "status",
                    type: "badge",
                    badge: {
                        "تکمیل شده": "green",
                        "در حال پردازش": "purple",
                        "در انتظار پرداخت": "blue",
                        "فعال و تایید شده": "green",
                        "مرجوع شده": "red",
                    }
                },
                {
                    title: "تاریخ ثبت",
                    key: "createdAt",
                    type: "text"
                },
                {
                    title: "عملیات",
                    key: "actions",
                    type: "actions",
                    actions: [
                        {
                            name: "edit",
                            icon: "fa-pen",
                            color: "green",
                        },
                        {
                            name: "delete",
                            icon: "fa-trash",
                            color: "red",
                        }
                    ]
                },
            ],

            rows:[
                {
                    orderId:"ORD-89421",
                    product:"لپتاپ گیمینگ یسوس ROG Strix G16",
                    category:"سخت افزار و قطعات",
                    quantity:"1",
                    quantityUnit:"عدد",
                    price:"48500000",
                    status:"تکمیل شده",
                    createdAt:"1403/12/07"
                },
                {
                    orderId:"ORD-89420",
                    product:"انیتور 27 اینچ 4K ل جی UltraFine",
                    category:"نمایشگر و تصویر",
                    quantity:"2",
                    quantityUnit:"عدد",
                    price:"32500000",
                    status:"در حال پردازش",
                    createdAt:"1403/12/08"
                },
                {
                    orderId:"ORD-89419",
                    product:"کیبودر مکانیکی ",
                    category:"وازم جانبی",
                    quantity:"4",
                    quantityUnit:"عدد",
                    price:"12500000",
                    status:"در انتظار پرداخت",
                    createdAt:"1403/12/10"
                },
                {
                    orderId:"ORD-89418",
                    product:"ایسنس سازمانی",
                    category:"ذمات دیجیتال",
                    quantity:"10",
                    quantityUnit:"کاربر",
                    price:"11500000",
                    status:"فعال و تایید شده",
                    createdAt:"1403/12/12"
                },
                {
                    orderId:"ORD-89417",
                    product:"اوس ارگونومیک",
                    category:"لوازم جانبی",
                    quantity:"1",
                    quantityUnit:"عدد",
                    price:"8500000",
                    status:"مرجوع شده",
                    createdAt:"1403/12/1"
                },
                {
                    orderId:"ORD-68321",
                    product:"خرید مغازه",
                    category:"لوازم جانبی",
                    quantity:"1",
                    quantityUnit:"عدد",
                    price:"8500000",
                    status:"مرجوع شده",
                    createdAt:"1403/12/1"
                },
                {
                    orderId:"ORD-29991",
                    product:"خرید خونه",
                    category:"لوازم جانبی",
                    quantity:"1",
                    quantityUnit:"عدد",
                    price:"8500000",
                    status:"مرجوع شده",
                    createdAt:"1403/12/1"
                },
                                {
                    orderId:"ORD-89421",
                    product:"لپتاپ گیمینگ یسوس ROG Strix G16",
                    category:"سخت افزار و قطعات",
                    quantity:"1",
                    quantityUnit:"عدد",
                    price:"48500000",
                    status:"تکمیل شده",
                    createdAt:"1403/12/07"
                },
            ],

        }
    },
    components:{
        DataTable,
    },

    methods:{
        handleAction(data){
            console.log(data)

        },
        loadMore() {
              if (this.rows.length > 200) {
                return
            }

            for(let i = 1 ; i < 50 ; i++) {
                setTimeout(() => {
                    this.rows.push({
                        orderId: "ORD-" + (this.rows.length + 1),
                        product: "ماوس گیمینگ" + (this.rows.length + 1),
                        category: "لوازم جانبی",
                        quantity: this.rows.length % 10,
                        price: 5000000 + (this.rows.length * 2),
                        status: "تکمیل شده",
                        createdAt: "1403/12/15"
                    })
                }, 150);
            }

            // const uniqueRows = this.newRows.filter(newRow => {
            //     return !this.rows.some(row => row.orderId === newRow.orderId)
            // })

            //   if (uniqueRows.length === 0) {
            //     return
            // }

            // this.rows.push(...uniqueRows)
        },
        handleSelectRow(row) {
            const index = this.selectedRows.indexOf(row.orderId)

            if (index === -1) {
                this.selectedRows.push(row.orderId)
            } else {
                this.selectedRows.splice(index, 1)
            }            
            console.log(this.selectedRows)
        }
    },


    computed:{
        totalQuantity(){
            return this.rows.length
        },
        totalPrice(){
            return this.rows.reduce((total, row) => {
                return total + Number(row.price)
            }, 0)
        },
          selectedCount() {
            return this.selectedRows.length
        },
    }
}
</script>

<template>
    <div>
        <DataTable
        :columns="columns"
        :rows="rows"
        :total-price="totalPrice"
        :total-quantity="totalQuantity"
        :selected-rows="selectedRows"
        :selected-count="selectedCount"
        @action="handleAction"
        @load-more="loadMore"
        @select-row="handleSelectRow"
        />
    </div>
</template>