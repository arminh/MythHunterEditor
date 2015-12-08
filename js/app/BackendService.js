//
// Definitions for schema: http://backend.com/wsdl
//  http://localhost:8080/Backend/webservices/Backend?wsdl#types1
//
//
// Constructor for XML Schema item {http://backend.com/wsdl}fillDBResponse
//
function backend_com_wsdl_fillDBResponse () {
    this.typeMarker = 'backend_com_wsdl_fillDBResponse';
}

//
// Serialize {http://backend.com/wsdl}fillDBResponse
//
function backend_com_wsdl_fillDBResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_fillDBResponse.prototype.serialize = backend_com_wsdl_fillDBResponse_serialize;

function backend_com_wsdl_fillDBResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_fillDBResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}getUser
//
function backend_com_wsdl_getUser () {
    this.typeMarker = 'backend_com_wsdl_getUser';
    this._arg0 = 0;
}

//
// accessor is backend_com_wsdl_getUser.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_getUser.prototype.setArg0
//
function backend_com_wsdl_getUser_getArg0() { return this._arg0;}

backend_com_wsdl_getUser.prototype.getArg0 = backend_com_wsdl_getUser_getArg0;

function backend_com_wsdl_getUser_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_getUser.prototype.setArg0 = backend_com_wsdl_getUser_setArg0;
//
// Serialize {http://backend.com/wsdl}getUser
//
function backend_com_wsdl_getUser_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<arg0>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._arg0);
     xml = xml + '</arg0>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_getUser.prototype.serialize = backend_com_wsdl_getUser_serialize;

function backend_com_wsdl_getUser_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getUser();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setArg0(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}getAccResponse
//
function backend_com_wsdl_getAccResponse () {
    this.typeMarker = 'backend_com_wsdl_getAccResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_getAccResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}account
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_getAccResponse.prototype.setReturn
//
function backend_com_wsdl_getAccResponse_getReturn() { return this._return;}

backend_com_wsdl_getAccResponse.prototype.getReturn = backend_com_wsdl_getAccResponse_getReturn;

function backend_com_wsdl_getAccResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getAccResponse.prototype.setReturn = backend_com_wsdl_getAccResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getAccResponse
//
function backend_com_wsdl_getAccResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._return != null) {
      xml = xml + this._return.serialize(cxfjsutils, 'return', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_getAccResponse.prototype.serialize = backend_com_wsdl_getAccResponse_serialize;

function backend_com_wsdl_getAccResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getAccResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_account_deserialize(cxfjsutils, curElement);
     }
     newobject.setReturn(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}fillDB
//
function backend_com_wsdl_fillDB () {
    this.typeMarker = 'backend_com_wsdl_fillDB';
}

//
// Serialize {http://backend.com/wsdl}fillDB
//
function backend_com_wsdl_fillDB_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_fillDB.prototype.serialize = backend_com_wsdl_fillDB_serialize;

function backend_com_wsdl_fillDB_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_fillDB();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}account
//
function backend_com_wsdl_account () {
    this.typeMarker = 'backend_com_wsdl_account';
    this._id = 0;
    this._password = null;
    this._user = null;
    this._username = null;
}

//
// accessor is backend_com_wsdl_account.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for id
// setter function is is backend_com_wsdl_account.prototype.setId
//
function backend_com_wsdl_account_getId() { return this._id;}

backend_com_wsdl_account.prototype.getId = backend_com_wsdl_account_getId;

function backend_com_wsdl_account_setId(value) { this._id = value;}

backend_com_wsdl_account.prototype.setId = backend_com_wsdl_account_setId;
//
// accessor is backend_com_wsdl_account.prototype.getPassword
// element get for password
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for password
// setter function is is backend_com_wsdl_account.prototype.setPassword
//
function backend_com_wsdl_account_getPassword() { return this._password;}

backend_com_wsdl_account.prototype.getPassword = backend_com_wsdl_account_getPassword;

function backend_com_wsdl_account_setPassword(value) { this._password = value;}

backend_com_wsdl_account.prototype.setPassword = backend_com_wsdl_account_setPassword;
//
// accessor is backend_com_wsdl_account.prototype.getUser
// element get for user
// - element type is {http://backend.com/wsdl}user
// - optional element
//
// element set for user
// setter function is is backend_com_wsdl_account.prototype.setUser
//
function backend_com_wsdl_account_getUser() { return this._user;}

backend_com_wsdl_account.prototype.getUser = backend_com_wsdl_account_getUser;

function backend_com_wsdl_account_setUser(value) { this._user = value;}

backend_com_wsdl_account.prototype.setUser = backend_com_wsdl_account_setUser;
//
// accessor is backend_com_wsdl_account.prototype.getUsername
// element get for username
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for username
// setter function is is backend_com_wsdl_account.prototype.setUsername
//
function backend_com_wsdl_account_getUsername() { return this._username;}

backend_com_wsdl_account.prototype.getUsername = backend_com_wsdl_account_getUsername;

function backend_com_wsdl_account_setUsername(value) { this._username = value;}

backend_com_wsdl_account.prototype.setUsername = backend_com_wsdl_account_setUsername;
//
// Serialize {http://backend.com/wsdl}account
//
function backend_com_wsdl_account_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<id>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._id);
     xml = xml + '</id>';
    }
    // block for local variables
    {
     if (this._password != null) {
      xml = xml + '<password>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._password);
      xml = xml + '</password>';
     }
    }
    // block for local variables
    {
     if (this._user != null) {
      xml = xml + this._user.serialize(cxfjsutils, 'user', null);
     }
    }
    // block for local variables
    {
     if (this._username != null) {
      xml = xml + '<username>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._username);
      xml = xml + '</username>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_account.prototype.serialize = backend_com_wsdl_account_serialize;

function backend_com_wsdl_account_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_account();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing id');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing password');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'password')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setPassword(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing user');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'user')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_user_deserialize(cxfjsutils, curElement);
     }
     newobject.setUser(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing username');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'username')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setUsername(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}getAcc
//
function backend_com_wsdl_getAcc () {
    this.typeMarker = 'backend_com_wsdl_getAcc';
    this._arg0 = 0;
}

//
// accessor is backend_com_wsdl_getAcc.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_getAcc.prototype.setArg0
//
function backend_com_wsdl_getAcc_getArg0() { return this._arg0;}

backend_com_wsdl_getAcc.prototype.getArg0 = backend_com_wsdl_getAcc_getArg0;

function backend_com_wsdl_getAcc_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_getAcc.prototype.setArg0 = backend_com_wsdl_getAcc_setArg0;
//
// Serialize {http://backend.com/wsdl}getAcc
//
function backend_com_wsdl_getAcc_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     xml = xml + '<arg0>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._arg0);
     xml = xml + '</arg0>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_getAcc.prototype.serialize = backend_com_wsdl_getAcc_serialize;

function backend_com_wsdl_getAcc_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getAcc();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setArg0(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}user
//
function backend_com_wsdl_user () {
    this.typeMarker = 'backend_com_wsdl_user';
    this._accounts = [];
    this._email = null;
    this._FName = null;
    this._id = 0;
    this._isActive = '';
    this._LName = null;
    this._note = null;
    this._pwd = null;
    this._userName = null;
    this._userTypeId = 0;
}

//
// accessor is backend_com_wsdl_user.prototype.getAccounts
// element get for accounts
// - element type is {http://backend.com/wsdl}account
// - required element
// - array
// - nillable
//
// element set for accounts
// setter function is is backend_com_wsdl_user.prototype.setAccounts
//
function backend_com_wsdl_user_getAccounts() { return this._accounts;}

backend_com_wsdl_user.prototype.getAccounts = backend_com_wsdl_user_getAccounts;

function backend_com_wsdl_user_setAccounts(value) { this._accounts = value;}

backend_com_wsdl_user.prototype.setAccounts = backend_com_wsdl_user_setAccounts;
//
// accessor is backend_com_wsdl_user.prototype.getEmail
// element get for email
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for email
// setter function is is backend_com_wsdl_user.prototype.setEmail
//
function backend_com_wsdl_user_getEmail() { return this._email;}

backend_com_wsdl_user.prototype.getEmail = backend_com_wsdl_user_getEmail;

function backend_com_wsdl_user_setEmail(value) { this._email = value;}

backend_com_wsdl_user.prototype.setEmail = backend_com_wsdl_user_setEmail;
//
// accessor is backend_com_wsdl_user.prototype.getFName
// element get for FName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for FName
// setter function is is backend_com_wsdl_user.prototype.setFName
//
function backend_com_wsdl_user_getFName() { return this._FName;}

backend_com_wsdl_user.prototype.getFName = backend_com_wsdl_user_getFName;

function backend_com_wsdl_user_setFName(value) { this._FName = value;}

backend_com_wsdl_user.prototype.setFName = backend_com_wsdl_user_setFName;
//
// accessor is backend_com_wsdl_user.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for id
// setter function is is backend_com_wsdl_user.prototype.setId
//
function backend_com_wsdl_user_getId() { return this._id;}

backend_com_wsdl_user.prototype.getId = backend_com_wsdl_user_getId;

function backend_com_wsdl_user_setId(value) { this._id = value;}

backend_com_wsdl_user.prototype.setId = backend_com_wsdl_user_setId;
//
// accessor is backend_com_wsdl_user.prototype.getIsActive
// element get for isActive
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for isActive
// setter function is is backend_com_wsdl_user.prototype.setIsActive
//
function backend_com_wsdl_user_getIsActive() { return this._isActive;}

backend_com_wsdl_user.prototype.getIsActive = backend_com_wsdl_user_getIsActive;

function backend_com_wsdl_user_setIsActive(value) { this._isActive = value;}

backend_com_wsdl_user.prototype.setIsActive = backend_com_wsdl_user_setIsActive;
//
// accessor is backend_com_wsdl_user.prototype.getLName
// element get for LName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for LName
// setter function is is backend_com_wsdl_user.prototype.setLName
//
function backend_com_wsdl_user_getLName() { return this._LName;}

backend_com_wsdl_user.prototype.getLName = backend_com_wsdl_user_getLName;

function backend_com_wsdl_user_setLName(value) { this._LName = value;}

backend_com_wsdl_user.prototype.setLName = backend_com_wsdl_user_setLName;
//
// accessor is backend_com_wsdl_user.prototype.getNote
// element get for note
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for note
// setter function is is backend_com_wsdl_user.prototype.setNote
//
function backend_com_wsdl_user_getNote() { return this._note;}

backend_com_wsdl_user.prototype.getNote = backend_com_wsdl_user_getNote;

function backend_com_wsdl_user_setNote(value) { this._note = value;}

backend_com_wsdl_user.prototype.setNote = backend_com_wsdl_user_setNote;
//
// accessor is backend_com_wsdl_user.prototype.getPwd
// element get for pwd
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for pwd
// setter function is is backend_com_wsdl_user.prototype.setPwd
//
function backend_com_wsdl_user_getPwd() { return this._pwd;}

backend_com_wsdl_user.prototype.getPwd = backend_com_wsdl_user_getPwd;

function backend_com_wsdl_user_setPwd(value) { this._pwd = value;}

backend_com_wsdl_user.prototype.setPwd = backend_com_wsdl_user_setPwd;
//
// accessor is backend_com_wsdl_user.prototype.getUserName
// element get for userName
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for userName
// setter function is is backend_com_wsdl_user.prototype.setUserName
//
function backend_com_wsdl_user_getUserName() { return this._userName;}

backend_com_wsdl_user.prototype.getUserName = backend_com_wsdl_user_getUserName;

function backend_com_wsdl_user_setUserName(value) { this._userName = value;}

backend_com_wsdl_user.prototype.setUserName = backend_com_wsdl_user_setUserName;
//
// accessor is backend_com_wsdl_user.prototype.getUserTypeId
// element get for userTypeId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for userTypeId
// setter function is is backend_com_wsdl_user.prototype.setUserTypeId
//
function backend_com_wsdl_user_getUserTypeId() { return this._userTypeId;}

backend_com_wsdl_user.prototype.getUserTypeId = backend_com_wsdl_user_getUserTypeId;

function backend_com_wsdl_user_setUserTypeId(value) { this._userTypeId = value;}

backend_com_wsdl_user.prototype.setUserTypeId = backend_com_wsdl_user_setUserTypeId;
//
// Serialize {http://backend.com/wsdl}user
//
function backend_com_wsdl_user_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._accounts != null) {
      for (var ax = 0;ax < this._accounts.length;ax ++) {
       if (this._accounts[ax] == null) {
        xml = xml + '<accounts xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._accounts[ax].serialize(cxfjsutils, 'accounts', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this._email != null) {
      xml = xml + '<email>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._email);
      xml = xml + '</email>';
     }
    }
    // block for local variables
    {
     if (this._FName != null) {
      xml = xml + '<FName>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._FName);
      xml = xml + '</FName>';
     }
    }
    // block for local variables
    {
     xml = xml + '<id>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._id);
     xml = xml + '</id>';
    }
    // block for local variables
    {
     xml = xml + '<isActive>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._isActive);
     xml = xml + '</isActive>';
    }
    // block for local variables
    {
     if (this._LName != null) {
      xml = xml + '<LName>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._LName);
      xml = xml + '</LName>';
     }
    }
    // block for local variables
    {
     if (this._note != null) {
      xml = xml + '<note>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._note);
      xml = xml + '</note>';
     }
    }
    // block for local variables
    {
     if (this._pwd != null) {
      xml = xml + '<pwd>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._pwd);
      xml = xml + '</pwd>';
     }
    }
    // block for local variables
    {
     if (this._userName != null) {
      xml = xml + '<userName>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._userName);
      xml = xml + '</userName>';
     }
    }
    // block for local variables
    {
     xml = xml + '<userTypeId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._userTypeId);
     xml = xml + '</userTypeId>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_user.prototype.serialize = backend_com_wsdl_user_serialize;

function backend_com_wsdl_user_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_user();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing accounts');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'accounts')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = backend_com_wsdl_account_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'accounts'));
     newobject.setAccounts(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing email');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'email')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setEmail(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing FName');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'FName')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setFName(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing id');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing isActive');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setIsActive(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing LName');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'LName')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setLName(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing note');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'note')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setNote(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing pwd');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'pwd')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setPwd(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing userName');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'userName')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setUserName(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing userTypeId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setUserTypeId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}getUserResponse
//
function backend_com_wsdl_getUserResponse () {
    this.typeMarker = 'backend_com_wsdl_getUserResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_getUserResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}user
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_getUserResponse.prototype.setReturn
//
function backend_com_wsdl_getUserResponse_getReturn() { return this._return;}

backend_com_wsdl_getUserResponse.prototype.getReturn = backend_com_wsdl_getUserResponse_getReturn;

function backend_com_wsdl_getUserResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getUserResponse.prototype.setReturn = backend_com_wsdl_getUserResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getUserResponse
//
function backend_com_wsdl_getUserResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._return != null) {
      xml = xml + this._return.serialize(cxfjsutils, 'return', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_getUserResponse.prototype.serialize = backend_com_wsdl_getUserResponse_serialize;

function backend_com_wsdl_getUserResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getUserResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_user_deserialize(cxfjsutils, curElement);
     }
     newobject.setReturn(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Definitions for service: {http://backend.com/wsdl}BackendService
//

// Javascript for {http://backend.com/wsdl}IBackend

function backend_com_wsdl_IBackend () {
    this.jsutils = new CxfApacheOrgUtil();
    this.jsutils.interfaceObject = this;
    this.synchronous = false;
    this.url = null;
    this.client = null;
    this.response = null;
    this.globalElementSerializers = [];
    this.globalElementDeserializers = [];
    this.globalElementSerializers['{http://backend.com/wsdl}getUser'] = backend_com_wsdl_getUser_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getUser'] = backend_com_wsdl_getUser_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}fillDBResponse'] = backend_com_wsdl_fillDBResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}fillDBResponse'] = backend_com_wsdl_fillDBResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getAccResponse'] = backend_com_wsdl_getAccResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getAccResponse'] = backend_com_wsdl_getAccResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}fillDB'] = backend_com_wsdl_fillDB_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}fillDB'] = backend_com_wsdl_fillDB_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getAcc'] = backend_com_wsdl_getAcc_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getAcc'] = backend_com_wsdl_getAcc_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getUserResponse'] = backend_com_wsdl_getUserResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getUserResponse'] = backend_com_wsdl_getUserResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}fillDBResponse'] = backend_com_wsdl_fillDBResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}fillDBResponse'] = backend_com_wsdl_fillDBResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getUser'] = backend_com_wsdl_getUser_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getUser'] = backend_com_wsdl_getUser_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getAccResponse'] = backend_com_wsdl_getAccResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getAccResponse'] = backend_com_wsdl_getAccResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}fillDB'] = backend_com_wsdl_fillDB_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}fillDB'] = backend_com_wsdl_fillDB_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}account'] = backend_com_wsdl_account_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}account'] = backend_com_wsdl_account_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getAcc'] = backend_com_wsdl_getAcc_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getAcc'] = backend_com_wsdl_getAcc_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}user'] = backend_com_wsdl_user_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}user'] = backend_com_wsdl_user_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getUserResponse'] = backend_com_wsdl_getUserResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getUserResponse'] = backend_com_wsdl_getUserResponse_deserialize;
}

function backend_com_wsdl_getAcc_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling backend_com_wsdl_getAccResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getAccResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getAcc_onsuccess = backend_com_wsdl_getAcc_op_onsuccess;

function backend_com_wsdl_getAcc_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
     } else {
      client.user_onerror(httpStatus, httpStatusText);
     }
    }
}

backend_com_wsdl_IBackend.prototype.getAcc_onerror = backend_com_wsdl_getAcc_op_onerror;

//
// Operation {http://backend.com/wsdl}getAcc
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_getAcc_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.getAcc_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getAcc_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getAcc_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getAcc = backend_com_wsdl_getAcc_op;

function backend_com_wsdl_getAcc_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getAcc();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getAcc', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getAcc_serializeInput = backend_com_wsdl_getAcc_serializeInput;

function backend_com_wsdl_getAccResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getAccResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_getUser_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling backend_com_wsdl_getUserResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getUserResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getUser_onsuccess = backend_com_wsdl_getUser_op_onsuccess;

function backend_com_wsdl_getUser_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
     } else {
      client.user_onerror(httpStatus, httpStatusText);
     }
    }
}

backend_com_wsdl_IBackend.prototype.getUser_onerror = backend_com_wsdl_getUser_op_onerror;

//
// Operation {http://backend.com/wsdl}getUser
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_getUser_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.getUser_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getUser_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getUser_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getUser = backend_com_wsdl_getUser_op;

function backend_com_wsdl_getUser_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getUser();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getUser', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getUser_serializeInput = backend_com_wsdl_getUser_serializeInput;

function backend_com_wsdl_getUserResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getUserResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_fillDB_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling backend_com_wsdl_fillDBResponse_deserializeResponse');
     responseObject = backend_com_wsdl_fillDBResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.fillDB_onsuccess = backend_com_wsdl_fillDB_op_onsuccess;

function backend_com_wsdl_fillDB_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     if (client.parseErrorDetails) {
      client.user_onerror(httpStatus, httpStatusText, client.parseErrorDetails(this));
     } else {
      client.user_onerror(httpStatus, httpStatusText);
     }
    }
}

backend_com_wsdl_IBackend.prototype.fillDB_onerror = backend_com_wsdl_fillDB_op_onerror;

//
// Operation {http://backend.com/wsdl}fillDB
// Wrapped operation.
//
function backend_com_wsdl_fillDB_op(successCallback, errorCallback) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(0);
    xml = this.fillDB_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.fillDB_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.fillDB_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.fillDB = backend_com_wsdl_fillDB_op;

function backend_com_wsdl_fillDB_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_fillDB();
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:fillDB', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.fillDB_serializeInput = backend_com_wsdl_fillDB_serializeInput;

function backend_com_wsdl_fillDBResponse_deserializeResponse(cxfjsutils, partElement) {
}
function backend_com_wsdl_IBackend_backend_com_wsdl_BackendPort () {
  this.url = 'http://localhost:8080/Backend/webservices/Backend';
}
backend_com_wsdl_IBackend_backend_com_wsdl_BackendPort.prototype = new backend_com_wsdl_IBackend;
