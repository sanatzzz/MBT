

AIUtil.SetContext Browser("creationtime:=0")
AIUtil.FindTextBlock("TABLETS").Click
AIUtil.FindTextBlock("HP ElitePad 1000 G2").Click
AIUtil.FindTextBlock("ADD TO CART").Click
AIUtil.FindTextBlock("CHECKOUT ($1,009.00)").Click
AIUtil("input", "Already have an account?").Type "admin"
AIUtil("input", "Color. BLUE").Type "adm1n"
AIUtil.FindTextBlock("LOGIN").Click


