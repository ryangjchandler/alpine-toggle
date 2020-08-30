import AlpineToggle from '../dist/alpine-toggle'
import Alpine from 'alpinejs'
import { waitFor } from '@testing-library/dom'

beforeAll(() => {
    window.Alpine = Alpine
})

test('$toggle > property can be toggled', async () => {
    document.body.innerHTML = `
        <div x-data="{ foo: true }">
            <p x-text="JSON.stringify(foo)"></p>
            <button @click="$toggle('foo')">Toggle</button>
        </div>
    `

    AlpineToggle.start()

    await Alpine.start()

    expect(document.querySelector('p').innerText).toEqual('true')

    document.querySelector('button').click()

    await waitFor(() => {
        expect(document.querySelector('p').innerText).toEqual('false')
    })
})

test('$toggle > nested property can be toggled', async () => {
    document.body.innerHTML = `
        <div x-data="{ foo: { bar: true } }">
            <p x-text="JSON.stringify(foo.bar)"></p>
            <button @click="$toggle('foo.bar')">Toggle (nested)</button>
        </div>
    `

    AlpineToggle.start()

    await Alpine.start()

    expect(document.querySelector('p').innerText).toEqual('true')

    document.querySelector('button').click()

    await waitFor(() => {
        expect(document.querySelector('p').innerText).toEqual('false')
    })
})

test('$toggle > nested array property can be toggled', async () => {
    document.body.innerHTML = `
        <div x-data="{ foo: { bar: { boo: [true] } } }">
            <p x-text="JSON.stringify(foo.bar.boo[0])"></p>
            <button @click="$toggle('foo.bar.boo.0')">Toggle (nested array)</button>
        </div>
    `

    AlpineToggle.start()

    await Alpine.start()

    expect(document.querySelector('p').innerText).toEqual('true')

    document.querySelector('button').click()

    await waitFor(() => {
        expect(document.querySelector('p').innerText).toEqual('false')
    })
})