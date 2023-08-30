<template>
  <div class="font-p">
    <Headerapp />
    <!-- Page Header Start -->
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>دیدگاه کاربران</h2>
          </div>
          <div class="col-12">
            <router-link to="/">خانه</router-link>
            <router-link to="/user-opinion">دیدگاه کاربران</router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Header End -->

    <!-- Single Post Start-->

    <div class="single" dir="rtl">
      <div class="container">
        <div class="row">
          <div class="col-md-12" style="display: flex">
            <div
              class="single-comment wow fadeInUp"
              style="border: 1px #343148 solid"
            >
              <h4 class="headerSingle">دیدگاه‌ها</h4>
              <ul class="comment-list text-right">
                <li class="comment-item opinions-p">
                  <div class="comment-body">
                    <div class="comment-img">
                      <img src="../assets/img/opinions/user.png" />
                    </div>
                    <div class="comment-text text-right">
                      <h3>علی</h3>
                      <span> 10:15 1402/01/29</span>
                      <p>
                        سلام و خسته نباشید خدمت تمامی کارکنان مجموعه، من از تمام
                        بخش‌ها راضی بودم واقعاعالیه
                      </p>
                      <button class="btn">پاسخ</button>
                    </div>
                  </div>
                  <hr class="hr-P" style="margin-right: 80px" />
                  <ul class="comment-child">
                    <li class="comment-item">
                      <div class="comment-body">
                        <div class="comment-img">
                          <img src="../assets/img/opinions/support.png" />
                        </div>
                        <div class="comment-textP">
                          <h3>پاسخ پشتیبان به علی</h3>
                          <p><span>12:00 1402/02/01</span></p>
                          <p>
                            دورد به شما کاربر گرامی باعث افتخار ماست که میزبان
                            خوبی برای شما بوده‌ایم❤
                          </p>
                          <a class="btn" href="">پاسخ</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <hr class="hr-P" />
                <li class="comment-item opinions-p">
                  <div class="comment-body">
                    <div class="comment-img">
                      <img src="../assets/img/opinions/user.png" />
                    </div>
                    <div class="comment-text text-right">
                      <h3>مهسا</h3>
                      <span> 21:35 1402/03/05</span>
                      <p>
                        سلام و وقت بخیر، ای کاش برای بانوان سانس بعدازظهر هم
                        اضافه می‌کردید.
                      </p>
                      <button class="btn">پاسخ</button>
                    </div>
                  </div>
                  <hr class="hr-P" style="margin-right: 80px" />
                  <ul class="comment-child">
                    <li class="comment-item">
                      <div class="comment-body">
                        <div class="comment-img">
                          <img src="../assets/img/opinions/support.png" />
                        </div>
                        <div class="comment-textP">
                          <h3>پاسخ پشتیبان به مهسا</h3>
                          <p><span>13:01 1402/03/06</span></p>
                          <p>
                            سلام متاسفانه تایم‌ها پر هستند ولی سعیمان را خواهیم
                            کرد.
                          </p>
                          <a class="btn" href="">پاسخ</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <hr class="hr-P" />
                <li class="comment-item opinions-p">
                  <div class="comment-body">
                    <div class="comment-img">
                      <img src="../assets/img/opinions/user.png" />
                    </div>
                    <div class="comment-text text-right">
                      <h3>سارا</h3>
                      <span> 10:30 1402/05/25</span>
                      <p>
                        سلام و وقت بخیر خدمت شما، کافی شاپ چه ساعاتی باز است؟
                      </p>
                      <button class="btn">پاسخ</button>
                    </div>
                  </div>
                  <hr class="hr-P" style="margin-right: 80px" />
                  <ul class="comment-child">
                    <li class="comment-item">
                      <div class="comment-body">
                        <div class="comment-img">
                          <img src="../assets/img/opinions/support.png" />
                        </div>
                        <div class="comment-textP">
                          <h3>پاسخ پشتیبان به سارا</h3>
                          <p><span>14:00 1402/05/26</span></p>
                          <p>
                            سلام از 9 صبح تا 12 ظهر و از 17 بعداز ظهر تا 20 شب.
                          </p>
                          <a class="btn" href="">پاسخ</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
              <br />
            </div>
            <br />
            <div class="comment-form wow fadeInUp text-right">
              <h4 class="headerSingle">دیدگاه خود را ثبت کنید</h4>
              <form>
                <div class="form-group">
                  <label for="name">*نام</label>
                  <input type="text" class="form-control formP" />
                </div>
                <div class="form-group">
                  <label for="email">*ایمیل</label>
                  <input type="email" class="form-control formP" />
                </div>
                <div class="form-group">
                  <label>*پیغام</label>
                  <textarea
                    cols="30"
                    rows="5"
                    class="form-control formP"
                  ></textarea>
                </div>
                <div class="form-group text-left">
                  <input type="submit" value="ارسال دیدگاه" class="btn" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Single Post End-->
    <Footerapp />
  </div>
</template>

<script>
import Header from './shared/Header.vue'
import Footer from './shared/Footer.vue'

export default {
  components: {
    Headerapp: Header,
    Footerapp: Footer,
  },
}
</script>
