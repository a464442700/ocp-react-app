var quizQuestions = [{
    question: "1、Which two are true about reclaiming space used by Flashback logs in Oracle Database 19c and later releases?",
    answers: [{
        type: "A", content: "Space is only reclaimed when there is space pressure in the Fast Recovery Area(FRA)"
    }, {
        type: "B",
        content: "Space is always reclaimed automatically when the retention period for Flashback logs is lowered"
    }, {type: "C", content: "Space might be reclaimed proactively before space pressure occurs"}, {
        type: "D",
        content: "Space is always reclaimed proactively before space pressure occurs"
    }, {
        type: "E",
        content: " Space might be reclaimed automatically when the retention period for Flashback logs is lowered"
    }],
    rightAnswers: ["C", "E"]
},

    {
        question: "2、Which two are true about server-generated alerts?",
        answers: [{type: "A", content: "Stateless alerts can be cleared manually"}, {
            type: "B", content: "Stateless alerts are automatically cleared after one day."
        }, {
            type: "C", content: "Stateful alerts are purged automatically from the alert history after one day"
        }, {type: "D", content: "Stateless alerts can be purged manually from the alert history."}, {
            type: "E",
            content: " Stateful alerts must be cleared by a DBA to resolve the problem identified in the alert."
        }],
        rightAnswers: ["A", "D"]
    }, {
        question: "3、Which three are true about upgrading Oracle Grid Infrastructure?", answers: [{
            type: "A",
            content: "The newer version is installed in a separate Oracle Grid Infrastructure home on the same server as the existing version"
        }, {
            type: "B",
            content: "A direct upgrade can be performed only from the immediately preceding Oracle Grid Infrastructure version"
        }, {
            type: "C",
            content: " The upgrade process will automatically install all mandatory patches for the current version of Oracle Grid Infrastructure"
        }, {type: "D", content: " Only the grid user can perform the upgrade"}, {
            type: "E",
            content: " Existing Oracle Database instances must be shut down before starting the upgradeFAn existing Oracle base can be used."
        },
            {type: "F", content: " An existing Oracle base can be used"}
        ]

        , rightAnswers: ["A", "E", "F"]
    }, {
        question: "4、Which two are true about the Program Global Area(PGA)and its management in an Oracle database instance?",
        answers: [{
            type: "A", content: "PGA AGGREGATE LIMII is a hard limit on the PGA size for any one session"
        }, {
            type: "B", content: "The entire PGA is located in the System Global Area(SGA)when using shared servers"
        }, {
            type: "C",
            content: "The private SQL area(UGA)is located in the System Global Area(SGA)when using shared servers"
        }, {type: "D", content: "Sorts and Hash Joins use PGA memory."}, {
            type: "E",
            content: " The private SQL area(UGA)is located in the System Global Area(SGA)when using dedicated servers"
        }],
        rightAnswers: ["C", "D"]
    }, {
        question: "5、You plan to perform cross-platform PDB transport using XTTS.Which two are true?",
        answers: [{
            type: "A",
            content: "A backup of the PDB must exist, taken using the BACKUP command with the ro PLATFORM clause"
        }, {type: "B", content: " The source PDB can be in MOUNT or OPEN state"}, {
            type: "C", content: "The source PDB must be in MOUNT state."
        }, {type: "D", content: " The source PDB must not be an application root."}, {
            type: "E", content: " Automatic conversion of endianess occurs."
        }, {type: "F", content: " The source and target platforms must have the same endianess"}],
        rightAnswers: ["A", "F"]
    }, {
        question: "6、Which two are true about the automatic execution of operating system scripts when performing silent mode installation starting from Oracle Database 19c?",
        answers: [{type: "A", content: " The installer will prompt for the root or sudo password"}, {
            type: "B", content: "Silent install always runs operating scripts automatically."
        }, {type: "C", content: " The response file can specify the root or sudo password"}, {
            type: "D", content: "The response file must contain the root or sudo password"
        }, {type: "E", content: " The response file can specify the path of the sudo program"}],
        rightAnswers: ["A", "E"]
    }, {
        question: "7 、Which three actions will add a resource to an Oracle Restart configuration?",
        answers: [{
            type: "A", content: "creating a database service using Oracle Database Configuration Assistant(DBCA)"
        }, {type: "B", content: "creating a disk group using the CREATE DISKGROUP SQL statement"}, {
            type: "C", content: " creating a database using the CREATE DATABASE SQL statement"
        }, {
            type: "D", content: "creating an Oracle Database service by modifying the SERVICE NAMES parameter"
        }, {
            type: "E",
            content: "creating an Oracle Automatic Storage Management(AM)instance with ASM Configuration Assistant(ASMCA)"
        }, {type: "F", content: " creating a database service using DBMS SERVICE CREATE SERVICE"}],
        rightAnswers: ["A", "B", "E"]
    }, {
        question: "8、How do you configure a CDB for local undo mode?", answers: [{
            type: "A",
            content: "Open the CDB instance in restricted mode. In CDB$ROOT, drop the UNDO tablespace Execute AI TER DAMBASE LOCAL UNDO ON in each PDB. and then restart the CDB instance"
        }, {
            type: "B",
            content: "Open the CDB instance in restricted mode. In CDB$ROOT, execute ALTER DATABASE LOCAL UNDO ON. create an UNDO tablespace in each PDB, and then restart the CDB instance."
        }, {
            type: "C",
            content: " Open the CDB instance in upgrade mode. In CDB&ROOT, execute ALTER DATABASE LOCAL UNDO ON, and then restart the CDB instance"
        }, {
            type: "D",
            content: " Open the CDB in read-only mode. In CDB$ROOT, execute ALTER DATABASE LOCAL UNDO ON and then change the CDB to read/write mode"
        }, {
            type: "E",
            content: " Open the CDB instance in upgrade mode. In each PDB, execute ALTER DATABASE LOCAL UNDO ON, create an UNDO tablespace, and then restart the CDB instance."
        }], rightAnswers: ["C"]
    }, {
        question: "9 、Which three activities are possible for PDBS?",
        answers: [{type: "A", content: " converting an application PDB to a regular PDB"}, {
            type: "B", content: " converting an application PDB to an application seed"
        }, {type: "C", content: " converting a regular PDB to an application PDB"}, {
            type: "D", content: " copying an application container into another application container in the same CDB"
        }, {type: "E", content: " converting an application seed to an application PDB"}, {
            type: "F", content: " converting an application PDB to an application root"
        }, {
            type: "G",
            content: " copying an application container into another application container in a different CDB"
        }],
        rightAnswers: ["B", "C", "E"]
    }, {
        question: "10、A user complains about poor database performanceYou want to verify if the user's session has waited for certain types of I/O activityWhich view displays all waits waited on by a session at least once?",
        answers: [{type: "A", content: " V$SESSTAT"}, {type: "B", content: " V$SESSION WAIT"}, {
            type: "C", content: " V$SESSION EVENT"
        }, {type: "D", content: " V$SESSION"}, {type: "E", content: " V$SESSION WAIT CLASS"}],
        rightAnswers: ["C"]
    }, {
        question: "11、 Which two are true about RMAN duplexed backup sets?", answers: [{
            type: "A",
            content: " They can be written to mediaB They can be created only by using the copies option of a BACKUP command"
        }, {
            type: "C",
            content: " They can be created by using the RMAN CONFIGURE command to specify duplexing before taking a backup"
        }, {type: "D", content: " They can be written only to disk."}, {
            type: "E", content: " They must be written to media"
        }], rightAnswers: ["A", "C"]
    }, {
        question: "12、Examine this configuration1. CDB1 is a container database running in ARCHIVELOG mode.2. Multiple uncommitted transactions are running in CDB13. Redo log groups 1 and 2 are INACTIVE4. Redo log group 3 is the CURRENT groupAll members of redo log group 3 are lost before it is archivedExamine these possible steps1. SHUTDOWN ABORT2. STARTUP NOMOUNT3. STARUP MOUNT4. ALTER DATABASE MOUNT5. RESTORE DATABASE6. RECOVER DATABASE NOREDO7. RECOVER DATABASE UNTILAVAILABLE 8. RESTORE ARCHIVELOG ALL9. ALTER DATABASE OPEN10. ALTER DATABASE OPEN RESETLOGSChoose the minimum required steps in the correct order to recover the database?",
        answers: [{type: "A", content: "1,3,5,6,9"}, {type: "B", content: "1,3,5,8,6,10"}, {
            type: "C", content: "1,2,5,7,4,10"
        }, {type: "D", content: "1,3,5,7,10"}, {type: "E", content: "1,3,5,6,10"}, {type: "F", content: "1,3,5,6,10"}],
        rightAnswers: ["D"]
    }, {
        question: "13、A schema owner truncated a table in error and must recover the dataWhich Oracle Flashback feature could be used to recover the data?",
        answers: [{type: "A", content: "FLASHBACK VERSION QUERY"}, {type: "B", content: " FLASHBACK TABLE"}, {
            type: "C", content: "FLASHBACK TRANSACTION"
        }, {type: "D", content: " FLASHBACK DATABASE"}, {type: "E", content: " FLASHBACK DATA ARCHIVE"}],
        rightAnswers: ["D"]
    }, {
        question: "14、While backing up to an SBT channel, you determine that the read phase of your compressed Recovery Manager (RMAN)incremental level 0 backup is a bottleneckFORCE LOGGING is enabled for the databaseWhich two could improve read performance?",
        answers: [{type: "A", content: " Disable FORCE LOGGING for the database"}, {
            type: "B", content: " Enable asynchronous disk I/O"
        }, {type: "C", content: " Increase the size of the database buffer cache."}, {
            type: "D", content: "Increase the level of RMAN multiplexing"
        }, {type: "E", content: " Increase the size of tape I/O buffers"}],
        rightAnswers: ["B", "D"]
    }, {
        question: "15、 Which two are true about Oracle instance recovery?", answers: [{
            type: "A", content: " Recovery begins from the beginning of the CURRENT redo log group."
        }, {
            type: "B",
            content: " Recovery begins from the start of any ACTIVE redo log group or the start of the CURRENT log group if no other group is ACTIVE"
        }, {
            type: "C",
            content: " Recovery begins from the last checkpoint position that was recorded in the control file by the checkpoint process (ckpt)"
        }, {
            type: "D",
            content: " Recovery begins from the last checkpoint position that was calculated by the Database Writer before instance failure"
        }, {
            type: "E",
            content: " Recovery reads redo until the end of the redo thread, and then opens the database. SMON then rolls back any dead transactions"
        }, {
            type: "F",
            content: " Recovery reads redo until the end of the redo thread. SMON rolls back any dead transactions, and then the database is opened"
        }], rightAnswers: ["C", "E"]
    }, {
        question: "16、Which three are true about recovering tables using RMAN?",
        answers: [{type: "A", content: " RMAN can recover tables in the SYSAUX tablespace"}, {
            type: "B", content: " RMAN always uses an auxiliary instance"
        }, {
            type: "C", content: " RMAN can recover a table after a DDL operation has altered the table structure."
        }, {type: "D", content: " RMAN can recover tables owned by the sys user."}, {
            type: "E", content: " RMAN can recover tables in the SYSTEM tablespace"
        }, {type: "F", content: " RMAN can recover tables in a standby database"}, {
            type: "G", content: " RMAN can recover tables owned by the SYSTEM user."
        }],
        rightAnswers: ["B", "C", "G"]
    }, {
        question: "17、Which two are true about creating RMAN backups for an Oracle container database?",
        answers: [{type: "A", content: " Control file backups can be created while connected to cdb$root"}, {
            type: "B",
            content: " The BACKUP TABLESPACE command can back up a PDB tablespace even if RMAN is connected to CDB$ROOT"
        }, {type: "C", content: " Online Redo Log backups can be created while connected to CDB$ROOT."}, {
            type: "D", content: " Control file backups can not be created while connected to a PPB."
        }, {type: "E", content: " Archived Redo Log backups can be created while connected to PDB"}],
        rightAnswers: ["A", "B"]
    }, {
        question: "18、Which two are true about creating pluggable databases(PDBS)in Oracle 19c and later releases?",
        answers: [{
            type: "A", content: " A PDB snapshot depends on an existing storage snapshot of the source PDB"
        }, {type: "B", content: " A PDB snapshot can be a full copy of a source PDB"}, {
            type: "C", content: " A PDB snapshot can be a sparse copy of a source PDB"
        }, {
            type: "D", content: " A snapshot copy PDB does not depend on an existing storage snapshot of the source PDB"
        }, {type: "E", content: " A snapshot copy PDB can be a full copy of a source PDB"}],
        rightAnswers: ["B", "C"]
    }, {
        question: "19、In which two situations can you use Database Upgrade Assistant?",
        answers: [{
            type: "A", content: " when the operating system(OS)needs to be changed as part of the upgrade"
        }, {
            type: "B",
            content: " when multiple pluggable databases in a container database have to be upgraded in a specific sequence"
        }, {type: "C", content: "when the hardware platform needs to be changed as part of the upgrade"}, {
            type: "D", content: " when a character set conversion is required during the upgrade"
        }, {type: "E", content: " when the target and source database are on the same platform"}],
        rightAnswers: ["B", "E"]
    }, {
        question: "20、Which three are true in Oracle 19c and later releases?", answers: [{
            type: "A", content: " Simultaneous data pump jobs can be limited at the pluggable database(PDB) level"
        }, {
            type: "B",
            content: " An ordinary data pump export of a table with encrypted columns will always encrypt the same columns when imported"
        }, {
            type: "C",
            content: " Tablespaces always remain in read/write mode during transportable tablespace operations"
        }, {
            type: "D",
            content: " A transportable data pump import can leave a plugged-in tablespace in read/write mode."
        }, {
            type: "E",
            content: " Tablespaces never remain in read/write mode during transportable tablespace operations"
        }, {
            type: "F", content: " A transportable data pump import can leave a plugged-in tablespace in read-only mode"
        }], rightAnswers: ["A", "D", "F"]
    }, {
        question: "21、Which three are true about patchsets?",
        answers: [{type: "A", content: " They are only released quarterly"}, {
            type: "B", content: " They are installed via Opatch or Opatchauto."
        }, {type: "C", content: " A base release is not needed to install patchsets."}, {
            type: "D", content: " They can introduce new features"
        }, {
            type: "E", content: " They can be applied in a rolling fashion for Clusterware and the databases"
        }, {type: "F", content: " Installing a patchset is considered an upgrade."}],
        rightAnswers: ["C", "D", "F"]
    }, {
        question: "22 、 Which three are true about recovery operations done without using Recovery Manager(RMAN)?",
        answers: [{type: "A", content: " A lost SPFILE can be recovered from memory using SQL*PLUS"}, {
            type: "B", content: " A lost password file can be re-created with SQL*PLUS."
        }, {type: "C", content: " A lost password file can be manually re-created with the orapwd utility"}, {
            type: "D", content: " A lost index tablespace can be re-created without performing any recovery"
        }, {type: "E", content: " A lost TEMPFILE must always be re-created manually."}, {
            type: "F", content: " A lost PFILE can be re-created from alert log using SOL*PLUS"
        }],
        rightAnswers: ["A", "C", "D"]
    }, {
        question: "23、Which two are true about Optimizer Statistics?",
        answers: [{type: "A", content: " They are ignored by Optimizer if they are stale."}, {
            type: "B", content: " They provide real-time data about schema objects"
        }, {type: "C", content: " By default, they are automatically gathered by a maintenance job"}, {
            type: "D", content: " They are gathered by the SQL Tuning Advisor"
        }, {type: "E", content: " They can be gathered by the DBMS_STATS package"}],
        rightAnswers: ["C", "E"]
    }, {
        question: "24、Which three are true about interpreting Recovery Manager(RMAN)error stacks returned to standard output?",
        answers: [{
            type: "A", content: " If an RMAN command fails, the output will only identify the command that failed"
        }, {
            type: "B",
            content: " If an RMAN command fails, the output will identify the channel ID where the failure occurred."
        }, {type: "C", content: " Media Management errors appear as a line with\"sbtio"}, {
            type: "D", content: " Some messages in the error stack are not errors"
        }, {
            type: "E", content: " Media Management errors appear as a line with\"Additional information and a number."
        }, {type: "F", content: " Media Management errors appear as a line with\"sbtio and a number."}],
        rightAnswers: ["B", "D", "E"]
    }, {
        question: "25、In performance management, which two factors might reduce the ability of an application to scale to a larger number of users?",
        answers: [{
            type: "A",
            content: " the number of data files containing extents belonging to tables updated by a transaction"
        }, {type: "B", content: " issuing multiple savepoints during a transaction"}, {
            type: "C", content: " poorly written SQL"
        }, {type: "D", content: " poorly trained users who do not commit transactions"}, {
            type: "E", content: " the number of tablespaces containing tables updated by a transaction"
        }],
        rightAnswers: ["C", "D"]
    }, {
        question: "26、Which three are true about block media recovery?", answers: [{
            type: "A",
            content: " The target database for which one or more blocks are to be recovered must be in the OPEN state"
        }, {type: "B", content: " The data file containing the block being recovered remains online"}, {
            type: "C", content: " It cannot repair logical corruption"
        }, {type: "D", content: " It can be performed on noncorrupt blocks"}, {
            type: "E", content: " A block being recovered is not accessible"
        }, {type: "F", content: " To use it, Flashback Database must be enabled "}], rightAnswers: ["B", "D", "E"]
    }, {
        question: "27、You issued this commandRMAN> BACKUP RECOVERY AREA FORCEWhich three are true?",
        answers: [{
            type: "A",
            content: " All Oracle recovery files normally written to the FRA and which have been backed up already to the current FRA are backed up"
        }, {
            type: "B", content: " All files in any previous FRA that have not yet been backed up, are backed up"
        }, {
            type: "C",
            content: " All Oracle recovery files normally written to the FRA and which have not yet been backed, arebacked up"
        }, {
            type: "D",
            content: " All Oracle recovery files normally written to the FRA and which have been backed up already to in any previous FRA, are backed up"
        }, {
            type: "E",
            content: " All files in the current fast recovery area(FRA)that have not yet been backed up, are backed up"
        }, {
            type: "F", content: " All files in the current FRA that have been backed up already, are backed up"
        }, {type: "G", content: " All files in any previous FRA that have been backed up already, are backed up."}],
        rightAnswers: ["A", "C", "D"]
    }, {
        question: "28、 Which three are true about Automatic Workload Repository (AWR), Automatic Database Diagnostic Monitor(ADDM), and the Manageability Monitor(MMON)background process?",
        answers: [{type: "A", content: " AWR snapshots must be deleted when no longer required by ADDM"}, {
            type: "B", content: " By default, MMON creates an AWR snapshot every 30 minutes."
        }, {type: "C", content: " ADDM can recommend extending the buffer cache"}, {
            type: "D", content: " ADDM can recommend shrinking the buffer cache"
        }, {
            type: "E",
            content: " By default, AWR snapshots are automatically purged after eight daysF ADDM performs its analysis only when a DBA requests it."
        }],
        rightAnswers: ["C", "D", "E"]
    }, {
        question: "29、Which three are true about Automatic Workload Repository (AR)and Automatic Database Diagnostic Monitor(ADDM)in an Oracle multitenant environment?",
        answers: [{type: "A", content: " AWR snapshots can be created in CDB$ROOT"}, {
            type: "B", content: " No AWR data is stored in the CDBSROOT SYSAUX tablespace"
        }, {type: "C", content: " ADDM can run in a nonroot container"}, {
            type: "D", content: " All AWR data is stored in the CDBSROOR SYSAUX tablespace"
        }, {type: "E", content: " AWR snapshots can be created in a PDB"}, {
            type: "F", content: " AWR reports can be generated while connected to any container"
        }],
        rightAnswers: ["A", "E", "F"]
    }, {
        question: "30、Which four are true about duplicating a database using Recovery Manager(RMAN)?",
        answers: [{type: "A", content: " A connection to an auxiliary instance is always required"}, {
            type: "B", content: " A connection to the target database instance is always required"
        }, {
            type: "C",
            content: " A subset of the target database can be duplicatedD A new DBID is always created for the duplicated database"
        }, {
            type: "E",
            content: " Duplication can be done by having the auxiliary database instance pull backup sets from the target database instance"
        }, {
            type: "F",
            content: " Duplication can be done by having the target database instance push copies to the auxiliarydatabase instance"
        }, {type: "G", content: "A connection to the recovery catalog instance is always required"}, {
            type: "H", content: "A backup of the target database is always required."
        }],
        rightAnswers: ["A", "C", "E", "F"]
    }, {
        question: "31、Which are three of the steps taken by Database Configuration Assistant(DBCA)to clone a remote pluggable database(PDB)starting from Oracle 19c?",
        answers: [{type: "A", content: " leaving the cloned PDB in mount state"}, {
            type: "B",
            content: " creating a database link from CDBSROOR in the local database to the PDB in the remote system that is to be cloned"
        }, {
            type: "C",
            content: " creating a database link from CDBSROOR in the local database to CDBSROOR in the remote system that is to be cloned"
        }, {type: "D", content: " opening the cloned PDB"}, {type: "E", content: " backing up the cloned PDB"}],
        rightAnswers: ["B", "C", "D"]
    }, {
        question: "32、Which two are true about the character sets used in an Oracle database?",
        answers: [{
            type: "A",
            content: " Unicode enables information from any language to be stored using a single character set"
        }, {
            type: "B",
            content: " Unicode is the only supported character set for Oracle databases created using DatabaseConfiguration Assistant (DBCA)"
        }, {
            type: "C", content: " Single-byte character sets provide better performance than multibyte character sets"
        }, {type: "D", content: " Single-byte character sets always use 7-bit encoding schemes"}, {
            type: "E",
            content: " Multibyte character sets allow more efficient space utilization than single byte character sets."
        }, {type: "F", content: " Single-byte character sets always use 8-bit encoding schemes."}],
        rightAnswers: ["A", "C"]
    }, {
        question: "33、Which three are true about using Database Upgrade Assistant(DBUA)to upgrade a database?",
        answers: [{
            type: "A", content: " Multiple databases with the same ORACLE HOME can be upgraded simultaneously"
        }, {
            type: "B",
            content: " All pluggable databases are automatically upgraded as part of a container database upgrade."
        }, {type: "C", content: " DBUA must be launched from the target Oracle Home"}, {
            type: "D", content: " The Pre-upgrade Information Tool script is executed by DBUA"
        }, {type: "E", content: " A whole database backup must exist before upgrade"}, {
            type: "F", content: " The database must be opened in read-only mode."
        }],
        rightAnswers: ["B", "C", "D"]
    }, {
        question: "34、PDB1 and PDB2 are pluggable databases in CDB1Examine these commands CDB1 is then restartedWhich three are true?",
        answers: [{type: "A", content: " PDB2 will be opened READ WRITEBPDB2 will be MOUNTED"}, {
            type: "C", content: " PDB$SEED will be opened READ ONLY"
        }, {type: "D", content: " PDB1 will be opened READ WRITE"}, {
            type: "E", content: " PDB$SEED will be MOUNTED"
        }, {type: "F", content: "PDB1 will be MOUNED."}],
        rightAnswers: ["B", "C", "D"]
    }, {
        question: "35、Which three are true about using Database Resource Manager in an Oracle multitenant environment?",
        answers: [{type: "A", content: " A Pdb-level resource plan can limit session PGA memory"}, {
            type: "B", content: " A Cdb-level resource plan is mandatory when using Pdb-level resource plans"
        }, {type: "C", content: " A Cdb-level resource plan can limit session CPU utilization."}, {
            type: "D", content: " A Cdb-level resource plan can limit PDB UNDO use"
        }, {type: "E", content: " Pdb-level resource plans can limit uncommitted UNDO per consumer group"}, {
            type: "F", content: " A Cdb-level resource plan can limit PDB CPU utilization."
        }],
        rightAnswers: ["A", "B", "F"]
    }, {
        question: "36、Which three are true about the FLASHBACK DATABASE feature?",
        answers: [{type: "A", content: " It always generates REDO and UNDO"}, {
            type: "B", content: " It requires that the target database be in ARCHIVELOG mode"
        }, {
            type: "C",
            content: " FLASHBACK DATABASE only uses FLASHBACK Logs to get the database to the desired flashback time"
        }, {type: "D", content: " FLASHBACK LOGS are archived after a log switch"}, {
            type: "E", content: " A database can be flashedback using SQL*PLUS"
        }, {
            type: "F",
            content: " Queries and DML have the same FLASHBACK LOG overhead when flashback is enabled for a database"
        }],
        rightAnswers: ["A", "B", "E"]
    }, {
        question: "37、Which should be tuned first when doing a performance tuning exercise for an Oracle Database environment?",
        answers: [{type: "A", content: " log writer performance"}, {type: "B", content: " SQL statements"}, {
            type: "C", content: " database instance memory management and sizes"
        }, {type: "D", content: " general operating system health"}, {
            type: "E", content: " database writer performance"
        }],
        rightAnswers: ["D"]
    }, {
        question: "38、Which three are true about Rapid Home Provisioning (RHP), which has been available since Oracle 18c?",
        answers: [{
            type: "A", content: " It can be used to deploy Grid Infrastructure homes, including Oracle Restart."
        }, {type: "B", content: " It is an Oracle Grid Infrastructure service"}, {
            type: "C", content: " It is an Oracle Database service"
        }, {type: "D", content: " It cannot be used to provision middleware."}, {
            type: "E", content: " It cannot be used to provision applications"
        }, {type: "F", content: " It can be used to deploy Oracle Database homes."}],
        rightAnswers: ["A", "B", "F"]
    }, {
        question: "39、You want to transport the UNIVERSIRY tablespace from one database to another.The universiry tablespace is currently open read/writeThe source and destination platforms have the same endian format.Examine this list of steps:1. Make the UNIVERSIRY tablespace read-only on the source system2. Export the UNIVERSIRY tablespace metadata using EXPDP3. Create a cross-platform backup set from the UNIVERSITY tablespace on the source system, using anRMAN command that includes the DAMAPUMP clause4. Copy the cross-platform backup sets to the destination system5. Copy the Data Pump dump set from the source to the destination system6. Restore the cross-platform backup set on the destination system using an RMAN command thatincludes the pamapump clause7. Import the UNIVERSIRY tablespace metadata using IMPDP8. Make the UNIVERSIRY tablespace read/write on the destination systemWhich are the minimum number of steps required, in the correct order, to transport the UNIVERSIRY tablespace?",
        answers: [{type: "A", content: "3,4,6"}, {type: "B", content: "1,3,4,6,8"}, {
            type: "C", content: "1,2,3,4,5,6,7,8"
        }, {type: "D", content: "2,3,4,5,6,7"}],
        rightAnswers: ["B"]
    }, {
        question: "40、A database is configured in ARCHIVELOG modeA full RMAN backup exists but no control file backup to trace has been takenA media failure has occurredIn which two scenarios is incomplete recovery required?",
        answers: [{type: "A", content: " after losing all copies of the control file"}, {
            type: "B", content: " after losing a sysaux tablespace data file"
        }, {type: "C", content: " after losing all members of the CURRENT online redo log group"}, {
            type: "D", content: " after losing all members of an INACTIVE online redo log group"
        }, {type: "E", content: " after losing an UNDO tablespace that is in use"}],
        rightAnswers: ["C", "E"]
    }, {
        question: "41、Which three are true about an application container?",
        answers: [{type: "A", content: " It can contain a single application"}, {
            type: "B", content: " It can contain multiple applications"
        }, {type: "C", content: " Two application containers can share an application seed PDB"}, {
            type: "D", content: " An application PDB can belong to multiple application containers"
        }, {type: "E", content: " It must have an application root PDB"}, {
            type: "F", content: " It must have an application seed PDB"
        }],
        rightAnswers: ["A", "B", "E"]
    }, {
        question: "42、Which two are true about backup set compression using RMAN default compression?",
        answers: [{type: "A", content: " Compressed backups cannot have a section size defined"}, {
            type: "B", content: " Unused blocks below the high water mark are backed up"
        }, {type: "C", content: " Binary compression adds CPU overhead to backup operations"}, {
            type: "D", content: " Compressed backups can be written only to media"
        }, {type: "E", content: " Compression can be done only for locally managed tablespaces"}],
        rightAnswers: ["C", "E"]
    }, {
        question: "43、Which three are true about Automatic Workload Repository (AWR)snapshots?",
        answers: [{type: "A", content: " They can be retained forever"}, {
            type: "B", content: " They are generated if statistics LEVEL is set to ALL."
        }, {type: "C", content: " They are always created manual"}, {
            type: "D", content: " They are generated if statistics LEVEL is set to BASIC."
        }, {type: "E", content: " They are always created automatically."}, {
            type: "F", content: " They are generated if statistics LEVEL is set to TYPICAL"
        }],
        rightAnswers: ["A", "B", "F"]
    }, {
        question: "44、Which two are true about duplicating pluggable databases(PDBS) with RMAN?",
        answers: [{
            type: "A", content: " CDB$ROOT and PDBSSEED are automatically duplicated if a PDB is duplicated"
        }, {
            type: "B",
            content: " A user with SYSDBA or SYSBKUP must use RMAN logged in to a PDB in order to duplicate it."
        }, {type: "C", content: " Two or more PDBS can be duplicated with the same RMAN DUPLICATE command"}, {
            type: "D", content: "The auxiliary instance is automatically created with ENABLE PLUGGABLE DATABASE TRUE"
        }, {type: "E", content: " All tablespaces belonging to a PDB must be duplicated when duplicating the PDB"}],
        rightAnswers: ["A", "C"]
    }, {
        question: "45、Examine this configuration Which table or set of tables will exist after the Flashback operation has completed?",
        answers: [{type: "A", content: " none of the tables, because all three tables will be dropped"}, {
            type: "B", content: " CDB1_TAB and APP_PDB1_TAB"
        }, {type: "C", content: " CDB1_TAB and APP ROOT_TAB"}, {type: "D", content: " CDB1_TAB only"}, {
            type: "E", content: " CDB1_TAB, APP_ROOT_TAB, and APP_PDB1_TAB"
        }],
        rightAnswers: ["B"]
    }, {
        question: "46 、Examine This configuration: Which two are true?",
        answers: [{type: "A", content: " PDB1 C2 SRY will be created and started automatically"}, {
            type: "B", content: " PDB1 C2 SRV will be created but not started"
        }, {type: "C", content: " PDB1 will be created in CDB2 and automatically opened."}, {
            type: "D", content: " PDB1 C1 SRV in CDBL will be renamed PDB1 C2 SRV"
        }, {type: "E", content: " PDB1 will be created in CDB2 and left in MOUNT state."}],
        rightAnswers: ["B", "E"]
    }, {
        question: "47、Which three capabilities require the use of the RMAN recovery catalog?", answers: [{
            type: "A",
            content: " using the REPORT SCHEMA command to list a databases current data files and tablespaces"
        }, {type: "B", content: " using the KEEP FOREVER clause with the BACKUP command"}, {
            type: "C", content: " creating encrypted backups"
        }, {type: "D", content: " creating customized reports about a single databases backups"}, {
            type: "E",
            content: " using the REPORT SCHEMA command to list a databases data files and tablespaces at times in the past"
        }, {type: "F", content: " using RMAN stored scripts"}], rightAnswers: ["B", "E", "F"]
    }, {
        question: "48、Your container database, CDB1, is in local undo mode.You successfully execute this command while connected to CDB1:Which three are true about PDB1?",
        answers: [{type: "A", content: " It has no local users"}, {
            type: "B", content: " It has only local roles"
        }, {
            type: "C",
            content: " It has the same number of roles as CDB1.D It has the same common users defined as does CDB1"
        }, {type: "E", content: " It is in mount state after creation"}, {
            type: "F", content: " Service PDB1 is created for remote logins to PDB1"
        }],
        rightAnswers: ["C", "E", "F"]
    }, {
        question: "49、Which two are true about various Oracle security and auditing capabilities?",
        answers: [{
            type: "A",
            content: " Application-common Transparent Security Data Protection(TSDP)policies can be created only if all the PDBS in the application container are closed"
        }, {
            type: "B",
            content: " Unified auditing can be automatically synchronized to all application PDBS in an applicationcontainer"
        }, {
            type: "C",
            content: " Application-common OLS policies can be created only if all the PDBS in the application container are closed"
        }, {
            type: "D",
            content: " Fine-grained auditing (FGA)policies in an application root are automatically synchronized to all application PDBS contained in the application container when they are updated"
        }, {type: "E", content: " Application-common TSDP policies are always container specific."}],
        rightAnswers: ["B", "E"]
    }, {
        question: "50、Which statement correctly describes the SQL profiling performed by the SQL Tuning Advisor?",
        answers: [{
            type: "A", content: " It is a set of recommendations by the optimizer to create new indexes"
        }, {
            type: "B", content: " It is a set of recommendations by the optimizer to change the access methods used"
        }, {
            type: "C",
            content: " It is auxiliary information collected by the optimizer for a SQL statement to help use better joins orders"
        }, {
            type: "D",
            content: " It is a set of recommendations by the optimizer to restructure a SQL statement to avoid suboptimal execution plans"
        }, {
            type: "E",
            content: " It is auxiliary information collected by the optimizer for a SQL statement to eliminate estimation error"
        }],
        rightAnswers: ["E"]
    }, {
        question: "51、Which three are true about performing an Oracle Database install on Linux?", answers: [{
            type: "A", content: " It can be done after installing Grid Infrastructure for a Standalone Server"
        }, {
            type: "B", content: " It allows you to select the languages supported by the Oracle database server."
        }, {
            type: "C",
            content: " The Oracle Preinstallation RPM can be used to configure the Oracle database installation owner the Oracle Inventory group, and an Oracle administrative privileges group."
        }, {
            type: "D", content: " It can be done before installing Grid Infrastructure for a Standalone Server"
        }, {type: "E", content: " The runfixup. sh script can install missing RPMS"}, {
            type: "F",
            content: " The Oracle Preinstallation RPM must be used to configure the Oracle database installation owner, the Oracle Inventory group, and an Oracle administrative privileges group."
        }, {
            type: "G",
            content: " The Oracle database administrator must be granted access to the root operating system account to run root privileged scripts"
        }], rightAnswers: ["A", "C", "D"]
    }, {
        question: "52、Which three are true about a whole database backup?",
        answers: [{type: "A", content: " It can be created only by using RMAN"}, {
            type: "B", content: " It is the only possible backup type for a database in NOARCHIVELOG mode"
        }, {type: "C", content: " It can be consistent."}, {
            type: "D", content: " It can consist of either backup sets or image copies."
        }, {type: "E", content: " It can be inconsistent"}, {
            type: "F",
            content: " It always includes all data files, the current control file, the server parameter file, and archived redo logs."
        }],
        rightAnswers: ["C", "D", "E"]
    }, {
        question: "53 、 Which three resources are always shared among CDB$ROOT and pluggable databases( PDBS)?",
        answers: [{type: "A", content: " the log writer process(LGWR)"}, {
            type: "B", content: " Undo tablespaces"
        }, {type: "C", content: " temporary tablespaces"}, {
            type: "D", content: " the data dictionary in CDB$ROOT"
        }, {type: "E", content: " the Process Monitor Process(PMON)"}, {type: "F", content: " SYSAUX tablespaces"}],
        rightAnswers: ["A", "D", "E"]
    }, {
        question: "54、which three are true about the tools for diagnosing Oracle Database failure situations?",
        answers: [{
            type: "A",
            content: "The Automatic Diagnostic Repository (ADR) has a separate home directory for each instance of each Oracle product that is installed and uses it"
        }, {
            type: "B",
            content: " The ADR command-line utility (ADRCI)can package incident information to send to OracleSupport."
        }, {type: "C", content: " The ADR can store metadata in an Oracle Database repository."}, {
            type: "D", content: " Flashback commands help with repairing physical errors."
        }, {type: "E", content: " The Data Recovery Advisor uses the ADRF RMAN can always repair corrupt blocks"}],
        rightAnswers: ["A", "B", "E"]
    }, {
        question: "55、Which three are true about RMAN archival backups with the RESTORE POINT clause?", answers: [{
            type: "A",
            content: " Archive logs are retained if they are necessary to allow the database to be recovered to a consistent state when an archival backup is restored"
        }, {type: "B", content: " The SPFILE is included in the archival backup."}, {
            type: "C", content: " The ARCHIVAI attribute for a backup overrides the RMAN retention policy"
        }, {type: "D", content: " They are never considered obsolete by RMAN"}, {
            type: "E", content: " They can optionally be written to a fast recovery area(FRA)."
        }, {
            type: "F",
            content: " All archive logs are retained after an archival backup is taken, until the next archival backup is taken of the same database"
        }, {
            type: "G",
            content: "Use of a recovery catalog is always required to support the creation and use of archival backups"
        }], rightAnswers: ["A", "B", "C"]
    }, {
        question: "56、Which three are true about backing up the control file?", answers: [{
            type: "A", content: " It gets backed up automatically by RMAN when the BACKUP SPFILE command is used"
        }, {
            type: "B",
            content: " It gets backed up automatically by RMAN as a trace file containing SQL statements for control file re-creation when a database backup occurs"
        }, {type: "C", content: " It can get backed up automatically as a binary copy."}, {
            type: "D", content: " It can be backed up manually as a binary copy."
        }, {type: "E", content: " It cannot be backed up manually as a binary copy."}, {
            type: "F",
            content: " It can be backed up manually as a trace file containing SQL statements for control file re-creation"
        }], rightAnswers: ["C", "D", "F"]
    }, {
        question: "57、You want to install Oracle Grid Infrastructure for a Standalone Server using Oracle Universal Installer （OUI)There is no existing Oracle installation on the server.Which two are prerequisites?",
        answers: [{type: "A", content: " the Oracle Inventory group oinstall"}, {
            type: "B", content: " the installation of Oracle ASMLIB"
        }, {type: "C", content: " an operating system user to own this installation"}, {
            type: "D", content: " a group called dba"
        }, {type: "E", content: " an operating system account called grid"}],
        rightAnswers: ["A", "C"]
    }, {
        question: "58、RMAN has just been connected to a target database and the recovery catalog databaseIn which two cases would an automatic full resynchronization occur between this target databases control file and the RMAN recovery catalog?",
        answers: [{
            type: "A",
            content: " when control file metadata for archive log backups or image copies has been overwritten in the target databases control file due to being older than CONTROL FILE RECORD KEEP TIME"
        }, {
            type: "B",
            content: " when control file metadata for data file backups or image copies has been overwritten in the target databases control file due to being older than CONTROL FILE RECORD KEEP TIME"
        }, {type: "C", content: " when a backup of the current control file is created"}, {
            type: "D", content: " when the target is first registered"
        }, {type: "E", content: " when a new tablespace is added to a registered target database"}],
        rightAnswers: ["C", "D"]
    }, {
        question: "59、Which three are true about post-upgrade activities when upgrading an Oracle database using Database Upgrade Assistant?",
        answers: [{
            type: "A",
            content: " After a manual upgrade, TNSNAMES. ORA entries must be updated to reflect the new ORACLE HOME"
        }, {
            type: "B", content: " The new extended data type capabity must be enabled by running the utlrp. sql script"
        }, {
            type: "C",
            content: " The Oracle Application Express configuration should be updated after upgrading Oracle Database"
        }, {type: "D", content: " Any Recovery Manager(RMAN)recovery catalog must be upgraded manually"}, {
            type: "E", content: " Time zone files must be upgraded manually using the DBMS DST PL/SQL package."
        }],
        rightAnswers: ["B", "C", "E"]
    }, {
        question: "60、A container database, CDB1, contains a pluggable database PDB1Another container database is called CDB2You want to relocate PPB1 from CDB1 to CDB2 with near-zero down timeWhich three are required?",
        answers: [{type: "A", content: " CDB1 must be in shared UNDO mode only"}, {
            type: "B", content: " CDB2 must be in archivelog mode."
        }, {type: "C", content: " CDB1 must be in archivelog mode"}, {
            type: "D", content: " CDB2 must be in shared UNDO mode only"
        }, {type: "E", content: " CDB1 and CDB2 must both be in local UNDO mode"}, {
            type: "F", content: " CDB1 and CDB2 must be in shared UNDO mode"
        }],
        rightAnswers: ["B", "C", "E"]
    }, {
        question: "61、Which two are true about an Rpm-based Oracle Database installation?",
        answers: [{type: "A", content: " It requires an Unbreakable Linux Network(ULN)subscription"}, {
            type: "B",
            content: " It uses a service configuration script to create a single-instance database as part of theinstallation"
        }, {type: "C", content: " It performs a software-only Oracle Database installation"}, {
            type: "D", content: " It includes the Oracle Preinstallation RPM"
        }, {
            type: "E",
            content: " From Oracle Database 18c, a single RPM can be used to install only Oracle Database Server for a single instance"
        }],
        rightAnswers: ["C", "D"]
    }, {
        question: "62、Which three are true about cloning databases into an existing CDB with RMAN?",
        answers: [{type: "A", content: " The target and auxiliary instance passwords must be the same."}, {
            type: "B", content: " Only one PDB can be cloned at a time"
        }, {
            type: "C",
            content: " Two or more PDBS can be cloned with the same commandA NON-CDB can be cloned into a PDB"
        }, {
            type: "E",
            content: " A user with SYSDBA or SYSBKUP must be logged in with RMAN to CDB$ROOT when cloning a PDB"
        }, {
            type: "F",
            content: " A user with SYSDBA or SYSBKUP must be logged in with RMAN to the NON-CDB being cloned when cloning a NON-CDB"
        }],
        rightAnswers: ["A", "B", "E"]
    }, {
        question: "63、Which two are true about Lockdown profiles in a container database(CDB)and its pluggable databases(PDBS)?",
        answers: [{type: "A", content: " A PDB Lockdown profile can be created in an application root"}, {
            type: "B", content: " A PDB Lockdown profile can be created in a regular PDB"
        }, {
            type: "C",
            content: " A Lockdown profile created from a base Lockdown profile is never automatically modified if the profile on which it is based is modified"
        }, {type: "D", content: " A PDB Lockdown profile can be created in CDB$ROOT"}, {
            type: "E",
            content: " A Lockdown profile created from a base Lockdown profile is always automatically modified if the profile on which it is based is modified"
        }],
        rightAnswers: ["A", "D"]
    }, {
        question: "64、Which three are true about the Oracle Optimizer?", answers: [{
            type: "A", content: " It can re-optimize execution plans after previous executions detect suboptimal plans"
        }, {
            type: "B",
            content: " It considers the filters in WHERE clauses when generating execution plans for SQL statements"
        }, {
            type: "C",
            content: " It can only use SQL Plan Directives tied to the SQL statement for which a plan is being generated"
        }, {
            type: "D", content: " It considers object statistics when generating execution plans for SQL statements"
        }, {type: "E", content: " It updates stale object statistics in the Data Dictionary"}, {
            type: "F", content: " It obeys all hints."
        }], rightAnswers: ["A", "B", "D"]
    }, {
        question: "65、The HR_Root application container must support the execution of a query on a table shared by application local PDBS PDB1 and PDB2, and remote PDB PDB3Which three are true?",
        answers: [{type: "A", content: " A proxy PDB must exist in the application root in the remote CDB"}, {
            type: "B", content: " A database link must exist in the remote CDB referring to the local CDB"
        }, {
            type: "C", content: " A database link must exist in the local CDB root referring to the remote CDB"
        }, {type: "D", content: " The HR_Root replica must exist in the remote CDB"}, {
            type: "E", content: " A proxy PDB must exist in the application root in the local CDB"
        }, {type: "F", content: " PDB3'S application root replica must exist in the local CDB"}],
        rightAnswers: ["C", "D", "E"]
    }, {
        question: "66、Which two are true about RMAN Multisection backups when a very large data file is divided into four sections?",
        answers: [{type: "A", content: " Each of the file sections must be processed serially."}, {
            type: "B", content: " The four sections must be image copies"
        }, {type: "C", content: " The four sections can be created serially"}, {
            type: "D", content: " The four sections can be created in parallel"
        }, {type: "E", content: " The four sections must be contained in backup sets"}],
        rightAnswers: ["C", "D"]
    }, {
        question: "67、Which three are true about Rapid Home Provisioning of Oracle software?", answers: [{
            type: "A", content: " It can be used only on nodes with Oracle Grid Infrastructure installed"
        }, {type: "B", content: " It can be used to patch existing Oracle software installations"}, {
            type: "C", content: " It can be used to deploy new homes without disrupting active databases."
        }, {
            type: "D", content: " It can be used to upgrade only single-instance databases running on Oracle Restart."
        }, {
            type: "E",
            content: " It can be used to create templates of Oracle homes as gold images of only Oracle databases"
        }, {
            type: "F",
            content: " It can be used to create a single-instance Oracle Database in an already-installed Oracle home."
        }], rightAnswers: ["B", "C", "D"]
    }, {
        question: "68 、 Which three are true about using an RMAN Recovery Catalog with a pluggable database(PDB)target connection in Oracle Database 19c and later releases?",
        answers: [{type: "A", content: " The target PDB must be registered in a Virtual Private Catalog"}, {
            type: "B",
            content: " The base catalog must be used by RMAN when performing point-in-time recovery for the PDB registered in the Virtual Private Catalog"
        }, {
            type: "C",
            content: " The target PDB must be registered in both the base catalog and the Virtual Private Catalog"
        }, {type: "D", content: " The target PDB must be registered in a base catalog"}, {
            type: "E",
            content: " The base catalog owner must give the Virtual Private Catalog access to metadata for one or more PDBS"
        }, {type: "F", content: "The base catalog must be enabled for Virtual Private Catalog use"}],
        rightAnswers: ["D", "E", "F"]
    }, {
        question: "69、Examine this configuration:Which is true?", answers: [{
            type: "A", content: " It will return an error because creation of a local role is not allowed in CDB$ROOT"
        }, {type: "B", content: " ROLE1 will be created only in CDBSROOR and App1_ROOT."}, {
            type: "C", content: " ROLE1 will be created only in CDBSROOR"
        }, {type: "D", content: " It will return an error because common roles must start with c##"}, {
            type: "E", content: " ROLE1 will be created in CDBSROOR, PDB1, App1_ Root, and APP1 PDB1"
        }], rightAnswers: ["A"]
    }, {
        question: "70、A database is configured in ARCHIVELOG modeFull RMAN backups are taken daily and no backup to trace has been taken of the control file, A media failure has occurredIn which two scenarios is complete recovery possible?",
        answers: [{type: "A", content: " after losing an archived log from after the most recent backup"}, {
            type: "B", content: " after losing all copies of the control file"
        }, {type: "C", content: " after losing the SYSTEM tablespace"}, {
            type: "D", content: " after losing an archived log from before the most recent backup"
        }, {type: "E", content: " when any archived log from, before, or after the most recent backup is corrupt"}],
        rightAnswers: ["B", "C"]
    }, {
        question: "71、Which two are true about an Oracle gold image-based installation in Oracle 18c and later releases?",
        answers: [{type: "A", content: " It does not require the setup wizard"}, {
            type: "B",
            content: " It can be used to install and upgrade Oracle Database for single-instance and clusterconfigurations"
        }, {
            type: "C", content: " It can be used for both Oracle Database and Oracle Grid Infrastructure installation"
        }, {
            type: "D",
            content: " It uses a single RPM that automatically extracts and installs the Oracle Database software"
        }, {
            type: "E",
            content: " It can only install and configure Oracle Database software. The database has to be createseparately."
        }],
        rightAnswers: ["B", "C"]
    }, {
        question: "72、Which two are true about unplugging an application container from a container database and plugging it into a different container database?",
        answers: [{type: "A", content: " It requires local UNDO mode in both container databases"}, {
            type: "B",
            content: " Application PDBS in the application container must be unplugged before the application root is unplugged."
        }, {
            type: "C",
            content: " The application root of an application container should be plugged into the other CDB before its application PDBS are plugged in."
        }, {
            type: "D", content: " Unplugging the application root from a CDB unplugs all its application PDBS."
        }, {
            type: "E", content: " Plugging the application root into a different CDB plugs in all its application PDBS."
        }, {
            type: "F",
            content: " IT requires only local UNDO mode in the database where the application container will beunplugged"
        }],
        rightAnswers: ["B", "C"]
    }, {
        question: "73、Which three are true about actions that can or cannot be performed by users with the SYSBACKUP privilege?",
        answers: [{type: "A", content: " They can view data from any user-defined tables."}, {
            type: "B", content: " They can drop any tablespace"
        }, {type: "C", content: " They can create any table."}, {
            type: "D", content: " They cannot drop tablespaces"
        }, {
            type: "E", content: " They can view data from any data dictionary view or dynamic performance view."
        }, {type: "F", content: " They cannot create restore points"}],
        rightAnswers: ["B", "C", "E"]
    }, {
        question: "74、Which two are true about RMAN backups when using a media manager?",
        answers: [{type: "A", content: " A media manager is required to create RMAN proxy copies."}, {
            type: "B", content: " A media manager always writes RMAN requested backups to tape"
        }, {
            type: "C",
            content: " The media manager layer(MML) routines provided by Oracle support any vendors mediamanagement products"
        }, {type: "D", content: " A media manager is required to create RMAN image copies"}, {
            type: "E", content: " By default, a request for a proxy copy may result in a backup set being created"
        }],
        rightAnswers: ["B", "E"]
    }, {
        question: "75、A container database (CDB)contains two pluggable databases PDB1 and PDB2The LOCAL_UNDO_ENABLED database property is set to FALSE in the CDBData file 24 of PDB2 was deleted and you need to restore and recover itThe only RMAN backup that exists was created with the BACKUP DATABASE command while connected to CDB$ROOTWhich three are true?",
        answers: [{
            type: "A", content: " Data file 24 can be restored and recovered while connected to CDB$ROOT"
        }, {type: "B", content: " Data file 24 can be restored only while connected to PDB2"}, {
            type: "C", content: " Data file 24 can be recovered only while connected to PDB2"
        }, {type: "D", content: " Data file 24 can be restored only while connected to CDB$ROOT"}, {
            type: "E", content: " Data file 24 can be recovered while connected to PDB2"
        }, {type: "F", content: " Data file 24 can be recovered while connected to CDB$root."}],
        rightAnswers: ["A", "E", "F"]
    }, {
        question: "76 Which three are performed by Oracle Automatic Storage Management(ASM)instances?",
        answers: [{type: "A", content: " mounting disk groups"}, {
            type: "B", content: " managing Allocation Units (AUS)for disk group content"
        }, {type: "C", content: " managing extent allocation for Oracle database segments"}, {
            type: "D",
            content: " acting as an I/O server to read data file blocks from ASM disks on behalf of database server processes"
        }, {
            type: "E",
            content: " acting as an I/O server to write data file blocks to ASM disks on behalf of Database Writerprocesses(DBWR)"
        }, {type: "F", content: " managing space allocation for Oracle ASM files"}],
        rightAnswers: ["A", "D", "E"]
    }, {
        question: "77、On the 10th of August, you implement an incremental database backup strategy and configure a recovery window of five daysLevel 0 backups are taken on the 10th, 17th, and 24th of AugustDifferential level 1 incremental backups are taken daily between the level 0 backupToday is the 26th of AugustWhich backups will be obsolete?",
        answers: [{type: "A", content: " all backups prior to 24th of August"}, {
            type: "B", content: " all backups prior to 17th of August"
        }, {type: "C", content: " all backups prior to 10th of August"}, {
            type: "D", content: " all backups prior to 22nd of August"
        }, {type: "E", content: " all backups prior to 20th of August"}],
        rightAnswers: ["B"]
    }, {
        question: "78、Which two are true about Oracle Grid Infrastructure for a Standalone Server?",
        answers: [{
            type: "A",
            content: " It requires Oracle Automatic Storage Management(ASM)components to be installed separately"
        }, {type: "B", content: " The CSS daemon runs from the Grid Infrastructure home"}, {
            type: "C",
            content: " It can manage database resources on the server where it is installed or on a different server."
        }, {
            type: "D", content: " It supports volume management, file system, and automatic restart capabilities"
        }, {type: "E", content: " It must be installed before the Oracle database software is installed"}],
        rightAnswers: ["B", "D"]
    }, {
        question: "79、HR_Root is an application container with the HR App application installedNo application PDBS and no application seed have yet been created in HR_ROOTAn application PDB, PDB1, must be created so that the HR App applications common objects are accessible to itWhich two methods can be used?",
        answers: [{
            type: "A",
            content: " Create an application seed, synchronize it with HR Root, and then create the PDB1 application PDB"
        }, {type: "B", content: " Create the PDB1 application PDB and synchronize it with HR ROOT"}, {
            type: "C", content: " Create an application seed, and install HR APP in it."
        }, {type: "D", content: " Create the PDB1 application PDB and synchronize it with PDBSSEED"}, {
            type: "E", content: " Create the PPB1 application PDB and install HR App in it."
        }],
        rightAnswers: ["A", "B"]
    }, {
        question: "80、Which two are true about instance recovery?",
        answers: [{type: "A", content: " It is not possible if an archived log is missing"}, {
            type: "B",
            content: "Setting Fasr START Mrrr TARGER to a higher value reduces instance recovery time by causing the log writer to write more frequently, thereby reducing the number of I/Os needed during instance recovery"
        }, {
            type: "C",
            content: "It is performed automatically after the database is opened; however, blocks requiring recovery are not available until they are recovered"
        }, {
            type: "D",
            content: "Setting FAST START MTTR TARGET to a lower value reduces instance recovery time by  causing dirty buffers to be written to disk more frequently, thereby reducing the number of I/Os needed during instance recovery."
        }, {
            type: "E",
            content: " It is performed automatically while the database remains in MOUNT state. Then the database is opened"
        }, {type: "F", content: " It is performed by the Recovery Writer (RVWR)background process"}],
        rightAnswers: ["D", "E"]
    }, {
        question: "81、Examine this configuration1. CDB1 is a container database2. App1_Root is an application container contained in CDBL3. App1_Root $SEED is the applcation seed conained in App Root and synchonized with APP1 ROOT4. App1_PDB1 and App1_PDB2 are application PDBS contained in App1 ROOT5. App1_USER App is an application installed in App1_Root at version 1.06. USER1 is a common user in App1_Root and all its application PDBS, created when version 1.0 of App1_USER_App was installedYou execute these commands:?",
        answers: [{type: "A", content: " USER1 can connect to App1 ROOT and APP1 PDB1"}, {
            type: "B", content: " USER1 can connect only to App1 ROOT"
        }, {type: "C", content: " USER1 is defined in APP1 PDB2"}, {
            type: "D", content: " USER1 can connect to APP1 ROOT, App1 ROOTSSEED, and Appl_PDB1"
        }, {type: "E", content: " USER1 can connect only to App1 PDB1"}, {
            type: "F", content: " USER1 can connect to CDB1"
        }],
        rightAnswers: ["A", "C"]
    }, {
        question: "82、Which two are true about RMAN virtual private catalogs(VPCS)?",
        answers: [{type: "A", content: " Each VPC is owned by the recovery catalog schema owner."}, {
            type: "B", content: " VPC functionality is enabled by default."
        }, {type: "C", content: " Only one target database can be registered in a VPC"}, {
            type: "D",
            content: " The RMAN catalog owner can grant access for an already registered database to a new virtual catalog owner"
        }, {type: "E", content: " RMAN uses Oracle Virtual Private Database(VPD) to implement VPCS"}],
        rightAnswers: ["D", "E"]
    }, {
        question: "83、Examine this configuration What is the outcome?",
        answers: [{type: "A", content: " It fails because PDBSSEED is in MIGRATE state"}, {
            type: "B", content: " It fails because PDB2 is not in UPGRADE state"
        }, {type: "C", content: " Only CDB$ROOT, PDB$SEED, and PDB2 are upgraded."}, {
            type: "D", content: " Only CDB$ROOT and PDB$SEED are upgraded."
        }, {type: "E", content: " CDB$ROOT, PDB$SEED, PDB1, and PDB2 are upgraded"}, {
            type: "F", content: " Only CDB$ROOT, PDB$SEED, and PDB1 are upgraded"
        }],
        rightAnswers: ["B"]
    }, {
        question: "84、Which two are true about memory advisors?",
        answers: [{
            type: "A",
            content: " If Automatic Memory Management is enabled, the Shared Pool Advisor and Buffer Cache Advisor are available to set the maximum size for these individual System Global Area components"
        }, {
            type: "B",
            content: " If Manual Shared Memory Management is enabled, only the Shared Pool Advisor and Buffer Cache Advisor are availableCIf Automatic Shared Memory Management is enabled, both the SGA Advisor and PGA Advisor are always available."
        }, {
            type: "D", content: " If Automatic Memory Management is enabled, no memory advisors are available."
        }, {type: "E", content: " All memory advisors use data from Automatic Workload Repository"}],
        rightAnswers: ["C", "E"]
    }, {
        question: "85、Examine these queries and their output After a system crash, an instance restart and an attempted opening of the PDBS result in:Which two are true?",
        answers: [{type: "A", content: " Data file 24 can be recovered while PDB2 is opened."}, {
            type: "B", content: " Data file 24 cannot be recovered while the CDB is opened"
        }, {type: "C", content: " Data file 24 must be recovered while PDB2 is closed."}, {
            type: "D", content: " Data file 24 must be recovered while the CDB is opened."
        }, {type: "E", content: " Data file 24 can be recovered while CDB$ROOR and PDB$SEED are opened"}],
        rightAnswers: ["A", "E"]
    }, {
        question: "86、Which two are prerequisites for using FLASHBACK TABLE?",
        answers: [{type: "A", content: " Row Movement must be enabled on the table being flashed back"}, {
            type: "B", content: " A tables indexes must be set to unusable before issuing the flashback"
        }, {type: "C", content: " A tables constraints must be disabled before issuing the flashback."}, {
            type: "D",
            content: " The FLASHBACK ANY TABLE system privilege or the FLASHBACK object privilege must be granted to the user performing the flashback"
        }, {
            type: "E",
            content: " The FLASHBACK ANY TABLE system privilege or the FLASHBACK object privilege must be granted to the table owner "
        }],
        rightAnswers: ["A", "D"]
    }, {
        question: "87、Which two are true about a read-only Oracle home?", answers: [{
            type: "A", content: " It contains an image that can be distributed across multiple servers"
        }, {
            type: "B",
            content: " It is enabled by performing a software-only Oracle Database installation and then running the roohctl-enable script"
        }, {
            type: "C",
            content: " It is enabled by performing an Oracle Database installation with database creation and thenrunning the roohctl -enable script."
        }, {type: "D", content: " It requires the Rapid Home Provisioning service."}, {
            type: "E", content: " It’s configuration data and log files reside in subdirectories under the Oracle home"
        }], rightAnswers: ["A", "B"]
    }, {
        question: "88、Which three are true about upgrading an application in an application container?", answers: [{
            type: "A", content: " The upgrade can be performed when connected either to cdb$root or to PDB$SEED"
        }, {
            type: "B", content: " An application name and version number must be specified to upgrade the application"
        }, {
            type: "C",
            content: " After an application upgrade, the application containers pdbs remain synchronized with the existing application root"
        }, {type: "D", content: " The upgrade must be performed when connected to CDB$ROOT"}, {
            type: "E", content: " An application root clone gets created automatically"
        }, {
            type: "F",
            content: " After an application upgrade, the application containers PDBS are automatically synchronized with the application root clone"
        }], rightAnswers: ["B", "C", "E"]
    }, {
        question: "89、Examine this output of an export from the current release of an Oracle multitenant databaseWhat is the outcome?",
        answers: [{type: "A", content: " It creates a full export of the root container and PDB1"}, {
            type: "B", content: " It creates a full export of the root container and all open PDBS."
        }, {type: "C", content: " It creates a full export of the root container and all PDBS"}, {
            type: "D", content: " It fails because Data Pump cannot be used while connected to the root container"
        }, {type: "E", content: " It creates a full export of only the root container"}],
        rightAnswers: ["E"]
    }, {
        question: "90、Which two are true about SQL Performance Analyzer(SPA)?",
        answers: [{
            type: "A",
            content: " It offers fine-grained analysis of all the SQL statements in the analysis task as a group"
        }, {
            type: "B",
            content: " It provides before and after execution statistics for each SQL statement in the analysis task."
        }, {type: "C", content: " It is integrated with the SQL Access Advisor."}, {
            type: "D", content: " SQL statements that were originally run concurrently are run concurrently by SPA"
        }, {type: "E", content: " It predicts the impact of system changes on SQL workload response time"}],
        rightAnswers: ["B", "E"]
    }, {
        question: "91、Which three are true about transporting databases across platforms using Recovery Manager (RMAN) image copies?",
        answers: [{type: "A", content: " A new DBID is automatically created for the transported database"}, {
            type: "B", content: " By default, the transported database will use Oracle Managed Files(OMF)"
        }, {type: "C", content: " Data files can be converted on the source system"}, {
            type: "D", content: " Databases can be transported between systems with different endian formats"
        }, {type: "E", content: " Data files can be converted on the destination system"}, {
            type: "F", content: " The password file is automatically converted by RMAN."
        }],
        rightAnswers: ["B", "C", "E"]
    }, {
        question: "92、Application PDBS, SALES_App1 and SALES_App2, must be created and they must access common tables of the SALES_App applicationExamine these steps:Which are the minimum required steps in the correct sequence?",
        answers: [{type: "A", content: " 3,4,1,6,8"}, {type: "B", content: " 1,5,6"}, {
            type: "C", content: " 2,5,6"
        }, {type: "D", content: " 1,3,5,7"}, {type: "E", content: " 1,3,5,6,7"}],
        rightAnswers: ["B"]
    }, {
        question: "93、Which three are true about Oracle Restart?",
        answers: [{
            type: "A",
            content: " You can add and remove components from an Oracle Restart configuration with Server Control (SRVCTL) commands"
        }, {
            type: "B",
            content: " It can manage Oracle Database instances, Oracle Net Listeners, and Oracle Automatic Storage Management instances"
        }, {type: "C", content: " It runs from the Oracle Grid Infrastructure home"}, {
            type: "D", content: " It is used in both clustered and non-clustered environments"
        }, {
            type: "E",
            content: " If you shut down a database instance with sol*plus, Oracle Restart interprets this as adatabase failure and attempts to restart the instance"
        }, {type: "F", content: " The Server Control (SRVCTL)utility can be used to start and stop Oracle Restart"}],
        rightAnswers: ["A", "B", "C"]
    }, {
        question: "94、Some archived log backups have been accidentally deleted from storageWhich two commands should be used to update the status of backups in the recovery catalog to display only the missing backups?",
        answers: [{type: "A", content: " LIST ARCHIVELOG ALL"}, {type: "B", content: " RESYNC CATALOG"}, {
            type: "C", content: " CROSSCHECK BACKUP OF ARCHIVELOG ALL"
        }, {type: "D", content: " LIST ARCHIVELOG"}, {type: "E", content: " REPORT OBSOLETE"}, {
            type: "F", content: "LIST EXPIRED"
        }],
        rightAnswers: ["C", "F"]
    }, {
        question: "95、Examine this configuration1. cdb1 is a container database2. There are several pluggable databases(PDBS)in CDB15. Each PDB has several tables with referential integrity constraints6. FLASHBACK DAABASE is ON7. UNDO RETENTION GUARANTEE is enabledMultiple undesired multitable changes were made in all the PDBSWhich method can be used to undo the changes using a single command?",
        answers: [{type: "A", content: " flashback database"}, {
            type: "B", content: " flashback table and transaction"
        }, {type: "C", content: " flashback transaction"}, {type: "D", content: " flashback table"}, {
            type: "E", content: " restore and recover database"
        }],
        rightAnswers: ["A"]
    }, {
        question: "96、You must migrate a NON-CDB Oracle 11g Database to a CDB without first performing an upgrade to the NON-CDBUser-defined objects are stored in several tablespaces in the NON-CDBWhich three methods can you use?",
        answers: [{type: "A", content: " Data Pump transportable tablespaces"}, {
            type: "B", content: " Data Pump full database export and import"
        }, {type: "C", content: " Data Pump full transportable database"}, {
            type: "D", content: " replication using Goldengate"
        }, {type: "E", content: " cloning the NON-CDB as a PDB"}, {type: "F", content: " the DBMS PDB package"}],
        rightAnswers: ["B", "D", "E"]
    }, {
        question: "97、Examine this configuration:In which order will the upgrade occur?",
        answers: [{type: "A", content: " CDB$ROOT, PDB$SEED, PDB2, PDB1, and PDB3"}, {
            type: "B", content: " CDB$ROOT, PDB$SEED, PDB2, PDB1, PDB3, and PDB4"
        }, {type: "C", content: " CDB$ROOT PDB$SEED, PDB:, PDB3, PDB2, and PDB4"}, {
            type: "D", content: " CDB$ROOT, PDB2, PDB1, and PDB3"
        }, {type: "E", content: " CDB$ROOT, PDB1, PDB2, PDB3, and PDB4"}],
        rightAnswers: ["A"]
    }, {
        question: "98、Which three actions are mandatory post database upgrade?",
        answers: [{type: "A", content: " Resetting passwords to enforce case-sensitivity"}, {
            type: "B", content: " Setting threshold values for tablespace alerts"
        }, {
            type: "C", content: " Upgrading user tables that depend on Oracle-maintained abstract data types."
        }, {type: "D", content: " Migration to unified auditing"}, {
            type: "E", content: " Run Patch commands from the new Oracle home"
        }, {type: "F", content: " Updating client scripts with the new Oracle home."}],
        rightAnswers: ["C", "E", "F"]
    }, {
        question: "99、In a single-instance, multitenant container database(CDB), which three are only ever defined in or part of CDB$ROOT?",
        answers: [{type: "A", content: " undo tablespaces"}, {type: "B", content: " temporary tablespaces"}, {
            type: "C", content: " redo logs"
        }, {type: "D", content: " all data dictionary metadata"}, {
            type: "E", content: " User-defined PL/SQL packages"
        }, {type: "F", content: " control files"}, {type: "G", content: " mandatory Oracle-supplied PU/SQL packages"}],
        rightAnswers: ["C", "F", "G"]
    }, {
        question: "100、Which two are true about backup encryption?",
        answers: [{type: "A", content: " The BACKUP BACKUPSET command can encrypt and decrypt backup sets"}, {
            type: "B", content: " Image copies can be encrypted"
        }, {type: "C", content: " Backup encryption can be enabled selectively for specific tablespaces"}, {
            type: "D", content: " The Transparent Data Encryption (TDE) keystore is backed up using RMAN"
        }, {
            type: "E",
            content: " Vendor-specific media management software can be used for making encrypted RMAN backups to media"
        }, {type: "F", content: " Keystore-based encryption is the default mode for RMAN backup encryption"}],
        rightAnswers: ["C", "F"]
    }, {
        question: "101、Your database is in ARCHIVELOG mode and you plan to use Flashback Database.Which two features or parameters manage space availability in the fast recovery area?",
        answers: [{type: "A", content: " the backup retention policy"}, {
            type: "B", content: " the DB_CREATE_ONLINE_LOG_DEST_n parameter setting"
        }, {type: "C", content: " the archived log deletion policy"}, {
            type: "D", content: " the backup optimization policy"
        }, {type: "E", content: " using guaranteed UNDO retention"}, {
            type: "F", content: " the DB RECOVERY FILE DEST parameter setting"
        }],
        rightAnswers: ["A", "C"]
    }, {
        question: "102、Which operating system group is NOT needed to perform an Oracle Database installation?",
        answers: [{type: "A", content: " OSRACDBA"}, {type: "B", content: " OSDBA"}, {
            type: "C", content: " OSASM"
        }, {type: "D", content: " OSKMDBA"}, {type: "E", content: " OSOPER"}],
        rightAnswers: ["E"]
    }, {
        question: "103、Which two are true about PDB archive files?", answers: [{
            type: "A", content: " DBMS_PDB_ CHECK.PLUG_COMPATIBILITY can be run against a PDB archive"
        }, {
            type: "B",
            content: " They contain a PDB manifest file and all the data files in uncompressed form for a PDB"
        }, {
            type: "C",
            content: " They contain all the data files only in uncompressed form for a PDB.D They contain a PDB manifest file and all the data files in compressed form for a PDB."
        }, {type: "E", content: " They must be created using the DBMS PDB package"}, {
            type: "F", content: " They contain all the data files only in compressed form for a PDB"
        }], rightAnswers: ["A", "D"]
    }, {
        question: "104 Your CDB has two regular PDBs as well as one application container with two application PDBs and an application seed.No changes have been made to the standard PDB$SEED.How many default temporary tablespaces can be assigned in the CDB?",
        answers: [{type: "A", content: " eight"}, {type: "B", content: " six"}, {
            type: "C", content: " five"
        }, {type: "D", content: " three"}, {type: "E", content: " seven"}],
        rightAnswers: ["A"]
    }, {
        question: "105 in which two scenarios is incomplete recovery requiredWhich two are true about changing the LOCAL_UNDO_ENABLED property to false in a CDB?",
        answers: [{
            type: "A",
            content: " After the change, only a common user with the required privilege can create an undo tablespace in CDB&ROOT."
        }, {
            type: "B",
            content: " Any new PDB and existing PDBs are automatically configured to use the default undo tablespace in CDB$ROOT."
        }, {type: "C", content: " After the change, only one undo tablespace can exist in CDB$ROOT."}, {
            type: "D",
            content: " After the change, any user with the required privilege can create an undo tablespace in the PDBs. "
        }, {type: "E", content: " Undo tablespaces existing in PDBs must be dropped before the change."}, {
            type: "F",
            content: " After the change, each existing PDB has to be reopened for the new undo mode to take effect."
        }],
        rightAnswers: ["A", "B"]
    }, {
        question: "106 A container database called CDB1 is OMF-enabled. PDB_FILE_NAME_CONVERT is not configured in CDB1. PDB1 was unplugged from CDB1 earlier in the week.Examine this command, which will be executed in CDB1:CREATE PLUGGABLE DATABASE pdb1USING '/u01/app/oracle/oradata/pdb1.xml' SOURCE_FILE_NAME_CONVERT=('/u01/app/or acle/oradata/','/u02/app/oracle/oradata/');Which two are true?",
        answers: [{type: "A", content: " PDB1 data files already exist in the correct location."}, {
            type: "B", content: " DBMS_PDB.CHECK_PLUG_COMPATIBILITY must be run in CDB1 before executing the  command."
        }, {type: "C", content: " PDB_FILE_NAME_CONVERT must be set before executing the command."}, {
            type: "D",
            content: " /u01/app/oracle/oradata/pdb1.xml does not contain the current locations of data files for PDB1. "
        }, {type: "E", content: " PDB1 must be dropped from CDB1."}],
        rightAnswers: ["A", "E"]
    }, {
        question: "107 Your SALES_ROOT application container has two application PDBs. The SALES_APP application has a common table, FIN.REVENUE, in the two PDBs. Examine this query and its output:Which two are true?",
        answers: [{
            type: "A", content: "The CONTAINERS clause cannot be used in queries on the REVENUE table."
        }, {type: "B", content: "The REVENUE table must be a list-partitioned table."}, {
            type: "C",
            content: "The MAPTABLE tables defines a logical partition key on a commonly used column for the REVENUE table."
        }, {type: "D", content: "The MAPTABLE table is a metadata-linked table."}, {
            type: "E", content: "A container map exists for the REVENUE table, but is not enabled."
        }, {type: "F", content: "The REVENUE table partitions are not pruned across the PDBs automatically."}],
        rightAnswers: ["C", "F"]
    }, {
        question: "108 which are three of the steps taken by Database Configuration Assistant(DBCA) to clone a remote pluggable database(PDB) starting from Oracle 19c?",
        answers: [{
            type: "A",
            content: " create a database link from CDB$ROOT in the local database to CDB$ROOT in the remote system that is to be cloned."
        }, {type: "B", content: " leaving the cloned PDB in mount state"}, {
            type: "C", content: " opening the cloned PDB."
        }, {type: "D", content: " backing up the cloned PDB."}, {
            type: "E",
            content: " create a database link from CDB$ROOT in the local database to the PDB in the remote system that is to be cloned."
        }],
        rightAnswers: ["A", "C"]
    }, {
        question: "109 Which three are true about Oracle pluggable database(PDBs)?", answers: [{
            type: "A", content: " A PDB can be plugged into a CDB only if both are of the same Oracle Database release."
        }, {
            type: "B", content: " A PDB created from PDB$SEED must be set to READ WRITE after loading data."
        }, {type: "C", content: " A non-CDB can be converted into a PDB."}, {
            type: "D", content: " A PDB created from PDB$SEED must be set to READ ONLY after loading data."
        }, {
            type: "E",
            content: " An unplugged PDB can be plugged into multiple CDBs simultaneously by sharing data files. "
        }, {
            type: "F",
            content: " A PDB unplugged from a container database(CDBs) can be plugged into a different CDB without altering any of schemas."
        }, {
            type: "G",
            content: " A PDB in a remote CDB can be accessed transparently thereby aggregating results from local and remote PDBs."
        }], rightAnswers: ["C", "F", "G"]
    }, {
        question: "110 Which three are true about Oracle Grid Infrastructure for a Standalone Server?", answers: [{
            type: "A",
            content: " It includes both Oracle Restart and Oracle Automatic Storage Management(ASM) software."
        }, {type: "B", content: " It creates one disk group during installation."}, {
            type: "C",
            content: " It requires the operating system ORACLE_BASE environment variable to be predefined before installation."
        }, {
            type: "D", content: " It requires Oracle ASMLib to manage Automatic Storge Management(ASM) disks."
        }, {
            type: "E",
            content: " It requires Oracle ASM Filter Driver(ASMFD) to manage Automatic Storge Management(ASM) disks."
        }, {
            type: "F",
            content: " Automatic Storge Management(ASM) requires that O/S groups OSASM and OSDBA be assigned as secondary groups for its installation owner."
        }], rightAnswers: ["A", "B", "F"]
    }]
export default quizQuestions;
