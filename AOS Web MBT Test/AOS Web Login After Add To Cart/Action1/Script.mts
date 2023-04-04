'Login after Add to Cart
wait 5
AIUtil.FindTextBlock("Username").Click
AIUtil("input", "Username").Type "admin"
AIUtil.FindTextBlock("Password").Click
AIUtil("input", "Password").Type "adm1n"
AIUtil.FindTextBlock("LOGIN").Click



