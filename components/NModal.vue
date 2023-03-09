<template>
  <button @click="isShow = !isShow">Show Modal</button>
  <div id="quiz" class="quiz-modal" :class="{ show: !isShow, w: 0 }">
    <div class="quiz-slide">
      <div class="quiz-modal__close" @click="isShow = !isShow">close</div>
      <swiper
        ref="swiper"
        class="swiper"
        :modules="modules"
        :autoHeight="true"
        :draggable="false"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>
          <div class="quiz-item slide">
            <h2>What is your name?</h2>
            <div class="quiz-body">
              <div class="quiz-inputs">
                <div class="form-control">
                  <input type="text"
                         name="firstname"
                         placeholder="First name"
                         v-bind:value="firstname"
                         v-on:input="inputChange">
                </div>
                <div class="form-control">
                  <input type="text"
                         name="lastname"
                         v-bind:value="lastname"
                         v-on:input="inputChange"
                         placeholder="Last name">
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="quiz-item slide ">
            <h2>{{ firstname }}, where and when were you born?</h2>
            <div class="quiz-body">
              <div class="quiz-inputs">
                <div class="form-control">
                  <label>
                    Date
                    <input
                      type="date"
                      name="date_2"
                      v-bind:value="date_2"
                      v-on:input="inputChange">
                  </label>
                </div>
                <div class="form-control">
                  <input type="text" name="address" placeholder="google maps address search box">
                </div>
                <div class="form-control">
                  <textarea
                    name="additional_info_2"
                    v-bind:value="additional_info_2"
                    v-on:input="inputChange"
                    placeholder="Additional info"></textarea>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="quiz-item slide">
            <h2>Do you still remember where and when you went to school, {{ firstname }}</h2>
            <div class="quiz-body">
              <div class="quiz-inputs">
                <div class="form-control">
                  <label>
                    Date From
                    <input type="date" name="date_from_3">
                  </label>
                </div>
                <div class="form-control">
                  <label>
                    Date to
                    <input type="date" name="date_to_3">
                  </label>
                </div>
                <div class="form-control">
                  <input type="text" name="address" placeholder="google maps address search box">
                </div>
                <div class="form-control">
                  <textarea name="" placeholder="Additional info"></textarea>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="quiz-item slide slide-1">
            <h2>Where and when did you get your first kiss?</h2>
            <div class="quiz-body">
              <div class="quiz-inputs">
                <div class="form-control">
                  <label>
                    Date
                    <input type="date" name="date_4">
                  </label>
                </div>
                <div class="form-control">
                  <input type="text" name="address" placeholder="google maps address search box">
                </div>
                <div class="form-control">
                  <textarea name="" placeholder="Additional info"></textarea>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="quiz-item slide">
            <h2>Do you still remember the places where you lived, {{ firstname }}</h2>
            <div class="quiz-body">
              <div class="quiz-inputs">
                <div class="form-control">
                  <label>
                    Date From
                    <input type="date" name="date_from_5">
                  </label>
                </div>
                <div class="form-control">
                  <label>
                    Date to
                    <input type="date" name="date_to_5">
                  </label>
                </div>
                <div class="form-control">
                  <input type="text" name="address" placeholder="google maps address search box">
                </div>
                <div class="form-control">
                  <textarea name="" placeholder="Additional info"></textarea>
                </div>
                <div class="form-control">
                  <label>add additional entries <span>+</span></label>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="quiz-item slide">
            <h2>{{ firstname }}, which occupations did you hold in life so far?</h2>
            <div class="quiz-body">
              <div class="quiz-inputs">
                <div class="form-control">
                  <label>
                    Date From
                    <input type="date" name="date_from_6">
                  </label>
                </div>
                <div class="form-control">
                  <label>
                    Date to
                    <input type="date" name="date_to_6">
                  </label>
                </div>
                <div class="form-control">
                  <input type="text" name="address" placeholder="google maps address search box">
                </div>
                <div class="form-control">
                  <textarea name="" placeholder="Additional info (e.g. name of job)"></textarea>
                </div>
                <div class="form-control">
                  <label>add additional entries <span>+</span></label>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="quiz-item slide">
            <h2>Now it's time to enter your relationships, {{ firstname }}</h2>
            <div class="quiz-body">
              <div class="quiz-inputs">
                <div class="form-control">
                  <label>
                    Date From
                    <input type="date" name="date_from_7">
                  </label>
                </div>
                <div class="form-control">
                  <label>
                    Date to
                    <input type="date" name="date_to_7">
                  </label>
                </div>
                <div class="form-control">
                  <input type="text" name="address" placeholder="google maps address search box">
                </div>
                <div class="form-control">
                  <textarea name="" placeholder="Additional info (e.g. name of girl/boyfriend)"></textarea>
                </div>
                <div class="form-control">
                  <label>add additional entries <span>+</span></label>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="quiz-item slide">
            <h2>Where you married, {{ firstname }}</h2>
            <div class="quiz-body">
              <div class="quiz-inputs">
                <div class="form-control">
                  <label>
                    Date From
                    <input type="date" name="date_from_8">
                  </label>
                </div>
                <div class="form-control">
                  <label>
                    Date to
                    <input type="date" name="date_to_8">
                  </label>
                </div>
                <div class="form-control">
                  <input type="text" name="address" placeholder="google maps address search box">
                </div>
                <div class="form-control">
                  <textarea name="" placeholder="Additional info (e.g. name of spouse)"></textarea>
                </div>
                <div class="form-control">
                  <label>add additional entries <span>+</span></label>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="quiz-item slide">
            <h2>{{ firstname }}, I am sure you took great vacation trips. Put these on your rainbow life!</h2>
            <div class="quiz-body">
              <div class="quiz-inputs">
                <div class="form-control">
                  <label>
                    Date From
                    <input type="date" name="date_from_9">
                  </label>
                </div>
                <div class="form-control">
                  <label>
                    Date to
                    <input type="date" name="date_to_9">
                  </label>
                </div>
                <div class="form-control">
                  <input type="text" name="address" placeholder="google maps address search box">
                </div>
                <div class="form-control">
                  <textarea name="" placeholder="Additional info (e.g. country of vacation)"></textarea>
                </div>
                <div class="form-control">
                  <label>add additional entries <span>+</span></label>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="quiz-buttons">
        <button @click="swiper_prev()" type="button" class="slick-prev slick-arrow" :class="buttonClassPrev">
          <span>Back</span>
          <svg width="45" height="42" viewBox="0 0 45 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.4998 41.6667L26.3592 38.05L11.1925 23.5834H44.1665V18.4167H11.1925L26.3592 3.95004L22.4998 0.333374L0.833172 21L22.4998 41.6667Z" fill="black"/>
          </svg>
        </button>
        <button @click="swiper_next()" type="button" class="slick-next slick-arrow" :class="buttonClassNext">
          <span>Proceed</span>
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.0002 41.6667L17.3189 38.05L31.7856 23.5834H0.333496V18.4167H31.7856L17.3189 3.95004L21.0002 0.333374L41.6668 21L21.0002 41.6667Z" fill="black"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

/** @TODO: use code standard https://github.com/airbnb/javascript */

export default {
  name: "NModal",
  components: {
    Swiper,
    SwiperSlide,
  },
  browser: {
    fs: false /** зачем это? */
  },
  setup() {
    return { /** зачем этот метод? */
    };
  },
  data: function(){
    return {
      isShow: true,
      length: 0,
      firstname: '',
      lastname: '',
      buttonClassNext:'hide', /** пробелы после двоеточия то есть то нет. должны быть. */
      buttonClassPrev:'show',
      date_2:'',
      additional_info_2:'', /** не camel case. Почему? */
      slideIndex:0,
      arr:['1', '2'],
    }
  },
  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
      this.slideIndex=0; /** пробелы */
      if(swiper.realIndex==0){/** пробелы */
        this.buttonClassPrev='hide';/** пробелы */
      }
    },
    onSlideChange(swiper) {
      /** ПЕРЕПИСАТЬ НА SWITCH CASE!!! */
      this.slideIndex=swiper.realIndex;/** пробелы */
      if(swiper.realIndex!==0){/** пробелы ??? */
        this.buttonClassPrev='show';/** пробелы и тд.. смотри https://github.com/airbnb/javascript */
      }
      if(swiper.realIndex==0){
        if(this.firstname.length !== 0 && this.lastname.length !== 0){
          this.buttonClassNext='show';
        }
        this.buttonClassPrev='hide';
      }
      if(swiper.realIndex==1){
        this.buttonClassNext='hide';
        if(this.date_2.length !== 0 && this.additional_info_2.length !== 0){
          this.buttonClassNext='show';
        }
      }
    },
    swiper_prev: function() {
      this.swiper.slidePrev();
    },
    swiper_next: function() {
      this.swiper.slideNext();
    },
    saveFile: async function() {
      const data = JSON.stringify(this.arr);

      try {
        const fd = await useFetch('/api/data', { method: 'post', body: data });
        console.log('fd', fd);
      } catch(e) { 
        console.error(e, 'Failed to save the file !'); 
      }
    },
    inputChange(event){
      this.saveFile();
      /** ПЕРЕПИСАТЬ НА SWITCH CASE!!! */
      if(event.target.name=='firstname'){
        this.firstname=event.target.value;
      }
      if(event.target.name=='lastname'){
        this.lastname=event.target.value;
      }
      if(event.target.name=='date_2'){
        this.date_2=event.target.value;
      }
      if(event.target.name=='additional_info_2'){
        this.additional_info_2=event.target.value;
      }
      if(this.slideIndex==0) {
        if (this.firstname.length !== 0 && this.lastname.length !== 0) {
          this.buttonClassNext = 'show';
        } else {
          this.buttonClassNext = 'hide';
        }
      }
      if(this.slideIndex==1) {
        if (this.date_2.length !== 0 && this.additional_info_2.length !== 0) {
          this.buttonClassNext = 'show';
        } else {
          this.buttonClassNext = 'hide';
        }
      }
    }
  }
};
</script>

<style scoped>

</style>