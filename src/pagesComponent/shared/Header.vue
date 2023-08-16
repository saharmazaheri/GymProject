<template>
  <header>
    <!-- Top Bar Start -->
    <div class="top-bar d-none d-md-block">
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
    </div>
    <!-- Top Bar End -->

    <!-- Nav Bar Start -->
    <div class="navbar navbar-expand-lg bg-dark navbar-dark">
      <div class="container-fluid">
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
/**********************************/
/********** Top Bar CSS ***********/
/**********************************/
.top-bar {
  position: relative;
  height: 35px;
  background: #343148;
}

.top-bar .top-bar-left {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.top-bar .top-bar-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.top-bar .text {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 35px;
  padding: 0 10px;
  text-align: center;
  border-left: 1px solid rgba(255, 255, 255, 0.15);
}

.top-bar .text:last-child {
  border-right: 1px solid rgba(255, 255, 255, 0.15);
}

.top-bar .text i {
  font-size: 13px;
  color: #ffffff;
  margin-right: 5px;
}

.top-bar .text h2 {
  color: #eeeeee;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 1px;
  margin: 0;
}

.top-bar .text p {
  color: #eeeeee;
  font-size: 14px;
  font-weight: 400;
  margin: 0 0 0 5px;
}

.top-bar .social {
  display: flex;
  height: 35px;
  font-size: 0;
  justify-content: flex-end;
}

.top-bar .social a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 100%;
  font-size: 16px;
  color: #ffffff;
  border-right: 1px solid rgba(255, 255, 255, 0.15);
}

.top-bar .social a:first-child {
  border-left: 1px solid rgba(255, 255, 255, 0.15);
}

.top-bar .social a:hover {
  color: #092a49;
  background: #ffffff;
}

@media (min-width: 992px) {
  .top-bar {
    padding: 0 60px;
  }
}

/**********************************/
/*********** Nav Bar CSS **********/
/**********************************/
.navbar {
  position: relative;
  transition: 0.5s;
  z-index: 999;
}

.navbar.nav-sticky {
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.navbar .navbar-brand {
  margin: 0;
  color: #ffffff;
  font-size: 45px;
  line-height: 0px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: 0.5s;
}

.navbar .navbar-brand span {
  color: #343148;
  text-transform: lowercase;
  transition: 0.5s;
}

.navbar.nav-sticky .navbar-brand span {
  color: #ffffff;
}

.navbar .navbar-brand img {
  max-width: 100%;
  max-height: 40px;
}

.navbar-dark .navbar-nav .nav-link,
.navbar-dark .navbar-nav .nav-link:focus,
.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .nav-link.active {
  padding: 10px 10px 8px 10px;
  color: #ffffff;
}

.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .nav-link.active {
  background: rgba(256, 256, 256, 0.1);
  transition: none;
}

.navbar .dropdown-menu {
  margin-top: 0;
  border: 0;
  border-radius: 0;
  background: #f8f9fa;
}

@media (min-width: 992px) {
  .navbar {
    position: absolute;
    width: 100%;
    top: 35px;
    padding: 20px 60px;
    background: rgba(0, 0, 0, 0.1) !important;
    z-index: 9;
  }

  .navbar.nav-sticky {
    padding: 10px 60px;
    background: #343148 !important;
  }

  .navbar a.nav-link {
    padding: 8px 15px;
    font-size: 14px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
}

@media (max-width: 991.98px) {
  .navbar {
    padding: 15px;
    background: #343148 !important;
  }

  .navbar .navbar-brand span {
    color: #ffffff;
  }

  .navbar a.nav-link {
    padding: 5px;
  }

  .navbar .dropdown-menu {
    box-shadow: none;
  }
}
</style>
