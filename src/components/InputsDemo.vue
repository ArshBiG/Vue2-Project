<script>
import CustomSelect from './inputs/CustomSelect.vue';
import CustomTextInput from './inputs/CustomTextInput.vue';

export default{
    data(){
        return{
            customInput:{
                label:"نام و نام خانوادگی",
                value:"",
                minCharacter:3,
                successText:"طلاعات وارد شده معتبر است",
                errorText:"نام کاربری نامعتبر حداقل :",
                defaultIcon:"fa-regular fa-user",
                errorIcon:"fa-regular fa-circle-xmark",
                successIcon:"fa-solid fa-check",
            },

            customSelect:{
                inSelect:"",
                label:"استان محل سکونت",

                iconBoxError:"",
                iconBoxSuccess:"",
                errorIcon:"",
                successIcon:"",
                errorText:"طفا استان محل سکونت خود را انتخاب کنید!",
                successText:"مرکز توزیع استان فعال و قابل دسترس هست",
                errorColor:"#ba1a1a",
                successColor:"#006c49",

                options:[
                    {
                        name:"تهران",
                        icon:"",
                        color:"black",
                        key:"tehran"
                    },
                    {
                        name:"نیشابور",
                        icon:"",
                        color:"black",
                        key:"neyshabour"
                    },
                    {
                        name:"اصفهان",
                        icon:"",
                        color:"black",
                        key:"esfahan"
                    }
                ]

            }

        }
    },

    components:{
        CustomTextInput,
        CustomSelect,
    },

    methods:{
        handleChange(newValue){
            this.customInput.value = newValue
            console.log('new value:',this.customInput.value)
        },

        handleselect(option){
            this.customSelect.inSelect = option
            console.log("select in :",this.customSelect.inSelect)
        }
    }
}

</script>

<template>
    <div>
        <CustomTextInput
        :customInput="customInput"
        @change-value="handleChange"
        />

        <CustomSelect
        :select="customSelect"
        :options="customSelect.options"
        @selected="handleselect"
        />
    </div>
</template>