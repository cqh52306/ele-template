/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-05-22 14:08:03
 * @LastEditTime: 2019-05-22 14:08:03
 * @LastEditors: your name
 */
export default {
    computed: {
        device() {
            return this.$store.state.app.device
        }
    },
    mounted() {
        // In order to fix the click on menu on the ios device will trigger the mouseleave bug
        this.fixBugIniOS()
    },
    methods: {
        fixBugIniOS() {
            const $subMenu = this.$refs.subMenu
            if ($subMenu) {
                const handleMouseleave = $subMenu.handleMouseleave
                $subMenu.handleMouseleave = (e) => {
                    if (this.device === 'mobile') {
                        return
                    }
                    handleMouseleave(e)
                }
            }
        }
    }
}