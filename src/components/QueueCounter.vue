<script>

export default {
    data() {
        return{
            count: 1,
        }
    },
    methods: {
        increment(){
            this.count++
        },
        decrement(){
            if (this.count > 0)
                this.count--
        },
        reset(){
            this.count = 1
        }
    }
}

</script>


<template>
    <div class="main" >
        <h1>Counter List</h1>
        <div>
            <p class="main__text" >Number of turns :</p>
            <span class="main__count" >{{ count }}</span>
        </div>

        <div>
            <p class="main__text" >برای افزودن نوبت کلیک کنید</p>
            <button class="btn btn--increment" @click="increment" >incerment</button>
        </div>

        <div>
            <p class="main__text" >برای کاهش نوبت کلیک کنید</p>
            <button class="btn btn--decrement" @click="decrement" >decerment</button>
        </div>

        <div>
            <p class="main__text" >برای ریست نوبت کلیک کنید</p>
            <button class="btn btn--reset" @click="reset" >reset</button>
        </div>
    </div>
</template>

<style lang="scss" scoped >
$primary: #ececec;
$success: #22c55e;
$danger: #ef4444;
$dark: #1f2937;
$light: #3b91e8;
$border: #0e0e0f;

.main {
    text-align: center;
    margin-top: 50px;
    background-color: $primary;
    padding: 30px;
    margin: 60px auto ;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 400px;

    &__text{
        font-size: medium;
        color: $dark;
        margin: 20px;
    }
    &__count{
        font-size: 30px;
        color: $light;
        font-weight: bold;
        padding: 3px 20px;
        width: 150px;
        height: 45px;
    }}

    .btn{
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 150px;
    height: 45px;
    font-size: medium;

    &--increment{
        background-color: $success;
        color: white;
    }
    &--decrement{
        background-color: $danger;
        color: white;
    }
    &--reset{
        background-color: $dark;
        color: white;
    }
}


</style>