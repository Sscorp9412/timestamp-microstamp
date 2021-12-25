exports.getTimeStamp = (d) => {
	const regex = /[/-]/;
	if(regex.test(d)){
		const date = new Date(d);
		const unix = date.getTime();
		if(unix){
			return {unix: unix, utc: date.toUTCString()}
		} else {
			return {error: "Invalid Date"}
		}
	} else {
		const ms = parseInt(d);
		const date = new Date(ms);
		const unix = date.getTime();
		if(unix){
			return {unix: unix, utc: date.toUTCString()}
		} else {
			return {error: "Invalid Date"}
		}
	}
}