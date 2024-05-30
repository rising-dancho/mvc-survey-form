import { useState } from 'react';

export function useFormModel() {
  const [formData, setFormData] = useState({
    basicInfo: {
      name: '',
      birthday: '',
      address: '',
      email: '',
      phone: '',
      height: '',
      weight: '',
    },
    medicalHistory: {
      drinkAlcohol: false,
      alcoholFrequency: '',
      smoke: false,
      smokeFrequency: '',
      bloodType: '',
      previousConditions: '',
    },
    familyRelations: [],
  });

  const updateBasicInfo = (info) => {
    setFormData({ ...formData, basicInfo: { ...formData.basicInfo, ...info } });
  };

  return {
    formData,
    updateBasicInfo,
  };
}
