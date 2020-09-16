import React, { FC } from 'react'
import StepWizard from 'react-step-wizard'

import { SelectFlavor, SelectFrequency, SelectAmount } from './steps'

export const SubscriptionWizard: FC = () => {
  return (
    <StepWizard isHashEnabled>
      <SelectFlavor />
      <SelectFrequency />
      <SelectAmount />
      {/* <button onClick={StepWizard.props.previousStep}>Previous Step</button>
      <button onClick={StepWizard.props.nextStep}>Next Step</button> */}
    </StepWizard>
  )
}
