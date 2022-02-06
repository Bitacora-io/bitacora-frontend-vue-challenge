<template>
  <v-layout>
    <el-form :model="form" :rules="rules" ref="resetPasswordForm">
      <div class="tw-flex tw-h-screen">
        <div class="tw-flex tw-flex-col tw-w-72 tw-m-auto tw-mt-28">
          <img
            class="tw-w-100 tw-mb-5"
            src="../assets/bitacora-logo-black.svg"
          />
          <p class="ng-binding u-text-center tw-text-sm tw-text-gray-500">
            {{ $t("resetPassword.accountEmailLabel") }}
            {{ user.email }}
          </p>
          <el-form-item prop="password">
            <el-input
              type="password"
              class="tw-rounded tw-w-full"
              :placeholder="$t('resetPassword.password')"
              data-test="password"
              v-model="form.password"
              show-password
            ></el-input>
          </el-form-item>

          <el-form-item prop="passwordConfirm">
            <el-input
              type="password"
              class="tw-rounded tw-w-full"
              :placeholder="$t('resetPassword.passwordConfirm')"
              data-test="password"
              v-model="form.passwordConfirm"
              show-password
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-button
              type="primary"
              @click="sendPassword()"
              class="tw-w-full"
              :loading="loading"
              data-test="send-password"
            >
              {{ $t("general.changePassword") }}
            </el-button>
          </el-form-item>

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
      </div>
    </el-form>
  </v-layout>
</template>

<script>
import VLayout from "@/layouts/Default.vue";
import { mapActions, mapState } from "vuex";
import { ElMessageBox } from "element-plus";
import Router from "@/router";

export default {
  name: "ResetPassword",
  components: {
    VLayout,
  },
  computed: {
    ...mapState("auth", {
      loading: "isLoading",
    }),
  },
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.$t("general.validations.passwordRequired")));
      } else if (value.length < 5) {
        callback(new Error(this.$t("general.validations.passwordMinLength")));
      } else {
        if (this.form.passwordConfirm !== "") {
          this.$refs.resetPasswordForm.validateField("passwordConfirm");
        }
        callback();
      }
    };

    const validatePasswordConfirm = (rule, value, callback) => {
      if (value === "") {
        callback(new Error(this.$t("general.validations.passwordRequired")));
      } else if (value !== this.form.password) {
        callback(new Error(this.$t("general.validations.passwordMatch")));
      } else {
        callback();
      }
    };

    return {
      form: {
        password: "",
        passwordConfirm: "",
      },
      user: {
        email: "",
      },
      rules: {
        password: [
          {
            validator: validatePassword,
            trigger: "blur",
          },
        ],
        passwordConfirm: [
          {
            validator: validatePasswordConfirm,
            trigger: "blur",
          },
        ],
      },
    };
  },
  created() {
    this._validateAuthKey(this.$route.query.key);
  },
  methods: {
    ...mapActions("auth", ["resetPasswordValidator", "resetPassword"]),
    sendPassword() {
      this.$refs.resetPasswordForm.validate(async (valid) => {
        if (!valid) {
          return false;
        }

        try {
          const payload = {
            key: this.$route.query.key,
            password: this.form.password,
          };
          await this.resetPassword(payload);
          Router.push({
            name: "login",
          });
        } catch (error) {
          console.log(error);
        }
      });
    },
    async _validateAuthKey(key) {
      try {
        const response = await this.resetPasswordValidator(key);
        this.user.email = response.email;
      } catch (error) {
        Router.push({
          name: "forgotPassword",
        });
        ElMessageBox.alert(this.$t("resetPassword.error"), {
          type: "error",
          confirmButtonClass: "el-button--danger",
        });
      }
    },
  },
};
</script>
