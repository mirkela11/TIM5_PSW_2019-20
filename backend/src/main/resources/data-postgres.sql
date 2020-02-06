insert into diagnose(id, title, description) values (120, 'Marko', 'Marković');
insert into diagnose(id, title, description) values (121, 'Nikola', 'Zejak');
insert into clinic(id, address,clinic_rating, description, name) values (101, 'Novi sad 123', 4.2, 'Odlicna', 'MediaGroup');
insert into clinic(id, address,clinic_rating, description, name) values (102, 'Sabac',3.9, 'Super', 'Bolnica');
insert into examination_type(id, label, price, clinic_id) values (100,'Ocni pregled', '2000', 101);
insert into examination_type(id, label, price, clinic_id) values (101,'Pregled sluha', '1000', 102);
insert into examination_type(id, label, price, clinic_id) values (102,'Operacija ociju', '1000', 101);
insert into examination_type(id, label, price, clinic_id) values (103,'Operacija usiju', '1000', 102);

insert into interval(id,end_time,start_time) values (150, '2020.02.20 10:00', '2020.02.20 09:00');
insert into interval(id,end_time,start_time) values (151, '2020.02.20 12:00', '2020.02.20 11:00');
insert into interval(id,end_time,start_time) values (152, '2020.02.21 14:00', '2020.02.21 13:00');
insert into interval(id,end_time,start_time) values (153, '2020.02.21 09:00', '2020.02.21 08:00');
insert into interval(id,end_time,start_time) values (154, '2020.02.22 11:00', '2020.02.22 10:00');
insert into interval(id,end_time,start_time) values (155, '2020.02.06 10:00', '2020.02.06 09:00');
insert into interval(id,end_time,start_time) values (156, '2020.02.27 10:00', '2020.02.27 09:00');
insert into interval(id,end_time,start_time) values (160, '2020.02.27 13:00', '2020.02.27 12:00');
insert into interval(id,end_time,start_time) values (161, '2020.02.28 16:00', '2020.02.28 15:00');
insert into interval(id,end_time,start_time) values (162, '2020.02.28 11:00', '2020.02.28 10:00');
insert into interval(id,end_time,start_time) values (163, '2020.02.28 09:00', '2020.02.28 08:00');

insert into interval(id,end_time,start_time) values (157, '2020.02.20 08:00', '2020.02.10 16:00');
insert into interval(id,end_time,start_time) values (158, '2020.03.02 08:00', '2020.02.22 15:00');


insert into clinic_administrator(id, email, name, number, password, status, surname, clinic_id) values (100, 'nemanja@email.com', 'Nemanja', '123456789', 'Mirkela97','ACTIVE', 'Mirkovic', 101);
insert into users(id, email, password, role) values (100,'nemanja@email.com', 'Mirkela97',3);
insert into clinic_administrator(id, email, name, number, password, status, surname, clinic_id) values (101, 'asmirkovic97@gmail.com', 'Nemanja', '147258369', 'Mirkela97','ACTIVE', 'Mirkovic', 102);
insert into users(id, email, password, role) values (150,'asmirkovic97@gmail.com', 'Mirkela97',3);
insert into clinical_centre_administrator(id, email, name, password, phone, surname) values (100,'zejak@email.com', 'Nikola', 'Zejake123', '789456321', 'Zejak');
insert into users(id, email, password, role) values (101,'zejak@email.com', 'Zejake123',4);
insert into doctor(id,doctor_rating, email, name, password, phone, status, surname, work_hours_from, work_hours_to,clinic_id, specialized_id) values (101,4.2,'doctor@email.com','Doctor','Doctor123','123467911','ACTIVE','Docic','08','16',101,101);
insert into time_off_doctor(id,status,type,doctor_id,interval_id) values (120,'APPROVED','HOLIDAY',101,157);
insert into doctor(id,doctor_rating, email, name, password, phone, status, surname, work_hours_from, work_hours_to,clinic_id, specialized_id) values (102,3.8,'doctor1@email.com','Doctor1','Doctor1234','123467900','ACTIVE','Docic1','08','16',102,101);
insert into time_off_doctor(id,status,type,doctor_id,interval_id) values (121,'APPROVED','HOLIDAY',102,158);
insert into doctor(id,doctor_rating, email, name, password, phone, status, surname, work_hours_from, work_hours_to,clinic_id, specialized_id) values (103,4.0,'test@email.com','Marko','Doctor12345','464879178','ACTIVE','Markovic','08','16',102,101);
insert into users(id, email, password, role) values (102, 'doctor@email.com', 'Doctor123', 1);
insert into users(id, email, password, role) values (110, 'doctor1@email.com', 'Doctor1234', 1);
insert into nurse(id, email, name, password, phone, surname, work_hours_from, work_hours_to, clinic_id) values (100,'nurse@email.com', 'Nurse', 'Nurse123','153426010', 'Nursic', '8:00', '16:00', 101);
insert into users(id, email, password, role) values (103, 'nurse@email.com', 'Nurse123', 2);
insert into patient(id, insuranceid, address, city, country, email, name, number, password, status, surname) values (100, 1111111111111, 'Adresa', 'Grad', 'Drzava', 'weca997@gmail.com', 'Patient', '147258321', 'Patient123', 'APPROVED', 'Patientic');
insert into patient(id, insuranceid, address, city, country, email, name, number, password, status, surname) values (101, 2222222222222, 'Tozin Sokak', 'Novi Sad', 'Srbija', 'patient1@email.com', 'Patient1', '123678456', 'Patient1234', 'AWAITING_APPROVAL', 'Patientic1');
insert into users(id, email, password, role) values (104, 'weca997@gmail.com', 'Patient123', 0);
insert into users(id, email, password, role) values (105, 'patient1@email.com', 'Patient1234', 0);
insert into room(id,kind,label,clinic_id) values (100,'OPERATION','Room 2',101);
insert into room(id,kind,label,clinic_id) values (101,'OPERATION','Room 1',102);
insert into room(id,kind,label,clinic_id) values (102,'EXAMINATION','Room 3',101);
insert into room(id,kind,label,clinic_id) values (103,'EXAMINATION','Room 4',102);
insert into examination(id,clinic_rating,discount,doctor_rating,kind,status,clinic_id,clinic_administrator_id,examination_type_id,interval_id,nurse_id,patient_id,room_id) values (100,4,100,5,'OPERATION','APPROVED',101,100,100,155,100,100,100);
insert into examining(examination_id,doctor_id) values (100,101);
insert into examination(id,clinic_rating,discount,doctor_rating,kind,status,clinic_id,clinic_administrator_id,examination_type_id,interval_id,nurse_id,patient_id,room_id) values (101,2,100,4,'EXAMINATION','APPROVED',102,100,100,151,100,101,100);
insert into examining(examination_id,doctor_id) values (101,102);
insert into medical_record(id, allergies, blood_type, height, weight, patient_id) values (100, 'Alergija na med', 'AB+', 178, 80, 100);
insert into medical_record(id, allergies, blood_type, height, weight, patient_id) values (101, 'Alergija na jagode', 'B-', 185, 82, 101);
insert into examination_report(id,comment, time_created, diagnose_id, doctor_id, examination_id, medical_record_id) values (100,'Odradjen izvestaj','01.01.2020. 12:30', 120, 101, 100,100);
insert into examination_report(id,comment, time_created, diagnose_id, doctor_id, examination_id, medical_record_id) values (101,'Izvestaj 2','02.01.2020. 08:30', 121, 102, 100,101);


insert into examination(id,clinic_rating,discount,doctor_rating,kind,status,clinic_id,clinic_administrator_id,examination_type_id,interval_id,nurse_id,room_id) values (200,4,20,5,'OPERATION','PREDEF_AVAILABLE',101,100,100,150,100,100);
insert into examination(id,clinic_rating,discount,doctor_rating,kind,status,clinic_id,clinic_administrator_id,examination_type_id,interval_id,nurse_id,room_id) values (201,4,10,5,'EXAMINATION','PREDEF_AVAILABLE',101,100,102,152,100,102);
insert into examination(id,clinic_rating,discount,doctor_rating,kind,status,clinic_id,clinic_administrator_id,examination_type_id,interval_id,nurse_id,room_id) values (202,4,15,5,'OPERATION','PREDEF_AVAILABLE',102,100,101,153,100,101);
insert into examination(id,clinic_rating,discount,doctor_rating,kind,status,clinic_id,clinic_administrator_id,examination_type_id,interval_id,nurse_id,room_id) values (203,4,30,5,'EXAMINATION','PREDEF_AVAILABLE',102,100,103,154,100,103);
insert into examination(id,clinic_rating,discount,doctor_rating,kind,status,clinic_id,clinic_administrator_id,examination_type_id,interval_id,nurse_id,room_id) values (204,4,15,5,'OPERATION','PREDEF_AVAILABLE',101,100,100,156,100,100);
insert into examination(id,clinic_rating,discount,doctor_rating,kind,status,clinic_id,clinic_administrator_id,examination_type_id,interval_id,nurse_id,room_id) values (205,4,10,5,'EXAMINATION','PREDEF_AVAILABLE',101,100,102,160,100,102);
insert into examination(id,clinic_rating,discount,doctor_rating,kind,status,clinic_id,clinic_administrator_id,examination_type_id,interval_id,nurse_id,room_id) values (206,4,25,5,'OPERATION','PREDEF_AVAILABLE',102,100,101,161,100,101);
insert into examination(id,clinic_rating,discount,doctor_rating,kind,status,clinic_id,clinic_administrator_id,examination_type_id,interval_id,nurse_id,room_id) values (207,4,30,5,'EXAMINATION','PREDEF_AVAILABLE',102,100,103,162,100,103);
insert into examination(id,clinic_rating,discount,doctor_rating,kind,status,clinic_id,clinic_administrator_id,examination_type_id,interval_id,nurse_id,room_id) values (208,4,10,5,'OPERATION','PREDEF_AVAILABLE',101,100,101,163,100,100);
insert into examining(examination_id,doctor_id) values (200,101);
insert into examining(examination_id,doctor_id) values (201,102);
insert into examining(examination_id,doctor_id) values (202,103);
insert into examining(examination_id,doctor_id) values (203,101);
insert into examining(examination_id,doctor_id) values (204,102);
insert into examining(examination_id,doctor_id) values (205,103);
insert into examining(examination_id,doctor_id) values (206,101);
insert into examining(examination_id,doctor_id) values (207,102);
insert into examining(examination_id,doctor_id) values (208,103);

