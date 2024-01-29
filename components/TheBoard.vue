
<template>
    <div class="__board">
        <h3>The Board</h3>

        <div class="__board__items">
            <div class="item-wrapper" v-for="(item, idx) in items">
                <DraggableItem>
                    <div class="item" :key="idx" :style="{ backgroundColor: item.color }">
                        <div class="item__title">{{ item.title }}</div>
                        <div class="item__content" :style="{
                            backgroundImage: `url(${item.img})`,
                        }" />
                    </div>
                </DraggableItem>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { type DraggableItems } from '~/shared/types'
import Mockup from '~/shared/mockup'


const items = ref<DraggableItems>(Mockup);

</script>

<style lang="scss" scoped>
.__board {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 2rem;
    background-color: #f5f5f5;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
    margin-bottom: 2rem;

    &__items {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;



        .item-wrapper {
            margin: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;

        }
    }
}
</style>

