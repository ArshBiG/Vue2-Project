<script>
export default {
  data() {
    return {
      username: "",
      lastname: "",
      gender: "",
      mobile: "",
      address: "",
    }
  },
}
</script>
<template>
  <div class="card">

    <div class="box">
      <h1>Personal Info Form</h1>
    </div>

    <div class="box--two"></div>

    <div class="greeting">
      Hi, {{ username || 'Guest' }}!
    </div>

    <div class="avatar">
      <img
        src="https://gravatar.com/avatar/4002995cbc8ab6fb9cae2fd9927cc066?s=400&d=robohash&r=x"
        alt="Profile Image"
      >
    </div>

    <div class="form">

      <div class="form__group">
        <p>Username</p>
        <input
          v-model="username"
          type="text"
          placeholder="Enter your username"
        >
      </div>

      <div class="form__group">
        <p>Lastname</p>
        <input
          v-model="lastname"
          type="text"
          placeholder="Enter your lastname"
        >
      </div>

      <div class="form__group">
        <p>Gender</p>
        <select v-model="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div class="form__group">
        <p>Mobile</p>
        <input
          v-model="mobile"
          type="text"
          placeholder="Enter your mobile number"
        >
      </div>

      <div class="form__group">
        <p>Address</p>
        <textarea
          v-model="address"
          placeholder="Enter your address"
        ></textarea>
      </div>

    </div>

    <div class="information">
      <h2>Entered Information</h2>

      <p>Username: {{ username || 'Not provided' }}</p>
      <p>Lastname: {{ lastname || 'Not provided' }}</p>
      <p>Gender: {{ gender || 'Not provided' }}</p>
      <p>Mobile: {{ mobile || 'Not provided' }}</p>
      <p>Address: {{ address || 'Not provided' }}</p>
    </div>

  </div>
</template>

<style lang="scss" scoped>

.card {
  width: 400px;
  margin: 50px auto;
  padding: 20px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  .box {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #4CAF50;
    border-radius: 8px;
    color: white;

    h1 {
      font-size: 22px;
    }
  }

  .box--two {
    height: 15px;
    margin-top: -5px;
    background: #21f328;
    border-radius: 0 0 8px 8px;
  }

  .greeting {
    margin: 20px 0;
    font-size: 20px;
  }

  .avatar {
    margin-bottom: 25px;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      border: 5px solid #4CAF50;
      transition: 0.3s ease;

      &:hover {
        box-shadow: 0 0 10px 2px rgba(76, 175, 80, 0.4);
      }
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    text-align: left;

    .form__group {
      p {
        margin-bottom: 5px;
        font-size: 14px;
        font-weight: bold;
      }

      input,
      select,
      textarea {
        width: 100%;
        padding: 11px;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-radius: 6px;
        font-size: 14px;
        transition: 0.3s ease;

        &:focus {
          border-color: #4CAF50;
          box-shadow: 0 0 5px rgba(76, 175, 80, 0.3);
        }
      }

      textarea {
        height: 80px;
      }
    }
  }

  .information {
    margin-top: 25px;
    padding: 15px;
    background: #f5f5f5;
    border-radius: 8px;
    text-align: left;

    h2 {
      margin-bottom: 10px;
      font-size: 18px;
      text-align: center;
    }

    p {
      margin: 7px 0;
      font-size: 14px;
    }
  }
}

</style>