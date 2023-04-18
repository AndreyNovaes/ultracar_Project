import React from 'react';
import { Card, List, Typography, Divider } from 'antd';
import { getVehicleById } from '../../services/handleVehicle';
import { getTechniciasById } from '../../services/handleTechnicians';

const { Title, Text } = Typography;

const ServiceCard = ({
  id,
  vehicleId,
  technicianId,
  startTime,
  expectedEndTime,
  realEndTime,
  description,
  status,
  parts,
}) => {
  
  const vehicle = getVehicleById(vehicleId);
  const technician = getTechniciasById(technicianId);

  return (
    <Card
      title={`Service ID: ${id}`}
      bordered={true}
      style={{ width: 300, marginTop: 16 }}
    >
      <Title level={4}>{vehicle.make} {vehicle.model} ({vehicle.year})</Title>
      <Divider />
      <Text>Technician: {technician.name}</Text>
      <br />
      <Text>Start Time: {startTime}</Text>
      <br />
      <Text>Expected End Time: {expectedEndTime}</Text>
      <br />
      <Text>Real End Time: {realEndTime}</Text>
      <br />
      <Text>Status: {status}</Text>
      <Divider />
      <List
        header={<div>Parts</div>}
        dataSource={parts}
        renderItem={part => (
          <List.Item>
            <Text>{part.name} (Quantity: {part.quantity})</Text>
          </List.Item>
        )}
      />
      <Divider />
      <Text>Description: {description}</Text>
    </Card>
  );
};

export default ServiceCard;
