import { Box3Helper } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";
import { Input } from "@angular/core";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Box3 } from "three";
import { Color } from "three";
import { LineSegments } from "three";
import { ThLineSegments } from "./ThLineSegments";

@Component({
  selector: "th-box3Helper",
  inputs: ["type"],
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThBox3Helper) },
  ],
})
export class ThBox3Helper<
  TARGS extends any[] = [box: Box3, color: Color]
> extends ThLineSegments<TARGS> {
  protected obj!: Box3Helper;
  protected getObjectType(): Type<Box3Helper> {
    return Box3Helper;
  }

  @Input()
  public set box(value: Box3 | [min: Vector3, max: Vector3]) {
    if (this.obj) {
      this.obj.box = applyValue<Box3>(this.obj.box, value);
    }
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
