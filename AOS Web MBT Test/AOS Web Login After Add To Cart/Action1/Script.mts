'Login after Add to Cart
wait 5
AIUtil("input", "Already have an account?").Type "admin"
AIUtil("input", "QTY. 2").Type "adm1n"
AIUtil.FindTextBlock("LOGIN").Click
