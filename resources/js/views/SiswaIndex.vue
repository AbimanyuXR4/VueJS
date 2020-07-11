<template>
    <div>
        <ul class="list-group">
            <div v-for="siswa in siswas" :key="siswa.id">
                <router-link :to="'/siswas/ + siswa.id'" class="d-flex border-bottom border-secondary p-2 text-decoration-none">
                    <li class="list-group-item border-0">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="btn rounded border text-white bg-primary align-center" style="height:40px; width:40px"><center>Ap</center></div>
                            </div>
                            <div class="col-md-9">
                                <label class="m-0"> {{siswa.name}} </label><br>
                                <span class="text-muted small text-truncate"> {{siswa.email}} </span>
                            </div>
                        </div>
                    </li>
                </router-link>
            </div>
        </ul>
    </div>
</template>

<script>
export default {
    name: "SiswaIndex",

    mounted(){
        axios.get('api/siswas')
            .then(response =>{
                this.siswas = response.data.data;
            })
            .catch(error => {
                alert('Unable to fetch siswa');
            })
    },

    data: function(){
        return{
            siswas: null
        }
    }
}
</script>