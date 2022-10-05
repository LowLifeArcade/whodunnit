<script setup>
    import { ref, onMounted } from 'vue';
   
    const verifying = ref(true);
    onMounted(() => {
        setTimeout(() => {
            verifying.value = false;
            // show.value = true;
        }, 2000);
    })
</script>


<template>
    <div class="v-verified-component">
        <div v-if="!verifying"  class="circle">
            <svg
                width="80"
                height="109"
                viewBox="0 0 331 269"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M115 268L1 136.5L42.5 96L111 184L283.5 1.5L330 53C330 53 298 79.5 224 153C150 226.5 115 268 115 268Z"
                    stroke="none"
                />
            </svg>
        </div>
        <div v-else class="verifying"></div>
        <div class="description">
            <slot />
        </div>
        <div class="thing" :class="{ show }"></div>
    </div>
</template>

<style lang="scss">
    .v-verified-component {
        display: grid;
        place-items: center;

        .verifying {
            position: relative;
            height: 86px;
            width: 86px;
            border-radius: 50%;
            border: 12px solid lightgray;
            background-color: cadetblue;
            animation: swirl 1.2s linear infinite;
            transition: ease;
            box-shadow: 0 0 3px rgba(0,0,0,.65),
            0 0 6px rgba(0,0,0,.25),
            0 0 9px rgba(0,0,0,.15),
            inset 0 0 10px rgba(0,0,0,.6), 
            inset 0 0 5px rgba(0,0,0,2.6);
        }
        
        .verifying::after {
            position: absolute;
            content: '';
            background: #fff;
            top: 1px;
            left: 1px;
            width: 13px;
            height: 13px;
            border-radius: 50%;
            box-shadow: 0 0 10px rgba(251, 242, 242, 0.182);
        }

        .circle {
            height: 100px;
            width: 100px;
            border-radius: 50%;
            border: 5px solid green;
            background-color: lightgreen;
            animation-name: fadein;
            animation-duration: 2s;
            transition: ease;
            box-shadow: inset 0 0 10px rgba(0,0,0,.6), inset 0 0 5px rgba(0,0,0,2.6);
        }
        .description {
            padding-top: 20px;
        }
        svg {
            animation-name: slidein;
            animation-duration: 1s;
        }
        @keyframes fadein {
            from {
                background-color: darken(lightgreen, 50%);
                border: 5px solid lightgray;
            }
            to {
                background-color: lightgreen;
            }
        }
        @keyframes swirl {
            0% {
                background-color: darken(gray, 20%);
                transform: rotate(0deg);
            }
            25% {
                background-color: darken(cadetblue, 20%);
            }
            45% {
                background-color: darken(lightyellow, 80%);
            }
            70% {
                background-color: darken(firebrick, 20%);
            }
            100% {
                background-color: darken(gray, 20%);
                transform: rotate(359deg);
            }
        }
        @keyframes slidein {
            from {
                transform: rotate(-30deg);
                opacity: 0.01;
            }

            to {
                transform: rotate(00deg);
                opacity: 1;
            }
        }
    }
</style>
