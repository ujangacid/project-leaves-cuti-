create database db_cuti

create table people (
	id serial primary key,
	name varchar(100),
	address varchar(100),
	position varchar(20),
	nip varchar(10),
	password varchar(20)
);

create table leave (
	id serial primary_key,
	type varchar(20),
	cuti varchar(20)
);

create table leave_request (
	id serial primary_key,
	people_id int REFERENCES people(id),
	leave_i int REFERENCES leave(id),
	start_date date,
	end_date date,
	reason varchar(50)