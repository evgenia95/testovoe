import { extend } from "vee-validate";
import { required, alpha, alpha_num } from "vee-validate/dist/rules";

extend("required", {
  ...required,
  message: "Пожалуйста заполните поле"
});

extend("alpha", {
  ...alpha,
  message: "Значение должно состоять только из букв"
});
extend("alpha_num", {
  ...alpha_num,
  message: "Значение должно состоять только из букв и цифр"
});
