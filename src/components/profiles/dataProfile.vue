<script>
import BoxContent from './boxContent.vue';
import ProfileActions from './profileActions.vue';
import ProfileInfo from './profileInfo.vue';

export default{
    props:{
        users:{
            type:Object,
        },
        fields:{
            type:Array,
        },
        actions:{
            type:Array,
        }
    },

    components:{
        ProfileInfo,
        ProfileActions,
        BoxContent,
    },

    methods:{
        handleClick(component){
            this.$emit('change-page', component )
        }
    }
}
</script>

<template>
    <div class="profileBox" dir="rtl" >
        <div class="profileBox__sidebar" >
            <ProfileInfo
            class="profileBox__info"
            :users="users"
            :fields="fields"
            />
            <ProfileActions
            class="profileBox__actions"
            :actions="actions"
            @change-page="handleClick"
            />
        </div>

        <BoxContent class="profileBox__content" >
                <slot></slot>
        </BoxContent>
    </div>
</template>

<style lang="scss" scoped >
.profileBox{
    width: 100%;
    min-height: 100vh;
    display: flex;
    gap: 24px;
    align-items: start;
    background-color: #f8f9ff;

    &__sidebar{
        display: flex;
        flex-direction: column;
        gap: 60px;
    }

    &__info{
        text-align: start;
    }

    &__content{
        flex:1 ;
    }
}

</style>