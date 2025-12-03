const { formatRelative } = require("date-fns");

const formatTime = (time) => formatRelative(time, new Date());

module.exports = formatTime;
