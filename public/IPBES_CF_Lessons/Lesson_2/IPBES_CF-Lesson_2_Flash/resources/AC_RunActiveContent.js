//################################################
// Utility functions
//################################################

// Flash Player Version Detection - Rev 1.5
// Detect Client Browser type
// Copyright(c) 2005-2006 Adobe Macromedia Software, LLC. All rights reserved.
var isIE  = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
var isWin = (navigator.appVersion.toLowerCase().indexOf("win") != -1) ? true : false;
var isOpera = (navigator.userAgent.indexOf("Opera") != -1) ? true : false;
var SBIFR_PREFIX="sb3_ifr_";

function ControlVersion()
{
	var version;
	var axo;
	var e;

	// NOTE : new ActiveXObject(strFoo) throws an exception if strFoo isn't in the registry

	try {
		// version will be set for 7.X or greater players
		axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
		version = axo.GetVariable("$version");
	} catch (e) {
	}

	if (!version)
	{
		try {
			// version will be set for 6.X players only
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
			
			// installed player is some revision of 6.0
			// GetVariable("$version") crashes for versions 6.0.22 through 6.0.29,
			// so we have to be careful. 
			
			// default to the first public version
			version = "WIN 6,0,21,0";

			// throws if AllowScripAccess does not exist (introduced in 6.0r47)		
			axo.AllowScriptAccess = "always";

			// safe to call for 6.0r47 or greater
			version = axo.GetVariable("$version");

		} catch (e) {
		}
	}

	if (!version)
	{
		try {
			// version will be set for 4.X or 5.X player
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
			version = axo.GetVariable("$version");
		} catch (e) {
		}
	}

	if (!version)
	{
		try {
			// version will be set for 3.X player
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");
			version = "WIN 3,0,18,0";
		} catch (e) {
		}
	}

	if (!version)
	{
		try {
			// version will be set for 2.X player
			axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
			version = "WIN 2,0,0,11";
		} catch (e) {
			version = -1;
		}
	}
	
	return version;
}

// JavaScript helper required to detect Flash Player PlugIn version information
function GetSwfVer(){
	// NS/Opera version >= 3 check for Flash plugin in plugin array
	var flashVer = -1;
	
	if (navigator.plugins != null && navigator.plugins.length > 0) {
		if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
			var swVer2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
			var flashDescription = navigator.plugins["Shockwave Flash" + swVer2].description;			
			var descArray = flashDescription.split(" ");
			var tempArrayMajor = descArray[2].split(".");
			var versionMajor = tempArrayMajor[0];
			var versionMinor = tempArrayMajor[1];
			if ( descArray[3] != "" ) {
				tempArrayMinor = descArray[3].split("r");
			} else {
				tempArrayMinor = descArray[4].split("r");
			}
			var versionRevision = tempArrayMinor[1] > 0 ? tempArrayMinor[1] : 0;
			var flashVer = versionMajor + "." + versionMinor + "." + versionRevision;
		}
	}
	// MSN/WebTV 2.6 supports Flash 4
	else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.6") != -1) flashVer = 4;
	// WebTV 2.5 supports Flash 3
	else if (navigator.userAgent.toLowerCase().indexOf("webtv/2.5") != -1) flashVer = 3;
	// older WebTV supports Flash 2
	else if (navigator.userAgent.toLowerCase().indexOf("webtv") != -1) flashVer = 2;
	else if ( isIE && isWin && !isOpera ) {
		flashVer = ControlVersion();
	}	
	return flashVer;
}

// When called with reqMajorVer, reqMinorVer, reqRevision returns true if that version or greater is available
function DetectFlashVer(reqMajorVer, reqMinorVer, reqRevision)
{
	versionStr = GetSwfVer();
	if (versionStr == -1 ) {
		return false;
	} else if (versionStr != 0) {
		if(isIE && isWin && !isOpera) {
			// Given "WIN 2,0,0,11"
			tempArray         = versionStr.split(" "); 	// ["WIN", "2,0,0,11"]
			tempString        = tempArray[1];			// "2,0,0,11"
			versionArray      = tempString.split(",");	// ['2', '0', '0', '11']
		} else {
			versionArray      = versionStr.split(".");
		}
		var versionMajor      = versionArray[0];
		var versionMinor      = versionArray[1];
		var versionRevision   = versionArray[2];

        	// is the major.revision >= requested major.revision AND the minor version >= requested minor
		if (versionMajor > parseFloat(reqMajorVer)) {
			return true;
		} else if (versionMajor == parseFloat(reqMajorVer)) {
			if (versionMinor > parseFloat(reqMinorVer))
				return true;
			else if (versionMinor == parseFloat(reqMinorVer)) {
				if (versionRevision >= parseFloat(reqRevision))
					return true;
			}
		}
		return false;
	}
}

function AC_AddExtension(src, ext)
{
  if (src.indexOf('?') != -1)
    return src.replace(/\?/, ext+'?'); 
  else
    return src + ext;
}

function AC_Generateobj(objAttrs, params, embedAttrs) 
{ 
    var str = '';
    if (isIE && isWin && !isOpera)
    {
  		str += '<object ';
  		for (var i in objAttrs)
  			str += i + '="' + objAttrs[i] + '" ';
  		for (var i in params)
  			str += '><param name="' + i + '" value="' + params[i] + '" /> ';
  		str += '></object>';
    } else {
  		str += '<embed ';
  		for (var i in embedAttrs)
  			str += i + '="' + embedAttrs[i] + '" ';
  		str += '> </embed>';
    }

    document.write(str);
}

function AC_FL_RunContent(){
  var ret = 
    AC_GetArgs
    (  arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
     , "application/x-shockwave-flash"
    );
  AC_Generateobj(ret.objAttrs, ret.params, ret.embedAttrs);
}


function AC_GenerateobjTag(objAttrs, params, embedAttrs) 
{ 
    var str = '';
    if (isIE && isWin && !isOpera)
    {
  		str += '<object ';
  		for (var i in objAttrs)
  			str += i + '="' + objAttrs[i] + '" ';
  		for (var i in params)
  			str += '><param name="' + i + '" value="' + params[i] + '" /> ';
  		str += '></object>';
    } else {
  		str += '<embed ';
  		for (var i in embedAttrs)
  			str += i + '="' + embedAttrs[i] + '" ';
  		str += '> </embed>';
    }
		return str;
}

function AC_FL_GetContentTag() {
	  var ret = 
    AC_GetArgs
    (  arguments, ".swf", "movie", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
     , "application/x-shockwave-flash"
    );
  return AC_GenerateobjTag(ret.objAttrs, ret.params, ret.embedAttrs);
}

function AC_GetArgs(args, ext, srcParamName, classid, mimeType){
  var ret = new Object();
  ret.embedAttrs = new Object();
  ret.params = new Object();
  ret.objAttrs = new Object();
  for (var i=0; i < args.length; i=i+2){
    var currArg = args[i].toLowerCase();    

    switch (currArg){	
      case "classid":
        break;
      case "pluginspage":
        ret.embedAttrs[args[i]] = args[i+1];
        break;
      case "src":
      case "movie":	
        args[i+1] = AC_AddExtension(args[i+1], ext);
        ret.embedAttrs["src"] = args[i+1];
        ret.params[srcParamName] = args[i+1];
        break;
      case "onafterupdate":
      case "onbeforeupdate":
      case "onblur":
      case "oncellchange":
      case "onclick":
      case "ondblClick":
      case "ondrag":
      case "ondragend":
      case "ondragenter":
      case "ondragleave":
      case "ondragover":
      case "ondrop":
      case "onfinish":
      case "onfocus":
      case "onhelp":
      case "onmousedown":
      case "onmouseup":
      case "onmouseover":
      case "onmousemove":
      case "onmouseout":
      case "onkeypress":
      case "onkeydown":
      case "onkeyup":
      case "onload":
      case "onlosecapture":
      case "onpropertychange":
      case "onreadystatechange":
      case "onrowsdelete":
      case "onrowenter":
      case "onrowexit":
      case "onrowsinserted":
      case "onstart":
      case "onscroll":
      case "onbeforeeditfocus":
      case "onactivate":
      case "onbeforedeactivate":
      case "ondeactivate":
      case "type":
      case "codebase":
      case "id":
        ret.objAttrs[args[i]] = args[i+1];
        break;
      case "width":
      case "height":
      case "align":
      case "vspace": 
      case "hspace":
      case "class":
      case "title":
      case "accesskey":
      case "name":
      case "tabindex":
        ret.embedAttrs[args[i]] = ret.objAttrs[args[i]] = args[i+1];
        break;
      default:
        ret.embedAttrs[args[i]] = ret.params[args[i]] = args[i+1];
    }
  }
  ret.objAttrs["classid"] = classid;
  if (mimeType) ret.embedAttrs["type"] = mimeType;
  return ret;
}


// To use, simple do: Get_Cookie('cookie_name'); 
// replace cookie_name with the real cookie name, '' are required
function Get_Cookie( check_name ) {
	// first we'll split this cookie up into name/value pairs
	// note: document.cookie only returns name=value, not the other components
	var a_all_cookies = document.cookie.split( ';' );
	var a_temp_cookie = '';
	var cookie_name = '';
	var cookie_value = '';
	var b_cookie_found = false; // set boolean t/f default f
	
	for ( i = 0; i < a_all_cookies.length; i++ )
	{
		// now we'll split apart each name=value pair
		a_temp_cookie = a_all_cookies[i].split( '=' );
		
		
		// and trim left/right whitespace while we're at it
		cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, '');
	
		// if the extracted name matches passed check_name
		if ( cookie_name == check_name )
		{
			b_cookie_found = true;
			// we need to handle case where cookie has no value but exists (no = sign, that is):
			if ( a_temp_cookie.length > 1 )
			{
				cookie_value = unescape( a_temp_cookie[1].replace(/^\s+|\s+$/g, '') );
			}
			// note that in cases where cookie is initialized but no value, null is returned
			return cookie_value;
			break;
		}
		a_temp_cookie = null;
		cookie_name = '';
	}
	if ( !b_cookie_found ) 
	{
		return '';
	}
}

/*
only the first 2 parameters are required, the cookie name, the cookie
value. Cookie time is in milliseconds, so the below expires will make the 
number you pass in the Set_Cookie function call the number of days the cookie
lasts, if you want it to be hours or minutes, just get rid of 24 and 60.

Generally you don't need to worry about domain, path or secure for most applications
so unless you need that, leave those parameters blank in the function call.
*/
function Set_Cookie( name, value, expires, path, domain, secure ) {
	// set time, it's in milliseconds
	var today = new Date();
	today.setTime( today.getTime() );
	// if the expires variable is set, make the correct expires time, the
	// current script below will set it for x number of days, to make it
	// for hours, delete * 24, for minutes, delete * 60 * 24
	if ( expires )
	{
		expires = expires * 1000 * 60 * 60 * 24;
	}
	//alert( 'today ' + today.toGMTString() );// this is for testing purpose only
	var expires_date = new Date( today.getTime() + (expires) );
	//alert('expires ' + expires_date.toGMTString());// this is for testing purposes only

	document.cookie = name + "=" +escape( value ) +
		( ( expires ) ? ";expires=" + expires_date.toGMTString() : "" ) + //expires.toGMTString()
		( ( path ) ? ";path=" + path : "" ) + 
		( ( domain ) ? ";domain=" + domain : "" ) +
		( ( secure ) ? ";secure" : "" );
}

// this deletes the cookie when called
function Delete_Cookie( name, path, domain ) {
	if ( Get_Cookie( name ) ) document.cookie = name + "=" +
			( ( path ) ? ";path=" + path : "") +
			( ( domain ) ? ";domain=" + domain : "" ) +
			";expires=Thu, 01-Jan-1970 00:00:01 GMT";
}

var resize_handler;
window.onresize = WindowResize;

function WindowResize() {
	if (typeof SCALEMODE==='undefined') return;
	if (SCALEMODE!=0) {
		clearTimeout(resize_handler);
		resize_handler=setTimeout("resizeIFrameObjs()",200);
	}
}

//################################################
// SmartBuilder functions
//################################################
function linkHandler(s) {
	//alert("linkHandler: "+s);
	window.document.tsunamiplayer.SetVariable("/:callbackHyperlink",s);
}

//workaround: new version of flash players (above 9.0.45) turns any hyperlink function call into lower case
function linkhandler(s) {
	window.document.tsunamiplayer.SetVariable("/:callbackHyperlink",s);
}

function openAsset(url,w,h) {
	var mywin;
	if(w == null || w == 0 || h == null || h == 0 || w=="null" || h=="null")
	{
		
		mywin=window.open(url,'assetWindow','resizable=1,scrollbars=yes,menubar=0,toolbar=0,location=0,directories=0,status=0,copyhistory=0,width=800,height=600,fullscreen=0');
	}
	else
	{
		mywin=window.open(url,'assetWindow','resizable=1,scrollbars=yes,menubar=0,toolbar=0,location=0,directories=0,status=0,copyhistory=0,fullscreen=0,width='+w+',height='+h);
	}
	if (mywin!=null) mywin.focus();
}


function openReportWindow(url,values) 
{		
	this.reportvalues=values;
	reportWindow=window.open(url,'report','resizable=1,scrollbars=yes,menubar=0,toolbar=0,location=0,directories=0,status=0,copyhistory=0,fullscreen=0,width=760,height=600'+',top='+(screen.availHeight-660)/2+',left='+(screen.availWidth-500)/2);
	if (reportWindow!=null) 
	{
		reportWindow.focus();
	}	
}

function reportWindowReady(win)
{
	win.setReportValues(this.reportvalues);
}

//No callback. Only send data to server.
function invokeURLCall(url,postmode) 
{
	if (postmode!=null && postmode=="1") {
  	return postData(url,postmode,false);
  }
	var now = new Date();      // Grab the current date.
	if (url.indexOf("?")>=0) {
		url=	url+"&rand="+now.getTime();
	}else {
		url=	url+"?rand="+now.getTime();
	}
    //Attach the script to the DOM.
    var element = document.createElement('script');
    element.type = 'text/javascript';
    element.src = url;
    element.setAttribute('class', 'Dsr');
    document.getElementsByTagName('head')[0].appendChild(element);
}

function openWindow(url,w,h,hastoolbar) {

	var mywin=null;
	hastoolbar="1";
  if (url.indexOf('http://help.smartbuilder.com/tutorials/templatecatalog')==0) {
  	if ((typeof window.getTemplateCatalogURL)!=undefined && (typeof window.getTemplateCatalogURL)!='undefined') {
  		url=getTemplateCatalogURL();
  	}else {
	  	url='http://help.smartbuilder.com/tutorials/templatecatalog2/player.html';
  	}
  }
	if (hastoolbar=="false" || hastoolbar==false) {
		hastoolbar="0";
	}
	if(w == null || w == 0 || h == null || h == 0 || w=="null" || h=="null")
	{
		mywin=window.open(url,"_blank",'top=0,left=0,resizable=1,scrollbars=yes, menubar=1,toolbar='+hastoolbar+',location=1,directories=0,status=0,copyhistory=0,fullscreen=0');
	}
	else
	{
		mywin=window.open(url,"_blank",'toolbar='+hastoolbar+',resizable=1,width='+w+',height='+h);
	}
	if (mywin!=undefined) {
		mywin.focus();
	}
	var upper=url.toUpperCase();
	if (upper.indexOf("MAILTO:")==0 && mywin!=null) {
		mywin.close();
	}
}



function closeIframe() {
	window.parent.deleteIframe(window.name.substring(SBIFR_PREFIX.length));
}

  function retrieveURL(url,postmode) {
  	if (postmode!=null && postmode=="1") {
  		return postData(url,postmode,true);
  	}
	var now = new Date(); 
  	if (url.indexOf("?")>=0) {
		url=	url+"&rand="+now.getTime();
	}else {
		url=	url+"?rand="+now.getTime();
	}
    if (window.XMLHttpRequest) { // Non-IE browsers
      req = new XMLHttpRequest();
      req.onreadystatechange = processStateChange;
      try {
        req.open("GET", url, true);
	req.send(null);
      } catch (e) {
        alert("Server Request Problem: " + e);
      }
    } else if (window.ActiveXObject) { // IE
      req = new ActiveXObject("Microsoft.XMLHTTP");
      if (req) {
        req.onreadystatechange = processStateChange;
        try {
        req.open("GET", url, true);
        req.send();
        }catch (e) {
	        alert("Server Request Problem: " + e);
        }
      }
    }
  }

var req; 
 
    function postData(url,blocking) {
	var now = new Date(); 
  	if (url.indexOf("?")>=0) {
		url=	url+"&rand="+now.getTime();
	}else {
		url=	url+"?rand="+now.getTime();
	}
	
	var reqparts=url.split("?");

    	if (window.XMLHttpRequest) { // Non-IE browsers
      		req = new XMLHttpRequest();  
    	} else if (window.ActiveXObject) { // IE
      		req = new ActiveXObject("Microsoft.XMLHTTP");
        }

	try {
		if (blocking!=false) {
        	req.onreadystatechange = processStateChange;
		}
        	req.open("POST", reqparts[0], true);
		req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		req.setRequestHeader("Content-length", reqparts[1].length);
		req.setRequestHeader("Connection", "close");
		req.send(reqparts[1]);
        } catch (e) {
        	alert("Server Request Problem: " + e);
        }
  }

  function processStateChange() {
    if (req.readyState == 4) { // Complete
      if (req.status == 200 || req.statusText.toUpperCase()=="OK") { // OK response
	window.document.tsunamiplayer.invokeURL_Response(req.responseText);
      } else {
        alert("Server Response Problem: " + req.statusText);
      }
    }
  }  


function sbCloseWindow() {
	if (window.name.indexOf(SBIFR_PREFIX)==0) {
		closeIframe();
	}else {
		top.close();
	}
}

function displayIframe(iframeName, showmode) {
		var ifr = document.getElementById(SBIFR_PREFIX+iframeName);
    if (ifr!=undefined) {
			switch (showmode) {
				case "hide": {
				ifr.style.display='none';
				onOutgoingPlayerEvent("iframewidgetevent","hide",iframeName);
				break;
			}
			case "show": {
				ifr.style.display='block';
				onOutgoingPlayerEvent("iframewidgetevent","show",iframeName);
				break;
			}
		}
	}
}

/**
e.g. moveIframe('if2','20px','10px');
*/
function moveIframe(iframeName,x,y) {
		var ifr = document.getElementById(SBIFR_PREFIX+iframeName);
    if (ifr!=undefined) {
    	ifr.style.left=x;
			ifr.style.top=y;
    }
}

function deleteIframe(iframeName) {	
		var ifr = document.getElementById(SBIFR_PREFIX+iframeName);
    if (ifr!=undefined) {
       ifr.src="javascript:void(0)"
	   ifr.style.display='none';
	   setTimeout(function() { 
		    ifr.parentNode.removeChild(ifr);
		}, 1000);
    }
}

function getSWF(movieName) {
		if (navigator.appName.indexOf ("Microsoft") !=-1) 
	{
		return window[movieName]  
	}
	else 
	{
		return document[movieName]
	}
	
}

function resizeIFrameObj(iframeobj,notifyframe) {
	
	if (typeof SCALEMODE === 'undefined') return;
	
	var swfobj=getSWF("tsunamiplayer");
	var swfx = swfobj.offsetLeft;
	var swfy = swfobj.offsetTop;
	var swfh = swfobj.clientHeight;
	var swfw = swfobj.clientWidth;

	
	var xoffset=0;
	var yoffset=0;	
	var wratio=swfw/STAGEW;
	var hratio=swfh/STAGEH;
	var ratio=1;
	
	if (SCALEMODE!=0) {
	if (hratio < wratio)
	{
		ratio = hratio;
		xoffset = (swfw - (STAGEW * ratio)) / 2;
		xoffset=Math.round(xoffset)+swfx;
		yoffset=swfy;
	}
	else
	{
		ratio = wratio;
		yoffset = (swfh - (STAGEH * ratio)) / 2;
		yoffset=Math.round(yoffset)+swfy;
		xoffset=swfx;
	}
 }	else {
 	xoffset=swfx;
 	yoffset=swfy;
 	
}

	var els=iframeobj;
			
			var y=els.sb_y;
			var x=els.sb_x;
			var width=els.sb_w;
			var height=els.sb_h;
			if (SCALEMODE==1) {
				x=(parseInt(x)*ratio+xoffset)+"px";
				y=(parseInt(y)*ratio+yoffset)+"px";
				width=Math.round(ratio*width);
				height=Math.round(ratio*height);
			}else if (SCALEMODE==2) {
				x=(parseInt(x)*wratio+swfx)+"px";
				y=(parseInt(y)*hratio+swfy)+"px";
				width=Math.round(wratio*width);
				height=Math.round(hratio*height);		
			}else {
				x=(parseInt(x)+xoffset)+"px";
				y=(parseInt(y)+yoffset)+"px";				
			}
			
			if (SCALEMODE!=0) {
				    els.style.left=x;
    				els.style.top=y;
    				els.width=width;
    				els.height=height;
			}else {
				els.style.left=x;
    				els.style.top=y;
    	}
    	
    	if (notifyframe==true) {
    			onOutgoingPlayerEvent("iframewidgetevent","resize",els.sb_id,{w:els.width,h:els.height,visible:els.style.display=='block'});
    	}
    	
}


function resizeIFrameObjs() {
		var els=document.getElementById(main_anchor).getElementsByTagName('iframe');
	for (var i=0;i<els.length;i++) {
		if (els[i].id!=null && els[i].id.indexOf(SBIFR_PREFIX)==0) {
			resizeIFrameObj(els[i],true);
		}
	}
}


/**

scrolling: "auto", "no","yes"
border: "1" or "0"
e.g. createIframe("forum","http://www.suddenlysmart.com/forum",417,249,'48px','415px',"0","no","0");
*/
function createIframe(iframeName, src,width, height,x,y,border,scrolling,border) {
	
    var iframe;
    
    var isGraphic=false;
    var s=src.toLowerCase();
    if (/jpg$/.test(s) || /gif$/.test(s) || /png$/.test(s)) {
    	isGraphic=true;
    }
    
    if (document.createElement && (iframe = document.createElement('iframe'))) {
    iframe.name = iframe.id = SBIFR_PREFIX+iframeName;
    iframe.width = width;
    iframe.height = height;
    iframe.setAttribute("frameBorder", border); //IE workaround
    iframe.scrolling=scrolling;
    iframe.marginwidth=0;;
    iframe.marginheight=0; 
    iframe.vspace=0; 
    iframe.hspace=0; 
    iframe.style.position='absolute';
    iframe.style.left=x;
    iframe.style.top=y;
    iframe.style.margin='0px';
    iframe.style.padding='0px';
    iframe.style.display='block';
    iframe.style.position='absolute';
    iframe.style.PADDING="0px 0px 0px 0px";
    iframe.style.MARGIN= "0pt 0px 0px 0px";
    iframe.sb_y=y;
    iframe.sb_x=x;
    iframe.sb_id=iframeName;
    iframe.sb_w=width;
    iframe.sb_h=height;
    resizeIFrameObj(iframe);
    iframe.style.border= border;
    
    	    document.getElementById(main_anchor).appendChild(iframe);
	
setTimeout(function() {
	    iframe.src = unescape(src);
    document.getElementById(main_anchor).appendChild(iframe);
    if (isGraphic==true) {
    	var ifrm = (iframe.contentWindow) ? iframe.contentWindow : (iframe.contentDocument.document) ? iframe.contentDocument.document : iframe.contentDocument;
	ifrm.document.open();
	ifrm.document.write('<html><body style="margin:0px;" ><img  style="margin:0px;" src=\''+unescape(src)+'\'></body></html>');
	ifrm.document.close();
    }
},10);   
}
}

function setIframeContent(iframeName, src) {
		var ifr = document.getElementById(SBIFR_PREFIX+iframeName);
    if (ifr!=undefined) {
    		ifr.src=unescape(src);
    }
}


function goIframe(iframeName,n) {
			var ifr = document.getElementById(SBIFR_PREFIX+iframeName);
    if (ifr!=undefined) {
    	if (n=="0") {
    		ifr.src=ifr.src;
    	}else {
    		history.go(n);
			}
    }
}

function createIframeEmbedCode(iframeName,data) {
	setTimeout(function() {
	var ifr = document.getElementById(SBIFR_PREFIX+iframeName);
    if (ifr!=undefined) {
    	 var doc = ifr.contentDocument;
        if (doc == undefined || doc == null)
            doc = ifr.contentWindow.document;
        doc.open();
        doc.write(unescape(data));
        doc.close();      
    }
},20);
}

function loadjscssfile(filename, filetype,id){
 if (filetype=="js"){ //if filename is a external JavaScript file
  var fileref=document.createElement('script')
  fileref.setAttribute("type","text/javascript")
  fileref.setAttribute("src", filename)
  fileref.setAttribute("id",id);
 }
 else if (filetype=="css"){ //if filename is an external CSS file
  var fileref=document.createElement("link")
  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", filename)
  fileref.setAttribute("id",id);
 }
 if (typeof fileref!="undefined")
  document.getElementsByTagName("head")[0].appendChild(fileref)
}

function ga_function(accid,funcname,params) {
	if (document.getElementById('ga_js')==undefined) {
		var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
		loadjscssfile(gaJsHost + "google-analytics.com/ga.js", "js","ga_js");
	}

	if(typeof window._gat=="undefined") {
		setTimeout(function() {ga_function(accid,funcname,params);},200);
		return;
  }

	var pageTracker=undefined;
	try{
		pageTracker = _gat._getTracker(accid);
		if (window.sb3_gatrackers==undefined) {
			window.sb3_gatrackers=new Object();
			//pageTracker._trackPageview();
		}
  } catch(err) {
  	//alert("failed to init GA tracker. "+err);
  }
	
	if (funcname=="reportPageview") {
		pageTracker._trackPageview(params[0]);
	}else if (funcname=="reportEvent") {
		//pageTracker._initData();
		try {
			pageTracker._trackEvent(params[0],params[1],params[2]);
		}catch (err) {
			//alert("error: "+err);
		}
	}else if (funcname=="setDomainName") {
		pageTracker._setAllowHash(false);
		pageTracker._setDomainName(params[0]);
	}
}

function setFrameTarget(framepath,url) {
	var myRegxp = /^([\\\[\]\.\'a-zA-Z0-9_]+)$/;
	if(myRegxp.test(framepath)==true)
	{
		var ftarget=eval(framepath);
		if (ftarget!=null && typeof(ftarget)=="object") {
			ftarget.location.href=url;
		}
	}
}

function onIncomingPlayerEvent(type,name,targetid,info) {
	linkHandler("extevent,trigger://"+type+"::"+targetid+","+name+","+info);
}

function onOutgoingPlayerEvent(type,name,targetid,info) {
	if (type=='iframewidgetevent') {
		var ifr = document.getElementById(SBIFR_PREFIX+targetid);
		if (ifr!=null && (typeof ifr.contentWindow.setSBData == 'function')) {
			ifr.contentWindow.setSBData(type,name,targetid,info);
		}
	}
}


//query str parser
var urlParams = {};
(function () {
    var e,
        a = /\+/g,  // Regex for replacing addition symbol with a space
        r = /([^&=]+)=?([^&]*)/g,
        d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
        q = window.location.search.substring(1);

    while (e = r.exec(q))
       urlParams[d(e[1])] = d(e[2]);
})();


/** multilang package **/

var langid="default";
var main_anchor="mainplayer";

function showLesson(width,height,bgcolor,wmode) {
	document.getElementById("menu").style.visibility = 'hidden';
	var txt = AC_FL_GetContentTag( 'codebase','https://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0','width',width,'height',height,'src','tsunamiplayer?runtime=true&langid='+langid+'&gload=&lload=','quality','high','pluginspage','http://www.macromedia.com/go/getflashplayer','movie','tsunamiplayer?runtime=true&langid='+langid+'&gload=&lload=','bgcolor',bgcolor,'id','tsunamiplayer','name','tsunamiplayer','AllowScriptAccess','always','wmode',wmode ); //end AC code
	main_anchor="maincontent";
	document.getElementById(main_anchor).style.width='100%'; 
	manifestElementControl(main_anchor,"setTEXT","",txt);
	document.body.style.backgroundImage="none";
	playermc=window.document.tsunamiplayer;
}

function selectLang(mylangid,langlabel) {
	langid=mylangid;
	Set_Cookie( 'sblanguage', langid, 365, '/' );
}

function initLangSelection() {
	var mylangid=Get_Cookie( 'sblanguage');
	var langoptions=document.getElementById("language-selection").options;
	for (var i=0;i<langoptions.length;i++) {
		if (mylangid==langoptions[i].value) {
			langoptions[i].selected=true;
			langid=mylangid;
		}
	}
}