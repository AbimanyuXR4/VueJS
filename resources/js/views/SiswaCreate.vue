<template>
    <SiswaForm @submitted="create" :errors="errors"></SiswaForm>
</template>

<script>

import SiswaForm from './SiswaForm.vue';
export default {
    name: "SiswaCreate",

    components: {SiswaForm},


    data: function(){
        return{
            errors: null
        }
    },

    methods: {
        create (data){
            axios.post('/api/siswas', data)
            .then(result =>{
                
            })
            .catch(error =>{
                this.errors = error.response.data.errors;
            })
        }
    }
}
</script>