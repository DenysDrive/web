<template>
  <q-page class="row justify-center q-pt-lg">

    <q-card class="q-pt-lg" style="width: 350px; border: none; box-shadow: none;">
      <div v-if="mode == 'start'">
        <q-card-section>
          <div class="text-h6" style="margin-bottom: 20px">Sign In</div>
          <q-input v-model="email" label="Email" type="email" />
          <q-input v-model="password" label="Password" type="password" style="margin-top: 10px" />
        </q-card-section>

        <q-card-actions align="around" v-if="!loading || 1">
          <q-btn @click="signInWrapper" label="Sign In" />
          or
          <q-btn @click="signUpWrapper" label="Sign Up" />
        </q-card-actions>
        <q-card-actions align="center" v-if="loading">
          <div class="loader">
            <span class="q-mr-lg"> LOADING </span>
            <q-spinner-dots style="font-size: 150%"/>
          </div>
        </q-card-actions>
      </div>

      <div v-if="mode == 'verify'">
      <q-card-section>
        <div class="text-h6" style="margin-bottom: 20px">Verify email</div>
        <div style="margin-bottom: 10px; font-size: 115%; opacity: 0.7;">Please check your email for the verification code</div>
        <q-input
          v-model="verificationCode" label="Verification code"
        />

        <q-card-actions align="around" class="q-mt-md q-pl-md q-pr-md">
          <q-btn @click="signInWrapper" label="Verify"/>

          <q-space/>
          <q-btn @click="signUpWrapper" label="Resend"/>
        </q-card-actions>
      </q-card-section>
      </div>

      <div v-if="error" class="text-negative q-mt-md">{{ error }}</div>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useQuasar } from 'quasar'
import { signIn, signUp } from "src/services/auth";

export default defineComponent({
  name: 'SignIn',
  setup () {
    const $q = useQuasar()
    // // const router = useRouter();
    const email = ref('denys.zinoviev@gmail.com')
    const password = ref('12345678')
    const error = ref('')
    const verificationCode = ref('')
    const mode = ref('start')
    const loading = ref(false)


    const signUpWrapper = async () => {
      loading.value = true
      await signUp(email.value, password.value).then(r =>
        console.log(r)
      ).catch(e => {
        $q.notify({
          message: `Error: ${e}`,
          color: 'red'
        })
      })
      loading.value = false
    }
    const signInWrapper = async () => {
      loading.value = true
      await signIn(email.value, password.value).then(r =>
        console.log(r)
      ).catch(e => {
        $q.notify({
          message: `Error: ${e}`,
          color: 'red'
        })
      })
      loading.value = false
    }

    return {
      email,
      password,
      error,
      mode,
      verificationCode,
      loading,
      signInWrapper,
      signUpWrapper
    }
  }
})
</script>

<style scoped lang="scss">
.q-btn {
  width: 5rem;
  background-color: black;
  color: white;
}
.loader {
  background-color: black; padding: 8px 20px; border-radius: 4px; color: white;
  display:flex;
  flex-direction: row;
}
</style>
