﻿//------------------------------------------------------------------------------// readPreviewInfo // Reads the previewInfo.jsx that was created by SimpleDissolve.jsx (in /Presets/Scripts/).// previewInfo.jsx contains an object with the//		height//		width// 		url of the preview //		selection (if any).// Not very elegant but effective way to get the info//------------------------------------------------------------------------------function readPreviewInfo (){	do {		var retVal = null		var previewInfoFile = File(Folder.temp+"/previewInfo.jsx")		if (! previewInfoFile.exists) {			break;		}		previewInfoFile.encoding = "UTF-8"		if (! previewInfoFile.open()) {			break;		}		var str = previewInfoFile.read()		previewInfoFile.close()		if (str.length == 0) {			break;		}		retVal = str	}		while (false)	return retVal;}