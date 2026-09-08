<script>
export default {
    data() {
        return {
            // Save Generated Colors
            colors: []
        }
    },

    methods: {
        // Create Random Color
        genereteColor() {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
            this.colors.push(`#${randomColor}`);
        },
        // Copy Color to Clipboard
        copyColor(color) {
          navigator.clipboard.writeText(color)
          alert(`Copied ${color} to clipboard!`);
        },

    }
}

</script>

<template>
    <div class="personal" >
        <h1>Random Color Generator</h1>
        <div>
            <!-- Generate Random Color -->
            <button class="btn"  @click="genereteColor">Generate Random Color</button>
            <div class="color-List" v-for="(color, index) in colors" :key="index" :style="{ backgroundColor: color}">
                {{ color }}
            <!-- Copy Color to Clipboard -->
                <button class="btn__copy" @click="copyColor(color)" >
                    📋
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped >
    .personal {
        .btn {
            margin: 10px;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
        }
        .btn__copy {
            display: flex;
            justify-content: space-between;
            padding: 5px 10px;
            font-size: 14px;
            cursor: pointer;
            // background-color: #2196F3;
            color: white;
            border:1px solid black;
            border-radius: 5px;
            }
        .color-List {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-radius: 5px;
            padding: 10px;
        }
    }
</style>