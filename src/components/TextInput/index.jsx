import { InputContainer } from "./style";
export default function TextInput({
  secondary = false,
  error,
  label,
  field,
  register,
  ...rest
}) {
  return (
    <InputContainer secondary={secondary} error={error}>
      <label>
        <input
          autoComplete="off"
          {...rest}
          {...register(field)}
          placeholder=" "
        />
        <span>{label}</span>
      </label>
      <span className="error-message">{error}</span>
    </InputContainer>
  );
}
