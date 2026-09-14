<script>
import inputMixin from '@/mixins/inputMixin'

export default {
  mixins: [inputMixin],

  props: {
    value: {
      type: Boolean,
      default: false
    },

    type: {
      type: String,
      default: 'checkbox',
    }
  },

  methods: {
    handlerInput(event) {
      this.inputValue = event.target.checked
      this.touched = true
      this.isValid = this.inputValue
      this.$emit('input', this.inputValue)
    }
  },

  watch: {
    value(newValue) {
      this.isValid = newValue
    }
  }
}
</script>

<template>
  <div class="custom-checkbox">
    <label
      class="custom-checkbox__control"
      :class="{
        'custom-checkbox__control--success': touched && isValid,
        'custom-checkbox__control--error': touched && !isValid,
        'custom-checkbox__control--switch': type === 'switch'
      }"
    >
      <input
        type="checkbox"
        :checked="inputValue"
        @change="handlerInput"
      />

      <!-- Checkbox -->
      <span
        v-if="type === 'checkbox'"
        class="custom-checkbox__box"
      >
        <i class="fas fa-check"></i>
      </span>

      <!-- Switch -->
      <span
        v-else
        class="custom-checkbox__switch"
      >
        <span class="custom-checkbox__switch-circle"></span>
      </span>

      <span class="custom-checkbox__text">
       {{ label }}
      </span>

    </label>

    <p
      v-if="touched && !isValid"
      class="custom-checkbox__message custom-checkbox__message--error"
    >
      <i class="fas fa-exclamation-triangle"></i>
      برای ادامه باید این گزینه را فعال کنید
    </p>

    <p
      v-else-if="touched && isValid"
      class="custom-checkbox__message custom-checkbox__message--success"
    >
      <i class="fas fa-thumbs-up"></i>
      حساب کاربری شما در سطح حفاظت قرار دارد.
    </p>

  </div>
</template>

<style lang="scss" scoped>
$success: #00875a;
$eror: #e53935;

.custom-checkbox {
  width: 100%;
  max-width: 480px;
  padding: 18px;
  border-radius: 12px;
  box-sizing: border-box;

  &__control {
    width: 100%;
    min-height: 62px;
    padding: 0 14px;
    display: flex;
    align-items: center;
    gap: 12px;
    border: 1px solid #e5e5e5;
    border-radius: 12px;
    background: #fff;
    cursor: pointer;
    box-sizing: border-box;
    transition: border-color 0.2s, box-shadow 0.2s;

    input {
      display: none;
    }

    &--error {
      border-color: $eror;
      box-shadow: 0 0 0 2px rgba(211, 47, 47, 0.08);
    }

    &--success {
      border-color: $success;
      box-shadow: 0 0 0 2px rgba(0, 135, 90, 0.08);
    }
  }

  &__box {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #bbb;
    border-radius: 5px;
    box-sizing: border-box;
    color: #fff;
    font-size: 12px;
    transition: 0.2s;
  }

  &__control--success &__box {
    border-color: $success;
    background: $success;
  }

  &__control--error &__box {
    border-color: $eror;
  }

  &__text {
    flex: 1;
    font-size: 14px;
    color: #333;
  }

  &__switch {
    width: 50px;
    height: 26px;
    position: relative;
    display: block;
    border-radius: 20px;
    background: #ddd;
    transition: 0.2s;
  }

  &__switch-circle {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 3px;
    left: 3px;
    border-radius: 50%;
    background: #fff;
    transition: 0.2s;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }

  &__control--success &__switch {
    background: $success;
  }

  &__control--success &__switch-circle {
    left: 27px;
  }

  &__control--error &__switch {
    background: $eror;
  }

  &__message {
    margin: 8px 0 0;
    display: flex;
    align-items: center;
    gap: 6px;
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