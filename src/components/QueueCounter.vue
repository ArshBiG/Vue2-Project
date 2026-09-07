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
            this.count--
        },
        reset(){
            this.count = 1
        }
    }
}

</script>


<template>
    <div>
        <h1>Counter List</h1>
        <h2>Number of turns : {{ count }}</h2>

        <p>برای افزودن نوبت کلیک کنید</p>
        <button @click="increment" >incerment</button>

        <p>برای کاهش نوبت کلیک کنید</p>
        <button @click="decrement" >decerment</button>

        <p>برای ریست نوبت کلیک کنید</p>
        <button @click="reset" >reset</button>

    </div>
</template>