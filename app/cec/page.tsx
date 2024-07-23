//putting everything together
'use client' //add this to avoid runtime error resulting from using react hooks
import { useState } from 'react'
import Image from 'next/image'

//our input form component to take user height and weight info
interface InputFormProps {
  label: string
  value: number
  isDisabled?: boolean
  onChange: (value: number) => void
}

const InputForm: React.FC<InputFormProps> = ({ label, value, onChange, isDisabled = false }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="number"
        value={value}
        disabled={isDisabled}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
    </div>
  )
}
interface CalculateButtonProps {
  onClick: () => void
}

const BmiCalculator: React.FC = () => {
  const [current_e_steps, setCurrent_e_steps] = useState(445)
  const [measured_filament, setMeasured_filament] = useState(200)
  const [amount_extrude, setAmount_extrude] = useState(180)
  const [remaining_filament, setReamining_filament] = useState(0)
  const [e_steps, setE_steps] = useState('20')

  const calc_e_steps = (val: number) => {
    setReamining_filament(val)
    const e_calc = ((amount_extrude * current_e_steps) / (measured_filament - val)).toFixed(2)
    setE_steps(e_calc)
  }

  return (
    <>
      <h1>Calculate e-steps</h1>
      <Image
        src="/static/images/content/2023/e-steps-calculation.jpg" // Path to the image in the public directory
        alt="How calculcate"
        height={200}
        width={400}
      />
      <div>
        <InputForm
          label="The current E step value "
          value={current_e_steps}
          onChange={setCurrent_e_steps}
        />
        Get the current E Step value (You can get using the M503 command)
        <InputForm
          label="Measured filament "
          value={measured_filament}
          onChange={setMeasured_filament}
          isDisabled={true}
        />
        Amount of filament measured for the extruder calibration.
        <InputForm
          label="Amount requested to extruded "
          value={amount_extrude}
          onChange={setAmount_extrude}
          isDisabled={true}
        />
        The amount of filament extruded
        <InputForm
          label="Remaining filament amount "
          value={remaining_filament}
          onChange={calc_e_steps}
        />
        The amount of filament extruded
        <div>New E Step value is: {e_steps}</div>
      </div>
    </>
  )
}

export default BmiCalculator
