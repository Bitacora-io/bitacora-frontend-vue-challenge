<template>
  <v-layout>
    <el-form :model="signUpForm" :rules="rules" ref="signUpForm">
      <div class="tw-flex tw-h-screen">
        <div class="tw-flex tw-flex-col tw-w-72 tw-m-auto tw-mt-28">
          <img
            class="tw-w-100 tw-mb-5"
            src="../assets/bitacora-logo-black.svg"
          />

          <div>
            <el-form-item prop="name">
              <el-input
                type="text"
                :placeholder="$t('general.inputs.name')"
                v-model="signUpForm.name"
                class="tw-rounded tw-w-full"
                data-test="signup-name"
              ></el-input>
            </el-form-item>
            <el-form-item prop="email">
              <el-input
                type="email"
                :placeholder="$t('general.inputs.email')"
                v-model="signUpForm.email"
                class="tw-rounded tw-w-full"
                data-test="signup-email"
              ></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                type="password"
                :placeholder="$t('general.inputs.password')"
                v-model="signUpForm.password"
                class="tw-rounded tw-w-full"
                data-test="signup-password"
              ></el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                @click="signUp('signUpForm')"
                class="tw-w-full"
                :loading="loading"
                data-test="signup-send-form"
              >
                {{ $t("general.signUp") }}
              </el-button>
            </el-form-item>
            <div
              class="tw-text-red-500 tw-text-xs tw-text-center"
              v-if="signUpFailed"
              data-test="signup-failed-registry"
            >
              {{ $t("general.signUpError") }}
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
  name: "SignUp",
  components: {
    VLayout,
  },
  computed: {
    ...mapState("auth", {
      loading: "loading",
    }),
  },
  data() {
    return {
      ...mapActions("auth", ["register"]),
      signUpFailed: false,
      signUpForm: {
        name: "",
        email: "",
        password: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: this.$t("general.validations.nameRequired"),
          },
        ],
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
    signUp(form) {
      this.$refs[form].validate(async (valid) => {
        if (!valid) {
          return false;
        }

        try {
          this.signUpFailed = false;
          await this.register(this.signUpForm);
          Router.push({
            name: "dashboard",
          });
        } catch (error) {
          this.signUpFailed = true;
        }
      });
    },
  },
};
</script>
