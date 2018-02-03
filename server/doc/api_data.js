define({ "api": [
  {
    "type": "post",
    "url": "/follow",
    "title": "Follow a specific user",
    "name": "AddFollower",
    "group": "Follow",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "userId",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Follow"
  },
  {
    "type": "get",
    "url": "/follow",
    "title": "Show List Of Followers",
    "name": "GetFollower",
    "group": "Follow",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "userId",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>Followers of the User</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"userID\": \"1\",\n     \"userName\":\"@john\"\n},\n{\n  \"userID\": \"2\",\n \"userName\":\"@linda\"\n}]",
          "type": "Object[]"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Follow"
  },
  {
    "type": "get",
    "url": "/tweet",
    "title": "Show User TimeLine",
    "name": "GetTimeLine",
    "group": "Tweet",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "id",
            "optional": false,
            "field": "integer",
            "description": "<p>User's unique id.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "post",
            "description": "<p>Tweets in the User's timeline.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[{\n  \"post\": \"Tweet 1\"\n},\n{\n  \"post\": \"Tweet 2\"\n}]",
          "type": "String[]"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Tweet"
  },
  {
    "type": "post",
    "url": "/tweet",
    "title": "Post User Tweets",
    "name": "Post_Tweet",
    "group": "Tweet",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "post",
            "optional": false,
            "field": "string",
            "description": "<p>Users post.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./index.js",
    "groupTitle": "Tweet"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "_mnt_code_ablyn_server_doc_main_js",
    "groupTitle": "_mnt_code_ablyn_server_doc_main_js",
    "name": ""
  }
] });
