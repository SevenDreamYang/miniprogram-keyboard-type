// my-behavior.js
module.exports = Behavior({
    data: {
        keyHeight:286
    },
    attached: function () {
        this.animation = wx.createAnimation({
            duration: 200,
            timingFunction: "linear",
            delay: 0
        })
    },
    methods: {
        initAnimation(dom) {
            const query = wx.createSelectorQuery().in(this);
            query.select(dom).boundingClientRect();
            query.exec((res) => {
                this.setData({
                    keyHeight:res[0].height
                })
            });
        },
        showKey(e) {
            const {keyHeight} = this.data;
            this.animation.translateY(keyHeight).step()
            this.setData({
                animationDOM: this.animation.export(),
            })
            setTimeout(function () {
                this.animation.translateY(0).step()
                this.setData({
                    animationDOM: this.animation.export()
                })
            }.bind(this), 200)
        },
        closeKey(e) {
            const {keyHeight} = this.data;
            this.animation.translateY(0).step()
            this.setData({
                animationDOM: this.animation.export(),
            })
            setTimeout(function () {
                this.animation.translateY(keyHeight).step()
                this.setData({
                    animationDOM: this.animation.export(),
                })
            }.bind(this), 200)
        },
    }
})