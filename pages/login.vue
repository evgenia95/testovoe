<template lang="pug">
  section
    ValidationObserver(v-slot='{ invalid }')
      form.form-login(@submit.prevent='onSubmit')
        .form-content
          div
            ValidationProvider(rules='required', v-slot='{ errors }')
              input.form-input(placeholder='Логин', type='text', v-model='login')
              .error {{ errors[0] }}
          div
            ValidationProvider(rules='required', v-slot='{ errors }')
              input.form-iput(placeholder='Пароль', type='text', v-model='password')
              .error {{ errors[0] }}
        button.btn.btn-primary(:disabled='invalid', type='submit') Войти

</template>

<script>
  import { ValidationProvider, ValidationObserver } from "vee-validate";
  export default {
    components: {
      ValidationProvider,
      ValidationObserver
    },
    data: () => ({
      login: "",
      password: ""
    }),
    layout: 'empty',
    methods: {
      onSubmit() {
        this.$router.push('/profile')
      }
    }
  }
</script>


<style lang="scss">
  .form-login {
    max-width: calc(100% - 60px);
    width: 350px;
    margin: auto;

    input[type="text" i] {
      margin-bottom: 7px;
      padding: 13px 20px;
      width: 100%;
      background: #FFFFFF;
      border: 1px solid #CBCBCB;
      box-sizing: border-box;
      border-radius: 10px;
      color: #111;

      &::placeholder {
        color: #9496A6;
      }
    }

    button {
      padding: 13px 20px;
      width: 100%;
      background: #D6073D;
      border: 1px solid #D6073D;
      box-sizing: border-box;
      border-radius: 10px;
      cursor: pointer;
      color: #fff;

      &:disabled {
        opacity: 0.5;
        pointer-events: none;
      }

      &:hover {
        background: #fff;
        color: #D6073D;
      }
    }

    input[type="text" i]:focus, button:focus {
      outline: none;
    }
  }

  .error {
    margin: 0 0 10px;
    color: #D6073D;
  }

  @media (max-width: 767px) {
    .logo {
      margin-bottom: 25px;
    }
  }
</style>