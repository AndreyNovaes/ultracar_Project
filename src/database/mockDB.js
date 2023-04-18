export const db = {
  users: [
    {
      id: 1,
      name: 'Lucas Almeida',
      email: 'lucas.almeida@example.com',
      phone: '(11) 91234-5678',
    },
    {
      id: 2,
      name: 'Carla Oliveira',
      email: 'carla.oliveira@example.com',
      phone: '(11) 98765-4321',
    },
    {
      id: 3,
      name: 'Roberto Silva',
      email: 'roberto.silva@example.com',
      phone: '(11) 92345-6781',
    },
    {
      id: 4,
      name: 'Mariana Santos',
      email: 'mariana.santos@example.com',
      phone: '(11) 96123-5478',
    },
  ],
  technicians: [
    {
      id: 1,
      name: 'Ricardo Dias',
      email: 'ricardo.dias@example.com',
      password: '123456',
      phone: '(11) 93456-7812',
    },
    {
      id: 2,
      name: 'Fernanda Souza',
      email: 'fernanda.souza@example.com',
      password: '123456',
      phone: '(11) 97854-3216',
    },
    {
      id: 3,
      name: 'Paulo Costa',
      email: 'paulo.costa@example.com',
      password: '123456',
      phone: '(11) 98712-3456',
    },
    {
      id: 4,
      name: 'Gabriela Ribeiro',
      email: 'gabriela.ribeiro@example.com',
      password: '123456',
      phone: '(11) 95432-1678',
    },
  ],
  vehicles: [
    {
      id: 1,
      make: 'Toyota',
      model: 'Camry',
      year: 2015,
      clientId: 1,
    },
    {
      id: 2,
      make: 'Honda',
      model: 'Civic',
      year: 2018,
      clientId: 2,
    },
    {
      id: 3,
      make: 'Volkswagen',
      model: 'Golf',
      year: 2017,
      clientId: 3,
    },
    {
      id: 4,
      make: 'Ford',
      model: 'Focus',
      year: 2016,
      clientId: 4,
    },
  ],
  parts: [
    {
      id: 1,
      name: 'Filtro de Óleo',
      price: 80,
    },
    {
      id: 2,
      name: 'Pneu',
      price: 600,
    },
    {
      id: 3,
      name: 'Pastilhas de Freio',
      price: 200,
    },
    {
      id: 4,
      name: 'Bateria',
      price: 400,
    },
  ],
  services: [
    {
      id: 1,
      vehicleId: 1,
      technicianId: 1,
      startTime: '2023-01-10T09:00:00',
      expectedEndTime: '2023-01-10T10:00:00',
      realEndTime: '2023-01-10T09:45:00',
      description: 'Troca de óleo',
      status: 'completed',
      parts: [
        {
          partId: 1,
          quantity: 2,
        },
      ],
    },
    {
      id: 2,
      vehicleId: 2,
      technicianId: 2,
      startTime: '2023-02-15T14:00:00',
      expectedEndTime: '2023-02-15T16:00:00',
      realEndTime: null,
      description: 'Rotação de pneus',
      status: 'ongoing',
      parts: [],
    },
    {
      id: 3,
      vehicleId: 3,
      technicianId: 3,
      startTime: '2023-03-20T11:00:00',
      expectedEndTime: '2023-03-20T12:30:00',
      realEndTime: '2023-03-20T12:15:00',
      description: 'Troca de pastilhas de freio',
      status: 'completed',
      parts: [
        {
          partId: 3,
          quantity: 4,
        },
      ],
    },
    {
      id: 4,
      vehicleId: 4,
      technicianId: 4,
      startTime: '2023-03-25T15:00:00',
      expectedEndTime: '2023-03-25T17:00:00',
      realEndTime: null,
      description: 'Substituição da bateria',
      status: 'scheduled', // planejado para iniciar em uma data posterior
      parts: [
        {
          partId: 4,
          quantity: 1,
        },
      ],
    },
  ],
};

export const users = db.users;
export const technicians = db.technicians;
export const vehicles = db.vehicles;
export const parts = db.parts;
export const services = db.services;
