<script>
export default {
  data() {
    return {
      count : 0,
      username : "",
      imageUrl : "https://picsum.photos/400",
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    clearUsername() {
      this.username = "";
    }
  }

};

// New

</script>

<template>
  <div class="check" >
    <!-- Event Binding Click -->
    <h1>this is a simple Vue app</h1>
    <p>Count: {{ count }}</p>
    <button @click="increment">Plus</button>

    <!-- Attribute Binding v-bind -->
    <div>
      <img v-bind:src="imageUrl" alt="Random Image">
    </div>

    <!-- Data Binding v-model -->
    <div>
      <p v-if="username">
        Username: {{ username }}
      </p>
      <p v-else>
        وارد نشده
      </p>
      <input v-model="username" type="text">
      <button @click="clearUsername">
        Clear Username
      </button>
    </div>

  </div>
</template>


<style lang="scss" >
$primary-color: red;

.check {
  text-align: center;
  margin-top: 50px;

  h1 {
    font-size: 40px;
    color: $primary-color;
  }
}

</style>