import { Button } from "../../ui/Button/Button";
import { FormInput } from "../../ui/FormInput/FormInput";
import "./LoginForm.css";
// import { useMutation } from "@tanstack/react-query";
// import { userLogin } from "../../api/auth";
// import queryClient from "../../api/queryClient";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";
import { loginUser } from "../../store/slices/userSlice";
import { closeModal, openModal } from '../../store/slices/modalSlice'
import { useModalCloseWithEscape } from "../../hooks/useModalCloseWithEscape";


const loginFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4, "Поле должно содержать не менее 4 символов"),
  });

type LoginFormValues = z.infer<typeof loginFormSchema>

export const LoginForm = () => {

  const dispatch = useAppDispatch()
  const loading = useAppSelector(state => state.user.loading)

  const { register, handleSubmit, formState: {errors} } = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    const userData = data
    await dispatch(loginUser(userData)) ? dispatch(closeModal('auth')) : null
  }

  useModalCloseWithEscape('auth')

  return (
    <div className="wrapper_login">
      <div className="login_form_wrapper">
        <button className="close_form" onClick={() => dispatch(closeModal('auth'))}></button>
        <picture className="login_form_pic">
          <img
            className="login_form_logo"
            src="./src/assets/img-genre/logo_black_text.png"
            alt="logo"
          />
        </picture>
        <form
          className="login_form"
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
            type={"password"}
            placeholder={"Пароль"}
            backgroundImg={"./src/assets/icons/password.svg"}
            width={"340"}
            {...register("password")}
            errorMessage={errors.password?.message}
          />
          <div></div>
          <Button
            type={"submit"}
            disabled={false}
            variant={"primary"}
            width={"340"}
            isLoading={loading}
          >
            Войти
          </Button>
        </form>
        <button className="login_form_register_btn" onClick={() => dispatch(openModal('register'))}>Регистрация</button>
      </div>
    </div>
  );
};
