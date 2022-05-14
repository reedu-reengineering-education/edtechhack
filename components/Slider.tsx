import { Transition } from '@headlessui/react'
import { useEffect, useState } from 'react'
import { Range } from 'react-range'

type SliderProps = {
  name: string
  min: number
  max: number
  steps: number
  onChange: (value: number) => any
  answer?: number
  average?: number
}

const Slider = ({
  name,
  min,
  max,
  steps,
  onChange,
  answer,
  average,
}: SliderProps) => {
  const [value, setValue] = useState(answer || min)
  const [showValue, setShowValue] = useState(false)

  useEffect(() => {
    setValue(answer || min)
  }, [min, max, steps, answer])

  return (
    <div className="relative mx-4">
      {average && (
        <p className="mb-2 font-semibold text-zinc-600">
          Durchschnittliche Antwort: {average}
        </p>
      )}
      <p className="mb-2 text-lg font-semibold">{name}</p>
      {average && (
        <div
          className="absolute"
          style={{
            left: `${average * max}%`,
          }}
        >
          <div className="flex h-6 w-6 -translate-x-3 items-center justify-center rounded-full bg-mango text-xs shadow focus:outline-none">
            {average}
          </div>
          <div className="h-11 w-1 -translate-x-1/2  bg-mango"></div>
        </div>
      )}
      <div
        className="my-2 py-16"
        onMouseOver={() => setShowValue(true)}
        onMouseLeave={() => setShowValue(false)}
        onTouchStart={() => setShowValue(true)}
        onTouchEnd={() => setShowValue(false)}
      >
        <Range
          step={steps}
          min={min}
          max={max}
          values={[answer || value]}
          onChange={values => {
            setValue(values[0])
            onChange(values[0])
          }}
          disabled={answer != undefined}
          renderTrack={({ props, children }) => (
            <div className="h-1 w-full bg-zinc-900" {...props}>
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              className="h-8 w-8 rounded-full bg-mango shadow focus:outline-none"
              {...props}
            >
              <Transition
                show={showValue}
                enter="transition duration-75"
                enterFrom="opacity-0 translate-y-full"
                enterTo="opacity-100 translate-y-0"
                leave="transition duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0 translate-y-full"
              >
                <div className="mx-auto flex h-8 w-6 -translate-y-full items-center justify-center focus:outline-none">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900 text-xs text-white shadow focus:outline-none">
                    {value}
                  </div>
                </div>
              </Transition>
            </div>
          )}
          renderMark={({ props, index }) => (
            <div className="h-2 w-2 rounded-full bg-zinc-700" {...props}>
              <p className="mt-8">{min + index * steps}</p>
            </div>
          )}
        />
      </div>
    </div>
  )
}

export default Slider
