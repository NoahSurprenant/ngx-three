import { LineSegments } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { Geometry } from "three";
import { Material } from "three";
import { Line } from "three";
import { BufferGeometry } from "three";
import { ThLine } from "./ThLine";

@Component({
  selector: "th-lineSegments",
  inputs: ["type", "isLineSegments"],
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThLineSegments) },
  ],
})
export class ThLineSegments<
  TGeometry extends Geometry | BufferGeometry = Geometry | BufferGeometry,
  TMaterial extends Material | Material[] = Material | Material[],
  TARGS extends any[] = [geometry: TGeometry, material: TMaterial]
> extends ThLine<TGeometry, TMaterial, TARGS> {
  protected obj!: LineSegments;
  protected getObjectType(): Type<LineSegments> {
    return LineSegments;
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
