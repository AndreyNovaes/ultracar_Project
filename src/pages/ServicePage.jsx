import React, { useEffect, useState, useContext } from 'react';
import ServiceCard from '../components/HandleServices/ServicesCard';
import { getAllServices } from '../services/handleServices';
import { formatDate } from '../utils/momentData';
import { AuthContext } from '../context/AuthProvider';
import { useNavigate } from 'react-router-dom';

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchServices() {
      const fetchedServices = getAllServices();
      setServices(fetchedServices);
    }

    fetchServices();
  }, []);

  if (!isAuthenticated) {
    return navigate('/login');
  }

  return (
    <div
      className="services-page"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}
    >
      {services &&
        services.map(({ id, vehicleId, technicianId, startTime, expectedEndTime, realEndTime, description, status, parts }) => (
          <ServiceCard
            key={id}
            id={id}
            vehicleId={vehicleId}
            technicianId={technicianId}
            startTime={formatDate(startTime)}
            expectedEndTime={formatDate(expectedEndTime)}
            realEndTime={formatDate(realEndTime)}
            description={description}
            status={status}
            parts={parts}
          />
        ))}
    </div>
  );
};

export default ServicesPage;
