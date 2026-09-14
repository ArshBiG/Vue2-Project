<script>
import inputMixin from '@/mixins/inputMixin'

export default {
  mixins: [inputMixin],

  props: {
    value: {
      type: String,
      default: ''
    },

    options: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      isOpen: false
    }
  },

  computed: {
    selectedOption() {
      return this.options.find(option => option.value === this.inputValue)
    }
  },

  methods: {
    handlerInput(option) {
      this.inputValue = option.value
      this.touched = true
      this.isValid = this.inputValue !== ''
      this.$emit('input', this.inputValue)
      this.isOpen = false
    },

    handlerOpen() {
      this.isOpen = !this.isOpen
      this.touched = true

      if (!this.inputValue) {
        this.isValid = false
      }
    }
  },

  watch: {
    value(newValue) {
      this.isValid = newValue !== ''
    }
  }
}
</script>

<template>
  <div class="custom-select">
    <label class="custom-select__label">
      {{ label }}
    </label>

    <div
      class="custom-select__box"
      :class="{
        'custom-select__box--error': touched && !isValid,
        'custom-select__box--success': touched && isValid
      }"
      @click="handlerOpen"
    >

      <!-- Selected option -->
      <div class="custom-select__selected">
        <i
          v-if="selectedOption"
          :class="selectedOption.icon"
          :style="{ color: selectedOption.color }"
        ></i>

        <i
          v-else
          class="fas fa-map-marker-alt"
        ></i>

        <span v-if="selectedOption">
          {{ selectedOption.text }}
        </span>

        <span v-else class="custom-select__placeholder">
          لطفا استان را انتخاب کنید
        </span>

        <i class="fas fa-chevron-down custom-select__arrow"></i>

      </div>

      <!-- Options -->
      <div
        v-show="isOpen"
        class="custom-select__dropdown"
      >
        <ul class="custom-select__list">

          <li
            v-for="option in options"
            :key="option.value"
            class="custom-select__option"
            @click.stop="handlerInput(option)"
          >
            <i
              :class="option.icon"
              :style="{ color: option.color }"
            ></i>

            <span>
              {{ option.text }}
            </span>
          </li>

        </ul>
      </div>

    </div>

    <!-- Error -->
    <p
      v-if="touched && !isValid"
      class="custom-select__message custom-select__message--error"
    >
      <i class="fas fa-exclamation-circle"></i>
      لطفا استان را انتخاب کنید
    </p>

    <!-- Success -->
    <p
      v-else-if="touched && isValid"
      class="custom-select__message custom-select__message--success"
    >
      <i class="fas fa-check-circle"></i>
      اطلاعات وارد شده معتبر است
    </p>

  </div>
</template>

<style lang="scss" scoped>
$success: #00875a;
$eror: #e53935;

.custom-select {
  width: 100%;
  max-width: 400px;
  position: relative;

  &__label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 500;
    color: #333;
  }

  &__box {
    width: 100%;
    min-height: 42px;
    border: 1px solid #ccc;
    border-radius: 6px;
    background: #fff;
    cursor: pointer;
    box-sizing: border-box;
    transition: border-color 0.2s;

    &:hover {
      border-color: #999;
    }

    &--error {
      border-color: $eror;
    }

    &--success {
      border-color: $success;
    }
  }

  &__selected {
    min-height: 42px;
    padding: 0 12px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
  }

  &__placeholder {
    color: #999;
  }

  &__arrow {
    margin-left: auto;
    color: #777;
    font-size: 12px;
  }

  &__dropdown {
    position: absolute;
    left: 0;
    right: 0;
    top: calc(100% + 5px);
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 6px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    z-index: 10;
  }

  &__list {
    margin: 0;
    padding: 5px;
    list-style: none;
  }

  &__option {
    min-height: 38px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    gap: 8px;
    border-radius: 4px;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: #f5f5f5;
    }
  }

  &__message {
    margin: 6px 0 0;
    display: flex;
    align-items: center;
    gap: 5px;
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