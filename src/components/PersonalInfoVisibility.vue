<script>

export default {
  data() {
    return {
      isLoggedin: false,
    }
  }
}

</script>

<template>
  <div class="personal">

    <h1>Personal Info Visibility</h1>

    <div class="toggle">
      <label>Toggle Visibility</label>

      <input
        type="checkbox"
        v-model="isLoggedin"
      >
    </div>

    <div class="information">

      <h2>Personal Information</h2>

      <div v-show="isLoggedin" class="info-box">
        <p>Username: john</p>
        <p>Last Name: doe</p>
      </div>

      <div v-if="isLoggedin" class="info-box">
        <p>Email: john.doe@example.com</p>
        <p>Phone: 123-456-7890</p>
        <p>Address: 123 Main St, Anytown, USA</p>
      </div>

      <p v-if="!isLoggedin" class="hidden-message">
        Personal information is hidden.
      </p>

    </div>

  </div>
</template>

<style lang="scss" scoped>

.personal {
  width: 400px;
  margin: 50px auto;
  padding: 25px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  h1 {
    margin-bottom: 25px;
    font-size: 24px;
  }

  .toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 12px;
    background-color: #f5f5f5;
    border-radius: 8px;
    label {
      font-size: 14px;
    }

    input {
      width: 18px;
      height: 18px;
      cursor: pointer;
    }
  }

  .information {
    margin-top: 25px;
    padding: 15px;
    background-color: #f9f9f9;
    border-radius: 8px;
    text-align: left;

    h2 {
      margin-bottom: 15px;
      font-size: 18px;
      text-align: center;
    }

    .info-box {
      padding: 10px;
      background-color: white;
      border: 1px solid #ddd;
      border-radius: 6px;

      p {
        margin: 7px 0;
        font-size: 14px;
      }
    }

    .hidden-message {
      padding: 10px;
      color: #777;
      text-align: center;
      font-size: 14px;
    }
  }
}

</style>