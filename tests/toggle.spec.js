import AlpineToggle from '../dist/alpine-toggle'
import Alpine from 'alpinejs'

beforeAll(() => {
    window.Alpine = Alpine
})

test('$toggle > property can be toggled', async () => {
    document.body.innerHTML = `
        <div x-data="{ foo: true }">
            <button @click="$toggle('foo')"></button>
        </div>
    `

    AlpineToggle.start()

    await Alpine.start()

    expect(document.querySelector('div').__x.$data.foo).toBeTruthy()

    await document.querySelector('button').click()

    expect(document.querySelector('div').__x.$data.foo).toBeFalsy()
})