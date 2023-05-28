<template>
    <body class="position-relative terms-page" id="terms-page">
        <main>
            <div class="container-fluid">

                <div class="content">
                    <h1 class="title-1">{{ translate("AboutTitle") }}</h1>

                    <h2 class="title-3">{{ translate("AboutTitle2") }}</h2>

                    <p class="para-1">
                        {{ translate("AboutText1") }}
                    </p>

                    <p class="para-1">
                        {{ translate("AboutText2") }}
                    </p>

                    <section>
                        <h2
                            class="title-2"
                            id="additional-policies-and-agreements-section"
                        >
                            {{ translate("AboutTitle3") }}
                        </h2>

                        <p class="para-1">
                        {{ translate("AboutText3") }}
                    </p>

                    </section>

                    <section>
                        <h2 class="title-2" id="account-eligibility-section">
                            {{ translate("AboutTitle4") }}
                        </h2>

                        <p class="para-1">
                        {{ translate("AboutText4") }}
                    </p>
                    </section>

                    <section>
                        <h2 class="title-2" id="account-eligibility-section">
                            {{ translate("AboutTitle5") }}
                        </h2>

                        <p class="para-1">
                        {{ translate("AboutText5") }}
                    </p>
                    </section>

                    <section>
                        <h2 class="title-2" id="account-eligibility-section">
                            {{ translate("AboutTitle6") }}
                        </h2>

                        <p class="para-1">
                        {{ translate("AboutText6") }}
                    </p>
                    </section>
                    <section>
                        <h2 class="title-2" id="account-eligibility-section">
                            {{ translate("AboutTitle7") }}
                        </h2>

                        <p class="para-1">
                        {{ translate("AboutText7") }}
                    </p>
                    </section>

                    <section>
                        <h2 class="title-2" id="account-eligibility-section">
                            {{ translate("AboutTitle8") }}
                        </h2>

                        <p class="para-1">
                        {{ translate("AboutText8") }}
                    </p>
                    </section>
                    <section>
                        <h2 class="title-2" id="account-eligibility-section">
                            {{ translate("AboutTitle9") }}
                        </h2>

                        <p class="para-1">
                        {{ translate("AboutText9") }}
                    </p>
                    </section>
                </div>
            </div>
        </main>
    </body>
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
