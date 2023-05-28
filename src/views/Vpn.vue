<template>
    <body class="position-relative dedi-page" id="dedi-page">
        <div class="preloader" id="preloader" style="display:none;">
            <div
                class="content d-flex align-items-center justify-content-center"
            >
                <div class="spinner"></div>
            </div>
        </div>
        <div class="header text-lg-left text-center">
            <div class="container-fluid">
                <div
                    class="navigator d-md-flex align-items-center justify-content-start d-none"
                >
                    <div class="title">Hosting / Servers</div>
                    <a href="/services/vps" class="item">{{ translate("VPS") }}</a
                    ><a href="/services/vpn" class="item active">{{ translate("VPN") }}</a>
                </div>
            </div>
            <div class="container position-relative">
                <div class="row">
                    <div class="col-xl-6 col-lg-8">
                        <h1 class="title-1">
                            {{ translate("vpnTitle1") }}<br />{{ translate("vpnTitle2") }}
                        </h1>
                        <p class="para-1 mb-3">
                            {{ translate("vpnText1") }}
                        </p>
                        <a
                            href="#plans"
                            type="button"
                            class="btn btn-fill-success shadow-off font-500"
                        >
                        {{ translate("Choose") }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div id="vps" class="se-iii py-90">
            <div id="plans" class="container">
                <!-- se-head -->
                <div class="se-head">
                    <h3 class="se-title-1">{{ translate("homeText12") }}</h3>
                    <h4 class="se-title-2">
                        {{ translate("homeText13") }}
                    </h4>
                </div>
                <!-- plans -->
                <div class="plans mb-xl-4 mb-2">
                    <!-- row -->
                    <div class="row mx-xl-0">
                        <!-- col -->
                        <div class="col-xl-3 col-md-6 mb-xl-0 mb-2 px-xl-0">
                            <!-- plan -->
                            <div class="plan">
                                <!-- plan-head -->
                                <div class="plan-head">
                                    <!-- plan-name -->
                                    <h3 class="plan-name">
                                        {{ translate("BasicPlan") }}
                                    </h3>
                                </div>
                                <!-- plan-price -->
                                <div class="plan-price">
                                    <!-- price -->
                                    <h4 class="price">2.45€</h4>
                                </div>
                                <!-- actions -->
                                <div class="actions">
                                    <a
                                        href="/dashboard"
                                        class="btn btn-fill-primary btn-sm shadow-off w-100"
                                        >{{ translate("ChooseBasic") }}</a
                                    >
                                </div>
                                <!-- group -->
                                <div class="group">
                                    <!-- title-4 -->
                                    <h4 class="title-4">
                                        {{ translate("Features") }}
                                    </h4>
                                    <!-- list -->
                                    <ul class="list list-unstyled">
                                        <li>
                                            <img
                                                src="../assets/images/icons/check-circle.svg"
                                                class="lazy img-fluid"
                                                alt="Icon"
                                            />{{ translate("BasicPlanF1") }}
                                        </li>
                                        <li>
                                            <img
                                                src="../assets/images/icons/check-circle.svg"
                                                class="lazy img-fluid"
                                                alt="Icon"
                                            />{{ translate("BasicPlanF2") }}
                                        </li>
                                        <li>
                                            <img
                                                src="../assets/images/icons/check-circle.svg"
                                                class="lazy img-fluid"
                                                alt="Icon"
                                            />{{ translate("BasicPlanF3") }}
                                        </li>
                                    </ul>
                                </div>
                                <!-- group --><!-- group -->
                            </div>
                        </div>
                        <div class="col-xl-3 col-md-6 mb-xl-0 mb-2 px-xl-0">
                            <!-- plan -->
                            <div class="plan">
                                <!-- plan-head -->
                                <div class="plan-head">
                                    <!-- plan-name -->
                                    <h3 class="plan-name">
                                        {{ translate("IntermediatePlan") }}
                                    </h3>
                                </div>
                                <!-- plan-price -->
                                <div class="plan-price">
                                    <!-- price -->
                                    <h4 class="price">5.45€</h4>
                                </div>
                                <!-- actions -->
                                <div class="actions">
                                    <a
                                        href="/dashboard"
                                        class="btn btn-fill-primary btn-sm shadow-off w-100"
                                        >{{
                                            translate("ChooseIntermediate")
                                        }}</a
                                    >
                                </div>
                                <!-- group -->
                                <div class="group">
                                    <!-- title-4 -->
                                    <h4 class="title-4">
                                        {{ translate("Features") }}
                                    </h4>
                                    <!-- list -->
                                    <ul class="list list-unstyled">
                                        <li>
                                            <img
                                                src="../assets/images/icons/check-circle.svg"
                                                class="lazy img-fluid"
                                                alt="Icon"
                                            />{{
                                                translate("IntermediatePlanF1")
                                            }}
                                        </li>
                                        <li>
                                            <img
                                                src="../assets/images/icons/check-circle.svg"
                                                class="lazy img-fluid"
                                                alt="Icon"
                                            />{{
                                                translate("IntermediatePlanF2")
                                            }}
                                        </li>
                                        <li>
                                            <img
                                                src="../assets/images/icons/check-circle.svg"
                                                class="lazy img-fluid"
                                                alt="Icon"
                                            />{{
                                                translate("IntermediatePlanF3")
                                            }}
                                        </li>
                                    </ul>
                                </div>
                                <!-- group --><!-- group -->
                            </div>
                        </div>
                        <!-- col -->
                        <div class="col-xl-3 col-md-6 mb-xl-0 mb-2 px-xl-0">
                            <!-- plan -->
                            <div class="plan popular-plan">
                                <!-- plan-head -->
                                <div class="plan-head">
                                    <!-- plan-name -->
                                    <h3 class="plan-name">
                                        {{ translate("AdvancedPlan") }}
                                    </h3>
                                </div>
                                <!-- plan-price -->
                                <div class="plan-price">
                                    <!-- price -->
                                    <h4 class="price">9.45€</h4>
                                </div>
                                <!-- actions -->
                                <div class="actions">
                                    <a
                                        href="/dashboard"
                                        class="btn btn-fill-primary btn-sm shadow-off w-100"
                                        >{{ translate("ChooseAdvanced") }}</a
                                    >
                                </div>
                                <!-- group -->
                                <div class="group">
                                    <!-- title-4 -->
                                    <h4 class="title-4">
                                        {{ translate("Features") }}
                                    </h4>
                                    <!-- list -->
                                    <ul class="list list-unstyled">
                                        <li>
                                            <img
                                                src="../assets/images/icons/check-circle.svg"
                                                class="lazy img-fluid"
                                                alt="Icon"
                                            />{{ translate("AdvancedPlanF1") }}
                                        </li>
                                        <li>
                                            <img
                                                src="../assets/images/icons/check-circle.svg"
                                                class="lazy img-fluid"
                                                alt="Icon"
                                            />{{ translate("AdvancedPlanF2") }}
                                        </li>
                                        <li>
                                            <img
                                                src="../assets/images/icons/check-circle.svg"
                                                class="lazy img-fluid"
                                                alt="Icon"
                                            />{{ translate("AdvancedPlanF3") }}
                                        </li>
                                    </ul>
                                </div>
                                <!-- group --><!-- group -->
                            </div>
                        </div>
                        <!-- col -->
                        <!-- col -->
                        <div class="col-xl-3 col-md-6 mb-xl-0 mb-2 px-xl-0">
                            <!-- plan -->
                            <div class="plan">
                                <!-- plan-head -->
                                <div class="plan-head">
                                    <!-- plan-name -->
                                    <h3 class="plan-name">
                                        {{ translate("PremiumPlan") }}
                                    </h3>
                                </div>
                                <!-- plan-price -->
                                <div class="plan-price">
                                    <!-- price -->
                                    <h4 class="price">13.45€</h4>
                                </div>
                                <!-- actions -->
                                <div class="actions">
                                    <a
                                        href="/dashboard"
                                        class="btn btn-fill-primary btn-sm shadow-off w-100"
                                        >{{ translate("ChoosePremium") }}</a
                                    >
                                </div>
                                <!-- group -->
                                <div class="group">
                                    <!-- title-4 -->
                                    <h4 class="title-4">
                                        {{ translate("Features") }}
                                    </h4>
                                    <!-- list -->
                                    <ul class="list list-unstyled">
                                        <li>
                                            <img
                                                src="../assets/images/icons/check-circle.svg"
                                                class="lazy img-fluid"
                                                alt="Icon"
                                            />{{ translate("PremiumPlanF1") }}
                                        </li>
                                        <li>
                                            <img
                                                src="../assets/images/icons/check-circle.svg"
                                                class="lazy img-fluid"
                                                alt="Icon"
                                            />{{ translate("PremiumPlanF2") }}
                                        </li>
                                        <li>
                                            <img
                                                src="../assets/images/icons/check-circle.svg"
                                                class="lazy img-fluid"
                                                alt="Icon"
                                            />{{ translate("PremiumPlanF3") }}
                                        </li>
                                    </ul>
                                </div>
                                <!-- group -->
                            </div>
                        </div>
                    </div>
                </div>
                </div>  
                </div>  
                
    </body>
</template>

<style>
@import "../assets/css/pages/dedi-servers.css";
@import "../assets/css/pages/dedi-servers.css";
</style>

<script>
import langscript from '../langscript.js';
export default {
  mixins: [langscript]
}
</script>

