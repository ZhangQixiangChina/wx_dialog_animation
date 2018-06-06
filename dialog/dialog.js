// dialog/dialog.js
var app = getApp()
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        show: {
            type: Boolean,
            observer: '_onShowChange',
            value: false
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        show: false,
        dialogAnim: null,
        windowHeight: 504
    },

    /**
     * 组件的方法列表
     */
    methods: {

        _onShowChange: function (newVal, oldVal) {

            let dy = newVal ? 250 : -250

            let dialogAnim = wx.createAnimation({
                duration: 300
            }).translateY(dy).step().export()

            this.setData({
                dialogAnim: dialogAnim,
            })

        },

        clickMask: function () {
            this.setData({
                show: false
            })
       
        },


    },




    attached: function () {

        this.setData({
            windowHeight: app.global.systemInfo.windowHeight
        })
    }
})
