<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#!">Esquina da TI</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a href="/" class="nav-link" >Home</a></li>
                        <li class="nav-item"><a class="nav-link active" href="#!">Sobre Nós</a></li>
                        <li class="nav-item"><a class="nav-link active" href="#!">Contact</a></li>
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Fork me</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Page header with logo and tagline-->
        <header class="py-5 bg-light border-bottom mb-4">
            <div class="container">
                <div class="text-center my-5">
                    <h1 class="fw-bolder">Bem Vindo ao Esquina da TI</h1>
                    <p class="lead mb-0">Sempre trazendo conteudos relevantes para os amantes de tecnologia</p>
                </div>
            </div>
        </header>
</template>

<script>
export default {
    name: 'Navbar',

}
</script>

<style scoped>

</style>
