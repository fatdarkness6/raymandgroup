import { useQuasar } from 'quasar'

export function useNotify() {
  const $q = useQuasar()

  const success = (message: string) => {
    $q.notify({
      type: 'positive',
      message,
      icon: 'check_circle',
    })
  }

  const error = (message: string) => {
    $q.notify({
      type: 'negative',
      message,
      icon: 'fas fa-xmark',
    })
  }

  const warning = (message: string) => {
    $q.notify({
      type: 'warning',
      message,
      icon: 'warning',
    })
  }

  return { success, error, warning }
}
