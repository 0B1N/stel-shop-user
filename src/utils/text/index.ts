export function emailMasking(email: string) {
  const len = email.toString().split("@")[0].length - 2;

  return email.replace(new RegExp(`.(?=.{0,${len}}@)`, "gi"), "*");
}
