import { PositionalAudio } from "three";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { ThObject3D } from "./ThObject3D";
import { applyValue } from "../util";
import { SkipSelf, Self, Optional, forwardRef, Type } from "@angular/core";
import { AudioListener } from "three";
import { Audio } from "three";
import { ThAudio } from "./ThAudio";

@Component({
  selector: "th-positionalAudio",
  inputs: ["panner"],
  template: "",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: ThObject3D, useExisting: forwardRef(() => ThPositionalAudio) },
  ],
})
export class ThPositionalAudio<
  TARGS extends any[] = [listener: AudioListener]
> extends ThAudio<PannerNode, TARGS> {
  protected obj!: PositionalAudio;
  protected getObjectType(): Type<PositionalAudio> {
    return PositionalAudio;
  }

  constructor(@SkipSelf() parent: ThObject3D) {
    super(parent);
  }
}
