-- create database
create database if not exists multistep_checkout;
-- use database
use multistep_checkout;
-- create tables
create table profile (
    id int NOT NULL AUTO_INCREMENT primary key,  
    name VARCHAR(20) not null, 
    email VARCHAR(30) not null,
    password VARCHAR(10) not null
);

create table address (
    line_1 VARCHAR(40),
    line_2 VARCHAR(40),
    zip VARCHAR(10),
    phone_number int,
    profile_id int,
    FOREIGN KEY (profile_id) references profile (id)
);

create table billing (
    cc int,
    exp_date int,
    cvv int, 
    zip VARCHAR(10),
    profile_id int,
    FOREIGN KEY (profile_id) references profile (id)
);

insert into profile (name, email, password) values ('karin', '123@gmail.com', 'yoyoyo');
insert into profile (name, email, password) values ('sae', '234@gmail.com', 'saeyonce');
insert into profile (name, email, password) values ('kevin', '456@gmail.com', 'kaycheez');
insert into profile (name, email, password) values ('javi', '789@gmail.com', 'javidahut ');

insert into address (line_1, line_2, zip, phone_number) values ('944 Market St', 'SF, CA', '94102', 12345);
insert into address (line_1 , line_2, zip, phone_number) values ('Mission St', 'SF, CA', '94102', 12345);
insert into address (line_1, line_2, zip, phone_number) values ('Folsom St', 'SF, CA', '94102', 12345);
insert into address (line_1, line_2, zip, phone_number) values ('Lombard St', 'SF, CA', '94102', 12345);

insert into billing (cc, exp_date, cvv, zip, profile_id) values (11111111, 0120, 123, 'hayes', 3);
insert into billing (cc, exp_date, cvv, zip, profile_id) values (22222222, 0220, 987, 'powell', 4);
insert into billing (cc, exp_date, cvv, zip, profile_id) values (333333, 0320, 345, 'fisherman', 1);
insert into billing (cc, exp_date, cvv, zip, profile_id) values (44444, 0420, 678, 'monterey', 2);
line_1
update address set profile_id=1 where line_1="944 Market St";
update address set profile_id=4 where line_1="Mission St";
update address set profile_id=2 where line_1="Folsom St";
update address set profile_id=3 where line_1="Lombard St";