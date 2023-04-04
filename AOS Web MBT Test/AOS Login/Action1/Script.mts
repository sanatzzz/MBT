wait 4
AIUtil("profile", micAnyText, micFromBottom, 1).Click
wait 4
'Initial Login
AIUtil("input", "Username").Type "admin"
AIUtil("input", "Password").Type "adm1n"
AIUtil.FindTextBlock("SIGN IN").Click
