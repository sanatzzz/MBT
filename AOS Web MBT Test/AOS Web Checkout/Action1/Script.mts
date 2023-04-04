
'Checkout
AIUtil.FindTextBlock("CHECKOUT ($2,018.00)").Click
wait 5
If  Not AIUtil.FindTextBlock("admin", micWithAnchorOnLeft, AIUtil("profile")).Exist Then RunAction "Action1 [AOS Web Login After Add To Cart]", oneIteration End If
AIUtil.FindTextBlock("NEXT").Click
AIUtil.FindTextBlock("PAY NOW").Click
AIUtil.FindTextBlock("dvantageDEMO").Click

