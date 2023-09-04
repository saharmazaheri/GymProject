<template>
  <header>
    <!-- Nav Bar Start -->
    <div
      style="background-color: #343148 !important"
      class="headerP navbar navbar-expand-lg bg-dark navbar-dark d-none d-md-block font-p"
    >
      <div class="container-fluid navbar-nav ml-auto" style="padding: 0px 0px">
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

        <div class="collapse navbar-collapse justify-content-between">
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
              >دیدگاه کاربران</router-link
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
              >مربیان</router-link
            >
            <router-link
              to="/coffee-shop"
              active-class="active"
              class="nav-item nav-link"
              >کافی شاپ</router-link
            >
            <router-link
              to="/resume"
              active-class="active"
              class="nav-item nav-link"
              >رزومه</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <!-- Nav Bar End -->
  </header>
</template>
