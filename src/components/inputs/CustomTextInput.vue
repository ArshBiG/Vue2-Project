<script>
export default{
  props:{
    customInput:{
      type:Object,
      default:() => ({})
    }
  },

  data(){
    return{
      input: this.customInput,
      isValid: false
    }
  },

  methods:{
    handleClick(){
      this.isValid = this.input.value.length >= this.input.minCharacter
      
      if(this.isValid){
        this.$emit('change-value', this.input.value)
        }
      },
  }

}
</script>

<template>
  <div class="conteiner" >
    
    <div class="customText" >
      <label class="customText__label">{{input.label}}</label>
      <div class="customText__inputsBox">
        <div class="customText__inputsBox--icon" >
          <i v-if="isValid"
          :class="input.successIcon"
          ></i>
          <i
          v-else
          :class="input.errorIcon"
          class="customText__inputsBox--errorIcon"
          ></i>
        </div>
        <input
          class="customText__inputsBox--input"
          type="text"
          v-model="input.value"
          @input="handleClick"
          >
          <i
          class="customText__inputsBox--defaultIcon"
          :class="input.defaultIcon"
          ></i>
      </div>
    
      <div class="customText__text" >
        <div v-if="!isValid" >
          <div class="customText__inputBox--errorIcon" >
            <span class="customText__text--errorText">{{ input.errorText }} {{ input.minCharacter }} </span>
          </div>
        </div>
        
        <div v-else >
          <span class="customText__text--successText">{{ input.successText }}</span>
          <div class="customText__Icons--success" >
          </div>
        </div>
      </div>

  </div>
</div>
</template>

<style lang="scss" scoped >
.conteiner{
  display: flex;
  justify-content: center;
  height: auto;
}

.customText{
  display: flex;
  flex-direction: column;
  // border: 5px solid white;
  justify-content: center;
  align-items: flex-end;
  position: relative;

  &__label{
    margin-bottom: 5px;
    font-size: small;
  }

  &__text{
    margin-top: 5px;
    font-size: small;
  }

  &__inputsBox{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 320px;
    width: 100%;
    padding: 5px;
    border: 2px solid black ;
    border-radius: 10px ;    
    
    &--input{
      direction: rtl;
      padding: 5px;
      border: none;
      outline: none;
      background-color: transparent;
    }

    &--defaultIcon{
      font-size: 17px;
    }

    &--icon{
      font-size: 15px;
    }

  }

}
</style>