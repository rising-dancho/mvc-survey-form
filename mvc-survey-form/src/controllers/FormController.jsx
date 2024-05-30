import React from 'react';
import { useFormModel } from '../models/formModel';
import BasicInfoForm from '../views/BasicInfoForm';
import MedicalHistoryForm from '../views/MedicalHistoryForm';

function FormController() {
  const { formData, updateBasicInfo, updateMedicalHistory } = useFormModel();

  return (
    <div>
      <BasicInfoForm data={formData.basicInfo} onChange={updateBasicInfo} />
      <MedicalHistoryForm
        data={formData.medicalHistory}
        onChange={updateMedicalHistory}
      />
    </div>
  );
}

export default FormController;
