<script>
import inputMixin from '@/mixins/inputMixin'

export default {
  mixins: [inputMixin],

  props: {
    value: {
      type: String,
      default: ''
    },

    placeholder: {
      type: String,
      default: ''
    },

    minLength: {
      type: Number,
      default: 10
    },

    maxLength: {
      type: Number,
      default: 15
    }
  },

  methods: {
    handlerInput(event) {
      this.inputValue = event.target.value
      this.$emit('input', this.inputValue)
      this.touched = true
      this.isValid = this.inputValue.length >= this.minLength
    }
  },

  watch: {
    value(newValue) {
      this.isValid = newValue.length >= this.minLength
    }
  }
}
</script>

<template>
  <div class="textarea-input">

    <label class="textarea-input__label">
      {{ label }}
    </label>

    <div
      class="textarea-input__wrapper"
      :class="{
        'textarea-input__wrapper--error': touched && !isValid,
        'textarea-input__wrapper--success': touched && isValid
      }"
    >

      <textarea
        class="textarea-input__field"
        :value="inputValue"
        :placeholder="placeholder"
        :maxlength="maxLength"
        @input="handlerInput"
      ></textarea>

      <span
        v-if="touched && isValid"
        class="textarea-input__icon textarea-input__icon--success"
      >
        <i class="fas fa-check"></i>
      </span>

      <span
        v-else-if="touched && !isValid"
        class="textarea-input__icon textarea-input__icon--error"
      >
        <i class="fas fa-exclamation"></i>
      </span>

    </div>

    <div class="textarea-input__counter">
      {{ inputValue.length }} / {{ maxLength }}
    </div>

    <p
      v-if="touched && !isValid"
      class="textarea-input__message textarea-input__message--error"
    >
      متن وارد شده باید حداقل {{ minLength }} کاراکتر باشد
    </p>

    <p
      v-else-if="touched && isValid"
      class="textarea-input__message textarea-input__message--success"
    >
      اطلاعات وارد شده معتبر است
    </p>

  </div>
</template>

<style lang="scss" scoped>
$success: #00875a;
$eror: #e53935;

.textarea-input {
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
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 6px;
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
    display: block;
    width: 100%;
    min-height: 120px;
    padding: 12px 40px 12px 12px;
    border: none;
    border-radius: 6px;
    outline: none;
    resize: vertical;
    box-sizing: border-box;
    font-family: inherit;
    font-size: 14px;
    line-height: 1.6;

    &::placeholder {
      color: #999;
    }
  }

  &__icon {
    position: absolute;
    top: 12px;
    right: 12px;
    font-size: 15px;
    &--error {
      color: $eror;
    }
    &--success {
      color: $success;
    }
  }

  &__counter {
    margin-top: 6px;
    text-align: right;
    font-size: 12px;
    color: #777;
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