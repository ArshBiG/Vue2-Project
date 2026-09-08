<script>

export default {
    data() {
        return{
            isLoggedin: false,
    }
    }}

</script>

<template>
    <div class="personal">
        <h1>Personal Info Visibility</h1>
        <div>
            <label>Toggle Visibility</label>
            <input type="checkbox" v-model="isLoggedin">
            <h1>Personal Information :</h1>
            <div v-show="isLoggedin">
                <p>username: john</p>
                <p>lastName: doe</p>
            </div>
            <div v-if="isLoggedin" >
                <p>email: john.doe@example.com</p>
                <p>phone: 123-456-7890</p>
                <p>address: 123 Main St, Anytown, USA</p>
            </div>
        </div>
    </div>
</template>