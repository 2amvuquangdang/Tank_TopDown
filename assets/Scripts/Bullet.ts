import {
  _decorator,
  Component,
  Node,
  RigidBody2D,
  Vec2,
  Vec3,
  BoxCollider2D,
  ITriggerEvent,
} from "cc";
import MathDang from "./MathDang";
import FireDirection from "./MathDang";

const { ccclass, property } = _decorator;

@ccclass("Bullet")
export class Bullet extends Component {
  private rigidbody: RigidBody2D;

  onLoad() {
    this.rigidbody = this.getComponent(RigidBody2D);
  }

  start() {
    let collider = this.node.getComponent(BoxCollider2D);
    collider.on("onTriggerEnter", this.onTriggerEnter, this);
  }

  onTriggerEnter(event: ITriggerEvent) {
    event.selfCollider.node.destroy();
    event.otherCollider.node.destroy();
  }

  update(deltaTime: number) {}

  Fire(speed: number, firePoint: Node) {
    this.rigidbody.linearVelocity = new Vec2(
      firePoint.up.multiplyScalar(speed).x,
      firePoint.up.multiplyScalar(speed).y
    );
    let z = MathDang.SetDirectionV3(firePoint.right);
    this.node.eulerAngles = new Vec3(0, 0, z);
  }
}
