export const handlePhone = (event: React.KeyboardEvent<HTMLInputElement>) => {
  const input = event.target as HTMLInputElement;
  input.value = phoneMask(input.value)
}

export const phoneMask = (value: string) => {
  if (!value) return ""
  value = value.replace(/\D/g,'')

  value = value.replace(/(\d{2})(\d)/, "($1) $2")
  value = value.replace(/(\d)(\d{4})(\d{4})$/, "$1 $2-$3")

  return value
}

export function removePhoneMask(value: string): string {
  return value.replace(/\D/g, '');
}
