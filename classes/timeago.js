module.exports = function(date) {
    date = new Date(date);

    var seconds = Math.floor((new Date() - date) / 1000);

    var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];

    interval = Math.floor(seconds / 3600);
    if (interval > 23) {
        return date.getDate()+" "+month[date.getMonth()]+" "+date.getFullYear();
    }
    if (interval >= 1) {
        return interval + " hrs";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " min" + (interval > 1 ? "s" : "");
    }
    if (interval > 0.1) {
        return "< 1 min";
    }
    return "now";
}
