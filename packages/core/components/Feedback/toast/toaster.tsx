import { useXbeshProviderCheck } from "../../Theme/xBeshTheme/xbeshProvider";
import {
  Toast,
  ToastViewport
} from "./toast"
import { useToast } from "./use-toast"

export function Toaster() {
  useXbeshProviderCheck();
  const { toasts } = useToast()

  return (
    <>
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast key={id} {...props}>
          <div className="grid gap-1">
            {title && <Toast.Title>{title}</Toast.Title>}
            {description && <Toast.Description>{description}</Toast.Description>}
          </div>
          {action}
          <Toast.Close />
        </Toast>
      ))}
      <ToastViewport />
    </>
  )
}
