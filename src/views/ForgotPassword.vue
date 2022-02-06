<template>
  <v-layout>
    <el-form :model="form" :rules="rules" ref="forgotPasswrd">
      <div class="c-sign-in-form">
        <img
          class="c-sign-in-form__logo"
          src="../assets/bitacora-logo-black.svg"
        />
        <div v-if="!forgotPasswordSuccess">
          <p class="ng-binding u-text-center tw-text-sm tw-text-gray-500">
            {{ $t("forgotPassword.subtitle") }}
          </p>
          <div class="o-form-layout">
            <div class="o-form-layout__item">
              <el-form-item prop="email">
                <el-input
                  type="email"
                  class="tw-rounded tw-w-full"
                  :placeholder="$t('general.inputs.email')"
                  data-test="email"
                  v-model="form.email"
                ></el-input>
              </el-form-item>
            </div>
            <div class="o-form-layout__item u-text-center">
              <el-button
                @click="sendEmail('forgotPasswrd')"
                type="primary"
                :loading="isLoading"
                data-test="send-email"
              >
                {{ $t("general.sendEmail") }}
              </el-button>
            </div>
          </div>
        </div>
        <div v-else class="tw-text-center tw-text-gray-500">
          <p>{{ $t("forgotPassword.success") }}</p>
        </div>
        <div
          v-html="
            $t('forgotPassword.contact', {
              email: `<a href='mailto:info@bitacora.io' class='tw-text-blue-400'>info@bitacora.io</a>`,
              whatsapp: `<a href='https://wa.me/528184487740' target='_blank' class='tw-text-blue-400'>WhatsApp</a>`,
            })
          "
          class="u-text-center tw-text-sm tw-text-gray-500"
        ></div>
      </div>
    </el-form>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from "vuex";
import VLayout from "@/layouts/Default.vue";

export default {
  name: "ForgotPassword",
  components: {
    VLayout,
  },
  computed: {
    ...mapState("auth", {
      isLoading: "isLoading",
    }),
  },
  data() {
    return {
      ...mapActions("auth", ["forgotPasswordSendEmail"]),
      forgotPasswordSuccess: false,
      form: {
        email: "",
      },
      rules: {
        email: [
          {
            required: true,
            message: this.$t("general.validations.emailRequired"),
            trigger: "blur",
          },
          {
            type: "email",
            message: this.$t("general.validations.emailValid"),
            trigger: ["blur", "change"],
          },
        ],
      },
    };
  },
  methods: {
    sendEmail(form) {
      this.$refs[form].validate(async (valid) => {
        if (!valid) {
          return false;
        }

        try {
          await this.forgotPasswordSendEmail(this.form.email);
          this.forgotPasswordSuccess = true;
        } catch (error) {
          console.log(error);
        }
      });
    },
  },
};
</script>
