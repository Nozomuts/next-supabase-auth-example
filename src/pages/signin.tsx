import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { Form } from "../components/Form";
import { supabase } from "../util/supabase";

type IForm = {
  email: string;
  password: string;
};

const Signin: NextPage = () => {
  const { register, handleSubmit } = useForm<IForm>();
  const handleSignin = ({ email, password }: IForm) => {
    supabase.auth.signIn({ email, password });
  };

  const inputList = [
    { type: "email", name: "email", ref: register },
    { type: "password", name: "password", ref: register },
  ];

  return (
    <Form
      onSubmit={handleSubmit(handleSignin)}
      inputList={inputList}
      buttonText="サインイン"
    />
  );
};

export default Signin;
