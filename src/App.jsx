import { useState } from 'react';
import PersonalInfo from './components/PersonalInfo';
import TravelPreferences from './components/TravelPreferences';
import HealthSafety from './components/HealthSafety';
import MarsBackground from './components/MarsBackground';

export default function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="app-container">
      <MarsBackground />
      <div className="form-container">
        {step === 1 && <PersonalInfo formData={formData} setFormData={setFormData} nextStep={nextStep} />}
        {step === 2 && <TravelPreferences formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <HealthSafety formData={formData} setFormData={setFormData} prevStep={prevStep} />}
      </div>
    </div>
  );
}
