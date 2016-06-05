//
// Definitions for schema: http://backend.com/wsdl
//  http://192.168.178.67:8080/Backend/webservices/Backend?wsdl#types1
//
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
// Constructor for XML Schema item {http://backend.com/wsdl}getEditorQuestResponse
//
function backend_com_wsdl_getEditorQuestResponse () {
    this.typeMarker = 'backend_com_wsdl_getEditorQuestResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_getEditorQuestResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}editorQuest
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_getEditorQuestResponse.prototype.setReturn
//
function backend_com_wsdl_getEditorQuestResponse_getReturn() { return this._return;}

backend_com_wsdl_getEditorQuestResponse.prototype.getReturn = backend_com_wsdl_getEditorQuestResponse_getReturn;

function backend_com_wsdl_getEditorQuestResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getEditorQuestResponse.prototype.setReturn = backend_com_wsdl_getEditorQuestResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getEditorQuestResponse
//
function backend_com_wsdl_getEditorQuestResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getEditorQuestResponse.prototype.serialize = backend_com_wsdl_getEditorQuestResponse_serialize;

function backend_com_wsdl_getEditorQuestResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getEditorQuestResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_editorQuest_deserialize(cxfjsutils, curElement);
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
// Simple type (enumeration) {http://backend.com/wsdl}treePartType
//
// - Marker
// - And
// - Or
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
// Constructor for XML Schema item {http://backend.com/wsdl}deleteCardResponse
//
function backend_com_wsdl_deleteCardResponse () {
    this.typeMarker = 'backend_com_wsdl_deleteCardResponse';
}

//
// Serialize {http://backend.com/wsdl}deleteCardResponse
//
function backend_com_wsdl_deleteCardResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_deleteCardResponse.prototype.serialize = backend_com_wsdl_deleteCardResponse_serialize;

function backend_com_wsdl_deleteCardResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_deleteCardResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}stringToStringEntry
//
function backend_com_wsdl_stringToStringEntry () {
    this.typeMarker = 'backend_com_wsdl_stringToStringEntry';
    this._key = null;
    this._value = null;
}

//
// accessor is backend_com_wsdl_stringToStringEntry.prototype.getKey
// element get for key
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for key
// setter function is is backend_com_wsdl_stringToStringEntry.prototype.setKey
//
function backend_com_wsdl_stringToStringEntry_getKey() { return this._key;}

backend_com_wsdl_stringToStringEntry.prototype.getKey = backend_com_wsdl_stringToStringEntry_getKey;

function backend_com_wsdl_stringToStringEntry_setKey(value) { this._key = value;}

backend_com_wsdl_stringToStringEntry.prototype.setKey = backend_com_wsdl_stringToStringEntry_setKey;
//
// accessor is backend_com_wsdl_stringToStringEntry.prototype.getValue
// element get for value
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for value
// setter function is is backend_com_wsdl_stringToStringEntry.prototype.setValue
//
function backend_com_wsdl_stringToStringEntry_getValue() { return this._value;}

backend_com_wsdl_stringToStringEntry.prototype.getValue = backend_com_wsdl_stringToStringEntry_getValue;

function backend_com_wsdl_stringToStringEntry_setValue(value) { this._value = value;}

backend_com_wsdl_stringToStringEntry.prototype.setValue = backend_com_wsdl_stringToStringEntry_setValue;
//
// Serialize {http://backend.com/wsdl}stringToStringEntry
//
function backend_com_wsdl_stringToStringEntry_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._key != null) {
      xml = xml + '<key>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._key);
      xml = xml + '</key>';
     }
    }
    // block for local variables
    {
     if (this._value != null) {
      xml = xml + '<value>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._value);
      xml = xml + '</value>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_stringToStringEntry.prototype.serialize = backend_com_wsdl_stringToStringEntry_serialize;

function backend_com_wsdl_stringToStringEntry_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_stringToStringEntry();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing key');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'key')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setKey(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing value');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'value')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setValue(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}updateEditorQuest
//
function backend_com_wsdl_updateEditorQuest () {
    this.typeMarker = 'backend_com_wsdl_updateEditorQuest';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_updateEditorQuest.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}editorQuest
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_updateEditorQuest.prototype.setArg0
//
function backend_com_wsdl_updateEditorQuest_getArg0() { return this._arg0;}

backend_com_wsdl_updateEditorQuest.prototype.getArg0 = backend_com_wsdl_updateEditorQuest_getArg0;

function backend_com_wsdl_updateEditorQuest_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_updateEditorQuest.prototype.setArg0 = backend_com_wsdl_updateEditorQuest_setArg0;
//
// Serialize {http://backend.com/wsdl}updateEditorQuest
//
function backend_com_wsdl_updateEditorQuest_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updateEditorQuest.prototype.serialize = backend_com_wsdl_updateEditorQuest_serialize;

function backend_com_wsdl_updateEditorQuest_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateEditorQuest();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_editorQuest_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}addActionResponse
//
function backend_com_wsdl_addActionResponse () {
    this.typeMarker = 'backend_com_wsdl_addActionResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_addActionResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}action
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_addActionResponse.prototype.setReturn
//
function backend_com_wsdl_addActionResponse_getReturn() { return this._return;}

backend_com_wsdl_addActionResponse.prototype.getReturn = backend_com_wsdl_addActionResponse_getReturn;

function backend_com_wsdl_addActionResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_addActionResponse.prototype.setReturn = backend_com_wsdl_addActionResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}addActionResponse
//
function backend_com_wsdl_addActionResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_addActionResponse.prototype.serialize = backend_com_wsdl_addActionResponse_serialize;

function backend_com_wsdl_addActionResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addActionResponse();
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
// Constructor for XML Schema item {http://backend.com/wsdl}getEditorQuests
//
function backend_com_wsdl_getEditorQuests () {
    this.typeMarker = 'backend_com_wsdl_getEditorQuests';
    this._arg0 = [];
}

//
// accessor is backend_com_wsdl_getEditorQuests.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
// - array
//
// element set for arg0
// setter function is is backend_com_wsdl_getEditorQuests.prototype.setArg0
//
function backend_com_wsdl_getEditorQuests_getArg0() { return this._arg0;}

backend_com_wsdl_getEditorQuests.prototype.getArg0 = backend_com_wsdl_getEditorQuests_getArg0;

function backend_com_wsdl_getEditorQuests_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_getEditorQuests.prototype.setArg0 = backend_com_wsdl_getEditorQuests_setArg0;
//
// Serialize {http://backend.com/wsdl}getEditorQuests
//
function backend_com_wsdl_getEditorQuests_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getEditorQuests.prototype.serialize = backend_com_wsdl_getEditorQuests_serialize;

function backend_com_wsdl_getEditorQuests_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getEditorQuests();
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
// Constructor for XML Schema item {http://backend.com/wsdl}deleteAction
//
function backend_com_wsdl_deleteAction () {
    this.typeMarker = 'backend_com_wsdl_deleteAction';
    this._arg0 = 0;
}

//
// accessor is backend_com_wsdl_deleteAction.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_deleteAction.prototype.setArg0
//
function backend_com_wsdl_deleteAction_getArg0() { return this._arg0;}

backend_com_wsdl_deleteAction.prototype.getArg0 = backend_com_wsdl_deleteAction_getArg0;

function backend_com_wsdl_deleteAction_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_deleteAction.prototype.setArg0 = backend_com_wsdl_deleteAction_setArg0;
//
// Serialize {http://backend.com/wsdl}deleteAction
//
function backend_com_wsdl_deleteAction_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_deleteAction.prototype.serialize = backend_com_wsdl_deleteAction_serialize;

function backend_com_wsdl_deleteAction_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_deleteAction();
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
// Constructor for XML Schema item {http://backend.com/wsdl}editorQuest
//
function backend_com_wsdl_editorQuest () {
    this.typeMarker = 'backend_com_wsdl_editorQuest';
    this._approved = '';
    this._createrId = 0;
    this._htmlId = 0;
    this._id = 0;
    this._markers = [];
    this._name = null;
    this._shortDescription = null;
    this._startMarkerId = 0;
    this._submitted = '';
    this._treeRootId = 0;
    this._version = null;
}

//
// accessor is backend_com_wsdl_editorQuest.prototype.getApproved
// element get for approved
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for approved
// setter function is is backend_com_wsdl_editorQuest.prototype.setApproved
//
function backend_com_wsdl_editorQuest_getApproved() { return this._approved;}

backend_com_wsdl_editorQuest.prototype.getApproved = backend_com_wsdl_editorQuest_getApproved;

function backend_com_wsdl_editorQuest_setApproved(value) { this._approved = value;}

backend_com_wsdl_editorQuest.prototype.setApproved = backend_com_wsdl_editorQuest_setApproved;
//
// accessor is backend_com_wsdl_editorQuest.prototype.getCreaterId
// element get for createrId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for createrId
// setter function is is backend_com_wsdl_editorQuest.prototype.setCreaterId
//
function backend_com_wsdl_editorQuest_getCreaterId() { return this._createrId;}

backend_com_wsdl_editorQuest.prototype.getCreaterId = backend_com_wsdl_editorQuest_getCreaterId;

function backend_com_wsdl_editorQuest_setCreaterId(value) { this._createrId = value;}

backend_com_wsdl_editorQuest.prototype.setCreaterId = backend_com_wsdl_editorQuest_setCreaterId;
//
// accessor is backend_com_wsdl_editorQuest.prototype.getHtmlId
// element get for htmlId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for htmlId
// setter function is is backend_com_wsdl_editorQuest.prototype.setHtmlId
//
function backend_com_wsdl_editorQuest_getHtmlId() { return this._htmlId;}

backend_com_wsdl_editorQuest.prototype.getHtmlId = backend_com_wsdl_editorQuest_getHtmlId;

function backend_com_wsdl_editorQuest_setHtmlId(value) { this._htmlId = value;}

backend_com_wsdl_editorQuest.prototype.setHtmlId = backend_com_wsdl_editorQuest_setHtmlId;
//
// accessor is backend_com_wsdl_editorQuest.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for id
// setter function is is backend_com_wsdl_editorQuest.prototype.setId
//
function backend_com_wsdl_editorQuest_getId() { return this._id;}

backend_com_wsdl_editorQuest.prototype.getId = backend_com_wsdl_editorQuest_getId;

function backend_com_wsdl_editorQuest_setId(value) { this._id = value;}

backend_com_wsdl_editorQuest.prototype.setId = backend_com_wsdl_editorQuest_setId;
//
// accessor is backend_com_wsdl_editorQuest.prototype.getMarkers
// element get for markers
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
// - array
// - nillable
//
// element set for markers
// setter function is is backend_com_wsdl_editorQuest.prototype.setMarkers
//
function backend_com_wsdl_editorQuest_getMarkers() { return this._markers;}

backend_com_wsdl_editorQuest.prototype.getMarkers = backend_com_wsdl_editorQuest_getMarkers;

function backend_com_wsdl_editorQuest_setMarkers(value) { this._markers = value;}

backend_com_wsdl_editorQuest.prototype.setMarkers = backend_com_wsdl_editorQuest_setMarkers;
//
// accessor is backend_com_wsdl_editorQuest.prototype.getName
// element get for name
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for name
// setter function is is backend_com_wsdl_editorQuest.prototype.setName
//
function backend_com_wsdl_editorQuest_getName() { return this._name;}

backend_com_wsdl_editorQuest.prototype.getName = backend_com_wsdl_editorQuest_getName;

function backend_com_wsdl_editorQuest_setName(value) { this._name = value;}

backend_com_wsdl_editorQuest.prototype.setName = backend_com_wsdl_editorQuest_setName;
//
// accessor is backend_com_wsdl_editorQuest.prototype.getShortDescription
// element get for shortDescription
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for shortDescription
// setter function is is backend_com_wsdl_editorQuest.prototype.setShortDescription
//
function backend_com_wsdl_editorQuest_getShortDescription() { return this._shortDescription;}

backend_com_wsdl_editorQuest.prototype.getShortDescription = backend_com_wsdl_editorQuest_getShortDescription;

function backend_com_wsdl_editorQuest_setShortDescription(value) { this._shortDescription = value;}

backend_com_wsdl_editorQuest.prototype.setShortDescription = backend_com_wsdl_editorQuest_setShortDescription;
//
// accessor is backend_com_wsdl_editorQuest.prototype.getStartMarkerId
// element get for startMarkerId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for startMarkerId
// setter function is is backend_com_wsdl_editorQuest.prototype.setStartMarkerId
//
function backend_com_wsdl_editorQuest_getStartMarkerId() { return this._startMarkerId;}

backend_com_wsdl_editorQuest.prototype.getStartMarkerId = backend_com_wsdl_editorQuest_getStartMarkerId;

function backend_com_wsdl_editorQuest_setStartMarkerId(value) { this._startMarkerId = value;}

backend_com_wsdl_editorQuest.prototype.setStartMarkerId = backend_com_wsdl_editorQuest_setStartMarkerId;
//
// accessor is backend_com_wsdl_editorQuest.prototype.getSubmitted
// element get for submitted
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for submitted
// setter function is is backend_com_wsdl_editorQuest.prototype.setSubmitted
//
function backend_com_wsdl_editorQuest_getSubmitted() { return this._submitted;}

backend_com_wsdl_editorQuest.prototype.getSubmitted = backend_com_wsdl_editorQuest_getSubmitted;

function backend_com_wsdl_editorQuest_setSubmitted(value) { this._submitted = value;}

backend_com_wsdl_editorQuest.prototype.setSubmitted = backend_com_wsdl_editorQuest_setSubmitted;
//
// accessor is backend_com_wsdl_editorQuest.prototype.getTreeRootId
// element get for treeRootId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for treeRootId
// setter function is is backend_com_wsdl_editorQuest.prototype.setTreeRootId
//
function backend_com_wsdl_editorQuest_getTreeRootId() { return this._treeRootId;}

backend_com_wsdl_editorQuest.prototype.getTreeRootId = backend_com_wsdl_editorQuest_getTreeRootId;

function backend_com_wsdl_editorQuest_setTreeRootId(value) { this._treeRootId = value;}

backend_com_wsdl_editorQuest.prototype.setTreeRootId = backend_com_wsdl_editorQuest_setTreeRootId;
//
// accessor is backend_com_wsdl_editorQuest.prototype.getVersion
// element get for version
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for version
// setter function is is backend_com_wsdl_editorQuest.prototype.setVersion
//
function backend_com_wsdl_editorQuest_getVersion() { return this._version;}

backend_com_wsdl_editorQuest.prototype.getVersion = backend_com_wsdl_editorQuest_getVersion;

function backend_com_wsdl_editorQuest_setVersion(value) { this._version = value;}

backend_com_wsdl_editorQuest.prototype.setVersion = backend_com_wsdl_editorQuest_setVersion;
//
// Serialize {http://backend.com/wsdl}editorQuest
//
function backend_com_wsdl_editorQuest_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<startMarkerId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._startMarkerId);
     xml = xml + '</startMarkerId>';
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

backend_com_wsdl_editorQuest.prototype.serialize = backend_com_wsdl_editorQuest_serialize;

function backend_com_wsdl_editorQuest_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_editorQuest();
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
    cxfjsutils.trace('processing startMarkerId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setStartMarkerId(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}longToIntEntry
//
function backend_com_wsdl_longToIntEntry () {
    this.typeMarker = 'backend_com_wsdl_longToIntEntry';
    this._key = 0;
    this._value = 0;
}

//
// accessor is backend_com_wsdl_longToIntEntry.prototype.getKey
// element get for key
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for key
// setter function is is backend_com_wsdl_longToIntEntry.prototype.setKey
//
function backend_com_wsdl_longToIntEntry_getKey() { return this._key;}

backend_com_wsdl_longToIntEntry.prototype.getKey = backend_com_wsdl_longToIntEntry_getKey;

function backend_com_wsdl_longToIntEntry_setKey(value) { this._key = value;}

backend_com_wsdl_longToIntEntry.prototype.setKey = backend_com_wsdl_longToIntEntry_setKey;
//
// accessor is backend_com_wsdl_longToIntEntry.prototype.getValue
// element get for value
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - required element
//
// element set for value
// setter function is is backend_com_wsdl_longToIntEntry.prototype.setValue
//
function backend_com_wsdl_longToIntEntry_getValue() { return this._value;}

backend_com_wsdl_longToIntEntry.prototype.getValue = backend_com_wsdl_longToIntEntry_getValue;

function backend_com_wsdl_longToIntEntry_setValue(value) { this._value = value;}

backend_com_wsdl_longToIntEntry.prototype.setValue = backend_com_wsdl_longToIntEntry_setValue;
//
// Serialize {http://backend.com/wsdl}longToIntEntry
//
function backend_com_wsdl_longToIntEntry_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     xml = xml + '<key>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._key);
     xml = xml + '</key>';
    }
    // block for local variables
    {
     xml = xml + '<value>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._value);
     xml = xml + '</value>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_longToIntEntry.prototype.serialize = backend_com_wsdl_longToIntEntry_serialize;

function backend_com_wsdl_longToIntEntry_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_longToIntEntry();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing key');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setKey(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing value');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setValue(item);
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
    this._cardIds = [];
    this._id = 0;
    this._name = null;
}

//
// accessor is backend_com_wsdl_deck.prototype.getCardIds
// element get for cardIds
// - element type is {http://backend.com/wsdl}longToIntEntry
// - required element
// - array
// - nillable
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
     if (this._cardIds != null) {
      for (var ax = 0;ax < this._cardIds.length;ax ++) {
       if (this._cardIds[ax] == null) {
        xml = xml + '<cardIds xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._cardIds[ax].serialize(cxfjsutils, 'cardIds', null);
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
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'cardIds')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = backend_com_wsdl_longToIntEntry_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'cardIds'));
     newobject.setCardIds(item);
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
// Constructor for XML Schema item {http://backend.com/wsdl}updateUserWonFightsCountResponse
//
function backend_com_wsdl_updateUserWonFightsCountResponse () {
    this.typeMarker = 'backend_com_wsdl_updateUserWonFightsCountResponse';
}

//
// Serialize {http://backend.com/wsdl}updateUserWonFightsCountResponse
//
function backend_com_wsdl_updateUserWonFightsCountResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updateUserWonFightsCountResponse.prototype.serialize = backend_com_wsdl_updateUserWonFightsCountResponse_serialize;

function backend_com_wsdl_updateUserWonFightsCountResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateUserWonFightsCountResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}setQuestInstanceOfTreePartResponse
//
function backend_com_wsdl_setQuestInstanceOfTreePartResponse () {
    this.typeMarker = 'backend_com_wsdl_setQuestInstanceOfTreePartResponse';
}

//
// Serialize {http://backend.com/wsdl}setQuestInstanceOfTreePartResponse
//
function backend_com_wsdl_setQuestInstanceOfTreePartResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_setQuestInstanceOfTreePartResponse.prototype.serialize = backend_com_wsdl_setQuestInstanceOfTreePartResponse_serialize;

function backend_com_wsdl_setQuestInstanceOfTreePartResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_setQuestInstanceOfTreePartResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}updateUserTaskCount
//
function backend_com_wsdl_updateUserTaskCount () {
    this.typeMarker = 'backend_com_wsdl_updateUserTaskCount';
    this._arg0 = 0;
    this._arg1 = 0;
}

//
// accessor is backend_com_wsdl_updateUserTaskCount.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_updateUserTaskCount.prototype.setArg0
//
function backend_com_wsdl_updateUserTaskCount_getArg0() { return this._arg0;}

backend_com_wsdl_updateUserTaskCount.prototype.getArg0 = backend_com_wsdl_updateUserTaskCount_getArg0;

function backend_com_wsdl_updateUserTaskCount_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_updateUserTaskCount.prototype.setArg0 = backend_com_wsdl_updateUserTaskCount_setArg0;
//
// accessor is backend_com_wsdl_updateUserTaskCount.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg1
// setter function is is backend_com_wsdl_updateUserTaskCount.prototype.setArg1
//
function backend_com_wsdl_updateUserTaskCount_getArg1() { return this._arg1;}

backend_com_wsdl_updateUserTaskCount.prototype.getArg1 = backend_com_wsdl_updateUserTaskCount_getArg1;

function backend_com_wsdl_updateUserTaskCount_setArg1(value) { this._arg1 = value;}

backend_com_wsdl_updateUserTaskCount.prototype.setArg1 = backend_com_wsdl_updateUserTaskCount_setArg1;
//
// Serialize {http://backend.com/wsdl}updateUserTaskCount
//
function backend_com_wsdl_updateUserTaskCount_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updateUserTaskCount.prototype.serialize = backend_com_wsdl_updateUserTaskCount_serialize;

function backend_com_wsdl_updateUserTaskCount_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateUserTaskCount();
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
// Simple type (enumeration) {http://backend.com/wsdl}actionType
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
// - CONFUSE
// - TAUNT
//
// Constructor for XML Schema item {http://backend.com/wsdl}addOrUpdateTreePartResponse
//
function backend_com_wsdl_addOrUpdateTreePartResponse () {
    this.typeMarker = 'backend_com_wsdl_addOrUpdateTreePartResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_addOrUpdateTreePartResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}treePart
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_addOrUpdateTreePartResponse.prototype.setReturn
//
function backend_com_wsdl_addOrUpdateTreePartResponse_getReturn() { return this._return;}

backend_com_wsdl_addOrUpdateTreePartResponse.prototype.getReturn = backend_com_wsdl_addOrUpdateTreePartResponse_getReturn;

function backend_com_wsdl_addOrUpdateTreePartResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_addOrUpdateTreePartResponse.prototype.setReturn = backend_com_wsdl_addOrUpdateTreePartResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}addOrUpdateTreePartResponse
//
function backend_com_wsdl_addOrUpdateTreePartResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_addOrUpdateTreePartResponse.prototype.serialize = backend_com_wsdl_addOrUpdateTreePartResponse_serialize;

function backend_com_wsdl_addOrUpdateTreePartResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addOrUpdateTreePartResponse();
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
// Constructor for XML Schema item {http://backend.com/wsdl}updateEditorQuestResponse
//
function backend_com_wsdl_updateEditorQuestResponse () {
    this.typeMarker = 'backend_com_wsdl_updateEditorQuestResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_updateEditorQuestResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}editorQuest
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_updateEditorQuestResponse.prototype.setReturn
//
function backend_com_wsdl_updateEditorQuestResponse_getReturn() { return this._return;}

backend_com_wsdl_updateEditorQuestResponse.prototype.getReturn = backend_com_wsdl_updateEditorQuestResponse_getReturn;

function backend_com_wsdl_updateEditorQuestResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_updateEditorQuestResponse.prototype.setReturn = backend_com_wsdl_updateEditorQuestResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}updateEditorQuestResponse
//
function backend_com_wsdl_updateEditorQuestResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updateEditorQuestResponse.prototype.serialize = backend_com_wsdl_updateEditorQuestResponse_serialize;

function backend_com_wsdl_updateEditorQuestResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateEditorQuestResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_editorQuest_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}addCardResponse
//
function backend_com_wsdl_addCardResponse () {
    this.typeMarker = 'backend_com_wsdl_addCardResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_addCardResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}card
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_addCardResponse.prototype.setReturn
//
function backend_com_wsdl_addCardResponse_getReturn() { return this._return;}

backend_com_wsdl_addCardResponse.prototype.getReturn = backend_com_wsdl_addCardResponse_getReturn;

function backend_com_wsdl_addCardResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_addCardResponse.prototype.setReturn = backend_com_wsdl_addCardResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}addCardResponse
//
function backend_com_wsdl_addCardResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_addCardResponse.prototype.serialize = backend_com_wsdl_addCardResponse_serialize;

function backend_com_wsdl_addCardResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addCardResponse();
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
// Constructor for XML Schema item {http://backend.com/wsdl}deleteActionResponse
//
function backend_com_wsdl_deleteActionResponse () {
    this.typeMarker = 'backend_com_wsdl_deleteActionResponse';
}

//
// Serialize {http://backend.com/wsdl}deleteActionResponse
//
function backend_com_wsdl_deleteActionResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_deleteActionResponse.prototype.serialize = backend_com_wsdl_deleteActionResponse_serialize;

function backend_com_wsdl_deleteActionResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_deleteActionResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}updateCard
//
function backend_com_wsdl_updateCard () {
    this.typeMarker = 'backend_com_wsdl_updateCard';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_updateCard.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}card
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_updateCard.prototype.setArg0
//
function backend_com_wsdl_updateCard_getArg0() { return this._arg0;}

backend_com_wsdl_updateCard.prototype.getArg0 = backend_com_wsdl_updateCard_getArg0;

function backend_com_wsdl_updateCard_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_updateCard.prototype.setArg0 = backend_com_wsdl_updateCard_setArg0;
//
// Serialize {http://backend.com/wsdl}updateCard
//
function backend_com_wsdl_updateCard_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updateCard.prototype.serialize = backend_com_wsdl_updateCard_serialize;

function backend_com_wsdl_updateCard_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateCard();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_card_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}updateUserAnsweredQuestionsCountResponse
//
function backend_com_wsdl_updateUserAnsweredQuestionsCountResponse () {
    this.typeMarker = 'backend_com_wsdl_updateUserAnsweredQuestionsCountResponse';
}

//
// Serialize {http://backend.com/wsdl}updateUserAnsweredQuestionsCountResponse
//
function backend_com_wsdl_updateUserAnsweredQuestionsCountResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updateUserAnsweredQuestionsCountResponse.prototype.serialize = backend_com_wsdl_updateUserAnsweredQuestionsCountResponse_serialize;

function backend_com_wsdl_updateUserAnsweredQuestionsCountResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateUserAnsweredQuestionsCountResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}updateUserTaskCountResponse
//
function backend_com_wsdl_updateUserTaskCountResponse () {
    this.typeMarker = 'backend_com_wsdl_updateUserTaskCountResponse';
}

//
// Serialize {http://backend.com/wsdl}updateUserTaskCountResponse
//
function backend_com_wsdl_updateUserTaskCountResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updateUserTaskCountResponse.prototype.serialize = backend_com_wsdl_updateUserTaskCountResponse_serialize;

function backend_com_wsdl_updateUserTaskCountResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateUserTaskCountResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}updateUserKmWalked
//
function backend_com_wsdl_updateUserKmWalked () {
    this.typeMarker = 'backend_com_wsdl_updateUserKmWalked';
    this._arg0 = 0;
    this._arg1 = 0.0;
}

//
// accessor is backend_com_wsdl_updateUserKmWalked.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_updateUserKmWalked.prototype.setArg0
//
function backend_com_wsdl_updateUserKmWalked_getArg0() { return this._arg0;}

backend_com_wsdl_updateUserKmWalked.prototype.getArg0 = backend_com_wsdl_updateUserKmWalked_getArg0;

function backend_com_wsdl_updateUserKmWalked_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_updateUserKmWalked.prototype.setArg0 = backend_com_wsdl_updateUserKmWalked_setArg0;
//
// accessor is backend_com_wsdl_updateUserKmWalked.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}double
// - required element
//
// element set for arg1
// setter function is is backend_com_wsdl_updateUserKmWalked.prototype.setArg1
//
function backend_com_wsdl_updateUserKmWalked_getArg1() { return this._arg1;}

backend_com_wsdl_updateUserKmWalked.prototype.getArg1 = backend_com_wsdl_updateUserKmWalked_getArg1;

function backend_com_wsdl_updateUserKmWalked_setArg1(value) { this._arg1 = value;}

backend_com_wsdl_updateUserKmWalked.prototype.setArg1 = backend_com_wsdl_updateUserKmWalked_setArg1;
//
// Serialize {http://backend.com/wsdl}updateUserKmWalked
//
function backend_com_wsdl_updateUserKmWalked_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updateUserKmWalked.prototype.serialize = backend_com_wsdl_updateUserKmWalked_serialize;

function backend_com_wsdl_updateUserKmWalked_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateUserKmWalked();
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
     item = parseFloat(value);
    }
    newobject.setArg1(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://backend.com/wsdl}updateHtml
//
function backend_com_wsdl_updateHtml () {
    this.typeMarker = 'backend_com_wsdl_updateHtml';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_updateHtml.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}htmlObject
// - optional element
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

backend_com_wsdl_updateHtml.prototype.serialize = backend_com_wsdl_updateHtml_serialize;

function backend_com_wsdl_updateHtml_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateHtml();
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
// Constructor for XML Schema item {http://backend.com/wsdl}addCard
//
function backend_com_wsdl_addCard () {
    this.typeMarker = 'backend_com_wsdl_addCard';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_addCard.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}card
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_addCard.prototype.setArg0
//
function backend_com_wsdl_addCard_getArg0() { return this._arg0;}

backend_com_wsdl_addCard.prototype.getArg0 = backend_com_wsdl_addCard_getArg0;

function backend_com_wsdl_addCard_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_addCard.prototype.setArg0 = backend_com_wsdl_addCard_setArg0;
//
// Serialize {http://backend.com/wsdl}addCard
//
function backend_com_wsdl_addCard_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_addCard.prototype.serialize = backend_com_wsdl_addCard_serialize;

function backend_com_wsdl_addCard_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addCard();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_card_deserialize(cxfjsutils, curElement);
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
    this._answers = [];
    this._html = null;
    this._id = 0;
}

//
// accessor is backend_com_wsdl_htmlObject.prototype.getAnswers
// element get for answers
// - element type is {http://backend.com/wsdl}stringToBoolEntry
// - required element
// - array
// - nillable
//
// element set for answers
// setter function is is backend_com_wsdl_htmlObject.prototype.setAnswers
//
function backend_com_wsdl_htmlObject_getAnswers() { return this._answers;}

backend_com_wsdl_htmlObject.prototype.getAnswers = backend_com_wsdl_htmlObject_getAnswers;

function backend_com_wsdl_htmlObject_setAnswers(value) { this._answers = value;}

backend_com_wsdl_htmlObject.prototype.setAnswers = backend_com_wsdl_htmlObject_setAnswers;
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
     if (this._answers != null) {
      for (var ax = 0;ax < this._answers.length;ax ++) {
       if (this._answers[ax] == null) {
        xml = xml + '<answers xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._answers[ax].serialize(cxfjsutils, 'answers', null);
       }
      }
     }
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
    cxfjsutils.trace('processing answers');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'answers')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = backend_com_wsdl_stringToBoolEntry_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'answers'));
     newobject.setAnswers(item);
     var item = null;
    }
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
// Constructor for XML Schema item {http://backend.com/wsdl}updateAction
//
function backend_com_wsdl_updateAction () {
    this.typeMarker = 'backend_com_wsdl_updateAction';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_updateAction.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}action
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_updateAction.prototype.setArg0
//
function backend_com_wsdl_updateAction_getArg0() { return this._arg0;}

backend_com_wsdl_updateAction.prototype.getArg0 = backend_com_wsdl_updateAction_getArg0;

function backend_com_wsdl_updateAction_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_updateAction.prototype.setArg0 = backend_com_wsdl_updateAction_setArg0;
//
// Serialize {http://backend.com/wsdl}updateAction
//
function backend_com_wsdl_updateAction_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updateAction.prototype.serialize = backend_com_wsdl_updateAction_serialize;

function backend_com_wsdl_updateAction_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateAction();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_action_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}updateUserWonFightsCount
//
function backend_com_wsdl_updateUserWonFightsCount () {
    this.typeMarker = 'backend_com_wsdl_updateUserWonFightsCount';
    this._arg0 = 0;
    this._arg1 = 0;
}

//
// accessor is backend_com_wsdl_updateUserWonFightsCount.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_updateUserWonFightsCount.prototype.setArg0
//
function backend_com_wsdl_updateUserWonFightsCount_getArg0() { return this._arg0;}

backend_com_wsdl_updateUserWonFightsCount.prototype.getArg0 = backend_com_wsdl_updateUserWonFightsCount_getArg0;

function backend_com_wsdl_updateUserWonFightsCount_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_updateUserWonFightsCount.prototype.setArg0 = backend_com_wsdl_updateUserWonFightsCount_setArg0;
//
// accessor is backend_com_wsdl_updateUserWonFightsCount.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg1
// setter function is is backend_com_wsdl_updateUserWonFightsCount.prototype.setArg1
//
function backend_com_wsdl_updateUserWonFightsCount_getArg1() { return this._arg1;}

backend_com_wsdl_updateUserWonFightsCount.prototype.getArg1 = backend_com_wsdl_updateUserWonFightsCount_getArg1;

function backend_com_wsdl_updateUserWonFightsCount_setArg1(value) { this._arg1 = value;}

backend_com_wsdl_updateUserWonFightsCount.prototype.setArg1 = backend_com_wsdl_updateUserWonFightsCount_setArg1;
//
// Serialize {http://backend.com/wsdl}updateUserWonFightsCount
//
function backend_com_wsdl_updateUserWonFightsCount_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updateUserWonFightsCount.prototype.serialize = backend_com_wsdl_updateUserWonFightsCount_serialize;

function backend_com_wsdl_updateUserWonFightsCount_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateUserWonFightsCount();
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
// Simple type (enumeration) {http://backend.com/wsdl}markerType
//
// - INFO
// - INVISIBLE
// - QUIZ
// - FIGHT
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
// Constructor for XML Schema item {http://backend.com/wsdl}updateUserFoundLocationsCountResponse
//
function backend_com_wsdl_updateUserFoundLocationsCountResponse () {
    this.typeMarker = 'backend_com_wsdl_updateUserFoundLocationsCountResponse';
}

//
// Serialize {http://backend.com/wsdl}updateUserFoundLocationsCountResponse
//
function backend_com_wsdl_updateUserFoundLocationsCountResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updateUserFoundLocationsCountResponse.prototype.serialize = backend_com_wsdl_updateUserFoundLocationsCountResponse_serialize;

function backend_com_wsdl_updateUserFoundLocationsCountResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateUserFoundLocationsCountResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
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
// Constructor for XML Schema item {http://backend.com/wsdl}addEditorQuest
//
function backend_com_wsdl_addEditorQuest () {
    this.typeMarker = 'backend_com_wsdl_addEditorQuest';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_addEditorQuest.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}editorQuest
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_addEditorQuest.prototype.setArg0
//
function backend_com_wsdl_addEditorQuest_getArg0() { return this._arg0;}

backend_com_wsdl_addEditorQuest.prototype.getArg0 = backend_com_wsdl_addEditorQuest_getArg0;

function backend_com_wsdl_addEditorQuest_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_addEditorQuest.prototype.setArg0 = backend_com_wsdl_addEditorQuest_setArg0;
//
// Serialize {http://backend.com/wsdl}addEditorQuest
//
function backend_com_wsdl_addEditorQuest_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_addEditorQuest.prototype.serialize = backend_com_wsdl_addEditorQuest_serialize;

function backend_com_wsdl_addEditorQuest_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addEditorQuest();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_editorQuest_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}setTreePartOpened
//
function backend_com_wsdl_setTreePartOpened () {
    this.typeMarker = 'backend_com_wsdl_setTreePartOpened';
    this._arg0 = 0;
    this._arg1 = '';
}

//
// accessor is backend_com_wsdl_setTreePartOpened.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_setTreePartOpened.prototype.setArg0
//
function backend_com_wsdl_setTreePartOpened_getArg0() { return this._arg0;}

backend_com_wsdl_setTreePartOpened.prototype.getArg0 = backend_com_wsdl_setTreePartOpened_getArg0;

function backend_com_wsdl_setTreePartOpened_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_setTreePartOpened.prototype.setArg0 = backend_com_wsdl_setTreePartOpened_setArg0;
//
// accessor is backend_com_wsdl_setTreePartOpened.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for arg1
// setter function is is backend_com_wsdl_setTreePartOpened.prototype.setArg1
//
function backend_com_wsdl_setTreePartOpened_getArg1() { return this._arg1;}

backend_com_wsdl_setTreePartOpened.prototype.getArg1 = backend_com_wsdl_setTreePartOpened_getArg1;

function backend_com_wsdl_setTreePartOpened_setArg1(value) { this._arg1 = value;}

backend_com_wsdl_setTreePartOpened.prototype.setArg1 = backend_com_wsdl_setTreePartOpened_setArg1;
//
// Serialize {http://backend.com/wsdl}setTreePartOpened
//
function backend_com_wsdl_setTreePartOpened_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_setTreePartOpened.prototype.serialize = backend_com_wsdl_setTreePartOpened_serialize;

function backend_com_wsdl_setTreePartOpened_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_setTreePartOpened();
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
// Constructor for XML Schema item {http://backend.com/wsdl}setTreePartOpenedResponse
//
function backend_com_wsdl_setTreePartOpenedResponse () {
    this.typeMarker = 'backend_com_wsdl_setTreePartOpenedResponse';
}

//
// Serialize {http://backend.com/wsdl}setTreePartOpenedResponse
//
function backend_com_wsdl_setTreePartOpenedResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_setTreePartOpenedResponse.prototype.serialize = backend_com_wsdl_setTreePartOpenedResponse_serialize;

function backend_com_wsdl_setTreePartOpenedResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_setTreePartOpenedResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
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
// Constructor for XML Schema item {http://backend.com/wsdl}setQuestInstanceOfTreePart
//
function backend_com_wsdl_setQuestInstanceOfTreePart () {
    this.typeMarker = 'backend_com_wsdl_setQuestInstanceOfTreePart';
    this._arg0 = 0;
    this._arg1 = 0;
}

//
// accessor is backend_com_wsdl_setQuestInstanceOfTreePart.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_setQuestInstanceOfTreePart.prototype.setArg0
//
function backend_com_wsdl_setQuestInstanceOfTreePart_getArg0() { return this._arg0;}

backend_com_wsdl_setQuestInstanceOfTreePart.prototype.getArg0 = backend_com_wsdl_setQuestInstanceOfTreePart_getArg0;

function backend_com_wsdl_setQuestInstanceOfTreePart_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_setQuestInstanceOfTreePart.prototype.setArg0 = backend_com_wsdl_setQuestInstanceOfTreePart_setArg0;
//
// accessor is backend_com_wsdl_setQuestInstanceOfTreePart.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg1
// setter function is is backend_com_wsdl_setQuestInstanceOfTreePart.prototype.setArg1
//
function backend_com_wsdl_setQuestInstanceOfTreePart_getArg1() { return this._arg1;}

backend_com_wsdl_setQuestInstanceOfTreePart.prototype.getArg1 = backend_com_wsdl_setQuestInstanceOfTreePart_getArg1;

function backend_com_wsdl_setQuestInstanceOfTreePart_setArg1(value) { this._arg1 = value;}

backend_com_wsdl_setQuestInstanceOfTreePart.prototype.setArg1 = backend_com_wsdl_setQuestInstanceOfTreePart_setArg1;
//
// Serialize {http://backend.com/wsdl}setQuestInstanceOfTreePart
//
function backend_com_wsdl_setQuestInstanceOfTreePart_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_setQuestInstanceOfTreePart.prototype.serialize = backend_com_wsdl_setQuestInstanceOfTreePart_serialize;

function backend_com_wsdl_setQuestInstanceOfTreePart_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_setQuestInstanceOfTreePart();
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
// Constructor for XML Schema item {http://backend.com/wsdl}getEditorQuestsResponse
//
function backend_com_wsdl_getEditorQuestsResponse () {
    this.typeMarker = 'backend_com_wsdl_getEditorQuestsResponse';
    this._return = [];
}

//
// accessor is backend_com_wsdl_getEditorQuestsResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}editorQuest
// - required element
// - array
//
// element set for return
// setter function is is backend_com_wsdl_getEditorQuestsResponse.prototype.setReturn
//
function backend_com_wsdl_getEditorQuestsResponse_getReturn() { return this._return;}

backend_com_wsdl_getEditorQuestsResponse.prototype.getReturn = backend_com_wsdl_getEditorQuestsResponse_getReturn;

function backend_com_wsdl_getEditorQuestsResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getEditorQuestsResponse.prototype.setReturn = backend_com_wsdl_getEditorQuestsResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getEditorQuestsResponse
//
function backend_com_wsdl_getEditorQuestsResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getEditorQuestsResponse.prototype.serialize = backend_com_wsdl_getEditorQuestsResponse_serialize;

function backend_com_wsdl_getEditorQuestsResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getEditorQuestsResponse();
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
       arrayItem = backend_com_wsdl_editorQuest_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}getEditorQuest
//
function backend_com_wsdl_getEditorQuest () {
    this.typeMarker = 'backend_com_wsdl_getEditorQuest';
    this._arg0 = 0;
}

//
// accessor is backend_com_wsdl_getEditorQuest.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_getEditorQuest.prototype.setArg0
//
function backend_com_wsdl_getEditorQuest_getArg0() { return this._arg0;}

backend_com_wsdl_getEditorQuest.prototype.getArg0 = backend_com_wsdl_getEditorQuest_getArg0;

function backend_com_wsdl_getEditorQuest_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_getEditorQuest.prototype.setArg0 = backend_com_wsdl_getEditorQuest_setArg0;
//
// Serialize {http://backend.com/wsdl}getEditorQuest
//
function backend_com_wsdl_getEditorQuest_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getEditorQuest.prototype.serialize = backend_com_wsdl_getEditorQuest_serialize;

function backend_com_wsdl_getEditorQuest_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getEditorQuest();
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
// Constructor for XML Schema item {http://backend.com/wsdl}addEditorQuestResponse
//
function backend_com_wsdl_addEditorQuestResponse () {
    this.typeMarker = 'backend_com_wsdl_addEditorQuestResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_addEditorQuestResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}editorQuest
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_addEditorQuestResponse.prototype.setReturn
//
function backend_com_wsdl_addEditorQuestResponse_getReturn() { return this._return;}

backend_com_wsdl_addEditorQuestResponse.prototype.getReturn = backend_com_wsdl_addEditorQuestResponse_getReturn;

function backend_com_wsdl_addEditorQuestResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_addEditorQuestResponse.prototype.setReturn = backend_com_wsdl_addEditorQuestResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}addEditorQuestResponse
//
function backend_com_wsdl_addEditorQuestResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_addEditorQuestResponse.prototype.serialize = backend_com_wsdl_addEditorQuestResponse_serialize;

function backend_com_wsdl_addEditorQuestResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addEditorQuestResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_editorQuest_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}addOrUpdateMarker
//
function backend_com_wsdl_addOrUpdateMarker () {
    this.typeMarker = 'backend_com_wsdl_addOrUpdateMarker';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_addOrUpdateMarker.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}marker
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_addOrUpdateMarker.prototype.setArg0
//
function backend_com_wsdl_addOrUpdateMarker_getArg0() { return this._arg0;}

backend_com_wsdl_addOrUpdateMarker.prototype.getArg0 = backend_com_wsdl_addOrUpdateMarker_getArg0;

function backend_com_wsdl_addOrUpdateMarker_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_addOrUpdateMarker.prototype.setArg0 = backend_com_wsdl_addOrUpdateMarker_setArg0;
//
// Serialize {http://backend.com/wsdl}addOrUpdateMarker
//
function backend_com_wsdl_addOrUpdateMarker_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_addOrUpdateMarker.prototype.serialize = backend_com_wsdl_addOrUpdateMarker_serialize;

function backend_com_wsdl_addOrUpdateMarker_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addOrUpdateMarker();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_marker_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}addAction
//
function backend_com_wsdl_addAction () {
    this.typeMarker = 'backend_com_wsdl_addAction';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_addAction.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}action
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_addAction.prototype.setArg0
//
function backend_com_wsdl_addAction_getArg0() { return this._arg0;}

backend_com_wsdl_addAction.prototype.getArg0 = backend_com_wsdl_addAction_getArg0;

function backend_com_wsdl_addAction_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_addAction.prototype.setArg0 = backend_com_wsdl_addAction_setArg0;
//
// Serialize {http://backend.com/wsdl}addAction
//
function backend_com_wsdl_addAction_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_addAction.prototype.serialize = backend_com_wsdl_addAction_serialize;

function backend_com_wsdl_addAction_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addAction();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_action_deserialize(cxfjsutils, curElement);
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
    this._activeQuestIds = [];
    this._answeredQuestionsCount = 0;
    this._cardIds = [];
    this._createdQuestIds = [];
    this._deckIds = [];
    this._foundLocationsCount = 0;
    this._id = 0;
    this._kmWalked = 0.0;
    this._name = null;
    this._password = null;
    this._solvedQuestIds = [];
    this._taskCount = 0;
    this._wonFightsCount = 0;
}

//
// accessor is backend_com_wsdl_user.prototype.getActiveQuestIds
// element get for activeQuestIds
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
// - array
// - nillable
//
// element set for activeQuestIds
// setter function is is backend_com_wsdl_user.prototype.setActiveQuestIds
//
function backend_com_wsdl_user_getActiveQuestIds() { return this._activeQuestIds;}

backend_com_wsdl_user.prototype.getActiveQuestIds = backend_com_wsdl_user_getActiveQuestIds;

function backend_com_wsdl_user_setActiveQuestIds(value) { this._activeQuestIds = value;}

backend_com_wsdl_user.prototype.setActiveQuestIds = backend_com_wsdl_user_setActiveQuestIds;
//
// accessor is backend_com_wsdl_user.prototype.getAnsweredQuestionsCount
// element get for answeredQuestionsCount
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for answeredQuestionsCount
// setter function is is backend_com_wsdl_user.prototype.setAnsweredQuestionsCount
//
function backend_com_wsdl_user_getAnsweredQuestionsCount() { return this._answeredQuestionsCount;}

backend_com_wsdl_user.prototype.getAnsweredQuestionsCount = backend_com_wsdl_user_getAnsweredQuestionsCount;

function backend_com_wsdl_user_setAnsweredQuestionsCount(value) { this._answeredQuestionsCount = value;}

backend_com_wsdl_user.prototype.setAnsweredQuestionsCount = backend_com_wsdl_user_setAnsweredQuestionsCount;
//
// accessor is backend_com_wsdl_user.prototype.getCardIds
// element get for cardIds
// - element type is {http://backend.com/wsdl}longToIntEntry
// - required element
// - array
// - nillable
//
// element set for cardIds
// setter function is is backend_com_wsdl_user.prototype.setCardIds
//
function backend_com_wsdl_user_getCardIds() { return this._cardIds;}

backend_com_wsdl_user.prototype.getCardIds = backend_com_wsdl_user_getCardIds;

function backend_com_wsdl_user_setCardIds(value) { this._cardIds = value;}

backend_com_wsdl_user.prototype.setCardIds = backend_com_wsdl_user_setCardIds;
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
// accessor is backend_com_wsdl_user.prototype.getDeckIds
// element get for deckIds
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
// - array
// - nillable
//
// element set for deckIds
// setter function is is backend_com_wsdl_user.prototype.setDeckIds
//
function backend_com_wsdl_user_getDeckIds() { return this._deckIds;}

backend_com_wsdl_user.prototype.getDeckIds = backend_com_wsdl_user_getDeckIds;

function backend_com_wsdl_user_setDeckIds(value) { this._deckIds = value;}

backend_com_wsdl_user.prototype.setDeckIds = backend_com_wsdl_user_setDeckIds;
//
// accessor is backend_com_wsdl_user.prototype.getFoundLocationsCount
// element get for foundLocationsCount
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for foundLocationsCount
// setter function is is backend_com_wsdl_user.prototype.setFoundLocationsCount
//
function backend_com_wsdl_user_getFoundLocationsCount() { return this._foundLocationsCount;}

backend_com_wsdl_user.prototype.getFoundLocationsCount = backend_com_wsdl_user_getFoundLocationsCount;

function backend_com_wsdl_user_setFoundLocationsCount(value) { this._foundLocationsCount = value;}

backend_com_wsdl_user.prototype.setFoundLocationsCount = backend_com_wsdl_user_setFoundLocationsCount;
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
// accessor is backend_com_wsdl_user.prototype.getKmWalked
// element get for kmWalked
// - element type is {http://www.w3.org/2001/XMLSchema}double
// - required element
//
// element set for kmWalked
// setter function is is backend_com_wsdl_user.prototype.setKmWalked
//
function backend_com_wsdl_user_getKmWalked() { return this._kmWalked;}

backend_com_wsdl_user.prototype.getKmWalked = backend_com_wsdl_user_getKmWalked;

function backend_com_wsdl_user_setKmWalked(value) { this._kmWalked = value;}

backend_com_wsdl_user.prototype.setKmWalked = backend_com_wsdl_user_setKmWalked;
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
// accessor is backend_com_wsdl_user.prototype.getSolvedQuestIds
// element get for solvedQuestIds
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
// - array
// - nillable
//
// element set for solvedQuestIds
// setter function is is backend_com_wsdl_user.prototype.setSolvedQuestIds
//
function backend_com_wsdl_user_getSolvedQuestIds() { return this._solvedQuestIds;}

backend_com_wsdl_user.prototype.getSolvedQuestIds = backend_com_wsdl_user_getSolvedQuestIds;

function backend_com_wsdl_user_setSolvedQuestIds(value) { this._solvedQuestIds = value;}

backend_com_wsdl_user.prototype.setSolvedQuestIds = backend_com_wsdl_user_setSolvedQuestIds;
//
// accessor is backend_com_wsdl_user.prototype.getTaskCount
// element get for taskCount
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for taskCount
// setter function is is backend_com_wsdl_user.prototype.setTaskCount
//
function backend_com_wsdl_user_getTaskCount() { return this._taskCount;}

backend_com_wsdl_user.prototype.getTaskCount = backend_com_wsdl_user_getTaskCount;

function backend_com_wsdl_user_setTaskCount(value) { this._taskCount = value;}

backend_com_wsdl_user.prototype.setTaskCount = backend_com_wsdl_user_setTaskCount;
//
// accessor is backend_com_wsdl_user.prototype.getWonFightsCount
// element get for wonFightsCount
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for wonFightsCount
// setter function is is backend_com_wsdl_user.prototype.setWonFightsCount
//
function backend_com_wsdl_user_getWonFightsCount() { return this._wonFightsCount;}

backend_com_wsdl_user.prototype.getWonFightsCount = backend_com_wsdl_user_getWonFightsCount;

function backend_com_wsdl_user_setWonFightsCount(value) { this._wonFightsCount = value;}

backend_com_wsdl_user.prototype.setWonFightsCount = backend_com_wsdl_user_setWonFightsCount;
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
     xml = xml + '<answeredQuestionsCount>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._answeredQuestionsCount);
     xml = xml + '</answeredQuestionsCount>';
    }
    // block for local variables
    {
     if (this._cardIds != null) {
      for (var ax = 0;ax < this._cardIds.length;ax ++) {
       if (this._cardIds[ax] == null) {
        xml = xml + '<cardIds xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._cardIds[ax].serialize(cxfjsutils, 'cardIds', null);
       }
      }
     }
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
     xml = xml + '<foundLocationsCount>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._foundLocationsCount);
     xml = xml + '</foundLocationsCount>';
    }
    // block for local variables
    {
     xml = xml + '<id>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._id);
     xml = xml + '</id>';
    }
    // block for local variables
    {
     xml = xml + '<kmWalked>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._kmWalked);
     xml = xml + '</kmWalked>';
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
     xml = xml + '<taskCount>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._taskCount);
     xml = xml + '</taskCount>';
    }
    // block for local variables
    {
     xml = xml + '<wonFightsCount>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._wonFightsCount);
     xml = xml + '</wonFightsCount>';
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
    cxfjsutils.trace('processing answeredQuestionsCount');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setAnsweredQuestionsCount(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing cardIds');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'cardIds')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = backend_com_wsdl_longToIntEntry_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'cardIds'));
     newobject.setCardIds(item);
     var item = null;
    }
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
    cxfjsutils.trace('processing foundLocationsCount');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setFoundLocationsCount(item);
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
    cxfjsutils.trace('processing kmWalked');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseFloat(value);
    }
    newobject.setKmWalked(item);
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
    cxfjsutils.trace('processing taskCount');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setTaskCount(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing wonFightsCount');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setWonFightsCount(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}deleteCard
//
function backend_com_wsdl_deleteCard () {
    this.typeMarker = 'backend_com_wsdl_deleteCard';
    this._arg0 = 0;
}

//
// accessor is backend_com_wsdl_deleteCard.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_deleteCard.prototype.setArg0
//
function backend_com_wsdl_deleteCard_getArg0() { return this._arg0;}

backend_com_wsdl_deleteCard.prototype.getArg0 = backend_com_wsdl_deleteCard_getArg0;

function backend_com_wsdl_deleteCard_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_deleteCard.prototype.setArg0 = backend_com_wsdl_deleteCard_setArg0;
//
// Serialize {http://backend.com/wsdl}deleteCard
//
function backend_com_wsdl_deleteCard_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_deleteCard.prototype.serialize = backend_com_wsdl_deleteCard_serialize;

function backend_com_wsdl_deleteCard_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_deleteCard();
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
// Constructor for XML Schema item {http://backend.com/wsdl}updateUserAnsweredQuestionsCount
//
function backend_com_wsdl_updateUserAnsweredQuestionsCount () {
    this.typeMarker = 'backend_com_wsdl_updateUserAnsweredQuestionsCount';
    this._arg0 = 0;
    this._arg1 = 0;
}

//
// accessor is backend_com_wsdl_updateUserAnsweredQuestionsCount.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_updateUserAnsweredQuestionsCount.prototype.setArg0
//
function backend_com_wsdl_updateUserAnsweredQuestionsCount_getArg0() { return this._arg0;}

backend_com_wsdl_updateUserAnsweredQuestionsCount.prototype.getArg0 = backend_com_wsdl_updateUserAnsweredQuestionsCount_getArg0;

function backend_com_wsdl_updateUserAnsweredQuestionsCount_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_updateUserAnsweredQuestionsCount.prototype.setArg0 = backend_com_wsdl_updateUserAnsweredQuestionsCount_setArg0;
//
// accessor is backend_com_wsdl_updateUserAnsweredQuestionsCount.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg1
// setter function is is backend_com_wsdl_updateUserAnsweredQuestionsCount.prototype.setArg1
//
function backend_com_wsdl_updateUserAnsweredQuestionsCount_getArg1() { return this._arg1;}

backend_com_wsdl_updateUserAnsweredQuestionsCount.prototype.getArg1 = backend_com_wsdl_updateUserAnsweredQuestionsCount_getArg1;

function backend_com_wsdl_updateUserAnsweredQuestionsCount_setArg1(value) { this._arg1 = value;}

backend_com_wsdl_updateUserAnsweredQuestionsCount.prototype.setArg1 = backend_com_wsdl_updateUserAnsweredQuestionsCount_setArg1;
//
// Serialize {http://backend.com/wsdl}updateUserAnsweredQuestionsCount
//
function backend_com_wsdl_updateUserAnsweredQuestionsCount_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updateUserAnsweredQuestionsCount.prototype.serialize = backend_com_wsdl_updateUserAnsweredQuestionsCount_serialize;

function backend_com_wsdl_updateUserAnsweredQuestionsCount_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateUserAnsweredQuestionsCount();
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
// Constructor for XML Schema item {http://backend.com/wsdl}getAllActionsOfCardTypeResponse
//
function backend_com_wsdl_getAllActionsOfCardTypeResponse () {
    this.typeMarker = 'backend_com_wsdl_getAllActionsOfCardTypeResponse';
    this._return = [];
}

//
// accessor is backend_com_wsdl_getAllActionsOfCardTypeResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}action
// - required element
// - array
//
// element set for return
// setter function is is backend_com_wsdl_getAllActionsOfCardTypeResponse.prototype.setReturn
//
function backend_com_wsdl_getAllActionsOfCardTypeResponse_getReturn() { return this._return;}

backend_com_wsdl_getAllActionsOfCardTypeResponse.prototype.getReturn = backend_com_wsdl_getAllActionsOfCardTypeResponse_getReturn;

function backend_com_wsdl_getAllActionsOfCardTypeResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_getAllActionsOfCardTypeResponse.prototype.setReturn = backend_com_wsdl_getAllActionsOfCardTypeResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}getAllActionsOfCardTypeResponse
//
function backend_com_wsdl_getAllActionsOfCardTypeResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_getAllActionsOfCardTypeResponse.prototype.serialize = backend_com_wsdl_getAllActionsOfCardTypeResponse_serialize;

function backend_com_wsdl_getAllActionsOfCardTypeResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getAllActionsOfCardTypeResponse();
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
// Constructor for XML Schema item {http://backend.com/wsdl}updateActionResponse
//
function backend_com_wsdl_updateActionResponse () {
    this.typeMarker = 'backend_com_wsdl_updateActionResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_updateActionResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}action
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_updateActionResponse.prototype.setReturn
//
function backend_com_wsdl_updateActionResponse_getReturn() { return this._return;}

backend_com_wsdl_updateActionResponse.prototype.getReturn = backend_com_wsdl_updateActionResponse_getReturn;

function backend_com_wsdl_updateActionResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_updateActionResponse.prototype.setReturn = backend_com_wsdl_updateActionResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}updateActionResponse
//
function backend_com_wsdl_updateActionResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updateActionResponse.prototype.serialize = backend_com_wsdl_updateActionResponse_serialize;

function backend_com_wsdl_updateActionResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateActionResponse();
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
// Constructor for XML Schema item {http://backend.com/wsdl}updateUserKmWalkedResponse
//
function backend_com_wsdl_updateUserKmWalkedResponse () {
    this.typeMarker = 'backend_com_wsdl_updateUserKmWalkedResponse';
}

//
// Serialize {http://backend.com/wsdl}updateUserKmWalkedResponse
//
function backend_com_wsdl_updateUserKmWalkedResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updateUserKmWalkedResponse.prototype.serialize = backend_com_wsdl_updateUserKmWalkedResponse_serialize;

function backend_com_wsdl_updateUserKmWalkedResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateUserKmWalkedResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Simple type (enumeration) {http://backend.com/wsdl}cardType
//
// - MONSTER
// - SPELL
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
// Constructor for XML Schema item {http://backend.com/wsdl}addOrUpdateTreePart
//
function backend_com_wsdl_addOrUpdateTreePart () {
    this.typeMarker = 'backend_com_wsdl_addOrUpdateTreePart';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_addOrUpdateTreePart.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}treePart
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_addOrUpdateTreePart.prototype.setArg0
//
function backend_com_wsdl_addOrUpdateTreePart_getArg0() { return this._arg0;}

backend_com_wsdl_addOrUpdateTreePart.prototype.getArg0 = backend_com_wsdl_addOrUpdateTreePart_getArg0;

function backend_com_wsdl_addOrUpdateTreePart_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_addOrUpdateTreePart.prototype.setArg0 = backend_com_wsdl_addOrUpdateTreePart_setArg0;
//
// Serialize {http://backend.com/wsdl}addOrUpdateTreePart
//
function backend_com_wsdl_addOrUpdateTreePart_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_addOrUpdateTreePart.prototype.serialize = backend_com_wsdl_addOrUpdateTreePart_serialize;

function backend_com_wsdl_addOrUpdateTreePart_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addOrUpdateTreePart();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = backend_com_wsdl_treePart_deserialize(cxfjsutils, curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}marker
//
function backend_com_wsdl_marker () {
    this.typeMarker = 'backend_com_wsdl_marker';
    this._finishedHtmlId = 0;
    this._htmlId = 0;
    this._id = 0;
    this._name = null;
    this._position = null;
    this._targetPosition = null;
    this._type = null;
    this._version = null;
}

//
// accessor is backend_com_wsdl_marker.prototype.getFinishedHtmlId
// element get for finishedHtmlId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for finishedHtmlId
// setter function is is backend_com_wsdl_marker.prototype.setFinishedHtmlId
//
function backend_com_wsdl_marker_getFinishedHtmlId() { return this._finishedHtmlId;}

backend_com_wsdl_marker.prototype.getFinishedHtmlId = backend_com_wsdl_marker_getFinishedHtmlId;

function backend_com_wsdl_marker_setFinishedHtmlId(value) { this._finishedHtmlId = value;}

backend_com_wsdl_marker.prototype.setFinishedHtmlId = backend_com_wsdl_marker_setFinishedHtmlId;
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
// accessor is backend_com_wsdl_marker.prototype.getTargetPosition
// element get for targetPosition
// - element type is {http://backend.com/wsdl}mapPosition
// - optional element
//
// element set for targetPosition
// setter function is is backend_com_wsdl_marker.prototype.setTargetPosition
//
function backend_com_wsdl_marker_getTargetPosition() { return this._targetPosition;}

backend_com_wsdl_marker.prototype.getTargetPosition = backend_com_wsdl_marker_getTargetPosition;

function backend_com_wsdl_marker_setTargetPosition(value) { this._targetPosition = value;}

backend_com_wsdl_marker.prototype.setTargetPosition = backend_com_wsdl_marker_setTargetPosition;
//
// accessor is backend_com_wsdl_marker.prototype.getType
// element get for type
// - element type is {http://backend.com/wsdl}markerType
// - optional element
//
// element set for type
// setter function is is backend_com_wsdl_marker.prototype.setType
//
function backend_com_wsdl_marker_getType() { return this._type;}

backend_com_wsdl_marker.prototype.getType = backend_com_wsdl_marker_getType;

function backend_com_wsdl_marker_setType(value) { this._type = value;}

backend_com_wsdl_marker.prototype.setType = backend_com_wsdl_marker_setType;
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
     xml = xml + '<finishedHtmlId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._finishedHtmlId);
     xml = xml + '</finishedHtmlId>';
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

backend_com_wsdl_marker.prototype.serialize = backend_com_wsdl_marker_serialize;

function backend_com_wsdl_marker_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_marker();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing finishedHtmlId');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = parseInt(value);
    }
    newobject.setFinishedHtmlId(item);
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
// Constructor for XML Schema item {http://backend.com/wsdl}updateUserFoundLocationsCount
//
function backend_com_wsdl_updateUserFoundLocationsCount () {
    this.typeMarker = 'backend_com_wsdl_updateUserFoundLocationsCount';
    this._arg0 = 0;
    this._arg1 = 0;
}

//
// accessor is backend_com_wsdl_updateUserFoundLocationsCount.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg0
// setter function is is backend_com_wsdl_updateUserFoundLocationsCount.prototype.setArg0
//
function backend_com_wsdl_updateUserFoundLocationsCount_getArg0() { return this._arg0;}

backend_com_wsdl_updateUserFoundLocationsCount.prototype.getArg0 = backend_com_wsdl_updateUserFoundLocationsCount_getArg0;

function backend_com_wsdl_updateUserFoundLocationsCount_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_updateUserFoundLocationsCount.prototype.setArg0 = backend_com_wsdl_updateUserFoundLocationsCount_setArg0;
//
// accessor is backend_com_wsdl_updateUserFoundLocationsCount.prototype.getArg1
// element get for arg1
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for arg1
// setter function is is backend_com_wsdl_updateUserFoundLocationsCount.prototype.setArg1
//
function backend_com_wsdl_updateUserFoundLocationsCount_getArg1() { return this._arg1;}

backend_com_wsdl_updateUserFoundLocationsCount.prototype.getArg1 = backend_com_wsdl_updateUserFoundLocationsCount_getArg1;

function backend_com_wsdl_updateUserFoundLocationsCount_setArg1(value) { this._arg1 = value;}

backend_com_wsdl_updateUserFoundLocationsCount.prototype.setArg1 = backend_com_wsdl_updateUserFoundLocationsCount_setArg1;
//
// Serialize {http://backend.com/wsdl}updateUserFoundLocationsCount
//
function backend_com_wsdl_updateUserFoundLocationsCount_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updateUserFoundLocationsCount.prototype.serialize = backend_com_wsdl_updateUserFoundLocationsCount_serialize;

function backend_com_wsdl_updateUserFoundLocationsCount_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateUserFoundLocationsCount();
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
// Constructor for XML Schema item {http://backend.com/wsdl}getAllActionsOfCardType
//
function backend_com_wsdl_getAllActionsOfCardType () {
    this.typeMarker = 'backend_com_wsdl_getAllActionsOfCardType';
    this._arg0 = null;
}

//
// accessor is backend_com_wsdl_getAllActionsOfCardType.prototype.getArg0
// element get for arg0
// - element type is {http://backend.com/wsdl}cardType
// - optional element
//
// element set for arg0
// setter function is is backend_com_wsdl_getAllActionsOfCardType.prototype.setArg0
//
function backend_com_wsdl_getAllActionsOfCardType_getArg0() { return this._arg0;}

backend_com_wsdl_getAllActionsOfCardType.prototype.getArg0 = backend_com_wsdl_getAllActionsOfCardType_getArg0;

function backend_com_wsdl_getAllActionsOfCardType_setArg0(value) { this._arg0 = value;}

backend_com_wsdl_getAllActionsOfCardType.prototype.setArg0 = backend_com_wsdl_getAllActionsOfCardType_setArg0;
//
// Serialize {http://backend.com/wsdl}getAllActionsOfCardType
//
function backend_com_wsdl_getAllActionsOfCardType_serialize(cxfjsutils, elementName, extraNamespaces) {
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
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_getAllActionsOfCardType.prototype.serialize = backend_com_wsdl_getAllActionsOfCardType_serialize;

function backend_com_wsdl_getAllActionsOfCardType_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_getAllActionsOfCardType();
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
// Constructor for XML Schema item {http://backend.com/wsdl}stringToBoolEntry
//
function backend_com_wsdl_stringToBoolEntry () {
    this.typeMarker = 'backend_com_wsdl_stringToBoolEntry';
    this._key = null;
    this._value = '';
}

//
// accessor is backend_com_wsdl_stringToBoolEntry.prototype.getKey
// element get for key
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for key
// setter function is is backend_com_wsdl_stringToBoolEntry.prototype.setKey
//
function backend_com_wsdl_stringToBoolEntry_getKey() { return this._key;}

backend_com_wsdl_stringToBoolEntry.prototype.getKey = backend_com_wsdl_stringToBoolEntry_getKey;

function backend_com_wsdl_stringToBoolEntry_setKey(value) { this._key = value;}

backend_com_wsdl_stringToBoolEntry.prototype.setKey = backend_com_wsdl_stringToBoolEntry_setKey;
//
// accessor is backend_com_wsdl_stringToBoolEntry.prototype.getValue
// element get for value
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for value
// setter function is is backend_com_wsdl_stringToBoolEntry.prototype.setValue
//
function backend_com_wsdl_stringToBoolEntry_getValue() { return this._value;}

backend_com_wsdl_stringToBoolEntry.prototype.getValue = backend_com_wsdl_stringToBoolEntry_getValue;

function backend_com_wsdl_stringToBoolEntry_setValue(value) { this._value = value;}

backend_com_wsdl_stringToBoolEntry.prototype.setValue = backend_com_wsdl_stringToBoolEntry_setValue;
//
// Serialize {http://backend.com/wsdl}stringToBoolEntry
//
function backend_com_wsdl_stringToBoolEntry_serialize(cxfjsutils, elementName, extraNamespaces) {
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
     if (this._key != null) {
      xml = xml + '<key>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._key);
      xml = xml + '</key>';
     }
    }
    // block for local variables
    {
     xml = xml + '<value>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._value);
     xml = xml + '</value>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

backend_com_wsdl_stringToBoolEntry.prototype.serialize = backend_com_wsdl_stringToBoolEntry_serialize;

function backend_com_wsdl_stringToBoolEntry_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_stringToBoolEntry();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing key');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'key')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setKey(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing value');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setValue(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
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
// Constructor for XML Schema item {http://backend.com/wsdl}updateCardResponse
//
function backend_com_wsdl_updateCardResponse () {
    this.typeMarker = 'backend_com_wsdl_updateCardResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_updateCardResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}card
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_updateCardResponse.prototype.setReturn
//
function backend_com_wsdl_updateCardResponse_getReturn() { return this._return;}

backend_com_wsdl_updateCardResponse.prototype.getReturn = backend_com_wsdl_updateCardResponse_getReturn;

function backend_com_wsdl_updateCardResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_updateCardResponse.prototype.setReturn = backend_com_wsdl_updateCardResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}updateCardResponse
//
function backend_com_wsdl_updateCardResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_updateCardResponse.prototype.serialize = backend_com_wsdl_updateCardResponse_serialize;

function backend_com_wsdl_updateCardResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_updateCardResponse();
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
// Constructor for XML Schema item {http://backend.com/wsdl}treePartLazy
//
function backend_com_wsdl_treePartLazy () {
    this.typeMarker = 'backend_com_wsdl_treePartLazy';
    this._active = '';
    this._finished = '';
    this._id = 0;
    this._markerId = 0;
    this._opened = '';
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
// accessor is backend_com_wsdl_treePartLazy.prototype.getOpened
// element get for opened
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for opened
// setter function is is backend_com_wsdl_treePartLazy.prototype.setOpened
//
function backend_com_wsdl_treePartLazy_getOpened() { return this._opened;}

backend_com_wsdl_treePartLazy.prototype.getOpened = backend_com_wsdl_treePartLazy_getOpened;

function backend_com_wsdl_treePartLazy_setOpened(value) { this._opened = value;}

backend_com_wsdl_treePartLazy.prototype.setOpened = backend_com_wsdl_treePartLazy_setOpened;
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
     xml = xml + '<opened>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._opened);
     xml = xml + '</opened>';
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
    cxfjsutils.trace('processing opened');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setOpened(item);
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
// Constructor for XML Schema item {http://backend.com/wsdl}addOrUpdateMarkerResponse
//
function backend_com_wsdl_addOrUpdateMarkerResponse () {
    this.typeMarker = 'backend_com_wsdl_addOrUpdateMarkerResponse';
    this._return = null;
}

//
// accessor is backend_com_wsdl_addOrUpdateMarkerResponse.prototype.getReturn
// element get for return
// - element type is {http://backend.com/wsdl}marker
// - optional element
//
// element set for return
// setter function is is backend_com_wsdl_addOrUpdateMarkerResponse.prototype.setReturn
//
function backend_com_wsdl_addOrUpdateMarkerResponse_getReturn() { return this._return;}

backend_com_wsdl_addOrUpdateMarkerResponse.prototype.getReturn = backend_com_wsdl_addOrUpdateMarkerResponse_getReturn;

function backend_com_wsdl_addOrUpdateMarkerResponse_setReturn(value) { this._return = value;}

backend_com_wsdl_addOrUpdateMarkerResponse.prototype.setReturn = backend_com_wsdl_addOrUpdateMarkerResponse_setReturn;
//
// Serialize {http://backend.com/wsdl}addOrUpdateMarkerResponse
//
function backend_com_wsdl_addOrUpdateMarkerResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
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

backend_com_wsdl_addOrUpdateMarkerResponse.prototype.serialize = backend_com_wsdl_addOrUpdateMarkerResponse_serialize;

function backend_com_wsdl_addOrUpdateMarkerResponse_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_addOrUpdateMarkerResponse();
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
// Constructor for XML Schema item {http://backend.com/wsdl}treePart
//
function backend_com_wsdl_treePart () {
    this.typeMarker = 'backend_com_wsdl_treePart';
    this._active = '';
    this._finished = '';
    this._id = 0;
    this._marker = null;
    this._opened = '';
    this._questInstanceId = 0;
    this._successors = [];
    this._type = null;
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
// accessor is backend_com_wsdl_treePart.prototype.getMarker
// element get for marker
// - element type is {http://backend.com/wsdl}marker
// - optional element
//
// element set for marker
// setter function is is backend_com_wsdl_treePart.prototype.setMarker
//
function backend_com_wsdl_treePart_getMarker() { return this._marker;}

backend_com_wsdl_treePart.prototype.getMarker = backend_com_wsdl_treePart_getMarker;

function backend_com_wsdl_treePart_setMarker(value) { this._marker = value;}

backend_com_wsdl_treePart.prototype.setMarker = backend_com_wsdl_treePart_setMarker;
//
// accessor is backend_com_wsdl_treePart.prototype.getOpened
// element get for opened
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for opened
// setter function is is backend_com_wsdl_treePart.prototype.setOpened
//
function backend_com_wsdl_treePart_getOpened() { return this._opened;}

backend_com_wsdl_treePart.prototype.getOpened = backend_com_wsdl_treePart_getOpened;

function backend_com_wsdl_treePart_setOpened(value) { this._opened = value;}

backend_com_wsdl_treePart.prototype.setOpened = backend_com_wsdl_treePart_setOpened;
//
// accessor is backend_com_wsdl_treePart.prototype.getQuestInstanceId
// element get for questInstanceId
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
//
// element set for questInstanceId
// setter function is is backend_com_wsdl_treePart.prototype.setQuestInstanceId
//
function backend_com_wsdl_treePart_getQuestInstanceId() { return this._questInstanceId;}

backend_com_wsdl_treePart.prototype.getQuestInstanceId = backend_com_wsdl_treePart_getQuestInstanceId;

function backend_com_wsdl_treePart_setQuestInstanceId(value) { this._questInstanceId = value;}

backend_com_wsdl_treePart.prototype.setQuestInstanceId = backend_com_wsdl_treePart_setQuestInstanceId;
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
// accessor is backend_com_wsdl_treePart.prototype.getType
// element get for type
// - element type is {http://backend.com/wsdl}treePartType
// - optional element
//
// element set for type
// setter function is is backend_com_wsdl_treePart.prototype.setType
//
function backend_com_wsdl_treePart_getType() { return this._type;}

backend_com_wsdl_treePart.prototype.getType = backend_com_wsdl_treePart_getType;

function backend_com_wsdl_treePart_setType(value) { this._type = value;}

backend_com_wsdl_treePart.prototype.setType = backend_com_wsdl_treePart_setType;
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
     if (this._marker != null) {
      xml = xml + this._marker.serialize(cxfjsutils, 'marker', null);
     }
    }
    // block for local variables
    {
     xml = xml + '<opened>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._opened);
     xml = xml + '</opened>';
    }
    // block for local variables
    {
     xml = xml + '<questInstanceId>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._questInstanceId);
     xml = xml + '</questInstanceId>';
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
    cxfjsutils.trace('processing opened');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setOpened(item);
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
    this._actionIds = [];
    this._attack = null;
    this._description = null;
    this._id = 0;
    this._imageUrl = null;
    this._life = null;
    this._name = null;
    this._stars = null;
    this._type = null;
    this._version = null;
}

//
// accessor is backend_com_wsdl_card.prototype.getActionIds
// element get for actionIds
// - element type is {http://www.w3.org/2001/XMLSchema}long
// - required element
// - array
// - nillable
//
// element set for actionIds
// setter function is is backend_com_wsdl_card.prototype.setActionIds
//
function backend_com_wsdl_card_getActionIds() { return this._actionIds;}

backend_com_wsdl_card.prototype.getActionIds = backend_com_wsdl_card_getActionIds;

function backend_com_wsdl_card_setActionIds(value) { this._actionIds = value;}

backend_com_wsdl_card.prototype.setActionIds = backend_com_wsdl_card_setActionIds;
//
// accessor is backend_com_wsdl_card.prototype.getAttack
// element get for attack
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for attack
// setter function is is backend_com_wsdl_card.prototype.setAttack
//
function backend_com_wsdl_card_getAttack() { return this._attack;}

backend_com_wsdl_card.prototype.getAttack = backend_com_wsdl_card_getAttack;

function backend_com_wsdl_card_setAttack(value) { this._attack = value;}

backend_com_wsdl_card.prototype.setAttack = backend_com_wsdl_card_setAttack;
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
// accessor is backend_com_wsdl_card.prototype.getLife
// element get for life
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for life
// setter function is is backend_com_wsdl_card.prototype.setLife
//
function backend_com_wsdl_card_getLife() { return this._life;}

backend_com_wsdl_card.prototype.getLife = backend_com_wsdl_card_getLife;

function backend_com_wsdl_card_setLife(value) { this._life = value;}

backend_com_wsdl_card.prototype.setLife = backend_com_wsdl_card_setLife;
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
// accessor is backend_com_wsdl_card.prototype.getType
// element get for type
// - element type is {http://backend.com/wsdl}cardType
// - optional element
//
// element set for type
// setter function is is backend_com_wsdl_card.prototype.setType
//
function backend_com_wsdl_card_getType() { return this._type;}

backend_com_wsdl_card.prototype.getType = backend_com_wsdl_card_getType;

function backend_com_wsdl_card_setType(value) { this._type = value;}

backend_com_wsdl_card.prototype.setType = backend_com_wsdl_card_setType;
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
     if (this._actionIds != null) {
      for (var ax = 0;ax < this._actionIds.length;ax ++) {
       if (this._actionIds[ax] == null) {
        xml = xml + '<actionIds xsi:nil=\'true\'/>';
       } else {
        xml = xml + '<actionIds>';
        xml = xml + cxfjsutils.escapeXmlEntities(this._actionIds[ax]);
        xml = xml + '</actionIds>';
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
     if (this._life != null) {
      xml = xml + '<life>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._life);
      xml = xml + '</life>';
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

backend_com_wsdl_card.prototype.serialize = backend_com_wsdl_card_serialize;

function backend_com_wsdl_card_deserialize (cxfjsutils, element) {
    var newobject = new backend_com_wsdl_card();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing actionIds');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'actionIds')) {
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
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'actionIds'));
     newobject.setActionIds(item);
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
// Constructor for XML Schema item {http://backend.com/wsdl}action
//
function backend_com_wsdl_action () {
    this.typeMarker = 'backend_com_wsdl_action';
    this._amount = 0.0;
    this._descriptions = [];
    this._duration = null;
    this._forCardType = null;
    this._hasMaxUsage = '';
    this._id = 0;
    this._lifeCosts = null;
    this._maxUsage = null;
    this._multipier = '';
    this._names = [];
    this._starCosts = 0.0;
    this._type = null;
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
// - element type is {http://backend.com/wsdl}stringToStringEntry
// - required element
// - array
// - nillable
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
// accessor is backend_com_wsdl_action.prototype.getForCardType
// element get for forCardType
// - element type is {http://backend.com/wsdl}cardType
// - optional element
//
// element set for forCardType
// setter function is is backend_com_wsdl_action.prototype.setForCardType
//
function backend_com_wsdl_action_getForCardType() { return this._forCardType;}

backend_com_wsdl_action.prototype.getForCardType = backend_com_wsdl_action_getForCardType;

function backend_com_wsdl_action_setForCardType(value) { this._forCardType = value;}

backend_com_wsdl_action.prototype.setForCardType = backend_com_wsdl_action_setForCardType;
//
// accessor is backend_com_wsdl_action.prototype.getHasMaxUsage
// element get for hasMaxUsage
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for hasMaxUsage
// setter function is is backend_com_wsdl_action.prototype.setHasMaxUsage
//
function backend_com_wsdl_action_getHasMaxUsage() { return this._hasMaxUsage;}

backend_com_wsdl_action.prototype.getHasMaxUsage = backend_com_wsdl_action_getHasMaxUsage;

function backend_com_wsdl_action_setHasMaxUsage(value) { this._hasMaxUsage = value;}

backend_com_wsdl_action.prototype.setHasMaxUsage = backend_com_wsdl_action_setHasMaxUsage;
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
// accessor is backend_com_wsdl_action.prototype.getLifeCosts
// element get for lifeCosts
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for lifeCosts
// setter function is is backend_com_wsdl_action.prototype.setLifeCosts
//
function backend_com_wsdl_action_getLifeCosts() { return this._lifeCosts;}

backend_com_wsdl_action.prototype.getLifeCosts = backend_com_wsdl_action_getLifeCosts;

function backend_com_wsdl_action_setLifeCosts(value) { this._lifeCosts = value;}

backend_com_wsdl_action.prototype.setLifeCosts = backend_com_wsdl_action_setLifeCosts;
//
// accessor is backend_com_wsdl_action.prototype.getMaxUsage
// element get for maxUsage
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for maxUsage
// setter function is is backend_com_wsdl_action.prototype.setMaxUsage
//
function backend_com_wsdl_action_getMaxUsage() { return this._maxUsage;}

backend_com_wsdl_action.prototype.getMaxUsage = backend_com_wsdl_action_getMaxUsage;

function backend_com_wsdl_action_setMaxUsage(value) { this._maxUsage = value;}

backend_com_wsdl_action.prototype.setMaxUsage = backend_com_wsdl_action_setMaxUsage;
//
// accessor is backend_com_wsdl_action.prototype.getMultipier
// element get for multipier
// - element type is {http://www.w3.org/2001/XMLSchema}boolean
// - required element
//
// element set for multipier
// setter function is is backend_com_wsdl_action.prototype.setMultipier
//
function backend_com_wsdl_action_getMultipier() { return this._multipier;}

backend_com_wsdl_action.prototype.getMultipier = backend_com_wsdl_action_getMultipier;

function backend_com_wsdl_action_setMultipier(value) { this._multipier = value;}

backend_com_wsdl_action.prototype.setMultipier = backend_com_wsdl_action_setMultipier;
//
// accessor is backend_com_wsdl_action.prototype.getNames
// element get for names
// - element type is {http://backend.com/wsdl}stringToStringEntry
// - required element
// - array
// - nillable
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
// accessor is backend_com_wsdl_action.prototype.getType
// element get for type
// - element type is {http://backend.com/wsdl}actionType
// - optional element
//
// element set for type
// setter function is is backend_com_wsdl_action.prototype.setType
//
function backend_com_wsdl_action_getType() { return this._type;}

backend_com_wsdl_action.prototype.getType = backend_com_wsdl_action_getType;

function backend_com_wsdl_action_setType(value) { this._type = value;}

backend_com_wsdl_action.prototype.setType = backend_com_wsdl_action_setType;
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
     if (this._descriptions != null) {
      for (var ax = 0;ax < this._descriptions.length;ax ++) {
       if (this._descriptions[ax] == null) {
        xml = xml + '<descriptions xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._descriptions[ax].serialize(cxfjsutils, 'descriptions', null);
       }
      }
     }
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
     if (this._forCardType != null) {
      xml = xml + '<forCardType>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._forCardType);
      xml = xml + '</forCardType>';
     }
    }
    // block for local variables
    {
     xml = xml + '<hasMaxUsage>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._hasMaxUsage);
     xml = xml + '</hasMaxUsage>';
    }
    // block for local variables
    {
     xml = xml + '<id>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._id);
     xml = xml + '</id>';
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
     xml = xml + '<multipier>';
     xml = xml + cxfjsutils.escapeXmlEntities(this._multipier);
     xml = xml + '</multipier>';
    }
    // block for local variables
    {
     if (this._names != null) {
      for (var ax = 0;ax < this._names.length;ax ++) {
       if (this._names[ax] == null) {
        xml = xml + '<names xsi:nil=\'true\'/>';
       } else {
        xml = xml + this._names[ax].serialize(cxfjsutils, 'names', null);
       }
      }
     }
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
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'descriptions')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = backend_com_wsdl_stringToStringEntry_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'descriptions'));
     newobject.setDescriptions(item);
     var item = null;
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
    cxfjsutils.trace('processing forCardType');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'forCardType')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setForCardType(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
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
    cxfjsutils.trace('processing multipier');
    var value = null;
    if (!cxfjsutils.isElementNil(curElement)) {
     value = cxfjsutils.getNodeText(curElement);
     item = (value == 'true');
    }
    newobject.setMultipier(item);
    var item = null;
    if (curElement != null) {
     curElement = cxfjsutils.getNextElementSibling(curElement);
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing names');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'names')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = backend_com_wsdl_stringToStringEntry_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'names'));
     newobject.setNames(item);
     var item = null;
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
    this.globalElementSerializers['{http://backend.com/wsdl}getTreePart'] = backend_com_wsdl_getTreePart_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getTreePart'] = backend_com_wsdl_getTreePart_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getAllActionsResponse'] = backend_com_wsdl_getAllActionsResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getAllActionsResponse'] = backend_com_wsdl_getAllActionsResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}loginResponse'] = backend_com_wsdl_loginResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}loginResponse'] = backend_com_wsdl_loginResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getHtml'] = backend_com_wsdl_getHtml_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getHtml'] = backend_com_wsdl_getHtml_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getMarkers'] = backend_com_wsdl_getMarkers_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getMarkers'] = backend_com_wsdl_getMarkers_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getEditorQuestResponse'] = backend_com_wsdl_getEditorQuestResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getEditorQuestResponse'] = backend_com_wsdl_getEditorQuestResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteQuestInstanceResponse'] = backend_com_wsdl_deleteQuestInstanceResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteQuestInstanceResponse'] = backend_com_wsdl_deleteQuestInstanceResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}setTreePartActiveResponse'] = backend_com_wsdl_setTreePartActiveResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}setTreePartActiveResponse'] = backend_com_wsdl_setTreePartActiveResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateUserResponse'] = backend_com_wsdl_updateUserResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateUserResponse'] = backend_com_wsdl_updateUserResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}register'] = backend_com_wsdl_register_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}register'] = backend_com_wsdl_register_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteCardResponse'] = backend_com_wsdl_deleteCardResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteCardResponse'] = backend_com_wsdl_deleteCardResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}setTreePartFinishedResponse'] = backend_com_wsdl_setTreePartFinishedResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}setTreePartFinishedResponse'] = backend_com_wsdl_setTreePartFinishedResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateEditorQuest'] = backend_com_wsdl_updateEditorQuest_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateEditorQuest'] = backend_com_wsdl_updateEditorQuest_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getTreePartsLazyResponse'] = backend_com_wsdl_getTreePartsLazyResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getTreePartsLazyResponse'] = backend_com_wsdl_getTreePartsLazyResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addActionResponse'] = backend_com_wsdl_addActionResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addActionResponse'] = backend_com_wsdl_addActionResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteMarkerResponse'] = backend_com_wsdl_deleteMarkerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteMarkerResponse'] = backend_com_wsdl_deleteMarkerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateQuestInstance'] = backend_com_wsdl_updateQuestInstance_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateQuestInstance'] = backend_com_wsdl_updateQuestInstance_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addDeck'] = backend_com_wsdl_addDeck_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addDeck'] = backend_com_wsdl_addDeck_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getMarker'] = backend_com_wsdl_getMarker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getMarker'] = backend_com_wsdl_getMarker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getEditorQuests'] = backend_com_wsdl_getEditorQuests_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getEditorQuests'] = backend_com_wsdl_getEditorQuests_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getAction'] = backend_com_wsdl_getAction_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getAction'] = backend_com_wsdl_getAction_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteAction'] = backend_com_wsdl_deleteAction_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteAction'] = backend_com_wsdl_deleteAction_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteUserResponse'] = backend_com_wsdl_deleteUserResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteUserResponse'] = backend_com_wsdl_deleteUserResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}setTreePartActive'] = backend_com_wsdl_setTreePartActive_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}setTreePartActive'] = backend_com_wsdl_setTreePartActive_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteMarker'] = backend_com_wsdl_deleteMarker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteMarker'] = backend_com_wsdl_deleteMarker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addHtmlResponse'] = backend_com_wsdl_addHtmlResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addHtmlResponse'] = backend_com_wsdl_addHtmlResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getHtmlResponse'] = backend_com_wsdl_getHtmlResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getHtmlResponse'] = backend_com_wsdl_getHtmlResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateQuestResponse'] = backend_com_wsdl_updateQuestResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateQuestResponse'] = backend_com_wsdl_updateQuestResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateDeck'] = backend_com_wsdl_updateDeck_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateDeck'] = backend_com_wsdl_updateDeck_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addDeckResponse'] = backend_com_wsdl_addDeckResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addDeckResponse'] = backend_com_wsdl_addDeckResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getDeck'] = backend_com_wsdl_getDeck_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getDeck'] = backend_com_wsdl_getDeck_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateUserWonFightsCountResponse'] = backend_com_wsdl_updateUserWonFightsCountResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateUserWonFightsCountResponse'] = backend_com_wsdl_updateUserWonFightsCountResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}setQuestInstanceOfTreePartResponse'] = backend_com_wsdl_setQuestInstanceOfTreePartResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}setQuestInstanceOfTreePartResponse'] = backend_com_wsdl_setQuestInstanceOfTreePartResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateUserTaskCount'] = backend_com_wsdl_updateUserTaskCount_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateUserTaskCount'] = backend_com_wsdl_updateUserTaskCount_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addOrUpdateTreePartResponse'] = backend_com_wsdl_addOrUpdateTreePartResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addOrUpdateTreePartResponse'] = backend_com_wsdl_addOrUpdateTreePartResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addQuestInstanceResponse'] = backend_com_wsdl_addQuestInstanceResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addQuestInstanceResponse'] = backend_com_wsdl_addQuestInstanceResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteQuest'] = backend_com_wsdl_deleteQuest_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteQuest'] = backend_com_wsdl_deleteQuest_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuestInstanceResponse'] = backend_com_wsdl_getQuestInstanceResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuestInstanceResponse'] = backend_com_wsdl_getQuestInstanceResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getTreePartLazyResponse'] = backend_com_wsdl_getTreePartLazyResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getTreePartLazyResponse'] = backend_com_wsdl_getTreePartLazyResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateEditorQuestResponse'] = backend_com_wsdl_updateEditorQuestResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateEditorQuestResponse'] = backend_com_wsdl_updateEditorQuestResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addCardResponse'] = backend_com_wsdl_addCardResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addCardResponse'] = backend_com_wsdl_addCardResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getDeckResponse'] = backend_com_wsdl_getDeckResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getDeckResponse'] = backend_com_wsdl_getDeckResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteActionResponse'] = backend_com_wsdl_deleteActionResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteActionResponse'] = backend_com_wsdl_deleteActionResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateUserAnsweredQuestionsCountResponse'] = backend_com_wsdl_updateUserAnsweredQuestionsCountResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateUserAnsweredQuestionsCountResponse'] = backend_com_wsdl_updateUserAnsweredQuestionsCountResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateCard'] = backend_com_wsdl_updateCard_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateCard'] = backend_com_wsdl_updateCard_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateUserTaskCountResponse'] = backend_com_wsdl_updateUserTaskCountResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateUserTaskCountResponse'] = backend_com_wsdl_updateUserTaskCountResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateUserKmWalked'] = backend_com_wsdl_updateUserKmWalked_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateUserKmWalked'] = backend_com_wsdl_updateUserKmWalked_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateHtml'] = backend_com_wsdl_updateHtml_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateHtml'] = backend_com_wsdl_updateHtml_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addCard'] = backend_com_wsdl_addCard_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addCard'] = backend_com_wsdl_addCard_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getMarkersResponse'] = backend_com_wsdl_getMarkersResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getMarkersResponse'] = backend_com_wsdl_getMarkersResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addUserResponse'] = backend_com_wsdl_addUserResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addUserResponse'] = backend_com_wsdl_addUserResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getCards'] = backend_com_wsdl_getCards_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getCards'] = backend_com_wsdl_getCards_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuestInstances'] = backend_com_wsdl_getQuestInstances_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuestInstances'] = backend_com_wsdl_getQuestInstances_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getCardsResponse'] = backend_com_wsdl_getCardsResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getCardsResponse'] = backend_com_wsdl_getCardsResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateAction'] = backend_com_wsdl_updateAction_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateAction'] = backend_com_wsdl_updateAction_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateUserWonFightsCount'] = backend_com_wsdl_updateUserWonFightsCount_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateUserWonFightsCount'] = backend_com_wsdl_updateUserWonFightsCount_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addUser'] = backend_com_wsdl_addUser_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addUser'] = backend_com_wsdl_addUser_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateDeckResponse'] = backend_com_wsdl_updateDeckResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateDeckResponse'] = backend_com_wsdl_updateDeckResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getCardResponse'] = backend_com_wsdl_getCardResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getCardResponse'] = backend_com_wsdl_getCardResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addQuest'] = backend_com_wsdl_addQuest_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addQuest'] = backend_com_wsdl_addQuest_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateUserFoundLocationsCountResponse'] = backend_com_wsdl_updateUserFoundLocationsCountResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateUserFoundLocationsCountResponse'] = backend_com_wsdl_updateUserFoundLocationsCountResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getMarkerResponse'] = backend_com_wsdl_getMarkerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getMarkerResponse'] = backend_com_wsdl_getMarkerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getActionResponse'] = backend_com_wsdl_getActionResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getActionResponse'] = backend_com_wsdl_getActionResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addEditorQuest'] = backend_com_wsdl_addEditorQuest_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addEditorQuest'] = backend_com_wsdl_addEditorQuest_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuestsResponse'] = backend_com_wsdl_getQuestsResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuestsResponse'] = backend_com_wsdl_getQuestsResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteTreePartResponse'] = backend_com_wsdl_deleteTreePartResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteTreePartResponse'] = backend_com_wsdl_deleteTreePartResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}setTreePartOpened'] = backend_com_wsdl_setTreePartOpened_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}setTreePartOpened'] = backend_com_wsdl_setTreePartOpened_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getTreePartResponse'] = backend_com_wsdl_getTreePartResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getTreePartResponse'] = backend_com_wsdl_getTreePartResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getCard'] = backend_com_wsdl_getCard_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getCard'] = backend_com_wsdl_getCard_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}setTreePartOpenedResponse'] = backend_com_wsdl_setTreePartOpenedResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}setTreePartOpenedResponse'] = backend_com_wsdl_setTreePartOpenedResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteQuestInstance'] = backend_com_wsdl_deleteQuestInstance_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteQuestInstance'] = backend_com_wsdl_deleteQuestInstance_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuest'] = backend_com_wsdl_getQuest_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuest'] = backend_com_wsdl_getQuest_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}setQuestInstanceOfTreePart'] = backend_com_wsdl_setQuestInstanceOfTreePart_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}setQuestInstanceOfTreePart'] = backend_com_wsdl_setQuestInstanceOfTreePart_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getActionsResponse'] = backend_com_wsdl_getActionsResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getActionsResponse'] = backend_com_wsdl_getActionsResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getEditorQuestsResponse'] = backend_com_wsdl_getEditorQuestsResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getEditorQuestsResponse'] = backend_com_wsdl_getEditorQuestsResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteTreePart'] = backend_com_wsdl_deleteTreePart_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteTreePart'] = backend_com_wsdl_deleteTreePart_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getEditorQuest'] = backend_com_wsdl_getEditorQuest_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getEditorQuest'] = backend_com_wsdl_getEditorQuest_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addEditorQuestResponse'] = backend_com_wsdl_addEditorQuestResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addEditorQuestResponse'] = backend_com_wsdl_addEditorQuestResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addOrUpdateMarker'] = backend_com_wsdl_addOrUpdateMarker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addOrUpdateMarker'] = backend_com_wsdl_addOrUpdateMarker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addAction'] = backend_com_wsdl_addAction_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addAction'] = backend_com_wsdl_addAction_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuestResponse'] = backend_com_wsdl_getQuestResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuestResponse'] = backend_com_wsdl_getQuestResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteCard'] = backend_com_wsdl_deleteCard_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteCard'] = backend_com_wsdl_deleteCard_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}setTreePartFinished'] = backend_com_wsdl_setTreePartFinished_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}setTreePartFinished'] = backend_com_wsdl_setTreePartFinished_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateUserAnsweredQuestionsCount'] = backend_com_wsdl_updateUserAnsweredQuestionsCount_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateUserAnsweredQuestionsCount'] = backend_com_wsdl_updateUserAnsweredQuestionsCount_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addTreePartLazy'] = backend_com_wsdl_addTreePartLazy_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addTreePartLazy'] = backend_com_wsdl_addTreePartLazy_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuestsInRangeResponse'] = backend_com_wsdl_getQuestsInRangeResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuestsInRangeResponse'] = backend_com_wsdl_getQuestsInRangeResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getAllActionsOfCardTypeResponse'] = backend_com_wsdl_getAllActionsOfCardTypeResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getAllActionsOfCardTypeResponse'] = backend_com_wsdl_getAllActionsOfCardTypeResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateQuest'] = backend_com_wsdl_updateQuest_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateQuest'] = backend_com_wsdl_updateQuest_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getDecks'] = backend_com_wsdl_getDecks_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getDecks'] = backend_com_wsdl_getDecks_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuestInstancesResponse'] = backend_com_wsdl_getQuestInstancesResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuestInstancesResponse'] = backend_com_wsdl_getQuestInstancesResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getActions'] = backend_com_wsdl_getActions_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getActions'] = backend_com_wsdl_getActions_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateUserKmWalkedResponse'] = backend_com_wsdl_updateUserKmWalkedResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateUserKmWalkedResponse'] = backend_com_wsdl_updateUserKmWalkedResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateActionResponse'] = backend_com_wsdl_updateActionResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateActionResponse'] = backend_com_wsdl_updateActionResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuestsInRange'] = backend_com_wsdl_getQuestsInRange_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuestsInRange'] = backend_com_wsdl_getQuestsInRange_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getTreePartsLazy'] = backend_com_wsdl_getTreePartsLazy_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getTreePartsLazy'] = backend_com_wsdl_getTreePartsLazy_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuests'] = backend_com_wsdl_getQuests_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuests'] = backend_com_wsdl_getQuests_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addOrUpdateTreePart'] = backend_com_wsdl_addOrUpdateTreePart_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addOrUpdateTreePart'] = backend_com_wsdl_addOrUpdateTreePart_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getDecksResponse'] = backend_com_wsdl_getDecksResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getDecksResponse'] = backend_com_wsdl_getDecksResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateUserFoundLocationsCount'] = backend_com_wsdl_updateUserFoundLocationsCount_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateUserFoundLocationsCount'] = backend_com_wsdl_updateUserFoundLocationsCount_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteDeckResponse'] = backend_com_wsdl_deleteDeckResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteDeckResponse'] = backend_com_wsdl_deleteDeckResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getAllActionsOfCardType'] = backend_com_wsdl_getAllActionsOfCardType_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getAllActionsOfCardType'] = backend_com_wsdl_getAllActionsOfCardType_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addQuestResponse'] = backend_com_wsdl_addQuestResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addQuestResponse'] = backend_com_wsdl_addQuestResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteUser'] = backend_com_wsdl_deleteUser_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteUser'] = backend_com_wsdl_deleteUser_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateQuestInstanceResponse'] = backend_com_wsdl_updateQuestInstanceResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateQuestInstanceResponse'] = backend_com_wsdl_updateQuestInstanceResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteDeck'] = backend_com_wsdl_deleteDeck_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteDeck'] = backend_com_wsdl_deleteDeck_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateUser'] = backend_com_wsdl_updateUser_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateUser'] = backend_com_wsdl_updateUser_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addTreePartLazyResponse'] = backend_com_wsdl_addTreePartLazyResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addTreePartLazyResponse'] = backend_com_wsdl_addTreePartLazyResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addQuestInstance'] = backend_com_wsdl_addQuestInstance_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addQuestInstance'] = backend_com_wsdl_addQuestInstance_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateCardResponse'] = backend_com_wsdl_updateCardResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateCardResponse'] = backend_com_wsdl_updateCardResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addOrUpdateMarkerResponse'] = backend_com_wsdl_addOrUpdateMarkerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addOrUpdateMarkerResponse'] = backend_com_wsdl_addOrUpdateMarkerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getTreePartLazy'] = backend_com_wsdl_getTreePartLazy_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getTreePartLazy'] = backend_com_wsdl_getTreePartLazy_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateHtmlResponse'] = backend_com_wsdl_updateHtmlResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateHtmlResponse'] = backend_com_wsdl_updateHtmlResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuestInstance'] = backend_com_wsdl_getQuestInstance_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuestInstance'] = backend_com_wsdl_getQuestInstance_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addHtml'] = backend_com_wsdl_addHtml_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addHtml'] = backend_com_wsdl_addHtml_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteQuestResponse'] = backend_com_wsdl_deleteQuestResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteQuestResponse'] = backend_com_wsdl_deleteQuestResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}login'] = backend_com_wsdl_login_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}login'] = backend_com_wsdl_login_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getAllActions'] = backend_com_wsdl_getAllActions_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getAllActions'] = backend_com_wsdl_getAllActions_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}registerResponse'] = backend_com_wsdl_registerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}registerResponse'] = backend_com_wsdl_registerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getTreePart'] = backend_com_wsdl_getTreePart_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getTreePart'] = backend_com_wsdl_getTreePart_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getAllActionsResponse'] = backend_com_wsdl_getAllActionsResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getAllActionsResponse'] = backend_com_wsdl_getAllActionsResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}loginResponse'] = backend_com_wsdl_loginResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}loginResponse'] = backend_com_wsdl_loginResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getHtml'] = backend_com_wsdl_getHtml_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getHtml'] = backend_com_wsdl_getHtml_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getMarkers'] = backend_com_wsdl_getMarkers_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getMarkers'] = backend_com_wsdl_getMarkers_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getEditorQuestResponse'] = backend_com_wsdl_getEditorQuestResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getEditorQuestResponse'] = backend_com_wsdl_getEditorQuestResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}quest'] = backend_com_wsdl_quest_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}quest'] = backend_com_wsdl_quest_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}setTreePartActiveResponse'] = backend_com_wsdl_setTreePartActiveResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}setTreePartActiveResponse'] = backend_com_wsdl_setTreePartActiveResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteQuestInstanceResponse'] = backend_com_wsdl_deleteQuestInstanceResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteQuestInstanceResponse'] = backend_com_wsdl_deleteQuestInstanceResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}register'] = backend_com_wsdl_register_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}register'] = backend_com_wsdl_register_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateUserResponse'] = backend_com_wsdl_updateUserResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateUserResponse'] = backend_com_wsdl_updateUserResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}setTreePartFinishedResponse'] = backend_com_wsdl_setTreePartFinishedResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}setTreePartFinishedResponse'] = backend_com_wsdl_setTreePartFinishedResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteCardResponse'] = backend_com_wsdl_deleteCardResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteCardResponse'] = backend_com_wsdl_deleteCardResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}stringToStringEntry'] = backend_com_wsdl_stringToStringEntry_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}stringToStringEntry'] = backend_com_wsdl_stringToStringEntry_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateEditorQuest'] = backend_com_wsdl_updateEditorQuest_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateEditorQuest'] = backend_com_wsdl_updateEditorQuest_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getTreePartsLazyResponse'] = backend_com_wsdl_getTreePartsLazyResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getTreePartsLazyResponse'] = backend_com_wsdl_getTreePartsLazyResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addActionResponse'] = backend_com_wsdl_addActionResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addActionResponse'] = backend_com_wsdl_addActionResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteMarkerResponse'] = backend_com_wsdl_deleteMarkerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteMarkerResponse'] = backend_com_wsdl_deleteMarkerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateQuestInstance'] = backend_com_wsdl_updateQuestInstance_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateQuestInstance'] = backend_com_wsdl_updateQuestInstance_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addDeck'] = backend_com_wsdl_addDeck_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addDeck'] = backend_com_wsdl_addDeck_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getMarker'] = backend_com_wsdl_getMarker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getMarker'] = backend_com_wsdl_getMarker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getEditorQuests'] = backend_com_wsdl_getEditorQuests_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getEditorQuests'] = backend_com_wsdl_getEditorQuests_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getAction'] = backend_com_wsdl_getAction_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getAction'] = backend_com_wsdl_getAction_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteAction'] = backend_com_wsdl_deleteAction_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteAction'] = backend_com_wsdl_deleteAction_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteUserResponse'] = backend_com_wsdl_deleteUserResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteUserResponse'] = backend_com_wsdl_deleteUserResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}setTreePartActive'] = backend_com_wsdl_setTreePartActive_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}setTreePartActive'] = backend_com_wsdl_setTreePartActive_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}editorQuest'] = backend_com_wsdl_editorQuest_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}editorQuest'] = backend_com_wsdl_editorQuest_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteMarker'] = backend_com_wsdl_deleteMarker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteMarker'] = backend_com_wsdl_deleteMarker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}longToIntEntry'] = backend_com_wsdl_longToIntEntry_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}longToIntEntry'] = backend_com_wsdl_longToIntEntry_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addHtmlResponse'] = backend_com_wsdl_addHtmlResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addHtmlResponse'] = backend_com_wsdl_addHtmlResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getHtmlResponse'] = backend_com_wsdl_getHtmlResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getHtmlResponse'] = backend_com_wsdl_getHtmlResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deck'] = backend_com_wsdl_deck_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deck'] = backend_com_wsdl_deck_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateQuestResponse'] = backend_com_wsdl_updateQuestResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateQuestResponse'] = backend_com_wsdl_updateQuestResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateDeck'] = backend_com_wsdl_updateDeck_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateDeck'] = backend_com_wsdl_updateDeck_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addDeckResponse'] = backend_com_wsdl_addDeckResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addDeckResponse'] = backend_com_wsdl_addDeckResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getDeck'] = backend_com_wsdl_getDeck_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getDeck'] = backend_com_wsdl_getDeck_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateUserWonFightsCountResponse'] = backend_com_wsdl_updateUserWonFightsCountResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateUserWonFightsCountResponse'] = backend_com_wsdl_updateUserWonFightsCountResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}setQuestInstanceOfTreePartResponse'] = backend_com_wsdl_setQuestInstanceOfTreePartResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}setQuestInstanceOfTreePartResponse'] = backend_com_wsdl_setQuestInstanceOfTreePartResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateUserTaskCount'] = backend_com_wsdl_updateUserTaskCount_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateUserTaskCount'] = backend_com_wsdl_updateUserTaskCount_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addOrUpdateTreePartResponse'] = backend_com_wsdl_addOrUpdateTreePartResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addOrUpdateTreePartResponse'] = backend_com_wsdl_addOrUpdateTreePartResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addQuestInstanceResponse'] = backend_com_wsdl_addQuestInstanceResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addQuestInstanceResponse'] = backend_com_wsdl_addQuestInstanceResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteQuest'] = backend_com_wsdl_deleteQuest_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteQuest'] = backend_com_wsdl_deleteQuest_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuestInstanceResponse'] = backend_com_wsdl_getQuestInstanceResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuestInstanceResponse'] = backend_com_wsdl_getQuestInstanceResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getTreePartLazyResponse'] = backend_com_wsdl_getTreePartLazyResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getTreePartLazyResponse'] = backend_com_wsdl_getTreePartLazyResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateEditorQuestResponse'] = backend_com_wsdl_updateEditorQuestResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateEditorQuestResponse'] = backend_com_wsdl_updateEditorQuestResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addCardResponse'] = backend_com_wsdl_addCardResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addCardResponse'] = backend_com_wsdl_addCardResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getDeckResponse'] = backend_com_wsdl_getDeckResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getDeckResponse'] = backend_com_wsdl_getDeckResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteActionResponse'] = backend_com_wsdl_deleteActionResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteActionResponse'] = backend_com_wsdl_deleteActionResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateCard'] = backend_com_wsdl_updateCard_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateCard'] = backend_com_wsdl_updateCard_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateUserAnsweredQuestionsCountResponse'] = backend_com_wsdl_updateUserAnsweredQuestionsCountResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateUserAnsweredQuestionsCountResponse'] = backend_com_wsdl_updateUserAnsweredQuestionsCountResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateUserTaskCountResponse'] = backend_com_wsdl_updateUserTaskCountResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateUserTaskCountResponse'] = backend_com_wsdl_updateUserTaskCountResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateUserKmWalked'] = backend_com_wsdl_updateUserKmWalked_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateUserKmWalked'] = backend_com_wsdl_updateUserKmWalked_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateHtml'] = backend_com_wsdl_updateHtml_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateHtml'] = backend_com_wsdl_updateHtml_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}questInstance'] = backend_com_wsdl_questInstance_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}questInstance'] = backend_com_wsdl_questInstance_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addCard'] = backend_com_wsdl_addCard_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addCard'] = backend_com_wsdl_addCard_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getMarkersResponse'] = backend_com_wsdl_getMarkersResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getMarkersResponse'] = backend_com_wsdl_getMarkersResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}mapPosition'] = backend_com_wsdl_mapPosition_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}mapPosition'] = backend_com_wsdl_mapPosition_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}htmlObject'] = backend_com_wsdl_htmlObject_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}htmlObject'] = backend_com_wsdl_htmlObject_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addUserResponse'] = backend_com_wsdl_addUserResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addUserResponse'] = backend_com_wsdl_addUserResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuestInstances'] = backend_com_wsdl_getQuestInstances_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuestInstances'] = backend_com_wsdl_getQuestInstances_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getCards'] = backend_com_wsdl_getCards_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getCards'] = backend_com_wsdl_getCards_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateAction'] = backend_com_wsdl_updateAction_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateAction'] = backend_com_wsdl_updateAction_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getCardsResponse'] = backend_com_wsdl_getCardsResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getCardsResponse'] = backend_com_wsdl_getCardsResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addUser'] = backend_com_wsdl_addUser_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addUser'] = backend_com_wsdl_addUser_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateUserWonFightsCount'] = backend_com_wsdl_updateUserWonFightsCount_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateUserWonFightsCount'] = backend_com_wsdl_updateUserWonFightsCount_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateDeckResponse'] = backend_com_wsdl_updateDeckResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateDeckResponse'] = backend_com_wsdl_updateDeckResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getCardResponse'] = backend_com_wsdl_getCardResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getCardResponse'] = backend_com_wsdl_getCardResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addQuest'] = backend_com_wsdl_addQuest_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addQuest'] = backend_com_wsdl_addQuest_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateUserFoundLocationsCountResponse'] = backend_com_wsdl_updateUserFoundLocationsCountResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateUserFoundLocationsCountResponse'] = backend_com_wsdl_updateUserFoundLocationsCountResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getMarkerResponse'] = backend_com_wsdl_getMarkerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getMarkerResponse'] = backend_com_wsdl_getMarkerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getActionResponse'] = backend_com_wsdl_getActionResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getActionResponse'] = backend_com_wsdl_getActionResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addEditorQuest'] = backend_com_wsdl_addEditorQuest_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addEditorQuest'] = backend_com_wsdl_addEditorQuest_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuestsResponse'] = backend_com_wsdl_getQuestsResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuestsResponse'] = backend_com_wsdl_getQuestsResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteTreePartResponse'] = backend_com_wsdl_deleteTreePartResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteTreePartResponse'] = backend_com_wsdl_deleteTreePartResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}setTreePartOpened'] = backend_com_wsdl_setTreePartOpened_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}setTreePartOpened'] = backend_com_wsdl_setTreePartOpened_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getTreePartResponse'] = backend_com_wsdl_getTreePartResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getTreePartResponse'] = backend_com_wsdl_getTreePartResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getCard'] = backend_com_wsdl_getCard_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getCard'] = backend_com_wsdl_getCard_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}setTreePartOpenedResponse'] = backend_com_wsdl_setTreePartOpenedResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}setTreePartOpenedResponse'] = backend_com_wsdl_setTreePartOpenedResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteQuestInstance'] = backend_com_wsdl_deleteQuestInstance_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteQuestInstance'] = backend_com_wsdl_deleteQuestInstance_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuest'] = backend_com_wsdl_getQuest_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuest'] = backend_com_wsdl_getQuest_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}setQuestInstanceOfTreePart'] = backend_com_wsdl_setQuestInstanceOfTreePart_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}setQuestInstanceOfTreePart'] = backend_com_wsdl_setQuestInstanceOfTreePart_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getEditorQuestsResponse'] = backend_com_wsdl_getEditorQuestsResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getEditorQuestsResponse'] = backend_com_wsdl_getEditorQuestsResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getActionsResponse'] = backend_com_wsdl_getActionsResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getActionsResponse'] = backend_com_wsdl_getActionsResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteTreePart'] = backend_com_wsdl_deleteTreePart_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteTreePart'] = backend_com_wsdl_deleteTreePart_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getEditorQuest'] = backend_com_wsdl_getEditorQuest_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getEditorQuest'] = backend_com_wsdl_getEditorQuest_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addEditorQuestResponse'] = backend_com_wsdl_addEditorQuestResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addEditorQuestResponse'] = backend_com_wsdl_addEditorQuestResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addOrUpdateMarker'] = backend_com_wsdl_addOrUpdateMarker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addOrUpdateMarker'] = backend_com_wsdl_addOrUpdateMarker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addAction'] = backend_com_wsdl_addAction_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addAction'] = backend_com_wsdl_addAction_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}user'] = backend_com_wsdl_user_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}user'] = backend_com_wsdl_user_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuestResponse'] = backend_com_wsdl_getQuestResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuestResponse'] = backend_com_wsdl_getQuestResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteCard'] = backend_com_wsdl_deleteCard_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteCard'] = backend_com_wsdl_deleteCard_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}setTreePartFinished'] = backend_com_wsdl_setTreePartFinished_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}setTreePartFinished'] = backend_com_wsdl_setTreePartFinished_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateUserAnsweredQuestionsCount'] = backend_com_wsdl_updateUserAnsweredQuestionsCount_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateUserAnsweredQuestionsCount'] = backend_com_wsdl_updateUserAnsweredQuestionsCount_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addTreePartLazy'] = backend_com_wsdl_addTreePartLazy_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addTreePartLazy'] = backend_com_wsdl_addTreePartLazy_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuestsInRangeResponse'] = backend_com_wsdl_getQuestsInRangeResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuestsInRangeResponse'] = backend_com_wsdl_getQuestsInRangeResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getAllActionsOfCardTypeResponse'] = backend_com_wsdl_getAllActionsOfCardTypeResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getAllActionsOfCardTypeResponse'] = backend_com_wsdl_getAllActionsOfCardTypeResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateQuest'] = backend_com_wsdl_updateQuest_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateQuest'] = backend_com_wsdl_updateQuest_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getDecks'] = backend_com_wsdl_getDecks_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getDecks'] = backend_com_wsdl_getDecks_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuestInstancesResponse'] = backend_com_wsdl_getQuestInstancesResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuestInstancesResponse'] = backend_com_wsdl_getQuestInstancesResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getActions'] = backend_com_wsdl_getActions_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getActions'] = backend_com_wsdl_getActions_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateActionResponse'] = backend_com_wsdl_updateActionResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateActionResponse'] = backend_com_wsdl_updateActionResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateUserKmWalkedResponse'] = backend_com_wsdl_updateUserKmWalkedResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateUserKmWalkedResponse'] = backend_com_wsdl_updateUserKmWalkedResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuestsInRange'] = backend_com_wsdl_getQuestsInRange_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuestsInRange'] = backend_com_wsdl_getQuestsInRange_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getTreePartsLazy'] = backend_com_wsdl_getTreePartsLazy_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getTreePartsLazy'] = backend_com_wsdl_getTreePartsLazy_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuests'] = backend_com_wsdl_getQuests_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuests'] = backend_com_wsdl_getQuests_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addOrUpdateTreePart'] = backend_com_wsdl_addOrUpdateTreePart_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addOrUpdateTreePart'] = backend_com_wsdl_addOrUpdateTreePart_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}marker'] = backend_com_wsdl_marker_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}marker'] = backend_com_wsdl_marker_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getDecksResponse'] = backend_com_wsdl_getDecksResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getDecksResponse'] = backend_com_wsdl_getDecksResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateUserFoundLocationsCount'] = backend_com_wsdl_updateUserFoundLocationsCount_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateUserFoundLocationsCount'] = backend_com_wsdl_updateUserFoundLocationsCount_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteDeckResponse'] = backend_com_wsdl_deleteDeckResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteDeckResponse'] = backend_com_wsdl_deleteDeckResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getAllActionsOfCardType'] = backend_com_wsdl_getAllActionsOfCardType_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getAllActionsOfCardType'] = backend_com_wsdl_getAllActionsOfCardType_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addQuestResponse'] = backend_com_wsdl_addQuestResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addQuestResponse'] = backend_com_wsdl_addQuestResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteUser'] = backend_com_wsdl_deleteUser_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteUser'] = backend_com_wsdl_deleteUser_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateQuestInstanceResponse'] = backend_com_wsdl_updateQuestInstanceResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateQuestInstanceResponse'] = backend_com_wsdl_updateQuestInstanceResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteDeck'] = backend_com_wsdl_deleteDeck_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteDeck'] = backend_com_wsdl_deleteDeck_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateUser'] = backend_com_wsdl_updateUser_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateUser'] = backend_com_wsdl_updateUser_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}stringToBoolEntry'] = backend_com_wsdl_stringToBoolEntry_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}stringToBoolEntry'] = backend_com_wsdl_stringToBoolEntry_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addTreePartLazyResponse'] = backend_com_wsdl_addTreePartLazyResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addTreePartLazyResponse'] = backend_com_wsdl_addTreePartLazyResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addQuestInstance'] = backend_com_wsdl_addQuestInstance_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addQuestInstance'] = backend_com_wsdl_addQuestInstance_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateCardResponse'] = backend_com_wsdl_updateCardResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateCardResponse'] = backend_com_wsdl_updateCardResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}treePartLazy'] = backend_com_wsdl_treePartLazy_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}treePartLazy'] = backend_com_wsdl_treePartLazy_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getTreePartLazy'] = backend_com_wsdl_getTreePartLazy_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getTreePartLazy'] = backend_com_wsdl_getTreePartLazy_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addOrUpdateMarkerResponse'] = backend_com_wsdl_addOrUpdateMarkerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addOrUpdateMarkerResponse'] = backend_com_wsdl_addOrUpdateMarkerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}treePart'] = backend_com_wsdl_treePart_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}treePart'] = backend_com_wsdl_treePart_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}updateHtmlResponse'] = backend_com_wsdl_updateHtmlResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}updateHtmlResponse'] = backend_com_wsdl_updateHtmlResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getQuestInstance'] = backend_com_wsdl_getQuestInstance_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getQuestInstance'] = backend_com_wsdl_getQuestInstance_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}addHtml'] = backend_com_wsdl_addHtml_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}addHtml'] = backend_com_wsdl_addHtml_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}deleteQuestResponse'] = backend_com_wsdl_deleteQuestResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}deleteQuestResponse'] = backend_com_wsdl_deleteQuestResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}card'] = backend_com_wsdl_card_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}card'] = backend_com_wsdl_card_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}action'] = backend_com_wsdl_action_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}action'] = backend_com_wsdl_action_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}login'] = backend_com_wsdl_login_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}login'] = backend_com_wsdl_login_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}registerResponse'] = backend_com_wsdl_registerResponse_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}registerResponse'] = backend_com_wsdl_registerResponse_deserialize;
    this.globalElementSerializers['{http://backend.com/wsdl}getAllActions'] = backend_com_wsdl_getAllActions_serialize;
    this.globalElementDeserializers['{http://backend.com/wsdl}getAllActions'] = backend_com_wsdl_getAllActions_deserialize;
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
function backend_com_wsdl_setTreePartOpened_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_setTreePartOpenedResponse_deserializeResponse');
     responseObject = backend_com_wsdl_setTreePartOpenedResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.setTreePartOpened_onsuccess = backend_com_wsdl_setTreePartOpened_op_onsuccess;

function backend_com_wsdl_setTreePartOpened_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.setTreePartOpened_onerror = backend_com_wsdl_setTreePartOpened_op_onerror;

//
// Operation {http://backend.com/wsdl}setTreePartOpened
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}boolean//
function backend_com_wsdl_setTreePartOpened_op(successCallback, errorCallback, arg0, arg1) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = arg0;
    args[1] = arg1;
    xml = this.setTreePartOpened_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.setTreePartOpened_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.setTreePartOpened_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.setTreePartOpened = backend_com_wsdl_setTreePartOpened_op;

function backend_com_wsdl_setTreePartOpened_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_setTreePartOpened();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:setTreePartOpened', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.setTreePartOpened_serializeInput = backend_com_wsdl_setTreePartOpened_serializeInput;

function backend_com_wsdl_setTreePartOpenedResponse_deserializeResponse(cxfjsutils, partElement) {
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
function backend_com_wsdl_deleteCard_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_deleteCardResponse_deserializeResponse');
     responseObject = backend_com_wsdl_deleteCardResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.deleteCard_onsuccess = backend_com_wsdl_deleteCard_op_onsuccess;

function backend_com_wsdl_deleteCard_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.deleteCard_onerror = backend_com_wsdl_deleteCard_op_onerror;

//
// Operation {http://backend.com/wsdl}deleteCard
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_deleteCard_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.deleteCard_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.deleteCard_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.deleteCard_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.deleteCard = backend_com_wsdl_deleteCard_op;

function backend_com_wsdl_deleteCard_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_deleteCard();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:deleteCard', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.deleteCard_serializeInput = backend_com_wsdl_deleteCard_serializeInput;

function backend_com_wsdl_deleteCardResponse_deserializeResponse(cxfjsutils, partElement) {
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
function backend_com_wsdl_deleteAction_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_deleteActionResponse_deserializeResponse');
     responseObject = backend_com_wsdl_deleteActionResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.deleteAction_onsuccess = backend_com_wsdl_deleteAction_op_onsuccess;

function backend_com_wsdl_deleteAction_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.deleteAction_onerror = backend_com_wsdl_deleteAction_op_onerror;

//
// Operation {http://backend.com/wsdl}deleteAction
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_deleteAction_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.deleteAction_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.deleteAction_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.deleteAction_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.deleteAction = backend_com_wsdl_deleteAction_op;

function backend_com_wsdl_deleteAction_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_deleteAction();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:deleteAction', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.deleteAction_serializeInput = backend_com_wsdl_deleteAction_serializeInput;

function backend_com_wsdl_deleteActionResponse_deserializeResponse(cxfjsutils, partElement) {
}
function backend_com_wsdl_updateCard_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_updateCardResponse_deserializeResponse');
     responseObject = backend_com_wsdl_updateCardResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.updateCard_onsuccess = backend_com_wsdl_updateCard_op_onsuccess;

function backend_com_wsdl_updateCard_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.updateCard_onerror = backend_com_wsdl_updateCard_op_onerror;

//
// Operation {http://backend.com/wsdl}updateCard
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_card
//
function backend_com_wsdl_updateCard_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.updateCard_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.updateCard_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.updateCard_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.updateCard = backend_com_wsdl_updateCard_op;

function backend_com_wsdl_updateCard_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_updateCard();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:updateCard', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.updateCard_serializeInput = backend_com_wsdl_updateCard_serializeInput;

function backend_com_wsdl_updateCardResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_updateCardResponse_deserialize (cxfjsutils, partElement);

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
function backend_com_wsdl_getAllActionsOfCardType_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_getAllActionsOfCardTypeResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getAllActionsOfCardTypeResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getAllActionsOfCardType_onsuccess = backend_com_wsdl_getAllActionsOfCardType_op_onsuccess;

function backend_com_wsdl_getAllActionsOfCardType_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.getAllActionsOfCardType_onerror = backend_com_wsdl_getAllActionsOfCardType_op_onerror;

//
// Operation {http://backend.com/wsdl}getAllActionsOfCardType
// Wrapped operation.
// parameter arg0
// - simple type {http://backend.com/wsdl}cardType//
function backend_com_wsdl_getAllActionsOfCardType_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.getAllActionsOfCardType_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getAllActionsOfCardType_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getAllActionsOfCardType_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getAllActionsOfCardType = backend_com_wsdl_getAllActionsOfCardType_op;

function backend_com_wsdl_getAllActionsOfCardType_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getAllActionsOfCardType();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getAllActionsOfCardType', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getAllActionsOfCardType_serializeInput = backend_com_wsdl_getAllActionsOfCardType_serializeInput;

function backend_com_wsdl_getAllActionsOfCardTypeResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getAllActionsOfCardTypeResponse_deserialize (cxfjsutils, partElement);

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
function backend_com_wsdl_updateEditorQuest_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_updateEditorQuestResponse_deserializeResponse');
     responseObject = backend_com_wsdl_updateEditorQuestResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.updateEditorQuest_onsuccess = backend_com_wsdl_updateEditorQuest_op_onsuccess;

function backend_com_wsdl_updateEditorQuest_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.updateEditorQuest_onerror = backend_com_wsdl_updateEditorQuest_op_onerror;

//
// Operation {http://backend.com/wsdl}updateEditorQuest
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_editorQuest
//
function backend_com_wsdl_updateEditorQuest_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.updateEditorQuest_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.updateEditorQuest_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.updateEditorQuest_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.updateEditorQuest = backend_com_wsdl_updateEditorQuest_op;

function backend_com_wsdl_updateEditorQuest_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_updateEditorQuest();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:updateEditorQuest', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.updateEditorQuest_serializeInput = backend_com_wsdl_updateEditorQuest_serializeInput;

function backend_com_wsdl_updateEditorQuestResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_updateEditorQuestResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_updateUserAnsweredQuestionsCount_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_updateUserAnsweredQuestionsCountResponse_deserializeResponse');
     responseObject = backend_com_wsdl_updateUserAnsweredQuestionsCountResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.updateUserAnsweredQuestionsCount_onsuccess = backend_com_wsdl_updateUserAnsweredQuestionsCount_op_onsuccess;

function backend_com_wsdl_updateUserAnsweredQuestionsCount_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.updateUserAnsweredQuestionsCount_onerror = backend_com_wsdl_updateUserAnsweredQuestionsCount_op_onerror;

//
// Operation {http://backend.com/wsdl}updateUserAnsweredQuestionsCount
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_updateUserAnsweredQuestionsCount_op(successCallback, errorCallback, arg0, arg1) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = arg0;
    args[1] = arg1;
    xml = this.updateUserAnsweredQuestionsCount_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.updateUserAnsweredQuestionsCount_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.updateUserAnsweredQuestionsCount_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.updateUserAnsweredQuestionsCount = backend_com_wsdl_updateUserAnsweredQuestionsCount_op;

function backend_com_wsdl_updateUserAnsweredQuestionsCount_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_updateUserAnsweredQuestionsCount();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:updateUserAnsweredQuestionsCount', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.updateUserAnsweredQuestionsCount_serializeInput = backend_com_wsdl_updateUserAnsweredQuestionsCount_serializeInput;

function backend_com_wsdl_updateUserAnsweredQuestionsCountResponse_deserializeResponse(cxfjsutils, partElement) {
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
// - Object constructor is backend_com_wsdl_htmlObject
//
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
function backend_com_wsdl_updateUserTaskCount_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_updateUserTaskCountResponse_deserializeResponse');
     responseObject = backend_com_wsdl_updateUserTaskCountResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.updateUserTaskCount_onsuccess = backend_com_wsdl_updateUserTaskCount_op_onsuccess;

function backend_com_wsdl_updateUserTaskCount_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.updateUserTaskCount_onerror = backend_com_wsdl_updateUserTaskCount_op_onerror;

//
// Operation {http://backend.com/wsdl}updateUserTaskCount
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_updateUserTaskCount_op(successCallback, errorCallback, arg0, arg1) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = arg0;
    args[1] = arg1;
    xml = this.updateUserTaskCount_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.updateUserTaskCount_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.updateUserTaskCount_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.updateUserTaskCount = backend_com_wsdl_updateUserTaskCount_op;

function backend_com_wsdl_updateUserTaskCount_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_updateUserTaskCount();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:updateUserTaskCount', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.updateUserTaskCount_serializeInput = backend_com_wsdl_updateUserTaskCount_serializeInput;

function backend_com_wsdl_updateUserTaskCountResponse_deserializeResponse(cxfjsutils, partElement) {
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
function backend_com_wsdl_addCard_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_addCardResponse_deserializeResponse');
     responseObject = backend_com_wsdl_addCardResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.addCard_onsuccess = backend_com_wsdl_addCard_op_onsuccess;

function backend_com_wsdl_addCard_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.addCard_onerror = backend_com_wsdl_addCard_op_onerror;

//
// Operation {http://backend.com/wsdl}addCard
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_card
//
function backend_com_wsdl_addCard_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.addCard_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.addCard_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.addCard_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.addCard = backend_com_wsdl_addCard_op;

function backend_com_wsdl_addCard_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_addCard();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:addCard', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.addCard_serializeInput = backend_com_wsdl_addCard_serializeInput;

function backend_com_wsdl_addCardResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_addCardResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_setQuestInstanceOfTreePart_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_setQuestInstanceOfTreePartResponse_deserializeResponse');
     responseObject = backend_com_wsdl_setQuestInstanceOfTreePartResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.setQuestInstanceOfTreePart_onsuccess = backend_com_wsdl_setQuestInstanceOfTreePart_op_onsuccess;

function backend_com_wsdl_setQuestInstanceOfTreePart_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.setQuestInstanceOfTreePart_onerror = backend_com_wsdl_setQuestInstanceOfTreePart_op_onerror;

//
// Operation {http://backend.com/wsdl}setQuestInstanceOfTreePart
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_setQuestInstanceOfTreePart_op(successCallback, errorCallback, arg0, arg1) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = arg0;
    args[1] = arg1;
    xml = this.setQuestInstanceOfTreePart_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.setQuestInstanceOfTreePart_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.setQuestInstanceOfTreePart_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.setQuestInstanceOfTreePart = backend_com_wsdl_setQuestInstanceOfTreePart_op;

function backend_com_wsdl_setQuestInstanceOfTreePart_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_setQuestInstanceOfTreePart();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:setQuestInstanceOfTreePart', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.setQuestInstanceOfTreePart_serializeInput = backend_com_wsdl_setQuestInstanceOfTreePart_serializeInput;

function backend_com_wsdl_setQuestInstanceOfTreePartResponse_deserializeResponse(cxfjsutils, partElement) {
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
function backend_com_wsdl_addOrUpdateMarker_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_addOrUpdateMarkerResponse_deserializeResponse');
     responseObject = backend_com_wsdl_addOrUpdateMarkerResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.addOrUpdateMarker_onsuccess = backend_com_wsdl_addOrUpdateMarker_op_onsuccess;

function backend_com_wsdl_addOrUpdateMarker_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.addOrUpdateMarker_onerror = backend_com_wsdl_addOrUpdateMarker_op_onerror;

//
// Operation {http://backend.com/wsdl}addOrUpdateMarker
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_marker
//
function backend_com_wsdl_addOrUpdateMarker_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.addOrUpdateMarker_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.addOrUpdateMarker_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.addOrUpdateMarker_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.addOrUpdateMarker = backend_com_wsdl_addOrUpdateMarker_op;

function backend_com_wsdl_addOrUpdateMarker_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_addOrUpdateMarker();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:addOrUpdateMarker', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.addOrUpdateMarker_serializeInput = backend_com_wsdl_addOrUpdateMarker_serializeInput;

function backend_com_wsdl_addOrUpdateMarkerResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_addOrUpdateMarkerResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_updateUserKmWalked_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_updateUserKmWalkedResponse_deserializeResponse');
     responseObject = backend_com_wsdl_updateUserKmWalkedResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.updateUserKmWalked_onsuccess = backend_com_wsdl_updateUserKmWalked_op_onsuccess;

function backend_com_wsdl_updateUserKmWalked_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.updateUserKmWalked_onerror = backend_com_wsdl_updateUserKmWalked_op_onerror;

//
// Operation {http://backend.com/wsdl}updateUserKmWalked
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}double//
function backend_com_wsdl_updateUserKmWalked_op(successCallback, errorCallback, arg0, arg1) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = arg0;
    args[1] = arg1;
    xml = this.updateUserKmWalked_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.updateUserKmWalked_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.updateUserKmWalked_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.updateUserKmWalked = backend_com_wsdl_updateUserKmWalked_op;

function backend_com_wsdl_updateUserKmWalked_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_updateUserKmWalked();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:updateUserKmWalked', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.updateUserKmWalked_serializeInput = backend_com_wsdl_updateUserKmWalked_serializeInput;

function backend_com_wsdl_updateUserKmWalkedResponse_deserializeResponse(cxfjsutils, partElement) {
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
function backend_com_wsdl_addAction_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_addActionResponse_deserializeResponse');
     responseObject = backend_com_wsdl_addActionResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.addAction_onsuccess = backend_com_wsdl_addAction_op_onsuccess;

function backend_com_wsdl_addAction_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.addAction_onerror = backend_com_wsdl_addAction_op_onerror;

//
// Operation {http://backend.com/wsdl}addAction
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_action
//
function backend_com_wsdl_addAction_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.addAction_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.addAction_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.addAction_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.addAction = backend_com_wsdl_addAction_op;

function backend_com_wsdl_addAction_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_addAction();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:addAction', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.addAction_serializeInput = backend_com_wsdl_addAction_serializeInput;

function backend_com_wsdl_addActionResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_addActionResponse_deserialize (cxfjsutils, partElement);

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
function backend_com_wsdl_updateUserWonFightsCount_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_updateUserWonFightsCountResponse_deserializeResponse');
     responseObject = backend_com_wsdl_updateUserWonFightsCountResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.updateUserWonFightsCount_onsuccess = backend_com_wsdl_updateUserWonFightsCount_op_onsuccess;

function backend_com_wsdl_updateUserWonFightsCount_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.updateUserWonFightsCount_onerror = backend_com_wsdl_updateUserWonFightsCount_op_onerror;

//
// Operation {http://backend.com/wsdl}updateUserWonFightsCount
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_updateUserWonFightsCount_op(successCallback, errorCallback, arg0, arg1) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = arg0;
    args[1] = arg1;
    xml = this.updateUserWonFightsCount_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.updateUserWonFightsCount_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.updateUserWonFightsCount_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.updateUserWonFightsCount = backend_com_wsdl_updateUserWonFightsCount_op;

function backend_com_wsdl_updateUserWonFightsCount_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_updateUserWonFightsCount();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:updateUserWonFightsCount', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.updateUserWonFightsCount_serializeInput = backend_com_wsdl_updateUserWonFightsCount_serializeInput;

function backend_com_wsdl_updateUserWonFightsCountResponse_deserializeResponse(cxfjsutils, partElement) {
}
function backend_com_wsdl_addEditorQuest_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_addEditorQuestResponse_deserializeResponse');
     responseObject = backend_com_wsdl_addEditorQuestResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.addEditorQuest_onsuccess = backend_com_wsdl_addEditorQuest_op_onsuccess;

function backend_com_wsdl_addEditorQuest_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.addEditorQuest_onerror = backend_com_wsdl_addEditorQuest_op_onerror;

//
// Operation {http://backend.com/wsdl}addEditorQuest
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_editorQuest
//
function backend_com_wsdl_addEditorQuest_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.addEditorQuest_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.addEditorQuest_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.addEditorQuest_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.addEditorQuest = backend_com_wsdl_addEditorQuest_op;

function backend_com_wsdl_addEditorQuest_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_addEditorQuest();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:addEditorQuest', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.addEditorQuest_serializeInput = backend_com_wsdl_addEditorQuest_serializeInput;

function backend_com_wsdl_addEditorQuestResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_addEditorQuestResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_updateUserFoundLocationsCount_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_updateUserFoundLocationsCountResponse_deserializeResponse');
     responseObject = backend_com_wsdl_updateUserFoundLocationsCountResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.updateUserFoundLocationsCount_onsuccess = backend_com_wsdl_updateUserFoundLocationsCount_op_onsuccess;

function backend_com_wsdl_updateUserFoundLocationsCount_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.updateUserFoundLocationsCount_onerror = backend_com_wsdl_updateUserFoundLocationsCount_op_onerror;

//
// Operation {http://backend.com/wsdl}updateUserFoundLocationsCount
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long// parameter arg1
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_updateUserFoundLocationsCount_op(successCallback, errorCallback, arg0, arg1) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(2);
    args[0] = arg0;
    args[1] = arg1;
    xml = this.updateUserFoundLocationsCount_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.updateUserFoundLocationsCount_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.updateUserFoundLocationsCount_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.updateUserFoundLocationsCount = backend_com_wsdl_updateUserFoundLocationsCount_op;

function backend_com_wsdl_updateUserFoundLocationsCount_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_updateUserFoundLocationsCount();
    wrapperObj.setArg0(args[0]);
    wrapperObj.setArg1(args[1]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:updateUserFoundLocationsCount', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.updateUserFoundLocationsCount_serializeInput = backend_com_wsdl_updateUserFoundLocationsCount_serializeInput;

function backend_com_wsdl_updateUserFoundLocationsCountResponse_deserializeResponse(cxfjsutils, partElement) {
}
function backend_com_wsdl_getEditorQuests_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_getEditorQuestsResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getEditorQuestsResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getEditorQuests_onsuccess = backend_com_wsdl_getEditorQuests_op_onsuccess;

function backend_com_wsdl_getEditorQuests_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.getEditorQuests_onerror = backend_com_wsdl_getEditorQuests_op_onerror;

//
// Operation {http://backend.com/wsdl}getEditorQuests
// Wrapped operation.
// parameter arg0
// - array
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_getEditorQuests_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.getEditorQuests_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getEditorQuests_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getEditorQuests_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getEditorQuests = backend_com_wsdl_getEditorQuests_op;

function backend_com_wsdl_getEditorQuests_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getEditorQuests();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getEditorQuests', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getEditorQuests_serializeInput = backend_com_wsdl_getEditorQuests_serializeInput;

function backend_com_wsdl_getEditorQuestsResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getEditorQuestsResponse_deserialize (cxfjsutils, partElement);

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
function backend_com_wsdl_addOrUpdateTreePart_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_addOrUpdateTreePartResponse_deserializeResponse');
     responseObject = backend_com_wsdl_addOrUpdateTreePartResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.addOrUpdateTreePart_onsuccess = backend_com_wsdl_addOrUpdateTreePart_op_onsuccess;

function backend_com_wsdl_addOrUpdateTreePart_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.addOrUpdateTreePart_onerror = backend_com_wsdl_addOrUpdateTreePart_op_onerror;

//
// Operation {http://backend.com/wsdl}addOrUpdateTreePart
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_treePart
//
function backend_com_wsdl_addOrUpdateTreePart_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.addOrUpdateTreePart_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.addOrUpdateTreePart_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.addOrUpdateTreePart_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.addOrUpdateTreePart = backend_com_wsdl_addOrUpdateTreePart_op;

function backend_com_wsdl_addOrUpdateTreePart_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_addOrUpdateTreePart();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:addOrUpdateTreePart', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.addOrUpdateTreePart_serializeInput = backend_com_wsdl_addOrUpdateTreePart_serializeInput;

function backend_com_wsdl_addOrUpdateTreePartResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_addOrUpdateTreePartResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_getEditorQuest_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_getEditorQuestResponse_deserializeResponse');
     responseObject = backend_com_wsdl_getEditorQuestResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.getEditorQuest_onsuccess = backend_com_wsdl_getEditorQuest_op_onsuccess;

function backend_com_wsdl_getEditorQuest_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.getEditorQuest_onerror = backend_com_wsdl_getEditorQuest_op_onerror;

//
// Operation {http://backend.com/wsdl}getEditorQuest
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}long//
function backend_com_wsdl_getEditorQuest_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.getEditorQuest_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.getEditorQuest_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.getEditorQuest_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.getEditorQuest = backend_com_wsdl_getEditorQuest_op;

function backend_com_wsdl_getEditorQuest_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_getEditorQuest();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:getEditorQuest', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.getEditorQuest_serializeInput = backend_com_wsdl_getEditorQuest_serializeInput;

function backend_com_wsdl_getEditorQuestResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_getEditorQuestResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function backend_com_wsdl_updateAction_op_onsuccess(client, responseXml) {
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
     this.jsutils.trace('calling backend_com_wsdl_updateActionResponse_deserializeResponse');
     responseObject = backend_com_wsdl_updateActionResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

backend_com_wsdl_IBackend.prototype.updateAction_onsuccess = backend_com_wsdl_updateAction_op_onsuccess;

function backend_com_wsdl_updateAction_op_onerror(client) {
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

backend_com_wsdl_IBackend.prototype.updateAction_onerror = backend_com_wsdl_updateAction_op_onerror;

//
// Operation {http://backend.com/wsdl}updateAction
// Wrapped operation.
// parameter arg0
// - Object constructor is backend_com_wsdl_action
//
function backend_com_wsdl_updateAction_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.updateAction_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.updateAction_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.updateAction_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

backend_com_wsdl_IBackend.prototype.updateAction = backend_com_wsdl_updateAction_op;

function backend_com_wsdl_updateAction_serializeInput(cxfjsutils, args) {
    var wrapperObj = new backend_com_wsdl_updateAction();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://backend.com/wsdl' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:updateAction', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

backend_com_wsdl_IBackend.prototype.updateAction_serializeInput = backend_com_wsdl_updateAction_serializeInput;

function backend_com_wsdl_updateActionResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = backend_com_wsdl_updateActionResponse_deserialize (cxfjsutils, partElement);

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
function backend_com_wsdl_IBackend_backend_com_wsdl_BackendPort () {
  this.url = 'http://192.168.178.67:8080/Backend/webservices/Backend';
}
backend_com_wsdl_IBackend_backend_com_wsdl_BackendPort.prototype = new backend_com_wsdl_IBackend;
