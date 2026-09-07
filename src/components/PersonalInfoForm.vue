<script>
export default {
    data() {
        return{
            username: "",
            lastname: "",
            gender: "",
            mobile: "",
            address: "",
        }
    },
}

</script>


<template>
    <div>
        
        <div>
            <h1>Personal Info Form</h1>
            <p>Username :</p>
            <input v-model="username" type="text" placeholder="Enter your username">
            <p>Lastname :</p>
            <input v-model="lastname" type="text" placeholder="Enter your lastname">
            <p>Gender :</p>
            <select v-model="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <p>Mobile :</p>
            <input v-model="mobile" type="text" placeholder="Enter your mobile number">
            <p>Address :</p>
            <textarea v-model="address" placeholder="Enter your address"></textarea>
        </div>

        <div>
            <h2>Entered Information</h2>
            <p>Username: {{ username || 'Not provided' }}</p>
            <p>Lastname: {{ lastname || 'Not provided' }}</p>
            <p>Gender: {{ gender || 'Not provided' }}</p>
            <p>Mobile: {{ mobile || 'Not provided' }}</p>
            <p>Address: {{ address || 'Not provided' }}</p>
        </div>

    </div>
</template>