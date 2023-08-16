<template>
  <div>
    <!-- Page Header Start -->
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>دیدگاه کاربران</h2>
          </div>
          <div class="col-12">
            <router-link to="/">خانه</router-link>
            <router-link to="/UserOpinion">دیدگاه کاربران</router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Page Header End -->

    <!-- Single Post Start-->

    <div class="single">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="single-comment wow fadeInUp">
              <h2 class="text-right">دیدگاه‌ها</h2>
              <ul class="comment-list text-right">
                <li class="comment-item">
                  <div class="comment-body">
                    <div class="comment-img">
                      <img src="img/user.jpg" />
                    </div>
                    <div class="comment-text tect-right">
                      <h3><a href="">مهسا</a></h3>
                      <span>23 Apr 2023 at 10:15am</span>
                      <p>.من از تنوع و کیفیت کافی شاپ راضی بودم</p>
                      <a class="btn" href="">پاسخ</a>
                    </div>
                  </div>
                </li>
                <hr color="black" />
                <li class="comment-item">
                  <div class="comment-body">
                    <div class="comment-img">
                      <img src="img/user.jpg" />
                    </div>
                    <div class="comment-text">
                      <h3><a href="">مریم</a></h3>
                      <p><span>10 Mar 2023 at 17:30pm</span></p>
                      <p>.مربیان برنامه‌ی ورزشی و غذایی فوق‌العاده‌ای دارند</p>
                      <a class="btn" href="">پاسخ</a>
                    </div>
                  </div>
                  <hr color="black" />
                  <ul class="comment-child">
                    <li class="comment-item">
                      <div class="comment-body">
                        <div class="comment-img">
                          <img src="img/user.jpg" />
                        </div>
                        <div class="comment-text">
                          <h3><a href="">مه‌گل</a></h3>
                          <p><span>01 May 2022 at 12:00pm</span></p>
                          <p>
                            .من یک ساله از خدمات این مجموعه استفاده می‌کنم و
                            بسیار راضی هستم
                          </p>
                          <a class="btn" href="">پاسخ</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
              <br />
              <a class="cbtn" href=""> ادامه‌ی دیدگاه‌ها</a>
            </div>
            <br />
            <div class="comment-form wow fadeInUp text-right">
              <h2>.دیدگاه خود را ثبت کنید</h2>
              <form>
                <div class="form-group">
                  <label for="name">*نام</label>
                  <input type="text" class="form-control" id="name" />
                </div>
                <div class="form-group">
                  <label for="email">*ایمیل</label>
                  <input type="email" class="form-control" id="email" />
                </div>
                <div class="form-group">
                  <label for="message">*پیغام</label>
                  <textarea
                    id="message"
                    cols="30"
                    rows="5"
                    class="form-control"
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
  </div>
</template>
