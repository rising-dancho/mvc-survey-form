import React, { useState } from 'react';
import { useFormModel } from '../models/formModel';
import BasicInfoForm from '../views/BasicInfoForm';
import MedicalHistoryForm from '../views/MedicalHistoryForm';
import FamilyRelationsForm from '../views/FamilyRelationsForm';
import Confirmation from '../views/Confirmation';
import ProgressBar from '../views/ProgressBar';

function FormController() {
  const {
    formData,
    updateBasicInfo,
    updateMedicalHistory,
    addFamilyRelation,
    resetForm,
  } = useFormModel();

  // Pagination
  const [step, setStep] = useState(1);
  const totalSteps = 4;
  const stepBack = 1;

  const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
  const previousStep = () => setStep((prev) => Math.max(prev - 1, stepBack));

  return (
    <div>
      {step === 1 && (
        <div>
          <ProgressBar step={step} totalSteps={totalSteps} />
          <BasicInfoForm
            data={formData.basicInfo}
            onChange={updateBasicInfo}
            onNext={nextStep}
            onPrevious={previousStep}
          />
        </div>
      )}
      {step === 2 && (
        <div>
          <ProgressBar step={step} totalSteps={totalSteps} />
          <MedicalHistoryForm
            data={formData.medicalHistory}
            onChange={updateMedicalHistory}
            onNext={nextStep}
            onPrevious={previousStep}
          />
        </div>
      )}
      {step === 3 && (
        <div>
          <ProgressBar step={step} totalSteps={totalSteps} />
          <FamilyRelationsForm
            data={formData.familyRelations}
            onAddRelation={addFamilyRelation}
            onNext={nextStep}
            onPrevious={previousStep}
          />
        </div>
      )}
      {step === 4 && (
        <div>
          <Confirmation
            onReset={() => {
              resetForm();
              setStep(1);
            }}
            step={step}
            totalSteps={totalSteps}
          />
        </div>
      )}
    </div>
  );
}

export default FormController;
