
import { AppError } from "@/app/layers/errors"
import { useCallback, useEffect, useState } from "react"

export default function useRequest(fetcher: any, options?: unknown) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<AppError | null>(null)
  const [data, setData] = useState<any>(null)

  const executeRequest = useCallback(async () => {
    const response = await fetcher(options)

    if (response.error) {
      setError(response)
      console.error('Notify Error: ', response.message)
      return
    }

    setData(response)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    executeRequest()
  }, [])

  return {
    error,
    isLoading,
    data
  }
}
