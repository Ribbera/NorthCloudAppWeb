<template>
    <div class="content">
        <!-- Navbar -->
        <nav class="theme-navbar" id="theme-navbar">
            <!-- notices-bar -->
            <div class="notices-bar" id="notices-bar"></div>
            <div class="container-fluid">
                <!-- nav-top -->
                <div class="nav-top d-flex align-items-center">
                    <!-- menu-icon -->
                    <div class="menu-icon" id="open-links-btn">
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAEAQAAACm67yuAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQflChoCMg+BAhJFAAAEtUlEQVR42u3bP0okTQDG4bda0EAPMbF/z6CDgV5jBHPvIYooGOg1VhgHz2CgxqJHGE2Utr6g3WVZvmhZbXZ9nrA7+SVVXd1dlQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwN+n/Hqhvq2spOzsJMNh6mCQMj/fdyTwm+rzc8r9fTKZpJ6dlebm5ufbPyaA+jY3l3JwkOzuJk3Tdzfwp7VtcnqaurdXmpeX5H0C6Ab/xUWyvt53IvDB6tVVsrVVmpeX7klfDg8NfvgiysZGyv5+kpTunf/62rIfvpK2TdbWmu6Dn8EPX8vMTOpoVGq9vU0WF/vOAT7bzU2pdTpNFhb6TgE+23TaJLX2nQH0odYmeXzsOwPow8NDk1xe9p0B9KCOx6W+LS93vwFnZvruAT5L2yarq023N/j0tO8c4DOdnJRyd/e+FXh2Nvn2LWU47DsL+GB1Mkm2t0vz+tokSXcwYHs7OT7ulgbAv6dtk6Oj74M/+b/jwHVpKXU0StncTAYDewTgb/b0lNzfp47HKefnpdzd9V0EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAv6f8eqG+rayk7Owkw2HqYJAyP993JPCb6vNzyv19Mpmknp2V5ubm59s/JoD6NjeXcnCQ7O4mTdN3N/CntW1yepq6t1eal5fkfQLoBv/FRbK+3nci8MHq1VWytVWal5fuSV8ODw1++CLKxkbK/n6SlO6d//rash++krZN1taa7oOfwQ9fy8xM6mhUar29TRYX+84BPtvNTal1Ok0WFvpOAT7bdNoktfadAfSh1iZ5fOw7A+jDw0OTXF72nQH0oI7Hpb4tL3e/AWdm+u4BPkvbJqurTbc3+PS07xzgM52clHJ3974VeHY2+fYtZTjsOwv4YHUySba3S/P62iRJdzBgezs5Pu6WBsC/p22To6Pvgz/5v+PAdWkpdTRK2dxMBgN7BOBv9vSU3N+njscp5+el3N31XQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMC/p/x6ob6trKTs7CTDYepgkDI/33ck8Jvq83PK/X0ymaSenZXm5ubn2z8mgPo2N5dycJDs7iZN03c38Ke1bXJ6mrq3V5qXl+R9AugG/8VFsr7edyLwwerVVbK1VZqXl+5JXw4PDX74IsrGRsr+fpKU7p3/+tqyH76Stk3W1prug5/BD1/LzEzqaFRqvb1NFhf7zgE+281NqXU6TRYW+k4BPtt02iS19p0B9KHWJnl87DsD6MPDQ5NcXvadAfSgjselvi0vd78BZ2b67gE+S9smq6tNtzf49LTvHOAznZyUcnf3vhV4djb59i1lOOw7C/hgdTJJtrdL8/raJEl3MGB7Ozk+7pYGwL+nbZOjo++DP/m/48B1aSl1NErZ3EwGA3sE4G/29JTc36eOxynn56Xc3fVdBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB/m/8AquRd2LutouUAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMTAtMjZUMDI6NTA6MTUrMDA6MDB25/ZnAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTEwLTI2VDAyOjUwOjE1KzAwOjAwB7pO2wAAAABJRU5ErkJggg=="
                            class="menu-icon img-fluid"
                            alt="NorthCloud"
                        />
                    </div>
                    <!-- brand --><a
                        href="/"
                        class="brand d-flex align-items-center"
                        ><img
                            src="../public/logo.svg"
                            class="dt-img img-fluid"
                            alt="NorthCloud"/></a
                    ><!-- options -->
                    <div
                        class="options d-md-flex d-none align-items-center justify-content-end ml-auto"
                    >
                        <!-- c-link --><!-- c-link --><!-- buttons -->
                        <div class="buttons">
                            <a
                                href="/dashboard"
                                class="btn btn-outline-dark btn-sm btn-rounded shadow-off text-uppercase"
                                >{{ translate("Clientarea") }}</a
                            >
                        </div>
                        <!-- lang -->
                        <div class="lang" id="lang">
                            <!-- current -->
                            <!-- lang-menu -->
                            <select name="lang" v-model="lang" @change="handleLangChange">
                                <option value="es">ES</option>
                                <option value="en">EN</option>
                                <option value="ca">CA</option>
                            </select>
                        </div>
                    </div>
                    <!-- second-options -->
                </div>
                <!-- nav-bottom -->
                <div
                    class="nav-bottom d-flex align-items-center justify-content-between"
                >
                    <!-- info -->
                    <div class="info d-flex align-items-center">
                        <!-- item --><a href="tel:0000" class="item"
                            ><img
                                src="./assets/images/icons/fill-font-icons/fi-sr-phone-call.svg"
                                class="img-fluid"
                                alt="Icon"
                            /><span class="text">+34 123456789</span></a
                        >
                    </div>
                    <!-- links -->
                    <div
                        class="links d-xl-flex align-items-center ml-auto"
                        id="theme-navbar-links"
                    >
                        <!-- close-links-btn -->
                        <div class="close-links-btn" id="close-links-btn">
                            <img
                                src="data:image/png;base64,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"
                                class="img-fluid"
                                alt="Close"
                            />
                        </div>
                        <!-- link -->
                        <div class="link">
                            <a href="/">{{ translate("home") }}</a>
                        </div>
                        <!-- link -->
                        <div class="link">
                            <a href="/services/vps">{{ translate("VPS") }}</a>
                        </div>
                        <!-- link -->
                        <div class="link">
                            <a href="/services/vpn">{{ translate("VPN") }}</a>
                        </div>
                        <!-- link -->
                        <div class="link"><a href="/contact">{{ translate("Contact") }}</a></div>
                        <!-- link -->
                        <div class="link"><a href="/about">{{ translate("About") }}</a></div>
                        <!-- indicator --><span class="indicator"></span>
                    </div>
                </div>
            </div>
        </nav>
        <router-view />
        <footer class="theme-footer">
            <!-- footer-bottom -->
            <div class="footer-bottom">
                <div class="container-fluid">
                    <!-- content -->
                    <div class="content d-flex align-items-start mb-2">
                        <!-- logo -->
                        <div class="logo mb-lg-0 mb-1">
                            <a href="#">
                                <img
                                    src="../public/logo.svg"
                                    class="img-fluid"
                                    alt="NorthCloud"
                                />
                            </a>
                        </div>
                        <!-- copyright -->
                        <div class="copyright mr-lg-5">
                            <!-- links -->
                            <ul
                                class="links list-unstyled d-flex align-items-center flex-wrap"
                            >
                            </ul>
                            <!-- para-3 -->
                            <p class="para-3">
                                Copyright &copy; 2023, NorthCloud Operating
                                Company, LLC. All Rights Reserved. The
                                NorthCloud word mark is a registered trademark
                                of NorthCloud Operating Company,
                            </p>
                        </div>
                        <!-- social-list -->
                        <ul
                            class="social-list list-unstyled d-flex align-items-center justify-content-lg-end justify-content-center ml-lg-auto mt-lg-0 mt-2"
                        >
                            <li>
                                <a href="#"
                                    ><img
                                        src="./assets/images/templates/footer/twitter.png"
                                        alt="Icon"
                                /></a>
                            </li>
                            <li>
                                <a href="#"
                                    ><img
                                        src="./assets/images/templates/footer/reddit.png"
                                        alt="Icon"
                                /></a>
                            </li>
                            <li>
                                <a href="#"
                                    ><img
                                        src="./assets/images/templates/footer/facebook.png"
                                        alt="Icon"
                                /></a>
                            </li>
                            <li>
                                <a href="#"
                                    ><img
                                        src="./assets/images/templates/footer/linkedin.png"
                                        alt="Icon"
                                /></a>
                            </li>
                        </ul>
                    </div>
                    <!-- content -->
                    <div class="content d-lg-flex align-items-end flex-wrap">
                        <!-- para-3 -->
                        <p class="para-3">
                            Use of this Site is subject to express terms of
                            use.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<style>
@import "./assets/css/style.css";
@import "./assets/css/bundle.min.css";
@import "./assets/css/templates.css";
@import "./assets/css/index.css";
@import "./assets/css/fonts.min.css";
</style>

<script>
import langscript from './langscript.js';
export default {
  mixins: [langscript],
  data() {
    return {
      lang: "es",
    };
  },
  methods: {
    handleLangChange() {
      this.setLangCookie(this.lang);
      window.location.reload();
    },
    setLangCookie(langValue) {
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 30); // Set to expire after 30 days

      document.cookie = `lang=${langValue}; path=/; expires=${expiryDate.toUTCString()}`;
    },
  },
};

</script>
