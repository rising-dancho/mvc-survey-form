import React from 'react';
import BasicInfoForm from '../views/BasicInfoForm';
import { useFormModel } from '../models/formModel';

function FormController() {
  const { formData, updateBasicInfo } = useFormModel();
  return (
    <div>
      <BasicInfoForm data={formData.basicInfo} onChange={updateBasicInfo} />
    </div>
  );
}

export default FormController;
