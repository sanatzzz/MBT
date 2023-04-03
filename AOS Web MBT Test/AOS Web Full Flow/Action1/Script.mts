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
AIUtil("profile", micAnyText, micFromBottom, 1).Click
wait 4
AIUtil("input", "Username").Highlight
AIUtil("input", "Username").Type "admin"
AIUtil("input", "Password").Type "adm1n"
AIUtil.FindTextBlock("SIGN IN").Click

'Add to Cart
AIUtil.FindTextBlock("TABLETS").Click
AIUtil.FindTextBlock("HP ElitePad 1000 G2").Click
AIUtil("text_box", "Quantity").Type "2"
AIUtil.FindTextBlock("ADD TO CART").Click

'Checkout
AIUtil.FindTextBlock("CHECKOUT ($2,018.00)").Click

If  Not AIUtil.FindTextBlock("admin", micWithAnchorOnLeft, AIUtil("profile")).Exist Then RunAction "Action1 [AOS Web Login After Add To Cart]", oneIteration End If
'AIUtil.SetContext Browser("creationtime:=0")
AIUtil.FindTextBlock("NEXT").Click
AIUtil.FindTextBlock("PAY NOW").Click
AIUtil.FindTextBlock("dvantageDEMO").Click

AppContext.Close


