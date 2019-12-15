insert into diagnose(id, title, description) values (5, 'Marko', 'Marković');
insert into diagnose(id, title, description) values (6, 'Nikola', 'Zejak');
insert into clinic(id, address, description, name) values (1, 'Novi sad 123', 'Odlicna', 'MediaGroup');
insert into clinic(id, address, description, name) values (2, 'Sabac', 'Super', 'Bolnica');
insert into examination_type(id, label, price, clinic_id) values (1,'Hirurg', '1000', 1);
insert into clinic_administrator(id, email, name, number, password, status, surname, clinic_id) values (1, 'nemanja@email.com', 'Nemanja', '123456789', 'Mirkela97','ACTIVE', 'Mirkovic', 1);
insert into users(id, email, password, role) values (100,'nemanja@email.com', 'Mirkela97',3);
insert into clinical_centre_administrator(id, email, name, password, phone, surname) values (1,'zejak@email.com', 'Nikola', 'Zejake123', '789456321', 'Zejak');
insert into users(id, email, password, role) values (101,'zejak@email.com', 'Zejake123',4);
insert into doctor(id, email, name, password, phone, status, surname, work_hours_from, work_hours_to,clinic_id, specialized_id) values (1,'doctor@email.com','Doctor','Doctor123','123467911','ACTIVE','Docic','08','16',1,1);
insert into doctor(id, email, name, password, phone, status, surname, work_hours_from, work_hours_to,clinic_id, specialized_id) values (2,'doctor1@email.com','Doctor1','Doctor1234','123467900','ACTIVE','Docic1','08','16',2,1);
insert into users(id, email, password, role) values (102, 'doctor@email.com', 'Doctor123', 1);
insert into users(id, email, password, role) values (110, 'doctor1@email.com', 'Doctor1234', 1);
insert into nurse(id, email, name, password, phone, surname, work_hours_from, work_hours_to, clinic_id) values (1,'nurse@email.com', 'Nurse', 'Nurse123','153426010', 'Nursic', '8:00', '16:00', 1);
insert into users(id, email, password, role) values (103, 'nurse@email.com', 'Nurse123', 2);
insert into patient(id, insuranceid, address, city, country, email, name, number, password, status, surname) values (100, 1111111111111, 'Adresa', 'Grad', 'Drzava', 'patient@email.com', 'Patient', '147258321', 'Patient123', 'APPROVED', 'Patientic');
insert into users(id, email, password, role) values (104, 'patient@email.com', 'Patient123', 0);
insert into room(id,kind, name, number ,clinic_id) values (100,'EXAMINATION','Room 1','1', 1)