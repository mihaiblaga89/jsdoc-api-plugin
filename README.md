# JsDoc API Plugin

## Install

```
npm install jsdoc-api-plugin --save-dev
```

## Used

```
{
    "plugins": ["jsdoc-api-plugin"],
    "templates": {},
    "opts": {}
}
```

## What are the new Tags
The new tags are all about documenting Express routes. Find a list of them and how they are to be used below.  

```
/**
 * Upload a file.
 *
 * @name fileUpload
 * @api {POST} /v1/upload
 * @authentication This remote api requires HTTP Basic Authentication. If authentication fails it will return a 401 error
 * @headerparam {String} user-id is the unique User Id to assign to the file
 * @bodyparam {String} userId is the unique identifier for the user we are uploading the file to.
 * @queryparam {String} [fileType] will limit the download to just these file types.
 */
axios.post({
  url: '/v1/upload',
}, (req, res, next) => {...}
```