/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  SkipSelf,
  Type,
} from '@angular/core';
import {
  Box3,
  BufferAttribute,
  BufferGeometry,
  InterleavedBufferAttribute,
  NormalBufferAttributes,
  NormalOrGLBufferAttributes,
  Sphere,
  Vector3,
} from 'three';
import { ThGeometryBase } from '../ThGeometryBase';
import { applyValue } from '../util';
import { ThObject3D } from './ThObject3D';

@Component({
  selector: 'th-bufferGeometry',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [],
})
export class ThBufferGeometry<
  Attributes extends NormalOrGLBufferAttributes = NormalBufferAttributes,
  T extends BufferGeometry<Attributes> = BufferGeometry<Attributes>,
  TARGS = [],
> extends ThGeometryBase<T, TARGS> {
  public getType(): Type<BufferGeometry<Attributes>> {
    return BufferGeometry;
  }

  @Input()
  public set id(value: number) {
    if (this._objRef) {
      this._objRef.id = value;
    }
  }

  public get id(): number | undefined {
    return this._objRef?.id;
  }
  @Input()
  public set uuid(value: string) {
    if (this._objRef) {
      this._objRef.uuid = value;
    }
  }

  public get uuid(): string | undefined {
    return this._objRef?.uuid;
  }
  @Input()
  public set name(value: string) {
    if (this._objRef) {
      this._objRef.name = value;
    }
  }

  public get name(): string | undefined {
    return this._objRef?.name;
  }
  public get type(): (string | 'BufferGeometry') | undefined {
    return this._objRef?.type;
  }
  @Input()
  public set index(
    value:
      | BufferAttribute
      | null
      | [value: ArrayLike<number> | ArrayBufferView, offset?: number],
  ) {
    if (this._objRef) {
      this._objRef.index = applyValue<BufferAttribute | null>(
        this._objRef.index,
        value,
      );
    }
  }
  public get index(): (BufferAttribute | null) | undefined {
    return this._objRef?.index;
  }
  @Input()
  public set attributes(value: Attributes) {
    if (this._objRef) {
      this._objRef.attributes = value;
    }
  }

  public get attributes(): Attributes | undefined {
    return this._objRef?.attributes;
  }
  @Input()
  public set morphAttributes(value: {
    [name: string]: Array<BufferAttribute | InterleavedBufferAttribute>; // TODO Replace for 'Record<>'
  }) {
    if (this._objRef) {
      this._objRef.morphAttributes = value;
    }
  }

  public get morphAttributes():
    | {
        [name: string]: Array<BufferAttribute | InterleavedBufferAttribute>; // TODO Replace for 'Record<>'
      }
    | undefined {
    return this._objRef?.morphAttributes;
  }
  @Input()
  public set morphTargetsRelative(value: boolean) {
    if (this._objRef) {
      this._objRef.morphTargetsRelative = value;
    }
  }

  public get morphTargetsRelative(): boolean | undefined {
    return this._objRef?.morphTargetsRelative;
  }
  @Input()
  public set groups(
    value: Array<{
      /**
       * Specifies the first element in this draw call – the first vertex for non-indexed geometry, otherwise the first triangle index.
       * @remarks Expects a `Integer`
       */
      start: number;
      /**
       * Specifies how many vertices (or indices) are included.
       * @remarks Expects a `Integer`
       */
      count: number;
      /**
       * Specifies the material array index to use.
       * @remarks Expects a `Integer`
       */
      materialIndex?: number | undefined;
    }>,
  ) {
    if (this._objRef) {
      this._objRef.groups = value;
    }
  }

  public get groups():
    | Array<{
        /**
         * Specifies the first element in this draw call – the first vertex for non-indexed geometry, otherwise the first triangle index.
         * @remarks Expects a `Integer`
         */
        start: number;
        /**
         * Specifies how many vertices (or indices) are included.
         * @remarks Expects a `Integer`
         */
        count: number;
        /**
         * Specifies the material array index to use.
         * @remarks Expects a `Integer`
         */
        materialIndex?: number | undefined;
      }>
    | undefined {
    return this._objRef?.groups;
  }
  @Input()
  public set boundingBox(value: Box3 | null | [min: Vector3, max: Vector3]) {
    if (this._objRef) {
      this._objRef.boundingBox = applyValue<Box3 | null>(
        this._objRef.boundingBox,
        value,
      );
    }
  }
  public get boundingBox(): (Box3 | null) | undefined {
    return this._objRef?.boundingBox;
  }
  @Input()
  public set boundingSphere(
    value: Sphere | null | [center: Vector3, radius: number],
  ) {
    if (this._objRef) {
      this._objRef.boundingSphere = applyValue<Sphere | null>(
        this._objRef.boundingSphere,
        value,
      );
    }
  }
  public get boundingSphere(): (Sphere | null) | undefined {
    return this._objRef?.boundingSphere;
  }
  @Input()
  public set drawRange(value: { start: number; count: number }) {
    if (this._objRef) {
      this._objRef.drawRange = value;
    }
  }

  public get drawRange(): { start: number; count: number } | undefined {
    return this._objRef?.drawRange;
  }
  @Input()
  public set userData(value: { [key: string]: any }) {
    if (this._objRef) {
      this._objRef.userData = value;
    }
  }

  public get userData(): { [key: string]: any } | undefined {
    return this._objRef?.userData;
  }
  public get isBufferGeometry(): true | undefined {
    return this._objRef?.isBufferGeometry;
  }

  constructor(@SkipSelf() hostObject: ThObject3D) {
    super(hostObject);
  }
}
