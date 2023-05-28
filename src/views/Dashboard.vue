<template>
    <body>
      <div class="container-fluid page-body-wrapper">
        <!-- partial:partials/_sidebar.html -->
        <nav class="sidebar sidebar-offcanvas" id="sidebar">
          <ul class="nav">
            <li class="nav-item nav-category">Main</li>
            <li class="nav-item">
              <a class="nav-link" href="/dashboard">
                <span class="icon-bg"><i class="mdi mdi-cube menu-icon"></i></span>
                <span class="menu-title">Dashboard</span>
              </a>
            </li>
            <li class="nav-item sidebar-user-actions">
              <div class="user-details">
                <div class="d-flex justify-content-between align-items-center">
                  <div>
                    <div class="d-flex align-items-center">
                      <div class="sidebar-profile-img">
                        <img src="../assets2/images/faces/face28.png" alt="image">
                      </div>
                      <div class="sidebar-profile-text">
                        <p class="mb-1">User</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item sidebar-user-actions">
              <div class="sidebar-user-menu">
                <a href="/" class="nav-link"><i class="mdi mdi-logout menu-icon"></i>
                  <span class="menu-title">Log Out</span></a>
              </div>
            </li>
          </ul>
        </nav>
        <!-- partial -->
        <div class="main-panel">
          <div class="content-wrapper">
            <div class="d-xl-flex justify-content-between align-items-start">
              <h2 class="text-dark font-weight-bold mb-2"> Overview dashboard </h2>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="tab-content tab-transparent-content">
                  <div class="tab-pane fade show active" id="business-1" role="tabpanel" aria-labelledby="business-tab">
                    <div class="row">
                      <div class="col-xl-3 col-lg-6 col-sm-6 grid-margin stretch-card">
                        <div class="card">
                          <div class="card-body text-center">
                            <h5 class="mb-2 text-dark font-weight-normal">OS</h5>
                            <h2 class="mb-4 text-dark font-weight-bold">Ubutnu Linux</h2>
                            <div class="dashboard-progress dashboard-progress-1 d-flex align-items-center justify-content-center item-parent"><i  style="font-size: 3.9rem;" class="mdi mdi-ubuntu icon-md absolute-center text-dark"></i></div>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-3  col-lg-6 col-sm-6 grid-margin stretch-card">
                        <div class="card">
                          <div class="card-body text-center">
                            <h5 class="mb-2 text-dark font-weight-normal">Status</h5>
                            <h2 class="mb-4 text-dark font-weight-bold">Online</h2>
                            <div class="dashboard-progress dashboard-progress-3 d-flex align-items-center justify-content-center item-parent"><i  style="font-size: 3.9rem;" class="mdi mdi-access-point icon-md absolute-center text-dark"></i></div>
                            <p class="mt-4 mb-0">Last check</p>
                            <h3 class="mb-0 font-weight-bold mt-2 text-dark">8:30</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 grid-margin">
                        <div class="card">
                          <div class="card-body">
                            <div class="row">
                              <div class="col-sm-12">
                                <div class="d-flex justify-content-between align-items-center mb-4">
                                  <h4 class="card-title mb-0">Recent Activity</h4>
                                </div>
                              </div>
                              <div class="col-lg-4 col-sm-8 grid-margin  grid-margin-lg-0">
                                <div class="pl-0 pl-lg-4 ">
                                    <h3 class="text-dark font-weight-bold mr-2 mb-0">Cpu Usage</h3>
                                  <div class="d-xl-flex justify-content-between align-items-center mb-2">
                                    
                                    <div class="d-lg-flex align-items-center mb-lg-2 mb-xl-0">
                                      <div class="progress" style="height: 24px;width: 268px;"><div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: 10%;" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">10%</div></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4 col-sm-8 grid-margin  grid-margin-lg-0">
                                <div class="pl-0 pl-lg-4 ">
                                    <h3 class="text-dark font-weight-bold mr-2 mb-0">Ram Usage</h3>
                                  <div class="d-xl-flex justify-content-between align-items-center mb-2">
                                    
                                    <div class="d-lg-flex align-items-center mb-lg-2 mb-xl-0">
                                      <div class="progress" style="height: 24px;width: 268px;"><div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="col-lg-4 col-sm-8 grid-margin  grid-margin-lg-0">
                                <div class="pl-0 pl-lg-4 ">
                                    <h3 class="text-dark font-weight-bold mr-2 mb-0">Disk Usage</h3>
                                  <div class="d-xl-flex justify-content-between align-items-center mb-2">
                                    
                                    <div class="d-lg-flex align-items-center mb-lg-2 mb-xl-0">
                                      <div class="progress" style="height: 24px;width: 268px;"><div class="progress-bar" role="progressbar" aria-label="Example with label" style="width: 45%;" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">45%</div></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- content-wrapper ends -->
          <!-- partial:partials/_footer.html -->
          <footer class="footer">
            <div class="footer-inner-wraper">
              <div class="d-sm-flex justify-content-center justify-content-sm-between">
                <span class="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © bootstrapdash.com 2020</span>
                <span class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"> Free <a href="https://www.bootstrapdash.com/" target="_blank">Bootstrap dashboard templates</a> from Bootstrapdash.com</span>
              </div>
            </div>
          </footer>
          <!-- partial -->
        </div>
        <!-- main-panel ends -->
      </div>
      <!-- page-body-wrapper ends -->
    <!-- container-scroller -->

  </body>
</template>


<style>

@import "../assets/css/style.css";
@import "../assets/css/bundle.min.css";
@import "../assets/css/templates.css";
@import "../assets/css/index.css";
@import "../assets/css/fonts.min.css";
@import "../assets2/vendors/mdi/css/materialdesignicons.min.css";
@import "../assets2/vendors/flag-icon-css/css/flag-icon.min.css";
@import "../assets2/vendors/css/vendor.bundle.base.css";
@import "../assets2/vendors/font-awesome/css/font-awesome.min.css";
@import "../assets2/vendors/bootstrap-datepicker/bootstrap-datepicker.min.css";
@import "../assets2/css/style.css";
body{
    background-color: #0b0c1b;
}

</style>