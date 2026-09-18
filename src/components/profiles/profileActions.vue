<script>
export default {
    props:{
        actions:{
            type:Array,
        }
    },

    methods:{
        handleClick(component){
            this.$emit('change-page', component )
        }
    }
}
</script>

<template>
    <div>
        <div class="actions" >
            <button
            v-for="action in actions"
            class="actions__button"
            :key="action.component"
            @click="handleClick(action.component)"
            >
                {{ action.lable }}
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped >

.actions {
    width: 320px;
    padding: 15px 12px;
    margin: 0px 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    background-color: #ffffff;
    border-radius: 22px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.04);

    &__button {
        width: 100%;
        height: 48px;
        padding: 0 18px;
        border: none;
        border-radius: 14px;
        background-color: transparent;
        color: #4b5563;
        font-size: 14px;
        font-weight: 600;
        text-align: right;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        transition: all .1s ease;

        &:hover {
            background-color: #4f46e5;
            color: white;
        }
    }
}

</style>