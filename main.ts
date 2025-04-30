basic.showIcon(IconNames.Yes)
basic.pause(2000)
OLED.init(128, 64)
OLED.writeStringNewLine("Setting time")
RTC_DS1307.DateTime(
2025,
4,
30,
18,
13,
0
)
basic.pause(1000)
basic.forever(function () {
    OLED.writeNum(RTC_DS1307.getTime(RTC_DS1307.TimeType.DAY))
    OLED.writeString(" : ")
    OLED.writeNum(RTC_DS1307.getTime(RTC_DS1307.TimeType.MONTH))
    OLED.writeString(" : ")
    OLED.writeNumNewLine(RTC_DS1307.getTime(RTC_DS1307.TimeType.YEAR))
    OLED.newLine()
    OLED.writeNum(RTC_DS1307.getTime(RTC_DS1307.TimeType.HOUR))
    OLED.writeString(" : ")
    OLED.writeNum(RTC_DS1307.getTime(RTC_DS1307.TimeType.MINUTE))
    basic.pause(5000)
    OLED.clear()
})
