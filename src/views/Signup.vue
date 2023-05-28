<template>
    <!-- Section I -->
    <div class="se-i">
        <!-- user-form -->
        <form @submit.prevent="signupRequest" id="signup-form" class="user-form">
            <!-- logo -->
            <a href="home" class="logo">
                <img
                    src="../assets/images/theme/logo-d.png"
                    class="lazy dt-img img-fluid"
                    alt="HostX"
                />
            </a>
            <!-- title-1 -->
            <h1 class="title-1">
                <img
                    src="../assets/images/pages/user/waving-hand.png"
                    class="lazy img-fluid"
                    alt="Icon"
                />{{ translate("loginText2") }}<br />
            </h1>
            <!-- form-label -->
            <label class="form-label" for="email">
                <!-- form-input -->
                <input
                    v-model="email"
                    class="form-input"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    required
                />
                <!-- state -->
                <span class="state"></span>
            </label>
            <!-- form-label -->
            <label class="form-label" for="password">
                <!-- form-input -->
                <input
                    v-model="password"
                    class="form-input"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                />
                <!-- state -->
                <span class="state"></span>
            </label>
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
            <!-- div -->
            <!-- buttons -->
            <div class="buttons mt-2">
                <button
                    v-bind:disabled="xhrRequest"
                    v-bind:class="{ disabled: xhrRequest }"
                    type="submit"
                    class="btn btn-sm btn-fill-success shadow-off text-uppercase w-100"
                >
                {{ translate("signupButton") }}
                </button>
            </div>

            <div class="text-center" style="padding:20px; color:white;">
                {{ translate("signupText1") }} <a href="/login">{{ translate("signupText2") }}</a>
            </div>
        </form>
    </div>
</template>
<script>
import firebase from "firebase";
import langscript from "../langscript.js";

export default {
    name: "Signup",
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
<style>
@import "../assets/css/pages/login.css";
</style>
