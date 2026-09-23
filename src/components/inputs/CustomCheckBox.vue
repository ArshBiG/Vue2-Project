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

    }
  }
}
</script>

<template>
    <div class="conteiner" >
      <div>

        <div class="wrapper" >
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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  
.wrapper{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 370px;
  height: 200px;
  background-color: #f9fbff;
  padding: 20px;
  border-radius: 10px;
  margin: 10px;

}
  &__selectSections{
    width: 100%;
    // max-width: 320px;
    display: flex;
    padding: -10px;
    flex-direction: row;
    justify-content: flex-end;
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

      &--switchBox{
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