<script>
export default{
  props:{
    value:{
      type:Object,
      default:() =>({})
    },

  },
  data(){
    return{
      // گرفتن مقادیر
      isValue: this.value,
      // اعتبار سنجی
      isValid: false
    }
  },

  methods:{
    handleCheck(){
      this.isValid = !this.isValid

      this.$emit('checked', this.isValid )
      console.log("this Value :",this.value.inCheck)
      console.log("this Value :",this.value.isValid)

    }
  }
}
</script>

<template>
  <div>
    <div class="conteiner" >
      <div>

        <div class="conteiner__selectSections" >

          <!-- checkBox Sections -->
          <div
            v-if="isValue.type === 'checkbox'"
            class="conteiner__selectSections--checkBox"
            >
            <i :class="isValue.inputSuccessIcon" ></i>
            <label>
              {{ isValue.label }}
              
              <!--inputBox for CheckBox Sections-->
              <input 
              @click="handleCheck"
              type="checkbox">
            </label>
          </div>
        
          <!--switchBox Section-->
          <div
            v-else
            class="conteiner__selectSections--switchBox"
            >
            <i :class="isValue.inputSuccessIcon" ></i>
            <label>
              {{ isValue.label }}
              
              <!--inputBox for SwitchBox Sections-->
              <input 
              @click="handleCheck"
              type="checkbox">
            </label>
          </div>

        </div>


      <!--message Error-Seccess Sections-->
      <div>
        <span v-if="isValid" >
          {{ isValue.successText }}
        </span>
        <span v-else >
          {{ isValue.errorText }}
        </span>
      </div>
      
    </div>
    </div>
  </div>
</template>

<style lang="scss" scoped >
.conteiner{
  background-color: #e9e9e9;

  &__selectSections{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    border-radius: 10px;
    gap: 10px;

    &--checkBox{
      padding: 10px;
      label{
        padding: 10px;
      }
      input{
        transform: translateY(25%);
      }
      i{
        transform: translateY(15%);
      }
    }
  }
}
</style>