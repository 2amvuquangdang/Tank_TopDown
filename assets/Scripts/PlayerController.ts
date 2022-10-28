import {
  _decorator,
  Component,
  Node,
  input,
  EventKeyboard,
  Input,
  KeyCode,
  Vec3,
  Button,
  SystemEvent,
  macro,
  RigidBody2D,
  Vec2,
  math,
  Sprite,
  BoxCollider2D,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("PlayerController")
export class PlayerController extends Component {
  public rigidbody2D: RigidBody2D;


  @property(Number)
  private speed: number = 10;

  rota: number = 0;

  rot: number = 0;

  onLoad() {
    this.rigidbody2D = this.getComponent(RigidBody2D);
    input.on(Input.EventType.KEY_PRESSING, this.onKeyPressing, this);
    input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
  }

  onKeyPressing(event: EventKeyboard) {
    switch (event.keyCode) {
      case KeyCode.KEY_W:
        this.Up();
        console.log('move up');
        break;
      case KeyCode.KEY_S:
        this.Down();
        console.log('move down');
        break;
      case KeyCode.KEY_D:
        this.Right();
        console.log('turn right');
        break;
      case KeyCode.KEY_A:
        this.Left();
        console.log('turn left');
        break;
    }
  }

  Up() {
    this.rigidbody2D.linearVelocity = new Vec2(
      this.node.up.x * this.speed,
      this.node.up.y * this.speed
    );
  }

  Down() {
    this.rigidbody2D.linearVelocity = new Vec2(
      this.node.up.x * -this.speed,
      this.node.up.y * -this.speed
    );
  }

  Left() {
    this.rot += this.speed / 2;
    this.node.eulerAngles = new Vec3(0, 0, this.rot);
  }

  Right() {
    this.rot -= this.speed / 2;
    this.node.eulerAngles = new Vec3(0, 0, this.rot);
    console.log(this.rot);
    
  }

  onKeyUp(event: EventKeyboard) {
    switch (event.keyCode) {
      case KeyCode.KEY_W:
        this.rigidbody2D.linearVelocity = Vec2.ZERO;
        break;
      case KeyCode.KEY_S:
        this.rigidbody2D.linearVelocity = Vec2.ZERO;
        break;
    }
  }

  update(deltaTime: number) {
    
  }
}
