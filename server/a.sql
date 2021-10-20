CREATE TABLE user (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    avator TEXT,
    date TIMESTAMP NOT NULL DEFAULT NOW() 
)

CREATE TABLE vehicle (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL, 
    vehicleNumber INT NOT NULL,
    registrationNumber INT NOT NULL,
    weight INT NOT NULL, 
    vehicleType VARCHAR(255) NOT NULL, 
    engineSize INT NOT NULL, 
    odometerReading INT NOT NULL, 
    image TEXT NOT NULL, 
    manufacture VARCHAR(255) NOT NULL, 
    description TEXT NOT NULL,
    date TIMESTAMP NOT NULL DEFAULT NOW(),
    updated TIMESTAMP NOT NULL DEFAULT NOW() 
);




trips: [
                    {
                        destination: 'Welkom',
                        Kilometres: 234,
                        date: '22-May-2020',
                        id: '1'
                    },
                    {
                        destination: 'Braamfontein',
                        Kilometres: 234,
                        date: '26-June-2020',
                        id: '2'
                    },
                    {
                        destination: 'Cape Town',
                        Kilometres: 234,
                        date: '16-May-2020',
                        id: '3'
                    }
                ]



CREATE TABLE user (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    avator TEXT,
    date TIMESTAMP NOT NULL DEFAULT NOW() 
)

INSERT INTO user (id, name, lastname, role, phone, email,  avator)
    VALUES ('1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed', 'Itumeleng', 'Tsoela', 'admin', '111111111', 'gsg@gmail.com', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'),
    VALUES ('1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed', 'Jane', 'Cooper', 'admin', '222222222', 'g1g@gmail.com', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'),
    VALUES ('1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed', 'John', 'Doe', 'admin', '333333333', 'dfsg@gmail.com', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60');
    



INSERT INTO vehicle (id, name,  vehicleNumber, registrationNumber, weight,  vehicleType,  engineSize,  odometerReading,  image,  manufacture,  description)
VALUES ('35d92f26-9789-4567-b663-3e89472b7edc', 'T-Man', 343432, 5643, 44445, 'Truck', 578, 78, 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60', 'T-Man', 'psam explicabo laborum architecto. Quaerat labore debitis reprehenderit ex voluptatum.');



