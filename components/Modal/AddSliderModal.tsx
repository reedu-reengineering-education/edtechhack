import { useState } from 'react'
import { Button } from '../Elements/Button'
import { InputField } from '../Elements/Input'
import { Spacer } from '../Elements/Spacer'
import Slider from '../Slider'
import BaseModal from './BaseModal'

type BaseModalProps = {
  isOpen: boolean
  onClose: () => any
}

const AddSliderModal = ({ isOpen, onClose }: BaseModalProps) => {
  const [name, setName] = useState('')
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(10)
  const [steps, setSteps] = useState(1)

  return (
    <BaseModal isOpen={isOpen} closeModal={onClose} title="Neue Likert Skala">
      <InputField
        type="text"
        label="Frage"
        onChange={e => setName(e.target.value)}
      />
      <div className="flex w-full">
        <div className="mr-2 flex-1">
          <InputField
            type="number"
            label="Minimum"
            onChange={e => setMin(Number(e.target.value))}
            defaultValue={0}
          />
        </div>
        <div className="ml-2 flex-1">
          <InputField
            type="number"
            label="Maximum"
            onChange={e => setMax(Number(e.target.value))}
            defaultValue={10}
          />
        </div>
      </div>
      <InputField
        type="number"
        label="Schritte"
        onChange={e => setSteps(Number(e.target.value))}
        defaultValue={1}
      />
      <Button className="mx-auto" onClick={onClose}>
        Speichern
      </Button>
      <Spacer size="md" />
      <div className="my-4 w-full rounded-lg border-2 border-zinc-100">
        <div className="mx-auto bg-zinc-100 p-3 text-sm font-semibold">
          Vorschau
        </div>
        <div className="p-4">
          <Slider
            min={min}
            max={max}
            name={name}
            steps={steps}
            onChange={() => {}}
          />
        </div>
      </div>
    </BaseModal>
  )
}

export default AddSliderModal
