<template>
  <div id="app"><hr>
    <div class="container">
      <div class="row align-items-center">
        <div class="col">
          <div class="my-2" id="nav">
            <router-link to="/" class="btn"><i class="fa fa-home"></i> Dova</router-link>
            <router-link to="/poems" class="btn"><i class="fa fa-th-list"></i> Poems</router-link>
          </div>
        </div>
      </div><!--End row-->
    </div><!--End 1st container--><hr>
    <router-view/>
  </div>
</template>

<script>
  import './assets/css/main.css';

  export default{
  }
</script>
