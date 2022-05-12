import { Spacer } from '@/components/Elements/Spacer'
import Slider from '@/components/Slider'
import type { NextPage } from 'next'

const Studio: NextPage = () => {
  return (
    <div>
      <h1 className="p-2 text-center text-6xl font-bold">Studio</h1>
      <Slider
        name="Wie gesund fühlen Sie sich heute?"
        min={0}
        max={10}
        steps={2}
        onChange={() => {}}
      />
      <Spacer size="lg" />
      <Slider
        name="Wie gesund fühlen Sie sich heute?"
        min={0}
        max={10}
        steps={2}
        onChange={() => {}}
      />
    </div>
  )
}

export default Studio
