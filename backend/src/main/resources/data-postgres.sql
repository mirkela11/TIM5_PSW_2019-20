insert into diagnose(id, title, description) values (120, 'Marko', 'Marković');
insert into diagnose(id, title, description) values (121, 'Nikola', 'Zejak');
insert into clinic(id, address,clinic_rating, description, name) values (101, 'Novi sad 123', 4.2, 'Odlicna', 'MediaGroup');
insert into clinic(id, address,clinic_rating, description, name) values (102, 'Sabac',3.9, 'Super', 'Bolnica');
insert into examination_type(id, label, price, clinic_id) values (100,'Ocni pregled', '2000', 101);
insert into examination_type(id, label, price, clinic_id) values (101,'Pregled sluha', '1000', 102);

insert into interval(id,end_time,start_time) values (150, '2020.02.20 10:00', '2020.02.20 09:00');
insert into interval(id,end_time,start_time) values (151, '2020.02.20 12:00', '2020.02.20 11:00');
insert into interval(id,end_time,start_time) values (152, '2020.02.21 14:00', '2020.02.21 13:00');
insert into interval(id,end_time,start_time) values (153, '2020.02.21 09:00', '2020.02.21 08:00');
insert into interval(id,end_time,start_time) values (154, '2020.02.22 11:00', '2020.02.22 10:00');
insert into interval(id,end_time,start_time) values (155, '2020.02.22 14:00', '2020.02.22 13:00');
insert into interval(id,end_time,start_time) values (156, '2020.02.22 16:00', '2020.02.22 15:00');

insert into interval(id,end_time,start_time) values (157, '2020.02.20 08:00', '2020.02.10 16:00');
insert into interval(id,end_time,start_time) values (158, '2020.03.02 08:00', '2020.02.22 15:00');


insert into clinic_administrator(id, email, name, number, password, status, surname, clinic_id) values (100, 'nemanja@email.com', 'Nemanja', '123456789', 'Mirkela97','ACTIVE', 'Mirkovic', 101);
insert into users(id, email, password, role) values (100,'nemanja@email.com', 'Mirkela97',3);
insert into clinical_centre_administrator(id, email, name, password, phone, surname) values (100,'zejak@email.com', 'Nikola', 'Zejake123', '789456321', 'Zejak');
insert into users(id, email, password, role) values (101,'zejak@email.com', 'Zejake123',4);
insert into doctor(id,doctor_rating, email, name, password, phone, status, surname, work_hours_from, work_hours_to,clinic_id, specialized_id) values (101,4.2,'doctor@email.com','Doctor','Doctor123','123467911','ACTIVE','Docic','08','16',101,101);
insert into time_off_doctor(id,status,type,doctor_id,interval_id) values (120,'APPROVED','HOLIDAY',101,157);
insert into doctor(id,doctor_rating, email, name, password, phone, status, surname, work_hours_from, work_hours_to,clinic_id, specialized_id) values (102,3.8,'doctor1@email.com','Doctor1','Doctor1234','123467900','ACTIVE','Docic1','08','16',102,101);
insert into time_off_doctor(id,status,type,doctor_id,interval_id) values (121,'APPROVED','HOLIDAY',102,158);
insert into doctor(id,doctor_rating, email, name, password, phone, status, surname, work_hours_from, work_hours_to,clinic_id, specialized_id) values (103,4.0,'test@email.com','Marko','Doctor12345','464879178','ACTIVE','Markovic','08','16',101,100);
insert into users(id, email, password, role) values (102, 'doctor@email.com', 'Doctor123', 1);
insert into users(id, email, password, role) values (110, 'doctor1@email.com', 'Doctor1234', 1);
insert into nurse(id, email, name, password, phone, surname, work_hours_from, work_hours_to, clinic_id) values (100,'nurse@email.com', 'Nurse', 'Nurse123','153426010', 'Nursic', '8:00', '16:00', 101);
insert into users(id, email, password, role) values (103, 'nurse@email.com', 'Nurse123', 2);
insert into patient(id, insuranceid, address, city, country, email, name, number, password, status, surname) values (100, 1111111111111, 'Adresa', 'Grad', 'Drzava', 'patient@email.com', 'Patient', '147258321', 'Patient123', 'APPROVED', 'Patientic');
insert into patient(id, insuranceid, address, city, country, email, name, number, password, status, surname) values (101, 2222222222222, 'Tozin Sokak', 'Novi Sad', 'Srbija', 'patient1@email.com', 'Patient1', '123678456', 'Patient1234', 'AWAITING_APPROVAL', 'Patientic1');
insert into users(id, email, password, role) values (104, 'patient@email.com', 'Patient123', 0);
insert into users(id, email, password, role) values (105, 'patient1@email.com', 'Patient1234', 0);
insert into room(id,kind,label,clinic_id) values (100,'OPERATION','Room 2',101);
insert into examination(id,clinic_rating,discount,doctor_rating,kind,status,clinic_id,clinic_administrator_id,examination_type_id,interval_id,nurse_id,patient_id,room_id) values (100,4,100,5,'OPERATION','APPROVED',101,100,100,155,100,100,100);
insert into examining(examination_id,doctor_id) values (100,101);
insert into examination(id,clinic_rating,discount,doctor_rating,kind,status,clinic_id,clinic_administrator_id,examination_type_id,interval_id,nurse_id,patient_id,room_id) values (101,2,100,4,'EXAMINATION','APPROVED',102,100,100,151,100,101,100);
insert into examining(examination_id,doctor_id) values (101,102);
insert into medical_record(id, allergies, blood_type, height, weight, patient_id) values (100, 'Alergija na med', 'AB+', 178, 80, 100);
insert into medical_record(id, allergies, blood_type, height, weight, patient_id) values (101, 'Alergija na jagode', 'B-', 185, 82, 101);
insert into examination_report(id,comment, time_created, diagnose_id, doctor_id, examination_id, medical_record_id) values (100,'Odradjen izvestaj','01.01.2020. 12:30', 120, 101, 100,100);
insert into examination_report(id,comment, time_created, diagnose_id, doctor_id, examination_id, medical_record_id) values (101,'Izvestaj 2','02.01.2020. 08:30', 121, 102, 100,100);
