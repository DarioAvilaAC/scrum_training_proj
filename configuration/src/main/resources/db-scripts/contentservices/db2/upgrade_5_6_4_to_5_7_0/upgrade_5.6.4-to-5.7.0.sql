create table LAST_PUBLICATION_DATE (
    id bigint generated by default as identity,
    lastPublicationDate timestamp not null,
    excludeList varchar(255),
    primary key (id)
);