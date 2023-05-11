<template>
  <section class="bg-[url('./assets/backgroundImage.svg')]">
    <div class="flex justify-center items-center h-screen">
      <div class="relative bg-white w-2/4 py-12 px-20 drop-shadow-xl">
        <div v-if="noRecoveryLinkNeeded">
          <CompanyHeaderLogo />
          <main class="flex flex-col gap-4">
            <div v-if="rememberedPassword">
              <LoginForm @rememberedPassword="toggleRememberedPassword" />
            </div>
            <div v-else-if="!rememberedPassword">
              <ForgotPasswordForm
                @isRecoveryLinkNeeded="toggleBothRememberedAndLink"
                @email="toggleEmailId"
              />
            </div>
          </main>
        </div>

        <div
          v-else-if="!noRecoveryLinkNeeded"
          class="flex flex-col items-center"
        >
          <div v-if="!resetPassword">
            <VerifyEmailForm
              @toggleResetPassword="toggleResetPassword"
              :email="this.email"
            />
          </div>
          <div v-if="resetPassword && !resetPasswordSuccess">
            <ResetPasswordForm
              @resetPasswordSuccess="toggleresetPasswordSuccess"
            />
          </div>
          <div v-if="resetPasswordSuccess">
            <ResetPasswordSuccess
              @noRecoveryLinkNeeded="toggleNoRecoveryLinkNeeded"
              @rememberedPassword="toggleRememberedPassword"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import InputField from "../components/InputField.vue";
import LoginForm from "../form/loginForm.vue";
import CompanyHeaderLogo from "../components/CompanyHeaderLogo.vue";
import ForgotPasswordForm from "../form/ForgotPasswordForm.vue";
import VerifyEmailForm from "../form/VerifyEmailForm.vue";
import ResetPasswordForm from "../form/ResetPasswordForm.vue";
import ResetPasswordSuccess from "../form/ResetPasswordSuccess.vue";

export default {
  components: {
    InputField,
    LoginForm,
    CompanyHeaderLogo,
    ForgotPasswordForm,
    VerifyEmailForm,
    ResetPasswordForm,
    ResetPasswordSuccess,
  },

  data() {
    return {
      email: "",
      isPasswordVisible: false,
      rememberedPassword: true,
      noRecoveryLinkNeeded: true,
      resetPassword: false,
      resetPasswordSuccess: false,
    };
  },

  methods: {
    toggleRememberedPassword(data) {
      this.rememberedPassword = data;
    },
    toggleNoRecoveryLinkNeeded(data) {
      this.noRecoveryLinkNeeded = data;
    },
    toggleBothRememberedAndLink(data) {
      this.toggleRememberedPassword(data);
      this.toggleNoRecoveryLinkNeeded(data);
    },
    toggleResetPassword(data) {
      this.resetPassword = data;
    },
    toggleEmailId(data) {
      this.email = data;
    },
    toggleresetPasswordSuccess() {
      this.resetPasswordSuccess = true;
    },
  },
};
</script>
