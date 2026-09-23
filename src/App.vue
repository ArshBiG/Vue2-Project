<script>


import MiniProject from './components/miniProject.vue';
import QueueCounter from './components/QueueCounter.vue';
import PersonalInfoForm from './components/PersonalInfoForm.vue';
import PersonalInfoVisibility from './components/PersonalInfoVisibility.vue';
import RandomColor from './components/randomColor.vue';
import AgeCalculator from './components/AgeCalculator.vue';
import InputsDemo from './components/InputsDemo.vue';

import ProfileDemo from './components/profileDemo.vue';
import TablesDemo from './components/TablesDemo.vue';

export default {
  data(){
    return{
      viewPages: ""
    }
  },

  methods:{
    handleCheckPage(page){
      this.viewPages = page
    }
  },


  components: {
    MiniProject,
    QueueCounter,
    PersonalInfoForm,
    PersonalInfoVisibility,
    RandomColor,
    AgeCalculator,
    InputsDemo,
    TablesDemo,
    ProfileDemo,
  }
}

</script>



<template>
  <div>
    <div class="conteiner" >
      <button @click="handleCheckPage('MiniProject')">MiniProject</button>
      <button @click="handleCheckPage('QueueCounter')" >QueueCounter</button>
      <button @click="handleCheckPage('PersonalInfoForm')">PersonalInfoForm</button>
      <button @click="handleCheckPage('PersonalInfoVisibility')">PersonalInfoVisibility</button>
      <button @click="handleCheckPage('RandomColor')">RandomColor</button>
      <button @click="handleCheckPage('AgeCalculator')">AgeCalculator</button>
      <button @click="handleCheckPage('InputsDemo')">InputsDemo</button>
      <button @click="handleCheckPage('TablesDemo')">TablesDemo</button>
      <button @click="handleCheckPage('ProfileDemo')">ProfileDemo</button>
    </div>
<div class="list" >
    <div v-if="viewPages === 'MiniProject' ">
      <MiniProject />
    </div>

    <div v-if="viewPages === 'QueueCounter'" >
      <h1>Task Queue</h1>
      <QueueCounter/>
    </div>

    <div v-if="viewPages === 'PersonalInfoForm'" >
      <h1>Task Personal Information</h1>
      <PersonalInfoForm />
    </div>
    
    <div v-if="viewPages === 'PersonalInfoVisibility'" >
      <h1>Task Personal Information Visibility</h1>
      <PersonalInfoVisibility />
    </div>

    <div v-if="viewPages === 'RandomColor'" >
      <h1>Task Random Color Generator</h1>
      <randomColor />
    </div>

    <div v-if="viewPages === 'AgeCalculator'" >
      <h1>Task Age Calculator</h1>
      <AgeCalculator />
    </div>

    <div v-if="viewPages === 'InputsDemo'" >
      <InputsDemo/>
    </div>

    <div v-if="viewPages === 'TablesDemo'" >
      <TablesDemo/>
    </div>

    <div v-if="viewPages === 'ProfileDemo'" >
      <ProfileDemo/>
    </div>
</div>

  </div>
</template>

<style lang="scss" scoped >
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700&display=swap');

* {
  font-family: 'Vazirmatn', sans-serif;
}

.conteiner{
  background-color: #d0d0ff;
  padding: 20px;
  display: flex;
  flex: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  user-select: none;
  border-radius: 10px;

  button{
    padding: 10px;
    background-color: blue;
    border: none;
    border-radius: 10px;
  }
}

.list{
  margin-top: -5px ;
  padding: 50px;
  min-height: 80vh;
  background-color: #c9a9f5;
  // border-radius: 10px ;
  box-shadow: inset 0 0 15px rgba(150, 150, 150, 0.15);
  }
</style>