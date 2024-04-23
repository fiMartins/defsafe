<script setup lang="ts">
    import { useCatFactsStore } from "~/stores/catFacts";
    const {fetchFacts, getRandomFact } = useCatFactsStore();
    await useAsyncData('catFacts', () => fetchFacts())

    const randomFact = ref<string>('Carregando...')

    const handleFact = () => {
        randomFact.value = getRandomFact()
    }

    onMounted(()=>{
        handleFact()
    })
</script>
<template>
    <div class="grid grid-cols-12 content-center w-full gap-6 p-6 ">
        <div class="col-span-12 md:col-span-4  md:p-4 md:p-10">
            <div class="grid gap-6 ">
                <div class="font-bold text-[24px] text-primary">CAT FACT</div>
                <div class="flex-1 overflow-auto md:text-[20px]">{{ randomFact }}</div>
                <div class="">    
                    <button type="button" class="bg-secondary text-white w-full md:w-fit h-fit px-6 py-3 rounded-lg font-bold shadow-2xl box-shadow-2 flex items-center gap-2" @click="handleFact">
                        <MdiIcon class="text-[2rem]" icon="mdiRefresh"></MdiIcon>
                        GET A RANDOM CAT FACT                         
                    </button>
                </div>

            </div>

        </div>
        <div class="col-span-12 md:col-span-5 ">  
                
                    <img class="object-fill rounded-[20px]"  src="https://placehold.co/700x700/png"/>
                           
    
        </div>
        <div class="col-span-12 md:col-span-2 xl:col-span-3 flex flex-row flex-wrap gap-4 md:flex-col justify-between w-full">
            <img class="rounded-[20px] object-fill max-h-[300px]"  src="https://placehold.co/250x300/png"/>
            <img class="rounded-[20px] object-fill max-h-[350px] " src="https://placehold.co/250x350/png"/>   
        </div>       
    </div>
</template>