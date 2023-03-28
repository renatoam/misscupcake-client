export interface InputProps extends NativeInput {
  validate?: Validate
  variant?: 'default' | 'invisible'
}

export interface InputError {
  message?: string
  error?: boolean
}

export type Validate = (field: string, value: string | number) => InputError | undefined
