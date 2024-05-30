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
  });

  // PAGE 1
  function updateBasicInfo(info) {
    setFormData({ ...formData, basicInfo: { ...formData.basicInfo, ...info } });
  }

  // PAGE 2
  function updateMedicalHistory(history) {
    setFormData({
      ...formData,
      medicalHistory: { ...formData.medicalHistory, ...history },
    });
  }

  return {
    formData,
    updateBasicInfo,
    updateMedicalHistory,
  };
}
