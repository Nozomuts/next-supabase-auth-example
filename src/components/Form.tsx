import { FC } from "react";

type IProps = {
  onSubmit: any;
  buttonText: string;
  inputList: {
    name: string;
    ref: any;
    type: string;
  }[];
};

export const Form: FC<IProps> = ({ onSubmit, buttonText, inputList }) => {
  return (
    <form onSubmit={onSubmit}>
      {inputList.map((props) => (
        <label key={props.name}>
          <span>{props.name}</span>
          <input {...props} />
        </label>
      ))}
      <button type="submit">{buttonText}</button>
    </form>
  );
};
