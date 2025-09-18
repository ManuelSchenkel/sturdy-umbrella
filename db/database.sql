CREATE DATABASE rbac;

CREATE TABLE management_groups (
    id      integer CONSTRAINT firstkey PRIMARY KEY,
    guid    varchar(36),
    name    varchar(80)
);

INSERT INTO management_groups (id, guid, name) VALUES
    (1,'eb992299-c911-5e10-8503-cccbc6e5811b', 'rcr-root'),
    (2,'e86d8946-932a-5bf3-8c06-76c0938a3680', 'rcr-dev'),
    (3,'d0f17753-5332-5e55-bf94-3dcc909362ca', 'rcr-test');

CREATE TABLE subscriptions (
    id                  integer PRIMARY KEY,
    guid                varchar(36),
    name                varchar(80)
);

INSERT INTO subscriptions (id, guid, name) VALUES 
    (1, '9199c1af-f17b-460b-968e-9037bb5e0a4a', 'rcr-dev-01'),
    (2, 'e4969015-d256-42e3-bf38-d4566847a4b2', 'rcr-test-01');

CREATE TABLE resource_groups (
    id                  integer PRIMARY KEY,
    name                varchar(80),
    subscription_id      integer REFERENCES subscriptions (id)
);

INSERT INTO resource_groups (id, name, subscription_id) VALUES
    (1, 'rcr-dev-01-appl-rbacportal-rg', 1),
    (2, 'rcr-test-01-appl-powerbi-rg', 2),
    (3, 'rcr-test-01-appl-azure-usu-cmdb-rg', 2),
    (4, 'rcr-dev-01-core-network-rg', 1);
