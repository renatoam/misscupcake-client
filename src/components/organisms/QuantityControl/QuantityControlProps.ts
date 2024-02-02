export interface QuantityControlProps {
  inputProps?: NativeInput
  handleDecrease(event: React.MouseEvent<HTMLButtonElement>): void;
  handleIncrease(event: React.MouseEvent<HTMLButtonElement>): void;
  handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
}
