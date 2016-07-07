var sbconfig = {
};

function closeWindow() {
	window.close();
}

function sb3locator(lcid, lctype, lcver) {
	var val = null;
	var verstr = '';
//	if (DataUtil.getInt(lcver) > 0) {
//		verstr = '_' + lcver;
//	}
	if (lctype == 'jpg' || lctype == 'png' || lctype == 'gif') {
		val = 'graphics/' + lcid + verstr + '.' + lctype;
	} else if (lctype == 'flv') {
		val = [];
		val.push({
			src : 'videos/' + lcid + verstr + '.mp4',
			type : 'video/mp4'
		});
		val.push({
			src : 'videos/' + lcid + verstr + '.ogg',
			type : 'video/ogg'
		});
	} else if (lctype == 'mp3') {
		val = [];
		val.push({
			src : 'audios/' + lcid + verstr + '.' + lctype,
			type : 'audio/mp3'
		});
		val.push({
			src : 'audios/' + lcid + verstr + '.ogg',
			type : 'video/ogg'
		});
	}else if (lctype=="fil" || lctype=="pkg") {
		val="assets/"+lctype+"/"+lcid+verstr +"/asset.htm";	
	}
	return val;
}

/*
 * hooks
 */
//function setCookieExt(name,val,days,p) {
//	return null;
//}


//function getCookieExt(name,p) {
//	return null;
//}


//function removeCookieExt(name,p) {
//	return null;
//}

//function getURLData(url) {
//	return null;
//}
