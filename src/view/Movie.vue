<template>
    <div id="movie" class="myCcenter" >
        <!-- <h1 class="center">xxxx movie</h1> -->
        <div class="content">
            <Row>
                <Col class="img_content" span="4" v-for="(item, index) in onSale.movies" :key="index">
                    <img :src="item.img" alt="">
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    export default {
        data() {
            return {};
        },
        props: {},
        created() {
            this.getData();
        },
        watch: {
            onSale(val, oldVal) {
                console.log('onSale')
                console.log(val)
            },
            locationMovies(val, oldVal) {
                console.log('locationMovies')
                console.log(val)
            },
            movieDetail(val, oldVal) {
                console.log('movieDetail')
                console.log(val)
            },
        },
        computed: {
            ...mapGetters({
                onSale: 'onSale',
                locationMovies: 'locationMovies',
                movieDetail: 'movieDetail',
            })
        },
        methods: {
            getData() {
                this.$store.dispatch("getOnSale", {
                    locationId: 290,
                    count: 12
                });
                this.$store.dispatch("getLocationMovies", {
                    locationId: 290
                });
                this.$store.dispatch("getMovieDetail", {
                    locationId: 290,
                    movieId: 246986,
                });
            }
        }
    };
</script>

<style lang="less" scoped>
    .content{
        width: 1100px;
        overflow: hidden;
        display: inline-block;
    }
    .img_content{
        padding: 6px;
        img{
            width: 100%;
        }
    }
</style>

