<template>
  <v-layout>
    <el-form :model="loginForm" :rules="rules" ref="signInForm">
      <div class="tw-flex tw-h-screen">
        <div class="tw-flex tw-flex-col tw-w-72 tw-m-auto tw-mt-28">
          <img
            class="tw-w-100 tw-mb-5"
            src="../assets/bitacora-logo-black.svg"
          />

          <div>
            <el-form-item prop="email">
              <el-input
                class="tw-rounded tw-w-full"
                :placeholder="$t('general.inputs.email')"
                v-model="loginForm.email"
                data-test="signin-email"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                class="tw-rounded tw-w-full"
                :placeholder="$t('general.inputs.password')"
                v-model="loginForm.password"
                show-password
                data-test="signin-password"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                class="tw-w-full"
                type="primary"
                @click="signIn('signInForm')"
                :loading="isLoading"
                data-test="signin-form-button"
              >
                {{ $t("general.signIn") }}
              </el-button>
            </el-form-item>
            <div
              class="tw-text-red-500 tw-text-xs tw-text-center"
              v-if="loginFailed"
              data-test="signin-failed-login"
            >
              {{ $t("auth.failed") }}
            </div>
            <div class="tw-mb-5 tw-text-center">
              <router-link
                to="/forgot-password"
                class="tw-text-blue-400 tw-text-sm"
              >
                {{ $t("general.forgotPassword") }}
              </router-link>
            </div>
            <div class="tw-text-center">
              <el-button @click="signUp()" class="tw-w-full">
                {{ $t("general.signUp") }}
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </el-form>
  </v-layout>
</template>

<script>
import VLayout from "@/layouts/Default.vue";
import { mapState, mapActions } from "vuex";
import Router from "@/router";

export default {
  name: "SignIn",
  components: {
    VLayout,
  },
  computed: {
    ...mapState("auth", {
      isLoading: "isLoading",
      authenticated: "authenticated",
    }),
  },
  data() {
    return {
      ...mapActions("auth", ["login"]),
      loginFailed: false,
      loginForm: {
        email: "",
        password: "",
      },
      rules: {
        email: [
          {
            required: true,
            message: this.$t("general.validations.emailRequired"),
          },
          {
            type: "email",
            message: this.$t("general.validations.emailValid"),
          },
        ],
        password: {
          required: true,
          message: this.$t("general.validations.passwordRequired"),
        },
      },
    };
  },
  methods: {
    signIn(form) {
      this.$refs[form].validate(async (valid) => {
        if (!valid) {
          return false;
        }

        try {
          this.loginFailed = false;
          await this.login(this.loginForm);
          Router.push({
            name: "dashboard",
          });
        } catch (error) {
          this.loginFailed = true;
        }
      });
    },
    signUp() {
      Router.push({
        name: "signup",
      });
    },
  },
};
</script>
