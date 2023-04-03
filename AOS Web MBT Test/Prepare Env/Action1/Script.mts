With Browser("CreationTime:=0")
while .Exist(0)	'Loop to close all open browsers
.Close 
Wend
End With

SystemUtil.Run  "chrome.exe","","","",3		'launch the chrome
Set AppContext=Browser("CreationTime:=0")	'Set the variable for what application (in this case the browser) we are acting upon
wait 5 
URL = "http://advantageonlineshopping.com/#/"
AppContext.ClearCache		'Clear the browser cache to ensure you're getting the latest forms from the application
AppContext.Navigate URL		'Navigate to the application URL
AppContext.Maximize			'Maximize the application to give the best chance that the fields will be visible on the screen
AppContext.Sync				'Wait for the browser to stop spinning

'Login
AIUtil.SetContext Browser("creationtime:=0")
