<template>
  <section class="bg-[url('./assets/backgroundImage.svg')]">
    <div class="flex justify-center items-center h-screen">
      <div class="relative bg-white w-2/4 py-12 px-20 drop-shadow-xl">
        <div v-if="noRecoveryLinkNeeded">
          <CompanyHeaderLogo />
          <main class=" flex flex-col gap-4">
            <div v-if="rememberedPassword">
              <LoginForm @rememberedPassword="toggleRememberedPassword" />
            </div>
            <div v-else-if="!rememberedPassword">
              <ForgotPasswordForm
                @isRecoveryLinkNeeded="toggleNoRecoveryLinkNeeded"
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
          <div v-else>
            <ResetPasswordForm />
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

export default {
  components: {
    InputField,
    LoginForm,
    CompanyHeaderLogo,
    ForgotPasswordForm,
    VerifyEmailForm,
    ResetPasswordForm,
  },

  data() {
    return {
      email: "",
      isPasswordVisible: false,
      rememberedPassword: true,
      noRecoveryLinkNeeded: true,
      resetPassword: false,
    };
  },

  methods: {
    toggleRememberedPassword(data) {
      this.rememberedPassword = data;
    },
    toggleNoRecoveryLinkNeeded(data) {
      this.noRecoveryLinkNeeded = data;
    },
    toggleResetPassword(data) {
      this.resetPassword = data;
    },
    toggleEmailId(data) {
      this.email = data;
    },
  },
};
</script>
