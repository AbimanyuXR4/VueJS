<template>
    <form @submit.prevent="handleSubmit">
        <div class="form-group row">
            <label for="Name" class="col-md-1 col-form-label">Name</label>
            <div class="col-md-6">
                <input type="text" id="name" :class="errorClass('name')" placeholder="input name here" v-model="name" @input="clearError('name')">
                <div class="invalid-feedback">
                    <p v-text="errorValue('name')"></p>
                </div>
            </div>
        </div>
        <div class="form-group row">
            <label for="Email" class="col-md-1 col-form-label">Email</label>
            <div class="col-md-6">
                <input type="text" id="email" :class="errorClass('email')" placeholder="input email here" v-model="email" @input="clearError('email')">
                <div class="invalid-feedback">
                    <p v-text="errorValue('email')"></p>
                </div>
            </div>
        </div>
        <div class="form-group row">
            <label for="Telephone" class="col-md-1 col-form-label">Telephone</label>
            <div class="col-md-6">
                <input type="text" id="telephone" :class="errorClass('telephone')" placeholder="input telephone here" v-model="telephone" @input="clearError('telephone')">
                <div class="invalid-feedback">
                    <p v-text="errorValue('telephone')"></p>
                </div>
            </div>
        </div>
        <div class="form-group row">
            <label for="Address" class="col-md-1 col-form-label">Address</label>
            <div class="col-md-6">
                <textarea name="address" id="" :class="errorClass('address')" cols="30" rows="4" placeholder="Input address here" v-model="address" @input="clearError('address')"></textarea>
                <div class="invalid-feedback">
                    <p v-text="errorValue('address')"></p>
                </div>
            </div>
        </div>
        <div class="form-group row">
            <div class="col-md-7">
                <button type="submit" class="btn btn-primary">Save</button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    nama: "SiswaForm",

    props: ['errors'],

    data(){
        return{
            name: '',
            email: '',
            telephone: '',
            address: '' 
        }
    },
    methods: {
        handleSubmit(){
            this.$emit('submitted', {
                name: this.name,
                email: this.email,
                telephone: this.telephone,
                address: this.address,
            })
        },
        errorValue(column){
            if(this.errors && this.errors[column]){
                return this.errors[column][0];
            }
        },
        errorClass(column){
            if(this.errors && this.errors[column]){
                return [
                    'form-control',
                    'is-invalid'
                ]
            }
            else{
                return 'form-control'
            }
        },
        clearError(column){
            if(this.errors && this.errors[column]){
                this.errors[column] = null;
            }
        },

    }
    
}
</script>