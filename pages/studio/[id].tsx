import { Button } from '@/components/Elements/Button'
import { InputField } from '@/components/Elements/Input'
import AddSliderModal from '@/components/Modal/AddSliderModal'
import BaseModal from '@/components/Modal/BaseModal'
import Slider from '@/components/Slider'
import { PlusIcon, ScaleIcon } from '@heroicons/react/outline'
import { Scale } from '@prisma/client'
import { useRouter } from 'next/router'
import { useState } from 'react'

const SurveyStudio = () => {
  const [scaleModal, setScaleModal] = useState(false)

  return (
    <div>
      <InputField
        type={'text'}
        label="Titel der Umfrage"
        placeholder="Meine Umfrage"
      />
      {/* {scales.map((s, i) => (
        <Slider key={i} {...s} onChange={() => {}} />
      ))} */}
      <Button
        className="mx-auto"
        startIcon={<PlusIcon className="h-4 w-4" />}
        onClick={() => setScaleModal(!scaleModal)}
      >
        Likert Skala hinzufügen
      </Button>
      <AddSliderModal
        isOpen={scaleModal}
        onClose={() => setScaleModal(false)}
      />
    </div>
  )
}

export default SurveyStudio
