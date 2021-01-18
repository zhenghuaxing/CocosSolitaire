// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { _decorator, Component, Node, Prefab, Canvas, instantiate } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EntryPoint')
export class EntryPoint extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    @property({ type: Prefab }) p_LogoPrefab: Prefab = null!;
    @property({ type: Canvas }) n_Canvas: Canvas = null!;

    start () {
        // Your initialization goes here.
        ll.MyTest.Log();
        ll.MyTest.Log2();

        let _logo: Node = instantiate(this.p_LogoPrefab);
        this.n_Canvas.node.addChild(_logo);
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
