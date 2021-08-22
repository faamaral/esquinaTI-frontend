<template>
    <!-- Page content-->
        <div class="container">
            <div class="row">
                <!-- Blog entries-->
                <div class="col-lg-8">
                    <!-- Featured blog post-->
                    <div class="card mb-4" v-for="(article, index) in articles" :key="index">
                                
                                <div class="card-body">
                                    <div class="small text-muted">{{article.created}}</div>
                                    <h2 class="card-title h4">{{article.title}}</h2>
                                    <p class="card-text">{{article.abstract}}</p>
                                    
                                    <router-link class="btn btn-primary" v-bind:to="{name:'Article',params: {id: article.id}}">Read more →</router-link>
                                </div>
                            </div>
                    <!-- Nested row for non-featured blog posts-->
                    
                        
                    <!-- Pagination-->
                    <nav aria-label="Pagination">
                        <hr class="my-0" />
                        <ul class="pagination justify-content-center my-4">
                            <li class="page-item disabled"><a class="page-link" href="#" tabindex="-1" aria-disabled="true">Newer</a></li>
                            <li class="page-item active" aria-current="page"><a class="page-link" href="#!">1</a></li>
                            <li class="page-item"><a class="page-link" href="#!">2</a></li>
                            <li class="page-item"><a class="page-link" href="#!">3</a></li>
                            <li class="page-item disabled"><a class="page-link" href="#!">...</a></li>
                            <li class="page-item"><a class="page-link" href="#!">15</a></li>
                            <li class="page-item"><a class="page-link" href="#!">Older</a></li>
                        </ul>
                    </nav>
                </div>
                <!-- Side widgets-->
                <div class="col-lg-4">
                    <!-- Search widget-->
                    <Search/>
                    <!-- Categories widget-->
                    <div class="card mb-4">
                        <Categories/>
                    </div>
                    <!-- Side widget-->
                    <div class="card mb-4">
                        <div class="card-header">Side Widget</div>
                        <div class="card-body">You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!</div>
                    </div>
                </div>
            </div>
        </div>
</template>
<script>
import Search from '../components/Search.vue'
import Categories from '../components/Categories.vue'

import api from '../services/api'

export default {
    name: 'Home',
    data() {
        return {
            articles: []
            }
    },
    components: {
        Search,
        Categories
    },
    mounted() {
        api.get('article/').then(response => {
            this.articles = response.data
        }).catch(error => console.log(error))
    }
}
</script>