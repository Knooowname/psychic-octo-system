import { z } from "zod";
import { Button } from "../../ui/Button/Button";
import { FormInput } from "../../ui/FormInput/FormInput";
import "./RegisterForm.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { registerNewUser } from "../../store/slices/userSlice";
import { closeModal, openModal } from '../../store/slices/modalSlice'
import { useModalCloseWithEscape } from "../../hooks/useModalCloseWithEscape";

const registerFormSchema = z
  .object({
    email: z
      .string({ required_error: "Введите электронную почту" })
      .email("Введите корректный адрес электронной почты"),
    name: z
      .string({ required_error: "Введите имя" })
      .min(1, "Имя не может быть пустым"),
    surname: z
      .string({ required_error: "Введите фамилию" })
      .min(1, "Фамилия не может быть пустой"),
    password: z
      .string({ required_error: "Введите пароль" })
      .min(4, "Пароль должен быть не менее 4 символов"),
    confirmPassword: z
      .string({ required_error: "Подтвердите пароль" })
      .min(4, "Пароль должен быть не менее 4 символов"),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Пароли не совпадают",
        path: ["confirmPassword"],
      });
    }
  });

type RegisterFormValues = z.infer<typeof registerFormSchema>;

export const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.user.loading);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerFormSchema),
  });

  const onSubmit = async (data: RegisterFormValues) => {
    const {confirmPassword, ...userData} = data
    await dispatch(registerNewUser(userData)) ? dispatch(openModal('success')) : null
  }

  useModalCloseWithEscape('register')

  return (
    <div className="background_form">
      <div className="register_form_wrapper">
        <button className="close_form" onClick={() => dispatch(closeModal('register'))}></button>
        <picture className="register_form_pic">
          <img
            className="register_form_logo"
            src="./src/assets/img-genre/logo_black_text.png"
            alt="logo"
          />
        </picture>
        <h3 className="register_form_title">Регистрация</h3>
        <form
          className="register_form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormInput
            type={"email"}
            placeholder={"Электронная почта"}
            backgroundImg={"./src/assets/icons/email.svg"}
            width={"340"}
            {...register("email")}
            errorMessage={errors.email?.message}
          />
          <FormInput
            type={"text"}
            placeholder={"Имя"}
            backgroundImg={"./src/assets/icons/name.svg"}
            width={"340"}
            {...register("name")}
            errorMessage={errors.name?.message}
          />
          <FormInput
            type={"text"}
            placeholder={"Фамилия"}
            backgroundImg={"./src/assets/icons/name.svg"}
            width={"340"}
            {...register("surname")}
            errorMessage={errors.surname?.message}
          />
          <FormInput
            type={"password"}
            placeholder={"Пароль"}
            backgroundImg={"./src/assets/icons/password.svg"}
            width={"340"}
            {...register("password")}
            errorMessage={errors.password?.message}
          />
          <FormInput
            type={"password"}
            placeholder={"Подтвердите пароль"}
            backgroundImg={"./src/assets/icons/password.svg"}
            width={"340"}
            {...register("confirmPassword")}
            errorMessage={errors.confirmPassword?.message}
          />
          {/* {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )} */}
          <div className="margin"></div>
          <Button
            type={"submit"}
            disabled={false}
            variant={"primary"}
            width={"340"}
            isLoading={loading}
          >
            Создать аккаунт
          </Button>
        </form>
        <button className="btn_to_login" onClick={() => dispatch(openModal('auth'))}>У меня есть аккаунт</button>
      </div>
    </div>
  );
};
