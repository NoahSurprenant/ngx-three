import { Sprite } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";
import { Input } from "@angular/core";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Vector2 } from "three";
import { Raycaster } from "three";
import { Object3D } from "three";
import { Intersection } from "three";
import { SpriteMaterial } from "three";
import { BufferGeometry } from "three";
import { ThObject3D } from "./ThObject3D";

@Component({
  selector: "th-sprite",
  inputs: ["type", "isSprite", "geometry", "material"],
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ThObject3D, useExisting: forwardRef(() => ThSprite) }],
})
export class ThSprite<
  TARGS extends any[] = [material: SpriteMaterial]
> extends ThObject3D<TARGS> {
  protected obj!: Sprite;
  protected getObjectType(): Type<Sprite> {
    return Sprite;
  }

  @Input()
  public set center(value: Vector2 | [x: number, y: number]) {
    if (this.obj) {
      this.obj.center = applyValue<Vector2>(this.obj.center, value);
    }
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
