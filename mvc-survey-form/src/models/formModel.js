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

  // PAGE 3
  function addFamilyRelation(relation) {
    setFormData({
      ...formData,
      familyRelations: [...formData.familyRelations, relation],
    });
  }

  // PAGE 4
  const resetForm = () => {
    setFormData({
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
  };

  return {
    formData,
    updateBasicInfo,
    updateMedicalHistory,
    addFamilyRelation,
    resetForm,
  };
}
