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
      isOpen:true,
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
      console.log("checkSelect",this.selected.inSelect)
    },

    handleOpen(){
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<template>
  <div class="conteiner" > 

    <label>
      {{ select.label }}
    </label>

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
        @click="handleSelect(option.key)"
        >
        <span
        >
        {{ option.name }}
        </span>
            </span>
        </div>
      </div>
        
  </div>
</template>

<style lang="scss" scoped >
.conteiner{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 380px;
  direction: rtl;

  label{
    display: flex;
    justify-content: start;
    align-items: start;
  }

  &__selectSections{
    justify-content: start;
    padding: 5px 10px 5px 10px;
    display: flex;
    border: 2px solid black;
    border-radius: 10px;
    width: 250px;
    background-color: aquamarine;
    font-size: small;
  } 

  &__selectBox{
    display: flex;
    padding: 0 10px 0 10px;

    flex-direction: column;
    width: 250px;
    background-color: aquamarine;
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