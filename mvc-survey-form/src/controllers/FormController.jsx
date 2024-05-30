import React, { useState } from 'react';
import { useFormModel } from '../models/formModel';
import BasicInfoForm from '../views/BasicInfoForm';
import MedicalHistoryForm from '../views/MedicalHistoryForm';
import FamilyRelationsForm from '../views/FamilyRelationsForm';
import Confirmation from '../views/Confirmation';

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
        <BasicInfoForm
          data={formData.basicInfo}
          onChange={updateBasicInfo}
          onNext={nextStep}
          onPrevious={previousStep}
        />
      )}
      {step === 2 && (
        <MedicalHistoryForm
          data={formData.medicalHistory}
          onChange={updateMedicalHistory}
          onNext={nextStep}
          onPrevious={previousStep}
        />
      )}
      {step === 3 && (
        <FamilyRelationsForm
          data={formData.familyRelations}
          onAddRelation={addFamilyRelation}
          onNext={nextStep}
          onPrevious={previousStep}
        />
      )}
      {step === 4 && (
        <Confirmation
          onReset={() => {
            resetForm();
            setStep(1);
          }}
        />
      )}
    </div>
  );
}

export default FormController;
