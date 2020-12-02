<template>
  <div class="container">
    <div class="row" style="text-align:start!important">
      <div class="col-4 col-md-3 col-xl-3 bg-da text-dark py-3 sticky-top" style="max-height:100vh; overflow-y:scroll">
        <h4 @click="show_fh = !show_fh" :aria-expanded="show_fh ? 'true' : 'false'" class="list-group-item my-1 text-truncate">Faith</h4>
        <ul class="list-group ml-3 h6">
          <li v-for="poem in poems" v-if="poem.chapter==1" @click="g8_poem(poem)" class="list-group-item text-truncate p-2 border-dark">
            {{poem.heading}}
          </li>
        </ul>
        <h4 @click="show_he = !show_he" :aria-expanded="show_he ? 'true' : 'false'" class="list-group-item my-1 text-truncate">Hope</h4>
        <ul class="list-group ml-3 h6">
          <li v-for="poem in poems" v-if="poem.chapter==2" @click="g8_poem(poem)" class="list-group-item text-truncate p-2 border-dark">
            {{poem.heading}}
          </li>
        </ul>
        <h4 @click="show_le = !show_le" :aria-expanded="show_le ? 'true' : 'false'" class="list-group-item my-1 text-truncate">Love</h4>
        <ul class="list-group ml-3 h6">
          <li v-for="poem in poems" v-if="poem.chapter==3" @click="g8_poem(poem)" class="list-group-item text-truncate p-2 border-dark">
            {{poem.heading}}
          </li>
        </ul>
        <h4 @click="show_fy = !show_fy" :aria-expanded="show_fy ? 'true' : 'false'" class="list-group-item my-1 text-truncate">Folly</h4>
        <ul class="list-group ml-3 h6">
          <li v-for="poem in poems" v-if="poem.chapter==4" @click="g8_poem(poem)" class="list-group-item text-truncate p-2 border-dark">
            {{poem.heading}}
          </li><!--add :key="poem._id" on each 'v-for' if fetching dynamic poems-->
        </ul>
      </div>
      <div class="col-8 col-md-9 col-xl-9" id="v-poems">
        <div v-if="show_fh" class="card mb-3">
          <h3 class="card-header">My Faith</h3>
          <h6 class="card-body">
            This chapter deals with my birth, my identity and my upbringing; my faith and my path as they chose me.<br><br>

            Perhaps, my greatest and most practical lesson of faith is the one I got from my father, one summer holiday when I was just a teenager. He had compelled me to go to his Mvurwi farm with him that season, and when he spoke to me about it I knew it was hard work ahead, and normally there was no reprieve unless after all his crop was in the earth, for it was planting season, and that took at least three weeks at best. I made it known to him that I had to go for auditions for a local film production in a fortnight. I had begged him not to go with him until after I had auditioned but he insisted, I had to give in and off we went, though I was not in a very good mood.<br><br>

            The auditions where to be held one Saturday noon at Pockets Hill Studios in Harare. As the second week was drawing to a close, I expected to hear from him, but no communication came, surely he had forgotten about it, and he cared less, as long as his crop was in the ground. I was penniless to make matters worse. That Friday after my daily chores were over, calling on a man’s best friend, I went to the naartjies plantations and slept there, watching helplessly as my opportunity to make a name for myself go by, a once in a lifetime thing, for so I thought.<br><br>

            I returned home at sunset, very bitter and boiling inside me, my dad had an attitude and was more often than not unpredictable. I had a little faith though, that he would not let me down, but as each hour slowly passed, so did that faith and my hope grow more faint and weak, until they were at zero. At eleven that night I must have gone to sleep, I can’t remember the actual time, but the seed of my hate for him had been planted, had grown and I’m sure were to bear fruit with the coming of dawn.<br>
            When I went to sleep, my backpack I had before stuffed with my things I had now cleared it of everything. About the time when I was just about to fuck a queen in my dreams, it was around four in the morning I remember, I was awoken by the sound of a vehicle parking outside the bedroom I shared with my younger brother, I got up to inspect, as duty calls on the man of the house. It was my old man; he had come and had driven some 80 miles that night, for me. He only had a few moments with mom before he asked me, ‘wakagadzirira here?’ and we were off to Harare.<br><br>

            By eight we were in the city, and I had plenty of time to prepare myself for the auditions. I was not successful but I had learnt my lesson, never to lose hope and to have a little faith, in the right thing and against all odds. If my father who is not perfect, knew how to be good to me, how much more is my Father in heaven and is holy, will he be good to me?<br><br>

            I regretted it, that I had lost my faith, my hope and my love for him, that was my folly, but one thing for sure folks, the lesson had been learnt.
          </h6>
        </div>
        <div v-if="show_he" class="card mb-3">
          <h3 class="card-header">My Hope</h3>
          <h6 class="card-body">
            ‘They say every generation, blames the one before,’ I hope that will end with us and when we are gone, the coming generation will appreciate our efforts for peace and love to reign supreme, and for harmony in the universe from all the spheres of life.<br><br>

            I was sad and thrilled at the same time, when I watched Death at a Funeral, 2007 in the summer of 2011, when I heard the recital of a poem by the son of the deceased beginning,<br><br>
              
              <p class="ml-5">
                ‘My Father was an exceptional man…’
              </p>

            What! That is a line from my poem, but how come? I guess great minds think alike.
          </h6>
        </div>
        <div v-if="show_le" class="card mb-3">
          <h3 class="card-header">My Love</h3>
          <h6 class="card-body">
            Though I have love for my siblings, my parents, my friends, my nation, my Empress and my Father, that love did me less good, it is the love I received, that made me; 
            That’s a heavy debt I have on humanity.
          </h6>
        </div>
        <div v-if="show_fy" class="card mb-3">
          <h3 class="card-header">My Folly</h3>
          <h6 class="card-body">
            Intentionally or unintentionally, I made mistakes in my life, some of which were humorous, or all where humorous ‘cause that's the side of life I dwell on, the lighter and brighter side. When I had experiences or made observations and imaginations, I interpreted the events in a poetic way, to remember them for what they were and to tell the story over and over again with no alteration to the fine details, somebody said and I bought it that,<br><br>

              <p class="ml-5">
                ‘To those that understand, life is just as it is;<br>
                To those that don’t understand, life is just as it is.’
              </p>
          </h6>
        </div>
        <div v-if="poem.heading" class="card mb-3">
          <h3 class="card-header">{{poem.heading}}</h3>
          <h5 class="card-body">
            <h4 v-if="poem.subheading">{{poem.subheading}}</h4>
            <pre class="text-da"><b>{{poem.body}}</b></pre><hr>
            <i class="btn-group border-da rounded disabled">
              <i class="fa fa-heart-o btn btn-sm text-da px-1" id="likes"><sup v-if="poem.likes.length"><b> {{poem.likes.length}}</b></sup></i>
              <i class="fa fa-comments-o btn btn-sm text-da px-1"><sup v-if="poem.comments.length"><b> {{poem.comments.length}}</b></sup></i>
              <!--<i class="fa fa-shopping-cart btn btn-sm bg-da text-light"></i>-->
            </i>
          </h5>
        </div><!--End poem-card-->
        <div class="m-2">
          <img v-if="!show_fh && !show_he && !show_le && !show_fy && !poem.heading" src="../assets/img/COVER.png" alt="DOVA, Front Book Cover" class="img-thumbnail">
        </div>
      </div><!--End col-->
    </div><!--End row-->
  </div><!--End container-->
</template>

<script>
  import axios from 'axios';
  import poems_static from '../assets/js/poems';

  export default {
    data(){
      return{
        poems: [],
        valid: true,
        comm_rating: '',
        comm_txt: '',
        show_fh: false,
        show_he: false,
        show_le: false,
        show_fy: false,
        show_cs: false,
        show_dc: false
      };
    },
    computed: {
      poem() {
        return this.$store.getters.fetchPoem;
      }
    },
    mounted(){
      this.fetchPoems();//if offline & store.poems == true fetch those poems 081120
    },
    methods: {
      fetchPoems(){
        return axios({
          method: 'get',
          url: '../../api/poems',//process.env.VUE_APP_BASE_URL+
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((res)=>{
          this.poems = res.data.poems;
          //this.$store.commit('POEMS', this.poems);
          if(!res.data.poems){
            this.poems = poems_static;
            console.log('WHAT THE FUCK!!!',res.data);
          }
        })
        .catch((err)=>{
          console.log('USING STATIC DATA! Because of the following error',err);
          this.poems = poems_static;
        });/**/
      },
      g8_poem(poem){
        if(poem._id == this.poem._id)return;
        this.$store.commit('POEM', poem);
        this.show_fh = false;
        this.show_he = false;
        this.show_le = false;
        this.show_fy = false;
      }
    }
  }
</script>
