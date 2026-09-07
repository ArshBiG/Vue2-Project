<script>
import MiniProject from './components/miniProject.vue';
import QueueCounter from './components/QueueCounter.vue';
import PersonalInfoForm from './components/PersonalInfoForm.vue';
import PersonalInfoVisibility from './components/PersonalInfoVisibility.vue';

export default {
  components: {
    MiniProject,
    QueueCounter,
    PersonalInfoForm,
    PersonalInfoVisibility
  }
}

</script>



<template>
  <div>

    <div>
      <MiniProject />
    </div>

    <hr>
    <div>
      <h1>Task Queue</h1>
      <QueueCounter/>
    </div>

    <hr>
    <div>
      <h1>Task Personal Information</h1>
      <PersonalInfoForm />
    </div>
    
    <hr>
    <div>
      <h1>Task Personal Information Visibility</h1>
      <PersonalInfoVisibility />
    </div>


  </div>
</template>