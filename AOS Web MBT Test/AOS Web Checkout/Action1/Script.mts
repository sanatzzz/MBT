
'Checkout
'wait 2
'AIUtil("shopping_cart").Click
'AIUtil("button", "CHECKOUT ($1,009.00)").Click
AIUtil("button", "CHECKOUT ($2,018.00)").Click
wait 2
If  Not AIUtil.FindTextBlock("admin", micWithAnchorOnLeft, AIUtil("profile")).Exist Then RunAction "Action1 [AOS Web Login After Add To Cart]", oneIteration End If
AIUtil.FindTextBlock("NEXT").Click
AIUtil.FindTextBlock("PAY NOW").Click
AIUtil.FindTextBlock("dvantageDEMO").Click



