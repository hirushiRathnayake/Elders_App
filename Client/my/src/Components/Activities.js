// Activities.js
import React from 'react';
import Button from './Button'; // Import the Button component

const Activities = () => {
  return (
    <div className="activities-container">
      <Button text="Medications" type="btn-primary" />
      <Button text="Activity/vitals" type="btn-primary" />
      <Button text="Dietary" type="btn-primary" />
      <Button text="Social Engagement" type="btn-primary" />
    </div>
  );
};

export default Activities;
