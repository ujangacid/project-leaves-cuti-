## Leave Request API

Project ini merupakan REST API untuk permintaan cuti sebuah user dengan table people, dimana sebelum
menggunakannya harus login terlebih dahulu lalu pengguna dapat melakukan permintaan leave (cuti) dengan
melihat daftar cuti apa saja yang tersedia pada table leave .

### Technologies

- PostgreSQL
- ExpressJS

### API Spec

#### people Register

- Request: POST
- Endpoint : `/people`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "name": "String",
  "address": "String",
  "position": "String",
  "nip": "String",
  "password": "String"

}
```

Response:

```json
{
    "code":"Number",
    "msg": "Success",
    "data": {
        "id": "Number",
        "name": "String",
        "address": "String",
        "position": "String",
        "nip": "String",
        "password": "String"
    }
}
```

#### people login

- Request: POST
- Endpoint : `auth/login`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  "nip": "String",
  "password": "String"
}
```

Response:

```json
{
  "token": "JWT"
}
```

#### List People

- Request: GET
- Endpoint : `/people?position=staff`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  
}
```

Response:

```json
{
  "code": "Number",
    "msg": "Success",
    "data": [
        {
            "name": "String",
            "address": "String",
            "position": "String",
            "nip": "String"
        }
}
```

#### Get ID People

- Request: GET
- Endpoint : `/people/id`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
  
}
```

Response:

```json
{
  "code": "Number",
    "msg": "Success",
    "data": [
        {
            "name": "String",
            "address": "String",
            "position": "String",
            "nip": "String"
        }
}
```
#### EDIT People

- Request: PUT
- Endpoint : `/people`
- Header :
  - Content-Type: application/json
  - Accept: application/json
- Body :

```json
{
    "name":"String",
    "address":"String",
    "position":"String",
    "nip":"String",
    "password":"String",
    "id":"Number"
}
```

Response:

```json
{
  "code": "Number",
    "msg": "Success",
    "data": [
        {
            "name": "String",
            "address": "String",
            "position": "String",
            "nip": "String",
            "password":"String"
        }
}
```

#### Remove people

- Request: DELETE
- Endpoint : `/people/id`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Body:

```json
{

}
```
Response:

```json
{
    "code": "Number",
    "msg": "Success",
    "data": "People with ID ${id} deleted"
}
```

#### ADD Leave

- Request: POST
- Endpoint : `/leave`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Body:

```json
{
    "type": "String",
    "cuti": "String"
}

Response:

```json
{
    "code": "Number",
    "msg": "Success",
    "data": {
        "id": "Number",
        "type": "String",
        "cuti": "String"
    }
}
```

#### List Leave

- Request: GET
- Endpoint : `/leave?type=khusus`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Body:

```json
{

}
```

Response:

```json
{
    "code": "Number",
    "msg": "Success",
    "data": {
  
        "type": "String",
        "cuti": "String"
    }
}
```
#### EDIT Leave

- Request: PUT
- Endpoint : `/leave`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Body:

```json
{
    "type": "String",
    "cuti": "String"
}
```
Response:

```json
{
    "code": "Number",
    "msg": "Success",
    "data": {
        "id": "Number",
        "type": "String",
        "cuti": "String"
    }
}
```

#### Remove leave

- Request: DELETE
- Endpoint : `/leave/id`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Body:

```json
{

}
```
Response:

```json
{
    "code": "Number",
    "msg": "Success",
    "data": "leave with ID ${id} deleted"
}
```
#### ADD Leave-request

- Request: POST
- Endpoint : `/leave-request`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Body:

```json
{
    "people_id":"Number",
    "leave_id":"Number",
    "start_date":"DATE",
    "end_date":"DATE",
    "reason":"String"
}
```

Response:

```json
{
    "code": "Number",
    "msg": "Success",
    "data": {
        "id": "Number",
        "people": {
            "id": "Number",
            "name": "String",
            "address": "String",
            "position": "String",
            "nip": "String"
        },
        "leave": {
            "type": "String",
            "cuti": "String"
        },
        "startDate": "DATE",
        "endDate": "DATE",
        "reason": "String"
}
```

#### LIST Leave-request

- Request: GET
- Endpoint : `/leave-request`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Body:

```json
{

}
```
Response:

```json
{
    "code": "Number",
    "msg": "Success",
    "data": {
        "id": "Number",
        "people": {
            "id": "Number",
            "name": "String",
            "address": "String",
            "position": "String",
            "nip": "String"
        },
        "leave": {
            "type": "String",
            "cuti": "String"
        },
        "startDate": "DATE",
        "endDate": "DATE",
        "reason": "String"
}
```

#### Remove Leave-request

- Request: GET
- Endpoint : `/leave-request/id`
- Header :
  - Content-Type: application/json
  - Accept: application/json

Body:

```json
{

}
```

Response:

```json
{
    "code": 200,
    "msg": "Success",
    "data": "Leave with ID {id} deleted"
}
```