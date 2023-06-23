<template>
    <nav class="flex justify-center items-center space-x-2">
        <div v-if="props.previous" class="text-gray-500 hover:text-primary p-4 inline-flex items-center gap-2 rounded-md" href="#">
            <span aria-hidden="true">«</span>
            <span class="sr-only">Previous</span>
        </div>

        <p 
            v-for="page in getPageCount()"
            :class="props.currentPage == page ? 'active-page' : 'inactive-page' " 
            aria-current="page"> {{ page }} </p>
        
        <div v-if="props.next" class="text-gray-500 hover:text-primary p-4 inline-flex items-center gap-2 rounded-md" href="#">
            <span class="sr-only">Next</span>
            <span aria-hidden="true">»</span>
        </div>
    </nav>
</template>

<script setup lang="ts">

const props = defineProps({
    currentPage: Number,
    count: Number,
    numberPerPage: Number,
    next: String,
    previous: String
})

const getPageCount = () => {

    if (props.numberPerPage && props.count){
        return Math.ceil(props.count / props.numberPerPage)  
    } 

    return 0
    
}

</script>

<style scoped>
    .active-page{
        @apply
        w-10 h-10 bg-primary text-white p-4 inline-flex items-center text-sm font-medium rounded-full
    }

    .inactive-page{
        @apply
        w-10 h-10 text-gray-500 hover:text-primary p-4 inline-flex items-center text-sm font-medium rounded-full cursor-pointer
    }
</style>