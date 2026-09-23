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
        <label class="customText__label"
        >{{input.label}}</label>
        <div class="customText__inputsBox">
          <div class="customText__inputsBox--icon" >
            <i v-if="isValid"
            :class="input.successIcon"
            :style="{color: input.successColor}"
            ></i>
            <i
            v-else
            :class="input.errorIcon"
            :style="{color: input.errorColor }"
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
          <div class="customText__inputBox--errorIcon" 
          :style="{color: input.errorColor}"
          >
            <span class="customText__text--errorText">{{ input.errorText }} {{ input.minCharacter }} </span>
          </div>
        </div>
        
        <div v-else >
          <span class="customText__text--successText"
          :style="{color: input.successColor}"
          >{{ input.successText }}</span>
          <div class="customText__Icons--success" >
          </div>
        </div>
      </div>
      
    </div>
</div>
</template>

<style lang="scss" scoped >
.conteiner{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 300px;
}

.customText{
  display: flex;
  flex-direction: column;
  // border: 5px solid white;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  background: #f9fbff;
  width: 340px;
  padding: 30px 40px;
  border: 1px solid #fff;
  border-radius: 10px;

  &__label{
    margin-bottom: 5px;
    font-size: small;
  }

  &__text{
    margin-top: 5px;
    font-size: small;
  }

  &__inputsBox{
    position: relative;
    max-width: 330px;
    width: 100%;
    padding: 5px;
    border: 2px solid #000 ;
    border-radius: 10px ;
    
    &--input{
      color: #000;
      max-width: 270px;
      width: 100%;
      direction: rtl;
      padding: 5px;
      margin-left: 25px;
      border: none;
      outline: none;
      background-color: transparent;
    }

    &--defaultIcon{
      margin-left: 5px;
      top: 8px;
      transform: translateY(25%);
      position: absolute;
      font-size: 17px;
    }

    &--icon{
      margin-right:5px ;
      transform: translateY(20%);
      position: absolute;
      font-size: 17px;
      transition: all 0.7s;
    }

  }

}
</style>