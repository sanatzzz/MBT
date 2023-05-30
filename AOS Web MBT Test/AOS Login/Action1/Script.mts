wait 4
AIUtil("profile", micAnyText, micWithAnchorBelow, AIUtil("shopping_cart")).Click
wait 4
AIUtil("input", "Username").Highlight
AIUtil("input", "Username").Type "admin"
Set WshShell = CreateObject("WScript.Shell")
WshShell.SendKeys "{ESCAPE}"
AIUtil("input", "Password").Type "adm1n"
AIUtil.FindTextBlock("SIGN IN").Click
