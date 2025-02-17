<script >
import axios from 'axios'
import{ ref } from 'vue'
export default {
    setup () {
        const quote = ref( '')
        axios.get('https://api.kanye.rest/')
        .then( response =>{
            // handle response
            quote.value=response.data.quote

        })
        return{
            quote
        }
    }
}
</script>
<template>
<div>
    <i> "{{quote}}"</i>
    <p> Kanye West</p>
</div>
</template>
<style>

</style>