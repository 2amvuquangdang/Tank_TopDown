import { _decorator, Component, Node, Vec2, Vec3 } from "cc";
const { ccclass, property } = _decorator;

@ccclass("MathDang")
export default class MathDang extends Component {

  /**
   * @returns return một góc giữa vec và Vectơ (1,0)
   */
  public static SetDirection(vec: Vec2) {
    return ((Math.acos(vec.x) * vec.y) / Math.abs(vec.y) / Math.PI) * 180;
  }

   /**
   * @returns return một góc giữa vec và Vectơ (1,0)
   */
  public static SetDirectionV3(vec: Vec3) {
    return ((Math.acos(vec.x) * vec.y) / Math.abs(vec.y) / Math.PI) * 180;
  }
  start() {}

  update(deltaTime: number) {}
}
