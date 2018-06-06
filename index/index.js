const app = getApp()

Page({

    data: {
        dialogShow: false
    },

    onLoad: function () {
       
    },

    clickShowDialog: function () {
        this.setData({
            dialogShow: true
        })
    }

})
