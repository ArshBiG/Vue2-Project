<script>
import CustomNumberInput from './inputs/CustomNumberInput.vue';
import CustomTextareaInput from './inputs/CustomTextareaInput.vue';
import CustomTextInput from './inputs/CustomTextInput.vue';
import CustomSelect from './inputs/CustomSelect.vue';
import CustomCheckBox from './inputs/CustomCheckBox.vue';

export default {
    data(){
        return{
            textInput: {
            label: "نام و نام خانوادگی",
            placeholder: "نام خود را وارد کنید",
            name: "",
            },

            numberInput: {
                label: "مبلغ تراکنش",
                value: 0,
                min:1,
                max:10,
            },
            textareaInput: {
                value:"",
                label:"یادداشت سفارش",
                placeholder:"لطفا نشانی را دقیق بنویسید.",

            },
            customSelect:{
                label:"استان را انتخاب کنیذ",
                value:"",

                options:[
                    {
                        text:"تست۱",
                        value:"test1",
                        color:"#bbb",
                        icon:"fas fa-map-marker-alt"
                    },
                    {
                        text:"تشت۲",
                        value:"test2",
                        color:"#ddd",
                        icon:"fas fa-map-marker-alt"
                    },
                    {
                        text:"تست۳",
                        value:"test3",
                        color:"#fff",
                        icon:"fas fa-map-marker-alt"
                    },
                ]
            },
            checkboxInput: {
                label: 'شرایط و قوانین استفاده را می‌پذیرم',
                value: false,
                type: 'checkbox'
                },

            switchInput: {
                label: 'احراز هویت دو مرحله‌ای (2FA)',
                value: false,
                type: 'switch'
                }
        }
    },

    components:{
        CustomTextInput,
        CustomNumberInput,
        CustomTextareaInput,
        CustomSelect,
        CustomCheckBox,
    },
}

</script>


<template>
    <div>
        <CustomTextInput
        :label="textInput.label"
        :placeholder="textInput.placeholder"
        :value="textInput.name"
        @input="textInput.name = $event"
        />
        <CustomNumberInput
        :label="numberInput.label"
        :value="numberInput.value"
        :min="numberInput.min"
        :max="numberInput.max"
        @input="numberInput.value = $event"
        />
        <CustomTextareaInput
        :label="textareaInput.label"
        :value="textareaInput.value"
        :placeholder="textareaInput.placeholder"
        :min-length="10"
        :max-length="15"
        @input="textareaInput.value = $event"
        />
        <CustomSelect
        :value="customSelect.value"
        :label="customSelect.label"
        :options="customSelect.options"
        @input="customSelect.value = $event"
        />
        <CustomCheckBox
        :label="checkboxInput.label"
        :value="checkboxInput.value"
        :type="checkboxInput.type"
        @input="checkboxInput.value = $event"
        />
        <CustomCheckBox
        :label="switchInput.label"
        :value="switchInput.value"
        :type="switchInput.type"
        @input="switchInput.value = $event"
        />

    </div>
</template>