export default{
    props:{
        label:{
            type:String,
        },
    },
    data(){
        return{
            inputValue: this.value,
            touched: false,
            isValid: false
        }
    },
    watch:{
        value(newValue){
            this.inputValue = newValue
        }
    }
}