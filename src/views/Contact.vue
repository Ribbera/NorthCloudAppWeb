<template>
    <header class="main-header">
        <header class="main-header">
            <div class="container">
                <!-- row -->
                <div
                    class="row align-items-center"
                    style="margin-right: -2968px;margin-left: -1089px;"
                >
                    <!-- col --><!-- col -->
                    <div class="col-xl-5 d-xl-block d-none">
                        <!-- form-container -->
                        <div class="form-container" id="form-container">
                            <!-- header-form -->
                            <form
                                class="header-form ml-auto"
                                id="signup-form"
                                style="max-width: 990px;"
                            >
                                <!-- form-title -->
                                <h2 class="form-title mb-2">
                                    {{ translate("Contact") }}
                                </h2>
                                <!-- inputs -->
                                <div class="inputs">
                                    <!-- form-label --><label
                                        for="email"
                                        class="form-label"
                                        ><input
                                            type="email"
                                            name="email"
                                            class="glassy"
                                            id="email"
                                            placeholder="Email address"
                                            autocomplete="off"
                                            required/></label
                                    ><!-- form-label --><label
                                        for="password"
                                        class="form-label"
                                        ><textarea
                                            name="text"
                                            class="glassy"
                                            id="text"
                                            placeholder="Message"
                                            required
                                            style="height:218px;width:1000px;background-color:rgb(47, 49, 70);color:white;"
                                        ></textarea>
                                        &gt;</label
                                    >
                                </div>
                                <!-- submit-button --><button
                                    class="btn btn-fill-success shadow-off w-100 font-500 mb-2 mt-1"
                                >
                                {{ translate("send") }}</button
                                ><!--v-if--><!--v-if-->
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </header>
</template>

<style>
@import "../assets/css/pages/terms.css";
</style>

<script>
import langscript from "../langscript.js";
export default {
    mixins: [langscript]
};
</script>
