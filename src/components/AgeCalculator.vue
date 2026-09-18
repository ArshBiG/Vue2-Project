<script>

    export default {
        data() {
            return{
                age: null,
                calculatedAge: null
            }
        },

        methods: {
            calculateAge() {
                this.calculatedAge = this.age;
            }
        },

        computed: {
            ageInDays() {
                if (this.calculatedAge !== null) {
                    return this.calculatedAge * 365;
                }
                return null;
            },
            ageInMonths() {
                if (this.calculatedAge !== null) {
                    return this.calculatedAge * 12;
                }
                return null;
            },
            ageInHours() {
                if (this.calculatedAge !== null) {
                    return this.calculatedAge * 365 * 24;
                }
                return null;
            },
        }
    }
</script>

<template>
    <div class="box" >
        <div class="box__content" >
            <h1>Age Calculator</h1>
            <input
                v-model.number="age"
                @input="age = $event.target.value.replace(/\D/g, '')"
                type="text"
                placeholder="Enter your age in years"
                />
                <div class="age-results" v-if="calculatedAge !== null">
                    
                <div class="result">
                    <span class="result__value">{{ ageInMonths }}</span>
                    <span class="result__label">Months</span>
                </div>

                <div class="result">
                    <span class="result__value">{{ ageInDays }}</span>
                    <span class="result__label">Days</span>
                </div>

                <div class="result">
                    <span class="result__value">{{ ageInHours }}</span>
                    <span class="result__label">Hours</span>
                </div>
            </div>
            <div class="age-placeholder" v-else>
                <p>Please enter your age to see the calculations.</p>
            </div>
            <button @click="calculateAge">
                Calculate
            </button>
        </div>
    </div>
</template>


<style lang="scss" scoped>

.box {
    width: 400px;
    max-width: 90%;
    margin: 60px auto;
    padding: 35px;
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            margin: 0;
            font-size: 28px;
            color: #222;
        }

        input {
            width: 100%;
            box-sizing: border-box;
            margin-top: 25px;
            padding: 12px 15px;
            border: 1px solid #dcdcdc;
            border-radius: 8px;
            outline: none;
            font-size: 15px;
            transition: 0.2s;

            &:focus {
                border-color: #777;
                box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05);
            }

            &::placeholder {
                color: #999;
            }
        }

        button {
            width: 100%;
            margin-top: 12px;
            padding: 12px;
            border: none;
            border-radius: 8px;
            background-color: #222;
            color: #fff;
            font-size: 15px;
            cursor: pointer;
            transition: 0.2s;

            &:hover {
                background-color: #444;
            }

            &:active {
                transform: scale(0.98);
            }
        }
    }
}

.age-results {
    display: flex;
    gap: 12px;
    width: 100%;
    margin-top: 25px;

    .result {
        flex: 1;
        padding: 16px 8px;
        background-color: #f7f7f7;
        border: 1px solid #eeeeee;
        border-radius: 10px;
        text-align: center;

        &:hover {
            background-color: #f2f2f2;
        }

        &__value {
            display: block;
            font-size: 21px;
            font-weight: bold;
            color: #222;
        }

        &__label {
            display: block;
            margin-top: 6px;
            font-size: 13px;
            color: #777;
        }
    }
}

.age-placeholder {
    width: 100%;
    box-sizing: border-box;
    margin-top: 25px;
    padding: 15px;
    background-color: #f7f7f7;
    border-radius: 10px;
    color: #777;
    font-size: 14px;
    text-align: center;

    p {
        margin: 0;
    }
}

</style>