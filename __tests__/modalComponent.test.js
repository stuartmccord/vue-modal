import { Modal } from '../src';
import Vue from 'vue/dist/vue.js';

describe('Modal', () => {
    Vue.component('modal', Modal);

    beforeEach(() => {
        document.body.innerHTML = `
            <div id="app">
                <modal :show="false"></modal>
            </div>
        `;
    });

    it('can mount', async () => {
        await createVm();

        expect(document.body.innerHTML).toMatchSnapshot();
    });

    it('uses a custom slot', async () => {
        document.body.innerHTML = `
            <div id="app">
                <modal :show="false">
                    Modal content
                </modal>
            </div>
            `;

        const modal = await createVm();

        expect(document.body.innerHTML).toMatchSnapshot();
    });

    it('it can show', async () => {
        document.body.innerHTML = `
            <div id="app">
                <modal :show="true"></modal>
            </div>
            `;

        const modal = await createVm();

        expect(document.body.innerHTML).toMatchSnapshot();
    });
});

async function createVm() {
    const vm = new Vue({
        el: '#app',
    });

    await Vue.nextTick(() => {});

    return { app: vm, component: vm.$children[0] };
}
