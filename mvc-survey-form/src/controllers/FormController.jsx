import React from 'react';
import { useFormModel } from '../models/formModel';
import BasicInfoForm from '../views/BasicInfoForm';
import MedicalHistoryForm from '../views/MedicalHistoryForm';
import FamilyRelationsForm from '../views/FamilyRelationsForm';
import Confirmation from '../views/Confirmation';

function FormController() {
  const { formData, updateBasicInfo, updateMedicalHistory, addFamilyRelation } =
    useFormModel();

  return (
    <div>
      <BasicInfoForm data={formData.basicInfo} onChange={updateBasicInfo} />
      <MedicalHistoryForm
        data={formData.medicalHistory}
        onChange={updateMedicalHistory}
      />
      <FamilyRelationsForm
        data={formData.familyRelations}
        onAddRelation={addFamilyRelation}
      />
      <Confirmation
        onReset={() => {
          resetForm();
          setStep(1);
        }}
      />
    </div>
  );
}

export default FormController;
