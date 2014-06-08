angular.module 'ngLogger', []
.factory "log", ->

	yellow = '#FF851B'
	red = '#FF4136'
	blue = '#001F3F'
	green = '#3D9970'
	cyan = '#008080'

	# Plain old console log
	angularLogger = (args...) ->
		console.log.apply(console, args)

	angularLogger.at = (data...) ->
		log ""
		log "[c='color: #{yellow}']AT:" + data + '[c]'
		log "[c='color: #{yellow}']-------------------------[c]"

	angularLogger.doing = (data...) ->
		log "[c='color: #{blue}']" + data + '[c]' 

	angularLogger.say = (data...) ->
		log data

	angularLogger.error = (data...) ->
		log ""
		log "[c='color: #{red}']" + "ERROR: " + data + "[c]"
		log "[c='color: #{red}']------------------------------[c]"

	angularLogger.success = (data...) ->
		log ""
		log "[c='color: #{green}']" + data + "[c]"
			

	angularLogger.note = (data...) ->
		log "[c='color: #{cyan}']" + data + "[c]"

	return angularLogger