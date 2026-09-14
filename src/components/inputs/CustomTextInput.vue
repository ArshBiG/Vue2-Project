<script>
import inputMixin from '@/mixins/inputMixin';

export default {
    mixins:[inputMixin],
  props: {
    placeholder: {
      type: String,
    },

    value: {
      type: String,
    }
  },

  methods: {
    handlerInput(event) {
      this.inputValue = event.target.value
      this.isValid = this.inputValue.length >= 3
      this.touched = true

      this.$emit('input', this.inputValue)
    }
  },

  watch: {
    value(newValue) {
      this.isValid = newValue.length >= 3
    }
  },

}
</script>

<template>
  <div class="text-input">

    <label class="text-input__label">
      {{ label }}
    </label>

    <div class="text-input__wrapper">

      <!-- User icon -->
      <i class="fas fa-user text-input__icon"></i>

      <input
        class="text-input__field"
        type="text"
        :placeholder="placeholder"
        :value="inputValue"
        @input="handlerInput"
        :class="{
          'text-input__field--error': touched && !isValid,
          'text-input__field--success': touched && isValid
        }"
      >

      <!-- Success icon -->
      <i
        v-if="touched && isValid"
        class="fas fa-check text-input__status-icon text-input__status-icon--success"
      ></i>

      <!-- Error icon -->
      <i
        v-else-if="touched && !isValid"
        class="fas fa-exclamation text-input__status-icon text-input__status-icon--error"
      ></i>

    </div>

    <!-- Error -->
    <p
      v-if="touched && !isValid"
      class="text-input__message text-input__message--error"
    >
      نام کاربری باید حداقل ۳ کاراکتر باشد
    </p>

    <!-- Success -->
    <p
      v-else-if="touched && isValid"
      class="text-input__message text-input__message--success"
    >
      اطلاعات وارد شده معتبر است
    </p>

  </div>
</template>

<style lang="scss" scoped>
$success: #00875a;
$eror: #e53935;

.text-input {
  width: 100%;
  max-width: 400px;

  &__label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 500;
    color: #333;
  }

  &__wrapper {
    position: relative;
  }

  &__field {
    width: 100%;
    height: 42px;
    padding: 0 40px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 14px;
    outline: none;
    box-sizing: border-box;
    transition: border-color 0.2s;

    &::placeholder {
      color: #999;
    }

    &--error {
      border-color: $eror;
    }

    &--success {
      border-color: $success;
    }
  }

  &__icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #999;
    font-size: 15px;
  }

  &__status-icon {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 15px;
    &--error {
      color: $eror;
    }
    &--success {
      color: $success;
    }
  }
  &__message {
    margin: 6px 0 0;
    font-size: 12px;
    &--error {
      color: $eror;
    }
    &--success {
      color: $success;
    }
  }
}

</style>