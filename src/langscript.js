import es from "./lang/es.js";
import en from "./lang/en.js";
import ca from "./lang/ca.js";

export default {
    mixins: [es, en, ca],
    data() {
        return {
            lang: "es"
        };
    },
    created() {
        this.lang = this.getLangFromCookie();
    },
    watch: {
        lang(newLang) {
            this.setLangCookie(newLang);
        }
    },
    methods: {
        getLangFromCookie() {
            const cookie = document.cookie;
            const langCookie = cookie
                .split(";")
                .find(c => c.trim().startsWith("lang="));

            if (langCookie) {
                return langCookie.split("=")[1];
            }

            // Default language if the cookie is not set
            return "es";
        },
        setLangCookie(langValue) {
            const expiryDate = new Date();
            expiryDate.setDate(expiryDate.getDate() + 30); // Set to expire after 30 days

            document.cookie = `lang=${langValue}; path=/; expires=${expiryDate.toUTCString()}`;
        },
        translate(prop) {
            return this[this.lang][prop];
        }
    }
};
