<template>
  <header>
    <!-- Top Bar Start -->
    <!-- <div class="top-bar d-none d-md-block">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8">
            <div class="top-bar-left">
              <div class="text">
                <i class="far fa-clock"></i>
                <h2>8:00 - 9:00</h2>
                <p>شنبه - پنجشنبه</p>
              </div>
              <div class="text">
                <i class="fa fa-phone-alt"></i>
                <h2>+123 456 7890</h2>
                <p>For Appointment</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="top-bar-right">
              <div class="social">
                <a href=""><i class="fab fa-twitter"></i></a>
                <a href=""><i class="fab fa-facebook-f"></i></a>
                <a href=""><i class="fab fa-linkedin-in"></i></a>
                <a href=""><i class="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- Top Bar End -->

    <!-- Nav Bar Start -->
    <div
      style="background-color: #343148 !important"
      class="headerP navbar navbar-expand-lg bg-dark navbar-dark d-none d-md-block font-p"
    >
      <div class="container-fluid" style="padding: 0px 0px">
        <router-link to="/login" active-class="active" class="nav-item nav-link"
          >ورود <i class="fa fa-lock"></i
        ></router-link>
        <router-link
          to="/register"
          active-class="active"
          class="nav-item nav-link"
          >ثبت نام <i class="fa fa-user"></i
        ></router-link>
        <button
          type="button"
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-between"
          id="navbarCollapse"
        >
          <div class="navbar-nav ml-auto">
            <router-link
              to="/"
              active-class="active"
              exact
              class="nav-item nav-link"
              >خانه</router-link
            >
            <router-link
              to="/about-us"
              active-class="active"
              class="nav-item nav-link"
              >درباره‌ما</router-link
            >
            <router-link
              to="/user-opinion"
              active-class="active"
              class="nav-item nav-link"
              >دیدگاه‌ها</router-link
            >
            <router-link
              to="/courses"
              active-class="active"
              class="nav-item nav-link"
              >دوره‌ها</router-link
            >
            <router-link
              to="/trainers"
              active-class="active"
              class="nav-item nav-link"
              >مربی‌ها</router-link
            >
            <router-link
              to="/resume"
              active-class="active"
              class="nav-item nav-link"
              >رزومه</router-link
            >
            <router-link
              to="/coffee-shop"
              active-class="active"
              class="nav-item nav-link"
              >کافی شاپ</router-link
            >
            <router-link
              to="/CoffeeUserShopCart"
              active-class="active"
              class="nav-item nav-link"
              >سبد خرید</router-link
            >

            <a href="" class="nav-item nav-link">Pose</a>
            <div class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                >Blog</a
              >
              <div class="dropdown-menu">
                <a href="" class="dropdown-item">Blog Grid</a>
                <a href="" class="dropdown-item">Blog Detail</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Nav Bar End -->
  </header>
</template>
<style>
.headerP {
  position: fixed !important;
  top: 0 !important;
  right: 0 !important;
  left: 0 !important;
  z-index: 1030 !important;
  height: 70px;
}
</style>
