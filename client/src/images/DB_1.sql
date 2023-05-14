

/*   ***** CUSTOMERS table *****   */
CREATE TABLE customers
(  customer_id   INTEGER            NOT NULL,
   customer_name CHARACTER( 30    ) NOT NULL,
   balance       DECIMAL  (  7, 2 )	NOT NULL DEFAULT 0,
   ship_city     CHARACTER( 30    ) NOT NULL,
   credit_limit  DECIMAL  (  7, 0 ) NOT NULL DEFAULT 100000,
   discount      DECIMAL  (  5, 3 ) 
);

ALTER TABLE customers 
  ADD CONSTRAINT customers_customer_id_pk
      PRIMARY KEY(customer_id);  
  
INSERT INTO customers VALUES ( 133568, 'Smith Mfg.',             1998.00,  'Chicago',   150000,  .050);
INSERT INTO customers VALUES ( 246900, 'Bolt Co.',               103.55,   'Toronto',   225000,  .020);
INSERT INTO customers VALUES ( 275978, 'Ajax Steel Inc.',        133.00,   'Albany',    175000,  NULL);
INSERT INTO customers VALUES ( 499320, 'Bluewater Inc.',         19876.00, 'Portland',  165000,  .015);
INSERT INTO customers VALUES ( 499921, 'Bell Bldg.',             12376.00, 'Detroit',   155000,  .010);
INSERT INTO customers VALUES ( 518980, 'London Inc.',            100.00,   'Boston',    100000,  .050);
INSERT INTO customers VALUES ( 663456, 'Alpine Inc.',            100.00,   'Boston',    DEFAULT, .010);
INSERT INTO customers VALUES ( 681065, 'Steelhead Tackle Co.',   156.05,   'Albany',    100000,  .000);
INSERT INTO customers VALUES ( 687309, 'Nautilus Mfg.',          34676.00, 'San Diego', 100000,  .050);
INSERT INTO customers VALUES ( 781010, 'Bluewater Mfg.',         987.00,   'Boston',    165000,  NULL);
INSERT INTO customers VALUES ( 888402, 'Seaworthy',              998.00,   'Albany',    100000,  .010);
INSERT INTO customers VALUES ( 890003, 'John Steeling Products', 100.12,   'Houston',   DEFAULT, .010);
INSERT INTO customers VALUES ( 905011, 'Wood Bros.',             9854.01,  'Dallas',    100000,  .010);

INSERT INTO customers VALUES ( 888801, 'Delete Inc.',            9854.01,  'Orlando',   100000,  .010);
INSERT INTO customers VALUES ( 888802, 'Company 1',              9854.01,  'Denver',    150000,  .020);
INSERT INTO customers VALUES ( 888803, 'Company 2',              9854.01,  'Denver',    150000,  .020);

INSERT INTO customers VALUES ( 999999, 'Mainstreet Inc.',        5000.00,  'Toronto',   100000,  .010);

/*   ***** DEPARTMENTS table *****   */
CREATE TABLE departments
(  department_code CHARACTER(  2 ) NOT NULL,
   department_name CHARACTER( 25 ) NOT NULL, 
   manager_id      INTEGER
);

ALTER TABLE departments 
  ADD CONSTRAINT departments_department_code_pk
      PRIMARY KEY(department_code);
	  
INSERT INTO departments VALUES ('AD', 'Administration', NULL);
INSERT INTO departments VALUES ('AC', 'Accounting', NULL);
INSERT INTO departments VALUES ('MK', 'Marketing', NULL);
INSERT INTO departments VALUES ('TR', 'Training', 110);
INSERT INTO departments VALUES ('IT', 'Information Technology', NULL);
INSERT INTO departments VALUES ('CA', 'Cameras', NULL);
INSERT INTO departments VALUES ('MA', 'Major Appliances', 111);
INSERT INTO departments VALUES ('SA', 'Small Appliances', 115);
INSERT INTO departments VALUES ('OP', 'Office Products', NULL);
INSERT INTO departments VALUES ('VG', 'Video Games', 113);
INSERT INTO departments VALUES ('HT', 'Home Theatre', 112);

/*   ***** JOBS table *****   */
CREATE TABLE jobs
(  job_code    CHARACTER(  7 )  NOT NULL,
   job_title   CHARACTER( 30 )  NOT NULL,
   min_salary  DECIMAL( 7, 0 )  NOT NULL,
   max_salary  DECIMAL( 7, 0 )  NOT NULL
);

ALTER TABLE jobs
  ADD CONSTRAINT jobs_job_code_pk
      PRIMARY KEY( job_code );

INSERT INTO jobs VALUES ( 'AD_PRES', 'President', 150000, 200000 );
INSERT INTO jobs VALUES ( 'AD_VP',   'Vice President', 100000, 145000);
INSERT INTO jobs VALUES ( 'MK_MGR',  'Marketing Manager', 70000, 115000);
INSERT INTO jobs VALUES ( 'MK_REP',  'Marketing Representative', 45000, 65000);
INSERT INTO jobs VALUES ( 'DT_MGR',  'Department Manager', 40000, 52000);
INSERT INTO jobs VALUES ( 'SL_ACE',  'Sales Associate', 32000, 40000);
INSERT INTO jobs VALUES ( 'AC_MGR',  'Accounting Manager', 70000, 110000);
INSERT INTO jobs VALUES ( 'IT_MGR',  'IT Manager', 85000, 140000);
INSERT INTO jobs VALUES ( 'IT_DEV',  'Software Developer', 60000, 90000);
INSERT INTO jobs VALUES ( 'AD_TNR',  'Trainer', 40000, 52000);
;

/*   ***** EMPLOYEES table *****   */
CREATE TABLE employees
(  employee_id     INTEGER           NOT NULL,
   first_name      CHARACTER( 20   ) NOT NULL,
   middle_initial  CHARACTER(  1   ) NOT NULL DEFAULT ' ',
   last_name       CHARACTER( 30   ) NOT NULL,
   soc_sec_no      INTEGER           NOT NULL,
   hire_date       DATE              NOT NULL DEFAULT getdate(),
   salary          DECIMAL  (  7, 2) NOT NULL,
   commission_pct  DECIMAL  (  3, 3)          DEFAULT .105,
   department_code CHARACTER(  2   ),
   job_code        CHARACTER(  7   ),
   manager_id      INTEGER
);
  
ALTER TABLE employees 
  ADD CONSTRAINT employees_employee_id_pk
      PRIMARY KEY( employee_id );

ALTER TABLE employees 
  ADD CONSTRAINT employees_department_id_fk
      FOREIGN KEY( department_code )
      REFERENCES departments( department_code );

ALTER TABLE employees
  ADD CONSTRAINT employees_manager_id_fk
      FOREIGN KEY( manager_id )
      REFERENCES employees( employee_id );
	  
ALTER TABLE employees
  ADD CONSTRAINT employees_job_code_fk
      FOREIGN KEY( job_code )
      REFERENCES jobs( job_code );
  
INSERT INTO employees VALUES ( 110, 'Lauren', 'M', 'Alexander', 749583756, DEFAULT, 45000, NULL,    'TR', 'DT_MGR', NULL );
INSERT INTO employees VALUES ( 111, 'Lisa',   'L', 'James',     396812058, DEFAULT, 65000, NULL,    'MA', 'DT_MGR', NULL );
INSERT INTO employees VALUES ( 112, 'Dave',   ' ', 'Bernard',   184759364, DEFAULT, 60000, NULL,    'HT', 'DT_MGR', NULL );
INSERT INTO employees VALUES ( 113, 'Steve',  'L', 'Carr',      018593745, DEFAULT, 55000, NULL,    'VG', 'DT_MGR', NULL );
INSERT INTO employees VALUES ( 114, 'Marg',   'A', 'Horner',    947581253, DEFAULT, 45000, NULL,    'MA', 'DT_MGR', 111  );
INSERT INTO employees VALUES ( 124, 'Scott',  ' ', 'Long',      912058121, DEFAULT, 35000, DEFAULT, 'VG', 'SL_ACE', 113  );
INSERT INTO employees VALUES ( 115, 'Jim',    ' ', 'Best',      184629673, DEFAULT, 24000, DEFAULT, 'SA', 'SL_ACE', NULL );
INSERT INTO employees VALUES ( 126, 'Sue',    'A', 'McDonald',  285912756, DEFAULT, 36000, DEFAULT, NULL, 'SL_ACE', 110  );
INSERT INTO employees VALUES ( 117, 'Trish',  'S', 'Albert',    649105738, DEFAULT, 18000, DEFAULT, 'VG', 'SL_ACE', 113  );
INSERT INTO employees VALUES ( 125, 'Terry',  'J', 'Maxwell',   385937712, DEFAULT, 22000, DEFAULT, 'HT', 'SL_ACE', 112  );
INSERT INTO employees VALUES ( 119, 'Dave',   ' ', 'Nisbet',    759127547, DEFAULT, 39000, DEFAULT, NULL, 'SL_ACE', 110  );
INSERT INTO employees VALUES ( 120, 'Anne',   'M', 'Richie',    834577193, DEFAULT, 40000, DEFAULT, 'MA', 'SL_ACE', 111  );
INSERT INTO employees VALUES ( 122, 'Jake',   'L', 'Lee',       812954926, DEFAULT, 45000, DEFAULT, 'VG', 'SL_ACE', 113  );
INSERT INTO employees VALUES ( 118, 'Janice', 'B', 'Harper',    912758396, DEFAULT, 29000, DEFAULT, 'HT', 'SL_ACE', 112  );
INSERT INTO employees VALUES ( 123, 'Linda',  'M', 'Johnson',   295734812, DEFAULT, 24000, DEFAULT, 'MA', 'SL_ACE', 114  );
INSERT INTO employees VALUES ( 121, 'William','J', 'Johnson',   374912745, DEFAULT, 31000, DEFAULT, NULL, 'SL_ACE', 110  );
INSERT INTO employees VALUES ( 127, 'Sharron',' ', 'Evans',     492337745, DEFAULT, 29000, DEFAULT, 'MA', 'SL_ACE', 114  );
INSERT INTO employees VALUES ( 116, 'Robert', ' ', 'Henry',     512850475, DEFAULT, 37000, DEFAULT, 'MA', 'SL_ACE', 111  );	  
INSERT INTO employees VALUES ( 131, 'Barb',   'L', 'Gibbens',   852951124, DEFAULT, 29000, DEFAULT, NULL, 'IT_DEV', NULL );
INSERT INTO employees VALUES ( 135, 'Greg',   'J', 'Zimmerman', 539554832, DEFAULT, 31500, DEFAULT, 'IT', 'IT_DEV', NULL );
INSERT INTO employees VALUES ( 132, 'Dave',   'R', 'Bernard',   284447883, DEFAULT, 24000, DEFAULT, 'IT', 'IT_DEV', NULL );
INSERT INTO employees VALUES ( 136, 'Trish',  'S', 'Albert',    812740127, DEFAULT, 22500, DEFAULT, 'IT', 'IT_DEV', NULL );
INSERT INTO employees VALUES ( 139, 'Rick',   'D', 'Peters',    294477289, DEFAULT, 28750, DEFAULT, 'IT', 'IT_DEV', NULL );


/*   ***** RETIRED EMPLOYEES table *****   */
CREATE TABLE retired_employees
(  employee_id    INTEGER          NOT NULL,
   first_name     CHARACTER( 20 )  NOT NULL,
   middle_initial CHARACTER( 1  )  NOT NULL DEFAULT ' ',
   last_name      CHARACTER( 30 )  NOT NULL,
   retire_date    DATE,
  CONSTRAINT retired_employees_employee_id_pk
      PRIMARY KEY( employee_id ) );

INSERT INTO retired_employees VALUES ( 107, 'Lauren', 'M', 'Alexander', '2011-02-28');
INSERT INTO retired_employees VALUES ( 108, 'Lisa',   'L', 'James',     '2011-03-31');
INSERT INTO retired_employees VALUES ( 109, 'Dave',   ' ', 'Bernard',   '2011-04-15');
INSERT INTO retired_employees VALUES ( 120, 'Anne',   'M', 'Tucker',    '2011-04-29');
INSERT INTO retired_employees VALUES ( 121, 'William','J', 'Johnson',   '2011-05-31');


/*   ***** ORDERS table *****   */
CREATE TABLE orders
(  order_ID           INTEGER          NOT NULL,
   customer_id        INTEGER          NOT NULL,
   order_total        DECIMAL( 11, 2 ) NOT NULL,
   order_date         DATE             NOT NULL,
   ship_date          DATE,
   sales_associate_id INTEGER          NOT NULL
);

ALTER TABLE orders
  ADD CONSTRAINT orders_order_id_pk
      PRIMARY KEY( order_id );

ALTER TABLE orders
  ADD CONSTRAINT orders_customer_id_fk
      FOREIGN KEY( customer_id )
      REFERENCES customers( customer_id );	  
	  
ALTER TABLE orders
  ADD CONSTRAINT orders_sales_associate_id_fk
      FOREIGN KEY( sales_associate_id )
      REFERENCES employees( employee_id );
  
INSERT INTO orders VALUES ( 234112, 499320, 35.00,   '2011-05-01', '2011-05-15', 120 );
INSERT INTO orders VALUES ( 234113, 888402, 278.75,  '2011-05-01', '2011-05-04', 120 );
INSERT INTO orders VALUES ( 234114, 499320, 78.90,   '2011-05-03',  NULL, 120        );
INSERT INTO orders VALUES ( 234115, 890003, 1000.00, '2011-05-04', '2011-05-10', 120 );
INSERT INTO orders VALUES ( 234116, 246900, 678.00,  '2011-05-04', '2011-05-08', 120 );
INSERT INTO orders VALUES ( 234117, 133568, 550.00,  '2011-05-05', '2011-05-08', 120 );
INSERT INTO orders VALUES ( 234118, 905011, 89.50,   '2011-05-05', '2011-05-10', 120 );
INSERT INTO orders VALUES ( 234119, 499320, 201.00,  '2011-05-05',  NULL, 120        );
INSERT INTO orders VALUES ( 234120, 246900, 399.70,  '2011-05-06', '2011-05-08', 120 );

INSERT INTO orders VALUES ( 234121, 999999, 199.00,  '2014-01-01', '2014-05-05', 120 );
INSERT INTO orders VALUES ( 234122, 999999, 299.00,  '2014-02-02', '2014-06-06', 120 );
INSERT INTO orders VALUES ( 234123, 999999, 150.00,  '2014-11-22', '2014-12-23', 120 );
INSERT INTO orders VALUES ( 234124, 999999, 350.00,  '2014-11-22', '2014-12-23', 120 );

/*   ***** ARCHIVED_CUSTOMERS table *****   */
CREATE TABLE archived_customers
(  customer_id   INTEGER            NOT NULL,
   customer_name CHARACTER( 30    ) NOT NULL,
   balance		 DECIMAL  (  7, 2 )	NOT NULL DEFAULT 0,
   ship_city     CHARACTER( 30    ) NOT NULL,
   credit_limit  DECIMAL  (  7, 0 ) NOT NULL DEFAULT 100000,
   discount      DECIMAL  (  5, 3 ) 
);

ALTER TABLE archived_customers 
  ADD CONSTRAINT archived_customer_id_pk
      PRIMARY KEY(customer_id);  
      
INSERT INTO archived_customers VALUES ( 11345, 'Mainstreet Mfg.',             .00,  'Detroit',   100000,  .010);
INSERT INTO archived_customers VALUES ( 11567, 'Riverview Co.',               .00,  'Toronto',   200000,  .015);

