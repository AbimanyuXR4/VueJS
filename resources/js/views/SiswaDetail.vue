<template>
    <div v-if="!loading">
        <div class="row">
            <div class="col-md-4">
                <a href="#" class="btn btn-dark">Back</a>
            </div>
            <div class="col-md-2">
                <a href="#" class="btn btn-warning">Edit</a>
                <a href="#" class="btn btn-danger">Delete</a>
            </div>

        </div>
        <div class="row mt-4">
            <div class="col-md-6">
                <div class="btn rounded border text-white bg-primary align-center" style="height:40px; width:40px"><center>Ap</center></div>
                <h4 class="d-inline"> {{siswa.name}} </h4>          
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <p class="text-uppercase text-secondary font-weight-bold pt-4 mb-2">Email</p>
                <p class="text-info"> {{siswa.email}} </p>
                <p class="text-uppercase text-secondary font-weight-bold pt-4 mb-2">Telephone</p>
                <p class="text-info"> {{siswa.telephone}} </p>
                <p class="text-uppercase text-secondary font-weight-bold pt-4 mb-2">Address</p>
                <p class="text-info"> {{siswa.address}} </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SiswaDetail",

    mounted(){
        axios.get('/api/siswas/' + this.$route.params.id)
            .then(response => {
                this.siswa = response.data.data;
                this.loading = false;
            })
            .catch(error =>{

            })
    },

    data: function(){
            return {
                siswa: null,
                loading : true
            }
        }
}
</script>