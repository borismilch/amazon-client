export const pureLoading = (action: () => void) => async (fn: (bool: boolean) => void) => {
  fn(true)
  await action()
}