<script>
export default {
  data() {
    return {
        // Save Generated Colors
        colors: [],

        // Save Hovered Color
        hoveredColor: null

    }
  },

  methods: {
    // Create Random Color
    genereteColor() {
      const randomColor = Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0')

      this.colors.push(`#${randomColor}`)
    },

    // Copy Color to Clipboard
    copyColor(color) {
      navigator.clipboard.writeText(color)
      alert(`Copied ${color} to clipboard!`)
    },

    showColor(color) {
        this.hoveredColor = color
        },

    hideColor() {
        this.hoveredColor = null
        }

  }
}
</script>

<template>
  <div class="personal">

    <h1>Random Color Generator</h1>

    <!-- Generate Random Color -->
    <button
      class="btn"
      @click="genereteColor"
    >
      Generate Random Color
    </button>

    <div class="colors">

      <div
        v-for="(color, index) in colors"
        :key="index"
        class="color-list"
        :style="{ backgroundColor: color }"
        @mouseenter="showColor(color)"
        @mouseleave="hideColor()"
        >
        <div class="color__info" v-show="hoveredColor === color " >
          <span>{{ color }}</span>

          <!-- Copy Color to Clipboard -->
          <button
            class="btn__copy"
            @click="copyColor(color)"
          >
            📋
          </button>
        </div>
      </div>

      <!-- <div
        v-if="copiedColor"
        class="toast"
        >
        ✓ {{ copiedColor }} copied!
    </div> -->

    </div>

  </div>
</template>

<style lang="scss" scoped>

.personal {
  width: 400px;
  margin: 50px auto;
  padding: 25px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .btn {
    padding: 10px 20px;

    font-size: 16px;
    cursor: pointer;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    transition: 0.3s ease;

    &:hover {
      background-color: #3a813d;
    }
  }

  .colors {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    margin-top: 15px;
  }

  .color-list {
    width: 100px;
    height: 80px;
    margin: 5px auto ;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s ease;

    // &:hover {
    //   box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
    //   .color__info {
    //     display: flex;
    //   }
    // }

    .color__info {
    //   display: none;
      align-items: center;
      gap: 5px;
      padding: 5px;
      background-color: white;
      color: black;
      border-radius: 5px;
    }

    .btn__copy {
      padding: 5px;
      font-size: 14px;
      cursor: pointer;
      background-color: white;
      color: black;
      border: 1px solid #ccc;
      border-radius: 5px;

      &:hover {
        background-color: #eeeeee;
      }
    }
  }
}

</style>