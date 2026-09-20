<script>
import ShowServer from './showServer.vue';

export default{
    data(){
        return{
            count:null,
            lable:"مبلغ پرداختی",
            icon:"تومان",
            min: 100
        }
    },

    components:{
        ShowServer
    },

    methods:{
        handleNumber(data){
            this.count = data
            console.log(this.count)
        }
    },
}

</script>


<template>
    <div>
        <ShowServer
        :count="count"
        :lable="lable"
        :icon="icon"
        :min="min"
        @number="handleNumber"
        />
    </div>
</template>