<template>
    <div>
        <div id="months" class="mb-4 mt-2">
            <label class="mx-1" for="">Enter the year : </label>
            <input type="text" value="" style="width: 5rem; height: 1.5rem;" @keydown.enter="getYear($event.target.value)">
        </div>

    </div>
</template>

<script setup>
    import {defineEmits} from 'vue';

    const emit = defineEmits(["yearOfMonths"])

    //año de los meses
    const getYear = (year) => {
        emit ("yearOfMonths", year)
        console.log("YEAR en el hijo",year)
    }

</script>

<style lang="scss" scoped>

</style>