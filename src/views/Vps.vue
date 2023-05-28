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
                    <a href="/services/vps" class="item active">{{
                        translate("VPS")
                    }}</a
                    ><a href="/services/vpn" class="item">{{
                        translate("VPN")
                    }}</a>
                </div>
            </div>
            <div class="container position-relative">
                <div class="row">
                    <div class="col-xl-6 col-lg-8">
                        <h1 class="title-1">
                            {{ translate("vpsTitle1") }}<br />{{
                                translate("vpsTitle2")
                            }}
                        </h1>
                        <p class="para-1 mb-3">
                            {{ translate("vpsText1") }}
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
        <div class="se-i py-120" id="se-i">
            <div class="container">
                <div class="se-head mb-5">
                    <h3 class="se-title-1">{{ translate("homeText12") }}</h3>
                    <h4 class="se-title-2">
                        {{ translate("vpsText2") }}
                    </h4>
                </div>
                <div class="filter-bar"></div>
                <div class="plans-container filter-hdd show my-3">
                    <div id="plans" class="plans">
                        <div class="plan">
                            <div class="main-info-se">
                                <span class="plan-name">VPS 1</span>
                            </div>
                            <div class="spec-se">
                                <div class="icons-bar">
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/cpu.svg"
                                            style=""
                                        />
                                    </div>
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/ram-memory.svg"
                                            style=""
                                        />
                                    </div>
                                </div>
                                <div class="text-bar">
                                    <div class="text">
                                        <p>
                                            <b>1vCPU Cores @ 2.4 GHz</b><br />
                                        </p>
                                    </div>
                                    <div class="text">
                                        <p><b>2GB</b><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div class="spec-se">
                                <div class="icons-bar">
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/hard-disk.svg"
                                            style=""
                                        />
                                    </div>
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/speedometer.svg"
                                            style=""
                                        />
                                    </div>
                                </div>
                                <div class="text-bar">
                                    <div class="text">
                                        <p><b>20GB</b><br /></p>
                                    </div>
                                    <div class="text">
                                        <p><b>1GBps</b><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div class="spec-se">
                                <div class="icons-bar">
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/cable.svg"
                                            style=""
                                        />
                                    </div>
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/controls.svg"
                                            style=""
                                        />
                                    </div>
                                </div>
                                <div class="text-bar">
                                    <div class="text">
                                        <p><b>1 IP</b></p>
                                    </div>
                                    <div class="text">
                                        <p>
                                            <b>cPanel/WHM, Plesk</b
                                            ><br />Obsidian Web Host Edition
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="price-se">
                                <div class="price">3.95 <sup>€</sup></div>
                                <div class="actions">
                                    <a
                                        href="/dashboard"
                                        class="btn btn-fill-primary shadow-off"
                                        >{{ translate("Buy") }}</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="plan">
                            <div class="main-info-se">
                                <span class="plan-name">VPS 2</span>
                            </div>
                            <div class="spec-se">
                                <div class="icons-bar">
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/cpu.svg"
                                            style=""
                                        />
                                    </div>
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/ram-memory.svg"
                                            style=""
                                        />
                                    </div>
                                </div>
                                <div class="text-bar">
                                    <div class="text">
                                        <p>
                                            <b>2vCPU Cores @ 4.8 GHz</b><br />
                                        </p>
                                    </div>
                                    <div class="text">
                                        <p><b>4GB</b><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div class="spec-se">
                                <div class="icons-bar">
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/hard-disk.svg"
                                            style=""
                                        />
                                    </div>
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/speedometer.svg"
                                            style=""
                                        />
                                    </div>
                                </div>
                                <div class="text-bar">
                                    <div class="text">
                                        <p><b>40GB</b><br /></p>
                                    </div>
                                    <div class="text">
                                        <p><b>2GBps</b><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div class="spec-se">
                                <div class="icons-bar">
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/cable.svg"
                                            style=""
                                        />
                                    </div>
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/controls.svg"
                                            style=""
                                        />
                                    </div>
                                </div>
                                <div class="text-bar">
                                    <div class="text">
                                        <p><b>1 IP</b></p>
                                    </div>
                                    <div class="text">
                                        <p>
                                            <b>cPanel/WHM, Plesk</b
                                            ><br />Obsidian Web Host Edition
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="price-se">
                                <div class="price">8.95 <sup>€</sup></div>
                                <div class="actions">
                                    <a
                                        href="/dashboard"
                                        class="btn btn-fill-primary shadow-off"
                                        >{{ translate("Buy") }}</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="plan">
                            <div class="main-info-se">
                                <span class="plan-name">VPS 3</span>
                            </div>
                            <div class="spec-se">
                                <div class="icons-bar">
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/cpu.svg"
                                            style=""
                                        />
                                    </div>
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/ram-memory.svg"
                                            style=""
                                        />
                                    </div>
                                </div>
                                <div class="text-bar">
                                    <div class="text">
                                        <p>
                                            <b>3vCPU Cores @ 7.2 GHz</b><br />
                                        </p>
                                    </div>
                                    <div class="text">
                                        <p><b>6GB</b><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div class="spec-se">
                                <div class="icons-bar">
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/hard-disk.svg"
                                            style=""
                                        />
                                    </div>
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/speedometer.svg"
                                            style=""
                                        />
                                    </div>
                                </div>
                                <div class="text-bar">
                                    <div class="text">
                                        <p><b>60GB</b><br /></p>
                                    </div>
                                    <div class="text">
                                        <p><b>3GBps</b><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div class="spec-se">
                                <div class="icons-bar">
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/cable.svg"
                                            style=""
                                        />
                                    </div>
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/controls.svg"
                                            style=""
                                        />
                                    </div>
                                </div>
                                <div class="text-bar">
                                    <div class="text">
                                        <p><b>2 IP</b></p>
                                    </div>
                                    <div class="text">
                                        <p>
                                            <b>cPanel/WHM, Plesk</b
                                            ><br />Obsidian Web Host Edition
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="price-se">
                                <div class="price">10.95 <sup>€</sup></div>
                                <div class="actions">
                                    <a
                                        href="/dashboard"
                                        class="btn btn-fill-primary shadow-off"
                                        >{{ translate("Buy") }}</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="plan">
                            <div class="main-info-se">
                                <span class="plan-name">VPS 4</span>
                            </div>
                            <div class="spec-se">
                                <div class="icons-bar">
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/cpu.svg"
                                            style=""
                                        />
                                    </div>
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/ram-memory.svg"
                                            style=""
                                        />
                                    </div>
                                </div>
                                <div class="text-bar">
                                    <div class="text">
                                        <p>
                                            <b>4vCPU Cores @ 9.6 GHz</b><br />
                                        </p>
                                    </div>
                                    <div class="text">
                                        <p><b>8GB</b><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div class="spec-se">
                                <div class="icons-bar">
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/hard-disk.svg"
                                            style=""
                                        />
                                    </div>
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/speedometer.svg"
                                            style=""
                                        />
                                    </div>
                                </div>
                                <div class="text-bar">
                                    <div class="text">
                                        <p><b>100GB</b><br /></p>
                                    </div>
                                    <div class="text">
                                        <p><b>4GBps</b><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div class="spec-se">
                                <div class="icons-bar">
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/cable.svg"
                                            style=""
                                        />
                                    </div>
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/controls.svg"
                                            style=""
                                        />
                                    </div>
                                </div>
                                <div class="text-bar">
                                    <div class="text">
                                        <p><b>2 IP</b></p>
                                    </div>
                                    <div class="text">
                                        <p>
                                            <b>cPanel/WHM, Plesk</b
                                            ><br />Obsidian Web Host Edition
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="price-se">
                                <div class="price">20.95 <sup>€</sup></div>
                                <div class="actions">
                                    <a
                                        href="/dashboard"
                                        class="btn btn-fill-primary shadow-off"
                                        >{{ translate("Buy") }}</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="plan">
                            <div class="main-info-se">
                                <span class="plan-name">VPS 5</span>
                            </div>
                            <div class="spec-se">
                                <div class="icons-bar">
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/cpu.svg"
                                            style=""
                                        />
                                    </div>
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/ram-memory.svg"
                                            style=""
                                        />
                                    </div>
                                </div>
                                <div class="text-bar">
                                    <div class="text">
                                        <p>
                                            <b>6vCPU Cores @ 14.4 GHz</b><br />
                                        </p>
                                    </div>
                                    <div class="text">
                                        <p><b>12GB</b><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div class="spec-se">
                                <div class="icons-bar">
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/hard-disk.svg"
                                            style=""
                                        />
                                    </div>
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/speedometer.svg"
                                            style=""
                                        />
                                    </div>
                                </div>
                                <div class="text-bar">
                                    <div class="text">
                                        <p><b>250GB</b><br /></p>
                                    </div>
                                    <div class="text">
                                        <p><b>5GBps</b><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div class="spec-se">
                                <div class="icons-bar">
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/cable.svg"
                                            style=""
                                        />
                                    </div>
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/controls.svg"
                                            style=""
                                        />
                                    </div>
                                </div>
                                <div class="text-bar">
                                    <div class="text">
                                        <p><b>4 IP</b></p>
                                    </div>
                                    <div class="text">
                                        <p>
                                            <b>cPanel/WHM, Plesk</b
                                            ><br />Obsidian Web Host Edition
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="price-se">
                                <div class="price">25.95 <sup>€</sup></div>
                                <div class="actions">
                                    <a
                                        href="/dashboard"
                                        class="btn btn-fill-primary shadow-off"
                                        >{{ translate("Buy") }}</a
                                    >
                                </div>
                            </div>
                        </div>
                        <div class="plan">
                            <div class="main-info-se">
                                <span class="plan-name">VPS 6</span>
                            </div>
                            <div class="spec-se">
                                <div class="icons-bar">
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/cpu.svg"
                                            style=""
                                        />
                                    </div>
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/ram-memory.svg"
                                            style=""
                                        />
                                    </div>
                                </div>
                                <div class="text-bar">
                                    <div class="text">
                                        <p>
                                            <b>8vCPU Cores @ 19.2 GHz</b><br />
                                        </p>
                                    </div>
                                    <div class="text">
                                        <p><b>16GB</b><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div class="spec-se">
                                <div class="icons-bar">
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/hard-disk.svg"
                                            style=""
                                        />
                                    </div>
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/speedometer.svg"
                                            style=""
                                        />
                                    </div>
                                </div>
                                <div class="text-bar">
                                    <div class="text">
                                        <p><b>1TB</b><br /></p>
                                    </div>
                                    <div class="text">
                                        <p><b>10GBps</b><br /></p>
                                    </div>
                                </div>
                            </div>
                            <div class="spec-se">
                                <div class="icons-bar">
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/cable.svg"
                                            style=""
                                        />
                                    </div>
                                    <div class="icon">
                                        <img
                                            class="lazy img-fluid"
                                            alt="Icon"
                                            src="../assets/images/icons/controls.svg"
                                            style=""
                                        />
                                    </div>
                                </div>
                                <div class="text-bar">
                                    <div class="text">
                                        <p><b>4 IP</b></p>
                                    </div>
                                    <div class="text">
                                        <p>
                                            <b>cPanel/WHM, Plesk</b
                                            ><br />Obsidian Web Host Edition
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="price-se">
                                <div class="price">80.95 <sup>€</sup></div>
                                <div class="actions">
                                    <a
                                        href="/dashboard"
                                        class="btn btn-fill-primary shadow-off"
                                        >{{ translate("Buy") }}</a
                                    >
                                </div>
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
</style>

<script>
import langscript from "../langscript.js";
export default {
    mixins: [langscript]
};
</script>
