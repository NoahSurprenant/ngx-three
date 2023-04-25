/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix, jsdoc/no-types, import/no-deprecated */
import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
  Type,
} from '@angular/core';
import {
  CubeTexture,
  Mapping,
  PixelFormat,
  TextureDataType,
  TextureEncoding,
  TextureFilter,
  Wrapping,
} from 'three';
import { ThTextureBase } from '../ThTextureBase';
import { ThTexture } from './ThTexture';

@Component({
  selector: 'th-cubeTexture',
  template: '<ng-content/>',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThTextureBase, useExisting: forwardRef(() => ThCubeTexture) },
  ],
})
export class ThCubeTexture<
  T extends CubeTexture = CubeTexture,
  TARGS = [
    images?: any[],
    mapping?: Mapping,
    wrapS?: Wrapping,
    wrapT?: Wrapping,
    magFilter?: TextureFilter,
    minFilter?: TextureFilter,
    format?: PixelFormat,
    type?: TextureDataType,
    anisotropy?: number,
    encoding?: TextureEncoding
  ]
> extends ThTexture<T, TARGS> {
  public getType(): Type<CubeTexture> {
    return CubeTexture;
  }

  @Input()
  public set images(value: any) {
    if (this._objRef) {
      this._objRef.images = value;
    }
  }

  // @ts-ignore
  public get images(): any | undefined {
    return this._objRef?.images;
  }
  @Input()
  public set flipY(value: boolean) {
    if (this._objRef) {
      this._objRef.flipY = value;
    }
  }

  // @ts-ignore
  public get flipY(): boolean | undefined {
    return this._objRef?.flipY;
  }
  // @ts-ignore
  public get isCubeTexture(): true | undefined {
    return this._objRef?.isCubeTexture;
  }
}
