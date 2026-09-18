<script>
export default {
    
    props:{
        users:{
            type: Object
        },
        fields:{
            type:Array
        }
    },

    data(){
        return{
            localUser: {...this.users},
            originalUser: {...this.users}
        }
    },

    methods:{
        handleSave(){
            if(JSON.stringify(this.localUser) === JSON.stringify(this.originalUser) ){
               return
            }
            this.$emit('newUser', this.localUser )
        },

        handleNewUser(event, key){
            this.localUser[key] = event.target.value
        }
    }
}
</script>

<template>
    <div class="editProfile" >
        <div
        v-for="item in fields"
        :key="item.key"
        class="editProfile__field"
        :class="{'editProfile__about': item.key === 'about'}"
        
        >
            <label>{{ item.label }}</label>


            <textarea
                v-if="item.key === 'about'"
                @input="handleNewUser($event, item.key)"
                :value="localUser[item.key]"
                class="editProfile__about-input"
            >
            </textarea>

            <input
                v-else
                type="text"
                @input="handleNewUser($event, item.key)"
                :value="localUser[item.key]"
            >

        </div>
        <button @click="handleSave"> Save </button>
    </div>
</template>

<style lang="scss" scoped >
.editProfile{
    margin: 30px 20px;
    padding: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr ;
    align-items: center;
    gap: 90px;
    justify-self: center;
    background-color: white;
    border-radius: 20px;

    &__field{
        display:flex;
        flex-direction: column;
        width: 350px;
        // padding: 10px;
    }

    &__about{
        width: 100%;
        grid-column: 1/-1;
        // padding: 30px;
        // width: 100%;
        
        &-input{
            width: 100%;
            border: none;
            border-radius: 20px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.04);
            box-sizing: border-box;
            width: 100%;
            padding: 20px;
            resize: vertical;
        }
    }

    input{
        padding: 15px;
        border: none;
        background-color: transparent;
        box-shadow: 0 2px 10px rgba(0,0,0,0.04);
        border-radius: 20px;
    }
}

</style>