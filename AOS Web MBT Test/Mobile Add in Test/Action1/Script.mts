

AIUtil.SetContext Device("micclass:=Device")
AIUtil("text_box", "Mobile number or email").Type "9819695468"
AIUtil("text_box", "Password").Type "baula@123"
AIUtil.FindTextBlock("Log In").Click
AIUtil("button", "").Click
