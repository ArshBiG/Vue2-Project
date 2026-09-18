<script>
export default{
    props:{
        users:{
            type: Object
        },
        fields:{
            type: Array
        }
    }
}
</script>

<template>
    <div class="profileInfo" >
        <div
        v-for="item in fields"
        :key="item.key"
        dir="rtl"
        :class="{'profileInfo__users': users[item.key]}"
        >
            {{ item.label }} : {{ users[item.key] }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
.profileInfo{
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
    margin: 30px 20px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.04);

    &__users{
        direction: ltr;
    }

}

</style>