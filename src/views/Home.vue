<template>
    <div class="home">
        <header class="main-header">
            <div class="container">
                <!-- row -->
                <div class="row align-items-center">
                    <!-- col -->
                    <div class="col-xl-7 text-xl-left text-center">
                        <!-- title-1 & para-1 -->
                        <h1 class="title-1 text-uppercase mb-2 mx-xl-0 mx-auto">
                            {{ translate("h1home") }}<br />{{
                                translate("h1home2")
                            }}
                        </h1>
                        <p class="para-1 mb-2 mx-xl-0 mx-auto">
                            {{ translate("homeText1") }}
                        </p>
                        <!-- notify -->
                        <div class="notify glassy mb-4">
                            <div class="icon">
                                <img
                                    src="../assets//images/icons/bell.svg"
                                    class="lazy img-fluid"
                                    alt="Bell"
                                />
                            </div>
                            <div class="text">
                                {{ translate("homeText2") }}
                            </div>
                        </div>
                        <!-- buttons -->
                        <div class="buttons">
                            <a
                                href="/dashboard"
                                class="btn btn-fill-primary shadow-off mr-1 mb-md-0 mb-1"
                                >{{ translate("homeButton1") }}</a
                            >
                            <a
                                href="/services/vps"
                                class="btn btn-outline-dark shadow-off"
                                >{{ translate("homeButton2") }}</a
                            >
                        </div>
                    </div>

                    <!-- col -->
                    <div class="col-xl-5 d-xl-block d-none">
                        <!-- form-container -->
                        <div class="form-container" id="form-container">
                            <!-- header-form -->
                            <form
                                @submit.prevent="signupRequest"
                                class="header-form ml-auto"
                                id="signup-form"
                            >
                                <!-- form-title -->
                                <h2 class="form-title mb-2">
                                    {{ translate("homeText3") }}<br />{{
                                        translate("homeText4")
                                    }}
                                </h2>

                                <!-- inputs -->
                                <div class="inputs">
                                    <!-- form-label -->
                                    <label for="email" class="form-label">
                                        <input
                                            v-model="email"
                                            type="email"
                                            name="email"
                                            class="glassy"
                                            id="email"
                                            placeholder="Email address"
                                            autocomplete="off"
                                            required
                                        />
                                    </label>

                                    <!-- form-label -->
                                    <label for="password" class="form-label">
                                        <input
                                            v-model="password"
                                            type="password"
                                            name="password"
                                            class="glassy"
                                            id="password"
                                            placeholder="Password"
                                            required
                                        />
                                    </label>
                                </div>

                                <!-- submit-button -->
                                <button
                                    v-bind:disabled="xhrRequest"
                                    v-bind:class="{ disabled: xhrRequest }"
                                    class="btn btn-fill-success shadow-off w-100 font-500 mb-2 mt-1"
                                >
                                    {{ translate("register") }}
                                </button>
                                <div
                                    v-if="errorMessage !== ''"
                                    class="alert alert-danger"
                                    role="alert"
                                >
                                    {{ errorMessage }}
                                </div>
                                <div
                                    v-if="successMessage !== ''"
                                    class="alert alert-success"
                                    role="alert"
                                >
                                    {{ successMessage }}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Section I -->
        <div class="se-i text-lg-left text-center">
            <div class="container">
                <!-- row -->
                <div class="row">
                    <!-- col -->
                    <div class="col-lg-3 col-6 mb-lg-0 mb-2">
                        <!-- box -->
                        <div class="box">
                            <img
                                src="../assets/images/icons/mail.svg"
                                class="lazy box-icon"
                                alt="Mail"
                            />
                            <h2 class="box-title mb-0">
                                {{ translate("homeText5") }}<br />{{
                                    translate("homeText6")
                                }}
                            </h2>
                        </div>
                    </div>

                    <!-- col -->
                    <div class="col-lg-3 col-6 mb-lg-0 mb-2">
                        <!-- box -->
                        <div class="box">
                            <img
                                src="../assets/images/icons/logout.svg"
                                class="lazy box-icon"
                                alt="Logout"
                            />
                            <h2 class="box-title mb-0">
                                {{ translate("homeText7") }}<br />{{
                                    translate("homeText8")
                                }}
                            </h2>
                        </div>
                    </div>

                    <!-- col -->
                    <div class="col-lg-3 col-6">
                        <!-- box -->
                        <div class="box">
                            <img
                                src="../assets/images/icons/digital.svg"
                                class="lazy box-icon"
                                alt="Digital"
                            />
                            <h2 class="box-title mb-0">
                                {{ translate("homeText7") }}<br />{{
                                    translate("homeText9")
                                }}
                            </h2>
                        </div>
                    </div>

                    <!-- col -->
                    <div class="col-lg-3 col-6">
                        <!-- box -->
                        <div class="box">
                            <img
                                src="../assets/images/icons/wishlist.svg"
                                class="lazy box-icon"
                                alt="Wishlist"
                            />
                            <h2 class="box-title mb-0">
                                {{ translate("homeText10") }}<br />{{
                                    translate("homeText11")
                                }}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="vps" class="se-iii py-90">
            <div class="container">
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
                <!-- se-footer -->
            </div>
        </div>
        <!-- Section VI -->
        <div class="se-vi py-90 bg-2">
            <div class="container">
                <!-- se-head -->
                <div class="se-head">
                    <h3 class="se-title-1">{{ translate("homeText14") }}</h3>
                    <h4 class="se-title-2">
                        {{ translate("homeText15") }}
                    </h4>
                </div>
                <!-- space -->
                <div class="space space-sm"></div>
                <!-- row -->
                <div class="row">
                    <!-- col -->
                    <div class="col-xl-3 col-lg-6">
                        <!-- row -->
                        <div class="row">
                            <!-- col -->
                            <div class="col-12">
                                <!-- box -->
                                <div class="box">
                                    <!-- user-info -->
                                    <div class="user-info">
                                        <img
                                            src="../assets/images/avatars/01.jpg"
                                            class="lazy avatar img-fluid"
                                            alt="Avatar"
                                        />
                                        <div class="name">Julie Lane</div>
                                        <div class="job">Instagram CEO</div>
                                    </div>
                                    <!-- quotes -->
                                    <p class="quotes">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                            <!-- col -->
                            <div class="col-12">
                                <!-- box -->
                                <div class="box">
                                    <!-- user-info -->
                                    <div class="user-info">
                                        <img
                                            src="../assets/images/avatars/02.jpg"
                                            class="lazy avatar img-fluid"
                                            alt="Avatar"
                                        />
                                        <div class="name">Gladys Hawkins</div>
                                        <div class="job">
                                            Adobe Product Manager
                                        </div>
                                    </div>
                                    <!-- quotes -->
                                    <p class="quotes">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- col -->
                    <div class="col-xl-3 col-lg-6">
                        <!-- row -->
                        <div class="row">
                            <!-- col -->
                            <div class="col-12">
                                <!-- box -->
                                <div class="box">
                                    <!-- user-info -->
                                    <div class="user-info">
                                        <img
                                            src="../assets/images/avatars/03.jpg"
                                            class="lazy avatar img-fluid"
                                            alt="Avatar"
                                        />
                                        <div class="name">Gladys Hawkins</div>
                                        <div class="job">
                                            Adobe Product Manager
                                        </div>
                                    </div>
                                    <!-- quotes -->
                                    <p class="quotes">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                            <!-- col -->
                            <div class="col-12">
                                <!-- box -->
                                <div class="box">
                                    <!-- user-info -->
                                    <div class="user-info">
                                        <img
                                            src="../assets/images/avatars/04.jpg"
                                            class="lazy avatar img-fluid"
                                            alt="Avatar"
                                        />
                                        <div class="name">John Buckland</div>
                                        <div class="job">
                                            Full Stack Web Developer
                                        </div>
                                    </div>
                                    <!-- quotes -->
                                    <p class="quotes">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- col -->
                    <div class="col-xl-3 col-lg-6">
                        <!-- row -->
                        <div class="row">
                            <!-- col -->
                            <div class="col-12">
                                <!-- box -->
                                <div class="box">
                                    <!-- user-info -->
                                    <div class="user-info">
                                        <img
                                            src="../assets/images/avatars/05.jpg"
                                            class="lazy avatar img-fluid"
                                            alt="Avatar"
                                        />
                                        <div class="name">John Buckland</div>
                                        <div class="job">
                                            Full Stack Web Developer
                                        </div>
                                    </div>
                                    <!-- quotes -->
                                    <p class="quotes">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                            <!-- col -->
                            <div class="col-12">
                                <!-- box -->
                                <div class="box">
                                    <!-- user-info -->
                                    <div class="user-info">
                                        <img
                                            src="../assets/images/avatars/06.jpg"
                                            class="lazy avatar img-fluid"
                                            alt="Avatar"
                                        />
                                        <div class="name">Sean Williams</div>
                                        <div class="job">Graphic Designer</div>
                                    </div>
                                    <!-- quotes -->
                                    <p class="quotes">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- col -->
                    <div class="col-xl-3 col-lg-6">
                        <!-- row -->
                        <div class="row">
                            <!-- col -->
                            <div class="col-12">
                                <!-- box -->
                                <div class="box">
                                    <!-- user-info -->
                                    <div class="user-info">
                                        <img
                                            src="../assets/images/avatars/07.jpg"
                                            class="lazy avatar img-fluid"
                                            alt="Avatar"
                                        />
                                        <div class="name">Sean Williams</div>
                                        <div class="job">Graphic Designer</div>
                                    </div>
                                    <!-- quotes -->
                                    <p class="quotes">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                            <!-- col -->
                            <div class="col-12">
                                <!-- box -->
                                <div class="box">
                                    <!-- user-info -->
                                    <div class="user-info">
                                        <img
                                            src="../assets/images/avatars/08.jpg"
                                            class="lazy avatar img-fluid"
                                            alt="Avatar"
                                        />
                                        <div class="name">Gladys Hawkins</div>
                                        <div class="job">
                                            Adobe Product Manager
                                        </div>
                                    </div>
                                    <!-- quotes -->
                                    <p class="quotes">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit. Sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- space -->
                <div class="space space-sm"></div>
                <!-- buttons -->
            </div>
        </div>
    </div>
</template>

<script>
import firebase from "firebase";
import langscript from "../langscript.js";
export default {
    name: "Home",
    mixins: [langscript],
    data() {
        return {
            email: "",
            password: "",
            xhrRequest: false,
            errorMessage: "",
            successMessage: ""
        };
    },
    methods: {
        signupRequest() {
            let v = this;
            v.xhrRequest = true;
            v.errorMessage = "";
            v.successMessage = "";

            firebase
                .auth()
                .createUserWithEmailAndPassword(v.email, v.password)
                .then(
                    () => {
                        v.successMessage = "Register Successfully.";
                        v.xhrRequest = false;
                    },
                    error => {
                        let errorResponse = JSON.parse(error.message);
                        v.errorMessage = errorResponse.error.message;
                        v.xhrRequest = false;
                    }
                );
        }
    }
};
</script>

<style></style>
