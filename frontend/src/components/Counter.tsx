import { useEffect, useState } from 'react'

interface CounterProps {
  value: number
  suffix: string
}

export function Counter({ value, suffix }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const steps = 34
    let current = 0
    const timer = window.setInterval(() => {
      current += 1
      setCount(Number(((value / steps) * current).toFixed(value % 1 === 0 ? 0 : 1)))
      if (current >= steps) window.clearInterval(timer)
    }, 28)

    return () => window.clearInterval(timer)
  }, [value])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}
