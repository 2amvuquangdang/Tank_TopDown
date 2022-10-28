import { _decorator, Component, Node, CCObject, Vec3 } from 'cc';
import { PlayerController } from './PlayerController';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
    @property(PlayerController)
    player:PlayerController = null;
    @property(Node)
    up:Node = null;
    @property(Node)
    down:Node = null;
    @property(Node)
    left:Node = null;
    @property(Node)
    right:Node = null;
    start() {
        this.up.on(Node.EventType.MOUSE_DOWN,this.OnUpClick,this);
        this.up.on(Node.EventType.MOUSE_UP,this.OnUpEnd,this);
    }
    OnUpClick(event)
    {
        console.log('up on');
        
        this.player.node.position.add(new Vec3(0,200,0));
    }
    OnUpEnd(event)
    {
        console.log('up off');
        this.player.node.position.add(new Vec3(0,50,0));
    }

    update(deltaTime: number) {
        
    }
}

