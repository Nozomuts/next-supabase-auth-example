import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { Form } from "../components/Form";
import { supabase } from "../util/supabase";

type IForm = {
  email: string;
};

const Forgot: NextPage = () => {
  const { register, handleSubmit } = useForm<IForm>();

  const handleResetPassword = ({ email }: IForm) => {
    supabase.auth.api.resetPasswordForEmail(email);
  };

  const inputList = [{ type: "email", name: "email", ref: register }];

  return (
    <Form
      onSubmit={handleSubmit(handleResetPassword)}
      inputList={inputList}
      buttonText="パスワード再設定メール送信"
    />
  );
};

export default Forgot;
