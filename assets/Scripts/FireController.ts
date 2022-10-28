import {
  _decorator,
  Component,
  Node,
  Prefab,
  input,
  Input,
  EventKeyboard,
  KeyCode,
  instantiate,
  Canvas,
  Vec2,
  Vec3,
} from "cc";
import { Bullet } from "./Bullet";

const { ccclass, property } = _decorator;

@ccclass("FireController")
export class FireController extends Component {
  @property(Node)
  firePoint: Node = null;

  @property(Node)
  canvas: Node;

  @property(Prefab)
  bulletPrefab: Prefab;

  @property(Number)
  bulletSpeed: number = 10;

  start() {
    input.on(Input.EventType.KEY_DOWN, this.OnKeyDown, this);
  }

  OnKeyDown(event: EventKeyboard) {
    switch (event.keyCode) {
      case KeyCode.SPACE:
        this.Instant();
        console.log('fire');
        break;
    }
  }

  Instant() {
    let bullet = instantiate(this.bulletPrefab);
    bullet.setParent(this.canvas);
    bullet.worldPosition = this.firePoint.worldPosition;
    let bulletComponent = bullet.getComponent(Bullet);
    bulletComponent.Fire(this.bulletSpeed, this.firePoint);
  }

  update(deltaTime: number) {}
}
