<script>
export default{
  props:{
    select:{
      type:Object,
      default: () => ({})
    },
    options:{
      type:Array,
      default: () => []
    }
  },

  data(){
    return{
      isOpen:false,
      isValid:false,
      selected: this.select
    }
  },

  computed:{
    selectedOptions(){
      return this.options.find(option => option.key === this.selected.inSelect )
    }
  },

  methods:{
    handleSelect(option){
      this.$emit('selected', option)
    },

    handleOpen(){
      this.isOpen = !this.isOpen
    },
    handleClickOutside(event){
      if(!this.$refs.select.contains(event.target)){
        this.isOpen = false
      }
    }
  },

  mounted(){
    document.addEventListener("click", this.handleClickOutside )
  },

  beforeDestroy(){
    document.removeEventListener('click', this.handleClickOutside )
  }
}
</script>

<template>
  <div class="conteiner" > 
    <div class="conteiner__wrapper" >
      <label>
        {{ select.label }}
      </label>

      <div ref="select" >
        <div
        @click="handleOpen"
        class="conteiner__selectSections"
        >
          <div
            class="conteiner__selectSections--input"
            v-if="selectedOptions"
            >
            <span>
              {{ selectedOptions.name }}
            </span>
          </div>
  
          <div v-else class="conteiner__select--label" >
              <span>لطفا یک گزینه رو انتخاب کنید</span>
          </div>
        </div>
  
  
        <div v-if="isOpen" >
  
          <div
          class="conteiner__selectBox"
          >
          <span
          v-for="option in options"
          :key="option.key"
          @click="handleSelect(option.key), isOpen = false "
          >
          <span
          >
          {{ option.name }}
          </span>
              </span>
          </div>
  
        </div>
      </div>

      <div class="messageSections" >
      <div class="conteiner__selectSections--message" >
        <span v-if="selectedOptions" >گزینه ی انتخاب شده : {{ selectedOptions.name || "" }}</span>
        <span v-else >گزینه ای انتخاب نکردی خوشگله :) </span>
      </div>

      <div class="conteiner__selectSections--messageInfo" >
        <span v-if="selected.inSelect === 'esfahan'" >
          واقعا {{ selectedOptions.name || "" }} خیلی جای خوشگل هست
        </span>
        <span v-else-if="selected.inSelect === 'tehran'" >
          واقعا {{ selectedOptions.name || "" }} خیلی جای زشتی هست
        </span>
        <span v-else-if="selected.inSelect === 'neyshabour'" >
          واقعا {{ selectedOptions.name || "" }} خیلی جای جذابی هست
        </span>
      </div>
    </div>

    </div>
        
  </div>
</template>

<style lang="scss" scoped >
.conteiner{
  margin: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  direction: rtl;
  user-select: none;
  margin: 30px 0 30px 0;
  padding: 10px;
  font-size: small;

.messageSections{
  background: #7fc3ff;
  border-radius: 10px;
  padding: 10px;
  margin: 20px 0 0 0;
}
  label{
    display: flex;
    justify-content: start;
    align-items: start;
  }

  &__wrapper{
  background-color: #f9fbff;
  padding: 70px;
  border-radius: 10px;
  }

  &__selectSections{
    justify-content: start;
    padding: 5px 10px 5px 10px;
    display: flex;
    border: 2px solid black;
    border-radius: 10px;
    width: 250px;
    background-color: #7fc3ff;
    font-size: small;
  } 

  &__selectBox{
    display: flex;
    padding: 0 10px 0 10px;

    flex-direction: column;
    width: 250px;
    background-color: #7fc3ff;
    border-radius: 10px;
    margin-top: 10px;

    span{
      cursor: pointer;
      margin: 10px;
      border-bottom:1px solid gray ;
    }
  }
}
</style>