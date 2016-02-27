//
// Definitions for schema: http://backend.com/wsdl
//  http://192.168.178.67:8080/Backend/webservices/Backend?wsdl#types1
//
//
// Constructor for XML Schema item {http://backend.com/wsdl}updateMonsterAction
//
function backend_com_wsdl_updateMonsterAction () {
    this.typeMarker = 'backend_com_wsdl_updateMonsterAction';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_updateMonsterAction.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}monsterAction
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_updateMonsterAction.prototype.setArg0
//
function backend_com_wsdl_updateMonsterAction_getArg0() { return this._arg0;}

backend_com_wsdl_updateMonsterAction.prototype.getArg0 = backend_com_wsdl_updateMonsterAction_getArg0;

function backend_com_wsdl_updateMonsterAction_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_updateMonsterAction.prototype.setArg0 = backend_com_wsdl_updateMonsterAction_setArg0;
//
// Serialize {http://backend.com/wsdl}updateMonsterAction
//
function backend_com_wsdl_updateMonsterAction_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_updateMonsterAction.prototype.serialize = backend_com_wsdl_updateMonsterAction_serialize;

function backend_com_wsdl_updateMonsterAction_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateMonsterAction();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_monsterAction_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}getTreePart
//
function backend_com_wsdl_getTreePart () {
    this.typeMarker = 'backend_com_wsdl_getTreePart';
    this._arg0 = 0;
}

//
// accessor is backend_com_wsdl_getTreePart.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_getTreePart.prototype.setArg0
//
function backend_com_wsdl_getTreePart_getArg0() { return this._arg0;}

backend_com_wsdl_getTreePart.prototype.getArg0 = backend_com_wsdl_getTreePart_getArg0;

function backend_com_wsdl_getTreePart_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_getTreePart.prototype.setArg0 = backend_com_wsdl_getTreePart_setArg0;
//
// Serialize {http://backend.com/wsdl}getTreePart
//
function backend_com_wsdl_getTreePart_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getTreePart.prototype.serialize = backend_com_wsdl_getTreePart_serialize;

function backend_com_wsdl_getTreePart_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getTreePart();
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
// Constructor for XML Schema item {http://backend.com/wsdl}getAllActionsResponse
//
function backend_com_wsdl_getAllActionsResponse () {
    this.typeMarker = 'backend_com_wsdl_getAllActionsResponse';
    this._return = [];
}

//
// accessor is backend_com_wsdl_getAllActionsResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}action
// - required element
// - array
//
// element set for return
// setter function is is backend_com_wsdl_getAllActionsResponse.prototype.setReturn
//
function backend_com_wsdl_getAllActionsResponse_getReturn() { return this._return;}

backend_com_wsdl_getAllActionsResponse.prototype.getReturn = backend_com_wsdl_getAllActionsResponse_getReturn;

function backend_com_wsdl_getAllActionsResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getAllActionsResponse.prototype.setReturn = backend_com_wsdl_getAllActionsResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getAllActionsResponse
//
function backend_com_wsdl_getAllActionsResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
      for (var ax = 0;ax < this._return.length;ax ++) {
       if (this._return[ax] == null) {
        xml = xml + '<return/>';
       } else {
        xml = xml + this._return[ax].serialize(cxfjsutils, 'return', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_getAllActionsResponse.prototype.serialize = backend_com_wsdl_getAllActionsResponse_serialize;

function backend_com_wsdl_getAllActionsResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getAllActionsResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = backend_com_wsdl_action_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return'));
     newobject.setReturn(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}loginResponse
//
function backend_com_wsdl_loginResponse () {
    this.typeMarker = 'backend_com_wsdl_loginResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_loginResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}user
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_loginResponse.prototype.setReturn
//
function backend_com_wsdl_loginResponse_getReturn() { return this._return;}

backend_com_wsdl_loginResponse.prototype.getReturn = backend_com_wsdl_loginResponse_getReturn;

function backend_com_wsdl_loginResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_loginResponse.prototype.setReturn = backend_com_wsdl_loginResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}loginResponse
//
function backend_com_wsdl_loginResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_loginResponse.prototype.serialize = backend_com_wsdl_loginResponse_serialize;

function backend_com_wsdl_loginResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_loginResponse();
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
// Constructor for XML Schema item {http://backend.com/wsdl}updateAndTreePart
//
function backend_com_wsdl_updateAndTreePart () {
    this.typeMarker = 'backend_com_wsdl_updateAndTreePart';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_updateAndTreePart.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}andTreePart
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_updateAndTreePart.prototype.setArg0
//
function backend_com_wsdl_updateAndTreePart_getArg0() { return this._arg0;}

backend_com_wsdl_updateAndTreePart.prototype.getArg0 = backend_com_wsdl_updateAndTreePart_getArg0;

function backend_com_wsdl_updateAndTreePart_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_updateAndTreePart.prototype.setArg0 = backend_com_wsdl_updateAndTreePart_setArg0;
//
// Serialize {http://backend.com/wsdl}updateAndTreePart
//
function backend_com_wsdl_updateAndTreePart_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_updateAndTreePart.prototype.serialize = backend_com_wsdl_updateAndTreePart_serialize;

function backend_com_wsdl_updateAndTreePart_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateAndTreePart();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_andTreePart_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}getHtml
//
function backend_com_wsdl_getHtml () {
    this.typeMarker = 'backend_com_wsdl_getHtml';
    this._arg0 = 0;
}

//
// accessor is backend_com_wsdl_getHtml.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_getHtml.prototype.setArg0
//
function backend_com_wsdl_getHtml_getArg0() { return this._arg0;}

backend_com_wsdl_getHtml.prototype.getArg0 = backend_com_wsdl_getHtml_getArg0;

function backend_com_wsdl_getHtml_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_getHtml.prototype.setArg0 = backend_com_wsdl_getHtml_setArg0;
//
// Serialize {http://backend.com/wsdl}getHtml
//
function backend_com_wsdl_getHtml_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getHtml.prototype.serialize = backend_com_wsdl_getHtml_serialize;

function backend_com_wsdl_getHtml_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getHtml();
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
// Constructor for XML Schema item {http://backend.com/wsdl}getMarkers
//
function backend_com_wsdl_getMarkers () {
    this.typeMarker = 'backend_com_wsdl_getMarkers';
    this._arg0 = [];
}

//
// accessor is backend_com_wsdl_getMarkers.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
// - array
//
// element set for arg0
// setter function is is backend_com_wsdl_getMarkers.prototype.setArg0
//
function backend_com_wsdl_getMarkers_getArg0() { return this._arg0;}

backend_com_wsdl_getMarkers.prototype.getArg0 = backend_com_wsdl_getMarkers_getArg0;

function backend_com_wsdl_getMarkers_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_getMarkers.prototype.setArg0 = backend_com_wsdl_getMarkers_setArg0;
//
// Serialize {http://backend.com/wsdl}getMarkers
//
function backend_com_wsdl_getMarkers_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      for (var ax = 0;ax < this._arg0.length;ax ++) {
       if (this._arg0[ax] == null) {
        xml = xml + '<arg0/>';
       } else {
        xml = xml + '<arg0>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._arg0[ax]);
        xml = xml + '</arg0>';
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_getMarkers.prototype.serialize = backend_com_wsdl_getMarkers_serialize;

function backend_com_wsdl_getMarkers_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getMarkers();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = parseInt(value);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0'));
     newobject.setArg0(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}addFightMarkerResponse
//
function backend_com_wsdl_addFightMarkerResponse () {
    this.typeMarker = 'backend_com_wsdl_addFightMarkerResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_addFightMarkerResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}fightMarker
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_addFightMarkerResponse.prototype.setReturn
//
function backend_com_wsdl_addFightMarkerResponse_getReturn() { return this._return;}

backend_com_wsdl_addFightMarkerResponse.prototype.getReturn = backend_com_wsdl_addFightMarkerResponse_getReturn;

function backend_com_wsdl_addFightMarkerResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_addFightMarkerResponse.prototype.setReturn = backend_com_wsdl_addFightMarkerResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}addFightMarkerResponse
//
function backend_com_wsdl_addFightMarkerResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_addFightMarkerResponse.prototype.serialize = backend_com_wsdl_addFightMarkerResponse_serialize;

function backend_com_wsdl_addFightMarkerResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addFightMarkerResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_fightMarker_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}updateQuizMarker
//
function backend_com_wsdl_updateQuizMarker () {
    this.typeMarker = 'backend_com_wsdl_updateQuizMarker';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_updateQuizMarker.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}quizMarker
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_updateQuizMarker.prototype.setArg0
//
function backend_com_wsdl_updateQuizMarker_getArg0() { return this._arg0;}

backend_com_wsdl_updateQuizMarker.prototype.getArg0 = backend_com_wsdl_updateQuizMarker_getArg0;

function backend_com_wsdl_updateQuizMarker_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_updateQuizMarker.prototype.setArg0 = backend_com_wsdl_updateQuizMarker_setArg0;
//
// Serialize {http://backend.com/wsdl}updateQuizMarker
//
function backend_com_wsdl_updateQuizMarker_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_updateQuizMarker.prototype.serialize = backend_com_wsdl_updateQuizMarker_serialize;

function backend_com_wsdl_updateQuizMarker_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateQuizMarker();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_quizMarker_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}updateInvisibleMarkerResponse
//
function backend_com_wsdl_updateInvisibleMarkerResponse () {
    this.typeMarker = 'backend_com_wsdl_updateInvisibleMarkerResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_updateInvisibleMarkerResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}invisibleMarker
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_updateInvisibleMarkerResponse.prototype.setReturn
//
function backend_com_wsdl_updateInvisibleMarkerResponse_getReturn() { return this._return;}

backend_com_wsdl_updateInvisibleMarkerResponse.prototype.getReturn = backend_com_wsdl_updateInvisibleMarkerResponse_getReturn;

function backend_com_wsdl_updateInvisibleMarkerResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_updateInvisibleMarkerResponse.prototype.setReturn = backend_com_wsdl_updateInvisibleMarkerResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}updateInvisibleMarkerResponse
//
function backend_com_wsdl_updateInvisibleMarkerResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updateInvisibleMarkerResponse.prototype.serialize = backend_com_wsdl_updateInvisibleMarkerResponse_serialize;

function backend_com_wsdl_updateInvisibleMarkerResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateInvisibleMarkerResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_invisibleMarker_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}quest
//
function backend_com_wsdl_quest () {
    this.typeMarker = 'backend_com_wsdl_quest';
    this._approved = '';
    this._createrId = 0;
    this._htmlId = 0;
    this._id = 0;
    this._markers = [];
    this._name = null;
    this._shortDescription = null;
    this._startMarker = null;
    this._submitted = '';
    this._treeRootId = 0;
    this._version = null;
}

//
// accessor is backend_com_wsdl_quest.prototype.getApproved
// element get for approved
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for approved
// setter function is is backend_com_wsdl_quest.prototype.setApproved
//
function backend_com_wsdl_quest_getApproved() { return this._approved;}

backend_com_wsdl_quest.prototype.getApproved = backend_com_wsdl_quest_getApproved;

function backend_com_wsdl_quest_setApproved(value) { this._approved = value;}

backend_com_wsdl_quest.prototype.setApproved = backend_com_wsdl_quest_setApproved;
//
// accessor is backend_com_wsdl_quest.prototype.getCreaterId
// element get for createrId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for createrId
// setter function is is backend_com_wsdl_quest.prototype.setCreaterId
//
function backend_com_wsdl_quest_getCreaterId() { return this._createrId;}

backend_com_wsdl_quest.prototype.getCreaterId = backend_com_wsdl_quest_getCreaterId;

function backend_com_wsdl_quest_setCreaterId(value) { this._createrId = value;}

backend_com_wsdl_quest.prototype.setCreaterId = backend_com_wsdl_quest_setCreaterId;
//
// accessor is backend_com_wsdl_quest.prototype.getHtmlId
// element get for htmlId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for htmlId
// setter function is is backend_com_wsdl_quest.prototype.setHtmlId
//
function backend_com_wsdl_quest_getHtmlId() { return this._htmlId;}

backend_com_wsdl_quest.prototype.getHtmlId = backend_com_wsdl_quest_getHtmlId;

function backend_com_wsdl_quest_setHtmlId(value) { this._htmlId = value;}

backend_com_wsdl_quest.prototype.setHtmlId = backend_com_wsdl_quest_setHtmlId;
//
// accessor is backend_com_wsdl_quest.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for id
// setter function is is backend_com_wsdl_quest.prototype.setId
//
function backend_com_wsdl_quest_getId() { return this._id;}

backend_com_wsdl_quest.prototype.getId = backend_com_wsdl_quest_getId;

function backend_com_wsdl_quest_setId(value) { this._id = value;}

backend_com_wsdl_quest.prototype.setId = backend_com_wsdl_quest_setId;
//
// accessor is backend_com_wsdl_quest.prototype.getMarkers
// element get for markers
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
// - array
// - nillable
//
// element set for markers
// setter function is is backend_com_wsdl_quest.prototype.setMarkers
//
function backend_com_wsdl_quest_getMarkers() { return this._markers;}

backend_com_wsdl_quest.prototype.getMarkers = backend_com_wsdl_quest_getMarkers;

function backend_com_wsdl_quest_setMarkers(value) { this._markers = value;}

backend_com_wsdl_quest.prototype.setMarkers = backend_com_wsdl_quest_setMarkers;
//
// accessor is backend_com_wsdl_quest.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for name
// setter function is is backend_com_wsdl_quest.prototype.setName
//
function backend_com_wsdl_quest_getName() { return this._name;}

backend_com_wsdl_quest.prototype.getName = backend_com_wsdl_quest_getName;

function backend_com_wsdl_quest_setName(value) { this._name = value;}

backend_com_wsdl_quest.prototype.setName = backend_com_wsdl_quest_setName;
//
// accessor is backend_com_wsdl_quest.prototype.getShortDescription
// element get for shortDescription
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for shortDescription
// setter function is is backend_com_wsdl_quest.prototype.setShortDescription
//
function backend_com_wsdl_quest_getShortDescription() { return this._shortDescription;}

backend_com_wsdl_quest.prototype.getShortDescription = backend_com_wsdl_quest_getShortDescription;

function backend_com_wsdl_quest_setShortDescription(value) { this._shortDescription = value;}

backend_com_wsdl_quest.prototype.setShortDescription = backend_com_wsdl_quest_setShortDescription;
//
// accessor is backend_com_wsdl_quest.prototype.getStartMarker
// element get for startMarker
// - element type is {http://backend.com/wsdl}marker
// - optional element
//
// element set for startMarker
// setter function is is backend_com_wsdl_quest.prototype.setStartMarker
//
function backend_com_wsdl_quest_getStartMarker() { return this._startMarker;}

backend_com_wsdl_quest.prototype.getStartMarker = backend_com_wsdl_quest_getStartMarker;

function backend_com_wsdl_quest_setStartMarker(value) { this._startMarker = value;}

backend_com_wsdl_quest.prototype.setStartMarker = backend_com_wsdl_quest_setStartMarker;
//
// accessor is backend_com_wsdl_quest.prototype.getSubmitted
// element get for submitted
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for submitted
// setter function is is backend_com_wsdl_quest.prototype.setSubmitted
//
function backend_com_wsdl_quest_getSubmitted() { return this._submitted;}

backend_com_wsdl_quest.prototype.getSubmitted = backend_com_wsdl_quest_getSubmitted;

function backend_com_wsdl_quest_setSubmitted(value) { this._submitted = value;}

backend_com_wsdl_quest.prototype.setSubmitted = backend_com_wsdl_quest_setSubmitted;
//
// accessor is backend_com_wsdl_quest.prototype.getTreeRootId
// element get for treeRootId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for treeRootId
// setter function is is backend_com_wsdl_quest.prototype.setTreeRootId
//
function backend_com_wsdl_quest_getTreeRootId() { return this._treeRootId;}

backend_com_wsdl_quest.prototype.getTreeRootId = backend_com_wsdl_quest_getTreeRootId;

function backend_com_wsdl_quest_setTreeRootId(value) { this._treeRootId = value;}

backend_com_wsdl_quest.prototype.setTreeRootId = backend_com_wsdl_quest_setTreeRootId;
//
// accessor is backend_com_wsdl_quest.prototype.getVersion
// element get for version
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for version
// setter function is is backend_com_wsdl_quest.prototype.setVersion
//
function backend_com_wsdl_quest_getVersion() { return this._version;}

backend_com_wsdl_quest.prototype.getVersion = backend_com_wsdl_quest_getVersion;

function backend_com_wsdl_quest_setVersion(value) { this._version = value;}

backend_com_wsdl_quest.prototype.setVersion = backend_com_wsdl_quest_setVersion;
//
// Serialize {http://backend.com/wsdl}quest
//
function backend_com_wsdl_quest_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<approved>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._approved);
     xml = xml + '</approved>';
    }
    // block for local variables
    {
     xml = xml + '<createrId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._createrId);
     xml = xml + '</createrId>';
    }
    // block for local variables
    {
     xml = xml + '<htmlId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._htmlId);
     xml = xml + '</htmlId>';
    }
    // block for local variables
    {
     xml = xml + '<id>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._id);
     xml = xml + '</id>';
    }
    // block for local variables
    {
     if (this._markers != null) {
      for (var ax = 0;ax < this._markers.length;ax ++) {
       if (this._markers[ax] == null) {
        xml = xml + '<markers xsi:nil=\'true\'/>';
       } else {
        xml = xml + '<markers>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._markers[ax]);
        xml = xml + '</markers>';
       }
      }
     }
    }
    // block for local variables
    {
     if (this._name != null) {
      xml = xml + '<name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._name);
      xml = xml + '</name>';
     }
    }
    // block for local variables
    {
     if (this._shortDescription != null) {
      xml = xml + '<shortDescription>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._shortDescription);
      xml = xml + '</shortDescription>';
     }
    }
    // block for local variables
    {
     if (this._startMarker != null) {
      xml = xml + this._startMarker.serialize(cxfjsutils, 'startMarker', null);
     }
    }
    // block for local variables
    {
     xml = xml + '<submitted>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._submitted);
     xml = xml + '</submitted>';
    }
    // block for local variables
    {
     xml = xml + '<treeRootId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._treeRootId);
     xml = xml + '</treeRootId>';
    }
    // block for local variables
    {
     if (this._version != null) {
      xml = xml + '<version>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._version);
      xml = xml + '</version>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_quest.prototype.serialize = backend_com_wsdl_quest_serialize;

function backend_com_wsdl_quest_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_quest();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing approved');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setApproved(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing createrId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setCreaterId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing htmlId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setHtmlId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
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
    cxfjsutils.trace('processing markers');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'markers')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = parseInt(value);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'markers'));
     newobject.setMarkers(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'name')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setName(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing shortDescription');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'shortDescription')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setShortDescription(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing startMarker');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'startMarker')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_marker_deserialize(cxfjsutils, curElement);
     }
     newobject.setStartMarker(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing submitted');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setSubmitted(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing treeRootId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setTreeRootId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing version');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'version')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setVersion(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}deleteQuestInstanceResponse
//
function backend_com_wsdl_deleteQuestInstanceResponse () {
    this.typeMarker = 'backend_com_wsdl_deleteQuestInstanceResponse';
}

//
// Serialize {http://backend.com/wsdl}deleteQuestInstanceResponse
//
function backend_com_wsdl_deleteQuestInstanceResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_deleteQuestInstanceResponse.prototype.serialize = backend_com_wsdl_deleteQuestInstanceResponse_serialize;

function backend_com_wsdl_deleteQuestInstanceResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_deleteQuestInstanceResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}setTreePartActiveResponse
//
function backend_com_wsdl_setTreePartActiveResponse () {
    this.typeMarker = 'backend_com_wsdl_setTreePartActiveResponse';
}

//
// Serialize {http://backend.com/wsdl}setTreePartActiveResponse
//
function backend_com_wsdl_setTreePartActiveResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_setTreePartActiveResponse.prototype.serialize = backend_com_wsdl_setTreePartActiveResponse_serialize;

function backend_com_wsdl_setTreePartActiveResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_setTreePartActiveResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}addMonsterCard
//
function backend_com_wsdl_addMonsterCard () {
    this.typeMarker = 'backend_com_wsdl_addMonsterCard';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_addMonsterCard.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}monsterCard
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_addMonsterCard.prototype.setArg0
//
function backend_com_wsdl_addMonsterCard_getArg0() { return this._arg0;}

backend_com_wsdl_addMonsterCard.prototype.getArg0 = backend_com_wsdl_addMonsterCard_getArg0;

function backend_com_wsdl_addMonsterCard_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_addMonsterCard.prototype.setArg0 = backend_com_wsdl_addMonsterCard_setArg0;
//
// Serialize {http://backend.com/wsdl}addMonsterCard
//
function backend_com_wsdl_addMonsterCard_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_addMonsterCard.prototype.serialize = backend_com_wsdl_addMonsterCard_serialize;

function backend_com_wsdl_addMonsterCard_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addMonsterCard();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_monsterCard_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}updateUserResponse
//
function backend_com_wsdl_updateUserResponse () {
    this.typeMarker = 'backend_com_wsdl_updateUserResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_updateUserResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}user
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_updateUserResponse.prototype.setReturn
//
function backend_com_wsdl_updateUserResponse_getReturn() { return this._return;}

backend_com_wsdl_updateUserResponse.prototype.getReturn = backend_com_wsdl_updateUserResponse_getReturn;

function backend_com_wsdl_updateUserResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_updateUserResponse.prototype.setReturn = backend_com_wsdl_updateUserResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}updateUserResponse
//
function backend_com_wsdl_updateUserResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updateUserResponse.prototype.serialize = backend_com_wsdl_updateUserResponse_serialize;

function backend_com_wsdl_updateUserResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateUserResponse();
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
// Constructor for XML Schema item {http://backend.com/wsdl}register
//
function backend_com_wsdl_register () {
    this.typeMarker = 'backend_com_wsdl_register';
    this._arg0 = null;
    this._arg1 = null;
}

//
// accessor is backend_com_wsdl_register.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_register.prototype.setArg0
//
function backend_com_wsdl_register_getArg0() { return this._arg0;}

backend_com_wsdl_register.prototype.getArg0 = backend_com_wsdl_register_getArg0;

function backend_com_wsdl_register_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_register.prototype.setArg0 = backend_com_wsdl_register_setArg0;
//
// accessor is backend_com_wsdl_register.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg1
// setter function is is backend_com_wsdl_register.prototype.setArg1
//
function backend_com_wsdl_register_getArg1() { return this._arg1;}

backend_com_wsdl_register.prototype.getArg1 = backend_com_wsdl_register_getArg1;

function backend_com_wsdl_register_setArg1(value) { this._arg1 = value;}

backend_com_wsdl_register.prototype.setArg1 = backend_com_wsdl_register_setArg1;
//
// Serialize {http://backend.com/wsdl}register
//
function backend_com_wsdl_register_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + '<arg0>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._arg0);
      xml = xml + '</arg0>';
     }
    }
    // block for local variables
    {
     if (this._arg1 != null) {
      xml = xml + '<arg1>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._arg1);
      xml = xml + '</arg1>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_register.prototype.serialize = backend_com_wsdl_register_serialize;

function backend_com_wsdl_register_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_register();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg1');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg1')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setArg1(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Simple type (enumeration) {http://backend.com/wsdl}treePartType
//
// - Marker
// - And
// - Or
//
// Constructor for XML Schema item {http://backend.com/wsdl}updateSpellCardResponse
//
function backend_com_wsdl_updateSpellCardResponse () {
    this.typeMarker = 'backend_com_wsdl_updateSpellCardResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_updateSpellCardResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}spellCard
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_updateSpellCardResponse.prototype.setReturn
//
function backend_com_wsdl_updateSpellCardResponse_getReturn() { return this._return;}

backend_com_wsdl_updateSpellCardResponse.prototype.getReturn = backend_com_wsdl_updateSpellCardResponse_getReturn;

function backend_com_wsdl_updateSpellCardResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_updateSpellCardResponse.prototype.setReturn = backend_com_wsdl_updateSpellCardResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}updateSpellCardResponse
//
function backend_com_wsdl_updateSpellCardResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updateSpellCardResponse.prototype.serialize = backend_com_wsdl_updateSpellCardResponse_serialize;

function backend_com_wsdl_updateSpellCardResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateSpellCardResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_spellCard_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}addQuizMarker
//
function backend_com_wsdl_addQuizMarker () {
    this.typeMarker = 'backend_com_wsdl_addQuizMarker';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_addQuizMarker.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}quizMarker
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_addQuizMarker.prototype.setArg0
//
function backend_com_wsdl_addQuizMarker_getArg0() { return this._arg0;}

backend_com_wsdl_addQuizMarker.prototype.getArg0 = backend_com_wsdl_addQuizMarker_getArg0;

function backend_com_wsdl_addQuizMarker_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_addQuizMarker.prototype.setArg0 = backend_com_wsdl_addQuizMarker_setArg0;
//
// Serialize {http://backend.com/wsdl}addQuizMarker
//
function backend_com_wsdl_addQuizMarker_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_addQuizMarker.prototype.serialize = backend_com_wsdl_addQuizMarker_serialize;

function backend_com_wsdl_addQuizMarker_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addQuizMarker();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_quizMarker_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}updateMarkerTreePart
//
function backend_com_wsdl_updateMarkerTreePart () {
    this.typeMarker = 'backend_com_wsdl_updateMarkerTreePart';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_updateMarkerTreePart.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}markerTreePart
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_updateMarkerTreePart.prototype.setArg0
//
function backend_com_wsdl_updateMarkerTreePart_getArg0() { return this._arg0;}

backend_com_wsdl_updateMarkerTreePart.prototype.getArg0 = backend_com_wsdl_updateMarkerTreePart_getArg0;

function backend_com_wsdl_updateMarkerTreePart_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_updateMarkerTreePart.prototype.setArg0 = backend_com_wsdl_updateMarkerTreePart_setArg0;
//
// Serialize {http://backend.com/wsdl}updateMarkerTreePart
//
function backend_com_wsdl_updateMarkerTreePart_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_updateMarkerTreePart.prototype.serialize = backend_com_wsdl_updateMarkerTreePart_serialize;

function backend_com_wsdl_updateMarkerTreePart_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateMarkerTreePart();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_markerTreePart_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}addMarkerTreePart
//
function backend_com_wsdl_addMarkerTreePart () {
    this.typeMarker = 'backend_com_wsdl_addMarkerTreePart';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_addMarkerTreePart.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}markerTreePart
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_addMarkerTreePart.prototype.setArg0
//
function backend_com_wsdl_addMarkerTreePart_getArg0() { return this._arg0;}

backend_com_wsdl_addMarkerTreePart.prototype.getArg0 = backend_com_wsdl_addMarkerTreePart_getArg0;

function backend_com_wsdl_addMarkerTreePart_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_addMarkerTreePart.prototype.setArg0 = backend_com_wsdl_addMarkerTreePart_setArg0;
//
// Serialize {http://backend.com/wsdl}addMarkerTreePart
//
function backend_com_wsdl_addMarkerTreePart_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_addMarkerTreePart.prototype.serialize = backend_com_wsdl_addMarkerTreePart_serialize;

function backend_com_wsdl_addMarkerTreePart_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addMarkerTreePart();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_markerTreePart_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}setTreePartFinishedResponse
//
function backend_com_wsdl_setTreePartFinishedResponse () {
    this.typeMarker = 'backend_com_wsdl_setTreePartFinishedResponse';
}

//
// Serialize {http://backend.com/wsdl}setTreePartFinishedResponse
//
function backend_com_wsdl_setTreePartFinishedResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_setTreePartFinishedResponse.prototype.serialize = backend_com_wsdl_setTreePartFinishedResponse_serialize;

function backend_com_wsdl_setTreePartFinishedResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_setTreePartFinishedResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}updateSpellAction
//
function backend_com_wsdl_updateSpellAction () {
    this.typeMarker = 'backend_com_wsdl_updateSpellAction';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_updateSpellAction.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}spellAction
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_updateSpellAction.prototype.setArg0
//
function backend_com_wsdl_updateSpellAction_getArg0() { return this._arg0;}

backend_com_wsdl_updateSpellAction.prototype.getArg0 = backend_com_wsdl_updateSpellAction_getArg0;

function backend_com_wsdl_updateSpellAction_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_updateSpellAction.prototype.setArg0 = backend_com_wsdl_updateSpellAction_setArg0;
//
// Serialize {http://backend.com/wsdl}updateSpellAction
//
function backend_com_wsdl_updateSpellAction_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_updateSpellAction.prototype.serialize = backend_com_wsdl_updateSpellAction_serialize;

function backend_com_wsdl_updateSpellAction_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateSpellAction();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_spellAction_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}getTreePartsLazyResponse
//
function backend_com_wsdl_getTreePartsLazyResponse () {
    this.typeMarker = 'backend_com_wsdl_getTreePartsLazyResponse';
    this._return = [];
}

//
// accessor is backend_com_wsdl_getTreePartsLazyResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}treePartLazy
// - required element
// - array
//
// element set for return
// setter function is is backend_com_wsdl_getTreePartsLazyResponse.prototype.setReturn
//
function backend_com_wsdl_getTreePartsLazyResponse_getReturn() { return this._return;}

backend_com_wsdl_getTreePartsLazyResponse.prototype.getReturn = backend_com_wsdl_getTreePartsLazyResponse_getReturn;

function backend_com_wsdl_getTreePartsLazyResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getTreePartsLazyResponse.prototype.setReturn = backend_com_wsdl_getTreePartsLazyResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getTreePartsLazyResponse
//
function backend_com_wsdl_getTreePartsLazyResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
      for (var ax = 0;ax < this._return.length;ax ++) {
       if (this._return[ax] == null) {
        xml = xml + '<return/>';
       } else {
        xml = xml + this._return[ax].serialize(cxfjsutils, 'return', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_getTreePartsLazyResponse.prototype.serialize = backend_com_wsdl_getTreePartsLazyResponse_serialize;

function backend_com_wsdl_getTreePartsLazyResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getTreePartsLazyResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = backend_com_wsdl_treePartLazy_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return'));
     newobject.setReturn(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}deleteSpellAction
//
function backend_com_wsdl_deleteSpellAction () {
    this.typeMarker = 'backend_com_wsdl_deleteSpellAction';
    this._arg0 = 0;
}

//
// accessor is backend_com_wsdl_deleteSpellAction.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_deleteSpellAction.prototype.setArg0
//
function backend_com_wsdl_deleteSpellAction_getArg0() { return this._arg0;}

backend_com_wsdl_deleteSpellAction.prototype.getArg0 = backend_com_wsdl_deleteSpellAction_getArg0;

function backend_com_wsdl_deleteSpellAction_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_deleteSpellAction.prototype.setArg0 = backend_com_wsdl_deleteSpellAction_setArg0;
//
// Serialize {http://backend.com/wsdl}deleteSpellAction
//
function backend_com_wsdl_deleteSpellAction_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_deleteSpellAction.prototype.serialize = backend_com_wsdl_deleteSpellAction_serialize;

function backend_com_wsdl_deleteSpellAction_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_deleteSpellAction();
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
// Constructor for XML Schema item {http://backend.com/wsdl}getPlayerResponse
//
function backend_com_wsdl_getPlayerResponse () {
    this.typeMarker = 'backend_com_wsdl_getPlayerResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_getPlayerResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}player
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_getPlayerResponse.prototype.setReturn
//
function backend_com_wsdl_getPlayerResponse_getReturn() { return this._return;}

backend_com_wsdl_getPlayerResponse.prototype.getReturn = backend_com_wsdl_getPlayerResponse_getReturn;

function backend_com_wsdl_getPlayerResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getPlayerResponse.prototype.setReturn = backend_com_wsdl_getPlayerResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getPlayerResponse
//
function backend_com_wsdl_getPlayerResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getPlayerResponse.prototype.serialize = backend_com_wsdl_getPlayerResponse_serialize;

function backend_com_wsdl_getPlayerResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getPlayerResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_player_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}deleteMarkerResponse
//
function backend_com_wsdl_deleteMarkerResponse () {
    this.typeMarker = 'backend_com_wsdl_deleteMarkerResponse';
}

//
// Serialize {http://backend.com/wsdl}deleteMarkerResponse
//
function backend_com_wsdl_deleteMarkerResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_deleteMarkerResponse.prototype.serialize = backend_com_wsdl_deleteMarkerResponse_serialize;

function backend_com_wsdl_deleteMarkerResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_deleteMarkerResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}getMonsterCardsResponse
//
function backend_com_wsdl_getMonsterCardsResponse () {
    this.typeMarker = 'backend_com_wsdl_getMonsterCardsResponse';
    this._return = [];
}

//
// accessor is backend_com_wsdl_getMonsterCardsResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}monsterCard
// - required element
// - array
//
// element set for return
// setter function is is backend_com_wsdl_getMonsterCardsResponse.prototype.setReturn
//
function backend_com_wsdl_getMonsterCardsResponse_getReturn() { return this._return;}

backend_com_wsdl_getMonsterCardsResponse.prototype.getReturn = backend_com_wsdl_getMonsterCardsResponse_getReturn;

function backend_com_wsdl_getMonsterCardsResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getMonsterCardsResponse.prototype.setReturn = backend_com_wsdl_getMonsterCardsResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getMonsterCardsResponse
//
function backend_com_wsdl_getMonsterCardsResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
      for (var ax = 0;ax < this._return.length;ax ++) {
       if (this._return[ax] == null) {
        xml = xml + '<return/>';
       } else {
        xml = xml + this._return[ax].serialize(cxfjsutils, 'return', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_getMonsterCardsResponse.prototype.serialize = backend_com_wsdl_getMonsterCardsResponse_serialize;

function backend_com_wsdl_getMonsterCardsResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getMonsterCardsResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = backend_com_wsdl_monsterCard_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return'));
     newobject.setReturn(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}updateQuestInstance
//
function backend_com_wsdl_updateQuestInstance () {
    this.typeMarker = 'backend_com_wsdl_updateQuestInstance';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_updateQuestInstance.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}questInstance
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_updateQuestInstance.prototype.setArg0
//
function backend_com_wsdl_updateQuestInstance_getArg0() { return this._arg0;}

backend_com_wsdl_updateQuestInstance.prototype.getArg0 = backend_com_wsdl_updateQuestInstance_getArg0;

function backend_com_wsdl_updateQuestInstance_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_updateQuestInstance.prototype.setArg0 = backend_com_wsdl_updateQuestInstance_setArg0;
//
// Serialize {http://backend.com/wsdl}updateQuestInstance
//
function backend_com_wsdl_updateQuestInstance_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_updateQuestInstance.prototype.serialize = backend_com_wsdl_updateQuestInstance_serialize;

function backend_com_wsdl_updateQuestInstance_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateQuestInstance();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_questInstance_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}addInvisibleMarker
//
function backend_com_wsdl_addInvisibleMarker () {
    this.typeMarker = 'backend_com_wsdl_addInvisibleMarker';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_addInvisibleMarker.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}invisibleMarker
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_addInvisibleMarker.prototype.setArg0
//
function backend_com_wsdl_addInvisibleMarker_getArg0() { return this._arg0;}

backend_com_wsdl_addInvisibleMarker.prototype.getArg0 = backend_com_wsdl_addInvisibleMarker_getArg0;

function backend_com_wsdl_addInvisibleMarker_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_addInvisibleMarker.prototype.setArg0 = backend_com_wsdl_addInvisibleMarker_setArg0;
//
// Serialize {http://backend.com/wsdl}addInvisibleMarker
//
function backend_com_wsdl_addInvisibleMarker_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_addInvisibleMarker.prototype.serialize = backend_com_wsdl_addInvisibleMarker_serialize;

function backend_com_wsdl_addInvisibleMarker_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addInvisibleMarker();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_invisibleMarker_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}getMonsterCards
//
function backend_com_wsdl_getMonsterCards () {
    this.typeMarker = 'backend_com_wsdl_getMonsterCards';
    this._arg0 = [];
}

//
// accessor is backend_com_wsdl_getMonsterCards.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
// - array
//
// element set for arg0
// setter function is is backend_com_wsdl_getMonsterCards.prototype.setArg0
//
function backend_com_wsdl_getMonsterCards_getArg0() { return this._arg0;}

backend_com_wsdl_getMonsterCards.prototype.getArg0 = backend_com_wsdl_getMonsterCards_getArg0;

function backend_com_wsdl_getMonsterCards_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_getMonsterCards.prototype.setArg0 = backend_com_wsdl_getMonsterCards_setArg0;
//
// Serialize {http://backend.com/wsdl}getMonsterCards
//
function backend_com_wsdl_getMonsterCards_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      for (var ax = 0;ax < this._arg0.length;ax ++) {
       if (this._arg0[ax] == null) {
        xml = xml + '<arg0/>';
       } else {
        xml = xml + '<arg0>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._arg0[ax]);
        xml = xml + '</arg0>';
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_getMonsterCards.prototype.serialize = backend_com_wsdl_getMonsterCards_serialize;

function backend_com_wsdl_getMonsterCards_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getMonsterCards();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = parseInt(value);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0'));
     newobject.setArg0(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}getMonsterActionsResponse
//
function backend_com_wsdl_getMonsterActionsResponse () {
    this.typeMarker = 'backend_com_wsdl_getMonsterActionsResponse';
    this._return = [];
}

//
// accessor is backend_com_wsdl_getMonsterActionsResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}monsterAction
// - required element
// - array
//
// element set for return
// setter function is is backend_com_wsdl_getMonsterActionsResponse.prototype.setReturn
//
function backend_com_wsdl_getMonsterActionsResponse_getReturn() { return this._return;}

backend_com_wsdl_getMonsterActionsResponse.prototype.getReturn = backend_com_wsdl_getMonsterActionsResponse_getReturn;

function backend_com_wsdl_getMonsterActionsResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getMonsterActionsResponse.prototype.setReturn = backend_com_wsdl_getMonsterActionsResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getMonsterActionsResponse
//
function backend_com_wsdl_getMonsterActionsResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
      for (var ax = 0;ax < this._return.length;ax ++) {
       if (this._return[ax] == null) {
        xml = xml + '<return/>';
       } else {
        xml = xml + this._return[ax].serialize(cxfjsutils, 'return', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_getMonsterActionsResponse.prototype.serialize = backend_com_wsdl_getMonsterActionsResponse_serialize;

function backend_com_wsdl_getMonsterActionsResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getMonsterActionsResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = backend_com_wsdl_monsterAction_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return'));
     newobject.setReturn(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}andTreePart
//
function backend_com_wsdl_andTreePart () {
    this.typeMarker = 'backend_com_wsdl_andTreePart';
    this._active = '';
    this._finished = '';
    this._id = 0;
    this._successors = [];
    this._version = null;
}

//
// accessor is backend_com_wsdl_andTreePart.prototype.getActive
// element get for active
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for active
// setter function is is backend_com_wsdl_andTreePart.prototype.setActive
//
function backend_com_wsdl_andTreePart_getActive() { return this._active;}

backend_com_wsdl_andTreePart.prototype.getActive = backend_com_wsdl_andTreePart_getActive;

function backend_com_wsdl_andTreePart_setActive(value) { this._active = value;}

backend_com_wsdl_andTreePart.prototype.setActive = backend_com_wsdl_andTreePart_setActive;
//
// accessor is backend_com_wsdl_andTreePart.prototype.getFinished
// element get for finished
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for finished
// setter function is is backend_com_wsdl_andTreePart.prototype.setFinished
//
function backend_com_wsdl_andTreePart_getFinished() { return this._finished;}

backend_com_wsdl_andTreePart.prototype.getFinished = backend_com_wsdl_andTreePart_getFinished;

function backend_com_wsdl_andTreePart_setFinished(value) { this._finished = value;}

backend_com_wsdl_andTreePart.prototype.setFinished = backend_com_wsdl_andTreePart_setFinished;
//
// accessor is backend_com_wsdl_andTreePart.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for id
// setter function is is backend_com_wsdl_andTreePart.prototype.setId
//
function backend_com_wsdl_andTreePart_getId() { return this._id;}

backend_com_wsdl_andTreePart.prototype.getId = backend_com_wsdl_andTreePart_getId;

function backend_com_wsdl_andTreePart_setId(value) { this._id = value;}

backend_com_wsdl_andTreePart.prototype.setId = backend_com_wsdl_andTreePart_setId;
//
// accessor is backend_com_wsdl_andTreePart.prototype.getSuccessors
// element get for successors
// - element type is {http://backend.com/wsdl}treePart
// - required element
// - array
// - nillable
//
// element set for successors
// setter function is is backend_com_wsdl_andTreePart.prototype.setSuccessors
//
function backend_com_wsdl_andTreePart_getSuccessors() { return this._successors;}

backend_com_wsdl_andTreePart.prototype.getSuccessors = backend_com_wsdl_andTreePart_getSuccessors;

function backend_com_wsdl_andTreePart_setSuccessors(value) { this._successors = value;}

backend_com_wsdl_andTreePart.prototype.setSuccessors = backend_com_wsdl_andTreePart_setSuccessors;
//
// accessor is backend_com_wsdl_andTreePart.prototype.getVersion
// element get for version
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for version
// setter function is is backend_com_wsdl_andTreePart.prototype.setVersion
//
function backend_com_wsdl_andTreePart_getVersion() { return this._version;}

backend_com_wsdl_andTreePart.prototype.getVersion = backend_com_wsdl_andTreePart_getVersion;

function backend_com_wsdl_andTreePart_setVersion(value) { this._version = value;}

backend_com_wsdl_andTreePart.prototype.setVersion = backend_com_wsdl_andTreePart_setVersion;
//
// Serialize {http://backend.com/wsdl}andTreePart
//
function backend_com_wsdl_andTreePart_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<active>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._active);
     xml = xml + '</active>';
    }
    // block for local variables
    {
     xml = xml + '<finished>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._finished);
     xml = xml + '</finished>';
    }
    // block for local variables
    {
     xml = xml + '<id>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._id);
     xml = xml + '</id>';
    }
    // block for local variables
    {
     if (this._successors != null) {
      for (var ax = 0;ax < this._successors.length;ax ++) {
       if (this._successors[ax] == null) {
        xml = xml + '<successors xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._successors[ax].serialize(cxfjsutils, 'successors', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this._version != null) {
      xml = xml + '<version>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._version);
      xml = xml + '</version>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_andTreePart.prototype.serialize = backend_com_wsdl_andTreePart_serialize;

function backend_com_wsdl_andTreePart_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_andTreePart();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing active');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setActive(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing finished');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setFinished(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
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
    cxfjsutils.trace('processing successors');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'successors')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = backend_com_wsdl_treePart_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'successors'));
     newobject.setSuccessors(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing version');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'version')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setVersion(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}updateOrTreePart
//
function backend_com_wsdl_updateOrTreePart () {
    this.typeMarker = 'backend_com_wsdl_updateOrTreePart';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_updateOrTreePart.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}orTreePart
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_updateOrTreePart.prototype.setArg0
//
function backend_com_wsdl_updateOrTreePart_getArg0() { return this._arg0;}

backend_com_wsdl_updateOrTreePart.prototype.getArg0 = backend_com_wsdl_updateOrTreePart_getArg0;

function backend_com_wsdl_updateOrTreePart_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_updateOrTreePart.prototype.setArg0 = backend_com_wsdl_updateOrTreePart_setArg0;
//
// Serialize {http://backend.com/wsdl}updateOrTreePart
//
function backend_com_wsdl_updateOrTreePart_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_updateOrTreePart.prototype.serialize = backend_com_wsdl_updateOrTreePart_serialize;

function backend_com_wsdl_updateOrTreePart_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateOrTreePart();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_orTreePart_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}addDeck
//
function backend_com_wsdl_addDeck () {
    this.typeMarker = 'backend_com_wsdl_addDeck';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_addDeck.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}deck
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_addDeck.prototype.setArg0
//
function backend_com_wsdl_addDeck_getArg0() { return this._arg0;}

backend_com_wsdl_addDeck.prototype.getArg0 = backend_com_wsdl_addDeck_getArg0;

function backend_com_wsdl_addDeck_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_addDeck.prototype.setArg0 = backend_com_wsdl_addDeck_setArg0;
//
// Serialize {http://backend.com/wsdl}addDeck
//
function backend_com_wsdl_addDeck_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_addDeck.prototype.serialize = backend_com_wsdl_addDeck_serialize;

function backend_com_wsdl_addDeck_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addDeck();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_deck_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}getMarker
//
function backend_com_wsdl_getMarker () {
    this.typeMarker = 'backend_com_wsdl_getMarker';
    this._arg0 = 0;
}

//
// accessor is backend_com_wsdl_getMarker.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_getMarker.prototype.setArg0
//
function backend_com_wsdl_getMarker_getArg0() { return this._arg0;}

backend_com_wsdl_getMarker.prototype.getArg0 = backend_com_wsdl_getMarker_getArg0;

function backend_com_wsdl_getMarker_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_getMarker.prototype.setArg0 = backend_com_wsdl_getMarker_setArg0;
//
// Serialize {http://backend.com/wsdl}getMarker
//
function backend_com_wsdl_getMarker_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getMarker.prototype.serialize = backend_com_wsdl_getMarker_serialize;

function backend_com_wsdl_getMarker_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getMarker();
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
// Constructor for XML Schema item {http://backend.com/wsdl}getAction
//
function backend_com_wsdl_getAction () {
    this.typeMarker = 'backend_com_wsdl_getAction';
    this._arg0 = 0;
}

//
// accessor is backend_com_wsdl_getAction.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_getAction.prototype.setArg0
//
function backend_com_wsdl_getAction_getArg0() { return this._arg0;}

backend_com_wsdl_getAction.prototype.getArg0 = backend_com_wsdl_getAction_getArg0;

function backend_com_wsdl_getAction_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_getAction.prototype.setArg0 = backend_com_wsdl_getAction_setArg0;
//
// Serialize {http://backend.com/wsdl}getAction
//
function backend_com_wsdl_getAction_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getAction.prototype.serialize = backend_com_wsdl_getAction_serialize;

function backend_com_wsdl_getAction_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getAction();
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
// Constructor for XML Schema item {http://backend.com/wsdl}deleteUserResponse
//
function backend_com_wsdl_deleteUserResponse () {
    this.typeMarker = 'backend_com_wsdl_deleteUserResponse';
}

//
// Serialize {http://backend.com/wsdl}deleteUserResponse
//
function backend_com_wsdl_deleteUserResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_deleteUserResponse.prototype.serialize = backend_com_wsdl_deleteUserResponse_serialize;

function backend_com_wsdl_deleteUserResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_deleteUserResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}addPlayer
//
function backend_com_wsdl_addPlayer () {
    this.typeMarker = 'backend_com_wsdl_addPlayer';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_addPlayer.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}player
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_addPlayer.prototype.setArg0
//
function backend_com_wsdl_addPlayer_getArg0() { return this._arg0;}

backend_com_wsdl_addPlayer.prototype.getArg0 = backend_com_wsdl_addPlayer_getArg0;

function backend_com_wsdl_addPlayer_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_addPlayer.prototype.setArg0 = backend_com_wsdl_addPlayer_setArg0;
//
// Serialize {http://backend.com/wsdl}addPlayer
//
function backend_com_wsdl_addPlayer_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_addPlayer.prototype.serialize = backend_com_wsdl_addPlayer_serialize;

function backend_com_wsdl_addPlayer_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addPlayer();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_player_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}updateMonsterCard
//
function backend_com_wsdl_updateMonsterCard () {
    this.typeMarker = 'backend_com_wsdl_updateMonsterCard';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_updateMonsterCard.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}monsterCard
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_updateMonsterCard.prototype.setArg0
//
function backend_com_wsdl_updateMonsterCard_getArg0() { return this._arg0;}

backend_com_wsdl_updateMonsterCard.prototype.getArg0 = backend_com_wsdl_updateMonsterCard_getArg0;

function backend_com_wsdl_updateMonsterCard_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_updateMonsterCard.prototype.setArg0 = backend_com_wsdl_updateMonsterCard_setArg0;
//
// Serialize {http://backend.com/wsdl}updateMonsterCard
//
function backend_com_wsdl_updateMonsterCard_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_updateMonsterCard.prototype.serialize = backend_com_wsdl_updateMonsterCard_serialize;

function backend_com_wsdl_updateMonsterCard_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateMonsterCard();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_monsterCard_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}setTreePartActive
//
function backend_com_wsdl_setTreePartActive () {
    this.typeMarker = 'backend_com_wsdl_setTreePartActive';
    this._arg0 = 0;
    this._arg1 = '';
}

//
// accessor is backend_com_wsdl_setTreePartActive.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_setTreePartActive.prototype.setArg0
//
function backend_com_wsdl_setTreePartActive_getArg0() { return this._arg0;}

backend_com_wsdl_setTreePartActive.prototype.getArg0 = backend_com_wsdl_setTreePartActive_getArg0;

function backend_com_wsdl_setTreePartActive_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_setTreePartActive.prototype.setArg0 = backend_com_wsdl_setTreePartActive_setArg0;
//
// accessor is backend_com_wsdl_setTreePartActive.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for arg1
// setter function is is backend_com_wsdl_setTreePartActive.prototype.setArg1
//
function backend_com_wsdl_setTreePartActive_getArg1() { return this._arg1;}

backend_com_wsdl_setTreePartActive.prototype.getArg1 = backend_com_wsdl_setTreePartActive_getArg1;

function backend_com_wsdl_setTreePartActive_setArg1(value) { this._arg1 = value;}

backend_com_wsdl_setTreePartActive.prototype.setArg1 = backend_com_wsdl_setTreePartActive_setArg1;
//
// Serialize {http://backend.com/wsdl}setTreePartActive
//
function backend_com_wsdl_setTreePartActive_serialize(cxfjsutils, elementName, extraNamespaces) {
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
    // block for local variables
    {
     xml = xml + '<arg1>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._arg1);
     xml = xml + '</arg1>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_setTreePartActive.prototype.serialize = backend_com_wsdl_setTreePartActive_serialize;

function backend_com_wsdl_setTreePartActive_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_setTreePartActive();
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
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg1');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setArg1(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}getMonsterActions
//
function backend_com_wsdl_getMonsterActions () {
    this.typeMarker = 'backend_com_wsdl_getMonsterActions';
    this._arg0 = [];
}

//
// accessor is backend_com_wsdl_getMonsterActions.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
// - array
//
// element set for arg0
// setter function is is backend_com_wsdl_getMonsterActions.prototype.setArg0
//
function backend_com_wsdl_getMonsterActions_getArg0() { return this._arg0;}

backend_com_wsdl_getMonsterActions.prototype.getArg0 = backend_com_wsdl_getMonsterActions_getArg0;

function backend_com_wsdl_getMonsterActions_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_getMonsterActions.prototype.setArg0 = backend_com_wsdl_getMonsterActions_setArg0;
//
// Serialize {http://backend.com/wsdl}getMonsterActions
//
function backend_com_wsdl_getMonsterActions_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      for (var ax = 0;ax < this._arg0.length;ax ++) {
       if (this._arg0[ax] == null) {
        xml = xml + '<arg0/>';
       } else {
        xml = xml + '<arg0>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._arg0[ax]);
        xml = xml + '</arg0>';
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_getMonsterActions.prototype.serialize = backend_com_wsdl_getMonsterActions_serialize;

function backend_com_wsdl_getMonsterActions_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getMonsterActions();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = parseInt(value);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0'));
     newobject.setArg0(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}deleteMarker
//
function backend_com_wsdl_deleteMarker () {
    this.typeMarker = 'backend_com_wsdl_deleteMarker';
    this._arg0 = 0;
}

//
// accessor is backend_com_wsdl_deleteMarker.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_deleteMarker.prototype.setArg0
//
function backend_com_wsdl_deleteMarker_getArg0() { return this._arg0;}

backend_com_wsdl_deleteMarker.prototype.getArg0 = backend_com_wsdl_deleteMarker_getArg0;

function backend_com_wsdl_deleteMarker_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_deleteMarker.prototype.setArg0 = backend_com_wsdl_deleteMarker_setArg0;
//
// Serialize {http://backend.com/wsdl}deleteMarker
//
function backend_com_wsdl_deleteMarker_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_deleteMarker.prototype.serialize = backend_com_wsdl_deleteMarker_serialize;

function backend_com_wsdl_deleteMarker_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_deleteMarker();
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
// Constructor for XML Schema item {http://backend.com/wsdl}addHtmlResponse
//
function backend_com_wsdl_addHtmlResponse () {
    this.typeMarker = 'backend_com_wsdl_addHtmlResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_addHtmlResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}htmlObject
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_addHtmlResponse.prototype.setReturn
//
function backend_com_wsdl_addHtmlResponse_getReturn() { return this._return;}

backend_com_wsdl_addHtmlResponse.prototype.getReturn = backend_com_wsdl_addHtmlResponse_getReturn;

function backend_com_wsdl_addHtmlResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_addHtmlResponse.prototype.setReturn = backend_com_wsdl_addHtmlResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}addHtmlResponse
//
function backend_com_wsdl_addHtmlResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_addHtmlResponse.prototype.serialize = backend_com_wsdl_addHtmlResponse_serialize;

function backend_com_wsdl_addHtmlResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addHtmlResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_htmlObject_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}getHtmlResponse
//
function backend_com_wsdl_getHtmlResponse () {
    this.typeMarker = 'backend_com_wsdl_getHtmlResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_getHtmlResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}htmlObject
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_getHtmlResponse.prototype.setReturn
//
function backend_com_wsdl_getHtmlResponse_getReturn() { return this._return;}

backend_com_wsdl_getHtmlResponse.prototype.getReturn = backend_com_wsdl_getHtmlResponse_getReturn;

function backend_com_wsdl_getHtmlResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getHtmlResponse.prototype.setReturn = backend_com_wsdl_getHtmlResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getHtmlResponse
//
function backend_com_wsdl_getHtmlResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getHtmlResponse.prototype.serialize = backend_com_wsdl_getHtmlResponse_serialize;

function backend_com_wsdl_getHtmlResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getHtmlResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_htmlObject_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}deck
//
function backend_com_wsdl_deck () {
    this.typeMarker = 'backend_com_wsdl_deck';
    this._cardIds = null;
    this._id = 0;
    this._name = null;
    this._version = null;
}

//
// accessor is backend_com_wsdl_deck.prototype.getCardIds
// element get for cardIds
// - element type is null
// - required element
//
// element set for cardIds
// setter function is is backend_com_wsdl_deck.prototype.setCardIds
//
function backend_com_wsdl_deck_getCardIds() { return this._cardIds;}

backend_com_wsdl_deck.prototype.getCardIds = backend_com_wsdl_deck_getCardIds;

function backend_com_wsdl_deck_setCardIds(value) { this._cardIds = value;}

backend_com_wsdl_deck.prototype.setCardIds = backend_com_wsdl_deck_setCardIds;
//
// accessor is backend_com_wsdl_deck.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for id
// setter function is is backend_com_wsdl_deck.prototype.setId
//
function backend_com_wsdl_deck_getId() { return this._id;}

backend_com_wsdl_deck.prototype.getId = backend_com_wsdl_deck_getId;

function backend_com_wsdl_deck_setId(value) { this._id = value;}

backend_com_wsdl_deck.prototype.setId = backend_com_wsdl_deck_setId;
//
// accessor is backend_com_wsdl_deck.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for name
// setter function is is backend_com_wsdl_deck.prototype.setName
//
function backend_com_wsdl_deck_getName() { return this._name;}

backend_com_wsdl_deck.prototype.getName = backend_com_wsdl_deck_getName;

function backend_com_wsdl_deck_setName(value) { this._name = value;}

backend_com_wsdl_deck.prototype.setName = backend_com_wsdl_deck_setName;
//
// accessor is backend_com_wsdl_deck.prototype.getVersion
// element get for version
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for version
// setter function is is backend_com_wsdl_deck.prototype.setVersion
//
function backend_com_wsdl_deck_getVersion() { return this._version;}

backend_com_wsdl_deck.prototype.getVersion = backend_com_wsdl_deck_getVersion;

function backend_com_wsdl_deck_setVersion(value) { this._version = value;}

backend_com_wsdl_deck.prototype.setVersion = backend_com_wsdl_deck_setVersion;
//
// Serialize {http://backend.com/wsdl}deck
//
function backend_com_wsdl_deck_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + this._cardIds.serialize(cxfjsutils, 'cardIds', null);
    }
    // block for local variables
    {
     xml = xml + '<id>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._id);
     xml = xml + '</id>';
    }
    // block for local variables
    {
     if (this._name != null) {
      xml = xml + '<name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._name);
      xml = xml + '</name>';
     }
    }
    // block for local variables
    {
     if (this._version != null) {
      xml = xml + '<version>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._version);
      xml = xml + '</version>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_deck.prototype.serialize = backend_com_wsdl_deck_serialize;

function backend_com_wsdl_deck_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_deck();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing cardIds');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = backend_com_wsdl_cardIds_deserialize(cxfjsutils, curElement);
    }
    newobject.setCardIds(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
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
    cxfjsutils.trace('processing name');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'name')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setName(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing version');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'version')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setVersion(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}addInvisibleMarkerResponse
//
function backend_com_wsdl_addInvisibleMarkerResponse () {
    this.typeMarker = 'backend_com_wsdl_addInvisibleMarkerResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_addInvisibleMarkerResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}invisibleMarker
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_addInvisibleMarkerResponse.prototype.setReturn
//
function backend_com_wsdl_addInvisibleMarkerResponse_getReturn() { return this._return;}

backend_com_wsdl_addInvisibleMarkerResponse.prototype.getReturn = backend_com_wsdl_addInvisibleMarkerResponse_getReturn;

function backend_com_wsdl_addInvisibleMarkerResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_addInvisibleMarkerResponse.prototype.setReturn = backend_com_wsdl_addInvisibleMarkerResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}addInvisibleMarkerResponse
//
function backend_com_wsdl_addInvisibleMarkerResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_addInvisibleMarkerResponse.prototype.serialize = backend_com_wsdl_addInvisibleMarkerResponse_serialize;

function backend_com_wsdl_addInvisibleMarkerResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addInvisibleMarkerResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_invisibleMarker_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}updateQuestResponse
//
function backend_com_wsdl_updateQuestResponse () {
    this.typeMarker = 'backend_com_wsdl_updateQuestResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_updateQuestResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}quest
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_updateQuestResponse.prototype.setReturn
//
function backend_com_wsdl_updateQuestResponse_getReturn() { return this._return;}

backend_com_wsdl_updateQuestResponse.prototype.getReturn = backend_com_wsdl_updateQuestResponse_getReturn;

function backend_com_wsdl_updateQuestResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_updateQuestResponse.prototype.setReturn = backend_com_wsdl_updateQuestResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}updateQuestResponse
//
function backend_com_wsdl_updateQuestResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updateQuestResponse.prototype.serialize = backend_com_wsdl_updateQuestResponse_serialize;

function backend_com_wsdl_updateQuestResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateQuestResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_quest_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}updateSpellCard
//
function backend_com_wsdl_updateSpellCard () {
    this.typeMarker = 'backend_com_wsdl_updateSpellCard';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_updateSpellCard.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}spellCard
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_updateSpellCard.prototype.setArg0
//
function backend_com_wsdl_updateSpellCard_getArg0() { return this._arg0;}

backend_com_wsdl_updateSpellCard.prototype.getArg0 = backend_com_wsdl_updateSpellCard_getArg0;

function backend_com_wsdl_updateSpellCard_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_updateSpellCard.prototype.setArg0 = backend_com_wsdl_updateSpellCard_setArg0;
//
// Serialize {http://backend.com/wsdl}updateSpellCard
//
function backend_com_wsdl_updateSpellCard_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_updateSpellCard.prototype.serialize = backend_com_wsdl_updateSpellCard_serialize;

function backend_com_wsdl_updateSpellCard_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateSpellCard();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_spellCard_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}updateDeck
//
function backend_com_wsdl_updateDeck () {
    this.typeMarker = 'backend_com_wsdl_updateDeck';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_updateDeck.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}deck
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_updateDeck.prototype.setArg0
//
function backend_com_wsdl_updateDeck_getArg0() { return this._arg0;}

backend_com_wsdl_updateDeck.prototype.getArg0 = backend_com_wsdl_updateDeck_getArg0;

function backend_com_wsdl_updateDeck_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_updateDeck.prototype.setArg0 = backend_com_wsdl_updateDeck_setArg0;
//
// Serialize {http://backend.com/wsdl}updateDeck
//
function backend_com_wsdl_updateDeck_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_updateDeck.prototype.serialize = backend_com_wsdl_updateDeck_serialize;

function backend_com_wsdl_updateDeck_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateDeck();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_deck_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}addMonsterCardResponse
//
function backend_com_wsdl_addMonsterCardResponse () {
    this.typeMarker = 'backend_com_wsdl_addMonsterCardResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_addMonsterCardResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}monsterCard
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_addMonsterCardResponse.prototype.setReturn
//
function backend_com_wsdl_addMonsterCardResponse_getReturn() { return this._return;}

backend_com_wsdl_addMonsterCardResponse.prototype.getReturn = backend_com_wsdl_addMonsterCardResponse_getReturn;

function backend_com_wsdl_addMonsterCardResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_addMonsterCardResponse.prototype.setReturn = backend_com_wsdl_addMonsterCardResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}addMonsterCardResponse
//
function backend_com_wsdl_addMonsterCardResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_addMonsterCardResponse.prototype.serialize = backend_com_wsdl_addMonsterCardResponse_serialize;

function backend_com_wsdl_addMonsterCardResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addMonsterCardResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_monsterCard_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}getDeck
//
function backend_com_wsdl_getDeck () {
    this.typeMarker = 'backend_com_wsdl_getDeck';
    this._arg0 = 0;
}

//
// accessor is backend_com_wsdl_getDeck.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_getDeck.prototype.setArg0
//
function backend_com_wsdl_getDeck_getArg0() { return this._arg0;}

backend_com_wsdl_getDeck.prototype.getArg0 = backend_com_wsdl_getDeck_getArg0;

function backend_com_wsdl_getDeck_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_getDeck.prototype.setArg0 = backend_com_wsdl_getDeck_setArg0;
//
// Serialize {http://backend.com/wsdl}getDeck
//
function backend_com_wsdl_getDeck_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getDeck.prototype.serialize = backend_com_wsdl_getDeck_serialize;

function backend_com_wsdl_getDeck_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getDeck();
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
// Constructor for XML Schema item {http://backend.com/wsdl}addDeckResponse
//
function backend_com_wsdl_addDeckResponse () {
    this.typeMarker = 'backend_com_wsdl_addDeckResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_addDeckResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}deck
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_addDeckResponse.prototype.setReturn
//
function backend_com_wsdl_addDeckResponse_getReturn() { return this._return;}

backend_com_wsdl_addDeckResponse.prototype.getReturn = backend_com_wsdl_addDeckResponse_getReturn;

function backend_com_wsdl_addDeckResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_addDeckResponse.prototype.setReturn = backend_com_wsdl_addDeckResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}addDeckResponse
//
function backend_com_wsdl_addDeckResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_addDeckResponse.prototype.serialize = backend_com_wsdl_addDeckResponse_serialize;

function backend_com_wsdl_addDeckResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addDeckResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_deck_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}updateSpellActionResponse
//
function backend_com_wsdl_updateSpellActionResponse () {
    this.typeMarker = 'backend_com_wsdl_updateSpellActionResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_updateSpellActionResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}spellAction
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_updateSpellActionResponse.prototype.setReturn
//
function backend_com_wsdl_updateSpellActionResponse_getReturn() { return this._return;}

backend_com_wsdl_updateSpellActionResponse.prototype.getReturn = backend_com_wsdl_updateSpellActionResponse_getReturn;

function backend_com_wsdl_updateSpellActionResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_updateSpellActionResponse.prototype.setReturn = backend_com_wsdl_updateSpellActionResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}updateSpellActionResponse
//
function backend_com_wsdl_updateSpellActionResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updateSpellActionResponse.prototype.serialize = backend_com_wsdl_updateSpellActionResponse_serialize;

function backend_com_wsdl_updateSpellActionResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateSpellActionResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_spellAction_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}completeMarker
//
function backend_com_wsdl_completeMarker () {
    this.typeMarker = 'backend_com_wsdl_completeMarker';
    this._htmlId = 0;
    this._id = 0;
    this._name = null;
    this._position = null;
    this._targetPosition = null;
    this._type = null;
    this._version = null;
}

//
// accessor is backend_com_wsdl_completeMarker.prototype.getHtmlId
// element get for htmlId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for htmlId
// setter function is is backend_com_wsdl_completeMarker.prototype.setHtmlId
//
function backend_com_wsdl_completeMarker_getHtmlId() { return this._htmlId;}

backend_com_wsdl_completeMarker.prototype.getHtmlId = backend_com_wsdl_completeMarker_getHtmlId;

function backend_com_wsdl_completeMarker_setHtmlId(value) { this._htmlId = value;}

backend_com_wsdl_completeMarker.prototype.setHtmlId = backend_com_wsdl_completeMarker_setHtmlId;
//
// accessor is backend_com_wsdl_completeMarker.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for id
// setter function is is backend_com_wsdl_completeMarker.prototype.setId
//
function backend_com_wsdl_completeMarker_getId() { return this._id;}

backend_com_wsdl_completeMarker.prototype.getId = backend_com_wsdl_completeMarker_getId;

function backend_com_wsdl_completeMarker_setId(value) { this._id = value;}

backend_com_wsdl_completeMarker.prototype.setId = backend_com_wsdl_completeMarker_setId;
//
// accessor is backend_com_wsdl_completeMarker.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for name
// setter function is is backend_com_wsdl_completeMarker.prototype.setName
//
function backend_com_wsdl_completeMarker_getName() { return this._name;}

backend_com_wsdl_completeMarker.prototype.getName = backend_com_wsdl_completeMarker_getName;

function backend_com_wsdl_completeMarker_setName(value) { this._name = value;}

backend_com_wsdl_completeMarker.prototype.setName = backend_com_wsdl_completeMarker_setName;
//
// accessor is backend_com_wsdl_completeMarker.prototype.getPosition
// element get for position
// - element type is {http://backend.com/wsdl}mapPosition
// - optional element
//
// element set for position
// setter function is is backend_com_wsdl_completeMarker.prototype.setPosition
//
function backend_com_wsdl_completeMarker_getPosition() { return this._position;}

backend_com_wsdl_completeMarker.prototype.getPosition = backend_com_wsdl_completeMarker_getPosition;

function backend_com_wsdl_completeMarker_setPosition(value) { this._position = value;}

backend_com_wsdl_completeMarker.prototype.setPosition = backend_com_wsdl_completeMarker_setPosition;
//
// accessor is backend_com_wsdl_completeMarker.prototype.getTargetPosition
// element get for targetPosition
// - element type is {http://backend.com/wsdl}mapPosition
// - optional element
//
// element set for targetPosition
// setter function is is backend_com_wsdl_completeMarker.prototype.setTargetPosition
//
function backend_com_wsdl_completeMarker_getTargetPosition() { return this._targetPosition;}

backend_com_wsdl_completeMarker.prototype.getTargetPosition = backend_com_wsdl_completeMarker_getTargetPosition;

function backend_com_wsdl_completeMarker_setTargetPosition(value) { this._targetPosition = value;}

backend_com_wsdl_completeMarker.prototype.setTargetPosition = backend_com_wsdl_completeMarker_setTargetPosition;
//
// accessor is backend_com_wsdl_completeMarker.prototype.getType
// element get for type
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for type
// setter function is is backend_com_wsdl_completeMarker.prototype.setType
//
function backend_com_wsdl_completeMarker_getType() { return this._type;}

backend_com_wsdl_completeMarker.prototype.getType = backend_com_wsdl_completeMarker_getType;

function backend_com_wsdl_completeMarker_setType(value) { this._type = value;}

backend_com_wsdl_completeMarker.prototype.setType = backend_com_wsdl_completeMarker_setType;
//
// accessor is backend_com_wsdl_completeMarker.prototype.getVersion
// element get for version
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for version
// setter function is is backend_com_wsdl_completeMarker.prototype.setVersion
//
function backend_com_wsdl_completeMarker_getVersion() { return this._version;}

backend_com_wsdl_completeMarker.prototype.getVersion = backend_com_wsdl_completeMarker_getVersion;

function backend_com_wsdl_completeMarker_setVersion(value) { this._version = value;}

backend_com_wsdl_completeMarker.prototype.setVersion = backend_com_wsdl_completeMarker_setVersion;
//
// Serialize {http://backend.com/wsdl}completeMarker
//
function backend_com_wsdl_completeMarker_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<htmlId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._htmlId);
     xml = xml + '</htmlId>';
    }
    // block for local variables
    {
     xml = xml + '<id>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._id);
     xml = xml + '</id>';
    }
    // block for local variables
    {
     if (this._name != null) {
      xml = xml + '<name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._name);
      xml = xml + '</name>';
     }
    }
    // block for local variables
    {
     if (this._position != null) {
      xml = xml + this._position.serialize(cxfjsutils, 'position', null);
     }
    }
    // block for local variables
    {
     if (this._targetPosition != null) {
      xml = xml + this._targetPosition.serialize(cxfjsutils, 'targetPosition', null);
     }
    }
    // block for local variables
    {
     if (this._type != null) {
      xml = xml + '<type>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._type);
      xml = xml + '</type>';
     }
    }
    // block for local variables
    {
     if (this._version != null) {
      xml = xml + '<version>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._version);
      xml = xml + '</version>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_completeMarker.prototype.serialize = backend_com_wsdl_completeMarker_serialize;

function backend_com_wsdl_completeMarker_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_completeMarker();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing htmlId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setHtmlId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
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
    cxfjsutils.trace('processing name');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'name')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setName(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing position');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'position')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_mapPosition_deserialize(cxfjsutils, curElement);
     }
     newobject.setPosition(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing targetPosition');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'targetPosition')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_mapPosition_deserialize(cxfjsutils, curElement);
     }
     newobject.setTargetPosition(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing type');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'type')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setType(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing version');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'version')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setVersion(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}addQuestInstanceResponse
//
function backend_com_wsdl_addQuestInstanceResponse () {
    this.typeMarker = 'backend_com_wsdl_addQuestInstanceResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_addQuestInstanceResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}questInstance
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_addQuestInstanceResponse.prototype.setReturn
//
function backend_com_wsdl_addQuestInstanceResponse_getReturn() { return this._return;}

backend_com_wsdl_addQuestInstanceResponse.prototype.getReturn = backend_com_wsdl_addQuestInstanceResponse_getReturn;

function backend_com_wsdl_addQuestInstanceResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_addQuestInstanceResponse.prototype.setReturn = backend_com_wsdl_addQuestInstanceResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}addQuestInstanceResponse
//
function backend_com_wsdl_addQuestInstanceResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_addQuestInstanceResponse.prototype.serialize = backend_com_wsdl_addQuestInstanceResponse_serialize;

function backend_com_wsdl_addQuestInstanceResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addQuestInstanceResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_questInstance_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}deleteQuest
//
function backend_com_wsdl_deleteQuest () {
    this.typeMarker = 'backend_com_wsdl_deleteQuest';
    this._arg0 = 0;
}

//
// accessor is backend_com_wsdl_deleteQuest.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_deleteQuest.prototype.setArg0
//
function backend_com_wsdl_deleteQuest_getArg0() { return this._arg0;}

backend_com_wsdl_deleteQuest.prototype.getArg0 = backend_com_wsdl_deleteQuest_getArg0;

function backend_com_wsdl_deleteQuest_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_deleteQuest.prototype.setArg0 = backend_com_wsdl_deleteQuest_setArg0;
//
// Serialize {http://backend.com/wsdl}deleteQuest
//
function backend_com_wsdl_deleteQuest_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_deleteQuest.prototype.serialize = backend_com_wsdl_deleteQuest_serialize;

function backend_com_wsdl_deleteQuest_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_deleteQuest();
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
// Constructor for XML Schema item {http://backend.com/wsdl}infoMarker
//
function backend_com_wsdl_infoMarker () {
    this.typeMarker = 'backend_com_wsdl_infoMarker';
    this._htmlId = 0;
    this._id = 0;
    this._name = null;
    this._position = null;
    this._version = null;
}

//
// accessor is backend_com_wsdl_infoMarker.prototype.getHtmlId
// element get for htmlId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for htmlId
// setter function is is backend_com_wsdl_infoMarker.prototype.setHtmlId
//
function backend_com_wsdl_infoMarker_getHtmlId() { return this._htmlId;}

backend_com_wsdl_infoMarker.prototype.getHtmlId = backend_com_wsdl_infoMarker_getHtmlId;

function backend_com_wsdl_infoMarker_setHtmlId(value) { this._htmlId = value;}

backend_com_wsdl_infoMarker.prototype.setHtmlId = backend_com_wsdl_infoMarker_setHtmlId;
//
// accessor is backend_com_wsdl_infoMarker.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for id
// setter function is is backend_com_wsdl_infoMarker.prototype.setId
//
function backend_com_wsdl_infoMarker_getId() { return this._id;}

backend_com_wsdl_infoMarker.prototype.getId = backend_com_wsdl_infoMarker_getId;

function backend_com_wsdl_infoMarker_setId(value) { this._id = value;}

backend_com_wsdl_infoMarker.prototype.setId = backend_com_wsdl_infoMarker_setId;
//
// accessor is backend_com_wsdl_infoMarker.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for name
// setter function is is backend_com_wsdl_infoMarker.prototype.setName
//
function backend_com_wsdl_infoMarker_getName() { return this._name;}

backend_com_wsdl_infoMarker.prototype.getName = backend_com_wsdl_infoMarker_getName;

function backend_com_wsdl_infoMarker_setName(value) { this._name = value;}

backend_com_wsdl_infoMarker.prototype.setName = backend_com_wsdl_infoMarker_setName;
//
// accessor is backend_com_wsdl_infoMarker.prototype.getPosition
// element get for position
// - element type is {http://backend.com/wsdl}mapPosition
// - optional element
//
// element set for position
// setter function is is backend_com_wsdl_infoMarker.prototype.setPosition
//
function backend_com_wsdl_infoMarker_getPosition() { return this._position;}

backend_com_wsdl_infoMarker.prototype.getPosition = backend_com_wsdl_infoMarker_getPosition;

function backend_com_wsdl_infoMarker_setPosition(value) { this._position = value;}

backend_com_wsdl_infoMarker.prototype.setPosition = backend_com_wsdl_infoMarker_setPosition;
//
// accessor is backend_com_wsdl_infoMarker.prototype.getVersion
// element get for version
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for version
// setter function is is backend_com_wsdl_infoMarker.prototype.setVersion
//
function backend_com_wsdl_infoMarker_getVersion() { return this._version;}

backend_com_wsdl_infoMarker.prototype.getVersion = backend_com_wsdl_infoMarker_getVersion;

function backend_com_wsdl_infoMarker_setVersion(value) { this._version = value;}

backend_com_wsdl_infoMarker.prototype.setVersion = backend_com_wsdl_infoMarker_setVersion;
//
// Serialize {http://backend.com/wsdl}infoMarker
//
function backend_com_wsdl_infoMarker_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<htmlId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._htmlId);
     xml = xml + '</htmlId>';
    }
    // block for local variables
    {
     xml = xml + '<id>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._id);
     xml = xml + '</id>';
    }
    // block for local variables
    {
     if (this._name != null) {
      xml = xml + '<name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._name);
      xml = xml + '</name>';
     }
    }
    // block for local variables
    {
     if (this._position != null) {
      xml = xml + this._position.serialize(cxfjsutils, 'position', null);
     }
    }
    // block for local variables
    {
     if (this._version != null) {
      xml = xml + '<version>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._version);
      xml = xml + '</version>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_infoMarker.prototype.serialize = backend_com_wsdl_infoMarker_serialize;

function backend_com_wsdl_infoMarker_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_infoMarker();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing htmlId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setHtmlId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
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
    cxfjsutils.trace('processing name');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'name')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setName(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing position');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'position')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_mapPosition_deserialize(cxfjsutils, curElement);
     }
     newobject.setPosition(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing version');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'version')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setVersion(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}getQuestInstanceResponse
//
function backend_com_wsdl_getQuestInstanceResponse () {
    this.typeMarker = 'backend_com_wsdl_getQuestInstanceResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_getQuestInstanceResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}questInstance
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_getQuestInstanceResponse.prototype.setReturn
//
function backend_com_wsdl_getQuestInstanceResponse_getReturn() { return this._return;}

backend_com_wsdl_getQuestInstanceResponse.prototype.getReturn = backend_com_wsdl_getQuestInstanceResponse_getReturn;

function backend_com_wsdl_getQuestInstanceResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getQuestInstanceResponse.prototype.setReturn = backend_com_wsdl_getQuestInstanceResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getQuestInstanceResponse
//
function backend_com_wsdl_getQuestInstanceResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getQuestInstanceResponse.prototype.serialize = backend_com_wsdl_getQuestInstanceResponse_serialize;

function backend_com_wsdl_getQuestInstanceResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getQuestInstanceResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_questInstance_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}addFightMarker
//
function backend_com_wsdl_addFightMarker () {
    this.typeMarker = 'backend_com_wsdl_addFightMarker';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_addFightMarker.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}fightMarker
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_addFightMarker.prototype.setArg0
//
function backend_com_wsdl_addFightMarker_getArg0() { return this._arg0;}

backend_com_wsdl_addFightMarker.prototype.getArg0 = backend_com_wsdl_addFightMarker_getArg0;

function backend_com_wsdl_addFightMarker_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_addFightMarker.prototype.setArg0 = backend_com_wsdl_addFightMarker_setArg0;
//
// Serialize {http://backend.com/wsdl}addFightMarker
//
function backend_com_wsdl_addFightMarker_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_addFightMarker.prototype.serialize = backend_com_wsdl_addFightMarker_serialize;

function backend_com_wsdl_addFightMarker_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addFightMarker();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_fightMarker_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}getTreePartLazyResponse
//
function backend_com_wsdl_getTreePartLazyResponse () {
    this.typeMarker = 'backend_com_wsdl_getTreePartLazyResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_getTreePartLazyResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}treePartLazy
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_getTreePartLazyResponse.prototype.setReturn
//
function backend_com_wsdl_getTreePartLazyResponse_getReturn() { return this._return;}

backend_com_wsdl_getTreePartLazyResponse.prototype.getReturn = backend_com_wsdl_getTreePartLazyResponse_getReturn;

function backend_com_wsdl_getTreePartLazyResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getTreePartLazyResponse.prototype.setReturn = backend_com_wsdl_getTreePartLazyResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getTreePartLazyResponse
//
function backend_com_wsdl_getTreePartLazyResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getTreePartLazyResponse.prototype.serialize = backend_com_wsdl_getTreePartLazyResponse_serialize;

function backend_com_wsdl_getTreePartLazyResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getTreePartLazyResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_treePartLazy_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}getCompleteMarker
//
function backend_com_wsdl_getCompleteMarker () {
    this.typeMarker = 'backend_com_wsdl_getCompleteMarker';
    this._arg0 = 0;
}

//
// accessor is backend_com_wsdl_getCompleteMarker.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_getCompleteMarker.prototype.setArg0
//
function backend_com_wsdl_getCompleteMarker_getArg0() { return this._arg0;}

backend_com_wsdl_getCompleteMarker.prototype.getArg0 = backend_com_wsdl_getCompleteMarker_getArg0;

function backend_com_wsdl_getCompleteMarker_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_getCompleteMarker.prototype.setArg0 = backend_com_wsdl_getCompleteMarker_setArg0;
//
// Serialize {http://backend.com/wsdl}getCompleteMarker
//
function backend_com_wsdl_getCompleteMarker_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getCompleteMarker.prototype.serialize = backend_com_wsdl_getCompleteMarker_serialize;

function backend_com_wsdl_getCompleteMarker_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getCompleteMarker();
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
// Constructor for XML Schema item {http://backend.com/wsdl}addSpellAction
//
function backend_com_wsdl_addSpellAction () {
    this.typeMarker = 'backend_com_wsdl_addSpellAction';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_addSpellAction.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}spellAction
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_addSpellAction.prototype.setArg0
//
function backend_com_wsdl_addSpellAction_getArg0() { return this._arg0;}

backend_com_wsdl_addSpellAction.prototype.getArg0 = backend_com_wsdl_addSpellAction_getArg0;

function backend_com_wsdl_addSpellAction_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_addSpellAction.prototype.setArg0 = backend_com_wsdl_addSpellAction_setArg0;
//
// Serialize {http://backend.com/wsdl}addSpellAction
//
function backend_com_wsdl_addSpellAction_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_addSpellAction.prototype.serialize = backend_com_wsdl_addSpellAction_serialize;

function backend_com_wsdl_addSpellAction_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addSpellAction();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_spellAction_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}updatePlayerResponse
//
function backend_com_wsdl_updatePlayerResponse () {
    this.typeMarker = 'backend_com_wsdl_updatePlayerResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_updatePlayerResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}player
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_updatePlayerResponse.prototype.setReturn
//
function backend_com_wsdl_updatePlayerResponse_getReturn() { return this._return;}

backend_com_wsdl_updatePlayerResponse.prototype.getReturn = backend_com_wsdl_updatePlayerResponse_getReturn;

function backend_com_wsdl_updatePlayerResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_updatePlayerResponse.prototype.setReturn = backend_com_wsdl_updatePlayerResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}updatePlayerResponse
//
function backend_com_wsdl_updatePlayerResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updatePlayerResponse.prototype.serialize = backend_com_wsdl_updatePlayerResponse_serialize;

function backend_com_wsdl_updatePlayerResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updatePlayerResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_player_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}getDeckResponse
//
function backend_com_wsdl_getDeckResponse () {
    this.typeMarker = 'backend_com_wsdl_getDeckResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_getDeckResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}deck
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_getDeckResponse.prototype.setReturn
//
function backend_com_wsdl_getDeckResponse_getReturn() { return this._return;}

backend_com_wsdl_getDeckResponse.prototype.getReturn = backend_com_wsdl_getDeckResponse_getReturn;

function backend_com_wsdl_getDeckResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getDeckResponse.prototype.setReturn = backend_com_wsdl_getDeckResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getDeckResponse
//
function backend_com_wsdl_getDeckResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getDeckResponse.prototype.serialize = backend_com_wsdl_getDeckResponse_serialize;

function backend_com_wsdl_getDeckResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getDeckResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_deck_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}addSpellCardResponse
//
function backend_com_wsdl_addSpellCardResponse () {
    this.typeMarker = 'backend_com_wsdl_addSpellCardResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_addSpellCardResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}spellCard
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_addSpellCardResponse.prototype.setReturn
//
function backend_com_wsdl_addSpellCardResponse_getReturn() { return this._return;}

backend_com_wsdl_addSpellCardResponse.prototype.getReturn = backend_com_wsdl_addSpellCardResponse_getReturn;

function backend_com_wsdl_addSpellCardResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_addSpellCardResponse.prototype.setReturn = backend_com_wsdl_addSpellCardResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}addSpellCardResponse
//
function backend_com_wsdl_addSpellCardResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_addSpellCardResponse.prototype.serialize = backend_com_wsdl_addSpellCardResponse_serialize;

function backend_com_wsdl_addSpellCardResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addSpellCardResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_spellCard_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}deleteMonsterAction
//
function backend_com_wsdl_deleteMonsterAction () {
    this.typeMarker = 'backend_com_wsdl_deleteMonsterAction';
    this._arg0 = 0;
}

//
// accessor is backend_com_wsdl_deleteMonsterAction.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_deleteMonsterAction.prototype.setArg0
//
function backend_com_wsdl_deleteMonsterAction_getArg0() { return this._arg0;}

backend_com_wsdl_deleteMonsterAction.prototype.getArg0 = backend_com_wsdl_deleteMonsterAction_getArg0;

function backend_com_wsdl_deleteMonsterAction_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_deleteMonsterAction.prototype.setArg0 = backend_com_wsdl_deleteMonsterAction_setArg0;
//
// Serialize {http://backend.com/wsdl}deleteMonsterAction
//
function backend_com_wsdl_deleteMonsterAction_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_deleteMonsterAction.prototype.serialize = backend_com_wsdl_deleteMonsterAction_serialize;

function backend_com_wsdl_deleteMonsterAction_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_deleteMonsterAction();
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
// Constructor for XML Schema item {http://backend.com/wsdl}deleteSpellCardResponse
//
function backend_com_wsdl_deleteSpellCardResponse () {
    this.typeMarker = 'backend_com_wsdl_deleteSpellCardResponse';
}

//
// Serialize {http://backend.com/wsdl}deleteSpellCardResponse
//
function backend_com_wsdl_deleteSpellCardResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_deleteSpellCardResponse.prototype.serialize = backend_com_wsdl_deleteSpellCardResponse_serialize;

function backend_com_wsdl_deleteSpellCardResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_deleteSpellCardResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}addMonsterActionResponse
//
function backend_com_wsdl_addMonsterActionResponse () {
    this.typeMarker = 'backend_com_wsdl_addMonsterActionResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_addMonsterActionResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}monsterAction
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_addMonsterActionResponse.prototype.setReturn
//
function backend_com_wsdl_addMonsterActionResponse_getReturn() { return this._return;}

backend_com_wsdl_addMonsterActionResponse.prototype.getReturn = backend_com_wsdl_addMonsterActionResponse_getReturn;

function backend_com_wsdl_addMonsterActionResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_addMonsterActionResponse.prototype.setReturn = backend_com_wsdl_addMonsterActionResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}addMonsterActionResponse
//
function backend_com_wsdl_addMonsterActionResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_addMonsterActionResponse.prototype.serialize = backend_com_wsdl_addMonsterActionResponse_serialize;

function backend_com_wsdl_addMonsterActionResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addMonsterActionResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_monsterAction_deserialize(cxfjsutils, curElement);
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
// Simple type (enumeration) {http://backend.com/wsdl}monsterActionType
//
// - DECREASE_ATTACK
// - DOT
// - CONFUSE
// - TAUNT
// - SLEEP
//
// Constructor for XML Schema item {http://backend.com/wsdl}updateHtml
//
function backend_com_wsdl_updateHtml () {
    this.typeMarker = 'backend_com_wsdl_updateHtml';
    this._arg0 = 0;
}

//
// accessor is backend_com_wsdl_updateHtml.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_updateHtml.prototype.setArg0
//
function backend_com_wsdl_updateHtml_getArg0() { return this._arg0;}

backend_com_wsdl_updateHtml.prototype.getArg0 = backend_com_wsdl_updateHtml_getArg0;

function backend_com_wsdl_updateHtml_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_updateHtml.prototype.setArg0 = backend_com_wsdl_updateHtml_setArg0;
//
// Serialize {http://backend.com/wsdl}updateHtml
//
function backend_com_wsdl_updateHtml_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updateHtml.prototype.serialize = backend_com_wsdl_updateHtml_serialize;

function backend_com_wsdl_updateHtml_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateHtml();
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
// Constructor for XML Schema item {http://backend.com/wsdl}addInfoMarker
//
function backend_com_wsdl_addInfoMarker () {
    this.typeMarker = 'backend_com_wsdl_addInfoMarker';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_addInfoMarker.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}infoMarker
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_addInfoMarker.prototype.setArg0
//
function backend_com_wsdl_addInfoMarker_getArg0() { return this._arg0;}

backend_com_wsdl_addInfoMarker.prototype.getArg0 = backend_com_wsdl_addInfoMarker_getArg0;

function backend_com_wsdl_addInfoMarker_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_addInfoMarker.prototype.setArg0 = backend_com_wsdl_addInfoMarker_setArg0;
//
// Serialize {http://backend.com/wsdl}addInfoMarker
//
function backend_com_wsdl_addInfoMarker_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_addInfoMarker.prototype.serialize = backend_com_wsdl_addInfoMarker_serialize;

function backend_com_wsdl_addInfoMarker_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addInfoMarker();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_infoMarker_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}questInstance
//
function backend_com_wsdl_questInstance () {
    this.typeMarker = 'backend_com_wsdl_questInstance';
    this._id = 0;
    this._questId = 0;
    this._treeInstanceRootId = 0;
    this._version = null;
}

//
// accessor is backend_com_wsdl_questInstance.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for id
// setter function is is backend_com_wsdl_questInstance.prototype.setId
//
function backend_com_wsdl_questInstance_getId() { return this._id;}

backend_com_wsdl_questInstance.prototype.getId = backend_com_wsdl_questInstance_getId;

function backend_com_wsdl_questInstance_setId(value) { this._id = value;}

backend_com_wsdl_questInstance.prototype.setId = backend_com_wsdl_questInstance_setId;
//
// accessor is backend_com_wsdl_questInstance.prototype.getQuestId
// element get for questId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for questId
// setter function is is backend_com_wsdl_questInstance.prototype.setQuestId
//
function backend_com_wsdl_questInstance_getQuestId() { return this._questId;}

backend_com_wsdl_questInstance.prototype.getQuestId = backend_com_wsdl_questInstance_getQuestId;

function backend_com_wsdl_questInstance_setQuestId(value) { this._questId = value;}

backend_com_wsdl_questInstance.prototype.setQuestId = backend_com_wsdl_questInstance_setQuestId;
//
// accessor is backend_com_wsdl_questInstance.prototype.getTreeInstanceRootId
// element get for treeInstanceRootId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for treeInstanceRootId
// setter function is is backend_com_wsdl_questInstance.prototype.setTreeInstanceRootId
//
function backend_com_wsdl_questInstance_getTreeInstanceRootId() { return this._treeInstanceRootId;}

backend_com_wsdl_questInstance.prototype.getTreeInstanceRootId = backend_com_wsdl_questInstance_getTreeInstanceRootId;

function backend_com_wsdl_questInstance_setTreeInstanceRootId(value) { this._treeInstanceRootId = value;}

backend_com_wsdl_questInstance.prototype.setTreeInstanceRootId = backend_com_wsdl_questInstance_setTreeInstanceRootId;
//
// accessor is backend_com_wsdl_questInstance.prototype.getVersion
// element get for version
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for version
// setter function is is backend_com_wsdl_questInstance.prototype.setVersion
//
function backend_com_wsdl_questInstance_getVersion() { return this._version;}

backend_com_wsdl_questInstance.prototype.getVersion = backend_com_wsdl_questInstance_getVersion;

function backend_com_wsdl_questInstance_setVersion(value) { this._version = value;}

backend_com_wsdl_questInstance.prototype.setVersion = backend_com_wsdl_questInstance_setVersion;
//
// Serialize {http://backend.com/wsdl}questInstance
//
function backend_com_wsdl_questInstance_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<questId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._questId);
     xml = xml + '</questId>';
    }
    // block for local variables
    {
     xml = xml + '<treeInstanceRootId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._treeInstanceRootId);
     xml = xml + '</treeInstanceRootId>';
    }
    // block for local variables
    {
     if (this._version != null) {
      xml = xml + '<version>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._version);
      xml = xml + '</version>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_questInstance.prototype.serialize = backend_com_wsdl_questInstance_serialize;

function backend_com_wsdl_questInstance_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_questInstance();
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
    cxfjsutils.trace('processing questId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setQuestId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing treeInstanceRootId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setTreeInstanceRootId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing version');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'version')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setVersion(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}getMarkersResponse
//
function backend_com_wsdl_getMarkersResponse () {
    this.typeMarker = 'backend_com_wsdl_getMarkersResponse';
    this._return = [];
}

//
// accessor is backend_com_wsdl_getMarkersResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}marker
// - required element
// - array
//
// element set for return
// setter function is is backend_com_wsdl_getMarkersResponse.prototype.setReturn
//
function backend_com_wsdl_getMarkersResponse_getReturn() { return this._return;}

backend_com_wsdl_getMarkersResponse.prototype.getReturn = backend_com_wsdl_getMarkersResponse_getReturn;

function backend_com_wsdl_getMarkersResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getMarkersResponse.prototype.setReturn = backend_com_wsdl_getMarkersResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getMarkersResponse
//
function backend_com_wsdl_getMarkersResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
      for (var ax = 0;ax < this._return.length;ax ++) {
       if (this._return[ax] == null) {
        xml = xml + '<return/>';
       } else {
        xml = xml + this._return[ax].serialize(cxfjsutils, 'return', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_getMarkersResponse.prototype.serialize = backend_com_wsdl_getMarkersResponse_serialize;

function backend_com_wsdl_getMarkersResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getMarkersResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = backend_com_wsdl_marker_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return'));
     newobject.setReturn(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}mapPosition
//
function backend_com_wsdl_mapPosition () {
    this.typeMarker = 'backend_com_wsdl_mapPosition';
    this._latitude = 0.0;
    this._longitude = 0.0;
}

//
// accessor is backend_com_wsdl_mapPosition.prototype.getLatitude
// element get for latitude
// - element type is {http://www.w3.org/2001/XMLSchema}float
// - required element
//
// element set for latitude
// setter function is is backend_com_wsdl_mapPosition.prototype.setLatitude
//
function backend_com_wsdl_mapPosition_getLatitude() { return this._latitude;}

backend_com_wsdl_mapPosition.prototype.getLatitude = backend_com_wsdl_mapPosition_getLatitude;

function backend_com_wsdl_mapPosition_setLatitude(value) { this._latitude = value;}

backend_com_wsdl_mapPosition.prototype.setLatitude = backend_com_wsdl_mapPosition_setLatitude;
//
// accessor is backend_com_wsdl_mapPosition.prototype.getLongitude
// element get for longitude
// - element type is {http://www.w3.org/2001/XMLSchema}float
// - required element
//
// element set for longitude
// setter function is is backend_com_wsdl_mapPosition.prototype.setLongitude
//
function backend_com_wsdl_mapPosition_getLongitude() { return this._longitude;}

backend_com_wsdl_mapPosition.prototype.getLongitude = backend_com_wsdl_mapPosition_getLongitude;

function backend_com_wsdl_mapPosition_setLongitude(value) { this._longitude = value;}

backend_com_wsdl_mapPosition.prototype.setLongitude = backend_com_wsdl_mapPosition_setLongitude;
//
// Serialize {http://backend.com/wsdl}mapPosition
//
function backend_com_wsdl_mapPosition_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<latitude>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._latitude);
     xml = xml + '</latitude>';
    }
    // block for local variables
    {
     xml = xml + '<longitude>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._longitude);
     xml = xml + '</longitude>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_mapPosition.prototype.serialize = backend_com_wsdl_mapPosition_serialize;

function backend_com_wsdl_mapPosition_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_mapPosition();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing latitude');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseFloat(value);
    }
    newobject.setLatitude(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing longitude');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseFloat(value);
    }
    newobject.setLongitude(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}htmlObject
//
function backend_com_wsdl_htmlObject () {
    this.typeMarker = 'backend_com_wsdl_htmlObject';
    this._html = null;
    this._id = 0;
}

//
// accessor is backend_com_wsdl_htmlObject.prototype.getHtml
// element get for html
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for html
// setter function is is backend_com_wsdl_htmlObject.prototype.setHtml
//
function backend_com_wsdl_htmlObject_getHtml() { return this._html;}

backend_com_wsdl_htmlObject.prototype.getHtml = backend_com_wsdl_htmlObject_getHtml;

function backend_com_wsdl_htmlObject_setHtml(value) { this._html = value;}

backend_com_wsdl_htmlObject.prototype.setHtml = backend_com_wsdl_htmlObject_setHtml;
//
// accessor is backend_com_wsdl_htmlObject.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for id
// setter function is is backend_com_wsdl_htmlObject.prototype.setId
//
function backend_com_wsdl_htmlObject_getId() { return this._id;}

backend_com_wsdl_htmlObject.prototype.getId = backend_com_wsdl_htmlObject_getId;

function backend_com_wsdl_htmlObject_setId(value) { this._id = value;}

backend_com_wsdl_htmlObject.prototype.setId = backend_com_wsdl_htmlObject_setId;
//
// Serialize {http://backend.com/wsdl}htmlObject
//
function backend_com_wsdl_htmlObject_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._html != null) {
      xml = xml + '<html>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._html);
      xml = xml + '</html>';
     }
    }
    // block for local variables
    {
     xml = xml + '<id>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._id);
     xml = xml + '</id>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_htmlObject.prototype.serialize = backend_com_wsdl_htmlObject_serialize;

function backend_com_wsdl_htmlObject_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_htmlObject();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing html');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'html')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setHtml(item);
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
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}addUserResponse
//
function backend_com_wsdl_addUserResponse () {
    this.typeMarker = 'backend_com_wsdl_addUserResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_addUserResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}user
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_addUserResponse.prototype.setReturn
//
function backend_com_wsdl_addUserResponse_getReturn() { return this._return;}

backend_com_wsdl_addUserResponse.prototype.getReturn = backend_com_wsdl_addUserResponse_getReturn;

function backend_com_wsdl_addUserResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_addUserResponse.prototype.setReturn = backend_com_wsdl_addUserResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}addUserResponse
//
function backend_com_wsdl_addUserResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_addUserResponse.prototype.serialize = backend_com_wsdl_addUserResponse_serialize;

function backend_com_wsdl_addUserResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addUserResponse();
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
// Constructor for XML Schema item {http://backend.com/wsdl}getCards
//
function backend_com_wsdl_getCards () {
    this.typeMarker = 'backend_com_wsdl_getCards';
    this._arg0 = [];
}

//
// accessor is backend_com_wsdl_getCards.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
// - array
//
// element set for arg0
// setter function is is backend_com_wsdl_getCards.prototype.setArg0
//
function backend_com_wsdl_getCards_getArg0() { return this._arg0;}

backend_com_wsdl_getCards.prototype.getArg0 = backend_com_wsdl_getCards_getArg0;

function backend_com_wsdl_getCards_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_getCards.prototype.setArg0 = backend_com_wsdl_getCards_setArg0;
//
// Serialize {http://backend.com/wsdl}getCards
//
function backend_com_wsdl_getCards_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      for (var ax = 0;ax < this._arg0.length;ax ++) {
       if (this._arg0[ax] == null) {
        xml = xml + '<arg0/>';
       } else {
        xml = xml + '<arg0>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._arg0[ax]);
        xml = xml + '</arg0>';
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_getCards.prototype.serialize = backend_com_wsdl_getCards_serialize;

function backend_com_wsdl_getCards_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getCards();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = parseInt(value);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0'));
     newobject.setArg0(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}getQuestInstances
//
function backend_com_wsdl_getQuestInstances () {
    this.typeMarker = 'backend_com_wsdl_getQuestInstances';
    this._arg0 = [];
}

//
// accessor is backend_com_wsdl_getQuestInstances.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
// - array
//
// element set for arg0
// setter function is is backend_com_wsdl_getQuestInstances.prototype.setArg0
//
function backend_com_wsdl_getQuestInstances_getArg0() { return this._arg0;}

backend_com_wsdl_getQuestInstances.prototype.getArg0 = backend_com_wsdl_getQuestInstances_getArg0;

function backend_com_wsdl_getQuestInstances_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_getQuestInstances.prototype.setArg0 = backend_com_wsdl_getQuestInstances_setArg0;
//
// Serialize {http://backend.com/wsdl}getQuestInstances
//
function backend_com_wsdl_getQuestInstances_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      for (var ax = 0;ax < this._arg0.length;ax ++) {
       if (this._arg0[ax] == null) {
        xml = xml + '<arg0/>';
       } else {
        xml = xml + '<arg0>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._arg0[ax]);
        xml = xml + '</arg0>';
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_getQuestInstances.prototype.serialize = backend_com_wsdl_getQuestInstances_serialize;

function backend_com_wsdl_getQuestInstances_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getQuestInstances();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = parseInt(value);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0'));
     newobject.setArg0(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}getCardsResponse
//
function backend_com_wsdl_getCardsResponse () {
    this.typeMarker = 'backend_com_wsdl_getCardsResponse';
    this._return = [];
}

//
// accessor is backend_com_wsdl_getCardsResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}card
// - required element
// - array
//
// element set for return
// setter function is is backend_com_wsdl_getCardsResponse.prototype.setReturn
//
function backend_com_wsdl_getCardsResponse_getReturn() { return this._return;}

backend_com_wsdl_getCardsResponse.prototype.getReturn = backend_com_wsdl_getCardsResponse_getReturn;

function backend_com_wsdl_getCardsResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getCardsResponse.prototype.setReturn = backend_com_wsdl_getCardsResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getCardsResponse
//
function backend_com_wsdl_getCardsResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
      for (var ax = 0;ax < this._return.length;ax ++) {
       if (this._return[ax] == null) {
        xml = xml + '<return/>';
       } else {
        xml = xml + this._return[ax].serialize(cxfjsutils, 'return', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_getCardsResponse.prototype.serialize = backend_com_wsdl_getCardsResponse_serialize;

function backend_com_wsdl_getCardsResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getCardsResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = backend_com_wsdl_card_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return'));
     newobject.setReturn(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}addUser
//
function backend_com_wsdl_addUser () {
    this.typeMarker = 'backend_com_wsdl_addUser';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_addUser.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}user
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_addUser.prototype.setArg0
//
function backend_com_wsdl_addUser_getArg0() { return this._arg0;}

backend_com_wsdl_addUser.prototype.getArg0 = backend_com_wsdl_addUser_getArg0;

function backend_com_wsdl_addUser_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_addUser.prototype.setArg0 = backend_com_wsdl_addUser_setArg0;
//
// Serialize {http://backend.com/wsdl}addUser
//
function backend_com_wsdl_addUser_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_addUser.prototype.serialize = backend_com_wsdl_addUser_serialize;

function backend_com_wsdl_addUser_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addUser();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_user_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}markerTreePart
//
function backend_com_wsdl_markerTreePart () {
    this.typeMarker = 'backend_com_wsdl_markerTreePart';
    this._active = '';
    this._finished = '';
    this._id = 0;
    this._successors = [];
    this._version = null;
    this._marker = null;
    this._questInstanceId = 0;
}

//
// accessor is backend_com_wsdl_markerTreePart.prototype.getActive
// element get for active
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for active
// setter function is is backend_com_wsdl_markerTreePart.prototype.setActive
//
function backend_com_wsdl_markerTreePart_getActive() { return this._active;}

backend_com_wsdl_markerTreePart.prototype.getActive = backend_com_wsdl_markerTreePart_getActive;

function backend_com_wsdl_markerTreePart_setActive(value) { this._active = value;}

backend_com_wsdl_markerTreePart.prototype.setActive = backend_com_wsdl_markerTreePart_setActive;
//
// accessor is backend_com_wsdl_markerTreePart.prototype.getFinished
// element get for finished
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for finished
// setter function is is backend_com_wsdl_markerTreePart.prototype.setFinished
//
function backend_com_wsdl_markerTreePart_getFinished() { return this._finished;}

backend_com_wsdl_markerTreePart.prototype.getFinished = backend_com_wsdl_markerTreePart_getFinished;

function backend_com_wsdl_markerTreePart_setFinished(value) { this._finished = value;}

backend_com_wsdl_markerTreePart.prototype.setFinished = backend_com_wsdl_markerTreePart_setFinished;
//
// accessor is backend_com_wsdl_markerTreePart.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for id
// setter function is is backend_com_wsdl_markerTreePart.prototype.setId
//
function backend_com_wsdl_markerTreePart_getId() { return this._id;}

backend_com_wsdl_markerTreePart.prototype.getId = backend_com_wsdl_markerTreePart_getId;

function backend_com_wsdl_markerTreePart_setId(value) { this._id = value;}

backend_com_wsdl_markerTreePart.prototype.setId = backend_com_wsdl_markerTreePart_setId;
//
// accessor is backend_com_wsdl_markerTreePart.prototype.getSuccessors
// element get for successors
// - element type is {http://backend.com/wsdl}treePart
// - required element
// - array
// - nillable
//
// element set for successors
// setter function is is backend_com_wsdl_markerTreePart.prototype.setSuccessors
//
function backend_com_wsdl_markerTreePart_getSuccessors() { return this._successors;}

backend_com_wsdl_markerTreePart.prototype.getSuccessors = backend_com_wsdl_markerTreePart_getSuccessors;

function backend_com_wsdl_markerTreePart_setSuccessors(value) { this._successors = value;}

backend_com_wsdl_markerTreePart.prototype.setSuccessors = backend_com_wsdl_markerTreePart_setSuccessors;
//
// accessor is backend_com_wsdl_markerTreePart.prototype.getVersion
// element get for version
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for version
// setter function is is backend_com_wsdl_markerTreePart.prototype.setVersion
//
function backend_com_wsdl_markerTreePart_getVersion() { return this._version;}

backend_com_wsdl_markerTreePart.prototype.getVersion = backend_com_wsdl_markerTreePart_getVersion;

function backend_com_wsdl_markerTreePart_setVersion(value) { this._version = value;}

backend_com_wsdl_markerTreePart.prototype.setVersion = backend_com_wsdl_markerTreePart_setVersion;
//
// accessor is backend_com_wsdl_markerTreePart.prototype.getMarker
// element get for marker
// - element type is {http://backend.com/wsdl}marker
// - optional element
//
// element set for marker
// setter function is is backend_com_wsdl_markerTreePart.prototype.setMarker
//
function backend_com_wsdl_markerTreePart_getMarker() { return this._marker;}

backend_com_wsdl_markerTreePart.prototype.getMarker = backend_com_wsdl_markerTreePart_getMarker;

function backend_com_wsdl_markerTreePart_setMarker(value) { this._marker = value;}

backend_com_wsdl_markerTreePart.prototype.setMarker = backend_com_wsdl_markerTreePart_setMarker;
//
// accessor is backend_com_wsdl_markerTreePart.prototype.getQuestInstanceId
// element get for questInstanceId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for questInstanceId
// setter function is is backend_com_wsdl_markerTreePart.prototype.setQuestInstanceId
//
function backend_com_wsdl_markerTreePart_getQuestInstanceId() { return this._questInstanceId;}

backend_com_wsdl_markerTreePart.prototype.getQuestInstanceId = backend_com_wsdl_markerTreePart_getQuestInstanceId;

function backend_com_wsdl_markerTreePart_setQuestInstanceId(value) { this._questInstanceId = value;}

backend_com_wsdl_markerTreePart.prototype.setQuestInstanceId = backend_com_wsdl_markerTreePart_setQuestInstanceId;
//
// Serialize {http://backend.com/wsdl}markerTreePart
//
function backend_com_wsdl_markerTreePart_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<active>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._active);
     xml = xml + '</active>';
    }
    // block for local variables
    {
     xml = xml + '<finished>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._finished);
     xml = xml + '</finished>';
    }
    // block for local variables
    {
     xml = xml + '<id>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._id);
     xml = xml + '</id>';
    }
    // block for local variables
    {
     if (this._successors != null) {
      for (var ax = 0;ax < this._successors.length;ax ++) {
       if (this._successors[ax] == null) {
        xml = xml + '<successors xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._successors[ax].serialize(cxfjsutils, 'successors', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this._version != null) {
      xml = xml + '<version>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._version);
      xml = xml + '</version>';
     }
    }
    // block for local variables
    {
     if (this._marker != null) {
      xml = xml + this._marker.serialize(cxfjsutils, 'marker', null);
     }
    }
    // block for local variables
    {
     xml = xml + '<questInstanceId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._questInstanceId);
     xml = xml + '</questInstanceId>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_markerTreePart.prototype.serialize = backend_com_wsdl_markerTreePart_serialize;

function backend_com_wsdl_markerTreePart_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_markerTreePart();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing active');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setActive(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing finished');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setFinished(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
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
    cxfjsutils.trace('processing successors');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'successors')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = backend_com_wsdl_treePart_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'successors'));
     newobject.setSuccessors(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing version');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'version')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setVersion(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing marker');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'marker')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_marker_deserialize(cxfjsutils, curElement);
     }
     newobject.setMarker(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing questInstanceId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setQuestInstanceId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}updateDeckResponse
//
function backend_com_wsdl_updateDeckResponse () {
    this.typeMarker = 'backend_com_wsdl_updateDeckResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_updateDeckResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}deck
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_updateDeckResponse.prototype.setReturn
//
function backend_com_wsdl_updateDeckResponse_getReturn() { return this._return;}

backend_com_wsdl_updateDeckResponse.prototype.getReturn = backend_com_wsdl_updateDeckResponse_getReturn;

function backend_com_wsdl_updateDeckResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_updateDeckResponse.prototype.setReturn = backend_com_wsdl_updateDeckResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}updateDeckResponse
//
function backend_com_wsdl_updateDeckResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updateDeckResponse.prototype.serialize = backend_com_wsdl_updateDeckResponse_serialize;

function backend_com_wsdl_updateDeckResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateDeckResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_deck_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}monsterCard
//
function backend_com_wsdl_monsterCard () {
    this.typeMarker = 'backend_com_wsdl_monsterCard';
    this._description = null;
    this._id = 0;
    this._imageUrl = null;
    this._name = null;
    this._stars = null;
    this._version = null;
    this._actions = [];
    this._attack = null;
    this._life = null;
}

//
// accessor is backend_com_wsdl_monsterCard.prototype.getDescription
// element get for description
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for description
// setter function is is backend_com_wsdl_monsterCard.prototype.setDescription
//
function backend_com_wsdl_monsterCard_getDescription() { return this._description;}

backend_com_wsdl_monsterCard.prototype.getDescription = backend_com_wsdl_monsterCard_getDescription;

function backend_com_wsdl_monsterCard_setDescription(value) { this._description = value;}

backend_com_wsdl_monsterCard.prototype.setDescription = backend_com_wsdl_monsterCard_setDescription;
//
// accessor is backend_com_wsdl_monsterCard.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for id
// setter function is is backend_com_wsdl_monsterCard.prototype.setId
//
function backend_com_wsdl_monsterCard_getId() { return this._id;}

backend_com_wsdl_monsterCard.prototype.getId = backend_com_wsdl_monsterCard_getId;

function backend_com_wsdl_monsterCard_setId(value) { this._id = value;}

backend_com_wsdl_monsterCard.prototype.setId = backend_com_wsdl_monsterCard_setId;
//
// accessor is backend_com_wsdl_monsterCard.prototype.getImageUrl
// element get for imageUrl
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for imageUrl
// setter function is is backend_com_wsdl_monsterCard.prototype.setImageUrl
//
function backend_com_wsdl_monsterCard_getImageUrl() { return this._imageUrl;}

backend_com_wsdl_monsterCard.prototype.getImageUrl = backend_com_wsdl_monsterCard_getImageUrl;

function backend_com_wsdl_monsterCard_setImageUrl(value) { this._imageUrl = value;}

backend_com_wsdl_monsterCard.prototype.setImageUrl = backend_com_wsdl_monsterCard_setImageUrl;
//
// accessor is backend_com_wsdl_monsterCard.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for name
// setter function is is backend_com_wsdl_monsterCard.prototype.setName
//
function backend_com_wsdl_monsterCard_getName() { return this._name;}

backend_com_wsdl_monsterCard.prototype.getName = backend_com_wsdl_monsterCard_getName;

function backend_com_wsdl_monsterCard_setName(value) { this._name = value;}

backend_com_wsdl_monsterCard.prototype.setName = backend_com_wsdl_monsterCard_setName;
//
// accessor is backend_com_wsdl_monsterCard.prototype.getStars
// element get for stars
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for stars
// setter function is is backend_com_wsdl_monsterCard.prototype.setStars
//
function backend_com_wsdl_monsterCard_getStars() { return this._stars;}

backend_com_wsdl_monsterCard.prototype.getStars = backend_com_wsdl_monsterCard_getStars;

function backend_com_wsdl_monsterCard_setStars(value) { this._stars = value;}

backend_com_wsdl_monsterCard.prototype.setStars = backend_com_wsdl_monsterCard_setStars;
//
// accessor is backend_com_wsdl_monsterCard.prototype.getVersion
// element get for version
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for version
// setter function is is backend_com_wsdl_monsterCard.prototype.setVersion
//
function backend_com_wsdl_monsterCard_getVersion() { return this._version;}

backend_com_wsdl_monsterCard.prototype.getVersion = backend_com_wsdl_monsterCard_getVersion;

function backend_com_wsdl_monsterCard_setVersion(value) { this._version = value;}

backend_com_wsdl_monsterCard.prototype.setVersion = backend_com_wsdl_monsterCard_setVersion;
//
// accessor is backend_com_wsdl_monsterCard.prototype.getActions
// element get for actions
// - element type is {http://backend.com/wsdl}monsterAction
// - required element
// - array
// - nillable
//
// element set for actions
// setter function is is backend_com_wsdl_monsterCard.prototype.setActions
//
function backend_com_wsdl_monsterCard_getActions() { return this._actions;}

backend_com_wsdl_monsterCard.prototype.getActions = backend_com_wsdl_monsterCard_getActions;

function backend_com_wsdl_monsterCard_setActions(value) { this._actions = value;}

backend_com_wsdl_monsterCard.prototype.setActions = backend_com_wsdl_monsterCard_setActions;
//
// accessor is backend_com_wsdl_monsterCard.prototype.getAttack
// element get for attack
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for attack
// setter function is is backend_com_wsdl_monsterCard.prototype.setAttack
//
function backend_com_wsdl_monsterCard_getAttack() { return this._attack;}

backend_com_wsdl_monsterCard.prototype.getAttack = backend_com_wsdl_monsterCard_getAttack;

function backend_com_wsdl_monsterCard_setAttack(value) { this._attack = value;}

backend_com_wsdl_monsterCard.prototype.setAttack = backend_com_wsdl_monsterCard_setAttack;
//
// accessor is backend_com_wsdl_monsterCard.prototype.getLife
// element get for life
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for life
// setter function is is backend_com_wsdl_monsterCard.prototype.setLife
//
function backend_com_wsdl_monsterCard_getLife() { return this._life;}

backend_com_wsdl_monsterCard.prototype.getLife = backend_com_wsdl_monsterCard_getLife;

function backend_com_wsdl_monsterCard_setLife(value) { this._life = value;}

backend_com_wsdl_monsterCard.prototype.setLife = backend_com_wsdl_monsterCard_setLife;
//
// Serialize {http://backend.com/wsdl}monsterCard
//
function backend_com_wsdl_monsterCard_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._description != null) {
      xml = xml + '<description>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._description);
      xml = xml + '</description>';
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
     if (this._imageUrl != null) {
      xml = xml + '<imageUrl>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._imageUrl);
      xml = xml + '</imageUrl>';
     }
    }
    // block for local variables
    {
     if (this._name != null) {
      xml = xml + '<name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._name);
      xml = xml + '</name>';
     }
    }
    // block for local variables
    {
     if (this._stars != null) {
      xml = xml + '<stars>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._stars);
      xml = xml + '</stars>';
     }
    }
    // block for local variables
    {
     if (this._version != null) {
      xml = xml + '<version>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._version);
      xml = xml + '</version>';
     }
    }
    // block for local variables
    {
     if (this._actions != null) {
      for (var ax = 0;ax < this._actions.length;ax ++) {
       if (this._actions[ax] == null) {
        xml = xml + '<actions xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._actions[ax].serialize(cxfjsutils, 'actions', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this._attack != null) {
      xml = xml + '<attack>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._attack);
      xml = xml + '</attack>';
     }
    }
    // block for local variables
    {
     if (this._life != null) {
      xml = xml + '<life>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._life);
      xml = xml + '</life>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_monsterCard.prototype.serialize = backend_com_wsdl_monsterCard_serialize;

function backend_com_wsdl_monsterCard_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_monsterCard();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing description');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'description')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setDescription(item);
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
    cxfjsutils.trace('processing imageUrl');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'imageUrl')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setImageUrl(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'name')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setName(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing stars');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'stars')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setStars(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing version');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'version')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setVersion(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing actions');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'actions')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = backend_com_wsdl_monsterAction_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'actions'));
     newobject.setActions(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing attack');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'attack')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setAttack(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing life');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'life')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setLife(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}addQuest
//
function backend_com_wsdl_addQuest () {
    this.typeMarker = 'backend_com_wsdl_addQuest';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_addQuest.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}quest
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_addQuest.prototype.setArg0
//
function backend_com_wsdl_addQuest_getArg0() { return this._arg0;}

backend_com_wsdl_addQuest.prototype.getArg0 = backend_com_wsdl_addQuest_getArg0;

function backend_com_wsdl_addQuest_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_addQuest.prototype.setArg0 = backend_com_wsdl_addQuest_setArg0;
//
// Serialize {http://backend.com/wsdl}addQuest
//
function backend_com_wsdl_addQuest_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_addQuest.prototype.serialize = backend_com_wsdl_addQuest_serialize;

function backend_com_wsdl_addQuest_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addQuest();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_quest_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}getCardResponse
//
function backend_com_wsdl_getCardResponse () {
    this.typeMarker = 'backend_com_wsdl_getCardResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_getCardResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}card
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_getCardResponse.prototype.setReturn
//
function backend_com_wsdl_getCardResponse_getReturn() { return this._return;}

backend_com_wsdl_getCardResponse.prototype.getReturn = backend_com_wsdl_getCardResponse_getReturn;

function backend_com_wsdl_getCardResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getCardResponse.prototype.setReturn = backend_com_wsdl_getCardResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getCardResponse
//
function backend_com_wsdl_getCardResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getCardResponse.prototype.serialize = backend_com_wsdl_getCardResponse_serialize;

function backend_com_wsdl_getCardResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getCardResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_card_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}getAllMonsterActions
//
function backend_com_wsdl_getAllMonsterActions () {
    this.typeMarker = 'backend_com_wsdl_getAllMonsterActions';
}

//
// Serialize {http://backend.com/wsdl}getAllMonsterActions
//
function backend_com_wsdl_getAllMonsterActions_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getAllMonsterActions.prototype.serialize = backend_com_wsdl_getAllMonsterActions_serialize;

function backend_com_wsdl_getAllMonsterActions_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getAllMonsterActions();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}deleteSpellCard
//
function backend_com_wsdl_deleteSpellCard () {
    this.typeMarker = 'backend_com_wsdl_deleteSpellCard';
    this._arg0 = 0;
}

//
// accessor is backend_com_wsdl_deleteSpellCard.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_deleteSpellCard.prototype.setArg0
//
function backend_com_wsdl_deleteSpellCard_getArg0() { return this._arg0;}

backend_com_wsdl_deleteSpellCard.prototype.getArg0 = backend_com_wsdl_deleteSpellCard_getArg0;

function backend_com_wsdl_deleteSpellCard_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_deleteSpellCard.prototype.setArg0 = backend_com_wsdl_deleteSpellCard_setArg0;
//
// Serialize {http://backend.com/wsdl}deleteSpellCard
//
function backend_com_wsdl_deleteSpellCard_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_deleteSpellCard.prototype.serialize = backend_com_wsdl_deleteSpellCard_serialize;

function backend_com_wsdl_deleteSpellCard_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_deleteSpellCard();
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
// Constructor for XML Schema item {http://backend.com/wsdl}getMarkerResponse
//
function backend_com_wsdl_getMarkerResponse () {
    this.typeMarker = 'backend_com_wsdl_getMarkerResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_getMarkerResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}marker
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_getMarkerResponse.prototype.setReturn
//
function backend_com_wsdl_getMarkerResponse_getReturn() { return this._return;}

backend_com_wsdl_getMarkerResponse.prototype.getReturn = backend_com_wsdl_getMarkerResponse_getReturn;

function backend_com_wsdl_getMarkerResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getMarkerResponse.prototype.setReturn = backend_com_wsdl_getMarkerResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getMarkerResponse
//
function backend_com_wsdl_getMarkerResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getMarkerResponse.prototype.serialize = backend_com_wsdl_getMarkerResponse_serialize;

function backend_com_wsdl_getMarkerResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getMarkerResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_marker_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}getActionResponse
//
function backend_com_wsdl_getActionResponse () {
    this.typeMarker = 'backend_com_wsdl_getActionResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_getActionResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}action
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_getActionResponse.prototype.setReturn
//
function backend_com_wsdl_getActionResponse_getReturn() { return this._return;}

backend_com_wsdl_getActionResponse.prototype.getReturn = backend_com_wsdl_getActionResponse_getReturn;

function backend_com_wsdl_getActionResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getActionResponse.prototype.setReturn = backend_com_wsdl_getActionResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getActionResponse
//
function backend_com_wsdl_getActionResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getActionResponse.prototype.serialize = backend_com_wsdl_getActionResponse_serialize;

function backend_com_wsdl_getActionResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getActionResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_action_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}deleteMonsterCardResponse
//
function backend_com_wsdl_deleteMonsterCardResponse () {
    this.typeMarker = 'backend_com_wsdl_deleteMonsterCardResponse';
}

//
// Serialize {http://backend.com/wsdl}deleteMonsterCardResponse
//
function backend_com_wsdl_deleteMonsterCardResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_deleteMonsterCardResponse.prototype.serialize = backend_com_wsdl_deleteMonsterCardResponse_serialize;

function backend_com_wsdl_deleteMonsterCardResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_deleteMonsterCardResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}updateMonsterActionResponse
//
function backend_com_wsdl_updateMonsterActionResponse () {
    this.typeMarker = 'backend_com_wsdl_updateMonsterActionResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_updateMonsterActionResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}monsterAction
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_updateMonsterActionResponse.prototype.setReturn
//
function backend_com_wsdl_updateMonsterActionResponse_getReturn() { return this._return;}

backend_com_wsdl_updateMonsterActionResponse.prototype.getReturn = backend_com_wsdl_updateMonsterActionResponse_getReturn;

function backend_com_wsdl_updateMonsterActionResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_updateMonsterActionResponse.prototype.setReturn = backend_com_wsdl_updateMonsterActionResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}updateMonsterActionResponse
//
function backend_com_wsdl_updateMonsterActionResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updateMonsterActionResponse.prototype.serialize = backend_com_wsdl_updateMonsterActionResponse_serialize;

function backend_com_wsdl_updateMonsterActionResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateMonsterActionResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_monsterAction_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}fightMarker
//
function backend_com_wsdl_fightMarker () {
    this.typeMarker = 'backend_com_wsdl_fightMarker';
    this._htmlId = 0;
    this._id = 0;
    this._name = null;
    this._position = null;
    this._version = null;
}

//
// accessor is backend_com_wsdl_fightMarker.prototype.getHtmlId
// element get for htmlId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for htmlId
// setter function is is backend_com_wsdl_fightMarker.prototype.setHtmlId
//
function backend_com_wsdl_fightMarker_getHtmlId() { return this._htmlId;}

backend_com_wsdl_fightMarker.prototype.getHtmlId = backend_com_wsdl_fightMarker_getHtmlId;

function backend_com_wsdl_fightMarker_setHtmlId(value) { this._htmlId = value;}

backend_com_wsdl_fightMarker.prototype.setHtmlId = backend_com_wsdl_fightMarker_setHtmlId;
//
// accessor is backend_com_wsdl_fightMarker.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for id
// setter function is is backend_com_wsdl_fightMarker.prototype.setId
//
function backend_com_wsdl_fightMarker_getId() { return this._id;}

backend_com_wsdl_fightMarker.prototype.getId = backend_com_wsdl_fightMarker_getId;

function backend_com_wsdl_fightMarker_setId(value) { this._id = value;}

backend_com_wsdl_fightMarker.prototype.setId = backend_com_wsdl_fightMarker_setId;
//
// accessor is backend_com_wsdl_fightMarker.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for name
// setter function is is backend_com_wsdl_fightMarker.prototype.setName
//
function backend_com_wsdl_fightMarker_getName() { return this._name;}

backend_com_wsdl_fightMarker.prototype.getName = backend_com_wsdl_fightMarker_getName;

function backend_com_wsdl_fightMarker_setName(value) { this._name = value;}

backend_com_wsdl_fightMarker.prototype.setName = backend_com_wsdl_fightMarker_setName;
//
// accessor is backend_com_wsdl_fightMarker.prototype.getPosition
// element get for position
// - element type is {http://backend.com/wsdl}mapPosition
// - optional element
//
// element set for position
// setter function is is backend_com_wsdl_fightMarker.prototype.setPosition
//
function backend_com_wsdl_fightMarker_getPosition() { return this._position;}

backend_com_wsdl_fightMarker.prototype.getPosition = backend_com_wsdl_fightMarker_getPosition;

function backend_com_wsdl_fightMarker_setPosition(value) { this._position = value;}

backend_com_wsdl_fightMarker.prototype.setPosition = backend_com_wsdl_fightMarker_setPosition;
//
// accessor is backend_com_wsdl_fightMarker.prototype.getVersion
// element get for version
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for version
// setter function is is backend_com_wsdl_fightMarker.prototype.setVersion
//
function backend_com_wsdl_fightMarker_getVersion() { return this._version;}

backend_com_wsdl_fightMarker.prototype.getVersion = backend_com_wsdl_fightMarker_getVersion;

function backend_com_wsdl_fightMarker_setVersion(value) { this._version = value;}

backend_com_wsdl_fightMarker.prototype.setVersion = backend_com_wsdl_fightMarker_setVersion;
//
// Serialize {http://backend.com/wsdl}fightMarker
//
function backend_com_wsdl_fightMarker_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<htmlId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._htmlId);
     xml = xml + '</htmlId>';
    }
    // block for local variables
    {
     xml = xml + '<id>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._id);
     xml = xml + '</id>';
    }
    // block for local variables
    {
     if (this._name != null) {
      xml = xml + '<name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._name);
      xml = xml + '</name>';
     }
    }
    // block for local variables
    {
     if (this._position != null) {
      xml = xml + this._position.serialize(cxfjsutils, 'position', null);
     }
    }
    // block for local variables
    {
     if (this._version != null) {
      xml = xml + '<version>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._version);
      xml = xml + '</version>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_fightMarker.prototype.serialize = backend_com_wsdl_fightMarker_serialize;

function backend_com_wsdl_fightMarker_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_fightMarker();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing htmlId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setHtmlId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
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
    cxfjsutils.trace('processing name');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'name')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setName(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing position');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'position')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_mapPosition_deserialize(cxfjsutils, curElement);
     }
     newobject.setPosition(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing version');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'version')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setVersion(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}getSpellActionResponse
//
function backend_com_wsdl_getSpellActionResponse () {
    this.typeMarker = 'backend_com_wsdl_getSpellActionResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_getSpellActionResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}spellAction
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_getSpellActionResponse.prototype.setReturn
//
function backend_com_wsdl_getSpellActionResponse_getReturn() { return this._return;}

backend_com_wsdl_getSpellActionResponse.prototype.getReturn = backend_com_wsdl_getSpellActionResponse_getReturn;

function backend_com_wsdl_getSpellActionResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getSpellActionResponse.prototype.setReturn = backend_com_wsdl_getSpellActionResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getSpellActionResponse
//
function backend_com_wsdl_getSpellActionResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getSpellActionResponse.prototype.serialize = backend_com_wsdl_getSpellActionResponse_serialize;

function backend_com_wsdl_getSpellActionResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getSpellActionResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_spellAction_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}getQuestsResponse
//
function backend_com_wsdl_getQuestsResponse () {
    this.typeMarker = 'backend_com_wsdl_getQuestsResponse';
    this._return = [];
}

//
// accessor is backend_com_wsdl_getQuestsResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}quest
// - required element
// - array
//
// element set for return
// setter function is is backend_com_wsdl_getQuestsResponse.prototype.setReturn
//
function backend_com_wsdl_getQuestsResponse_getReturn() { return this._return;}

backend_com_wsdl_getQuestsResponse.prototype.getReturn = backend_com_wsdl_getQuestsResponse_getReturn;

function backend_com_wsdl_getQuestsResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getQuestsResponse.prototype.setReturn = backend_com_wsdl_getQuestsResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getQuestsResponse
//
function backend_com_wsdl_getQuestsResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
      for (var ax = 0;ax < this._return.length;ax ++) {
       if (this._return[ax] == null) {
        xml = xml + '<return/>';
       } else {
        xml = xml + this._return[ax].serialize(cxfjsutils, 'return', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_getQuestsResponse.prototype.serialize = backend_com_wsdl_getQuestsResponse_serialize;

function backend_com_wsdl_getQuestsResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getQuestsResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = backend_com_wsdl_quest_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return'));
     newobject.setReturn(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}addAndTreePartResponse
//
function backend_com_wsdl_addAndTreePartResponse () {
    this.typeMarker = 'backend_com_wsdl_addAndTreePartResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_addAndTreePartResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}andTreePart
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_addAndTreePartResponse.prototype.setReturn
//
function backend_com_wsdl_addAndTreePartResponse_getReturn() { return this._return;}

backend_com_wsdl_addAndTreePartResponse.prototype.getReturn = backend_com_wsdl_addAndTreePartResponse_getReturn;

function backend_com_wsdl_addAndTreePartResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_addAndTreePartResponse.prototype.setReturn = backend_com_wsdl_addAndTreePartResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}addAndTreePartResponse
//
function backend_com_wsdl_addAndTreePartResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_addAndTreePartResponse.prototype.serialize = backend_com_wsdl_addAndTreePartResponse_serialize;

function backend_com_wsdl_addAndTreePartResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addAndTreePartResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_andTreePart_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}deleteTreePartResponse
//
function backend_com_wsdl_deleteTreePartResponse () {
    this.typeMarker = 'backend_com_wsdl_deleteTreePartResponse';
}

//
// Serialize {http://backend.com/wsdl}deleteTreePartResponse
//
function backend_com_wsdl_deleteTreePartResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_deleteTreePartResponse.prototype.serialize = backend_com_wsdl_deleteTreePartResponse_serialize;

function backend_com_wsdl_deleteTreePartResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_deleteTreePartResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}monsterAction
//
function backend_com_wsdl_monsterAction () {
    this.typeMarker = 'backend_com_wsdl_monsterAction';
    this._amount = 0.0;
    this._descriptions = null;
    this._duration = null;
    this._id = 0;
    this._isMultipier = '';
    this._names = null;
    this._starCosts = 0.0;
    this._hasMaxUsage = '';
    this._lifeCosts = null;
    this._maxUsage = null;
    this._type = null;
}

//
// accessor is backend_com_wsdl_monsterAction.prototype.getAmount
// element get for amount
// - element type is {http://www.w3.org/2001/XMLSchema}float
// - required element
//
// element set for amount
// setter function is is backend_com_wsdl_monsterAction.prototype.setAmount
//
function backend_com_wsdl_monsterAction_getAmount() { return this._amount;}

backend_com_wsdl_monsterAction.prototype.getAmount = backend_com_wsdl_monsterAction_getAmount;

function backend_com_wsdl_monsterAction_setAmount(value) { this._amount = value;}

backend_com_wsdl_monsterAction.prototype.setAmount = backend_com_wsdl_monsterAction_setAmount;
//
// accessor is backend_com_wsdl_monsterAction.prototype.getDescriptions
// element get for descriptions
// - element type is null
// - required element
//
// element set for descriptions
// setter function is is backend_com_wsdl_monsterAction.prototype.setDescriptions
//
function backend_com_wsdl_monsterAction_getDescriptions() { return this._descriptions;}

backend_com_wsdl_monsterAction.prototype.getDescriptions = backend_com_wsdl_monsterAction_getDescriptions;

function backend_com_wsdl_monsterAction_setDescriptions(value) { this._descriptions = value;}

backend_com_wsdl_monsterAction.prototype.setDescriptions = backend_com_wsdl_monsterAction_setDescriptions;
//
// accessor is backend_com_wsdl_monsterAction.prototype.getDuration
// element get for duration
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for duration
// setter function is is backend_com_wsdl_monsterAction.prototype.setDuration
//
function backend_com_wsdl_monsterAction_getDuration() { return this._duration;}

backend_com_wsdl_monsterAction.prototype.getDuration = backend_com_wsdl_monsterAction_getDuration;

function backend_com_wsdl_monsterAction_setDuration(value) { this._duration = value;}

backend_com_wsdl_monsterAction.prototype.setDuration = backend_com_wsdl_monsterAction_setDuration;
//
// accessor is backend_com_wsdl_monsterAction.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for id
// setter function is is backend_com_wsdl_monsterAction.prototype.setId
//
function backend_com_wsdl_monsterAction_getId() { return this._id;}

backend_com_wsdl_monsterAction.prototype.getId = backend_com_wsdl_monsterAction_getId;

function backend_com_wsdl_monsterAction_setId(value) { this._id = value;}

backend_com_wsdl_monsterAction.prototype.setId = backend_com_wsdl_monsterAction_setId;
//
// accessor is backend_com_wsdl_monsterAction.prototype.getIsMultipier
// element get for isMultipier
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for isMultipier
// setter function is is backend_com_wsdl_monsterAction.prototype.setIsMultipier
//
function backend_com_wsdl_monsterAction_getIsMultipier() { return this._isMultipier;}

backend_com_wsdl_monsterAction.prototype.getIsMultipier = backend_com_wsdl_monsterAction_getIsMultipier;

function backend_com_wsdl_monsterAction_setIsMultipier(value) { this._isMultipier = value;}

backend_com_wsdl_monsterAction.prototype.setIsMultipier = backend_com_wsdl_monsterAction_setIsMultipier;
//
// accessor is backend_com_wsdl_monsterAction.prototype.getNames
// element get for names
// - element type is null
// - required element
//
// element set for names
// setter function is is backend_com_wsdl_monsterAction.prototype.setNames
//
function backend_com_wsdl_monsterAction_getNames() { return this._names;}

backend_com_wsdl_monsterAction.prototype.getNames = backend_com_wsdl_monsterAction_getNames;

function backend_com_wsdl_monsterAction_setNames(value) { this._names = value;}

backend_com_wsdl_monsterAction.prototype.setNames = backend_com_wsdl_monsterAction_setNames;
//
// accessor is backend_com_wsdl_monsterAction.prototype.getStarCosts
// element get for starCosts
// - element type is {http://www.w3.org/2001/XMLSchema}float
// - required element
//
// element set for starCosts
// setter function is is backend_com_wsdl_monsterAction.prototype.setStarCosts
//
function backend_com_wsdl_monsterAction_getStarCosts() { return this._starCosts;}

backend_com_wsdl_monsterAction.prototype.getStarCosts = backend_com_wsdl_monsterAction_getStarCosts;

function backend_com_wsdl_monsterAction_setStarCosts(value) { this._starCosts = value;}

backend_com_wsdl_monsterAction.prototype.setStarCosts = backend_com_wsdl_monsterAction_setStarCosts;
//
// accessor is backend_com_wsdl_monsterAction.prototype.getHasMaxUsage
// element get for hasMaxUsage
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for hasMaxUsage
// setter function is is backend_com_wsdl_monsterAction.prototype.setHasMaxUsage
//
function backend_com_wsdl_monsterAction_getHasMaxUsage() { return this._hasMaxUsage;}

backend_com_wsdl_monsterAction.prototype.getHasMaxUsage = backend_com_wsdl_monsterAction_getHasMaxUsage;

function backend_com_wsdl_monsterAction_setHasMaxUsage(value) { this._hasMaxUsage = value;}

backend_com_wsdl_monsterAction.prototype.setHasMaxUsage = backend_com_wsdl_monsterAction_setHasMaxUsage;
//
// accessor is backend_com_wsdl_monsterAction.prototype.getLifeCosts
// element get for lifeCosts
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for lifeCosts
// setter function is is backend_com_wsdl_monsterAction.prototype.setLifeCosts
//
function backend_com_wsdl_monsterAction_getLifeCosts() { return this._lifeCosts;}

backend_com_wsdl_monsterAction.prototype.getLifeCosts = backend_com_wsdl_monsterAction_getLifeCosts;

function backend_com_wsdl_monsterAction_setLifeCosts(value) { this._lifeCosts = value;}

backend_com_wsdl_monsterAction.prototype.setLifeCosts = backend_com_wsdl_monsterAction_setLifeCosts;
//
// accessor is backend_com_wsdl_monsterAction.prototype.getMaxUsage
// element get for maxUsage
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for maxUsage
// setter function is is backend_com_wsdl_monsterAction.prototype.setMaxUsage
//
function backend_com_wsdl_monsterAction_getMaxUsage() { return this._maxUsage;}

backend_com_wsdl_monsterAction.prototype.getMaxUsage = backend_com_wsdl_monsterAction_getMaxUsage;

function backend_com_wsdl_monsterAction_setMaxUsage(value) { this._maxUsage = value;}

backend_com_wsdl_monsterAction.prototype.setMaxUsage = backend_com_wsdl_monsterAction_setMaxUsage;
//
// accessor is backend_com_wsdl_monsterAction.prototype.getType
// element get for type
// - element type is {http://backend.com/wsdl}monsterActionType
// - optional element
//
// element set for type
// setter function is is backend_com_wsdl_monsterAction.prototype.setType
//
function backend_com_wsdl_monsterAction_getType() { return this._type;}

backend_com_wsdl_monsterAction.prototype.getType = backend_com_wsdl_monsterAction_getType;

function backend_com_wsdl_monsterAction_setType(value) { this._type = value;}

backend_com_wsdl_monsterAction.prototype.setType = backend_com_wsdl_monsterAction_setType;
//
// Serialize {http://backend.com/wsdl}monsterAction
//
function backend_com_wsdl_monsterAction_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<amount>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._amount);
     xml = xml + '</amount>';
    }
    // block for local variables
    {
     xml = xml + this._descriptions.serialize(cxfjsutils, 'descriptions', null);
    }
    // block for local variables
    {
     if (this._duration != null) {
      xml = xml + '<duration>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._duration);
      xml = xml + '</duration>';
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
     xml = xml + '<isMultipier>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._isMultipier);
     xml = xml + '</isMultipier>';
    }
    // block for local variables
    {
     xml = xml + this._names.serialize(cxfjsutils, 'names', null);
    }
    // block for local variables
    {
     xml = xml + '<starCosts>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._starCosts);
     xml = xml + '</starCosts>';
    }
    // block for local variables
    {
     xml = xml + '<hasMaxUsage>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._hasMaxUsage);
     xml = xml + '</hasMaxUsage>';
    }
    // block for local variables
    {
     if (this._lifeCosts != null) {
      xml = xml + '<lifeCosts>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._lifeCosts);
      xml = xml + '</lifeCosts>';
     }
    }
    // block for local variables
    {
     if (this._maxUsage != null) {
      xml = xml + '<maxUsage>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._maxUsage);
      xml = xml + '</maxUsage>';
     }
    }
    // block for local variables
    {
     if (this._type != null) {
      xml = xml + '<type>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._type);
      xml = xml + '</type>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_monsterAction.prototype.serialize = backend_com_wsdl_monsterAction_serialize;

function backend_com_wsdl_monsterAction_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_monsterAction();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing amount');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseFloat(value);
    }
    newobject.setAmount(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing descriptions');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = backend_com_wsdl_descriptions_deserialize(cxfjsutils, curElement);
    }
    newobject.setDescriptions(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing duration');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'duration')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setDuration(item);
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
    cxfjsutils.trace('processing isMultipier');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setIsMultipier(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing names');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = backend_com_wsdl_names_deserialize(cxfjsutils, curElement);
    }
    newobject.setNames(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing starCosts');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseFloat(value);
    }
    newobject.setStarCosts(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing hasMaxUsage');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setHasMaxUsage(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing lifeCosts');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'lifeCosts')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setLifeCosts(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing maxUsage');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'maxUsage')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setMaxUsage(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing type');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'type')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setType(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}getTreePartResponse
//
function backend_com_wsdl_getTreePartResponse () {
    this.typeMarker = 'backend_com_wsdl_getTreePartResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_getTreePartResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}treePart
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_getTreePartResponse.prototype.setReturn
//
function backend_com_wsdl_getTreePartResponse_getReturn() { return this._return;}

backend_com_wsdl_getTreePartResponse.prototype.getReturn = backend_com_wsdl_getTreePartResponse_getReturn;

function backend_com_wsdl_getTreePartResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getTreePartResponse.prototype.setReturn = backend_com_wsdl_getTreePartResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getTreePartResponse
//
function backend_com_wsdl_getTreePartResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getTreePartResponse.prototype.serialize = backend_com_wsdl_getTreePartResponse_serialize;

function backend_com_wsdl_getTreePartResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getTreePartResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_treePart_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}addOrTreePart
//
function backend_com_wsdl_addOrTreePart () {
    this.typeMarker = 'backend_com_wsdl_addOrTreePart';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_addOrTreePart.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}orTreePart
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_addOrTreePart.prototype.setArg0
//
function backend_com_wsdl_addOrTreePart_getArg0() { return this._arg0;}

backend_com_wsdl_addOrTreePart.prototype.getArg0 = backend_com_wsdl_addOrTreePart_getArg0;

function backend_com_wsdl_addOrTreePart_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_addOrTreePart.prototype.setArg0 = backend_com_wsdl_addOrTreePart_setArg0;
//
// Serialize {http://backend.com/wsdl}addOrTreePart
//
function backend_com_wsdl_addOrTreePart_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_addOrTreePart.prototype.serialize = backend_com_wsdl_addOrTreePart_serialize;

function backend_com_wsdl_addOrTreePart_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addOrTreePart();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_orTreePart_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}addAndTreePart
//
function backend_com_wsdl_addAndTreePart () {
    this.typeMarker = 'backend_com_wsdl_addAndTreePart';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_addAndTreePart.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}andTreePart
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_addAndTreePart.prototype.setArg0
//
function backend_com_wsdl_addAndTreePart_getArg0() { return this._arg0;}

backend_com_wsdl_addAndTreePart.prototype.getArg0 = backend_com_wsdl_addAndTreePart_getArg0;

function backend_com_wsdl_addAndTreePart_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_addAndTreePart.prototype.setArg0 = backend_com_wsdl_addAndTreePart_setArg0;
//
// Serialize {http://backend.com/wsdl}addAndTreePart
//
function backend_com_wsdl_addAndTreePart_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_addAndTreePart.prototype.serialize = backend_com_wsdl_addAndTreePart_serialize;

function backend_com_wsdl_addAndTreePart_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addAndTreePart();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_andTreePart_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}getSpellAction
//
function backend_com_wsdl_getSpellAction () {
    this.typeMarker = 'backend_com_wsdl_getSpellAction';
    this._arg0 = 0;
}

//
// accessor is backend_com_wsdl_getSpellAction.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_getSpellAction.prototype.setArg0
//
function backend_com_wsdl_getSpellAction_getArg0() { return this._arg0;}

backend_com_wsdl_getSpellAction.prototype.getArg0 = backend_com_wsdl_getSpellAction_getArg0;

function backend_com_wsdl_getSpellAction_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_getSpellAction.prototype.setArg0 = backend_com_wsdl_getSpellAction_setArg0;
//
// Serialize {http://backend.com/wsdl}getSpellAction
//
function backend_com_wsdl_getSpellAction_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getSpellAction.prototype.serialize = backend_com_wsdl_getSpellAction_serialize;

function backend_com_wsdl_getSpellAction_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getSpellAction();
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
// Constructor for XML Schema item {http://backend.com/wsdl}getCard
//
function backend_com_wsdl_getCard () {
    this.typeMarker = 'backend_com_wsdl_getCard';
    this._arg0 = 0;
}

//
// accessor is backend_com_wsdl_getCard.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_getCard.prototype.setArg0
//
function backend_com_wsdl_getCard_getArg0() { return this._arg0;}

backend_com_wsdl_getCard.prototype.getArg0 = backend_com_wsdl_getCard_getArg0;

function backend_com_wsdl_getCard_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_getCard.prototype.setArg0 = backend_com_wsdl_getCard_setArg0;
//
// Serialize {http://backend.com/wsdl}getCard
//
function backend_com_wsdl_getCard_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getCard.prototype.serialize = backend_com_wsdl_getCard_serialize;

function backend_com_wsdl_getCard_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getCard();
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
// Constructor for XML Schema item {http://backend.com/wsdl}deleteQuestInstance
//
function backend_com_wsdl_deleteQuestInstance () {
    this.typeMarker = 'backend_com_wsdl_deleteQuestInstance';
    this._arg0 = 0;
}

//
// accessor is backend_com_wsdl_deleteQuestInstance.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_deleteQuestInstance.prototype.setArg0
//
function backend_com_wsdl_deleteQuestInstance_getArg0() { return this._arg0;}

backend_com_wsdl_deleteQuestInstance.prototype.getArg0 = backend_com_wsdl_deleteQuestInstance_getArg0;

function backend_com_wsdl_deleteQuestInstance_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_deleteQuestInstance.prototype.setArg0 = backend_com_wsdl_deleteQuestInstance_setArg0;
//
// Serialize {http://backend.com/wsdl}deleteQuestInstance
//
function backend_com_wsdl_deleteQuestInstance_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_deleteQuestInstance.prototype.serialize = backend_com_wsdl_deleteQuestInstance_serialize;

function backend_com_wsdl_deleteQuestInstance_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_deleteQuestInstance();
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
// Constructor for XML Schema item {http://backend.com/wsdl}getQuest
//
function backend_com_wsdl_getQuest () {
    this.typeMarker = 'backend_com_wsdl_getQuest';
    this._arg0 = 0;
}

//
// accessor is backend_com_wsdl_getQuest.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_getQuest.prototype.setArg0
//
function backend_com_wsdl_getQuest_getArg0() { return this._arg0;}

backend_com_wsdl_getQuest.prototype.getArg0 = backend_com_wsdl_getQuest_getArg0;

function backend_com_wsdl_getQuest_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_getQuest.prototype.setArg0 = backend_com_wsdl_getQuest_setArg0;
//
// Serialize {http://backend.com/wsdl}getQuest
//
function backend_com_wsdl_getQuest_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getQuest.prototype.serialize = backend_com_wsdl_getQuest_serialize;

function backend_com_wsdl_getQuest_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getQuest();
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
// Constructor for XML Schema item {http://backend.com/wsdl}deleteMonsterCard
//
function backend_com_wsdl_deleteMonsterCard () {
    this.typeMarker = 'backend_com_wsdl_deleteMonsterCard';
    this._arg0 = 0;
}

//
// accessor is backend_com_wsdl_deleteMonsterCard.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_deleteMonsterCard.prototype.setArg0
//
function backend_com_wsdl_deleteMonsterCard_getArg0() { return this._arg0;}

backend_com_wsdl_deleteMonsterCard.prototype.getArg0 = backend_com_wsdl_deleteMonsterCard_getArg0;

function backend_com_wsdl_deleteMonsterCard_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_deleteMonsterCard.prototype.setArg0 = backend_com_wsdl_deleteMonsterCard_setArg0;
//
// Serialize {http://backend.com/wsdl}deleteMonsterCard
//
function backend_com_wsdl_deleteMonsterCard_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_deleteMonsterCard.prototype.serialize = backend_com_wsdl_deleteMonsterCard_serialize;

function backend_com_wsdl_deleteMonsterCard_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_deleteMonsterCard();
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
// Constructor for XML Schema item {http://backend.com/wsdl}updateAndTreePartResponse
//
function backend_com_wsdl_updateAndTreePartResponse () {
    this.typeMarker = 'backend_com_wsdl_updateAndTreePartResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_updateAndTreePartResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}andTreePart
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_updateAndTreePartResponse.prototype.setReturn
//
function backend_com_wsdl_updateAndTreePartResponse_getReturn() { return this._return;}

backend_com_wsdl_updateAndTreePartResponse.prototype.getReturn = backend_com_wsdl_updateAndTreePartResponse_getReturn;

function backend_com_wsdl_updateAndTreePartResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_updateAndTreePartResponse.prototype.setReturn = backend_com_wsdl_updateAndTreePartResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}updateAndTreePartResponse
//
function backend_com_wsdl_updateAndTreePartResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updateAndTreePartResponse.prototype.serialize = backend_com_wsdl_updateAndTreePartResponse_serialize;

function backend_com_wsdl_updateAndTreePartResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateAndTreePartResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_andTreePart_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}getActionsResponse
//
function backend_com_wsdl_getActionsResponse () {
    this.typeMarker = 'backend_com_wsdl_getActionsResponse';
    this._return = [];
}

//
// accessor is backend_com_wsdl_getActionsResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}action
// - required element
// - array
//
// element set for return
// setter function is is backend_com_wsdl_getActionsResponse.prototype.setReturn
//
function backend_com_wsdl_getActionsResponse_getReturn() { return this._return;}

backend_com_wsdl_getActionsResponse.prototype.getReturn = backend_com_wsdl_getActionsResponse_getReturn;

function backend_com_wsdl_getActionsResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getActionsResponse.prototype.setReturn = backend_com_wsdl_getActionsResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getActionsResponse
//
function backend_com_wsdl_getActionsResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
      for (var ax = 0;ax < this._return.length;ax ++) {
       if (this._return[ax] == null) {
        xml = xml + '<return/>';
       } else {
        xml = xml + this._return[ax].serialize(cxfjsutils, 'return', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_getActionsResponse.prototype.serialize = backend_com_wsdl_getActionsResponse_serialize;

function backend_com_wsdl_getActionsResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getActionsResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = backend_com_wsdl_action_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return'));
     newobject.setReturn(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}deleteTreePart
//
function backend_com_wsdl_deleteTreePart () {
    this.typeMarker = 'backend_com_wsdl_deleteTreePart';
    this._arg0 = 0;
}

//
// accessor is backend_com_wsdl_deleteTreePart.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_deleteTreePart.prototype.setArg0
//
function backend_com_wsdl_deleteTreePart_getArg0() { return this._arg0;}

backend_com_wsdl_deleteTreePart.prototype.getArg0 = backend_com_wsdl_deleteTreePart_getArg0;

function backend_com_wsdl_deleteTreePart_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_deleteTreePart.prototype.setArg0 = backend_com_wsdl_deleteTreePart_setArg0;
//
// Serialize {http://backend.com/wsdl}deleteTreePart
//
function backend_com_wsdl_deleteTreePart_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_deleteTreePart.prototype.serialize = backend_com_wsdl_deleteTreePart_serialize;

function backend_com_wsdl_deleteTreePart_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_deleteTreePart();
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
// Simple type (enumeration) {http://backend.com/wsdl}spellActionType
//
// - DAMAGE
// - DECREASE_ATTACK
// - DOT
// - DRAW_CARDS
// - BANN_MAGIC
// - INCREASE_ATTACK
// - HEAL
// - INCREASE_LIFE
// - SLEEP
//
// Constructor for XML Schema item {http://backend.com/wsdl}getAllSpellActions
//
function backend_com_wsdl_getAllSpellActions () {
    this.typeMarker = 'backend_com_wsdl_getAllSpellActions';
}

//
// Serialize {http://backend.com/wsdl}getAllSpellActions
//
function backend_com_wsdl_getAllSpellActions_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getAllSpellActions.prototype.serialize = backend_com_wsdl_getAllSpellActions_serialize;

function backend_com_wsdl_getAllSpellActions_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getAllSpellActions();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}updateFightMarkerResponse
//
function backend_com_wsdl_updateFightMarkerResponse () {
    this.typeMarker = 'backend_com_wsdl_updateFightMarkerResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_updateFightMarkerResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}fightMarker
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_updateFightMarkerResponse.prototype.setReturn
//
function backend_com_wsdl_updateFightMarkerResponse_getReturn() { return this._return;}

backend_com_wsdl_updateFightMarkerResponse.prototype.getReturn = backend_com_wsdl_updateFightMarkerResponse_getReturn;

function backend_com_wsdl_updateFightMarkerResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_updateFightMarkerResponse.prototype.setReturn = backend_com_wsdl_updateFightMarkerResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}updateFightMarkerResponse
//
function backend_com_wsdl_updateFightMarkerResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updateFightMarkerResponse.prototype.serialize = backend_com_wsdl_updateFightMarkerResponse_serialize;

function backend_com_wsdl_updateFightMarkerResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateFightMarkerResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_fightMarker_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}addOrTreePartResponse
//
function backend_com_wsdl_addOrTreePartResponse () {
    this.typeMarker = 'backend_com_wsdl_addOrTreePartResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_addOrTreePartResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}orTreePart
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_addOrTreePartResponse.prototype.setReturn
//
function backend_com_wsdl_addOrTreePartResponse_getReturn() { return this._return;}

backend_com_wsdl_addOrTreePartResponse.prototype.getReturn = backend_com_wsdl_addOrTreePartResponse_getReturn;

function backend_com_wsdl_addOrTreePartResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_addOrTreePartResponse.prototype.setReturn = backend_com_wsdl_addOrTreePartResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}addOrTreePartResponse
//
function backend_com_wsdl_addOrTreePartResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_addOrTreePartResponse.prototype.serialize = backend_com_wsdl_addOrTreePartResponse_serialize;

function backend_com_wsdl_addOrTreePartResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addOrTreePartResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_orTreePart_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}getAllSpellActionsResponse
//
function backend_com_wsdl_getAllSpellActionsResponse () {
    this.typeMarker = 'backend_com_wsdl_getAllSpellActionsResponse';
    this._return = [];
}

//
// accessor is backend_com_wsdl_getAllSpellActionsResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}spellAction
// - required element
// - array
//
// element set for return
// setter function is is backend_com_wsdl_getAllSpellActionsResponse.prototype.setReturn
//
function backend_com_wsdl_getAllSpellActionsResponse_getReturn() { return this._return;}

backend_com_wsdl_getAllSpellActionsResponse.prototype.getReturn = backend_com_wsdl_getAllSpellActionsResponse_getReturn;

function backend_com_wsdl_getAllSpellActionsResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getAllSpellActionsResponse.prototype.setReturn = backend_com_wsdl_getAllSpellActionsResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getAllSpellActionsResponse
//
function backend_com_wsdl_getAllSpellActionsResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
      for (var ax = 0;ax < this._return.length;ax ++) {
       if (this._return[ax] == null) {
        xml = xml + '<return/>';
       } else {
        xml = xml + this._return[ax].serialize(cxfjsutils, 'return', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_getAllSpellActionsResponse.prototype.serialize = backend_com_wsdl_getAllSpellActionsResponse_serialize;

function backend_com_wsdl_getAllSpellActionsResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getAllSpellActionsResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = backend_com_wsdl_spellAction_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return'));
     newobject.setReturn(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}updateOrTreePartResponse
//
function backend_com_wsdl_updateOrTreePartResponse () {
    this.typeMarker = 'backend_com_wsdl_updateOrTreePartResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_updateOrTreePartResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}orTreePart
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_updateOrTreePartResponse.prototype.setReturn
//
function backend_com_wsdl_updateOrTreePartResponse_getReturn() { return this._return;}

backend_com_wsdl_updateOrTreePartResponse.prototype.getReturn = backend_com_wsdl_updateOrTreePartResponse_getReturn;

function backend_com_wsdl_updateOrTreePartResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_updateOrTreePartResponse.prototype.setReturn = backend_com_wsdl_updateOrTreePartResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}updateOrTreePartResponse
//
function backend_com_wsdl_updateOrTreePartResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updateOrTreePartResponse.prototype.serialize = backend_com_wsdl_updateOrTreePartResponse_serialize;

function backend_com_wsdl_updateOrTreePartResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateOrTreePartResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_orTreePart_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}updateInfoMarker
//
function backend_com_wsdl_updateInfoMarker () {
    this.typeMarker = 'backend_com_wsdl_updateInfoMarker';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_updateInfoMarker.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}infoMarker
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_updateInfoMarker.prototype.setArg0
//
function backend_com_wsdl_updateInfoMarker_getArg0() { return this._arg0;}

backend_com_wsdl_updateInfoMarker.prototype.getArg0 = backend_com_wsdl_updateInfoMarker_getArg0;

function backend_com_wsdl_updateInfoMarker_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_updateInfoMarker.prototype.setArg0 = backend_com_wsdl_updateInfoMarker_setArg0;
//
// Serialize {http://backend.com/wsdl}updateInfoMarker
//
function backend_com_wsdl_updateInfoMarker_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_updateInfoMarker.prototype.serialize = backend_com_wsdl_updateInfoMarker_serialize;

function backend_com_wsdl_updateInfoMarker_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateInfoMarker();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_infoMarker_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}user
//
function backend_com_wsdl_user () {
    this.typeMarker = 'backend_com_wsdl_user';
    this._createdQuestIds = [];
    this._id = 0;
    this._name = null;
    this._password = null;
    this._playerId = 0;
    this._version = null;
}

//
// accessor is backend_com_wsdl_user.prototype.getCreatedQuestIds
// element get for createdQuestIds
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
// - array
// - nillable
//
// element set for createdQuestIds
// setter function is is backend_com_wsdl_user.prototype.setCreatedQuestIds
//
function backend_com_wsdl_user_getCreatedQuestIds() { return this._createdQuestIds;}

backend_com_wsdl_user.prototype.getCreatedQuestIds = backend_com_wsdl_user_getCreatedQuestIds;

function backend_com_wsdl_user_setCreatedQuestIds(value) { this._createdQuestIds = value;}

backend_com_wsdl_user.prototype.setCreatedQuestIds = backend_com_wsdl_user_setCreatedQuestIds;
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
// accessor is backend_com_wsdl_user.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for name
// setter function is is backend_com_wsdl_user.prototype.setName
//
function backend_com_wsdl_user_getName() { return this._name;}

backend_com_wsdl_user.prototype.getName = backend_com_wsdl_user_getName;

function backend_com_wsdl_user_setName(value) { this._name = value;}

backend_com_wsdl_user.prototype.setName = backend_com_wsdl_user_setName;
//
// accessor is backend_com_wsdl_user.prototype.getPassword
// element get for password
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for password
// setter function is is backend_com_wsdl_user.prototype.setPassword
//
function backend_com_wsdl_user_getPassword() { return this._password;}

backend_com_wsdl_user.prototype.getPassword = backend_com_wsdl_user_getPassword;

function backend_com_wsdl_user_setPassword(value) { this._password = value;}

backend_com_wsdl_user.prototype.setPassword = backend_com_wsdl_user_setPassword;
//
// accessor is backend_com_wsdl_user.prototype.getPlayerId
// element get for playerId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for playerId
// setter function is is backend_com_wsdl_user.prototype.setPlayerId
//
function backend_com_wsdl_user_getPlayerId() { return this._playerId;}

backend_com_wsdl_user.prototype.getPlayerId = backend_com_wsdl_user_getPlayerId;

function backend_com_wsdl_user_setPlayerId(value) { this._playerId = value;}

backend_com_wsdl_user.prototype.setPlayerId = backend_com_wsdl_user_setPlayerId;
//
// accessor is backend_com_wsdl_user.prototype.getVersion
// element get for version
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for version
// setter function is is backend_com_wsdl_user.prototype.setVersion
//
function backend_com_wsdl_user_getVersion() { return this._version;}

backend_com_wsdl_user.prototype.getVersion = backend_com_wsdl_user_getVersion;

function backend_com_wsdl_user_setVersion(value) { this._version = value;}

backend_com_wsdl_user.prototype.setVersion = backend_com_wsdl_user_setVersion;
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
     if (this._createdQuestIds != null) {
      for (var ax = 0;ax < this._createdQuestIds.length;ax ++) {
       if (this._createdQuestIds[ax] == null) {
        xml = xml + '<createdQuestIds xsi:nil=\'true\'/>';
       } else {
        xml = xml + '<createdQuestIds>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._createdQuestIds[ax]);
        xml = xml + '</createdQuestIds>';
       }
      }
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
     if (this._name != null) {
      xml = xml + '<name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._name);
      xml = xml + '</name>';
     }
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
     xml = xml + '<playerId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._playerId);
     xml = xml + '</playerId>';
    }
    // block for local variables
    {
     if (this._version != null) {
      xml = xml + '<version>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._version);
      xml = xml + '</version>';
     }
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
    cxfjsutils.trace('processing createdQuestIds');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'createdQuestIds')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = parseInt(value);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'createdQuestIds'));
     newobject.setCreatedQuestIds(item);
     var item = null;
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
    cxfjsutils.trace('processing name');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'name')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setName(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
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
    cxfjsutils.trace('processing playerId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setPlayerId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing version');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'version')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setVersion(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}deletePlayerResponse
//
function backend_com_wsdl_deletePlayerResponse () {
    this.typeMarker = 'backend_com_wsdl_deletePlayerResponse';
}

//
// Serialize {http://backend.com/wsdl}deletePlayerResponse
//
function backend_com_wsdl_deletePlayerResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_deletePlayerResponse.prototype.serialize = backend_com_wsdl_deletePlayerResponse_serialize;

function backend_com_wsdl_deletePlayerResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_deletePlayerResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}invisibleMarker
//
function backend_com_wsdl_invisibleMarker () {
    this.typeMarker = 'backend_com_wsdl_invisibleMarker';
    this._htmlId = 0;
    this._id = 0;
    this._name = null;
    this._position = null;
    this._version = null;
    this._targetPosition = null;
}

//
// accessor is backend_com_wsdl_invisibleMarker.prototype.getHtmlId
// element get for htmlId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for htmlId
// setter function is is backend_com_wsdl_invisibleMarker.prototype.setHtmlId
//
function backend_com_wsdl_invisibleMarker_getHtmlId() { return this._htmlId;}

backend_com_wsdl_invisibleMarker.prototype.getHtmlId = backend_com_wsdl_invisibleMarker_getHtmlId;

function backend_com_wsdl_invisibleMarker_setHtmlId(value) { this._htmlId = value;}

backend_com_wsdl_invisibleMarker.prototype.setHtmlId = backend_com_wsdl_invisibleMarker_setHtmlId;
//
// accessor is backend_com_wsdl_invisibleMarker.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for id
// setter function is is backend_com_wsdl_invisibleMarker.prototype.setId
//
function backend_com_wsdl_invisibleMarker_getId() { return this._id;}

backend_com_wsdl_invisibleMarker.prototype.getId = backend_com_wsdl_invisibleMarker_getId;

function backend_com_wsdl_invisibleMarker_setId(value) { this._id = value;}

backend_com_wsdl_invisibleMarker.prototype.setId = backend_com_wsdl_invisibleMarker_setId;
//
// accessor is backend_com_wsdl_invisibleMarker.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for name
// setter function is is backend_com_wsdl_invisibleMarker.prototype.setName
//
function backend_com_wsdl_invisibleMarker_getName() { return this._name;}

backend_com_wsdl_invisibleMarker.prototype.getName = backend_com_wsdl_invisibleMarker_getName;

function backend_com_wsdl_invisibleMarker_setName(value) { this._name = value;}

backend_com_wsdl_invisibleMarker.prototype.setName = backend_com_wsdl_invisibleMarker_setName;
//
// accessor is backend_com_wsdl_invisibleMarker.prototype.getPosition
// element get for position
// - element type is {http://backend.com/wsdl}mapPosition
// - optional element
//
// element set for position
// setter function is is backend_com_wsdl_invisibleMarker.prototype.setPosition
//
function backend_com_wsdl_invisibleMarker_getPosition() { return this._position;}

backend_com_wsdl_invisibleMarker.prototype.getPosition = backend_com_wsdl_invisibleMarker_getPosition;

function backend_com_wsdl_invisibleMarker_setPosition(value) { this._position = value;}

backend_com_wsdl_invisibleMarker.prototype.setPosition = backend_com_wsdl_invisibleMarker_setPosition;
//
// accessor is backend_com_wsdl_invisibleMarker.prototype.getVersion
// element get for version
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for version
// setter function is is backend_com_wsdl_invisibleMarker.prototype.setVersion
//
function backend_com_wsdl_invisibleMarker_getVersion() { return this._version;}

backend_com_wsdl_invisibleMarker.prototype.getVersion = backend_com_wsdl_invisibleMarker_getVersion;

function backend_com_wsdl_invisibleMarker_setVersion(value) { this._version = value;}

backend_com_wsdl_invisibleMarker.prototype.setVersion = backend_com_wsdl_invisibleMarker_setVersion;
//
// accessor is backend_com_wsdl_invisibleMarker.prototype.getTargetPosition
// element get for targetPosition
// - element type is {http://backend.com/wsdl}mapPosition
// - optional element
//
// element set for targetPosition
// setter function is is backend_com_wsdl_invisibleMarker.prototype.setTargetPosition
//
function backend_com_wsdl_invisibleMarker_getTargetPosition() { return this._targetPosition;}

backend_com_wsdl_invisibleMarker.prototype.getTargetPosition = backend_com_wsdl_invisibleMarker_getTargetPosition;

function backend_com_wsdl_invisibleMarker_setTargetPosition(value) { this._targetPosition = value;}

backend_com_wsdl_invisibleMarker.prototype.setTargetPosition = backend_com_wsdl_invisibleMarker_setTargetPosition;
//
// Serialize {http://backend.com/wsdl}invisibleMarker
//
function backend_com_wsdl_invisibleMarker_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<htmlId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._htmlId);
     xml = xml + '</htmlId>';
    }
    // block for local variables
    {
     xml = xml + '<id>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._id);
     xml = xml + '</id>';
    }
    // block for local variables
    {
     if (this._name != null) {
      xml = xml + '<name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._name);
      xml = xml + '</name>';
     }
    }
    // block for local variables
    {
     if (this._position != null) {
      xml = xml + this._position.serialize(cxfjsutils, 'position', null);
     }
    }
    // block for local variables
    {
     if (this._version != null) {
      xml = xml + '<version>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._version);
      xml = xml + '</version>';
     }
    }
    // block for local variables
    {
     if (this._targetPosition != null) {
      xml = xml + this._targetPosition.serialize(cxfjsutils, 'targetPosition', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_invisibleMarker.prototype.serialize = backend_com_wsdl_invisibleMarker_serialize;

function backend_com_wsdl_invisibleMarker_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_invisibleMarker();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing htmlId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setHtmlId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
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
    cxfjsutils.trace('processing name');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'name')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setName(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing position');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'position')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_mapPosition_deserialize(cxfjsutils, curElement);
     }
     newobject.setPosition(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing version');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'version')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setVersion(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing targetPosition');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'targetPosition')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_mapPosition_deserialize(cxfjsutils, curElement);
     }
     newobject.setTargetPosition(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}updateInfoMarkerResponse
//
function backend_com_wsdl_updateInfoMarkerResponse () {
    this.typeMarker = 'backend_com_wsdl_updateInfoMarkerResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_updateInfoMarkerResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}infoMarker
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_updateInfoMarkerResponse.prototype.setReturn
//
function backend_com_wsdl_updateInfoMarkerResponse_getReturn() { return this._return;}

backend_com_wsdl_updateInfoMarkerResponse.prototype.getReturn = backend_com_wsdl_updateInfoMarkerResponse_getReturn;

function backend_com_wsdl_updateInfoMarkerResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_updateInfoMarkerResponse.prototype.setReturn = backend_com_wsdl_updateInfoMarkerResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}updateInfoMarkerResponse
//
function backend_com_wsdl_updateInfoMarkerResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updateInfoMarkerResponse.prototype.serialize = backend_com_wsdl_updateInfoMarkerResponse_serialize;

function backend_com_wsdl_updateInfoMarkerResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateInfoMarkerResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_infoMarker_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}getQuestResponse
//
function backend_com_wsdl_getQuestResponse () {
    this.typeMarker = 'backend_com_wsdl_getQuestResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_getQuestResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}quest
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_getQuestResponse.prototype.setReturn
//
function backend_com_wsdl_getQuestResponse_getReturn() { return this._return;}

backend_com_wsdl_getQuestResponse.prototype.getReturn = backend_com_wsdl_getQuestResponse_getReturn;

function backend_com_wsdl_getQuestResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getQuestResponse.prototype.setReturn = backend_com_wsdl_getQuestResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getQuestResponse
//
function backend_com_wsdl_getQuestResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getQuestResponse.prototype.serialize = backend_com_wsdl_getQuestResponse_serialize;

function backend_com_wsdl_getQuestResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getQuestResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_quest_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}spellCard
//
function backend_com_wsdl_spellCard () {
    this.typeMarker = 'backend_com_wsdl_spellCard';
    this._description = null;
    this._id = 0;
    this._imageUrl = null;
    this._name = null;
    this._stars = null;
    this._version = null;
    this._action = null;
}

//
// accessor is backend_com_wsdl_spellCard.prototype.getDescription
// element get for description
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for description
// setter function is is backend_com_wsdl_spellCard.prototype.setDescription
//
function backend_com_wsdl_spellCard_getDescription() { return this._description;}

backend_com_wsdl_spellCard.prototype.getDescription = backend_com_wsdl_spellCard_getDescription;

function backend_com_wsdl_spellCard_setDescription(value) { this._description = value;}

backend_com_wsdl_spellCard.prototype.setDescription = backend_com_wsdl_spellCard_setDescription;
//
// accessor is backend_com_wsdl_spellCard.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for id
// setter function is is backend_com_wsdl_spellCard.prototype.setId
//
function backend_com_wsdl_spellCard_getId() { return this._id;}

backend_com_wsdl_spellCard.prototype.getId = backend_com_wsdl_spellCard_getId;

function backend_com_wsdl_spellCard_setId(value) { this._id = value;}

backend_com_wsdl_spellCard.prototype.setId = backend_com_wsdl_spellCard_setId;
//
// accessor is backend_com_wsdl_spellCard.prototype.getImageUrl
// element get for imageUrl
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for imageUrl
// setter function is is backend_com_wsdl_spellCard.prototype.setImageUrl
//
function backend_com_wsdl_spellCard_getImageUrl() { return this._imageUrl;}

backend_com_wsdl_spellCard.prototype.getImageUrl = backend_com_wsdl_spellCard_getImageUrl;

function backend_com_wsdl_spellCard_setImageUrl(value) { this._imageUrl = value;}

backend_com_wsdl_spellCard.prototype.setImageUrl = backend_com_wsdl_spellCard_setImageUrl;
//
// accessor is backend_com_wsdl_spellCard.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for name
// setter function is is backend_com_wsdl_spellCard.prototype.setName
//
function backend_com_wsdl_spellCard_getName() { return this._name;}

backend_com_wsdl_spellCard.prototype.getName = backend_com_wsdl_spellCard_getName;

function backend_com_wsdl_spellCard_setName(value) { this._name = value;}

backend_com_wsdl_spellCard.prototype.setName = backend_com_wsdl_spellCard_setName;
//
// accessor is backend_com_wsdl_spellCard.prototype.getStars
// element get for stars
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for stars
// setter function is is backend_com_wsdl_spellCard.prototype.setStars
//
function backend_com_wsdl_spellCard_getStars() { return this._stars;}

backend_com_wsdl_spellCard.prototype.getStars = backend_com_wsdl_spellCard_getStars;

function backend_com_wsdl_spellCard_setStars(value) { this._stars = value;}

backend_com_wsdl_spellCard.prototype.setStars = backend_com_wsdl_spellCard_setStars;
//
// accessor is backend_com_wsdl_spellCard.prototype.getVersion
// element get for version
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for version
// setter function is is backend_com_wsdl_spellCard.prototype.setVersion
//
function backend_com_wsdl_spellCard_getVersion() { return this._version;}

backend_com_wsdl_spellCard.prototype.getVersion = backend_com_wsdl_spellCard_getVersion;

function backend_com_wsdl_spellCard_setVersion(value) { this._version = value;}

backend_com_wsdl_spellCard.prototype.setVersion = backend_com_wsdl_spellCard_setVersion;
//
// accessor is backend_com_wsdl_spellCard.prototype.getAction
// element get for action
// - element type is {http://backend.com/wsdl}spellAction
// - optional element
//
// element set for action
// setter function is is backend_com_wsdl_spellCard.prototype.setAction
//
function backend_com_wsdl_spellCard_getAction() { return this._action;}

backend_com_wsdl_spellCard.prototype.getAction = backend_com_wsdl_spellCard_getAction;

function backend_com_wsdl_spellCard_setAction(value) { this._action = value;}

backend_com_wsdl_spellCard.prototype.setAction = backend_com_wsdl_spellCard_setAction;
//
// Serialize {http://backend.com/wsdl}spellCard
//
function backend_com_wsdl_spellCard_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._description != null) {
      xml = xml + '<description>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._description);
      xml = xml + '</description>';
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
     if (this._imageUrl != null) {
      xml = xml + '<imageUrl>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._imageUrl);
      xml = xml + '</imageUrl>';
     }
    }
    // block for local variables
    {
     if (this._name != null) {
      xml = xml + '<name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._name);
      xml = xml + '</name>';
     }
    }
    // block for local variables
    {
     if (this._stars != null) {
      xml = xml + '<stars>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._stars);
      xml = xml + '</stars>';
     }
    }
    // block for local variables
    {
     if (this._version != null) {
      xml = xml + '<version>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._version);
      xml = xml + '</version>';
     }
    }
    // block for local variables
    {
     if (this._action != null) {
      xml = xml + this._action.serialize(cxfjsutils, 'action', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_spellCard.prototype.serialize = backend_com_wsdl_spellCard_serialize;

function backend_com_wsdl_spellCard_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_spellCard();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing description');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'description')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setDescription(item);
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
    cxfjsutils.trace('processing imageUrl');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'imageUrl')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setImageUrl(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'name')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setName(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing stars');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'stars')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setStars(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing version');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'version')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setVersion(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing action');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'action')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_spellAction_deserialize(cxfjsutils, curElement);
     }
     newobject.setAction(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}spellAction
//
function backend_com_wsdl_spellAction () {
    this.typeMarker = 'backend_com_wsdl_spellAction';
    this._amount = 0.0;
    this._descriptions = null;
    this._duration = null;
    this._id = 0;
    this._isMultipier = '';
    this._names = null;
    this._starCosts = 0.0;
    this._type = null;
}

//
// accessor is backend_com_wsdl_spellAction.prototype.getAmount
// element get for amount
// - element type is {http://www.w3.org/2001/XMLSchema}float
// - required element
//
// element set for amount
// setter function is is backend_com_wsdl_spellAction.prototype.setAmount
//
function backend_com_wsdl_spellAction_getAmount() { return this._amount;}

backend_com_wsdl_spellAction.prototype.getAmount = backend_com_wsdl_spellAction_getAmount;

function backend_com_wsdl_spellAction_setAmount(value) { this._amount = value;}

backend_com_wsdl_spellAction.prototype.setAmount = backend_com_wsdl_spellAction_setAmount;
//
// accessor is backend_com_wsdl_spellAction.prototype.getDescriptions
// element get for descriptions
// - element type is null
// - required element
//
// element set for descriptions
// setter function is is backend_com_wsdl_spellAction.prototype.setDescriptions
//
function backend_com_wsdl_spellAction_getDescriptions() { return this._descriptions;}

backend_com_wsdl_spellAction.prototype.getDescriptions = backend_com_wsdl_spellAction_getDescriptions;

function backend_com_wsdl_spellAction_setDescriptions(value) { this._descriptions = value;}

backend_com_wsdl_spellAction.prototype.setDescriptions = backend_com_wsdl_spellAction_setDescriptions;
//
// accessor is backend_com_wsdl_spellAction.prototype.getDuration
// element get for duration
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for duration
// setter function is is backend_com_wsdl_spellAction.prototype.setDuration
//
function backend_com_wsdl_spellAction_getDuration() { return this._duration;}

backend_com_wsdl_spellAction.prototype.getDuration = backend_com_wsdl_spellAction_getDuration;

function backend_com_wsdl_spellAction_setDuration(value) { this._duration = value;}

backend_com_wsdl_spellAction.prototype.setDuration = backend_com_wsdl_spellAction_setDuration;
//
// accessor is backend_com_wsdl_spellAction.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for id
// setter function is is backend_com_wsdl_spellAction.prototype.setId
//
function backend_com_wsdl_spellAction_getId() { return this._id;}

backend_com_wsdl_spellAction.prototype.getId = backend_com_wsdl_spellAction_getId;

function backend_com_wsdl_spellAction_setId(value) { this._id = value;}

backend_com_wsdl_spellAction.prototype.setId = backend_com_wsdl_spellAction_setId;
//
// accessor is backend_com_wsdl_spellAction.prototype.getIsMultipier
// element get for isMultipier
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for isMultipier
// setter function is is backend_com_wsdl_spellAction.prototype.setIsMultipier
//
function backend_com_wsdl_spellAction_getIsMultipier() { return this._isMultipier;}

backend_com_wsdl_spellAction.prototype.getIsMultipier = backend_com_wsdl_spellAction_getIsMultipier;

function backend_com_wsdl_spellAction_setIsMultipier(value) { this._isMultipier = value;}

backend_com_wsdl_spellAction.prototype.setIsMultipier = backend_com_wsdl_spellAction_setIsMultipier;
//
// accessor is backend_com_wsdl_spellAction.prototype.getNames
// element get for names
// - element type is null
// - required element
//
// element set for names
// setter function is is backend_com_wsdl_spellAction.prototype.setNames
//
function backend_com_wsdl_spellAction_getNames() { return this._names;}

backend_com_wsdl_spellAction.prototype.getNames = backend_com_wsdl_spellAction_getNames;

function backend_com_wsdl_spellAction_setNames(value) { this._names = value;}

backend_com_wsdl_spellAction.prototype.setNames = backend_com_wsdl_spellAction_setNames;
//
// accessor is backend_com_wsdl_spellAction.prototype.getStarCosts
// element get for starCosts
// - element type is {http://www.w3.org/2001/XMLSchema}float
// - required element
//
// element set for starCosts
// setter function is is backend_com_wsdl_spellAction.prototype.setStarCosts
//
function backend_com_wsdl_spellAction_getStarCosts() { return this._starCosts;}

backend_com_wsdl_spellAction.prototype.getStarCosts = backend_com_wsdl_spellAction_getStarCosts;

function backend_com_wsdl_spellAction_setStarCosts(value) { this._starCosts = value;}

backend_com_wsdl_spellAction.prototype.setStarCosts = backend_com_wsdl_spellAction_setStarCosts;
//
// accessor is backend_com_wsdl_spellAction.prototype.getType
// element get for type
// - element type is {http://backend.com/wsdl}spellActionType
// - optional element
//
// element set for type
// setter function is is backend_com_wsdl_spellAction.prototype.setType
//
function backend_com_wsdl_spellAction_getType() { return this._type;}

backend_com_wsdl_spellAction.prototype.getType = backend_com_wsdl_spellAction_getType;

function backend_com_wsdl_spellAction_setType(value) { this._type = value;}

backend_com_wsdl_spellAction.prototype.setType = backend_com_wsdl_spellAction_setType;
//
// Serialize {http://backend.com/wsdl}spellAction
//
function backend_com_wsdl_spellAction_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<amount>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._amount);
     xml = xml + '</amount>';
    }
    // block for local variables
    {
     xml = xml + this._descriptions.serialize(cxfjsutils, 'descriptions', null);
    }
    // block for local variables
    {
     if (this._duration != null) {
      xml = xml + '<duration>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._duration);
      xml = xml + '</duration>';
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
     xml = xml + '<isMultipier>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._isMultipier);
     xml = xml + '</isMultipier>';
    }
    // block for local variables
    {
     xml = xml + this._names.serialize(cxfjsutils, 'names', null);
    }
    // block for local variables
    {
     xml = xml + '<starCosts>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._starCosts);
     xml = xml + '</starCosts>';
    }
    // block for local variables
    {
     if (this._type != null) {
      xml = xml + '<type>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._type);
      xml = xml + '</type>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_spellAction.prototype.serialize = backend_com_wsdl_spellAction_serialize;

function backend_com_wsdl_spellAction_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_spellAction();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing amount');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseFloat(value);
    }
    newobject.setAmount(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing descriptions');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = backend_com_wsdl_descriptions_deserialize(cxfjsutils, curElement);
    }
    newobject.setDescriptions(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing duration');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'duration')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setDuration(item);
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
    cxfjsutils.trace('processing isMultipier');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setIsMultipier(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing names');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = backend_com_wsdl_names_deserialize(cxfjsutils, curElement);
    }
    newobject.setNames(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing starCosts');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseFloat(value);
    }
    newobject.setStarCosts(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing type');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'type')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setType(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}deleteSpellActionResponse
//
function backend_com_wsdl_deleteSpellActionResponse () {
    this.typeMarker = 'backend_com_wsdl_deleteSpellActionResponse';
}

//
// Serialize {http://backend.com/wsdl}deleteSpellActionResponse
//
function backend_com_wsdl_deleteSpellActionResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_deleteSpellActionResponse.prototype.serialize = backend_com_wsdl_deleteSpellActionResponse_serialize;

function backend_com_wsdl_deleteSpellActionResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_deleteSpellActionResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}addMarkerTreePartResponse
//
function backend_com_wsdl_addMarkerTreePartResponse () {
    this.typeMarker = 'backend_com_wsdl_addMarkerTreePartResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_addMarkerTreePartResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}markerTreePart
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_addMarkerTreePartResponse.prototype.setReturn
//
function backend_com_wsdl_addMarkerTreePartResponse_getReturn() { return this._return;}

backend_com_wsdl_addMarkerTreePartResponse.prototype.getReturn = backend_com_wsdl_addMarkerTreePartResponse_getReturn;

function backend_com_wsdl_addMarkerTreePartResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_addMarkerTreePartResponse.prototype.setReturn = backend_com_wsdl_addMarkerTreePartResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}addMarkerTreePartResponse
//
function backend_com_wsdl_addMarkerTreePartResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_addMarkerTreePartResponse.prototype.serialize = backend_com_wsdl_addMarkerTreePartResponse_serialize;

function backend_com_wsdl_addMarkerTreePartResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addMarkerTreePartResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_markerTreePart_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}clearDBResponse
//
function backend_com_wsdl_clearDBResponse () {
    this.typeMarker = 'backend_com_wsdl_clearDBResponse';
}

//
// Serialize {http://backend.com/wsdl}clearDBResponse
//
function backend_com_wsdl_clearDBResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_clearDBResponse.prototype.serialize = backend_com_wsdl_clearDBResponse_serialize;

function backend_com_wsdl_clearDBResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_clearDBResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}updateMonsterCardResponse
//
function backend_com_wsdl_updateMonsterCardResponse () {
    this.typeMarker = 'backend_com_wsdl_updateMonsterCardResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_updateMonsterCardResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}monsterCard
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_updateMonsterCardResponse.prototype.setReturn
//
function backend_com_wsdl_updateMonsterCardResponse_getReturn() { return this._return;}

backend_com_wsdl_updateMonsterCardResponse.prototype.getReturn = backend_com_wsdl_updateMonsterCardResponse_getReturn;

function backend_com_wsdl_updateMonsterCardResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_updateMonsterCardResponse.prototype.setReturn = backend_com_wsdl_updateMonsterCardResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}updateMonsterCardResponse
//
function backend_com_wsdl_updateMonsterCardResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updateMonsterCardResponse.prototype.serialize = backend_com_wsdl_updateMonsterCardResponse_serialize;

function backend_com_wsdl_updateMonsterCardResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateMonsterCardResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_monsterCard_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}setTreePartFinished
//
function backend_com_wsdl_setTreePartFinished () {
    this.typeMarker = 'backend_com_wsdl_setTreePartFinished';
    this._arg0 = 0;
    this._arg1 = '';
}

//
// accessor is backend_com_wsdl_setTreePartFinished.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_setTreePartFinished.prototype.setArg0
//
function backend_com_wsdl_setTreePartFinished_getArg0() { return this._arg0;}

backend_com_wsdl_setTreePartFinished.prototype.getArg0 = backend_com_wsdl_setTreePartFinished_getArg0;

function backend_com_wsdl_setTreePartFinished_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_setTreePartFinished.prototype.setArg0 = backend_com_wsdl_setTreePartFinished_setArg0;
//
// accessor is backend_com_wsdl_setTreePartFinished.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for arg1
// setter function is is backend_com_wsdl_setTreePartFinished.prototype.setArg1
//
function backend_com_wsdl_setTreePartFinished_getArg1() { return this._arg1;}

backend_com_wsdl_setTreePartFinished.prototype.getArg1 = backend_com_wsdl_setTreePartFinished_getArg1;

function backend_com_wsdl_setTreePartFinished_setArg1(value) { this._arg1 = value;}

backend_com_wsdl_setTreePartFinished.prototype.setArg1 = backend_com_wsdl_setTreePartFinished_setArg1;
//
// Serialize {http://backend.com/wsdl}setTreePartFinished
//
function backend_com_wsdl_setTreePartFinished_serialize(cxfjsutils, elementName, extraNamespaces) {
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
    // block for local variables
    {
     xml = xml + '<arg1>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._arg1);
     xml = xml + '</arg1>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_setTreePartFinished.prototype.serialize = backend_com_wsdl_setTreePartFinished_serialize;

function backend_com_wsdl_setTreePartFinished_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_setTreePartFinished();
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
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg1');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setArg1(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}getMonsterCardResponse
//
function backend_com_wsdl_getMonsterCardResponse () {
    this.typeMarker = 'backend_com_wsdl_getMonsterCardResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_getMonsterCardResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}monsterCard
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_getMonsterCardResponse.prototype.setReturn
//
function backend_com_wsdl_getMonsterCardResponse_getReturn() { return this._return;}

backend_com_wsdl_getMonsterCardResponse.prototype.getReturn = backend_com_wsdl_getMonsterCardResponse_getReturn;

function backend_com_wsdl_getMonsterCardResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getMonsterCardResponse.prototype.setReturn = backend_com_wsdl_getMonsterCardResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getMonsterCardResponse
//
function backend_com_wsdl_getMonsterCardResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getMonsterCardResponse.prototype.serialize = backend_com_wsdl_getMonsterCardResponse_serialize;

function backend_com_wsdl_getMonsterCardResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getMonsterCardResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_monsterCard_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}addTreePartLazy
//
function backend_com_wsdl_addTreePartLazy () {
    this.typeMarker = 'backend_com_wsdl_addTreePartLazy';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_addTreePartLazy.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}treePartLazy
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_addTreePartLazy.prototype.setArg0
//
function backend_com_wsdl_addTreePartLazy_getArg0() { return this._arg0;}

backend_com_wsdl_addTreePartLazy.prototype.getArg0 = backend_com_wsdl_addTreePartLazy_getArg0;

function backend_com_wsdl_addTreePartLazy_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_addTreePartLazy.prototype.setArg0 = backend_com_wsdl_addTreePartLazy_setArg0;
//
// Serialize {http://backend.com/wsdl}addTreePartLazy
//
function backend_com_wsdl_addTreePartLazy_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_addTreePartLazy.prototype.serialize = backend_com_wsdl_addTreePartLazy_serialize;

function backend_com_wsdl_addTreePartLazy_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addTreePartLazy();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_treePartLazy_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}orTreePart
//
function backend_com_wsdl_orTreePart () {
    this.typeMarker = 'backend_com_wsdl_orTreePart';
    this._active = '';
    this._finished = '';
    this._id = 0;
    this._successors = [];
    this._version = null;
}

//
// accessor is backend_com_wsdl_orTreePart.prototype.getActive
// element get for active
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for active
// setter function is is backend_com_wsdl_orTreePart.prototype.setActive
//
function backend_com_wsdl_orTreePart_getActive() { return this._active;}

backend_com_wsdl_orTreePart.prototype.getActive = backend_com_wsdl_orTreePart_getActive;

function backend_com_wsdl_orTreePart_setActive(value) { this._active = value;}

backend_com_wsdl_orTreePart.prototype.setActive = backend_com_wsdl_orTreePart_setActive;
//
// accessor is backend_com_wsdl_orTreePart.prototype.getFinished
// element get for finished
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for finished
// setter function is is backend_com_wsdl_orTreePart.prototype.setFinished
//
function backend_com_wsdl_orTreePart_getFinished() { return this._finished;}

backend_com_wsdl_orTreePart.prototype.getFinished = backend_com_wsdl_orTreePart_getFinished;

function backend_com_wsdl_orTreePart_setFinished(value) { this._finished = value;}

backend_com_wsdl_orTreePart.prototype.setFinished = backend_com_wsdl_orTreePart_setFinished;
//
// accessor is backend_com_wsdl_orTreePart.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for id
// setter function is is backend_com_wsdl_orTreePart.prototype.setId
//
function backend_com_wsdl_orTreePart_getId() { return this._id;}

backend_com_wsdl_orTreePart.prototype.getId = backend_com_wsdl_orTreePart_getId;

function backend_com_wsdl_orTreePart_setId(value) { this._id = value;}

backend_com_wsdl_orTreePart.prototype.setId = backend_com_wsdl_orTreePart_setId;
//
// accessor is backend_com_wsdl_orTreePart.prototype.getSuccessors
// element get for successors
// - element type is {http://backend.com/wsdl}treePart
// - required element
// - array
// - nillable
//
// element set for successors
// setter function is is backend_com_wsdl_orTreePart.prototype.setSuccessors
//
function backend_com_wsdl_orTreePart_getSuccessors() { return this._successors;}

backend_com_wsdl_orTreePart.prototype.getSuccessors = backend_com_wsdl_orTreePart_getSuccessors;

function backend_com_wsdl_orTreePart_setSuccessors(value) { this._successors = value;}

backend_com_wsdl_orTreePart.prototype.setSuccessors = backend_com_wsdl_orTreePart_setSuccessors;
//
// accessor is backend_com_wsdl_orTreePart.prototype.getVersion
// element get for version
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for version
// setter function is is backend_com_wsdl_orTreePart.prototype.setVersion
//
function backend_com_wsdl_orTreePart_getVersion() { return this._version;}

backend_com_wsdl_orTreePart.prototype.getVersion = backend_com_wsdl_orTreePart_getVersion;

function backend_com_wsdl_orTreePart_setVersion(value) { this._version = value;}

backend_com_wsdl_orTreePart.prototype.setVersion = backend_com_wsdl_orTreePart_setVersion;
//
// Serialize {http://backend.com/wsdl}orTreePart
//
function backend_com_wsdl_orTreePart_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<active>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._active);
     xml = xml + '</active>';
    }
    // block for local variables
    {
     xml = xml + '<finished>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._finished);
     xml = xml + '</finished>';
    }
    // block for local variables
    {
     xml = xml + '<id>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._id);
     xml = xml + '</id>';
    }
    // block for local variables
    {
     if (this._successors != null) {
      for (var ax = 0;ax < this._successors.length;ax ++) {
       if (this._successors[ax] == null) {
        xml = xml + '<successors xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._successors[ax].serialize(cxfjsutils, 'successors', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this._version != null) {
      xml = xml + '<version>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._version);
      xml = xml + '</version>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_orTreePart.prototype.serialize = backend_com_wsdl_orTreePart_serialize;

function backend_com_wsdl_orTreePart_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_orTreePart();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing active');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setActive(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing finished');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setFinished(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
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
    cxfjsutils.trace('processing successors');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'successors')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = backend_com_wsdl_treePart_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'successors'));
     newobject.setSuccessors(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing version');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'version')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setVersion(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}getQuestsInRangeResponse
//
function backend_com_wsdl_getQuestsInRangeResponse () {
    this.typeMarker = 'backend_com_wsdl_getQuestsInRangeResponse';
    this._return = [];
}

//
// accessor is backend_com_wsdl_getQuestsInRangeResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}quest
// - required element
// - array
//
// element set for return
// setter function is is backend_com_wsdl_getQuestsInRangeResponse.prototype.setReturn
//
function backend_com_wsdl_getQuestsInRangeResponse_getReturn() { return this._return;}

backend_com_wsdl_getQuestsInRangeResponse.prototype.getReturn = backend_com_wsdl_getQuestsInRangeResponse_getReturn;

function backend_com_wsdl_getQuestsInRangeResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getQuestsInRangeResponse.prototype.setReturn = backend_com_wsdl_getQuestsInRangeResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getQuestsInRangeResponse
//
function backend_com_wsdl_getQuestsInRangeResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
      for (var ax = 0;ax < this._return.length;ax ++) {
       if (this._return[ax] == null) {
        xml = xml + '<return/>';
       } else {
        xml = xml + this._return[ax].serialize(cxfjsutils, 'return', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_getQuestsInRangeResponse.prototype.serialize = backend_com_wsdl_getQuestsInRangeResponse_serialize;

function backend_com_wsdl_getQuestsInRangeResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getQuestsInRangeResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = backend_com_wsdl_quest_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return'));
     newobject.setReturn(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}setQuestInstanceOfMarkerTreePartResponse
//
function backend_com_wsdl_setQuestInstanceOfMarkerTreePartResponse () {
    this.typeMarker = 'backend_com_wsdl_setQuestInstanceOfMarkerTreePartResponse';
}

//
// Serialize {http://backend.com/wsdl}setQuestInstanceOfMarkerTreePartResponse
//
function backend_com_wsdl_setQuestInstanceOfMarkerTreePartResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_setQuestInstanceOfMarkerTreePartResponse.prototype.serialize = backend_com_wsdl_setQuestInstanceOfMarkerTreePartResponse_serialize;

function backend_com_wsdl_setQuestInstanceOfMarkerTreePartResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_setQuestInstanceOfMarkerTreePartResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}updateQuizMarkerResponse
//
function backend_com_wsdl_updateQuizMarkerResponse () {
    this.typeMarker = 'backend_com_wsdl_updateQuizMarkerResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_updateQuizMarkerResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}quizMarker
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_updateQuizMarkerResponse.prototype.setReturn
//
function backend_com_wsdl_updateQuizMarkerResponse_getReturn() { return this._return;}

backend_com_wsdl_updateQuizMarkerResponse.prototype.getReturn = backend_com_wsdl_updateQuizMarkerResponse_getReturn;

function backend_com_wsdl_updateQuizMarkerResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_updateQuizMarkerResponse.prototype.setReturn = backend_com_wsdl_updateQuizMarkerResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}updateQuizMarkerResponse
//
function backend_com_wsdl_updateQuizMarkerResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updateQuizMarkerResponse.prototype.serialize = backend_com_wsdl_updateQuizMarkerResponse_serialize;

function backend_com_wsdl_updateQuizMarkerResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateQuizMarkerResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_quizMarker_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}getAllMonsterActionsResponse
//
function backend_com_wsdl_getAllMonsterActionsResponse () {
    this.typeMarker = 'backend_com_wsdl_getAllMonsterActionsResponse';
    this._return = [];
}

//
// accessor is backend_com_wsdl_getAllMonsterActionsResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}monsterAction
// - required element
// - array
//
// element set for return
// setter function is is backend_com_wsdl_getAllMonsterActionsResponse.prototype.setReturn
//
function backend_com_wsdl_getAllMonsterActionsResponse_getReturn() { return this._return;}

backend_com_wsdl_getAllMonsterActionsResponse.prototype.getReturn = backend_com_wsdl_getAllMonsterActionsResponse_getReturn;

function backend_com_wsdl_getAllMonsterActionsResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getAllMonsterActionsResponse.prototype.setReturn = backend_com_wsdl_getAllMonsterActionsResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getAllMonsterActionsResponse
//
function backend_com_wsdl_getAllMonsterActionsResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
      for (var ax = 0;ax < this._return.length;ax ++) {
       if (this._return[ax] == null) {
        xml = xml + '<return/>';
       } else {
        xml = xml + this._return[ax].serialize(cxfjsutils, 'return', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_getAllMonsterActionsResponse.prototype.serialize = backend_com_wsdl_getAllMonsterActionsResponse_serialize;

function backend_com_wsdl_getAllMonsterActionsResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getAllMonsterActionsResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = backend_com_wsdl_monsterAction_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return'));
     newobject.setReturn(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}updatePlayer
//
function backend_com_wsdl_updatePlayer () {
    this.typeMarker = 'backend_com_wsdl_updatePlayer';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_updatePlayer.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}player
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_updatePlayer.prototype.setArg0
//
function backend_com_wsdl_updatePlayer_getArg0() { return this._arg0;}

backend_com_wsdl_updatePlayer.prototype.getArg0 = backend_com_wsdl_updatePlayer_getArg0;

function backend_com_wsdl_updatePlayer_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_updatePlayer.prototype.setArg0 = backend_com_wsdl_updatePlayer_setArg0;
//
// Serialize {http://backend.com/wsdl}updatePlayer
//
function backend_com_wsdl_updatePlayer_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_updatePlayer.prototype.serialize = backend_com_wsdl_updatePlayer_serialize;

function backend_com_wsdl_updatePlayer_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updatePlayer();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_player_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}updateQuest
//
function backend_com_wsdl_updateQuest () {
    this.typeMarker = 'backend_com_wsdl_updateQuest';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_updateQuest.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}quest
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_updateQuest.prototype.setArg0
//
function backend_com_wsdl_updateQuest_getArg0() { return this._arg0;}

backend_com_wsdl_updateQuest.prototype.getArg0 = backend_com_wsdl_updateQuest_getArg0;

function backend_com_wsdl_updateQuest_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_updateQuest.prototype.setArg0 = backend_com_wsdl_updateQuest_setArg0;
//
// Serialize {http://backend.com/wsdl}updateQuest
//
function backend_com_wsdl_updateQuest_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_updateQuest.prototype.serialize = backend_com_wsdl_updateQuest_serialize;

function backend_com_wsdl_updateQuest_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateQuest();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_quest_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}getMonsterAction
//
function backend_com_wsdl_getMonsterAction () {
    this.typeMarker = 'backend_com_wsdl_getMonsterAction';
    this._arg0 = 0;
}

//
// accessor is backend_com_wsdl_getMonsterAction.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_getMonsterAction.prototype.setArg0
//
function backend_com_wsdl_getMonsterAction_getArg0() { return this._arg0;}

backend_com_wsdl_getMonsterAction.prototype.getArg0 = backend_com_wsdl_getMonsterAction_getArg0;

function backend_com_wsdl_getMonsterAction_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_getMonsterAction.prototype.setArg0 = backend_com_wsdl_getMonsterAction_setArg0;
//
// Serialize {http://backend.com/wsdl}getMonsterAction
//
function backend_com_wsdl_getMonsterAction_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getMonsterAction.prototype.serialize = backend_com_wsdl_getMonsterAction_serialize;

function backend_com_wsdl_getMonsterAction_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getMonsterAction();
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
// Constructor for XML Schema item {http://backend.com/wsdl}getDecks
//
function backend_com_wsdl_getDecks () {
    this.typeMarker = 'backend_com_wsdl_getDecks';
    this._arg0 = [];
}

//
// accessor is backend_com_wsdl_getDecks.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
// - array
//
// element set for arg0
// setter function is is backend_com_wsdl_getDecks.prototype.setArg0
//
function backend_com_wsdl_getDecks_getArg0() { return this._arg0;}

backend_com_wsdl_getDecks.prototype.getArg0 = backend_com_wsdl_getDecks_getArg0;

function backend_com_wsdl_getDecks_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_getDecks.prototype.setArg0 = backend_com_wsdl_getDecks_setArg0;
//
// Serialize {http://backend.com/wsdl}getDecks
//
function backend_com_wsdl_getDecks_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      for (var ax = 0;ax < this._arg0.length;ax ++) {
       if (this._arg0[ax] == null) {
        xml = xml + '<arg0/>';
       } else {
        xml = xml + '<arg0>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._arg0[ax]);
        xml = xml + '</arg0>';
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_getDecks.prototype.serialize = backend_com_wsdl_getDecks_serialize;

function backend_com_wsdl_getDecks_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getDecks();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = parseInt(value);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0'));
     newobject.setArg0(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}addSpellActionResponse
//
function backend_com_wsdl_addSpellActionResponse () {
    this.typeMarker = 'backend_com_wsdl_addSpellActionResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_addSpellActionResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}spellAction
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_addSpellActionResponse.prototype.setReturn
//
function backend_com_wsdl_addSpellActionResponse_getReturn() { return this._return;}

backend_com_wsdl_addSpellActionResponse.prototype.getReturn = backend_com_wsdl_addSpellActionResponse_getReturn;

function backend_com_wsdl_addSpellActionResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_addSpellActionResponse.prototype.setReturn = backend_com_wsdl_addSpellActionResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}addSpellActionResponse
//
function backend_com_wsdl_addSpellActionResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_addSpellActionResponse.prototype.serialize = backend_com_wsdl_addSpellActionResponse_serialize;

function backend_com_wsdl_addSpellActionResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addSpellActionResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_spellAction_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}getQuestInstancesResponse
//
function backend_com_wsdl_getQuestInstancesResponse () {
    this.typeMarker = 'backend_com_wsdl_getQuestInstancesResponse';
    this._return = [];
}

//
// accessor is backend_com_wsdl_getQuestInstancesResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}questInstance
// - required element
// - array
//
// element set for return
// setter function is is backend_com_wsdl_getQuestInstancesResponse.prototype.setReturn
//
function backend_com_wsdl_getQuestInstancesResponse_getReturn() { return this._return;}

backend_com_wsdl_getQuestInstancesResponse.prototype.getReturn = backend_com_wsdl_getQuestInstancesResponse_getReturn;

function backend_com_wsdl_getQuestInstancesResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getQuestInstancesResponse.prototype.setReturn = backend_com_wsdl_getQuestInstancesResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getQuestInstancesResponse
//
function backend_com_wsdl_getQuestInstancesResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
      for (var ax = 0;ax < this._return.length;ax ++) {
       if (this._return[ax] == null) {
        xml = xml + '<return/>';
       } else {
        xml = xml + this._return[ax].serialize(cxfjsutils, 'return', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_getQuestInstancesResponse.prototype.serialize = backend_com_wsdl_getQuestInstancesResponse_serialize;

function backend_com_wsdl_getQuestInstancesResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getQuestInstancesResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = backend_com_wsdl_questInstance_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return'));
     newobject.setReturn(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}getActions
//
function backend_com_wsdl_getActions () {
    this.typeMarker = 'backend_com_wsdl_getActions';
    this._arg0 = [];
}

//
// accessor is backend_com_wsdl_getActions.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
// - array
//
// element set for arg0
// setter function is is backend_com_wsdl_getActions.prototype.setArg0
//
function backend_com_wsdl_getActions_getArg0() { return this._arg0;}

backend_com_wsdl_getActions.prototype.getArg0 = backend_com_wsdl_getActions_getArg0;

function backend_com_wsdl_getActions_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_getActions.prototype.setArg0 = backend_com_wsdl_getActions_setArg0;
//
// Serialize {http://backend.com/wsdl}getActions
//
function backend_com_wsdl_getActions_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      for (var ax = 0;ax < this._arg0.length;ax ++) {
       if (this._arg0[ax] == null) {
        xml = xml + '<arg0/>';
       } else {
        xml = xml + '<arg0>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._arg0[ax]);
        xml = xml + '</arg0>';
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_getActions.prototype.serialize = backend_com_wsdl_getActions_serialize;

function backend_com_wsdl_getActions_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getActions();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = parseInt(value);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0'));
     newobject.setArg0(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}deletePlayer
//
function backend_com_wsdl_deletePlayer () {
    this.typeMarker = 'backend_com_wsdl_deletePlayer';
    this._arg0 = 0;
}

//
// accessor is backend_com_wsdl_deletePlayer.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_deletePlayer.prototype.setArg0
//
function backend_com_wsdl_deletePlayer_getArg0() { return this._arg0;}

backend_com_wsdl_deletePlayer.prototype.getArg0 = backend_com_wsdl_deletePlayer_getArg0;

function backend_com_wsdl_deletePlayer_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_deletePlayer.prototype.setArg0 = backend_com_wsdl_deletePlayer_setArg0;
//
// Serialize {http://backend.com/wsdl}deletePlayer
//
function backend_com_wsdl_deletePlayer_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_deletePlayer.prototype.serialize = backend_com_wsdl_deletePlayer_serialize;

function backend_com_wsdl_deletePlayer_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_deletePlayer();
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
// Constructor for XML Schema item {http://backend.com/wsdl}getCompleteMarkerResponse
//
function backend_com_wsdl_getCompleteMarkerResponse () {
    this.typeMarker = 'backend_com_wsdl_getCompleteMarkerResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_getCompleteMarkerResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}completeMarker
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_getCompleteMarkerResponse.prototype.setReturn
//
function backend_com_wsdl_getCompleteMarkerResponse_getReturn() { return this._return;}

backend_com_wsdl_getCompleteMarkerResponse.prototype.getReturn = backend_com_wsdl_getCompleteMarkerResponse_getReturn;

function backend_com_wsdl_getCompleteMarkerResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getCompleteMarkerResponse.prototype.setReturn = backend_com_wsdl_getCompleteMarkerResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getCompleteMarkerResponse
//
function backend_com_wsdl_getCompleteMarkerResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getCompleteMarkerResponse.prototype.serialize = backend_com_wsdl_getCompleteMarkerResponse_serialize;

function backend_com_wsdl_getCompleteMarkerResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getCompleteMarkerResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_completeMarker_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}updateInvisibleMarker
//
function backend_com_wsdl_updateInvisibleMarker () {
    this.typeMarker = 'backend_com_wsdl_updateInvisibleMarker';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_updateInvisibleMarker.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}invisibleMarker
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_updateInvisibleMarker.prototype.setArg0
//
function backend_com_wsdl_updateInvisibleMarker_getArg0() { return this._arg0;}

backend_com_wsdl_updateInvisibleMarker.prototype.getArg0 = backend_com_wsdl_updateInvisibleMarker_getArg0;

function backend_com_wsdl_updateInvisibleMarker_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_updateInvisibleMarker.prototype.setArg0 = backend_com_wsdl_updateInvisibleMarker_setArg0;
//
// Serialize {http://backend.com/wsdl}updateInvisibleMarker
//
function backend_com_wsdl_updateInvisibleMarker_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_updateInvisibleMarker.prototype.serialize = backend_com_wsdl_updateInvisibleMarker_serialize;

function backend_com_wsdl_updateInvisibleMarker_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateInvisibleMarker();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_invisibleMarker_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}addInfoMarkerResponse
//
function backend_com_wsdl_addInfoMarkerResponse () {
    this.typeMarker = 'backend_com_wsdl_addInfoMarkerResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_addInfoMarkerResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}infoMarker
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_addInfoMarkerResponse.prototype.setReturn
//
function backend_com_wsdl_addInfoMarkerResponse_getReturn() { return this._return;}

backend_com_wsdl_addInfoMarkerResponse.prototype.getReturn = backend_com_wsdl_addInfoMarkerResponse_getReturn;

function backend_com_wsdl_addInfoMarkerResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_addInfoMarkerResponse.prototype.setReturn = backend_com_wsdl_addInfoMarkerResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}addInfoMarkerResponse
//
function backend_com_wsdl_addInfoMarkerResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_addInfoMarkerResponse.prototype.serialize = backend_com_wsdl_addInfoMarkerResponse_serialize;

function backend_com_wsdl_addInfoMarkerResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addInfoMarkerResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_infoMarker_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}getQuestsInRange
//
function backend_com_wsdl_getQuestsInRange () {
    this.typeMarker = 'backend_com_wsdl_getQuestsInRange';
    this._arg0 = null;
    this._arg1 = 0.0;
    this._arg2 = [];
}

//
// accessor is backend_com_wsdl_getQuestsInRange.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}mapPosition
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_getQuestsInRange.prototype.setArg0
//
function backend_com_wsdl_getQuestsInRange_getArg0() { return this._arg0;}

backend_com_wsdl_getQuestsInRange.prototype.getArg0 = backend_com_wsdl_getQuestsInRange_getArg0;

function backend_com_wsdl_getQuestsInRange_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_getQuestsInRange.prototype.setArg0 = backend_com_wsdl_getQuestsInRange_setArg0;
//
// accessor is backend_com_wsdl_getQuestsInRange.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}float
// - required element
//
// element set for arg1
// setter function is is backend_com_wsdl_getQuestsInRange.prototype.setArg1
//
function backend_com_wsdl_getQuestsInRange_getArg1() { return this._arg1;}

backend_com_wsdl_getQuestsInRange.prototype.getArg1 = backend_com_wsdl_getQuestsInRange_getArg1;

function backend_com_wsdl_getQuestsInRange_setArg1(value) { this._arg1 = value;}

backend_com_wsdl_getQuestsInRange.prototype.setArg1 = backend_com_wsdl_getQuestsInRange_setArg1;
//
// accessor is backend_com_wsdl_getQuestsInRange.prototype.getArg2
// element get for arg2
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
// - array
//
// element set for arg2
// setter function is is backend_com_wsdl_getQuestsInRange.prototype.setArg2
//
function backend_com_wsdl_getQuestsInRange_getArg2() { return this._arg2;}

backend_com_wsdl_getQuestsInRange.prototype.getArg2 = backend_com_wsdl_getQuestsInRange_getArg2;

function backend_com_wsdl_getQuestsInRange_setArg2(value) { this._arg2 = value;}

backend_com_wsdl_getQuestsInRange.prototype.setArg2 = backend_com_wsdl_getQuestsInRange_setArg2;
//
// Serialize {http://backend.com/wsdl}getQuestsInRange
//
function backend_com_wsdl_getQuestsInRange_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    // block for local variables
    {
     xml = xml + '<arg1>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._arg1);
     xml = xml + '</arg1>';
    }
    // block for local variables
    {
     if (this._arg2 != null) {
      for (var ax = 0;ax < this._arg2.length;ax ++) {
       if (this._arg2[ax] == null) {
        xml = xml + '<arg2/>';
       } else {
        xml = xml + '<arg2>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._arg2[ax]);
        xml = xml + '</arg2>';
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_getQuestsInRange.prototype.serialize = backend_com_wsdl_getQuestsInRange_serialize;

function backend_com_wsdl_getQuestsInRange_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getQuestsInRange();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_mapPosition_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg1');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseFloat(value);
    }
    newobject.setArg1(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg2');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg2')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = parseInt(value);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg2'));
     newobject.setArg2(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}getTreePartsLazy
//
function backend_com_wsdl_getTreePartsLazy () {
    this.typeMarker = 'backend_com_wsdl_getTreePartsLazy';
    this._arg0 = [];
}

//
// accessor is backend_com_wsdl_getTreePartsLazy.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
// - array
//
// element set for arg0
// setter function is is backend_com_wsdl_getTreePartsLazy.prototype.setArg0
//
function backend_com_wsdl_getTreePartsLazy_getArg0() { return this._arg0;}

backend_com_wsdl_getTreePartsLazy.prototype.getArg0 = backend_com_wsdl_getTreePartsLazy_getArg0;

function backend_com_wsdl_getTreePartsLazy_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_getTreePartsLazy.prototype.setArg0 = backend_com_wsdl_getTreePartsLazy_setArg0;
//
// Serialize {http://backend.com/wsdl}getTreePartsLazy
//
function backend_com_wsdl_getTreePartsLazy_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      for (var ax = 0;ax < this._arg0.length;ax ++) {
       if (this._arg0[ax] == null) {
        xml = xml + '<arg0/>';
       } else {
        xml = xml + '<arg0>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._arg0[ax]);
        xml = xml + '</arg0>';
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_getTreePartsLazy.prototype.serialize = backend_com_wsdl_getTreePartsLazy_serialize;

function backend_com_wsdl_getTreePartsLazy_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getTreePartsLazy();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = parseInt(value);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0'));
     newobject.setArg0(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}getQuests
//
function backend_com_wsdl_getQuests () {
    this.typeMarker = 'backend_com_wsdl_getQuests';
    this._arg0 = [];
}

//
// accessor is backend_com_wsdl_getQuests.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
// - array
//
// element set for arg0
// setter function is is backend_com_wsdl_getQuests.prototype.setArg0
//
function backend_com_wsdl_getQuests_getArg0() { return this._arg0;}

backend_com_wsdl_getQuests.prototype.getArg0 = backend_com_wsdl_getQuests_getArg0;

function backend_com_wsdl_getQuests_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_getQuests.prototype.setArg0 = backend_com_wsdl_getQuests_setArg0;
//
// Serialize {http://backend.com/wsdl}getQuests
//
function backend_com_wsdl_getQuests_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      for (var ax = 0;ax < this._arg0.length;ax ++) {
       if (this._arg0[ax] == null) {
        xml = xml + '<arg0/>';
       } else {
        xml = xml + '<arg0>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._arg0[ax]);
        xml = xml + '</arg0>';
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_getQuests.prototype.serialize = backend_com_wsdl_getQuests_serialize;

function backend_com_wsdl_getQuests_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getQuests();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = parseInt(value);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0'));
     newobject.setArg0(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}setQuestInstanceOfMarkerTreePart
//
function backend_com_wsdl_setQuestInstanceOfMarkerTreePart () {
    this.typeMarker = 'backend_com_wsdl_setQuestInstanceOfMarkerTreePart';
    this._arg0 = 0;
    this._arg1 = 0;
}

//
// accessor is backend_com_wsdl_setQuestInstanceOfMarkerTreePart.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_setQuestInstanceOfMarkerTreePart.prototype.setArg0
//
function backend_com_wsdl_setQuestInstanceOfMarkerTreePart_getArg0() { return this._arg0;}

backend_com_wsdl_setQuestInstanceOfMarkerTreePart.prototype.getArg0 = backend_com_wsdl_setQuestInstanceOfMarkerTreePart_getArg0;

function backend_com_wsdl_setQuestInstanceOfMarkerTreePart_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_setQuestInstanceOfMarkerTreePart.prototype.setArg0 = backend_com_wsdl_setQuestInstanceOfMarkerTreePart_setArg0;
//
// accessor is backend_com_wsdl_setQuestInstanceOfMarkerTreePart.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg1
// setter function is is backend_com_wsdl_setQuestInstanceOfMarkerTreePart.prototype.setArg1
//
function backend_com_wsdl_setQuestInstanceOfMarkerTreePart_getArg1() { return this._arg1;}

backend_com_wsdl_setQuestInstanceOfMarkerTreePart.prototype.getArg1 = backend_com_wsdl_setQuestInstanceOfMarkerTreePart_getArg1;

function backend_com_wsdl_setQuestInstanceOfMarkerTreePart_setArg1(value) { this._arg1 = value;}

backend_com_wsdl_setQuestInstanceOfMarkerTreePart.prototype.setArg1 = backend_com_wsdl_setQuestInstanceOfMarkerTreePart_setArg1;
//
// Serialize {http://backend.com/wsdl}setQuestInstanceOfMarkerTreePart
//
function backend_com_wsdl_setQuestInstanceOfMarkerTreePart_serialize(cxfjsutils, elementName, extraNamespaces) {
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
    // block for local variables
    {
     xml = xml + '<arg1>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._arg1);
     xml = xml + '</arg1>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_setQuestInstanceOfMarkerTreePart.prototype.serialize = backend_com_wsdl_setQuestInstanceOfMarkerTreePart_serialize;

function backend_com_wsdl_setQuestInstanceOfMarkerTreePart_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_setQuestInstanceOfMarkerTreePart();
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
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg1');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setArg1(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}clearDB
//
function backend_com_wsdl_clearDB () {
    this.typeMarker = 'backend_com_wsdl_clearDB';
}

//
// Serialize {http://backend.com/wsdl}clearDB
//
function backend_com_wsdl_clearDB_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_clearDB.prototype.serialize = backend_com_wsdl_clearDB_serialize;

function backend_com_wsdl_clearDB_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_clearDB();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}addPlayerResponse
//
function backend_com_wsdl_addPlayerResponse () {
    this.typeMarker = 'backend_com_wsdl_addPlayerResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_addPlayerResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}player
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_addPlayerResponse.prototype.setReturn
//
function backend_com_wsdl_addPlayerResponse_getReturn() { return this._return;}

backend_com_wsdl_addPlayerResponse.prototype.getReturn = backend_com_wsdl_addPlayerResponse_getReturn;

function backend_com_wsdl_addPlayerResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_addPlayerResponse.prototype.setReturn = backend_com_wsdl_addPlayerResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}addPlayerResponse
//
function backend_com_wsdl_addPlayerResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_addPlayerResponse.prototype.serialize = backend_com_wsdl_addPlayerResponse_serialize;

function backend_com_wsdl_addPlayerResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addPlayerResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_player_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}marker
//
function backend_com_wsdl_marker () {
    this.typeMarker = 'backend_com_wsdl_marker';
    this._htmlId = 0;
    this._id = 0;
    this._name = null;
    this._position = null;
    this._version = null;
}

//
// accessor is backend_com_wsdl_marker.prototype.getHtmlId
// element get for htmlId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for htmlId
// setter function is is backend_com_wsdl_marker.prototype.setHtmlId
//
function backend_com_wsdl_marker_getHtmlId() { return this._htmlId;}

backend_com_wsdl_marker.prototype.getHtmlId = backend_com_wsdl_marker_getHtmlId;

function backend_com_wsdl_marker_setHtmlId(value) { this._htmlId = value;}

backend_com_wsdl_marker.prototype.setHtmlId = backend_com_wsdl_marker_setHtmlId;
//
// accessor is backend_com_wsdl_marker.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for id
// setter function is is backend_com_wsdl_marker.prototype.setId
//
function backend_com_wsdl_marker_getId() { return this._id;}

backend_com_wsdl_marker.prototype.getId = backend_com_wsdl_marker_getId;

function backend_com_wsdl_marker_setId(value) { this._id = value;}

backend_com_wsdl_marker.prototype.setId = backend_com_wsdl_marker_setId;
//
// accessor is backend_com_wsdl_marker.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for name
// setter function is is backend_com_wsdl_marker.prototype.setName
//
function backend_com_wsdl_marker_getName() { return this._name;}

backend_com_wsdl_marker.prototype.getName = backend_com_wsdl_marker_getName;

function backend_com_wsdl_marker_setName(value) { this._name = value;}

backend_com_wsdl_marker.prototype.setName = backend_com_wsdl_marker_setName;
//
// accessor is backend_com_wsdl_marker.prototype.getPosition
// element get for position
// - element type is {http://backend.com/wsdl}mapPosition
// - optional element
//
// element set for position
// setter function is is backend_com_wsdl_marker.prototype.setPosition
//
function backend_com_wsdl_marker_getPosition() { return this._position;}

backend_com_wsdl_marker.prototype.getPosition = backend_com_wsdl_marker_getPosition;

function backend_com_wsdl_marker_setPosition(value) { this._position = value;}

backend_com_wsdl_marker.prototype.setPosition = backend_com_wsdl_marker_setPosition;
//
// accessor is backend_com_wsdl_marker.prototype.getVersion
// element get for version
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for version
// setter function is is backend_com_wsdl_marker.prototype.setVersion
//
function backend_com_wsdl_marker_getVersion() { return this._version;}

backend_com_wsdl_marker.prototype.getVersion = backend_com_wsdl_marker_getVersion;

function backend_com_wsdl_marker_setVersion(value) { this._version = value;}

backend_com_wsdl_marker.prototype.setVersion = backend_com_wsdl_marker_setVersion;
//
// Serialize {http://backend.com/wsdl}marker
//
function backend_com_wsdl_marker_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<htmlId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._htmlId);
     xml = xml + '</htmlId>';
    }
    // block for local variables
    {
     xml = xml + '<id>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._id);
     xml = xml + '</id>';
    }
    // block for local variables
    {
     if (this._name != null) {
      xml = xml + '<name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._name);
      xml = xml + '</name>';
     }
    }
    // block for local variables
    {
     if (this._position != null) {
      xml = xml + this._position.serialize(cxfjsutils, 'position', null);
     }
    }
    // block for local variables
    {
     if (this._version != null) {
      xml = xml + '<version>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._version);
      xml = xml + '</version>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_marker.prototype.serialize = backend_com_wsdl_marker_serialize;

function backend_com_wsdl_marker_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_marker();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing htmlId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setHtmlId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
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
    cxfjsutils.trace('processing name');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'name')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setName(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing position');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'position')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_mapPosition_deserialize(cxfjsutils, curElement);
     }
     newobject.setPosition(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing version');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'version')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setVersion(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}getDecksResponse
//
function backend_com_wsdl_getDecksResponse () {
    this.typeMarker = 'backend_com_wsdl_getDecksResponse';
    this._return = [];
}

//
// accessor is backend_com_wsdl_getDecksResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}deck
// - required element
// - array
//
// element set for return
// setter function is is backend_com_wsdl_getDecksResponse.prototype.setReturn
//
function backend_com_wsdl_getDecksResponse_getReturn() { return this._return;}

backend_com_wsdl_getDecksResponse.prototype.getReturn = backend_com_wsdl_getDecksResponse_getReturn;

function backend_com_wsdl_getDecksResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getDecksResponse.prototype.setReturn = backend_com_wsdl_getDecksResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getDecksResponse
//
function backend_com_wsdl_getDecksResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
      for (var ax = 0;ax < this._return.length;ax ++) {
       if (this._return[ax] == null) {
        xml = xml + '<return/>';
       } else {
        xml = xml + this._return[ax].serialize(cxfjsutils, 'return', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_getDecksResponse.prototype.serialize = backend_com_wsdl_getDecksResponse_serialize;

function backend_com_wsdl_getDecksResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getDecksResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = backend_com_wsdl_deck_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return'));
     newobject.setReturn(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}addMonsterAction
//
function backend_com_wsdl_addMonsterAction () {
    this.typeMarker = 'backend_com_wsdl_addMonsterAction';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_addMonsterAction.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}monsterAction
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_addMonsterAction.prototype.setArg0
//
function backend_com_wsdl_addMonsterAction_getArg0() { return this._arg0;}

backend_com_wsdl_addMonsterAction.prototype.getArg0 = backend_com_wsdl_addMonsterAction_getArg0;

function backend_com_wsdl_addMonsterAction_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_addMonsterAction.prototype.setArg0 = backend_com_wsdl_addMonsterAction_setArg0;
//
// Serialize {http://backend.com/wsdl}addMonsterAction
//
function backend_com_wsdl_addMonsterAction_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_addMonsterAction.prototype.serialize = backend_com_wsdl_addMonsterAction_serialize;

function backend_com_wsdl_addMonsterAction_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addMonsterAction();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_monsterAction_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}deleteDeckResponse
//
function backend_com_wsdl_deleteDeckResponse () {
    this.typeMarker = 'backend_com_wsdl_deleteDeckResponse';
}

//
// Serialize {http://backend.com/wsdl}deleteDeckResponse
//
function backend_com_wsdl_deleteDeckResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_deleteDeckResponse.prototype.serialize = backend_com_wsdl_deleteDeckResponse_serialize;

function backend_com_wsdl_deleteDeckResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_deleteDeckResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}getMonsterCard
//
function backend_com_wsdl_getMonsterCard () {
    this.typeMarker = 'backend_com_wsdl_getMonsterCard';
    this._arg0 = 0;
}

//
// accessor is backend_com_wsdl_getMonsterCard.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_getMonsterCard.prototype.setArg0
//
function backend_com_wsdl_getMonsterCard_getArg0() { return this._arg0;}

backend_com_wsdl_getMonsterCard.prototype.getArg0 = backend_com_wsdl_getMonsterCard_getArg0;

function backend_com_wsdl_getMonsterCard_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_getMonsterCard.prototype.setArg0 = backend_com_wsdl_getMonsterCard_setArg0;
//
// Serialize {http://backend.com/wsdl}getMonsterCard
//
function backend_com_wsdl_getMonsterCard_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getMonsterCard.prototype.serialize = backend_com_wsdl_getMonsterCard_serialize;

function backend_com_wsdl_getMonsterCard_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getMonsterCard();
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
// Constructor for XML Schema item {http://backend.com/wsdl}addQuestResponse
//
function backend_com_wsdl_addQuestResponse () {
    this.typeMarker = 'backend_com_wsdl_addQuestResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_addQuestResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}quest
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_addQuestResponse.prototype.setReturn
//
function backend_com_wsdl_addQuestResponse_getReturn() { return this._return;}

backend_com_wsdl_addQuestResponse.prototype.getReturn = backend_com_wsdl_addQuestResponse_getReturn;

function backend_com_wsdl_addQuestResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_addQuestResponse.prototype.setReturn = backend_com_wsdl_addQuestResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}addQuestResponse
//
function backend_com_wsdl_addQuestResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_addQuestResponse.prototype.serialize = backend_com_wsdl_addQuestResponse_serialize;

function backend_com_wsdl_addQuestResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addQuestResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_quest_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}deleteUser
//
function backend_com_wsdl_deleteUser () {
    this.typeMarker = 'backend_com_wsdl_deleteUser';
    this._arg0 = 0;
}

//
// accessor is backend_com_wsdl_deleteUser.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_deleteUser.prototype.setArg0
//
function backend_com_wsdl_deleteUser_getArg0() { return this._arg0;}

backend_com_wsdl_deleteUser.prototype.getArg0 = backend_com_wsdl_deleteUser_getArg0;

function backend_com_wsdl_deleteUser_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_deleteUser.prototype.setArg0 = backend_com_wsdl_deleteUser_setArg0;
//
// Serialize {http://backend.com/wsdl}deleteUser
//
function backend_com_wsdl_deleteUser_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_deleteUser.prototype.serialize = backend_com_wsdl_deleteUser_serialize;

function backend_com_wsdl_deleteUser_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_deleteUser();
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
// Constructor for XML Schema item {http://backend.com/wsdl}updateQuestInstanceResponse
//
function backend_com_wsdl_updateQuestInstanceResponse () {
    this.typeMarker = 'backend_com_wsdl_updateQuestInstanceResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_updateQuestInstanceResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}questInstance
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_updateQuestInstanceResponse.prototype.setReturn
//
function backend_com_wsdl_updateQuestInstanceResponse_getReturn() { return this._return;}

backend_com_wsdl_updateQuestInstanceResponse.prototype.getReturn = backend_com_wsdl_updateQuestInstanceResponse_getReturn;

function backend_com_wsdl_updateQuestInstanceResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_updateQuestInstanceResponse.prototype.setReturn = backend_com_wsdl_updateQuestInstanceResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}updateQuestInstanceResponse
//
function backend_com_wsdl_updateQuestInstanceResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updateQuestInstanceResponse.prototype.serialize = backend_com_wsdl_updateQuestInstanceResponse_serialize;

function backend_com_wsdl_updateQuestInstanceResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateQuestInstanceResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_questInstance_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}addSpellCard
//
function backend_com_wsdl_addSpellCard () {
    this.typeMarker = 'backend_com_wsdl_addSpellCard';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_addSpellCard.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}spellCard
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_addSpellCard.prototype.setArg0
//
function backend_com_wsdl_addSpellCard_getArg0() { return this._arg0;}

backend_com_wsdl_addSpellCard.prototype.getArg0 = backend_com_wsdl_addSpellCard_getArg0;

function backend_com_wsdl_addSpellCard_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_addSpellCard.prototype.setArg0 = backend_com_wsdl_addSpellCard_setArg0;
//
// Serialize {http://backend.com/wsdl}addSpellCard
//
function backend_com_wsdl_addSpellCard_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_addSpellCard.prototype.serialize = backend_com_wsdl_addSpellCard_serialize;

function backend_com_wsdl_addSpellCard_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addSpellCard();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_spellCard_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}deleteDeck
//
function backend_com_wsdl_deleteDeck () {
    this.typeMarker = 'backend_com_wsdl_deleteDeck';
    this._arg0 = 0;
}

//
// accessor is backend_com_wsdl_deleteDeck.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_deleteDeck.prototype.setArg0
//
function backend_com_wsdl_deleteDeck_getArg0() { return this._arg0;}

backend_com_wsdl_deleteDeck.prototype.getArg0 = backend_com_wsdl_deleteDeck_getArg0;

function backend_com_wsdl_deleteDeck_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_deleteDeck.prototype.setArg0 = backend_com_wsdl_deleteDeck_setArg0;
//
// Serialize {http://backend.com/wsdl}deleteDeck
//
function backend_com_wsdl_deleteDeck_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_deleteDeck.prototype.serialize = backend_com_wsdl_deleteDeck_serialize;

function backend_com_wsdl_deleteDeck_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_deleteDeck();
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
// Constructor for XML Schema item {http://backend.com/wsdl}getPlayer
//
function backend_com_wsdl_getPlayer () {
    this.typeMarker = 'backend_com_wsdl_getPlayer';
    this._arg0 = 0;
}

//
// accessor is backend_com_wsdl_getPlayer.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_getPlayer.prototype.setArg0
//
function backend_com_wsdl_getPlayer_getArg0() { return this._arg0;}

backend_com_wsdl_getPlayer.prototype.getArg0 = backend_com_wsdl_getPlayer_getArg0;

function backend_com_wsdl_getPlayer_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_getPlayer.prototype.setArg0 = backend_com_wsdl_getPlayer_setArg0;
//
// Serialize {http://backend.com/wsdl}getPlayer
//
function backend_com_wsdl_getPlayer_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getPlayer.prototype.serialize = backend_com_wsdl_getPlayer_serialize;

function backend_com_wsdl_getPlayer_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getPlayer();
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
// Constructor for XML Schema item {http://backend.com/wsdl}updateUser
//
function backend_com_wsdl_updateUser () {
    this.typeMarker = 'backend_com_wsdl_updateUser';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_updateUser.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}user
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_updateUser.prototype.setArg0
//
function backend_com_wsdl_updateUser_getArg0() { return this._arg0;}

backend_com_wsdl_updateUser.prototype.getArg0 = backend_com_wsdl_updateUser_getArg0;

function backend_com_wsdl_updateUser_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_updateUser.prototype.setArg0 = backend_com_wsdl_updateUser_setArg0;
//
// Serialize {http://backend.com/wsdl}updateUser
//
function backend_com_wsdl_updateUser_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_updateUser.prototype.serialize = backend_com_wsdl_updateUser_serialize;

function backend_com_wsdl_updateUser_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateUser();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_user_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}addTreePartLazyResponse
//
function backend_com_wsdl_addTreePartLazyResponse () {
    this.typeMarker = 'backend_com_wsdl_addTreePartLazyResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_addTreePartLazyResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}treePartLazy
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_addTreePartLazyResponse.prototype.setReturn
//
function backend_com_wsdl_addTreePartLazyResponse_getReturn() { return this._return;}

backend_com_wsdl_addTreePartLazyResponse.prototype.getReturn = backend_com_wsdl_addTreePartLazyResponse_getReturn;

function backend_com_wsdl_addTreePartLazyResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_addTreePartLazyResponse.prototype.setReturn = backend_com_wsdl_addTreePartLazyResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}addTreePartLazyResponse
//
function backend_com_wsdl_addTreePartLazyResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_addTreePartLazyResponse.prototype.serialize = backend_com_wsdl_addTreePartLazyResponse_serialize;

function backend_com_wsdl_addTreePartLazyResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addTreePartLazyResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_treePartLazy_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}addQuestInstance
//
function backend_com_wsdl_addQuestInstance () {
    this.typeMarker = 'backend_com_wsdl_addQuestInstance';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_addQuestInstance.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}questInstance
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_addQuestInstance.prototype.setArg0
//
function backend_com_wsdl_addQuestInstance_getArg0() { return this._arg0;}

backend_com_wsdl_addQuestInstance.prototype.getArg0 = backend_com_wsdl_addQuestInstance_getArg0;

function backend_com_wsdl_addQuestInstance_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_addQuestInstance.prototype.setArg0 = backend_com_wsdl_addQuestInstance_setArg0;
//
// Serialize {http://backend.com/wsdl}addQuestInstance
//
function backend_com_wsdl_addQuestInstance_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_addQuestInstance.prototype.serialize = backend_com_wsdl_addQuestInstance_serialize;

function backend_com_wsdl_addQuestInstance_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addQuestInstance();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_questInstance_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}addQuizMarkerResponse
//
function backend_com_wsdl_addQuizMarkerResponse () {
    this.typeMarker = 'backend_com_wsdl_addQuizMarkerResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_addQuizMarkerResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}quizMarker
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_addQuizMarkerResponse.prototype.setReturn
//
function backend_com_wsdl_addQuizMarkerResponse_getReturn() { return this._return;}

backend_com_wsdl_addQuizMarkerResponse.prototype.getReturn = backend_com_wsdl_addQuizMarkerResponse_getReturn;

function backend_com_wsdl_addQuizMarkerResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_addQuizMarkerResponse.prototype.setReturn = backend_com_wsdl_addQuizMarkerResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}addQuizMarkerResponse
//
function backend_com_wsdl_addQuizMarkerResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_addQuizMarkerResponse.prototype.serialize = backend_com_wsdl_addQuizMarkerResponse_serialize;

function backend_com_wsdl_addQuizMarkerResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addQuizMarkerResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_quizMarker_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}getSpellCardResponse
//
function backend_com_wsdl_getSpellCardResponse () {
    this.typeMarker = 'backend_com_wsdl_getSpellCardResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_getSpellCardResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}spellCard
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_getSpellCardResponse.prototype.setReturn
//
function backend_com_wsdl_getSpellCardResponse_getReturn() { return this._return;}

backend_com_wsdl_getSpellCardResponse.prototype.getReturn = backend_com_wsdl_getSpellCardResponse_getReturn;

function backend_com_wsdl_getSpellCardResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getSpellCardResponse.prototype.setReturn = backend_com_wsdl_getSpellCardResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getSpellCardResponse
//
function backend_com_wsdl_getSpellCardResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getSpellCardResponse.prototype.serialize = backend_com_wsdl_getSpellCardResponse_serialize;

function backend_com_wsdl_getSpellCardResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getSpellCardResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_spellCard_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}updateMarkerTreePartResponse
//
function backend_com_wsdl_updateMarkerTreePartResponse () {
    this.typeMarker = 'backend_com_wsdl_updateMarkerTreePartResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_updateMarkerTreePartResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}markerTreePart
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_updateMarkerTreePartResponse.prototype.setReturn
//
function backend_com_wsdl_updateMarkerTreePartResponse_getReturn() { return this._return;}

backend_com_wsdl_updateMarkerTreePartResponse.prototype.getReturn = backend_com_wsdl_updateMarkerTreePartResponse_getReturn;

function backend_com_wsdl_updateMarkerTreePartResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_updateMarkerTreePartResponse.prototype.setReturn = backend_com_wsdl_updateMarkerTreePartResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}updateMarkerTreePartResponse
//
function backend_com_wsdl_updateMarkerTreePartResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updateMarkerTreePartResponse.prototype.serialize = backend_com_wsdl_updateMarkerTreePartResponse_serialize;

function backend_com_wsdl_updateMarkerTreePartResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateMarkerTreePartResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_markerTreePart_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}getSpellCardsResponse
//
function backend_com_wsdl_getSpellCardsResponse () {
    this.typeMarker = 'backend_com_wsdl_getSpellCardsResponse';
    this._return = [];
}

//
// accessor is backend_com_wsdl_getSpellCardsResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}spellCard
// - required element
// - array
//
// element set for return
// setter function is is backend_com_wsdl_getSpellCardsResponse.prototype.setReturn
//
function backend_com_wsdl_getSpellCardsResponse_getReturn() { return this._return;}

backend_com_wsdl_getSpellCardsResponse.prototype.getReturn = backend_com_wsdl_getSpellCardsResponse_getReturn;

function backend_com_wsdl_getSpellCardsResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getSpellCardsResponse.prototype.setReturn = backend_com_wsdl_getSpellCardsResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getSpellCardsResponse
//
function backend_com_wsdl_getSpellCardsResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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
      for (var ax = 0;ax < this._return.length;ax ++) {
       if (this._return[ax] == null) {
        xml = xml + '<return/>';
       } else {
        xml = xml + this._return[ax].serialize(cxfjsutils, 'return', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_getSpellCardsResponse.prototype.serialize = backend_com_wsdl_getSpellCardsResponse_serialize;

function backend_com_wsdl_getSpellCardsResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getSpellCardsResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = backend_com_wsdl_spellCard_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return'));
     newobject.setReturn(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}quizMarker
//
function backend_com_wsdl_quizMarker () {
    this.typeMarker = 'backend_com_wsdl_quizMarker';
    this._htmlId = 0;
    this._id = 0;
    this._name = null;
    this._position = null;
    this._version = null;
}

//
// accessor is backend_com_wsdl_quizMarker.prototype.getHtmlId
// element get for htmlId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for htmlId
// setter function is is backend_com_wsdl_quizMarker.prototype.setHtmlId
//
function backend_com_wsdl_quizMarker_getHtmlId() { return this._htmlId;}

backend_com_wsdl_quizMarker.prototype.getHtmlId = backend_com_wsdl_quizMarker_getHtmlId;

function backend_com_wsdl_quizMarker_setHtmlId(value) { this._htmlId = value;}

backend_com_wsdl_quizMarker.prototype.setHtmlId = backend_com_wsdl_quizMarker_setHtmlId;
//
// accessor is backend_com_wsdl_quizMarker.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for id
// setter function is is backend_com_wsdl_quizMarker.prototype.setId
//
function backend_com_wsdl_quizMarker_getId() { return this._id;}

backend_com_wsdl_quizMarker.prototype.getId = backend_com_wsdl_quizMarker_getId;

function backend_com_wsdl_quizMarker_setId(value) { this._id = value;}

backend_com_wsdl_quizMarker.prototype.setId = backend_com_wsdl_quizMarker_setId;
//
// accessor is backend_com_wsdl_quizMarker.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for name
// setter function is is backend_com_wsdl_quizMarker.prototype.setName
//
function backend_com_wsdl_quizMarker_getName() { return this._name;}

backend_com_wsdl_quizMarker.prototype.getName = backend_com_wsdl_quizMarker_getName;

function backend_com_wsdl_quizMarker_setName(value) { this._name = value;}

backend_com_wsdl_quizMarker.prototype.setName = backend_com_wsdl_quizMarker_setName;
//
// accessor is backend_com_wsdl_quizMarker.prototype.getPosition
// element get for position
// - element type is {http://backend.com/wsdl}mapPosition
// - optional element
//
// element set for position
// setter function is is backend_com_wsdl_quizMarker.prototype.setPosition
//
function backend_com_wsdl_quizMarker_getPosition() { return this._position;}

backend_com_wsdl_quizMarker.prototype.getPosition = backend_com_wsdl_quizMarker_getPosition;

function backend_com_wsdl_quizMarker_setPosition(value) { this._position = value;}

backend_com_wsdl_quizMarker.prototype.setPosition = backend_com_wsdl_quizMarker_setPosition;
//
// accessor is backend_com_wsdl_quizMarker.prototype.getVersion
// element get for version
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for version
// setter function is is backend_com_wsdl_quizMarker.prototype.setVersion
//
function backend_com_wsdl_quizMarker_getVersion() { return this._version;}

backend_com_wsdl_quizMarker.prototype.getVersion = backend_com_wsdl_quizMarker_getVersion;

function backend_com_wsdl_quizMarker_setVersion(value) { this._version = value;}

backend_com_wsdl_quizMarker.prototype.setVersion = backend_com_wsdl_quizMarker_setVersion;
//
// Serialize {http://backend.com/wsdl}quizMarker
//
function backend_com_wsdl_quizMarker_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<htmlId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._htmlId);
     xml = xml + '</htmlId>';
    }
    // block for local variables
    {
     xml = xml + '<id>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._id);
     xml = xml + '</id>';
    }
    // block for local variables
    {
     if (this._name != null) {
      xml = xml + '<name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._name);
      xml = xml + '</name>';
     }
    }
    // block for local variables
    {
     if (this._position != null) {
      xml = xml + this._position.serialize(cxfjsutils, 'position', null);
     }
    }
    // block for local variables
    {
     if (this._version != null) {
      xml = xml + '<version>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._version);
      xml = xml + '</version>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_quizMarker.prototype.serialize = backend_com_wsdl_quizMarker_serialize;

function backend_com_wsdl_quizMarker_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_quizMarker();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing htmlId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setHtmlId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
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
    cxfjsutils.trace('processing name');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'name')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setName(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing position');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'position')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_mapPosition_deserialize(cxfjsutils, curElement);
     }
     newobject.setPosition(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing version');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'version')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setVersion(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}player
//
function backend_com_wsdl_player () {
    this.typeMarker = 'backend_com_wsdl_player';
    this._activeQuestIds = [];
    this._cardIds = null;
    this._deckIds = [];
    this._id = 0;
    this._solvedQuestIds = [];
    this._version = null;
}

//
// accessor is backend_com_wsdl_player.prototype.getActiveQuestIds
// element get for activeQuestIds
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
// - array
// - nillable
//
// element set for activeQuestIds
// setter function is is backend_com_wsdl_player.prototype.setActiveQuestIds
//
function backend_com_wsdl_player_getActiveQuestIds() { return this._activeQuestIds;}

backend_com_wsdl_player.prototype.getActiveQuestIds = backend_com_wsdl_player_getActiveQuestIds;

function backend_com_wsdl_player_setActiveQuestIds(value) { this._activeQuestIds = value;}

backend_com_wsdl_player.prototype.setActiveQuestIds = backend_com_wsdl_player_setActiveQuestIds;
//
// accessor is backend_com_wsdl_player.prototype.getCardIds
// element get for cardIds
// - element type is null
// - required element
//
// element set for cardIds
// setter function is is backend_com_wsdl_player.prototype.setCardIds
//
function backend_com_wsdl_player_getCardIds() { return this._cardIds;}

backend_com_wsdl_player.prototype.getCardIds = backend_com_wsdl_player_getCardIds;

function backend_com_wsdl_player_setCardIds(value) { this._cardIds = value;}

backend_com_wsdl_player.prototype.setCardIds = backend_com_wsdl_player_setCardIds;
//
// accessor is backend_com_wsdl_player.prototype.getDeckIds
// element get for deckIds
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
// - array
// - nillable
//
// element set for deckIds
// setter function is is backend_com_wsdl_player.prototype.setDeckIds
//
function backend_com_wsdl_player_getDeckIds() { return this._deckIds;}

backend_com_wsdl_player.prototype.getDeckIds = backend_com_wsdl_player_getDeckIds;

function backend_com_wsdl_player_setDeckIds(value) { this._deckIds = value;}

backend_com_wsdl_player.prototype.setDeckIds = backend_com_wsdl_player_setDeckIds;
//
// accessor is backend_com_wsdl_player.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for id
// setter function is is backend_com_wsdl_player.prototype.setId
//
function backend_com_wsdl_player_getId() { return this._id;}

backend_com_wsdl_player.prototype.getId = backend_com_wsdl_player_getId;

function backend_com_wsdl_player_setId(value) { this._id = value;}

backend_com_wsdl_player.prototype.setId = backend_com_wsdl_player_setId;
//
// accessor is backend_com_wsdl_player.prototype.getSolvedQuestIds
// element get for solvedQuestIds
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
// - array
// - nillable
//
// element set for solvedQuestIds
// setter function is is backend_com_wsdl_player.prototype.setSolvedQuestIds
//
function backend_com_wsdl_player_getSolvedQuestIds() { return this._solvedQuestIds;}

backend_com_wsdl_player.prototype.getSolvedQuestIds = backend_com_wsdl_player_getSolvedQuestIds;

function backend_com_wsdl_player_setSolvedQuestIds(value) { this._solvedQuestIds = value;}

backend_com_wsdl_player.prototype.setSolvedQuestIds = backend_com_wsdl_player_setSolvedQuestIds;
//
// accessor is backend_com_wsdl_player.prototype.getVersion
// element get for version
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for version
// setter function is is backend_com_wsdl_player.prototype.setVersion
//
function backend_com_wsdl_player_getVersion() { return this._version;}

backend_com_wsdl_player.prototype.getVersion = backend_com_wsdl_player_getVersion;

function backend_com_wsdl_player_setVersion(value) { this._version = value;}

backend_com_wsdl_player.prototype.setVersion = backend_com_wsdl_player_setVersion;
//
// Serialize {http://backend.com/wsdl}player
//
function backend_com_wsdl_player_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._activeQuestIds != null) {
      for (var ax = 0;ax < this._activeQuestIds.length;ax ++) {
       if (this._activeQuestIds[ax] == null) {
        xml = xml + '<activeQuestIds xsi:nil=\'true\'/>';
       } else {
        xml = xml + '<activeQuestIds>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._activeQuestIds[ax]);
        xml = xml + '</activeQuestIds>';
       }
      }
     }
    }
    // block for local variables
    {
     xml = xml + this._cardIds.serialize(cxfjsutils, 'cardIds', null);
    }
    // block for local variables
    {
     if (this._deckIds != null) {
      for (var ax = 0;ax < this._deckIds.length;ax ++) {
       if (this._deckIds[ax] == null) {
        xml = xml + '<deckIds xsi:nil=\'true\'/>';
       } else {
        xml = xml + '<deckIds>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._deckIds[ax]);
        xml = xml + '</deckIds>';
       }
      }
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
     if (this._solvedQuestIds != null) {
      for (var ax = 0;ax < this._solvedQuestIds.length;ax ++) {
       if (this._solvedQuestIds[ax] == null) {
        xml = xml + '<solvedQuestIds xsi:nil=\'true\'/>';
       } else {
        xml = xml + '<solvedQuestIds>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._solvedQuestIds[ax]);
        xml = xml + '</solvedQuestIds>';
       }
      }
     }
    }
    // block for local variables
    {
     if (this._version != null) {
      xml = xml + '<version>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._version);
      xml = xml + '</version>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_player.prototype.serialize = backend_com_wsdl_player_serialize;

function backend_com_wsdl_player_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_player();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing activeQuestIds');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'activeQuestIds')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = parseInt(value);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'activeQuestIds'));
     newobject.setActiveQuestIds(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing cardIds');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = backend_com_wsdl_cardIds_deserialize(cxfjsutils, curElement);
    }
    newobject.setCardIds(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing deckIds');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'deckIds')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = parseInt(value);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'deckIds'));
     newobject.setDeckIds(item);
     var item = null;
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
    cxfjsutils.trace('processing solvedQuestIds');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'solvedQuestIds')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = parseInt(value);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'solvedQuestIds'));
     newobject.setSolvedQuestIds(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing version');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'version')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setVersion(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}getSpellCard
//
function backend_com_wsdl_getSpellCard () {
    this.typeMarker = 'backend_com_wsdl_getSpellCard';
    this._arg0 = 0;
}

//
// accessor is backend_com_wsdl_getSpellCard.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_getSpellCard.prototype.setArg0
//
function backend_com_wsdl_getSpellCard_getArg0() { return this._arg0;}

backend_com_wsdl_getSpellCard.prototype.getArg0 = backend_com_wsdl_getSpellCard_getArg0;

function backend_com_wsdl_getSpellCard_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_getSpellCard.prototype.setArg0 = backend_com_wsdl_getSpellCard_setArg0;
//
// Serialize {http://backend.com/wsdl}getSpellCard
//
function backend_com_wsdl_getSpellCard_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getSpellCard.prototype.serialize = backend_com_wsdl_getSpellCard_serialize;

function backend_com_wsdl_getSpellCard_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getSpellCard();
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
// Constructor for XML Schema item {http://backend.com/wsdl}treePartLazy
//
function backend_com_wsdl_treePartLazy () {
    this.typeMarker = 'backend_com_wsdl_treePartLazy';
    this._active = '';
    this._finished = '';
    this._id = 0;
    this._markerId = 0;
    this._questInstanceId = 0;
    this._successorIds = [];
    this._type = '';
}

//
// accessor is backend_com_wsdl_treePartLazy.prototype.getActive
// element get for active
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for active
// setter function is is backend_com_wsdl_treePartLazy.prototype.setActive
//
function backend_com_wsdl_treePartLazy_getActive() { return this._active;}

backend_com_wsdl_treePartLazy.prototype.getActive = backend_com_wsdl_treePartLazy_getActive;

function backend_com_wsdl_treePartLazy_setActive(value) { this._active = value;}

backend_com_wsdl_treePartLazy.prototype.setActive = backend_com_wsdl_treePartLazy_setActive;
//
// accessor is backend_com_wsdl_treePartLazy.prototype.getFinished
// element get for finished
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for finished
// setter function is is backend_com_wsdl_treePartLazy.prototype.setFinished
//
function backend_com_wsdl_treePartLazy_getFinished() { return this._finished;}

backend_com_wsdl_treePartLazy.prototype.getFinished = backend_com_wsdl_treePartLazy_getFinished;

function backend_com_wsdl_treePartLazy_setFinished(value) { this._finished = value;}

backend_com_wsdl_treePartLazy.prototype.setFinished = backend_com_wsdl_treePartLazy_setFinished;
//
// accessor is backend_com_wsdl_treePartLazy.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for id
// setter function is is backend_com_wsdl_treePartLazy.prototype.setId
//
function backend_com_wsdl_treePartLazy_getId() { return this._id;}

backend_com_wsdl_treePartLazy.prototype.getId = backend_com_wsdl_treePartLazy_getId;

function backend_com_wsdl_treePartLazy_setId(value) { this._id = value;}

backend_com_wsdl_treePartLazy.prototype.setId = backend_com_wsdl_treePartLazy_setId;
//
// accessor is backend_com_wsdl_treePartLazy.prototype.getMarkerId
// element get for markerId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for markerId
// setter function is is backend_com_wsdl_treePartLazy.prototype.setMarkerId
//
function backend_com_wsdl_treePartLazy_getMarkerId() { return this._markerId;}

backend_com_wsdl_treePartLazy.prototype.getMarkerId = backend_com_wsdl_treePartLazy_getMarkerId;

function backend_com_wsdl_treePartLazy_setMarkerId(value) { this._markerId = value;}

backend_com_wsdl_treePartLazy.prototype.setMarkerId = backend_com_wsdl_treePartLazy_setMarkerId;
//
// accessor is backend_com_wsdl_treePartLazy.prototype.getQuestInstanceId
// element get for questInstanceId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for questInstanceId
// setter function is is backend_com_wsdl_treePartLazy.prototype.setQuestInstanceId
//
function backend_com_wsdl_treePartLazy_getQuestInstanceId() { return this._questInstanceId;}

backend_com_wsdl_treePartLazy.prototype.getQuestInstanceId = backend_com_wsdl_treePartLazy_getQuestInstanceId;

function backend_com_wsdl_treePartLazy_setQuestInstanceId(value) { this._questInstanceId = value;}

backend_com_wsdl_treePartLazy.prototype.setQuestInstanceId = backend_com_wsdl_treePartLazy_setQuestInstanceId;
//
// accessor is backend_com_wsdl_treePartLazy.prototype.getSuccessorIds
// element get for successorIds
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
// - array
//
// element set for successorIds
// setter function is is backend_com_wsdl_treePartLazy.prototype.setSuccessorIds
//
function backend_com_wsdl_treePartLazy_getSuccessorIds() { return this._successorIds;}

backend_com_wsdl_treePartLazy.prototype.getSuccessorIds = backend_com_wsdl_treePartLazy_getSuccessorIds;

function backend_com_wsdl_treePartLazy_setSuccessorIds(value) { this._successorIds = value;}

backend_com_wsdl_treePartLazy.prototype.setSuccessorIds = backend_com_wsdl_treePartLazy_setSuccessorIds;
//
// accessor is backend_com_wsdl_treePartLazy.prototype.getType
// element get for type
// - element type is {http://backend.com/wsdl}treePartType
// - required element
//
// element set for type
// setter function is is backend_com_wsdl_treePartLazy.prototype.setType
//
function backend_com_wsdl_treePartLazy_getType() { return this._type;}

backend_com_wsdl_treePartLazy.prototype.getType = backend_com_wsdl_treePartLazy_getType;

function backend_com_wsdl_treePartLazy_setType(value) { this._type = value;}

backend_com_wsdl_treePartLazy.prototype.setType = backend_com_wsdl_treePartLazy_setType;
//
// Serialize {http://backend.com/wsdl}treePartLazy
//
function backend_com_wsdl_treePartLazy_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<active>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._active);
     xml = xml + '</active>';
    }
    // block for local variables
    {
     xml = xml + '<finished>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._finished);
     xml = xml + '</finished>';
    }
    // block for local variables
    {
     xml = xml + '<id>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._id);
     xml = xml + '</id>';
    }
    // block for local variables
    {
     xml = xml + '<markerId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._markerId);
     xml = xml + '</markerId>';
    }
    // block for local variables
    {
     xml = xml + '<questInstanceId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._questInstanceId);
     xml = xml + '</questInstanceId>';
    }
    // block for local variables
    {
     if (this._successorIds != null) {
      for (var ax = 0;ax < this._successorIds.length;ax ++) {
       if (this._successorIds[ax] == null) {
        xml = xml + '<successorIds/>';
       } else {
        xml = xml + '<successorIds>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._successorIds[ax]);
        xml = xml + '</successorIds>';
       }
      }
     }
    }
    // block for local variables
    {
     xml = xml + '<type>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._type);
     xml = xml + '</type>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_treePartLazy.prototype.serialize = backend_com_wsdl_treePartLazy_serialize;

function backend_com_wsdl_treePartLazy_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_treePartLazy();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing active');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setActive(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing finished');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setFinished(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
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
    cxfjsutils.trace('processing markerId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setMarkerId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing questInstanceId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setQuestInstanceId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing successorIds');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'successorIds')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = parseInt(value);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'successorIds'));
     newobject.setSuccessorIds(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing type');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = value;
    }
    newobject.setType(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}getTreePartLazy
//
function backend_com_wsdl_getTreePartLazy () {
    this.typeMarker = 'backend_com_wsdl_getTreePartLazy';
    this._arg0 = 0;
}

//
// accessor is backend_com_wsdl_getTreePartLazy.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_getTreePartLazy.prototype.setArg0
//
function backend_com_wsdl_getTreePartLazy_getArg0() { return this._arg0;}

backend_com_wsdl_getTreePartLazy.prototype.getArg0 = backend_com_wsdl_getTreePartLazy_getArg0;

function backend_com_wsdl_getTreePartLazy_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_getTreePartLazy.prototype.setArg0 = backend_com_wsdl_getTreePartLazy_setArg0;
//
// Serialize {http://backend.com/wsdl}getTreePartLazy
//
function backend_com_wsdl_getTreePartLazy_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getTreePartLazy.prototype.serialize = backend_com_wsdl_getTreePartLazy_serialize;

function backend_com_wsdl_getTreePartLazy_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getTreePartLazy();
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
// Constructor for XML Schema item {http://backend.com/wsdl}treePart
//
function backend_com_wsdl_treePart () {
    this.typeMarker = 'backend_com_wsdl_treePart';
    this._active = '';
    this._finished = '';
    this._id = 0;
    this._successors = [];
    this._version = null;
}

//
// accessor is backend_com_wsdl_treePart.prototype.getActive
// element get for active
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for active
// setter function is is backend_com_wsdl_treePart.prototype.setActive
//
function backend_com_wsdl_treePart_getActive() { return this._active;}

backend_com_wsdl_treePart.prototype.getActive = backend_com_wsdl_treePart_getActive;

function backend_com_wsdl_treePart_setActive(value) { this._active = value;}

backend_com_wsdl_treePart.prototype.setActive = backend_com_wsdl_treePart_setActive;
//
// accessor is backend_com_wsdl_treePart.prototype.getFinished
// element get for finished
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for finished
// setter function is is backend_com_wsdl_treePart.prototype.setFinished
//
function backend_com_wsdl_treePart_getFinished() { return this._finished;}

backend_com_wsdl_treePart.prototype.getFinished = backend_com_wsdl_treePart_getFinished;

function backend_com_wsdl_treePart_setFinished(value) { this._finished = value;}

backend_com_wsdl_treePart.prototype.setFinished = backend_com_wsdl_treePart_setFinished;
//
// accessor is backend_com_wsdl_treePart.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for id
// setter function is is backend_com_wsdl_treePart.prototype.setId
//
function backend_com_wsdl_treePart_getId() { return this._id;}

backend_com_wsdl_treePart.prototype.getId = backend_com_wsdl_treePart_getId;

function backend_com_wsdl_treePart_setId(value) { this._id = value;}

backend_com_wsdl_treePart.prototype.setId = backend_com_wsdl_treePart_setId;
//
// accessor is backend_com_wsdl_treePart.prototype.getSuccessors
// element get for successors
// - element type is {http://backend.com/wsdl}treePart
// - required element
// - array
// - nillable
//
// element set for successors
// setter function is is backend_com_wsdl_treePart.prototype.setSuccessors
//
function backend_com_wsdl_treePart_getSuccessors() { return this._successors;}

backend_com_wsdl_treePart.prototype.getSuccessors = backend_com_wsdl_treePart_getSuccessors;

function backend_com_wsdl_treePart_setSuccessors(value) { this._successors = value;}

backend_com_wsdl_treePart.prototype.setSuccessors = backend_com_wsdl_treePart_setSuccessors;
//
// accessor is backend_com_wsdl_treePart.prototype.getVersion
// element get for version
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for version
// setter function is is backend_com_wsdl_treePart.prototype.setVersion
//
function backend_com_wsdl_treePart_getVersion() { return this._version;}

backend_com_wsdl_treePart.prototype.getVersion = backend_com_wsdl_treePart_getVersion;

function backend_com_wsdl_treePart_setVersion(value) { this._version = value;}

backend_com_wsdl_treePart.prototype.setVersion = backend_com_wsdl_treePart_setVersion;
//
// Serialize {http://backend.com/wsdl}treePart
//
function backend_com_wsdl_treePart_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<active>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._active);
     xml = xml + '</active>';
    }
    // block for local variables
    {
     xml = xml + '<finished>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._finished);
     xml = xml + '</finished>';
    }
    // block for local variables
    {
     xml = xml + '<id>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._id);
     xml = xml + '</id>';
    }
    // block for local variables
    {
     if (this._successors != null) {
      for (var ax = 0;ax < this._successors.length;ax ++) {
       if (this._successors[ax] == null) {
        xml = xml + '<successors xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._successors[ax].serialize(cxfjsutils, 'successors', null);
       }
      }
     }
    }
    // block for local variables
    {
     if (this._version != null) {
      xml = xml + '<version>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._version);
      xml = xml + '</version>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_treePart.prototype.serialize = backend_com_wsdl_treePart_serialize;

function backend_com_wsdl_treePart_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_treePart();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing active');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setActive(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing finished');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setFinished(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
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
    cxfjsutils.trace('processing successors');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'successors')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = backend_com_wsdl_treePart_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'successors'));
     newobject.setSuccessors(item);
     var item = null;
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing version');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'version')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setVersion(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}updateHtmlResponse
//
function backend_com_wsdl_updateHtmlResponse () {
    this.typeMarker = 'backend_com_wsdl_updateHtmlResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_updateHtmlResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}htmlObject
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_updateHtmlResponse.prototype.setReturn
//
function backend_com_wsdl_updateHtmlResponse_getReturn() { return this._return;}

backend_com_wsdl_updateHtmlResponse.prototype.getReturn = backend_com_wsdl_updateHtmlResponse_getReturn;

function backend_com_wsdl_updateHtmlResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_updateHtmlResponse.prototype.setReturn = backend_com_wsdl_updateHtmlResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}updateHtmlResponse
//
function backend_com_wsdl_updateHtmlResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updateHtmlResponse.prototype.serialize = backend_com_wsdl_updateHtmlResponse_serialize;

function backend_com_wsdl_updateHtmlResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateHtmlResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_htmlObject_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}getQuestInstance
//
function backend_com_wsdl_getQuestInstance () {
    this.typeMarker = 'backend_com_wsdl_getQuestInstance';
    this._arg0 = 0;
}

//
// accessor is backend_com_wsdl_getQuestInstance.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_getQuestInstance.prototype.setArg0
//
function backend_com_wsdl_getQuestInstance_getArg0() { return this._arg0;}

backend_com_wsdl_getQuestInstance.prototype.getArg0 = backend_com_wsdl_getQuestInstance_getArg0;

function backend_com_wsdl_getQuestInstance_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_getQuestInstance.prototype.setArg0 = backend_com_wsdl_getQuestInstance_setArg0;
//
// Serialize {http://backend.com/wsdl}getQuestInstance
//
function backend_com_wsdl_getQuestInstance_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getQuestInstance.prototype.serialize = backend_com_wsdl_getQuestInstance_serialize;

function backend_com_wsdl_getQuestInstance_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getQuestInstance();
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
// Constructor for XML Schema item {http://backend.com/wsdl}getMonsterActionResponse
//
function backend_com_wsdl_getMonsterActionResponse () {
    this.typeMarker = 'backend_com_wsdl_getMonsterActionResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_getMonsterActionResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}monsterAction
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_getMonsterActionResponse.prototype.setReturn
//
function backend_com_wsdl_getMonsterActionResponse_getReturn() { return this._return;}

backend_com_wsdl_getMonsterActionResponse.prototype.getReturn = backend_com_wsdl_getMonsterActionResponse_getReturn;

function backend_com_wsdl_getMonsterActionResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getMonsterActionResponse.prototype.setReturn = backend_com_wsdl_getMonsterActionResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getMonsterActionResponse
//
function backend_com_wsdl_getMonsterActionResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getMonsterActionResponse.prototype.serialize = backend_com_wsdl_getMonsterActionResponse_serialize;

function backend_com_wsdl_getMonsterActionResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getMonsterActionResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_monsterAction_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}addHtml
//
function backend_com_wsdl_addHtml () {
    this.typeMarker = 'backend_com_wsdl_addHtml';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_addHtml.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}htmlObject
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_addHtml.prototype.setArg0
//
function backend_com_wsdl_addHtml_getArg0() { return this._arg0;}

backend_com_wsdl_addHtml.prototype.getArg0 = backend_com_wsdl_addHtml_getArg0;

function backend_com_wsdl_addHtml_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_addHtml.prototype.setArg0 = backend_com_wsdl_addHtml_setArg0;
//
// Serialize {http://backend.com/wsdl}addHtml
//
function backend_com_wsdl_addHtml_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_addHtml.prototype.serialize = backend_com_wsdl_addHtml_serialize;

function backend_com_wsdl_addHtml_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addHtml();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_htmlObject_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}getSpellCards
//
function backend_com_wsdl_getSpellCards () {
    this.typeMarker = 'backend_com_wsdl_getSpellCards';
    this._arg0 = [];
}

//
// accessor is backend_com_wsdl_getSpellCards.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
// - array
//
// element set for arg0
// setter function is is backend_com_wsdl_getSpellCards.prototype.setArg0
//
function backend_com_wsdl_getSpellCards_getArg0() { return this._arg0;}

backend_com_wsdl_getSpellCards.prototype.getArg0 = backend_com_wsdl_getSpellCards_getArg0;

function backend_com_wsdl_getSpellCards_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_getSpellCards.prototype.setArg0 = backend_com_wsdl_getSpellCards_setArg0;
//
// Serialize {http://backend.com/wsdl}getSpellCards
//
function backend_com_wsdl_getSpellCards_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      for (var ax = 0;ax < this._arg0.length;ax ++) {
       if (this._arg0[ax] == null) {
        xml = xml + '<arg0/>';
       } else {
        xml = xml + '<arg0>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._arg0[ax]);
        xml = xml + '</arg0>';
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_getSpellCards.prototype.serialize = backend_com_wsdl_getSpellCards_serialize;

function backend_com_wsdl_getSpellCards_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getSpellCards();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       value = cxfjsutils.getNodeText(curElement);
       arrayItem = parseInt(value);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0'));
     newobject.setArg0(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}deleteQuestResponse
//
function backend_com_wsdl_deleteQuestResponse () {
    this.typeMarker = 'backend_com_wsdl_deleteQuestResponse';
}

//
// Serialize {http://backend.com/wsdl}deleteQuestResponse
//
function backend_com_wsdl_deleteQuestResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_deleteQuestResponse.prototype.serialize = backend_com_wsdl_deleteQuestResponse_serialize;

function backend_com_wsdl_deleteQuestResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_deleteQuestResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}card
//
function backend_com_wsdl_card () {
    this.typeMarker = 'backend_com_wsdl_card';
    this._description = null;
    this._id = 0;
    this._imageUrl = null;
    this._name = null;
    this._stars = null;
    this._version = null;
}

//
// accessor is backend_com_wsdl_card.prototype.getDescription
// element get for description
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for description
// setter function is is backend_com_wsdl_card.prototype.setDescription
//
function backend_com_wsdl_card_getDescription() { return this._description;}

backend_com_wsdl_card.prototype.getDescription = backend_com_wsdl_card_getDescription;

function backend_com_wsdl_card_setDescription(value) { this._description = value;}

backend_com_wsdl_card.prototype.setDescription = backend_com_wsdl_card_setDescription;
//
// accessor is backend_com_wsdl_card.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for id
// setter function is is backend_com_wsdl_card.prototype.setId
//
function backend_com_wsdl_card_getId() { return this._id;}

backend_com_wsdl_card.prototype.getId = backend_com_wsdl_card_getId;

function backend_com_wsdl_card_setId(value) { this._id = value;}

backend_com_wsdl_card.prototype.setId = backend_com_wsdl_card_setId;
//
// accessor is backend_com_wsdl_card.prototype.getImageUrl
// element get for imageUrl
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for imageUrl
// setter function is is backend_com_wsdl_card.prototype.setImageUrl
//
function backend_com_wsdl_card_getImageUrl() { return this._imageUrl;}

backend_com_wsdl_card.prototype.getImageUrl = backend_com_wsdl_card_getImageUrl;

function backend_com_wsdl_card_setImageUrl(value) { this._imageUrl = value;}

backend_com_wsdl_card.prototype.setImageUrl = backend_com_wsdl_card_setImageUrl;
//
// accessor is backend_com_wsdl_card.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for name
// setter function is is backend_com_wsdl_card.prototype.setName
//
function backend_com_wsdl_card_getName() { return this._name;}

backend_com_wsdl_card.prototype.getName = backend_com_wsdl_card_getName;

function backend_com_wsdl_card_setName(value) { this._name = value;}

backend_com_wsdl_card.prototype.setName = backend_com_wsdl_card_setName;
//
// accessor is backend_com_wsdl_card.prototype.getStars
// element get for stars
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for stars
// setter function is is backend_com_wsdl_card.prototype.setStars
//
function backend_com_wsdl_card_getStars() { return this._stars;}

backend_com_wsdl_card.prototype.getStars = backend_com_wsdl_card_getStars;

function backend_com_wsdl_card_setStars(value) { this._stars = value;}

backend_com_wsdl_card.prototype.setStars = backend_com_wsdl_card_setStars;
//
// accessor is backend_com_wsdl_card.prototype.getVersion
// element get for version
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for version
// setter function is is backend_com_wsdl_card.prototype.setVersion
//
function backend_com_wsdl_card_getVersion() { return this._version;}

backend_com_wsdl_card.prototype.getVersion = backend_com_wsdl_card_getVersion;

function backend_com_wsdl_card_setVersion(value) { this._version = value;}

backend_com_wsdl_card.prototype.setVersion = backend_com_wsdl_card_setVersion;
//
// Serialize {http://backend.com/wsdl}card
//
function backend_com_wsdl_card_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._description != null) {
      xml = xml + '<description>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._description);
      xml = xml + '</description>';
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
     if (this._imageUrl != null) {
      xml = xml + '<imageUrl>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._imageUrl);
      xml = xml + '</imageUrl>';
     }
    }
    // block for local variables
    {
     if (this._name != null) {
      xml = xml + '<name>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._name);
      xml = xml + '</name>';
     }
    }
    // block for local variables
    {
     if (this._stars != null) {
      xml = xml + '<stars>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._stars);
      xml = xml + '</stars>';
     }
    }
    // block for local variables
    {
     if (this._version != null) {
      xml = xml + '<version>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._version);
      xml = xml + '</version>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_card.prototype.serialize = backend_com_wsdl_card_serialize;

function backend_com_wsdl_card_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_card();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing description');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'description')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setDescription(item);
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
    cxfjsutils.trace('processing imageUrl');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'imageUrl')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setImageUrl(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing name');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'name')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setName(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing stars');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'stars')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setStars(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing version');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'version')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setVersion(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}action
//
function backend_com_wsdl_action () {
    this.typeMarker = 'backend_com_wsdl_action';
    this._amount = 0.0;
    this._descriptions = null;
    this._duration = null;
    this._id = 0;
    this._isMultipier = '';
    this._names = null;
    this._starCosts = 0.0;
}

//
// accessor is backend_com_wsdl_action.prototype.getAmount
// element get for amount
// - element type is {http://www.w3.org/2001/XMLSchema}float
// - required element
//
// element set for amount
// setter function is is backend_com_wsdl_action.prototype.setAmount
//
function backend_com_wsdl_action_getAmount() { return this._amount;}

backend_com_wsdl_action.prototype.getAmount = backend_com_wsdl_action_getAmount;

function backend_com_wsdl_action_setAmount(value) { this._amount = value;}

backend_com_wsdl_action.prototype.setAmount = backend_com_wsdl_action_setAmount;
//
// accessor is backend_com_wsdl_action.prototype.getDescriptions
// element get for descriptions
// - element type is null
// - required element
//
// element set for descriptions
// setter function is is backend_com_wsdl_action.prototype.setDescriptions
//
function backend_com_wsdl_action_getDescriptions() { return this._descriptions;}

backend_com_wsdl_action.prototype.getDescriptions = backend_com_wsdl_action_getDescriptions;

function backend_com_wsdl_action_setDescriptions(value) { this._descriptions = value;}

backend_com_wsdl_action.prototype.setDescriptions = backend_com_wsdl_action_setDescriptions;
//
// accessor is backend_com_wsdl_action.prototype.getDuration
// element get for duration
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for duration
// setter function is is backend_com_wsdl_action.prototype.setDuration
//
function backend_com_wsdl_action_getDuration() { return this._duration;}

backend_com_wsdl_action.prototype.getDuration = backend_com_wsdl_action_getDuration;

function backend_com_wsdl_action_setDuration(value) { this._duration = value;}

backend_com_wsdl_action.prototype.setDuration = backend_com_wsdl_action_setDuration;
//
// accessor is backend_com_wsdl_action.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for id
// setter function is is backend_com_wsdl_action.prototype.setId
//
function backend_com_wsdl_action_getId() { return this._id;}

backend_com_wsdl_action.prototype.getId = backend_com_wsdl_action_getId;

function backend_com_wsdl_action_setId(value) { this._id = value;}

backend_com_wsdl_action.prototype.setId = backend_com_wsdl_action_setId;
//
// accessor is backend_com_wsdl_action.prototype.getIsMultipier
// element get for isMultipier
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for isMultipier
// setter function is is backend_com_wsdl_action.prototype.setIsMultipier
//
function backend_com_wsdl_action_getIsMultipier() { return this._isMultipier;}

backend_com_wsdl_action.prototype.getIsMultipier = backend_com_wsdl_action_getIsMultipier;

function backend_com_wsdl_action_setIsMultipier(value) { this._isMultipier = value;}

backend_com_wsdl_action.prototype.setIsMultipier = backend_com_wsdl_action_setIsMultipier;
//
// accessor is backend_com_wsdl_action.prototype.getNames
// element get for names
// - element type is null
// - required element
//
// element set for names
// setter function is is backend_com_wsdl_action.prototype.setNames
//
function backend_com_wsdl_action_getNames() { return this._names;}

backend_com_wsdl_action.prototype.getNames = backend_com_wsdl_action_getNames;

function backend_com_wsdl_action_setNames(value) { this._names = value;}

backend_com_wsdl_action.prototype.setNames = backend_com_wsdl_action_setNames;
//
// accessor is backend_com_wsdl_action.prototype.getStarCosts
// element get for starCosts
// - element type is {http://www.w3.org/2001/XMLSchema}float
// - required element
//
// element set for starCosts
// setter function is is backend_com_wsdl_action.prototype.setStarCosts
//
function backend_com_wsdl_action_getStarCosts() { return this._starCosts;}

backend_com_wsdl_action.prototype.getStarCosts = backend_com_wsdl_action_getStarCosts;

function backend_com_wsdl_action_setStarCosts(value) { this._starCosts = value;}

backend_com_wsdl_action.prototype.setStarCosts = backend_com_wsdl_action_setStarCosts;
//
// Serialize {http://backend.com/wsdl}action
//
function backend_com_wsdl_action_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<amount>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._amount);
     xml = xml + '</amount>';
    }
    // block for local variables
    {
     xml = xml + this._descriptions.serialize(cxfjsutils, 'descriptions', null);
    }
    // block for local variables
    {
     if (this._duration != null) {
      xml = xml + '<duration>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._duration);
      xml = xml + '</duration>';
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
     xml = xml + '<isMultipier>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._isMultipier);
     xml = xml + '</isMultipier>';
    }
    // block for local variables
    {
     xml = xml + this._names.serialize(cxfjsutils, 'names', null);
    }
    // block for local variables
    {
     xml = xml + '<starCosts>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._starCosts);
     xml = xml + '</starCosts>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_action.prototype.serialize = backend_com_wsdl_action_serialize;

function backend_com_wsdl_action_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_action();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing amount');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseFloat(value);
    }
    newobject.setAmount(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing descriptions');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = backend_com_wsdl_descriptions_deserialize(cxfjsutils, curElement);
    }
    newobject.setDescriptions(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing duration');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'duration')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setDuration(item);
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
    cxfjsutils.trace('processing isMultipier');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setIsMultipier(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing names');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     item = backend_com_wsdl_names_deserialize(cxfjsutils, curElement);
    }
    newobject.setNames(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing starCosts');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseFloat(value);
    }
    newobject.setStarCosts(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}updateFightMarker
//
function backend_com_wsdl_updateFightMarker () {
    this.typeMarker = 'backend_com_wsdl_updateFightMarker';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_updateFightMarker.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}fightMarker
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_updateFightMarker.prototype.setArg0
//
function backend_com_wsdl_updateFightMarker_getArg0() { return this._arg0;}

backend_com_wsdl_updateFightMarker.prototype.getArg0 = backend_com_wsdl_updateFightMarker_getArg0;

function backend_com_wsdl_updateFightMarker_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_updateFightMarker.prototype.setArg0 = backend_com_wsdl_updateFightMarker_setArg0;
//
// Serialize {http://backend.com/wsdl}updateFightMarker
//
function backend_com_wsdl_updateFightMarker_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_updateFightMarker.prototype.serialize = backend_com_wsdl_updateFightMarker_serialize;

function backend_com_wsdl_updateFightMarker_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateFightMarker();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_fightMarker_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}deleteMonsterActionResponse
//
function backend_com_wsdl_deleteMonsterActionResponse () {
    this.typeMarker = 'backend_com_wsdl_deleteMonsterActionResponse';
}

//
// Serialize {http://backend.com/wsdl}deleteMonsterActionResponse
//
function backend_com_wsdl_deleteMonsterActionResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_deleteMonsterActionResponse.prototype.serialize = backend_com_wsdl_deleteMonsterActionResponse_serialize;

function backend_com_wsdl_deleteMonsterActionResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_deleteMonsterActionResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}login
//
function backend_com_wsdl_login () {
    this.typeMarker = 'backend_com_wsdl_login';
    this._arg0 = null;
    this._arg1 = null;
}

//
// accessor is backend_com_wsdl_login.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_login.prototype.setArg0
//
function backend_com_wsdl_login_getArg0() { return this._arg0;}

backend_com_wsdl_login.prototype.getArg0 = backend_com_wsdl_login_getArg0;

function backend_com_wsdl_login_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_login.prototype.setArg0 = backend_com_wsdl_login_setArg0;
//
// accessor is backend_com_wsdl_login.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for arg1
// setter function is is backend_com_wsdl_login.prototype.setArg1
//
function backend_com_wsdl_login_getArg1() { return this._arg1;}

backend_com_wsdl_login.prototype.getArg1 = backend_com_wsdl_login_getArg1;

function backend_com_wsdl_login_setArg1(value) { this._arg1 = value;}

backend_com_wsdl_login.prototype.setArg1 = backend_com_wsdl_login_setArg1;
//
// Serialize {http://backend.com/wsdl}login
//
function backend_com_wsdl_login_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._arg0 != null) {
      xml = xml + '<arg0>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._arg0);
      xml = xml + '</arg0>';
     }
    }
    // block for local variables
    {
     if (this._arg1 != null) {
      xml = xml + '<arg1>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._arg1);
      xml = xml + '</arg1>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_login.prototype.serialize = backend_com_wsdl_login_serialize;

function backend_com_wsdl_login_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_login();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg1');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg1')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setArg1(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}getAllActions
//
function backend_com_wsdl_getAllActions () {
    this.typeMarker = 'backend_com_wsdl_getAllActions';
}

//
// Serialize {http://backend.com/wsdl}getAllActions
//
function backend_com_wsdl_getAllActions_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getAllActions.prototype.serialize = backend_com_wsdl_getAllActions_serialize;

function backend_com_wsdl_getAllActions_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getAllActions();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}registerResponse
//
function backend_com_wsdl_registerResponse () {
    this.typeMarker = 'backend_com_wsdl_registerResponse';
}

//
// Serialize {http://backend.com/wsdl}registerResponse
//
function backend_com_wsdl_registerResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_registerResponse.prototype.serialize = backend_com_wsdl_registerResponse_serialize;

function backend_com_wsdl_registerResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_registerResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
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
    this.globalElementSerializers['{http://backend.com/wsdl}updateMonsterAction'] = backend_com_wsdl_updateMonsterAction_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateMonsterAction'] = backend_com_wsdl_updateMonsterAction_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getTreePart'] = backend_com_wsdl_getTreePart_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getTreePart'] = backend_com_wsdl_getTreePart_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getAllActionsResponse'] = backend_com_wsdl_getAllActionsResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getAllActionsResponse'] = backend_com_wsdl_getAllActionsResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}loginResponse'] = backend_com_wsdl_loginResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}loginResponse'] = backend_com_wsdl_loginResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateAndTreePart'] = backend_com_wsdl_updateAndTreePart_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateAndTreePart'] = backend_com_wsdl_updateAndTreePart_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getHtml'] = backend_com_wsdl_getHtml_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getHtml'] = backend_com_wsdl_getHtml_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getMarkers'] = backend_com_wsdl_getMarkers_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getMarkers'] = backend_com_wsdl_getMarkers_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateQuizMarker'] = backend_com_wsdl_updateQuizMarker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateQuizMarker'] = backend_com_wsdl_updateQuizMarker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addFightMarkerResponse'] = backend_com_wsdl_addFightMarkerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addFightMarkerResponse'] = backend_com_wsdl_addFightMarkerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateInvisibleMarkerResponse'] = backend_com_wsdl_updateInvisibleMarkerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateInvisibleMarkerResponse'] = backend_com_wsdl_updateInvisibleMarkerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}setTreePartActiveResponse'] = backend_com_wsdl_setTreePartActiveResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}setTreePartActiveResponse'] = backend_com_wsdl_setTreePartActiveResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addMonsterCard'] = backend_com_wsdl_addMonsterCard_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addMonsterCard'] = backend_com_wsdl_addMonsterCard_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteQuestInstanceResponse'] = backend_com_wsdl_deleteQuestInstanceResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteQuestInstanceResponse'] = backend_com_wsdl_deleteQuestInstanceResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateUserResponse'] = backend_com_wsdl_updateUserResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateUserResponse'] = backend_com_wsdl_updateUserResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}register'] = backend_com_wsdl_register_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}register'] = backend_com_wsdl_register_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateSpellCardResponse'] = backend_com_wsdl_updateSpellCardResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateSpellCardResponse'] = backend_com_wsdl_updateSpellCardResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateMarkerTreePart'] = backend_com_wsdl_updateMarkerTreePart_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateMarkerTreePart'] = backend_com_wsdl_updateMarkerTreePart_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addQuizMarker'] = backend_com_wsdl_addQuizMarker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addQuizMarker'] = backend_com_wsdl_addQuizMarker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addMarkerTreePart'] = backend_com_wsdl_addMarkerTreePart_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addMarkerTreePart'] = backend_com_wsdl_addMarkerTreePart_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}setTreePartFinishedResponse'] = backend_com_wsdl_setTreePartFinishedResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}setTreePartFinishedResponse'] = backend_com_wsdl_setTreePartFinishedResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateSpellAction'] = backend_com_wsdl_updateSpellAction_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateSpellAction'] = backend_com_wsdl_updateSpellAction_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getTreePartsLazyResponse'] = backend_com_wsdl_getTreePartsLazyResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getTreePartsLazyResponse'] = backend_com_wsdl_getTreePartsLazyResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteSpellAction'] = backend_com_wsdl_deleteSpellAction_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteSpellAction'] = backend_com_wsdl_deleteSpellAction_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getPlayerResponse'] = backend_com_wsdl_getPlayerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getPlayerResponse'] = backend_com_wsdl_getPlayerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteMarkerResponse'] = backend_com_wsdl_deleteMarkerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteMarkerResponse'] = backend_com_wsdl_deleteMarkerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateQuestInstance'] = backend_com_wsdl_updateQuestInstance_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateQuestInstance'] = backend_com_wsdl_updateQuestInstance_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getMonsterCardsResponse'] = backend_com_wsdl_getMonsterCardsResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getMonsterCardsResponse'] = backend_com_wsdl_getMonsterCardsResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addInvisibleMarker'] = backend_com_wsdl_addInvisibleMarker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addInvisibleMarker'] = backend_com_wsdl_addInvisibleMarker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getMonsterCards'] = backend_com_wsdl_getMonsterCards_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getMonsterCards'] = backend_com_wsdl_getMonsterCards_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getMonsterActionsResponse'] = backend_com_wsdl_getMonsterActionsResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getMonsterActionsResponse'] = backend_com_wsdl_getMonsterActionsResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateOrTreePart'] = backend_com_wsdl_updateOrTreePart_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateOrTreePart'] = backend_com_wsdl_updateOrTreePart_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addDeck'] = backend_com_wsdl_addDeck_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addDeck'] = backend_com_wsdl_addDeck_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getMarker'] = backend_com_wsdl_getMarker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getMarker'] = backend_com_wsdl_getMarker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getAction'] = backend_com_wsdl_getAction_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getAction'] = backend_com_wsdl_getAction_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteUserResponse'] = backend_com_wsdl_deleteUserResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteUserResponse'] = backend_com_wsdl_deleteUserResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateMonsterCard'] = backend_com_wsdl_updateMonsterCard_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateMonsterCard'] = backend_com_wsdl_updateMonsterCard_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}setTreePartActive'] = backend_com_wsdl_setTreePartActive_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}setTreePartActive'] = backend_com_wsdl_setTreePartActive_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addPlayer'] = backend_com_wsdl_addPlayer_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addPlayer'] = backend_com_wsdl_addPlayer_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getMonsterActions'] = backend_com_wsdl_getMonsterActions_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getMonsterActions'] = backend_com_wsdl_getMonsterActions_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteMarker'] = backend_com_wsdl_deleteMarker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteMarker'] = backend_com_wsdl_deleteMarker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addHtmlResponse'] = backend_com_wsdl_addHtmlResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addHtmlResponse'] = backend_com_wsdl_addHtmlResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getHtmlResponse'] = backend_com_wsdl_getHtmlResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getHtmlResponse'] = backend_com_wsdl_getHtmlResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateQuestResponse'] = backend_com_wsdl_updateQuestResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateQuestResponse'] = backend_com_wsdl_updateQuestResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addInvisibleMarkerResponse'] = backend_com_wsdl_addInvisibleMarkerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addInvisibleMarkerResponse'] = backend_com_wsdl_addInvisibleMarkerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateSpellCard'] = backend_com_wsdl_updateSpellCard_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateSpellCard'] = backend_com_wsdl_updateSpellCard_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateDeck'] = backend_com_wsdl_updateDeck_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateDeck'] = backend_com_wsdl_updateDeck_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addMonsterCardResponse'] = backend_com_wsdl_addMonsterCardResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addMonsterCardResponse'] = backend_com_wsdl_addMonsterCardResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addDeckResponse'] = backend_com_wsdl_addDeckResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addDeckResponse'] = backend_com_wsdl_addDeckResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getDeck'] = backend_com_wsdl_getDeck_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getDeck'] = backend_com_wsdl_getDeck_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateSpellActionResponse'] = backend_com_wsdl_updateSpellActionResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateSpellActionResponse'] = backend_com_wsdl_updateSpellActionResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addQuestInstanceResponse'] = backend_com_wsdl_addQuestInstanceResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addQuestInstanceResponse'] = backend_com_wsdl_addQuestInstanceResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteQuest'] = backend_com_wsdl_deleteQuest_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteQuest'] = backend_com_wsdl_deleteQuest_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuestInstanceResponse'] = backend_com_wsdl_getQuestInstanceResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuestInstanceResponse'] = backend_com_wsdl_getQuestInstanceResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getTreePartLazyResponse'] = backend_com_wsdl_getTreePartLazyResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getTreePartLazyResponse'] = backend_com_wsdl_getTreePartLazyResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addFightMarker'] = backend_com_wsdl_addFightMarker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addFightMarker'] = backend_com_wsdl_addFightMarker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updatePlayerResponse'] = backend_com_wsdl_updatePlayerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updatePlayerResponse'] = backend_com_wsdl_updatePlayerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addSpellAction'] = backend_com_wsdl_addSpellAction_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addSpellAction'] = backend_com_wsdl_addSpellAction_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getCompleteMarker'] = backend_com_wsdl_getCompleteMarker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getCompleteMarker'] = backend_com_wsdl_getCompleteMarker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getDeckResponse'] = backend_com_wsdl_getDeckResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getDeckResponse'] = backend_com_wsdl_getDeckResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addSpellCardResponse'] = backend_com_wsdl_addSpellCardResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addSpellCardResponse'] = backend_com_wsdl_addSpellCardResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteMonsterAction'] = backend_com_wsdl_deleteMonsterAction_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteMonsterAction'] = backend_com_wsdl_deleteMonsterAction_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteSpellCardResponse'] = backend_com_wsdl_deleteSpellCardResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteSpellCardResponse'] = backend_com_wsdl_deleteSpellCardResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addMonsterActionResponse'] = backend_com_wsdl_addMonsterActionResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addMonsterActionResponse'] = backend_com_wsdl_addMonsterActionResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateHtml'] = backend_com_wsdl_updateHtml_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateHtml'] = backend_com_wsdl_updateHtml_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addInfoMarker'] = backend_com_wsdl_addInfoMarker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addInfoMarker'] = backend_com_wsdl_addInfoMarker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getMarkersResponse'] = backend_com_wsdl_getMarkersResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getMarkersResponse'] = backend_com_wsdl_getMarkersResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addUserResponse'] = backend_com_wsdl_addUserResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addUserResponse'] = backend_com_wsdl_addUserResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuestInstances'] = backend_com_wsdl_getQuestInstances_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuestInstances'] = backend_com_wsdl_getQuestInstances_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getCards'] = backend_com_wsdl_getCards_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getCards'] = backend_com_wsdl_getCards_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getCardsResponse'] = backend_com_wsdl_getCardsResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getCardsResponse'] = backend_com_wsdl_getCardsResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addUser'] = backend_com_wsdl_addUser_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addUser'] = backend_com_wsdl_addUser_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateDeckResponse'] = backend_com_wsdl_updateDeckResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateDeckResponse'] = backend_com_wsdl_updateDeckResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addQuest'] = backend_com_wsdl_addQuest_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addQuest'] = backend_com_wsdl_addQuest_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getCardResponse'] = backend_com_wsdl_getCardResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getCardResponse'] = backend_com_wsdl_getCardResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteSpellCard'] = backend_com_wsdl_deleteSpellCard_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteSpellCard'] = backend_com_wsdl_deleteSpellCard_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getAllMonsterActions'] = backend_com_wsdl_getAllMonsterActions_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getAllMonsterActions'] = backend_com_wsdl_getAllMonsterActions_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getMarkerResponse'] = backend_com_wsdl_getMarkerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getMarkerResponse'] = backend_com_wsdl_getMarkerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateMonsterActionResponse'] = backend_com_wsdl_updateMonsterActionResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateMonsterActionResponse'] = backend_com_wsdl_updateMonsterActionResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteMonsterCardResponse'] = backend_com_wsdl_deleteMonsterCardResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteMonsterCardResponse'] = backend_com_wsdl_deleteMonsterCardResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getActionResponse'] = backend_com_wsdl_getActionResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getActionResponse'] = backend_com_wsdl_getActionResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getSpellActionResponse'] = backend_com_wsdl_getSpellActionResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getSpellActionResponse'] = backend_com_wsdl_getSpellActionResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuestsResponse'] = backend_com_wsdl_getQuestsResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuestsResponse'] = backend_com_wsdl_getQuestsResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addAndTreePartResponse'] = backend_com_wsdl_addAndTreePartResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addAndTreePartResponse'] = backend_com_wsdl_addAndTreePartResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteTreePartResponse'] = backend_com_wsdl_deleteTreePartResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteTreePartResponse'] = backend_com_wsdl_deleteTreePartResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getTreePartResponse'] = backend_com_wsdl_getTreePartResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getTreePartResponse'] = backend_com_wsdl_getTreePartResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addOrTreePart'] = backend_com_wsdl_addOrTreePart_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addOrTreePart'] = backend_com_wsdl_addOrTreePart_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addAndTreePart'] = backend_com_wsdl_addAndTreePart_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addAndTreePart'] = backend_com_wsdl_addAndTreePart_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getSpellAction'] = backend_com_wsdl_getSpellAction_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getSpellAction'] = backend_com_wsdl_getSpellAction_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getCard'] = backend_com_wsdl_getCard_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getCard'] = backend_com_wsdl_getCard_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteQuestInstance'] = backend_com_wsdl_deleteQuestInstance_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteQuestInstance'] = backend_com_wsdl_deleteQuestInstance_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuest'] = backend_com_wsdl_getQuest_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuest'] = backend_com_wsdl_getQuest_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateAndTreePartResponse'] = backend_com_wsdl_updateAndTreePartResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateAndTreePartResponse'] = backend_com_wsdl_updateAndTreePartResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteMonsterCard'] = backend_com_wsdl_deleteMonsterCard_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteMonsterCard'] = backend_com_wsdl_deleteMonsterCard_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getActionsResponse'] = backend_com_wsdl_getActionsResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getActionsResponse'] = backend_com_wsdl_getActionsResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteTreePart'] = backend_com_wsdl_deleteTreePart_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteTreePart'] = backend_com_wsdl_deleteTreePart_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getAllSpellActions'] = backend_com_wsdl_getAllSpellActions_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getAllSpellActions'] = backend_com_wsdl_getAllSpellActions_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateFightMarkerResponse'] = backend_com_wsdl_updateFightMarkerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateFightMarkerResponse'] = backend_com_wsdl_updateFightMarkerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addOrTreePartResponse'] = backend_com_wsdl_addOrTreePartResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addOrTreePartResponse'] = backend_com_wsdl_addOrTreePartResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateOrTreePartResponse'] = backend_com_wsdl_updateOrTreePartResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateOrTreePartResponse'] = backend_com_wsdl_updateOrTreePartResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getAllSpellActionsResponse'] = backend_com_wsdl_getAllSpellActionsResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getAllSpellActionsResponse'] = backend_com_wsdl_getAllSpellActionsResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateInfoMarker'] = backend_com_wsdl_updateInfoMarker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateInfoMarker'] = backend_com_wsdl_updateInfoMarker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deletePlayerResponse'] = backend_com_wsdl_deletePlayerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deletePlayerResponse'] = backend_com_wsdl_deletePlayerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateInfoMarkerResponse'] = backend_com_wsdl_updateInfoMarkerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateInfoMarkerResponse'] = backend_com_wsdl_updateInfoMarkerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuestResponse'] = backend_com_wsdl_getQuestResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuestResponse'] = backend_com_wsdl_getQuestResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addMarkerTreePartResponse'] = backend_com_wsdl_addMarkerTreePartResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addMarkerTreePartResponse'] = backend_com_wsdl_addMarkerTreePartResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteSpellActionResponse'] = backend_com_wsdl_deleteSpellActionResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteSpellActionResponse'] = backend_com_wsdl_deleteSpellActionResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateMonsterCardResponse'] = backend_com_wsdl_updateMonsterCardResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateMonsterCardResponse'] = backend_com_wsdl_updateMonsterCardResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}clearDBResponse'] = backend_com_wsdl_clearDBResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}clearDBResponse'] = backend_com_wsdl_clearDBResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}setTreePartFinished'] = backend_com_wsdl_setTreePartFinished_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}setTreePartFinished'] = backend_com_wsdl_setTreePartFinished_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getMonsterCardResponse'] = backend_com_wsdl_getMonsterCardResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getMonsterCardResponse'] = backend_com_wsdl_getMonsterCardResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addTreePartLazy'] = backend_com_wsdl_addTreePartLazy_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addTreePartLazy'] = backend_com_wsdl_addTreePartLazy_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuestsInRangeResponse'] = backend_com_wsdl_getQuestsInRangeResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuestsInRangeResponse'] = backend_com_wsdl_getQuestsInRangeResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}setQuestInstanceOfMarkerTreePartResponse'] = backend_com_wsdl_setQuestInstanceOfMarkerTreePartResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}setQuestInstanceOfMarkerTreePartResponse'] = backend_com_wsdl_setQuestInstanceOfMarkerTreePartResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateQuizMarkerResponse'] = backend_com_wsdl_updateQuizMarkerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateQuizMarkerResponse'] = backend_com_wsdl_updateQuizMarkerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updatePlayer'] = backend_com_wsdl_updatePlayer_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updatePlayer'] = backend_com_wsdl_updatePlayer_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getAllMonsterActionsResponse'] = backend_com_wsdl_getAllMonsterActionsResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getAllMonsterActionsResponse'] = backend_com_wsdl_getAllMonsterActionsResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateQuest'] = backend_com_wsdl_updateQuest_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateQuest'] = backend_com_wsdl_updateQuest_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getMonsterAction'] = backend_com_wsdl_getMonsterAction_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getMonsterAction'] = backend_com_wsdl_getMonsterAction_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getDecks'] = backend_com_wsdl_getDecks_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getDecks'] = backend_com_wsdl_getDecks_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuestInstancesResponse'] = backend_com_wsdl_getQuestInstancesResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuestInstancesResponse'] = backend_com_wsdl_getQuestInstancesResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addSpellActionResponse'] = backend_com_wsdl_addSpellActionResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addSpellActionResponse'] = backend_com_wsdl_addSpellActionResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deletePlayer'] = backend_com_wsdl_deletePlayer_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deletePlayer'] = backend_com_wsdl_deletePlayer_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getActions'] = backend_com_wsdl_getActions_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getActions'] = backend_com_wsdl_getActions_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateInvisibleMarker'] = backend_com_wsdl_updateInvisibleMarker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateInvisibleMarker'] = backend_com_wsdl_updateInvisibleMarker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getCompleteMarkerResponse'] = backend_com_wsdl_getCompleteMarkerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getCompleteMarkerResponse'] = backend_com_wsdl_getCompleteMarkerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getTreePartsLazy'] = backend_com_wsdl_getTreePartsLazy_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getTreePartsLazy'] = backend_com_wsdl_getTreePartsLazy_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuestsInRange'] = backend_com_wsdl_getQuestsInRange_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuestsInRange'] = backend_com_wsdl_getQuestsInRange_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addInfoMarkerResponse'] = backend_com_wsdl_addInfoMarkerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addInfoMarkerResponse'] = backend_com_wsdl_addInfoMarkerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}setQuestInstanceOfMarkerTreePart'] = backend_com_wsdl_setQuestInstanceOfMarkerTreePart_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}setQuestInstanceOfMarkerTreePart'] = backend_com_wsdl_setQuestInstanceOfMarkerTreePart_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuests'] = backend_com_wsdl_getQuests_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuests'] = backend_com_wsdl_getQuests_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}clearDB'] = backend_com_wsdl_clearDB_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}clearDB'] = backend_com_wsdl_clearDB_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addPlayerResponse'] = backend_com_wsdl_addPlayerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addPlayerResponse'] = backend_com_wsdl_addPlayerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getDecksResponse'] = backend_com_wsdl_getDecksResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getDecksResponse'] = backend_com_wsdl_getDecksResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addMonsterAction'] = backend_com_wsdl_addMonsterAction_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addMonsterAction'] = backend_com_wsdl_addMonsterAction_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteDeckResponse'] = backend_com_wsdl_deleteDeckResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteDeckResponse'] = backend_com_wsdl_deleteDeckResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getMonsterCard'] = backend_com_wsdl_getMonsterCard_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getMonsterCard'] = backend_com_wsdl_getMonsterCard_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addQuestResponse'] = backend_com_wsdl_addQuestResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addQuestResponse'] = backend_com_wsdl_addQuestResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteUser'] = backend_com_wsdl_deleteUser_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteUser'] = backend_com_wsdl_deleteUser_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateQuestInstanceResponse'] = backend_com_wsdl_updateQuestInstanceResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateQuestInstanceResponse'] = backend_com_wsdl_updateQuestInstanceResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addSpellCard'] = backend_com_wsdl_addSpellCard_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addSpellCard'] = backend_com_wsdl_addSpellCard_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteDeck'] = backend_com_wsdl_deleteDeck_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteDeck'] = backend_com_wsdl_deleteDeck_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateUser'] = backend_com_wsdl_updateUser_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateUser'] = backend_com_wsdl_updateUser_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getPlayer'] = backend_com_wsdl_getPlayer_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getPlayer'] = backend_com_wsdl_getPlayer_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addTreePartLazyResponse'] = backend_com_wsdl_addTreePartLazyResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addTreePartLazyResponse'] = backend_com_wsdl_addTreePartLazyResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getSpellCardResponse'] = backend_com_wsdl_getSpellCardResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getSpellCardResponse'] = backend_com_wsdl_getSpellCardResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addQuizMarkerResponse'] = backend_com_wsdl_addQuizMarkerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addQuizMarkerResponse'] = backend_com_wsdl_addQuizMarkerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addQuestInstance'] = backend_com_wsdl_addQuestInstance_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addQuestInstance'] = backend_com_wsdl_addQuestInstance_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateMarkerTreePartResponse'] = backend_com_wsdl_updateMarkerTreePartResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateMarkerTreePartResponse'] = backend_com_wsdl_updateMarkerTreePartResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getSpellCardsResponse'] = backend_com_wsdl_getSpellCardsResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getSpellCardsResponse'] = backend_com_wsdl_getSpellCardsResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getSpellCard'] = backend_com_wsdl_getSpellCard_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getSpellCard'] = backend_com_wsdl_getSpellCard_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getTreePartLazy'] = backend_com_wsdl_getTreePartLazy_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getTreePartLazy'] = backend_com_wsdl_getTreePartLazy_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateHtmlResponse'] = backend_com_wsdl_updateHtmlResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateHtmlResponse'] = backend_com_wsdl_updateHtmlResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuestInstance'] = backend_com_wsdl_getQuestInstance_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuestInstance'] = backend_com_wsdl_getQuestInstance_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getMonsterActionResponse'] = backend_com_wsdl_getMonsterActionResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getMonsterActionResponse'] = backend_com_wsdl_getMonsterActionResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addHtml'] = backend_com_wsdl_addHtml_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addHtml'] = backend_com_wsdl_addHtml_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getSpellCards'] = backend_com_wsdl_getSpellCards_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getSpellCards'] = backend_com_wsdl_getSpellCards_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteQuestResponse'] = backend_com_wsdl_deleteQuestResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteQuestResponse'] = backend_com_wsdl_deleteQuestResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateFightMarker'] = backend_com_wsdl_updateFightMarker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateFightMarker'] = backend_com_wsdl_updateFightMarker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteMonsterActionResponse'] = backend_com_wsdl_deleteMonsterActionResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteMonsterActionResponse'] = backend_com_wsdl_deleteMonsterActionResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}login'] = backend_com_wsdl_login_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}login'] = backend_com_wsdl_login_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}registerResponse'] = backend_com_wsdl_registerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}registerResponse'] = backend_com_wsdl_registerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getAllActions'] = backend_com_wsdl_getAllActions_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getAllActions'] = backend_com_wsdl_getAllActions_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateMonsterAction'] = backend_com_wsdl_updateMonsterAction_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateMonsterAction'] = backend_com_wsdl_updateMonsterAction_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getTreePart'] = backend_com_wsdl_getTreePart_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getTreePart'] = backend_com_wsdl_getTreePart_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getAllActionsResponse'] = backend_com_wsdl_getAllActionsResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getAllActionsResponse'] = backend_com_wsdl_getAllActionsResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}loginResponse'] = backend_com_wsdl_loginResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}loginResponse'] = backend_com_wsdl_loginResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateAndTreePart'] = backend_com_wsdl_updateAndTreePart_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateAndTreePart'] = backend_com_wsdl_updateAndTreePart_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getHtml'] = backend_com_wsdl_getHtml_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getHtml'] = backend_com_wsdl_getHtml_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getMarkers'] = backend_com_wsdl_getMarkers_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getMarkers'] = backend_com_wsdl_getMarkers_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addFightMarkerResponse'] = backend_com_wsdl_addFightMarkerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addFightMarkerResponse'] = backend_com_wsdl_addFightMarkerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateQuizMarker'] = backend_com_wsdl_updateQuizMarker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateQuizMarker'] = backend_com_wsdl_updateQuizMarker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateInvisibleMarkerResponse'] = backend_com_wsdl_updateInvisibleMarkerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateInvisibleMarkerResponse'] = backend_com_wsdl_updateInvisibleMarkerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}quest'] = backend_com_wsdl_quest_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}quest'] = backend_com_wsdl_quest_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteQuestInstanceResponse'] = backend_com_wsdl_deleteQuestInstanceResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteQuestInstanceResponse'] = backend_com_wsdl_deleteQuestInstanceResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}setTreePartActiveResponse'] = backend_com_wsdl_setTreePartActiveResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}setTreePartActiveResponse'] = backend_com_wsdl_setTreePartActiveResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addMonsterCard'] = backend_com_wsdl_addMonsterCard_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addMonsterCard'] = backend_com_wsdl_addMonsterCard_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateUserResponse'] = backend_com_wsdl_updateUserResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateUserResponse'] = backend_com_wsdl_updateUserResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}register'] = backend_com_wsdl_register_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}register'] = backend_com_wsdl_register_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateSpellCardResponse'] = backend_com_wsdl_updateSpellCardResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateSpellCardResponse'] = backend_com_wsdl_updateSpellCardResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addQuizMarker'] = backend_com_wsdl_addQuizMarker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addQuizMarker'] = backend_com_wsdl_addQuizMarker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateMarkerTreePart'] = backend_com_wsdl_updateMarkerTreePart_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateMarkerTreePart'] = backend_com_wsdl_updateMarkerTreePart_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addMarkerTreePart'] = backend_com_wsdl_addMarkerTreePart_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addMarkerTreePart'] = backend_com_wsdl_addMarkerTreePart_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}setTreePartFinishedResponse'] = backend_com_wsdl_setTreePartFinishedResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}setTreePartFinishedResponse'] = backend_com_wsdl_setTreePartFinishedResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateSpellAction'] = backend_com_wsdl_updateSpellAction_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateSpellAction'] = backend_com_wsdl_updateSpellAction_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getTreePartsLazyResponse'] = backend_com_wsdl_getTreePartsLazyResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getTreePartsLazyResponse'] = backend_com_wsdl_getTreePartsLazyResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteSpellAction'] = backend_com_wsdl_deleteSpellAction_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteSpellAction'] = backend_com_wsdl_deleteSpellAction_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getPlayerResponse'] = backend_com_wsdl_getPlayerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getPlayerResponse'] = backend_com_wsdl_getPlayerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteMarkerResponse'] = backend_com_wsdl_deleteMarkerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteMarkerResponse'] = backend_com_wsdl_deleteMarkerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getMonsterCardsResponse'] = backend_com_wsdl_getMonsterCardsResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getMonsterCardsResponse'] = backend_com_wsdl_getMonsterCardsResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateQuestInstance'] = backend_com_wsdl_updateQuestInstance_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateQuestInstance'] = backend_com_wsdl_updateQuestInstance_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addInvisibleMarker'] = backend_com_wsdl_addInvisibleMarker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addInvisibleMarker'] = backend_com_wsdl_addInvisibleMarker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getMonsterCards'] = backend_com_wsdl_getMonsterCards_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getMonsterCards'] = backend_com_wsdl_getMonsterCards_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getMonsterActionsResponse'] = backend_com_wsdl_getMonsterActionsResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getMonsterActionsResponse'] = backend_com_wsdl_getMonsterActionsResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}andTreePart'] = backend_com_wsdl_andTreePart_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}andTreePart'] = backend_com_wsdl_andTreePart_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateOrTreePart'] = backend_com_wsdl_updateOrTreePart_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateOrTreePart'] = backend_com_wsdl_updateOrTreePart_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addDeck'] = backend_com_wsdl_addDeck_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addDeck'] = backend_com_wsdl_addDeck_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getMarker'] = backend_com_wsdl_getMarker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getMarker'] = backend_com_wsdl_getMarker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getAction'] = backend_com_wsdl_getAction_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getAction'] = backend_com_wsdl_getAction_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteUserResponse'] = backend_com_wsdl_deleteUserResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteUserResponse'] = backend_com_wsdl_deleteUserResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addPlayer'] = backend_com_wsdl_addPlayer_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addPlayer'] = backend_com_wsdl_addPlayer_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateMonsterCard'] = backend_com_wsdl_updateMonsterCard_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateMonsterCard'] = backend_com_wsdl_updateMonsterCard_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}setTreePartActive'] = backend_com_wsdl_setTreePartActive_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}setTreePartActive'] = backend_com_wsdl_setTreePartActive_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getMonsterActions'] = backend_com_wsdl_getMonsterActions_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getMonsterActions'] = backend_com_wsdl_getMonsterActions_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteMarker'] = backend_com_wsdl_deleteMarker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteMarker'] = backend_com_wsdl_deleteMarker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addHtmlResponse'] = backend_com_wsdl_addHtmlResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addHtmlResponse'] = backend_com_wsdl_addHtmlResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getHtmlResponse'] = backend_com_wsdl_getHtmlResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getHtmlResponse'] = backend_com_wsdl_getHtmlResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deck'] = backend_com_wsdl_deck_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deck'] = backend_com_wsdl_deck_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addInvisibleMarkerResponse'] = backend_com_wsdl_addInvisibleMarkerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addInvisibleMarkerResponse'] = backend_com_wsdl_addInvisibleMarkerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateQuestResponse'] = backend_com_wsdl_updateQuestResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateQuestResponse'] = backend_com_wsdl_updateQuestResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateSpellCard'] = backend_com_wsdl_updateSpellCard_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateSpellCard'] = backend_com_wsdl_updateSpellCard_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateDeck'] = backend_com_wsdl_updateDeck_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateDeck'] = backend_com_wsdl_updateDeck_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addMonsterCardResponse'] = backend_com_wsdl_addMonsterCardResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addMonsterCardResponse'] = backend_com_wsdl_addMonsterCardResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getDeck'] = backend_com_wsdl_getDeck_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getDeck'] = backend_com_wsdl_getDeck_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addDeckResponse'] = backend_com_wsdl_addDeckResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addDeckResponse'] = backend_com_wsdl_addDeckResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateSpellActionResponse'] = backend_com_wsdl_updateSpellActionResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateSpellActionResponse'] = backend_com_wsdl_updateSpellActionResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}completeMarker'] = backend_com_wsdl_completeMarker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}completeMarker'] = backend_com_wsdl_completeMarker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addQuestInstanceResponse'] = backend_com_wsdl_addQuestInstanceResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addQuestInstanceResponse'] = backend_com_wsdl_addQuestInstanceResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteQuest'] = backend_com_wsdl_deleteQuest_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteQuest'] = backend_com_wsdl_deleteQuest_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}infoMarker'] = backend_com_wsdl_infoMarker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}infoMarker'] = backend_com_wsdl_infoMarker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuestInstanceResponse'] = backend_com_wsdl_getQuestInstanceResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuestInstanceResponse'] = backend_com_wsdl_getQuestInstanceResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addFightMarker'] = backend_com_wsdl_addFightMarker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addFightMarker'] = backend_com_wsdl_addFightMarker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getTreePartLazyResponse'] = backend_com_wsdl_getTreePartLazyResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getTreePartLazyResponse'] = backend_com_wsdl_getTreePartLazyResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getCompleteMarker'] = backend_com_wsdl_getCompleteMarker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getCompleteMarker'] = backend_com_wsdl_getCompleteMarker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addSpellAction'] = backend_com_wsdl_addSpellAction_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addSpellAction'] = backend_com_wsdl_addSpellAction_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updatePlayerResponse'] = backend_com_wsdl_updatePlayerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updatePlayerResponse'] = backend_com_wsdl_updatePlayerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getDeckResponse'] = backend_com_wsdl_getDeckResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getDeckResponse'] = backend_com_wsdl_getDeckResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addSpellCardResponse'] = backend_com_wsdl_addSpellCardResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addSpellCardResponse'] = backend_com_wsdl_addSpellCardResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteMonsterAction'] = backend_com_wsdl_deleteMonsterAction_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteMonsterAction'] = backend_com_wsdl_deleteMonsterAction_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteSpellCardResponse'] = backend_com_wsdl_deleteSpellCardResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteSpellCardResponse'] = backend_com_wsdl_deleteSpellCardResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addMonsterActionResponse'] = backend_com_wsdl_addMonsterActionResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addMonsterActionResponse'] = backend_com_wsdl_addMonsterActionResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateHtml'] = backend_com_wsdl_updateHtml_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateHtml'] = backend_com_wsdl_updateHtml_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addInfoMarker'] = backend_com_wsdl_addInfoMarker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addInfoMarker'] = backend_com_wsdl_addInfoMarker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}questInstance'] = backend_com_wsdl_questInstance_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}questInstance'] = backend_com_wsdl_questInstance_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getMarkersResponse'] = backend_com_wsdl_getMarkersResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getMarkersResponse'] = backend_com_wsdl_getMarkersResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}mapPosition'] = backend_com_wsdl_mapPosition_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}mapPosition'] = backend_com_wsdl_mapPosition_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}htmlObject'] = backend_com_wsdl_htmlObject_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}htmlObject'] = backend_com_wsdl_htmlObject_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addUserResponse'] = backend_com_wsdl_addUserResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addUserResponse'] = backend_com_wsdl_addUserResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getCards'] = backend_com_wsdl_getCards_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getCards'] = backend_com_wsdl_getCards_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuestInstances'] = backend_com_wsdl_getQuestInstances_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuestInstances'] = backend_com_wsdl_getQuestInstances_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getCardsResponse'] = backend_com_wsdl_getCardsResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getCardsResponse'] = backend_com_wsdl_getCardsResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addUser'] = backend_com_wsdl_addUser_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addUser'] = backend_com_wsdl_addUser_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}markerTreePart'] = backend_com_wsdl_markerTreePart_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}markerTreePart'] = backend_com_wsdl_markerTreePart_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateDeckResponse'] = backend_com_wsdl_updateDeckResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateDeckResponse'] = backend_com_wsdl_updateDeckResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}monsterCard'] = backend_com_wsdl_monsterCard_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}monsterCard'] = backend_com_wsdl_monsterCard_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addQuest'] = backend_com_wsdl_addQuest_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addQuest'] = backend_com_wsdl_addQuest_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getCardResponse'] = backend_com_wsdl_getCardResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getCardResponse'] = backend_com_wsdl_getCardResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getAllMonsterActions'] = backend_com_wsdl_getAllMonsterActions_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getAllMonsterActions'] = backend_com_wsdl_getAllMonsterActions_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteSpellCard'] = backend_com_wsdl_deleteSpellCard_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteSpellCard'] = backend_com_wsdl_deleteSpellCard_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getMarkerResponse'] = backend_com_wsdl_getMarkerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getMarkerResponse'] = backend_com_wsdl_getMarkerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getActionResponse'] = backend_com_wsdl_getActionResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getActionResponse'] = backend_com_wsdl_getActionResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteMonsterCardResponse'] = backend_com_wsdl_deleteMonsterCardResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteMonsterCardResponse'] = backend_com_wsdl_deleteMonsterCardResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateMonsterActionResponse'] = backend_com_wsdl_updateMonsterActionResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateMonsterActionResponse'] = backend_com_wsdl_updateMonsterActionResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}fightMarker'] = backend_com_wsdl_fightMarker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}fightMarker'] = backend_com_wsdl_fightMarker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getSpellActionResponse'] = backend_com_wsdl_getSpellActionResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getSpellActionResponse'] = backend_com_wsdl_getSpellActionResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuestsResponse'] = backend_com_wsdl_getQuestsResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuestsResponse'] = backend_com_wsdl_getQuestsResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addAndTreePartResponse'] = backend_com_wsdl_addAndTreePartResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addAndTreePartResponse'] = backend_com_wsdl_addAndTreePartResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteTreePartResponse'] = backend_com_wsdl_deleteTreePartResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteTreePartResponse'] = backend_com_wsdl_deleteTreePartResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}monsterAction'] = backend_com_wsdl_monsterAction_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}monsterAction'] = backend_com_wsdl_monsterAction_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getTreePartResponse'] = backend_com_wsdl_getTreePartResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getTreePartResponse'] = backend_com_wsdl_getTreePartResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addOrTreePart'] = backend_com_wsdl_addOrTreePart_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addOrTreePart'] = backend_com_wsdl_addOrTreePart_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addAndTreePart'] = backend_com_wsdl_addAndTreePart_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addAndTreePart'] = backend_com_wsdl_addAndTreePart_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getSpellAction'] = backend_com_wsdl_getSpellAction_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getSpellAction'] = backend_com_wsdl_getSpellAction_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getCard'] = backend_com_wsdl_getCard_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getCard'] = backend_com_wsdl_getCard_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteQuestInstance'] = backend_com_wsdl_deleteQuestInstance_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteQuestInstance'] = backend_com_wsdl_deleteQuestInstance_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuest'] = backend_com_wsdl_getQuest_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuest'] = backend_com_wsdl_getQuest_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteMonsterCard'] = backend_com_wsdl_deleteMonsterCard_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteMonsterCard'] = backend_com_wsdl_deleteMonsterCard_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateAndTreePartResponse'] = backend_com_wsdl_updateAndTreePartResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateAndTreePartResponse'] = backend_com_wsdl_updateAndTreePartResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getActionsResponse'] = backend_com_wsdl_getActionsResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getActionsResponse'] = backend_com_wsdl_getActionsResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteTreePart'] = backend_com_wsdl_deleteTreePart_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteTreePart'] = backend_com_wsdl_deleteTreePart_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getAllSpellActions'] = backend_com_wsdl_getAllSpellActions_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getAllSpellActions'] = backend_com_wsdl_getAllSpellActions_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateFightMarkerResponse'] = backend_com_wsdl_updateFightMarkerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateFightMarkerResponse'] = backend_com_wsdl_updateFightMarkerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addOrTreePartResponse'] = backend_com_wsdl_addOrTreePartResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addOrTreePartResponse'] = backend_com_wsdl_addOrTreePartResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getAllSpellActionsResponse'] = backend_com_wsdl_getAllSpellActionsResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getAllSpellActionsResponse'] = backend_com_wsdl_getAllSpellActionsResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateOrTreePartResponse'] = backend_com_wsdl_updateOrTreePartResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateOrTreePartResponse'] = backend_com_wsdl_updateOrTreePartResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateInfoMarker'] = backend_com_wsdl_updateInfoMarker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateInfoMarker'] = backend_com_wsdl_updateInfoMarker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}user'] = backend_com_wsdl_user_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}user'] = backend_com_wsdl_user_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deletePlayerResponse'] = backend_com_wsdl_deletePlayerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deletePlayerResponse'] = backend_com_wsdl_deletePlayerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}invisibleMarker'] = backend_com_wsdl_invisibleMarker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}invisibleMarker'] = backend_com_wsdl_invisibleMarker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateInfoMarkerResponse'] = backend_com_wsdl_updateInfoMarkerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateInfoMarkerResponse'] = backend_com_wsdl_updateInfoMarkerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuestResponse'] = backend_com_wsdl_getQuestResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuestResponse'] = backend_com_wsdl_getQuestResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}spellCard'] = backend_com_wsdl_spellCard_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}spellCard'] = backend_com_wsdl_spellCard_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}spellAction'] = backend_com_wsdl_spellAction_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}spellAction'] = backend_com_wsdl_spellAction_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteSpellActionResponse'] = backend_com_wsdl_deleteSpellActionResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteSpellActionResponse'] = backend_com_wsdl_deleteSpellActionResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addMarkerTreePartResponse'] = backend_com_wsdl_addMarkerTreePartResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addMarkerTreePartResponse'] = backend_com_wsdl_addMarkerTreePartResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}clearDBResponse'] = backend_com_wsdl_clearDBResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}clearDBResponse'] = backend_com_wsdl_clearDBResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateMonsterCardResponse'] = backend_com_wsdl_updateMonsterCardResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateMonsterCardResponse'] = backend_com_wsdl_updateMonsterCardResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}setTreePartFinished'] = backend_com_wsdl_setTreePartFinished_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}setTreePartFinished'] = backend_com_wsdl_setTreePartFinished_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getMonsterCardResponse'] = backend_com_wsdl_getMonsterCardResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getMonsterCardResponse'] = backend_com_wsdl_getMonsterCardResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addTreePartLazy'] = backend_com_wsdl_addTreePartLazy_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addTreePartLazy'] = backend_com_wsdl_addTreePartLazy_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}orTreePart'] = backend_com_wsdl_orTreePart_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}orTreePart'] = backend_com_wsdl_orTreePart_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuestsInRangeResponse'] = backend_com_wsdl_getQuestsInRangeResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuestsInRangeResponse'] = backend_com_wsdl_getQuestsInRangeResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}setQuestInstanceOfMarkerTreePartResponse'] = backend_com_wsdl_setQuestInstanceOfMarkerTreePartResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}setQuestInstanceOfMarkerTreePartResponse'] = backend_com_wsdl_setQuestInstanceOfMarkerTreePartResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateQuizMarkerResponse'] = backend_com_wsdl_updateQuizMarkerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateQuizMarkerResponse'] = backend_com_wsdl_updateQuizMarkerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getAllMonsterActionsResponse'] = backend_com_wsdl_getAllMonsterActionsResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getAllMonsterActionsResponse'] = backend_com_wsdl_getAllMonsterActionsResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updatePlayer'] = backend_com_wsdl_updatePlayer_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updatePlayer'] = backend_com_wsdl_updatePlayer_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateQuest'] = backend_com_wsdl_updateQuest_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateQuest'] = backend_com_wsdl_updateQuest_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getMonsterAction'] = backend_com_wsdl_getMonsterAction_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getMonsterAction'] = backend_com_wsdl_getMonsterAction_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getDecks'] = backend_com_wsdl_getDecks_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getDecks'] = backend_com_wsdl_getDecks_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addSpellActionResponse'] = backend_com_wsdl_addSpellActionResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addSpellActionResponse'] = backend_com_wsdl_addSpellActionResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuestInstancesResponse'] = backend_com_wsdl_getQuestInstancesResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuestInstancesResponse'] = backend_com_wsdl_getQuestInstancesResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getActions'] = backend_com_wsdl_getActions_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getActions'] = backend_com_wsdl_getActions_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deletePlayer'] = backend_com_wsdl_deletePlayer_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deletePlayer'] = backend_com_wsdl_deletePlayer_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getCompleteMarkerResponse'] = backend_com_wsdl_getCompleteMarkerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getCompleteMarkerResponse'] = backend_com_wsdl_getCompleteMarkerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateInvisibleMarker'] = backend_com_wsdl_updateInvisibleMarker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateInvisibleMarker'] = backend_com_wsdl_updateInvisibleMarker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addInfoMarkerResponse'] = backend_com_wsdl_addInfoMarkerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addInfoMarkerResponse'] = backend_com_wsdl_addInfoMarkerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuestsInRange'] = backend_com_wsdl_getQuestsInRange_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuestsInRange'] = backend_com_wsdl_getQuestsInRange_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getTreePartsLazy'] = backend_com_wsdl_getTreePartsLazy_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getTreePartsLazy'] = backend_com_wsdl_getTreePartsLazy_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuests'] = backend_com_wsdl_getQuests_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuests'] = backend_com_wsdl_getQuests_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}setQuestInstanceOfMarkerTreePart'] = backend_com_wsdl_setQuestInstanceOfMarkerTreePart_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}setQuestInstanceOfMarkerTreePart'] = backend_com_wsdl_setQuestInstanceOfMarkerTreePart_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}clearDB'] = backend_com_wsdl_clearDB_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}clearDB'] = backend_com_wsdl_clearDB_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addPlayerResponse'] = backend_com_wsdl_addPlayerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addPlayerResponse'] = backend_com_wsdl_addPlayerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}marker'] = backend_com_wsdl_marker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}marker'] = backend_com_wsdl_marker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getDecksResponse'] = backend_com_wsdl_getDecksResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getDecksResponse'] = backend_com_wsdl_getDecksResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addMonsterAction'] = backend_com_wsdl_addMonsterAction_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addMonsterAction'] = backend_com_wsdl_addMonsterAction_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteDeckResponse'] = backend_com_wsdl_deleteDeckResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteDeckResponse'] = backend_com_wsdl_deleteDeckResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getMonsterCard'] = backend_com_wsdl_getMonsterCard_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getMonsterCard'] = backend_com_wsdl_getMonsterCard_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addQuestResponse'] = backend_com_wsdl_addQuestResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addQuestResponse'] = backend_com_wsdl_addQuestResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteUser'] = backend_com_wsdl_deleteUser_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteUser'] = backend_com_wsdl_deleteUser_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateQuestInstanceResponse'] = backend_com_wsdl_updateQuestInstanceResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateQuestInstanceResponse'] = backend_com_wsdl_updateQuestInstanceResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addSpellCard'] = backend_com_wsdl_addSpellCard_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addSpellCard'] = backend_com_wsdl_addSpellCard_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteDeck'] = backend_com_wsdl_deleteDeck_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteDeck'] = backend_com_wsdl_deleteDeck_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getPlayer'] = backend_com_wsdl_getPlayer_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getPlayer'] = backend_com_wsdl_getPlayer_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateUser'] = backend_com_wsdl_updateUser_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateUser'] = backend_com_wsdl_updateUser_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addTreePartLazyResponse'] = backend_com_wsdl_addTreePartLazyResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addTreePartLazyResponse'] = backend_com_wsdl_addTreePartLazyResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addQuestInstance'] = backend_com_wsdl_addQuestInstance_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addQuestInstance'] = backend_com_wsdl_addQuestInstance_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addQuizMarkerResponse'] = backend_com_wsdl_addQuizMarkerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addQuizMarkerResponse'] = backend_com_wsdl_addQuizMarkerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getSpellCardResponse'] = backend_com_wsdl_getSpellCardResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getSpellCardResponse'] = backend_com_wsdl_getSpellCardResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateMarkerTreePartResponse'] = backend_com_wsdl_updateMarkerTreePartResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateMarkerTreePartResponse'] = backend_com_wsdl_updateMarkerTreePartResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getSpellCardsResponse'] = backend_com_wsdl_getSpellCardsResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getSpellCardsResponse'] = backend_com_wsdl_getSpellCardsResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}quizMarker'] = backend_com_wsdl_quizMarker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}quizMarker'] = backend_com_wsdl_quizMarker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}player'] = backend_com_wsdl_player_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}player'] = backend_com_wsdl_player_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getSpellCard'] = backend_com_wsdl_getSpellCard_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getSpellCard'] = backend_com_wsdl_getSpellCard_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}treePartLazy'] = backend_com_wsdl_treePartLazy_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}treePartLazy'] = backend_com_wsdl_treePartLazy_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getTreePartLazy'] = backend_com_wsdl_getTreePartLazy_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getTreePartLazy'] = backend_com_wsdl_getTreePartLazy_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}treePart'] = backend_com_wsdl_treePart_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}treePart'] = backend_com_wsdl_treePart_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateHtmlResponse'] = backend_com_wsdl_updateHtmlResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateHtmlResponse'] = backend_com_wsdl_updateHtmlResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuestInstance'] = backend_com_wsdl_getQuestInstance_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuestInstance'] = backend_com_wsdl_getQuestInstance_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getMonsterActionResponse'] = backend_com_wsdl_getMonsterActionResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getMonsterActionResponse'] = backend_com_wsdl_getMonsterActionResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addHtml'] = backend_com_wsdl_addHtml_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addHtml'] = backend_com_wsdl_addHtml_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getSpellCards'] = backend_com_wsdl_getSpellCards_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getSpellCards'] = backend_com_wsdl_getSpellCards_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteQuestResponse'] = backend_com_wsdl_deleteQuestResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteQuestResponse'] = backend_com_wsdl_deleteQuestResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}card'] = backend_com_wsdl_card_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}card'] = backend_com_wsdl_card_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}action'] = backend_com_wsdl_action_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}action'] = backend_com_wsdl_action_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateFightMarker'] = backend_com_wsdl_updateFightMarker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateFightMarker'] = backend_com_wsdl_updateFightMarker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteMonsterActionResponse'] = backend_com_wsdl_deleteMonsterActionResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteMonsterActionResponse'] = backend_com_wsdl_deleteMonsterActionResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}login'] = backend_com_wsdl_login_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}login'] = backend_com_wsdl_login_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getAllActions'] = backend_com_wsdl_getAllActions_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getAllActions'] = backend_com_wsdl_getAllActions_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}registerResponse'] = backend_com_wsdl_registerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}registerResponse'] = backend_com_wsdl_registerResponse_deserialize;
}

function backend_com_wsdl_updateUser_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_updateUserResponse_deserializeResponse');
     responseObject = backend_com_wsdl_updateUserResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.updateUser_onsuccess = backend_com_wsdl_updateUser_op_onsuccess;

function backend_com_wsdl_updateUser_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.updateUser_onerror = backend_com_wsdl_updateUser_op_onerror;

//
// Operation {http://backend.com/wsdl}updateUser
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_user
//
function backend_com_wsdl_updateUser_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.updateUser_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.updateUser_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.updateUser_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.updateUser = backend_com_wsdl_updateUser_op;

function backend_com_wsdl_updateUser_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_updateUser();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:updateUser', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.updateUser_serializeInput = backend_com_wsdl_updateUser_serializeInput;

function backend_com_wsdl_updateUserResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_updateUserResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_getCard_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_getCardResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getCardResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getCard_onsuccess = backend_com_wsdl_getCard_op_onsuccess;

function backend_com_wsdl_getCard_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.getCard_onerror = backend_com_wsdl_getCard_op_onerror;

//
// Operation {http://backend.com/wsdl}getCard
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_getCard_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.getCard_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getCard_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getCard_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getCard = backend_com_wsdl_getCard_op;

function backend_com_wsdl_getCard_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getCard();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getCard', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getCard_serializeInput = backend_com_wsdl_getCard_serializeInput;

function backend_com_wsdl_getCardResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getCardResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_getDecks_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_getDecksResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getDecksResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getDecks_onsuccess = backend_com_wsdl_getDecks_op_onsuccess;

function backend_com_wsdl_getDecks_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.getDecks_onerror = backend_com_wsdl_getDecks_op_onerror;

//
// Operation {http://backend.com/wsdl}getDecks
// Wrapped operation.
// parameter arg0
// - array
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_getDecks_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.getDecks_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getDecks_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getDecks_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getDecks = backend_com_wsdl_getDecks_op;

function backend_com_wsdl_getDecks_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getDecks();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getDecks', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getDecks_serializeInput = backend_com_wsdl_getDecks_serializeInput;

function backend_com_wsdl_getDecksResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getDecksResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_getAllActions_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_getAllActionsResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getAllActionsResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getAllActions_onsuccess = backend_com_wsdl_getAllActions_op_onsuccess;

function backend_com_wsdl_getAllActions_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.getAllActions_onerror = backend_com_wsdl_getAllActions_op_onerror;

//
// Operation {http://backend.com/wsdl}getAllActions
// Wrapped operation.
//
function backend_com_wsdl_getAllActions_op(successCallback, errorCallback) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(0);
    xml = this.getAllActions_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getAllActions_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getAllActions_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getAllActions = backend_com_wsdl_getAllActions_op;

function backend_com_wsdl_getAllActions_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getAllActions();
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getAllActions', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getAllActions_serializeInput = backend_com_wsdl_getAllActions_serializeInput;

function backend_com_wsdl_getAllActionsResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getAllActionsResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_updateSpellAction_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_updateSpellActionResponse_deserializeResponse');
     responseObject = backend_com_wsdl_updateSpellActionResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.updateSpellAction_onsuccess = backend_com_wsdl_updateSpellAction_op_onsuccess;

function backend_com_wsdl_updateSpellAction_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.updateSpellAction_onerror = backend_com_wsdl_updateSpellAction_op_onerror;

//
// Operation {http://backend.com/wsdl}updateSpellAction
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_spellAction
//
function backend_com_wsdl_updateSpellAction_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.updateSpellAction_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.updateSpellAction_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.updateSpellAction_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.updateSpellAction = backend_com_wsdl_updateSpellAction_op;

function backend_com_wsdl_updateSpellAction_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_updateSpellAction();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:updateSpellAction', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.updateSpellAction_serializeInput = backend_com_wsdl_updateSpellAction_serializeInput;

function backend_com_wsdl_updateSpellActionResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_updateSpellActionResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_addPlayer_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_addPlayerResponse_deserializeResponse');
     responseObject = backend_com_wsdl_addPlayerResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.addPlayer_onsuccess = backend_com_wsdl_addPlayer_op_onsuccess;

function backend_com_wsdl_addPlayer_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.addPlayer_onerror = backend_com_wsdl_addPlayer_op_onerror;

//
// Operation {http://backend.com/wsdl}addPlayer
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_player
//
function backend_com_wsdl_addPlayer_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.addPlayer_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.addPlayer_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.addPlayer_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.addPlayer = backend_com_wsdl_addPlayer_op;

function backend_com_wsdl_addPlayer_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_addPlayer();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:addPlayer', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.addPlayer_serializeInput = backend_com_wsdl_addPlayer_serializeInput;

function backend_com_wsdl_addPlayerResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_addPlayerResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_getMonsterActions_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_getMonsterActionsResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getMonsterActionsResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getMonsterActions_onsuccess = backend_com_wsdl_getMonsterActions_op_onsuccess;

function backend_com_wsdl_getMonsterActions_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.getMonsterActions_onerror = backend_com_wsdl_getMonsterActions_op_onerror;

//
// Operation {http://backend.com/wsdl}getMonsterActions
// Wrapped operation.
// parameter arg0
// - array
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_getMonsterActions_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.getMonsterActions_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getMonsterActions_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getMonsterActions_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getMonsterActions = backend_com_wsdl_getMonsterActions_op;

function backend_com_wsdl_getMonsterActions_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getMonsterActions();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getMonsterActions', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getMonsterActions_serializeInput = backend_com_wsdl_getMonsterActions_serializeInput;

function backend_com_wsdl_getMonsterActionsResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getMonsterActionsResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_getSpellCards_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_getSpellCardsResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getSpellCardsResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getSpellCards_onsuccess = backend_com_wsdl_getSpellCards_op_onsuccess;

function backend_com_wsdl_getSpellCards_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.getSpellCards_onerror = backend_com_wsdl_getSpellCards_op_onerror;

//
// Operation {http://backend.com/wsdl}getSpellCards
// Wrapped operation.
// parameter arg0
// - array
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_getSpellCards_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.getSpellCards_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getSpellCards_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getSpellCards_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getSpellCards = backend_com_wsdl_getSpellCards_op;

function backend_com_wsdl_getSpellCards_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getSpellCards();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getSpellCards', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getSpellCards_serializeInput = backend_com_wsdl_getSpellCards_serializeInput;

function backend_com_wsdl_getSpellCardsResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getSpellCardsResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_updateMarkerTreePart_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_updateMarkerTreePartResponse_deserializeResponse');
     responseObject = backend_com_wsdl_updateMarkerTreePartResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.updateMarkerTreePart_onsuccess = backend_com_wsdl_updateMarkerTreePart_op_onsuccess;

function backend_com_wsdl_updateMarkerTreePart_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.updateMarkerTreePart_onerror = backend_com_wsdl_updateMarkerTreePart_op_onerror;

//
// Operation {http://backend.com/wsdl}updateMarkerTreePart
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_markerTreePart
//
function backend_com_wsdl_updateMarkerTreePart_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.updateMarkerTreePart_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.updateMarkerTreePart_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.updateMarkerTreePart_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.updateMarkerTreePart = backend_com_wsdl_updateMarkerTreePart_op;

function backend_com_wsdl_updateMarkerTreePart_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_updateMarkerTreePart();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:updateMarkerTreePart', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.updateMarkerTreePart_serializeInput = backend_com_wsdl_updateMarkerTreePart_serializeInput;

function backend_com_wsdl_updateMarkerTreePartResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_updateMarkerTreePartResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_updateMonsterCard_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_updateMonsterCardResponse_deserializeResponse');
     responseObject = backend_com_wsdl_updateMonsterCardResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.updateMonsterCard_onsuccess = backend_com_wsdl_updateMonsterCard_op_onsuccess;

function backend_com_wsdl_updateMonsterCard_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.updateMonsterCard_onerror = backend_com_wsdl_updateMonsterCard_op_onerror;

//
// Operation {http://backend.com/wsdl}updateMonsterCard
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_monsterCard
//
function backend_com_wsdl_updateMonsterCard_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.updateMonsterCard_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.updateMonsterCard_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.updateMonsterCard_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.updateMonsterCard = backend_com_wsdl_updateMonsterCard_op;

function backend_com_wsdl_updateMonsterCard_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_updateMonsterCard();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:updateMonsterCard', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.updateMonsterCard_serializeInput = backend_com_wsdl_updateMonsterCard_serializeInput;

function backend_com_wsdl_updateMonsterCardResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_updateMonsterCardResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_getQuestInstances_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_getQuestInstancesResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getQuestInstancesResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getQuestInstances_onsuccess = backend_com_wsdl_getQuestInstances_op_onsuccess;

function backend_com_wsdl_getQuestInstances_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.getQuestInstances_onerror = backend_com_wsdl_getQuestInstances_op_onerror;

//
// Operation {http://backend.com/wsdl}getQuestInstances
// Wrapped operation.
// parameter arg0
// - array
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_getQuestInstances_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.getQuestInstances_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getQuestInstances_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getQuestInstances_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getQuestInstances = backend_com_wsdl_getQuestInstances_op;

function backend_com_wsdl_getQuestInstances_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getQuestInstances();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getQuestInstances', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getQuestInstances_serializeInput = backend_com_wsdl_getQuestInstances_serializeInput;

function backend_com_wsdl_getQuestInstancesResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getQuestInstancesResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_deleteUser_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_deleteUserResponse_deserializeResponse');
     responseObject = backend_com_wsdl_deleteUserResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.deleteUser_onsuccess = backend_com_wsdl_deleteUser_op_onsuccess;

function backend_com_wsdl_deleteUser_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.deleteUser_onerror = backend_com_wsdl_deleteUser_op_onerror;

//
// Operation {http://backend.com/wsdl}deleteUser
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_deleteUser_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.deleteUser_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.deleteUser_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.deleteUser_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.deleteUser = backend_com_wsdl_deleteUser_op;

function backend_com_wsdl_deleteUser_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_deleteUser();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:deleteUser', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.deleteUser_serializeInput = backend_com_wsdl_deleteUser_serializeInput;

function backend_com_wsdl_deleteUserResponse_deserializeResponse(cxfjsutils, partElement) {
}
function backend_com_wsdl_getQuestsInRange_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_getQuestsInRangeResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getQuestsInRangeResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getQuestsInRange_onsuccess = backend_com_wsdl_getQuestsInRange_op_onsuccess;

function backend_com_wsdl_getQuestsInRange_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.getQuestsInRange_onerror = backend_com_wsdl_getQuestsInRange_op_onerror;

//
// Operation {http://backend.com/wsdl}getQuestsInRange
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_mapPosition
// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}float// parameter arg2
// - array
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_getQuestsInRange_op(successCallback, errorCallback, arg0, arg1, arg2) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(3);
    args[0] = arg0;
    args[1] = arg1;
    args[2] = arg2;
    xml = this.getQuestsInRange_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getQuestsInRange_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getQuestsInRange_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getQuestsInRange = backend_com_wsdl_getQuestsInRange_op;

function backend_com_wsdl_getQuestsInRange_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getQuestsInRange();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    wrapperObj.setArg2(args[2]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getQuestsInRange', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getQuestsInRange_serializeInput = backend_com_wsdl_getQuestsInRange_serializeInput;

function backend_com_wsdl_getQuestsInRangeResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getQuestsInRangeResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_clearDB_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_clearDBResponse_deserializeResponse');
     responseObject = backend_com_wsdl_clearDBResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.clearDB_onsuccess = backend_com_wsdl_clearDB_op_onsuccess;

function backend_com_wsdl_clearDB_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.clearDB_onerror = backend_com_wsdl_clearDB_op_onerror;

//
// Operation {http://backend.com/wsdl}clearDB
// Wrapped operation.
//
function backend_com_wsdl_clearDB_op(successCallback, errorCallback) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(0);
    xml = this.clearDB_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.clearDB_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.clearDB_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.clearDB = backend_com_wsdl_clearDB_op;

function backend_com_wsdl_clearDB_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_clearDB();
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:clearDB', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.clearDB_serializeInput = backend_com_wsdl_clearDB_serializeInput;

function backend_com_wsdl_clearDBResponse_deserializeResponse(cxfjsutils, partElement) {
}
function backend_com_wsdl_getActions_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_getActionsResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getActionsResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getActions_onsuccess = backend_com_wsdl_getActions_op_onsuccess;

function backend_com_wsdl_getActions_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.getActions_onerror = backend_com_wsdl_getActions_op_onerror;

//
// Operation {http://backend.com/wsdl}getActions
// Wrapped operation.
// parameter arg0
// - array
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_getActions_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.getActions_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getActions_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getActions_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getActions = backend_com_wsdl_getActions_op;

function backend_com_wsdl_getActions_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getActions();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getActions', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getActions_serializeInput = backend_com_wsdl_getActions_serializeInput;

function backend_com_wsdl_getActionsResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getActionsResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_updateDeck_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_updateDeckResponse_deserializeResponse');
     responseObject = backend_com_wsdl_updateDeckResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.updateDeck_onsuccess = backend_com_wsdl_updateDeck_op_onsuccess;

function backend_com_wsdl_updateDeck_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.updateDeck_onerror = backend_com_wsdl_updateDeck_op_onerror;

//
// Operation {http://backend.com/wsdl}updateDeck
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_deck
//
function backend_com_wsdl_updateDeck_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.updateDeck_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.updateDeck_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.updateDeck_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.updateDeck = backend_com_wsdl_updateDeck_op;

function backend_com_wsdl_updateDeck_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_updateDeck();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:updateDeck', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.updateDeck_serializeInput = backend_com_wsdl_updateDeck_serializeInput;

function backend_com_wsdl_updateDeckResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_updateDeckResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_deleteMarker_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_deleteMarkerResponse_deserializeResponse');
     responseObject = backend_com_wsdl_deleteMarkerResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.deleteMarker_onsuccess = backend_com_wsdl_deleteMarker_op_onsuccess;

function backend_com_wsdl_deleteMarker_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.deleteMarker_onerror = backend_com_wsdl_deleteMarker_op_onerror;

//
// Operation {http://backend.com/wsdl}deleteMarker
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_deleteMarker_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.deleteMarker_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.deleteMarker_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.deleteMarker_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.deleteMarker = backend_com_wsdl_deleteMarker_op;

function backend_com_wsdl_deleteMarker_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_deleteMarker();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:deleteMarker', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.deleteMarker_serializeInput = backend_com_wsdl_deleteMarker_serializeInput;

function backend_com_wsdl_deleteMarkerResponse_deserializeResponse(cxfjsutils, partElement) {
}
function backend_com_wsdl_getSpellCard_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_getSpellCardResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getSpellCardResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getSpellCard_onsuccess = backend_com_wsdl_getSpellCard_op_onsuccess;

function backend_com_wsdl_getSpellCard_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.getSpellCard_onerror = backend_com_wsdl_getSpellCard_op_onerror;

//
// Operation {http://backend.com/wsdl}getSpellCard
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_getSpellCard_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.getSpellCard_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getSpellCard_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getSpellCard_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getSpellCard = backend_com_wsdl_getSpellCard_op;

function backend_com_wsdl_getSpellCard_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getSpellCard();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getSpellCard', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getSpellCard_serializeInput = backend_com_wsdl_getSpellCard_serializeInput;

function backend_com_wsdl_getSpellCardResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getSpellCardResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_deleteSpellAction_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_deleteSpellActionResponse_deserializeResponse');
     responseObject = backend_com_wsdl_deleteSpellActionResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.deleteSpellAction_onsuccess = backend_com_wsdl_deleteSpellAction_op_onsuccess;

function backend_com_wsdl_deleteSpellAction_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.deleteSpellAction_onerror = backend_com_wsdl_deleteSpellAction_op_onerror;

//
// Operation {http://backend.com/wsdl}deleteSpellAction
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_deleteSpellAction_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.deleteSpellAction_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.deleteSpellAction_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.deleteSpellAction_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.deleteSpellAction = backend_com_wsdl_deleteSpellAction_op;

function backend_com_wsdl_deleteSpellAction_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_deleteSpellAction();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:deleteSpellAction', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.deleteSpellAction_serializeInput = backend_com_wsdl_deleteSpellAction_serializeInput;

function backend_com_wsdl_deleteSpellActionResponse_deserializeResponse(cxfjsutils, partElement) {
}
function backend_com_wsdl_register_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_registerResponse_deserializeResponse');
     responseObject = backend_com_wsdl_registerResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.register_onsuccess = backend_com_wsdl_register_op_onsuccess;

function backend_com_wsdl_register_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.register_onerror = backend_com_wsdl_register_op_onerror;

//
// Operation {http://backend.com/wsdl}register
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function backend_com_wsdl_register_op(successCallback, errorCallback, arg0, arg1) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = arg0;
    args[1] = arg1;
    xml = this.register_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.register_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.register_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.register = backend_com_wsdl_register_op;

function backend_com_wsdl_register_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_register();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:register', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.register_serializeInput = backend_com_wsdl_register_serializeInput;

function backend_com_wsdl_registerResponse_deserializeResponse(cxfjsutils, partElement) {
}
function backend_com_wsdl_setTreePartActive_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_setTreePartActiveResponse_deserializeResponse');
     responseObject = backend_com_wsdl_setTreePartActiveResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.setTreePartActive_onsuccess = backend_com_wsdl_setTreePartActive_op_onsuccess;

function backend_com_wsdl_setTreePartActive_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.setTreePartActive_onerror = backend_com_wsdl_setTreePartActive_op_onerror;

//
// Operation {http://backend.com/wsdl}setTreePartActive
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}boolean//
function backend_com_wsdl_setTreePartActive_op(successCallback, errorCallback, arg0, arg1) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = arg0;
    args[1] = arg1;
    xml = this.setTreePartActive_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.setTreePartActive_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.setTreePartActive_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.setTreePartActive = backend_com_wsdl_setTreePartActive_op;

function backend_com_wsdl_setTreePartActive_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_setTreePartActive();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:setTreePartActive', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.setTreePartActive_serializeInput = backend_com_wsdl_setTreePartActive_serializeInput;

function backend_com_wsdl_setTreePartActiveResponse_deserializeResponse(cxfjsutils, partElement) {
}
function backend_com_wsdl_updateQuest_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_updateQuestResponse_deserializeResponse');
     responseObject = backend_com_wsdl_updateQuestResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.updateQuest_onsuccess = backend_com_wsdl_updateQuest_op_onsuccess;

function backend_com_wsdl_updateQuest_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.updateQuest_onerror = backend_com_wsdl_updateQuest_op_onerror;

//
// Operation {http://backend.com/wsdl}updateQuest
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_quest
//
function backend_com_wsdl_updateQuest_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.updateQuest_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.updateQuest_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.updateQuest_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.updateQuest = backend_com_wsdl_updateQuest_op;

function backend_com_wsdl_updateQuest_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_updateQuest();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:updateQuest', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.updateQuest_serializeInput = backend_com_wsdl_updateQuest_serializeInput;

function backend_com_wsdl_updateQuestResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_updateQuestResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_addMonsterCard_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_addMonsterCardResponse_deserializeResponse');
     responseObject = backend_com_wsdl_addMonsterCardResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.addMonsterCard_onsuccess = backend_com_wsdl_addMonsterCard_op_onsuccess;

function backend_com_wsdl_addMonsterCard_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.addMonsterCard_onerror = backend_com_wsdl_addMonsterCard_op_onerror;

//
// Operation {http://backend.com/wsdl}addMonsterCard
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_monsterCard
//
function backend_com_wsdl_addMonsterCard_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.addMonsterCard_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.addMonsterCard_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.addMonsterCard_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.addMonsterCard = backend_com_wsdl_addMonsterCard_op;

function backend_com_wsdl_addMonsterCard_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_addMonsterCard();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:addMonsterCard', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.addMonsterCard_serializeInput = backend_com_wsdl_addMonsterCard_serializeInput;

function backend_com_wsdl_addMonsterCardResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_addMonsterCardResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_addMarkerTreePart_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_addMarkerTreePartResponse_deserializeResponse');
     responseObject = backend_com_wsdl_addMarkerTreePartResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.addMarkerTreePart_onsuccess = backend_com_wsdl_addMarkerTreePart_op_onsuccess;

function backend_com_wsdl_addMarkerTreePart_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.addMarkerTreePart_onerror = backend_com_wsdl_addMarkerTreePart_op_onerror;

//
// Operation {http://backend.com/wsdl}addMarkerTreePart
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_markerTreePart
//
function backend_com_wsdl_addMarkerTreePart_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.addMarkerTreePart_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.addMarkerTreePart_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.addMarkerTreePart_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.addMarkerTreePart = backend_com_wsdl_addMarkerTreePart_op;

function backend_com_wsdl_addMarkerTreePart_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_addMarkerTreePart();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:addMarkerTreePart', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.addMarkerTreePart_serializeInput = backend_com_wsdl_addMarkerTreePart_serializeInput;

function backend_com_wsdl_addMarkerTreePartResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_addMarkerTreePartResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_getAllSpellActions_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_getAllSpellActionsResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getAllSpellActionsResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getAllSpellActions_onsuccess = backend_com_wsdl_getAllSpellActions_op_onsuccess;

function backend_com_wsdl_getAllSpellActions_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.getAllSpellActions_onerror = backend_com_wsdl_getAllSpellActions_op_onerror;

//
// Operation {http://backend.com/wsdl}getAllSpellActions
// Wrapped operation.
//
function backend_com_wsdl_getAllSpellActions_op(successCallback, errorCallback) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(0);
    xml = this.getAllSpellActions_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getAllSpellActions_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getAllSpellActions_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getAllSpellActions = backend_com_wsdl_getAllSpellActions_op;

function backend_com_wsdl_getAllSpellActions_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getAllSpellActions();
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getAllSpellActions', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getAllSpellActions_serializeInput = backend_com_wsdl_getAllSpellActions_serializeInput;

function backend_com_wsdl_getAllSpellActionsResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getAllSpellActionsResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_deleteQuest_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_deleteQuestResponse_deserializeResponse');
     responseObject = backend_com_wsdl_deleteQuestResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.deleteQuest_onsuccess = backend_com_wsdl_deleteQuest_op_onsuccess;

function backend_com_wsdl_deleteQuest_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.deleteQuest_onerror = backend_com_wsdl_deleteQuest_op_onerror;

//
// Operation {http://backend.com/wsdl}deleteQuest
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_deleteQuest_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.deleteQuest_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.deleteQuest_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.deleteQuest_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.deleteQuest = backend_com_wsdl_deleteQuest_op;

function backend_com_wsdl_deleteQuest_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_deleteQuest();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:deleteQuest', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.deleteQuest_serializeInput = backend_com_wsdl_deleteQuest_serializeInput;

function backend_com_wsdl_deleteQuestResponse_deserializeResponse(cxfjsutils, partElement) {
}
function backend_com_wsdl_addSpellCard_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_addSpellCardResponse_deserializeResponse');
     responseObject = backend_com_wsdl_addSpellCardResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.addSpellCard_onsuccess = backend_com_wsdl_addSpellCard_op_onsuccess;

function backend_com_wsdl_addSpellCard_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.addSpellCard_onerror = backend_com_wsdl_addSpellCard_op_onerror;

//
// Operation {http://backend.com/wsdl}addSpellCard
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_spellCard
//
function backend_com_wsdl_addSpellCard_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.addSpellCard_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.addSpellCard_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.addSpellCard_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.addSpellCard = backend_com_wsdl_addSpellCard_op;

function backend_com_wsdl_addSpellCard_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_addSpellCard();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:addSpellCard', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.addSpellCard_serializeInput = backend_com_wsdl_addSpellCard_serializeInput;

function backend_com_wsdl_addSpellCardResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_addSpellCardResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_addDeck_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_addDeckResponse_deserializeResponse');
     responseObject = backend_com_wsdl_addDeckResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.addDeck_onsuccess = backend_com_wsdl_addDeck_op_onsuccess;

function backend_com_wsdl_addDeck_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.addDeck_onerror = backend_com_wsdl_addDeck_op_onerror;

//
// Operation {http://backend.com/wsdl}addDeck
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_deck
//
function backend_com_wsdl_addDeck_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.addDeck_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.addDeck_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.addDeck_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.addDeck = backend_com_wsdl_addDeck_op;

function backend_com_wsdl_addDeck_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_addDeck();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:addDeck', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.addDeck_serializeInput = backend_com_wsdl_addDeck_serializeInput;

function backend_com_wsdl_addDeckResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_addDeckResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_deletePlayer_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_deletePlayerResponse_deserializeResponse');
     responseObject = backend_com_wsdl_deletePlayerResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.deletePlayer_onsuccess = backend_com_wsdl_deletePlayer_op_onsuccess;

function backend_com_wsdl_deletePlayer_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.deletePlayer_onerror = backend_com_wsdl_deletePlayer_op_onerror;

//
// Operation {http://backend.com/wsdl}deletePlayer
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_deletePlayer_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.deletePlayer_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.deletePlayer_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.deletePlayer_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.deletePlayer = backend_com_wsdl_deletePlayer_op;

function backend_com_wsdl_deletePlayer_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_deletePlayer();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:deletePlayer', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.deletePlayer_serializeInput = backend_com_wsdl_deletePlayer_serializeInput;

function backend_com_wsdl_deletePlayerResponse_deserializeResponse(cxfjsutils, partElement) {
}
function backend_com_wsdl_updatePlayer_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_updatePlayerResponse_deserializeResponse');
     responseObject = backend_com_wsdl_updatePlayerResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.updatePlayer_onsuccess = backend_com_wsdl_updatePlayer_op_onsuccess;

function backend_com_wsdl_updatePlayer_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.updatePlayer_onerror = backend_com_wsdl_updatePlayer_op_onerror;

//
// Operation {http://backend.com/wsdl}updatePlayer
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_player
//
function backend_com_wsdl_updatePlayer_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.updatePlayer_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.updatePlayer_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.updatePlayer_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.updatePlayer = backend_com_wsdl_updatePlayer_op;

function backend_com_wsdl_updatePlayer_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_updatePlayer();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:updatePlayer', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.updatePlayer_serializeInput = backend_com_wsdl_updatePlayer_serializeInput;

function backend_com_wsdl_updatePlayerResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_updatePlayerResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_addTreePartLazy_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_addTreePartLazyResponse_deserializeResponse');
     responseObject = backend_com_wsdl_addTreePartLazyResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.addTreePartLazy_onsuccess = backend_com_wsdl_addTreePartLazy_op_onsuccess;

function backend_com_wsdl_addTreePartLazy_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.addTreePartLazy_onerror = backend_com_wsdl_addTreePartLazy_op_onerror;

//
// Operation {http://backend.com/wsdl}addTreePartLazy
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_treePartLazy
//
function backend_com_wsdl_addTreePartLazy_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.addTreePartLazy_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.addTreePartLazy_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.addTreePartLazy_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.addTreePartLazy = backend_com_wsdl_addTreePartLazy_op;

function backend_com_wsdl_addTreePartLazy_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_addTreePartLazy();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:addTreePartLazy', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.addTreePartLazy_serializeInput = backend_com_wsdl_addTreePartLazy_serializeInput;

function backend_com_wsdl_addTreePartLazyResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_addTreePartLazyResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_getTreePartLazy_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_getTreePartLazyResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getTreePartLazyResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getTreePartLazy_onsuccess = backend_com_wsdl_getTreePartLazy_op_onsuccess;

function backend_com_wsdl_getTreePartLazy_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.getTreePartLazy_onerror = backend_com_wsdl_getTreePartLazy_op_onerror;

//
// Operation {http://backend.com/wsdl}getTreePartLazy
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_getTreePartLazy_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.getTreePartLazy_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getTreePartLazy_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getTreePartLazy_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getTreePartLazy = backend_com_wsdl_getTreePartLazy_op;

function backend_com_wsdl_getTreePartLazy_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getTreePartLazy();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getTreePartLazy', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getTreePartLazy_serializeInput = backend_com_wsdl_getTreePartLazy_serializeInput;

function backend_com_wsdl_getTreePartLazyResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getTreePartLazyResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_updateOrTreePart_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_updateOrTreePartResponse_deserializeResponse');
     responseObject = backend_com_wsdl_updateOrTreePartResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.updateOrTreePart_onsuccess = backend_com_wsdl_updateOrTreePart_op_onsuccess;

function backend_com_wsdl_updateOrTreePart_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.updateOrTreePart_onerror = backend_com_wsdl_updateOrTreePart_op_onerror;

//
// Operation {http://backend.com/wsdl}updateOrTreePart
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_orTreePart
//
function backend_com_wsdl_updateOrTreePart_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.updateOrTreePart_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.updateOrTreePart_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.updateOrTreePart_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.updateOrTreePart = backend_com_wsdl_updateOrTreePart_op;

function backend_com_wsdl_updateOrTreePart_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_updateOrTreePart();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:updateOrTreePart', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.updateOrTreePart_serializeInput = backend_com_wsdl_updateOrTreePart_serializeInput;

function backend_com_wsdl_updateOrTreePartResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_updateOrTreePartResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_updateFightMarker_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_updateFightMarkerResponse_deserializeResponse');
     responseObject = backend_com_wsdl_updateFightMarkerResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.updateFightMarker_onsuccess = backend_com_wsdl_updateFightMarker_op_onsuccess;

function backend_com_wsdl_updateFightMarker_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.updateFightMarker_onerror = backend_com_wsdl_updateFightMarker_op_onerror;

//
// Operation {http://backend.com/wsdl}updateFightMarker
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_fightMarker
//
function backend_com_wsdl_updateFightMarker_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.updateFightMarker_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.updateFightMarker_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.updateFightMarker_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.updateFightMarker = backend_com_wsdl_updateFightMarker_op;

function backend_com_wsdl_updateFightMarker_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_updateFightMarker();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:updateFightMarker', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.updateFightMarker_serializeInput = backend_com_wsdl_updateFightMarker_serializeInput;

function backend_com_wsdl_updateFightMarkerResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_updateFightMarkerResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_addOrTreePart_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_addOrTreePartResponse_deserializeResponse');
     responseObject = backend_com_wsdl_addOrTreePartResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.addOrTreePart_onsuccess = backend_com_wsdl_addOrTreePart_op_onsuccess;

function backend_com_wsdl_addOrTreePart_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.addOrTreePart_onerror = backend_com_wsdl_addOrTreePart_op_onerror;

//
// Operation {http://backend.com/wsdl}addOrTreePart
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_orTreePart
//
function backend_com_wsdl_addOrTreePart_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.addOrTreePart_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.addOrTreePart_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.addOrTreePart_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.addOrTreePart = backend_com_wsdl_addOrTreePart_op;

function backend_com_wsdl_addOrTreePart_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_addOrTreePart();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:addOrTreePart', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.addOrTreePart_serializeInput = backend_com_wsdl_addOrTreePart_serializeInput;

function backend_com_wsdl_addOrTreePartResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_addOrTreePartResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_updateHtml_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_updateHtmlResponse_deserializeResponse');
     responseObject = backend_com_wsdl_updateHtmlResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.updateHtml_onsuccess = backend_com_wsdl_updateHtml_op_onsuccess;

function backend_com_wsdl_updateHtml_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.updateHtml_onerror = backend_com_wsdl_updateHtml_op_onerror;

//
// Operation {http://backend.com/wsdl}updateHtml
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_updateHtml_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.updateHtml_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.updateHtml_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.updateHtml_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.updateHtml = backend_com_wsdl_updateHtml_op;

function backend_com_wsdl_updateHtml_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_updateHtml();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:updateHtml', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.updateHtml_serializeInput = backend_com_wsdl_updateHtml_serializeInput;

function backend_com_wsdl_updateHtmlResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_updateHtmlResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_getTreePartsLazy_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_getTreePartsLazyResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getTreePartsLazyResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getTreePartsLazy_onsuccess = backend_com_wsdl_getTreePartsLazy_op_onsuccess;

function backend_com_wsdl_getTreePartsLazy_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.getTreePartsLazy_onerror = backend_com_wsdl_getTreePartsLazy_op_onerror;

//
// Operation {http://backend.com/wsdl}getTreePartsLazy
// Wrapped operation.
// parameter arg0
// - array
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_getTreePartsLazy_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.getTreePartsLazy_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getTreePartsLazy_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getTreePartsLazy_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getTreePartsLazy = backend_com_wsdl_getTreePartsLazy_op;

function backend_com_wsdl_getTreePartsLazy_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getTreePartsLazy();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getTreePartsLazy', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getTreePartsLazy_serializeInput = backend_com_wsdl_getTreePartsLazy_serializeInput;

function backend_com_wsdl_getTreePartsLazyResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getTreePartsLazyResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_getMarker_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_getMarkerResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getMarkerResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getMarker_onsuccess = backend_com_wsdl_getMarker_op_onsuccess;

function backend_com_wsdl_getMarker_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.getMarker_onerror = backend_com_wsdl_getMarker_op_onerror;

//
// Operation {http://backend.com/wsdl}getMarker
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_getMarker_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.getMarker_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getMarker_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getMarker_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getMarker = backend_com_wsdl_getMarker_op;

function backend_com_wsdl_getMarker_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getMarker();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getMarker', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getMarker_serializeInput = backend_com_wsdl_getMarker_serializeInput;

function backend_com_wsdl_getMarkerResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getMarkerResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_updateInfoMarker_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_updateInfoMarkerResponse_deserializeResponse');
     responseObject = backend_com_wsdl_updateInfoMarkerResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.updateInfoMarker_onsuccess = backend_com_wsdl_updateInfoMarker_op_onsuccess;

function backend_com_wsdl_updateInfoMarker_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.updateInfoMarker_onerror = backend_com_wsdl_updateInfoMarker_op_onerror;

//
// Operation {http://backend.com/wsdl}updateInfoMarker
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_infoMarker
//
function backend_com_wsdl_updateInfoMarker_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.updateInfoMarker_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.updateInfoMarker_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.updateInfoMarker_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.updateInfoMarker = backend_com_wsdl_updateInfoMarker_op;

function backend_com_wsdl_updateInfoMarker_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_updateInfoMarker();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:updateInfoMarker', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.updateInfoMarker_serializeInput = backend_com_wsdl_updateInfoMarker_serializeInput;

function backend_com_wsdl_updateInfoMarkerResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_updateInfoMarkerResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_getQuestInstance_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_getQuestInstanceResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getQuestInstanceResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getQuestInstance_onsuccess = backend_com_wsdl_getQuestInstance_op_onsuccess;

function backend_com_wsdl_getQuestInstance_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.getQuestInstance_onerror = backend_com_wsdl_getQuestInstance_op_onerror;

//
// Operation {http://backend.com/wsdl}getQuestInstance
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_getQuestInstance_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.getQuestInstance_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getQuestInstance_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getQuestInstance_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getQuestInstance = backend_com_wsdl_getQuestInstance_op;

function backend_com_wsdl_getQuestInstance_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getQuestInstance();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getQuestInstance', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getQuestInstance_serializeInput = backend_com_wsdl_getQuestInstance_serializeInput;

function backend_com_wsdl_getQuestInstanceResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getQuestInstanceResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_deleteDeck_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_deleteDeckResponse_deserializeResponse');
     responseObject = backend_com_wsdl_deleteDeckResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.deleteDeck_onsuccess = backend_com_wsdl_deleteDeck_op_onsuccess;

function backend_com_wsdl_deleteDeck_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.deleteDeck_onerror = backend_com_wsdl_deleteDeck_op_onerror;

//
// Operation {http://backend.com/wsdl}deleteDeck
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_deleteDeck_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.deleteDeck_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.deleteDeck_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.deleteDeck_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.deleteDeck = backend_com_wsdl_deleteDeck_op;

function backend_com_wsdl_deleteDeck_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_deleteDeck();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:deleteDeck', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.deleteDeck_serializeInput = backend_com_wsdl_deleteDeck_serializeInput;

function backend_com_wsdl_deleteDeckResponse_deserializeResponse(cxfjsutils, partElement) {
}
function backend_com_wsdl_getTreePart_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_getTreePartResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getTreePartResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getTreePart_onsuccess = backend_com_wsdl_getTreePart_op_onsuccess;

function backend_com_wsdl_getTreePart_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.getTreePart_onerror = backend_com_wsdl_getTreePart_op_onerror;

//
// Operation {http://backend.com/wsdl}getTreePart
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_getTreePart_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.getTreePart_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getTreePart_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getTreePart_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getTreePart = backend_com_wsdl_getTreePart_op;

function backend_com_wsdl_getTreePart_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getTreePart();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getTreePart', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getTreePart_serializeInput = backend_com_wsdl_getTreePart_serializeInput;

function backend_com_wsdl_getTreePartResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getTreePartResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_addMonsterAction_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_addMonsterActionResponse_deserializeResponse');
     responseObject = backend_com_wsdl_addMonsterActionResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.addMonsterAction_onsuccess = backend_com_wsdl_addMonsterAction_op_onsuccess;

function backend_com_wsdl_addMonsterAction_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.addMonsterAction_onerror = backend_com_wsdl_addMonsterAction_op_onerror;

//
// Operation {http://backend.com/wsdl}addMonsterAction
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_monsterAction
//
function backend_com_wsdl_addMonsterAction_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.addMonsterAction_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.addMonsterAction_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.addMonsterAction_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.addMonsterAction = backend_com_wsdl_addMonsterAction_op;

function backend_com_wsdl_addMonsterAction_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_addMonsterAction();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:addMonsterAction', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.addMonsterAction_serializeInput = backend_com_wsdl_addMonsterAction_serializeInput;

function backend_com_wsdl_addMonsterActionResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_addMonsterActionResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_getCards_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_getCardsResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getCardsResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getCards_onsuccess = backend_com_wsdl_getCards_op_onsuccess;

function backend_com_wsdl_getCards_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.getCards_onerror = backend_com_wsdl_getCards_op_onerror;

//
// Operation {http://backend.com/wsdl}getCards
// Wrapped operation.
// parameter arg0
// - array
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_getCards_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.getCards_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getCards_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getCards_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getCards = backend_com_wsdl_getCards_op;

function backend_com_wsdl_getCards_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getCards();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getCards', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getCards_serializeInput = backend_com_wsdl_getCards_serializeInput;

function backend_com_wsdl_getCardsResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getCardsResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_getQuest_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_getQuestResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getQuestResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getQuest_onsuccess = backend_com_wsdl_getQuest_op_onsuccess;

function backend_com_wsdl_getQuest_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.getQuest_onerror = backend_com_wsdl_getQuest_op_onerror;

//
// Operation {http://backend.com/wsdl}getQuest
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_getQuest_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.getQuest_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getQuest_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getQuest_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getQuest = backend_com_wsdl_getQuest_op;

function backend_com_wsdl_getQuest_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getQuest();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getQuest', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getQuest_serializeInput = backend_com_wsdl_getQuest_serializeInput;

function backend_com_wsdl_getQuestResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getQuestResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_updateAndTreePart_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_updateAndTreePartResponse_deserializeResponse');
     responseObject = backend_com_wsdl_updateAndTreePartResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.updateAndTreePart_onsuccess = backend_com_wsdl_updateAndTreePart_op_onsuccess;

function backend_com_wsdl_updateAndTreePart_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.updateAndTreePart_onerror = backend_com_wsdl_updateAndTreePart_op_onerror;

//
// Operation {http://backend.com/wsdl}updateAndTreePart
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_andTreePart
//
function backend_com_wsdl_updateAndTreePart_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.updateAndTreePart_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.updateAndTreePart_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.updateAndTreePart_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.updateAndTreePart = backend_com_wsdl_updateAndTreePart_op;

function backend_com_wsdl_updateAndTreePart_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_updateAndTreePart();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:updateAndTreePart', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.updateAndTreePart_serializeInput = backend_com_wsdl_updateAndTreePart_serializeInput;

function backend_com_wsdl_updateAndTreePartResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_updateAndTreePartResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_updateMonsterAction_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_updateMonsterActionResponse_deserializeResponse');
     responseObject = backend_com_wsdl_updateMonsterActionResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.updateMonsterAction_onsuccess = backend_com_wsdl_updateMonsterAction_op_onsuccess;

function backend_com_wsdl_updateMonsterAction_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.updateMonsterAction_onerror = backend_com_wsdl_updateMonsterAction_op_onerror;

//
// Operation {http://backend.com/wsdl}updateMonsterAction
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_monsterAction
//
function backend_com_wsdl_updateMonsterAction_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.updateMonsterAction_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.updateMonsterAction_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.updateMonsterAction_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.updateMonsterAction = backend_com_wsdl_updateMonsterAction_op;

function backend_com_wsdl_updateMonsterAction_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_updateMonsterAction();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:updateMonsterAction', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.updateMonsterAction_serializeInput = backend_com_wsdl_updateMonsterAction_serializeInput;

function backend_com_wsdl_updateMonsterActionResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_updateMonsterActionResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_deleteQuestInstance_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_deleteQuestInstanceResponse_deserializeResponse');
     responseObject = backend_com_wsdl_deleteQuestInstanceResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.deleteQuestInstance_onsuccess = backend_com_wsdl_deleteQuestInstance_op_onsuccess;

function backend_com_wsdl_deleteQuestInstance_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.deleteQuestInstance_onerror = backend_com_wsdl_deleteQuestInstance_op_onerror;

//
// Operation {http://backend.com/wsdl}deleteQuestInstance
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_deleteQuestInstance_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.deleteQuestInstance_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.deleteQuestInstance_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.deleteQuestInstance_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.deleteQuestInstance = backend_com_wsdl_deleteQuestInstance_op;

function backend_com_wsdl_deleteQuestInstance_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_deleteQuestInstance();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:deleteQuestInstance', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.deleteQuestInstance_serializeInput = backend_com_wsdl_deleteQuestInstance_serializeInput;

function backend_com_wsdl_deleteQuestInstanceResponse_deserializeResponse(cxfjsutils, partElement) {
}
function backend_com_wsdl_setQuestInstanceOfMarkerTreePart_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_setQuestInstanceOfMarkerTreePartResponse_deserializeResponse');
     responseObject = backend_com_wsdl_setQuestInstanceOfMarkerTreePartResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.setQuestInstanceOfMarkerTreePart_onsuccess = backend_com_wsdl_setQuestInstanceOfMarkerTreePart_op_onsuccess;

function backend_com_wsdl_setQuestInstanceOfMarkerTreePart_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.setQuestInstanceOfMarkerTreePart_onerror = backend_com_wsdl_setQuestInstanceOfMarkerTreePart_op_onerror;

//
// Operation {http://backend.com/wsdl}setQuestInstanceOfMarkerTreePart
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_setQuestInstanceOfMarkerTreePart_op(successCallback, errorCallback, arg0, arg1) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = arg0;
    args[1] = arg1;
    xml = this.setQuestInstanceOfMarkerTreePart_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.setQuestInstanceOfMarkerTreePart_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.setQuestInstanceOfMarkerTreePart_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.setQuestInstanceOfMarkerTreePart = backend_com_wsdl_setQuestInstanceOfMarkerTreePart_op;

function backend_com_wsdl_setQuestInstanceOfMarkerTreePart_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_setQuestInstanceOfMarkerTreePart();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:setQuestInstanceOfMarkerTreePart', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.setQuestInstanceOfMarkerTreePart_serializeInput = backend_com_wsdl_setQuestInstanceOfMarkerTreePart_serializeInput;

function backend_com_wsdl_setQuestInstanceOfMarkerTreePartResponse_deserializeResponse(cxfjsutils, partElement) {
}
function backend_com_wsdl_deleteMonsterCard_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_deleteMonsterCardResponse_deserializeResponse');
     responseObject = backend_com_wsdl_deleteMonsterCardResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.deleteMonsterCard_onsuccess = backend_com_wsdl_deleteMonsterCard_op_onsuccess;

function backend_com_wsdl_deleteMonsterCard_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.deleteMonsterCard_onerror = backend_com_wsdl_deleteMonsterCard_op_onerror;

//
// Operation {http://backend.com/wsdl}deleteMonsterCard
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_deleteMonsterCard_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.deleteMonsterCard_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.deleteMonsterCard_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.deleteMonsterCard_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.deleteMonsterCard = backend_com_wsdl_deleteMonsterCard_op;

function backend_com_wsdl_deleteMonsterCard_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_deleteMonsterCard();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:deleteMonsterCard', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.deleteMonsterCard_serializeInput = backend_com_wsdl_deleteMonsterCard_serializeInput;

function backend_com_wsdl_deleteMonsterCardResponse_deserializeResponse(cxfjsutils, partElement) {
}
function backend_com_wsdl_deleteTreePart_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_deleteTreePartResponse_deserializeResponse');
     responseObject = backend_com_wsdl_deleteTreePartResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.deleteTreePart_onsuccess = backend_com_wsdl_deleteTreePart_op_onsuccess;

function backend_com_wsdl_deleteTreePart_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.deleteTreePart_onerror = backend_com_wsdl_deleteTreePart_op_onerror;

//
// Operation {http://backend.com/wsdl}deleteTreePart
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_deleteTreePart_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.deleteTreePart_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.deleteTreePart_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.deleteTreePart_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.deleteTreePart = backend_com_wsdl_deleteTreePart_op;

function backend_com_wsdl_deleteTreePart_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_deleteTreePart();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:deleteTreePart', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.deleteTreePart_serializeInput = backend_com_wsdl_deleteTreePart_serializeInput;

function backend_com_wsdl_deleteTreePartResponse_deserializeResponse(cxfjsutils, partElement) {
}
function backend_com_wsdl_addQuest_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_addQuestResponse_deserializeResponse');
     responseObject = backend_com_wsdl_addQuestResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.addQuest_onsuccess = backend_com_wsdl_addQuest_op_onsuccess;

function backend_com_wsdl_addQuest_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.addQuest_onerror = backend_com_wsdl_addQuest_op_onerror;

//
// Operation {http://backend.com/wsdl}addQuest
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_quest
//
function backend_com_wsdl_addQuest_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.addQuest_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.addQuest_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.addQuest_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.addQuest = backend_com_wsdl_addQuest_op;

function backend_com_wsdl_addQuest_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_addQuest();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:addQuest', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.addQuest_serializeInput = backend_com_wsdl_addQuest_serializeInput;

function backend_com_wsdl_addQuestResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_addQuestResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_deleteSpellCard_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_deleteSpellCardResponse_deserializeResponse');
     responseObject = backend_com_wsdl_deleteSpellCardResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.deleteSpellCard_onsuccess = backend_com_wsdl_deleteSpellCard_op_onsuccess;

function backend_com_wsdl_deleteSpellCard_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.deleteSpellCard_onerror = backend_com_wsdl_deleteSpellCard_op_onerror;

//
// Operation {http://backend.com/wsdl}deleteSpellCard
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_deleteSpellCard_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.deleteSpellCard_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.deleteSpellCard_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.deleteSpellCard_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.deleteSpellCard = backend_com_wsdl_deleteSpellCard_op;

function backend_com_wsdl_deleteSpellCard_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_deleteSpellCard();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:deleteSpellCard', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.deleteSpellCard_serializeInput = backend_com_wsdl_deleteSpellCard_serializeInput;

function backend_com_wsdl_deleteSpellCardResponse_deserializeResponse(cxfjsutils, partElement) {
}
function backend_com_wsdl_addAndTreePart_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_addAndTreePartResponse_deserializeResponse');
     responseObject = backend_com_wsdl_addAndTreePartResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.addAndTreePart_onsuccess = backend_com_wsdl_addAndTreePart_op_onsuccess;

function backend_com_wsdl_addAndTreePart_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.addAndTreePart_onerror = backend_com_wsdl_addAndTreePart_op_onerror;

//
// Operation {http://backend.com/wsdl}addAndTreePart
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_andTreePart
//
function backend_com_wsdl_addAndTreePart_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.addAndTreePart_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.addAndTreePart_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.addAndTreePart_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.addAndTreePart = backend_com_wsdl_addAndTreePart_op;

function backend_com_wsdl_addAndTreePart_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_addAndTreePart();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:addAndTreePart', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.addAndTreePart_serializeInput = backend_com_wsdl_addAndTreePart_serializeInput;

function backend_com_wsdl_addAndTreePartResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_addAndTreePartResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_getDeck_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_getDeckResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getDeckResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getDeck_onsuccess = backend_com_wsdl_getDeck_op_onsuccess;

function backend_com_wsdl_getDeck_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.getDeck_onerror = backend_com_wsdl_getDeck_op_onerror;

//
// Operation {http://backend.com/wsdl}getDeck
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_getDeck_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.getDeck_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getDeck_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getDeck_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getDeck = backend_com_wsdl_getDeck_op;

function backend_com_wsdl_getDeck_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getDeck();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getDeck', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getDeck_serializeInput = backend_com_wsdl_getDeck_serializeInput;

function backend_com_wsdl_getDeckResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getDeckResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_addInfoMarker_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_addInfoMarkerResponse_deserializeResponse');
     responseObject = backend_com_wsdl_addInfoMarkerResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.addInfoMarker_onsuccess = backend_com_wsdl_addInfoMarker_op_onsuccess;

function backend_com_wsdl_addInfoMarker_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.addInfoMarker_onerror = backend_com_wsdl_addInfoMarker_op_onerror;

//
// Operation {http://backend.com/wsdl}addInfoMarker
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_infoMarker
//
function backend_com_wsdl_addInfoMarker_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.addInfoMarker_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.addInfoMarker_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.addInfoMarker_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.addInfoMarker = backend_com_wsdl_addInfoMarker_op;

function backend_com_wsdl_addInfoMarker_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_addInfoMarker();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:addInfoMarker', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.addInfoMarker_serializeInput = backend_com_wsdl_addInfoMarker_serializeInput;

function backend_com_wsdl_addInfoMarkerResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_addInfoMarkerResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_addSpellAction_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_addSpellActionResponse_deserializeResponse');
     responseObject = backend_com_wsdl_addSpellActionResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.addSpellAction_onsuccess = backend_com_wsdl_addSpellAction_op_onsuccess;

function backend_com_wsdl_addSpellAction_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.addSpellAction_onerror = backend_com_wsdl_addSpellAction_op_onerror;

//
// Operation {http://backend.com/wsdl}addSpellAction
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_spellAction
//
function backend_com_wsdl_addSpellAction_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.addSpellAction_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.addSpellAction_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.addSpellAction_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.addSpellAction = backend_com_wsdl_addSpellAction_op;

function backend_com_wsdl_addSpellAction_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_addSpellAction();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:addSpellAction', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.addSpellAction_serializeInput = backend_com_wsdl_addSpellAction_serializeInput;

function backend_com_wsdl_addSpellActionResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_addSpellActionResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_updateQuestInstance_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_updateQuestInstanceResponse_deserializeResponse');
     responseObject = backend_com_wsdl_updateQuestInstanceResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.updateQuestInstance_onsuccess = backend_com_wsdl_updateQuestInstance_op_onsuccess;

function backend_com_wsdl_updateQuestInstance_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.updateQuestInstance_onerror = backend_com_wsdl_updateQuestInstance_op_onerror;

//
// Operation {http://backend.com/wsdl}updateQuestInstance
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_questInstance
//
function backend_com_wsdl_updateQuestInstance_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.updateQuestInstance_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.updateQuestInstance_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.updateQuestInstance_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.updateQuestInstance = backend_com_wsdl_updateQuestInstance_op;

function backend_com_wsdl_updateQuestInstance_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_updateQuestInstance();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:updateQuestInstance', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.updateQuestInstance_serializeInput = backend_com_wsdl_updateQuestInstance_serializeInput;

function backend_com_wsdl_updateQuestInstanceResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_updateQuestInstanceResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_getAction_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_getActionResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getActionResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getAction_onsuccess = backend_com_wsdl_getAction_op_onsuccess;

function backend_com_wsdl_getAction_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.getAction_onerror = backend_com_wsdl_getAction_op_onerror;

//
// Operation {http://backend.com/wsdl}getAction
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_getAction_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.getAction_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getAction_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getAction_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getAction = backend_com_wsdl_getAction_op;

function backend_com_wsdl_getAction_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getAction();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getAction', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getAction_serializeInput = backend_com_wsdl_getAction_serializeInput;

function backend_com_wsdl_getActionResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getActionResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_getMonsterCard_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_getMonsterCardResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getMonsterCardResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getMonsterCard_onsuccess = backend_com_wsdl_getMonsterCard_op_onsuccess;

function backend_com_wsdl_getMonsterCard_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.getMonsterCard_onerror = backend_com_wsdl_getMonsterCard_op_onerror;

//
// Operation {http://backend.com/wsdl}getMonsterCard
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_getMonsterCard_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.getMonsterCard_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getMonsterCard_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getMonsterCard_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getMonsterCard = backend_com_wsdl_getMonsterCard_op;

function backend_com_wsdl_getMonsterCard_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getMonsterCard();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getMonsterCard', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getMonsterCard_serializeInput = backend_com_wsdl_getMonsterCard_serializeInput;

function backend_com_wsdl_getMonsterCardResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getMonsterCardResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_getMarkers_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_getMarkersResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getMarkersResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getMarkers_onsuccess = backend_com_wsdl_getMarkers_op_onsuccess;

function backend_com_wsdl_getMarkers_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.getMarkers_onerror = backend_com_wsdl_getMarkers_op_onerror;

//
// Operation {http://backend.com/wsdl}getMarkers
// Wrapped operation.
// parameter arg0
// - array
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_getMarkers_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.getMarkers_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getMarkers_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getMarkers_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getMarkers = backend_com_wsdl_getMarkers_op;

function backend_com_wsdl_getMarkers_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getMarkers();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getMarkers', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getMarkers_serializeInput = backend_com_wsdl_getMarkers_serializeInput;

function backend_com_wsdl_getMarkersResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getMarkersResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_getQuests_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_getQuestsResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getQuestsResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getQuests_onsuccess = backend_com_wsdl_getQuests_op_onsuccess;

function backend_com_wsdl_getQuests_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.getQuests_onerror = backend_com_wsdl_getQuests_op_onerror;

//
// Operation {http://backend.com/wsdl}getQuests
// Wrapped operation.
// parameter arg0
// - array
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_getQuests_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.getQuests_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getQuests_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getQuests_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getQuests = backend_com_wsdl_getQuests_op;

function backend_com_wsdl_getQuests_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getQuests();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getQuests', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getQuests_serializeInput = backend_com_wsdl_getQuests_serializeInput;

function backend_com_wsdl_getQuestsResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getQuestsResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_addHtml_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_addHtmlResponse_deserializeResponse');
     responseObject = backend_com_wsdl_addHtmlResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.addHtml_onsuccess = backend_com_wsdl_addHtml_op_onsuccess;

function backend_com_wsdl_addHtml_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.addHtml_onerror = backend_com_wsdl_addHtml_op_onerror;

//
// Operation {http://backend.com/wsdl}addHtml
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_htmlObject
//
function backend_com_wsdl_addHtml_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.addHtml_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.addHtml_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.addHtml_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.addHtml = backend_com_wsdl_addHtml_op;

function backend_com_wsdl_addHtml_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_addHtml();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:addHtml', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.addHtml_serializeInput = backend_com_wsdl_addHtml_serializeInput;

function backend_com_wsdl_addHtmlResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_addHtmlResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_deleteMonsterAction_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_deleteMonsterActionResponse_deserializeResponse');
     responseObject = backend_com_wsdl_deleteMonsterActionResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.deleteMonsterAction_onsuccess = backend_com_wsdl_deleteMonsterAction_op_onsuccess;

function backend_com_wsdl_deleteMonsterAction_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.deleteMonsterAction_onerror = backend_com_wsdl_deleteMonsterAction_op_onerror;

//
// Operation {http://backend.com/wsdl}deleteMonsterAction
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_deleteMonsterAction_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.deleteMonsterAction_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.deleteMonsterAction_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.deleteMonsterAction_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.deleteMonsterAction = backend_com_wsdl_deleteMonsterAction_op;

function backend_com_wsdl_deleteMonsterAction_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_deleteMonsterAction();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:deleteMonsterAction', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.deleteMonsterAction_serializeInput = backend_com_wsdl_deleteMonsterAction_serializeInput;

function backend_com_wsdl_deleteMonsterActionResponse_deserializeResponse(cxfjsutils, partElement) {
}
function backend_com_wsdl_updateQuizMarker_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_updateQuizMarkerResponse_deserializeResponse');
     responseObject = backend_com_wsdl_updateQuizMarkerResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.updateQuizMarker_onsuccess = backend_com_wsdl_updateQuizMarker_op_onsuccess;

function backend_com_wsdl_updateQuizMarker_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.updateQuizMarker_onerror = backend_com_wsdl_updateQuizMarker_op_onerror;

//
// Operation {http://backend.com/wsdl}updateQuizMarker
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_quizMarker
//
function backend_com_wsdl_updateQuizMarker_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.updateQuizMarker_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.updateQuizMarker_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.updateQuizMarker_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.updateQuizMarker = backend_com_wsdl_updateQuizMarker_op;

function backend_com_wsdl_updateQuizMarker_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_updateQuizMarker();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:updateQuizMarker', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.updateQuizMarker_serializeInput = backend_com_wsdl_updateQuizMarker_serializeInput;

function backend_com_wsdl_updateQuizMarkerResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_updateQuizMarkerResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_login_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_loginResponse_deserializeResponse');
     responseObject = backend_com_wsdl_loginResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.login_onsuccess = backend_com_wsdl_login_op_onsuccess;

function backend_com_wsdl_login_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.login_onerror = backend_com_wsdl_login_op_onerror;

//
// Operation {http://backend.com/wsdl}login
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}string// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}string//
function backend_com_wsdl_login_op(successCallback, errorCallback, arg0, arg1) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = arg0;
    args[1] = arg1;
    xml = this.login_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.login_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.login_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.login = backend_com_wsdl_login_op;

function backend_com_wsdl_login_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_login();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:login', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.login_serializeInput = backend_com_wsdl_login_serializeInput;

function backend_com_wsdl_loginResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_loginResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_getHtml_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_getHtmlResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getHtmlResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getHtml_onsuccess = backend_com_wsdl_getHtml_op_onsuccess;

function backend_com_wsdl_getHtml_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.getHtml_onerror = backend_com_wsdl_getHtml_op_onerror;

//
// Operation {http://backend.com/wsdl}getHtml
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_getHtml_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.getHtml_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getHtml_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getHtml_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getHtml = backend_com_wsdl_getHtml_op;

function backend_com_wsdl_getHtml_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getHtml();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getHtml', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getHtml_serializeInput = backend_com_wsdl_getHtml_serializeInput;

function backend_com_wsdl_getHtmlResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getHtmlResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_addQuizMarker_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_addQuizMarkerResponse_deserializeResponse');
     responseObject = backend_com_wsdl_addQuizMarkerResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.addQuizMarker_onsuccess = backend_com_wsdl_addQuizMarker_op_onsuccess;

function backend_com_wsdl_addQuizMarker_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.addQuizMarker_onerror = backend_com_wsdl_addQuizMarker_op_onerror;

//
// Operation {http://backend.com/wsdl}addQuizMarker
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_quizMarker
//
function backend_com_wsdl_addQuizMarker_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.addQuizMarker_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.addQuizMarker_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.addQuizMarker_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.addQuizMarker = backend_com_wsdl_addQuizMarker_op;

function backend_com_wsdl_addQuizMarker_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_addQuizMarker();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:addQuizMarker', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.addQuizMarker_serializeInput = backend_com_wsdl_addQuizMarker_serializeInput;

function backend_com_wsdl_addQuizMarkerResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_addQuizMarkerResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_addQuestInstance_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_addQuestInstanceResponse_deserializeResponse');
     responseObject = backend_com_wsdl_addQuestInstanceResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.addQuestInstance_onsuccess = backend_com_wsdl_addQuestInstance_op_onsuccess;

function backend_com_wsdl_addQuestInstance_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.addQuestInstance_onerror = backend_com_wsdl_addQuestInstance_op_onerror;

//
// Operation {http://backend.com/wsdl}addQuestInstance
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_questInstance
//
function backend_com_wsdl_addQuestInstance_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.addQuestInstance_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.addQuestInstance_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.addQuestInstance_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.addQuestInstance = backend_com_wsdl_addQuestInstance_op;

function backend_com_wsdl_addQuestInstance_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_addQuestInstance();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:addQuestInstance', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.addQuestInstance_serializeInput = backend_com_wsdl_addQuestInstance_serializeInput;

function backend_com_wsdl_addQuestInstanceResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_addQuestInstanceResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_getMonsterCards_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_getMonsterCardsResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getMonsterCardsResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getMonsterCards_onsuccess = backend_com_wsdl_getMonsterCards_op_onsuccess;

function backend_com_wsdl_getMonsterCards_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.getMonsterCards_onerror = backend_com_wsdl_getMonsterCards_op_onerror;

//
// Operation {http://backend.com/wsdl}getMonsterCards
// Wrapped operation.
// parameter arg0
// - array
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_getMonsterCards_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.getMonsterCards_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getMonsterCards_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getMonsterCards_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getMonsterCards = backend_com_wsdl_getMonsterCards_op;

function backend_com_wsdl_getMonsterCards_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getMonsterCards();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getMonsterCards', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getMonsterCards_serializeInput = backend_com_wsdl_getMonsterCards_serializeInput;

function backend_com_wsdl_getMonsterCardsResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getMonsterCardsResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_setTreePartFinished_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_setTreePartFinishedResponse_deserializeResponse');
     responseObject = backend_com_wsdl_setTreePartFinishedResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.setTreePartFinished_onsuccess = backend_com_wsdl_setTreePartFinished_op_onsuccess;

function backend_com_wsdl_setTreePartFinished_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.setTreePartFinished_onerror = backend_com_wsdl_setTreePartFinished_op_onerror;

//
// Operation {http://backend.com/wsdl}setTreePartFinished
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}boolean//
function backend_com_wsdl_setTreePartFinished_op(successCallback, errorCallback, arg0, arg1) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = arg0;
    args[1] = arg1;
    xml = this.setTreePartFinished_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.setTreePartFinished_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.setTreePartFinished_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.setTreePartFinished = backend_com_wsdl_setTreePartFinished_op;

function backend_com_wsdl_setTreePartFinished_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_setTreePartFinished();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:setTreePartFinished', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.setTreePartFinished_serializeInput = backend_com_wsdl_setTreePartFinished_serializeInput;

function backend_com_wsdl_setTreePartFinishedResponse_deserializeResponse(cxfjsutils, partElement) {
}
function backend_com_wsdl_updateInvisibleMarker_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_updateInvisibleMarkerResponse_deserializeResponse');
     responseObject = backend_com_wsdl_updateInvisibleMarkerResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.updateInvisibleMarker_onsuccess = backend_com_wsdl_updateInvisibleMarker_op_onsuccess;

function backend_com_wsdl_updateInvisibleMarker_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.updateInvisibleMarker_onerror = backend_com_wsdl_updateInvisibleMarker_op_onerror;

//
// Operation {http://backend.com/wsdl}updateInvisibleMarker
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_invisibleMarker
//
function backend_com_wsdl_updateInvisibleMarker_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.updateInvisibleMarker_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.updateInvisibleMarker_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.updateInvisibleMarker_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.updateInvisibleMarker = backend_com_wsdl_updateInvisibleMarker_op;

function backend_com_wsdl_updateInvisibleMarker_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_updateInvisibleMarker();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:updateInvisibleMarker', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.updateInvisibleMarker_serializeInput = backend_com_wsdl_updateInvisibleMarker_serializeInput;

function backend_com_wsdl_updateInvisibleMarkerResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_updateInvisibleMarkerResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_addInvisibleMarker_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_addInvisibleMarkerResponse_deserializeResponse');
     responseObject = backend_com_wsdl_addInvisibleMarkerResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.addInvisibleMarker_onsuccess = backend_com_wsdl_addInvisibleMarker_op_onsuccess;

function backend_com_wsdl_addInvisibleMarker_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.addInvisibleMarker_onerror = backend_com_wsdl_addInvisibleMarker_op_onerror;

//
// Operation {http://backend.com/wsdl}addInvisibleMarker
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_invisibleMarker
//
function backend_com_wsdl_addInvisibleMarker_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.addInvisibleMarker_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.addInvisibleMarker_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.addInvisibleMarker_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.addInvisibleMarker = backend_com_wsdl_addInvisibleMarker_op;

function backend_com_wsdl_addInvisibleMarker_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_addInvisibleMarker();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:addInvisibleMarker', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.addInvisibleMarker_serializeInput = backend_com_wsdl_addInvisibleMarker_serializeInput;

function backend_com_wsdl_addInvisibleMarkerResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_addInvisibleMarkerResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_getPlayer_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_getPlayerResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getPlayerResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getPlayer_onsuccess = backend_com_wsdl_getPlayer_op_onsuccess;

function backend_com_wsdl_getPlayer_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.getPlayer_onerror = backend_com_wsdl_getPlayer_op_onerror;

//
// Operation {http://backend.com/wsdl}getPlayer
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_getPlayer_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.getPlayer_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getPlayer_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getPlayer_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getPlayer = backend_com_wsdl_getPlayer_op;

function backend_com_wsdl_getPlayer_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getPlayer();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getPlayer', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getPlayer_serializeInput = backend_com_wsdl_getPlayer_serializeInput;

function backend_com_wsdl_getPlayerResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getPlayerResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_getSpellAction_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_getSpellActionResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getSpellActionResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getSpellAction_onsuccess = backend_com_wsdl_getSpellAction_op_onsuccess;

function backend_com_wsdl_getSpellAction_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.getSpellAction_onerror = backend_com_wsdl_getSpellAction_op_onerror;

//
// Operation {http://backend.com/wsdl}getSpellAction
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_getSpellAction_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.getSpellAction_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getSpellAction_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getSpellAction_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getSpellAction = backend_com_wsdl_getSpellAction_op;

function backend_com_wsdl_getSpellAction_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getSpellAction();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getSpellAction', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getSpellAction_serializeInput = backend_com_wsdl_getSpellAction_serializeInput;

function backend_com_wsdl_getSpellActionResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getSpellActionResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_getCompleteMarker_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_getCompleteMarkerResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getCompleteMarkerResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getCompleteMarker_onsuccess = backend_com_wsdl_getCompleteMarker_op_onsuccess;

function backend_com_wsdl_getCompleteMarker_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.getCompleteMarker_onerror = backend_com_wsdl_getCompleteMarker_op_onerror;

//
// Operation {http://backend.com/wsdl}getCompleteMarker
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_getCompleteMarker_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.getCompleteMarker_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getCompleteMarker_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getCompleteMarker_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getCompleteMarker = backend_com_wsdl_getCompleteMarker_op;

function backend_com_wsdl_getCompleteMarker_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getCompleteMarker();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getCompleteMarker', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getCompleteMarker_serializeInput = backend_com_wsdl_getCompleteMarker_serializeInput;

function backend_com_wsdl_getCompleteMarkerResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getCompleteMarkerResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_addFightMarker_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_addFightMarkerResponse_deserializeResponse');
     responseObject = backend_com_wsdl_addFightMarkerResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.addFightMarker_onsuccess = backend_com_wsdl_addFightMarker_op_onsuccess;

function backend_com_wsdl_addFightMarker_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.addFightMarker_onerror = backend_com_wsdl_addFightMarker_op_onerror;

//
// Operation {http://backend.com/wsdl}addFightMarker
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_fightMarker
//
function backend_com_wsdl_addFightMarker_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.addFightMarker_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.addFightMarker_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.addFightMarker_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.addFightMarker = backend_com_wsdl_addFightMarker_op;

function backend_com_wsdl_addFightMarker_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_addFightMarker();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:addFightMarker', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.addFightMarker_serializeInput = backend_com_wsdl_addFightMarker_serializeInput;

function backend_com_wsdl_addFightMarkerResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_addFightMarkerResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_getAllMonsterActions_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_getAllMonsterActionsResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getAllMonsterActionsResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getAllMonsterActions_onsuccess = backend_com_wsdl_getAllMonsterActions_op_onsuccess;

function backend_com_wsdl_getAllMonsterActions_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.getAllMonsterActions_onerror = backend_com_wsdl_getAllMonsterActions_op_onerror;

//
// Operation {http://backend.com/wsdl}getAllMonsterActions
// Wrapped operation.
//
function backend_com_wsdl_getAllMonsterActions_op(successCallback, errorCallback) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(0);
    xml = this.getAllMonsterActions_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getAllMonsterActions_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getAllMonsterActions_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getAllMonsterActions = backend_com_wsdl_getAllMonsterActions_op;

function backend_com_wsdl_getAllMonsterActions_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getAllMonsterActions();
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getAllMonsterActions', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getAllMonsterActions_serializeInput = backend_com_wsdl_getAllMonsterActions_serializeInput;

function backend_com_wsdl_getAllMonsterActionsResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getAllMonsterActionsResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_updateSpellCard_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_updateSpellCardResponse_deserializeResponse');
     responseObject = backend_com_wsdl_updateSpellCardResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.updateSpellCard_onsuccess = backend_com_wsdl_updateSpellCard_op_onsuccess;

function backend_com_wsdl_updateSpellCard_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.updateSpellCard_onerror = backend_com_wsdl_updateSpellCard_op_onerror;

//
// Operation {http://backend.com/wsdl}updateSpellCard
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_spellCard
//
function backend_com_wsdl_updateSpellCard_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.updateSpellCard_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.updateSpellCard_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.updateSpellCard_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.updateSpellCard = backend_com_wsdl_updateSpellCard_op;

function backend_com_wsdl_updateSpellCard_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_updateSpellCard();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:updateSpellCard', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.updateSpellCard_serializeInput = backend_com_wsdl_updateSpellCard_serializeInput;

function backend_com_wsdl_updateSpellCardResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_updateSpellCardResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_addUser_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_addUserResponse_deserializeResponse');
     responseObject = backend_com_wsdl_addUserResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.addUser_onsuccess = backend_com_wsdl_addUser_op_onsuccess;

function backend_com_wsdl_addUser_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.addUser_onerror = backend_com_wsdl_addUser_op_onerror;

//
// Operation {http://backend.com/wsdl}addUser
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_user
//
function backend_com_wsdl_addUser_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.addUser_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.addUser_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.addUser_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.addUser = backend_com_wsdl_addUser_op;

function backend_com_wsdl_addUser_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_addUser();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:addUser', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.addUser_serializeInput = backend_com_wsdl_addUser_serializeInput;

function backend_com_wsdl_addUserResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_addUserResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_getMonsterAction_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_getMonsterActionResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getMonsterActionResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getMonsterAction_onsuccess = backend_com_wsdl_getMonsterAction_op_onsuccess;

function backend_com_wsdl_getMonsterAction_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.getMonsterAction_onerror = backend_com_wsdl_getMonsterAction_op_onerror;

//
// Operation {http://backend.com/wsdl}getMonsterAction
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_getMonsterAction_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.getMonsterAction_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getMonsterAction_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getMonsterAction_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getMonsterAction = backend_com_wsdl_getMonsterAction_op;

function backend_com_wsdl_getMonsterAction_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getMonsterAction();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getMonsterAction', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getMonsterAction_serializeInput = backend_com_wsdl_getMonsterAction_serializeInput;

function backend_com_wsdl_getMonsterActionResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getMonsterActionResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_IBackend_backend_com_wsdl_BackendPort () {
  this.url = 'http://192.168.178.67:8080/Backend/webservices/Backend';
}
backend_com_wsdl_IBackend_backend_com_wsdl_BackendPort.prototype = new backend_com_wsdl_IBackend;
