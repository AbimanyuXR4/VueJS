<template>

    <div class="wrapper">

        <!-- /#sidebar-wrapper -->
        <nav id="sidebar">
            <div class="sidebar-header">
                <h3>Dashboard</h3>
            </div>

            <ul class="list-unstyled">
                <li><router-link to="/siswas/create">Add New Customer</router-link></li>
                <li><router-link to="/siswas">SISWAAAAAAA</router-link></li>
                <li><a href="#"> Logout</a>
                    <form id="logout-form" action="#" method="POST" style="display: none;">
                        @csrf
                    </form>
                </li>
            </ul>
        </nav>

    
        <!-- Page Content -->
        <div id="page-content-wrapper">
            <nav class="navbar navbar-light bg-light mt-4 border-bottom border-secondary">
                <div class="navbar-brand">Title</div>
                    <div><input class="form-control mr-sm-2" id="searchTerm" placeholder="Search..."></div>
                </nav>
            <div class="container-fluid pt-4">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template> 

<script>
export default {
    name: "App",

    props: ['user'],

    created(){
        window.axios.interceptors.request.use(
            (config)=>{
                if(config.method === "get"){
                    config.url = config.url + '?api_token=' +this.user.api_token;
                }
                else{
                    config.data = {
                        ...config.data,
                        api_token: this.user.api_token
                    };
                }
                return config;
            }
        )
    }
}
</script>