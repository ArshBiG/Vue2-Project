<script>
import inputMixin from '@/mixins/inputMixin';

export default {
    mixins: [inputMixin],

  props: {
    value: {
      type: Number,
    },

    min: {
      type: Number,
    },

    max: {
      type: Number,
    }
  },

  methods: {
    increase() {
      if (this.inputValue < this.max) {
        this.inputValue++

        this.touched = true
        this.isValid = this.inputValue >= 0

        this.$emit('input', this.inputValue)
      }
    },

    decrease() {
      this.inputValue--

      this.touched = true
      this.isValid = this.inputValue >= 0

      this.$emit('input', this.inputValue)
    }
  },

  watch: {
    value(newValue) {
      this.isValid = newValue >= 0
    }
  }
}
</script>

<template>
  <div class="number-input">

    <label class="number-input__label">
      {{ label }}
    </label>

    <div class="number-input__limits">
      <span>
        حداقل: {{ min }}
      </span>

      <span>
        حداکثر: {{ max }}
      </span>
    </div>

    <div
      class="number-input__wrapper"
      :class="{
        'number-input__wrapper--error': touched && !isValid,
        'number-input__wrapper--success': touched && isValid
      }"
    >

      <button
        class="number-input__button"
        type="button"
        @click="decrease"
      >
        <i class="fas fa-minus"></i>
      </button>

      <input
        class="number-input__field"
        type="number"
        :value="inputValue"
        readonly
      >

      <button
        class="number-input__button"
        type="button"
        @click="increase"
      >
        <i class="fas fa-plus"></i>
      </button>

    </div>

    <!-- Error -->
    <p
      v-if="touched && !isValid"
      class="number-input__message number-input__message--error"
    >
      مقدار وارد شده نمی‌تواند منفی باشد
    </p>

    <!-- Success -->
    <p
      v-else-if="touched && isValid"
      class="number-input__message number-input__message--success"
    >
      مقدار وارد شده معتبر است
    </p>

  </div>
</template>

<style lang="scss" scoped>
$success: #00875a;
$eror: #e53935;

.number-input {
  width: 100%;
  max-width: 400px;

  &__label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 500;
    color: #333;
  }

  &__limits {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    font-size: 12px;
    color: #777;
  }

  &__wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    height: 42px;
    border: 1px solid #ccc;
    border-radius: 6px;
    overflow: hidden;
    box-sizing: border-box;
    transition: border-color 0.2s;
    &--error {
      border-color: $eror;
    }
    &--success {
      border-color: $success;
    }
  }

  &__field {
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    text-align: center;
    font-size: 15px;
    outline: none;
  }

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 100%;
    border: none;
    background-color: #f5f5f5;
    color: #555;
    font-size: 13px;
    cursor: pointer;
    transition: background-color 0.2s;
    &:hover {
      background-color: #e9e9e9;
    }
    &:active {
      background-color: #ddd;
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