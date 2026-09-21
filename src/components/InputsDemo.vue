<script>
import CustomCheckBox from './inputs/CustomCheckBox.vue';
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
                successColor:"#006c49",
                errorColor:"#ba1a1a",
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

            },

            checkBox:{
                label:"شرایط و قوانین استفاده را میپذیرم",
                inCheck:false,
                type:"checkbox",

                inputSuccessIcon:"fa-regular fa-circle-check",
                inputErrorIcon:"fa-regular fa-circle-exclamation",

                successText:"مجوز حقوقی توسط کاربر ثبت شد",
                successTextIcon:"fa-duotone fa-thin fa-thumbs-up",
                successColor:"#006c49",

                errorText:"فعال سازی این گزینه برای تایید حساب ضروری است",
                errorTextIcon:"fa-solid fa-exclamation",
                errorColor:"#ba1a1a",
            },

            switchBox:{
                label:"حراز هویت دو مرحله ای (2FA)",
                inCheck:false,
                type:"switchbox",

                inputTextError:"احراز هویت دومرحله ای فعال است",
                inputTextSuccess:"فعال سازی برای ورود های سازمانی الزامی است",
                inputSuccessIcon:"fa-duotone fa-solid fa-circle-check",
                inputErrorIcon:"fa-solid fa-circle",

                successText:"حساب کاربری از بالاترین سطح کاربری برخوردار است",
                successIcon:"fa-light fa-lock-keyhole",
                successColor:"#006c49",

                errorText:"فعال سازی این گزینه برای تایید حساب الزامی است",
                errorIcon:"fa-regular fa-lock-keyhole-open",
                errorColor:"#ba1a1a",
            }

        }
    },

    components:{
        CustomTextInput,
        CustomSelect,
        CustomCheckBox,
    },

    methods:{
        handleChange(newValue){
            this.customInput.value = newValue
            console.log('new value:',this.customInput.value)
        },

        handleselect(option){
            this.customSelect.inSelect = option
            console.log("select in :",this.customSelect.inSelect)
        },

        handleChecked(check){
            this.checkBox.inCheck = check
            console.log("This is inCheck:", this.checkBox.inCheck )
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

        <!-- <CustomCheckBox
        :value="checkBox"
        @checked="handleChecked"
        /> -->

        <CustomCheckBox
        :value="switchBox"
        @checked="handleChecked"
        />
    </div>
</template>