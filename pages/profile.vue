<template lang="pug">
  div
    h1
      | Мой профиль
    ValidationObserver(v-slot='{ invalid }')
      form.form.form--profile
        .form-group
          .form__left
            ValidationProvider(rules='alpha' v-slot='{ errors }')
              .form__input
                label(for='name') Имя
                input#name.form-control(v-model='name' type='text')
                .error {{ errors[0] }}
            ValidationProvider(rules='alpha' v-slot='{ errors }')
              .form__input
                label(for='surname') Фамилия
                input#surname.form-control(v-model='surname' type='text')
              .error {{ errors[0] }}
          .form__right
            ValidationProvider(rules='alpha_num' v-slot='{ errors }')
              .form__input
                label(for='changePassword') Сменить пароль
                input#changePassword.form-control(v-model='changePassword' type='text')
              .error {{ errors[0] }}
            ValidationProvider(rules='alpha_num' v-slot='{ errors }')
              .form__input
                label(for='changeLogin') Сменить логин
                input#changeLogin.form-control(v-model='changeLogin' type='text')
              .error {{ errors[0] }}
            button.btn.btn-primary(:disabled='invalid' type='submit') Сохранить


</template>

<script>
  import { ValidationProvider, ValidationObserver } from "vee-validate";
  export default {
    components: {
      ValidationProvider,
      ValidationObserver
    },
    data: () => ({
      name: "",
      surname: "",
      changeLogin: "",
      changePassword: ""
    }),
  }
</script>

<style lang="scss">
  .form {
	margin-bottom: 30px;
	padding: 30px 40px;
	box-sizing: border-box;
	width: 100%;
	background: #FFFFFF;
	border-radius: 10px;
	label {
		margin-bottom: 10px;
		display: block;
		color: #6F849C;
	}
	input[type="text"i] {
		margin-bottom: 7px;
		padding: 5px 0;
		width: 100%;
		background: #FFFFFF;
		border: none;
		border-bottom: 1px solid #CBCBCB;
		box-sizing: border-box;
		color: #111;
		&:focus {
			outline: none;
		}
	}
	button {
		padding: 13px 20px;
		float: right;
		width: 200px;
		max-width: 100%;
		background: #D6073D;
		border: 1px solid #D6073D;
		box-sizing: border-box;
		border-radius: 10px;
		cursor: pointer;
		color: #fff;
		&:hover {
			background: #fff;
			color: #D6073D;
		}
		&:focus {
			outline: none;
		}
	}
}
.form-group {
	display: flex;
	justify-content: space-between;
}
.form__left {
	width: calc(50% - 40px);
}
.form__right {
	width: calc(50% - 40px);
}
.form-login {
	button {
		&:disabled {
			opacity: 0.5;
			pointer-events: none;
		}
	}
}
.error {
	margin: 0 0 10px;
	color: #D6073D;
}
@media (max-width: 1025px) {
	.page-left {
		padding: 35px 20px;
		width: 200px;
	}
	main {
		padding: 35px 30px;
		width: calc(100% - 200px);
	}
	.form {
		margin-bottom: 30px;
		padding: 30px 40px;
	}
}
@media (max-width: 767px) {
   main {
    padding: 35px 20px;
    width: 100%;
  }

	.form-group {
		display: block;
	}
	.form__left {
		width: 100%;
	}
	.form__right {
		width: 100%;
	}
	.form {
		button {
			margin: auto;
			float: none;
			display: block;
		}
	}
}

</style>