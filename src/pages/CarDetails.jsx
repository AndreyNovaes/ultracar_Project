import { Card } from 'antd';
import QRCode from 'qrcode.react';
import React from 'react';

const CarDetails = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(11) 98765-4321',
  };

  return (
    <Card title="Vehicle Information">
      <QRCode value="https://example.com/vehicle-info" />
    </Card>
  );
};

export default CarDetails;
