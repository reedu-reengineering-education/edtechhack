import { Transition } from '@headlessui/react'
import type { NextPage } from 'next'
import { useState } from 'react'
import { Range } from 'react-range'

const Studio: NextPage = () => {
  const [values, setValues] = useState([2])
  const [showValue, setShowValue] = useState(false)
  const STEPS = 1

  console.log(values)
  return (
    <div>
      <h1 className="p-2 text-center text-6xl font-bold">Studio</h1>
      <div>
        <div
          className="py-16"
          onMouseOver={() => setShowValue(true)}
          onMouseLeave={() => setShowValue(false)}
          onTouchStart={() => setShowValue(true)}
          onTouchEnd={() => setShowValue(false)}
        >
          <Range
            step={STEPS}
            min={0}
            max={5}
            values={values}
            onChange={values => setValues(values)}
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
                      {values[0]}
                    </div>
                  </div>
                </Transition>
              </div>
            )}
            renderMark={({ props, index }) => (
              <div className="h-2 w-2 rounded-full bg-zinc-700" {...props} />
            )}
          />
        </div>
      </div>
    </div>
  )
}

export default Studio
