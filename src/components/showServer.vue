<script>
export default{
    props:{
        icon:{
            type:String
        },
        lable:{
            type:String
        },
        count:{
            type:Number
        },
        min:{
            type:Number
        }
    },

    data(){
        return{
            localNumber: null,
            isValid: false 
        }
    },

    methods:{
        handleNumber(){
            if( this.localNumber >= this.min ){
                this.$emit('number', this.localNumber )
                this.isValid=true
            }
            else{
                this.isValid=false
            }
        }
    },

    watch:{
        count(newValue){
            this.localNumber = newValue
        }
    }
}
</script>

<template>
    <div>
        <div>
            <label>{{ lable }}</label>
        <div class="inputs" >
            <input
                :class="{
                    'error': !isValid,
                'success': isValid 
            }"
            type="number"
            @input="handleNumber"
            v-model.number="localNumber"
            class="inputs__input"
            >
            <span class="inputs__icon" >{{ icon }}</span>
        </div>
        </div>
        <div v-if="!isValid">
            <span>مقدار وارد شده باید یشتر از {{ min }}</span>
        </div>
        <div v-else >
            <span>درست زدی</span>
        </div>
        <span>{{ localNumber }}</span>

    </div>
</template>

<style lang="scss" scoped >
.error{
    color: red;
}
.success{
    color: green;
}
.inputs{
    width: 100%;
    max-width: 200px;
    padding: 5px;
    display: flex;
    flex-direction: row-reverse;
    border: 1px solid;

    &__input{
        width: 100%;
        border:none
    }

    &__icon{
        color: white;
        font-size: x-small;
        padding: 5px;
        border-radius: 10px;
        background-color: gray;
    }
}
</style>

