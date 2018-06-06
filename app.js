App({
    global: {
        systemInfo: null
    },

    onLaunch: function () {
        wx.getSystemInfo({
            success: (res) => {
                this.global.systemInfo = res
            },
        })
    }
})
