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
      console.log("checkSelect",this.selected.inSelect)
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
    class="conteiner__select"
    v-if="selectedOptions"
    >
    {{ selectedOptions.name }}
    </div>
    <div v-else > 
      <span>لطفا یک گزینه رو انتخاب کنید</span>
    </div>

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
</template>

<style lang="scss" scoped >
.conteiner{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  direction: rtl;

  label{
    display: flex;
    align-items: right;
  }

  &__select{
    background-color: red;
  } 

  &__selectBox{
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: aquamarine;
    border-radius: 10px;

    span{
      cursor: pointer;
      margin: 10px;
      border-bottom:1px solid gray ;
    }
  }
}
</style>