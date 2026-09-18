<script>
import DataProfile from './profiles/dataProfile.vue';
import ActionDashboard from './profiles/pages/actionDashboard.vue';
import ActionDevices from './profiles/pages/actionDevices.vue';
import ActionEditProfile from './profiles/pages/actionEditProfile.vue';
import ActionSecuriy from './profiles/pages/actionSecuriy.vue';
import ActionTransactions from './profiles/pages/actionTransactions.vue';

export default {
    data(){
        return{
            currentPage: 'editProfile',

            users:{
                fullName: "آرش احمدآبادی",
                nationalCode: "1051062790952",
                companyEmail: "gameepass007@gmail.com",
                phone: "09363665676",
                address: "خراسان رضوی",
                city: "نیشابور",
                about: "برنامه نویس",
                job: "دانشجو",
                uid: "#s18820",
                joinDate: "1403/12/12"
            },

            userFields:[
                {
                    key:"fullName",
                    label:"نام و نام خانوادگی"
                },
                {
                    key:"nationalCode",
                    label:"کد ملی" 
                },

                {
                    key:"companyEmail",
                    label:"ایمیل شرکتی"
                },

                {
                    key:"phone",
                    label:"شماره تماس"
                },

                {
                    key:"address",
                    label:"آدرس"
                },

                {
                    key:"city",
                    label:"شهر"
                },

                {
                  key:"about",
                  label:"درباره من"
                },

                {
                   key:"job",
                   label:"شغل من"
                },

                {
                    key:"uid",
                    label:"شناسه کاربری"
                },

                {
                    key:"joinDate",
                    label:"تاریخ عضویت"
                }
            ],

            actions:[
                {
                    lable: "داشبورد و مرور کلی",
                    component: "dashboard"
                },
                {
                    lable: "ویرایش اطلاعات فردی",
                    component: "editProfile"
                },
                {
                    lable: "تراکنش ها وامور مالی",
                    component: "transactions"
                },
                {
                    lable: "امنیت و رمز عبور",
                    component: "security"
                },
                {
                    lable: "دستگاه های متصل و نشست ها",
                    component: "device"
                },
            ],

            pages:{
                dashboard: ActionDashboard,
                device: ActionDevices,
                editProfile: ActionEditProfile,
                security: ActionSecuriy,
                transactions: ActionTransactions, 
            }
        }
    },

    components:{
        DataProfile,
    },

    computed:{
        profileInfoFields(){
            return this.userFields.filter(item => {
                return[
                    "fullName",
                    "companyEmail",
                    "phone",
                    "joinDate",
                    "job",
                    "uid",
                    ].includes(item.key)
            })
        },
        profileEditField(){
            return this.userFields.filter(item=>{
                return[
                    "fullName",
                    "nationalCode",
                    "companyEmail",
                    "phone",
                    "address",
                    "city",
                    "about",
                    ].includes(item.key)
            })
        }
    },

    methods:{
        handleClick(component){
            this.currentPage = component
        },
        handleSave(newUser){
            this.users = newUser
            console.log( "NewUser In :" ,this.users)
        }
    }
}
</script>

<template>
    <div>
        <DataProfile
            :users="users"
            :fields="profileInfoFields"
            :actions="actions"
            @change-page="handleClick"
            >
            <component
            :is="pages[currentPage]"
            :users="users"
            :fields="profileEditField"
            @newUser="handleSave"
            ></component>
        </DataProfile>
    </div>
</template>