const isObject = _ => typeof _ === 'object'

const AlpineToggle = {
    start() {
        if (! window.Alpine) {
            throw new Error('Alpine is required for `alpine-toggle` to work.')
        }

        Alpine.addMagicProperty('toggle', $el => {
            return function (target) {
                let $data = $el.__x.$data

                target.split('.').reduce((acc, current) => {
                    if (acc[current] && ! isObject(acc[current])) {
                        acc[current] = ! acc[current]
                    }
                }, $data)
            }
        })
    }
}

const alpine = window.deferLoadingAlpine || ((callback) => callback())

window.deferLoadingAlpine = function (callback) {
    AlpineToggle.start()

    alpine(callback)
}

export default AlpineToggle