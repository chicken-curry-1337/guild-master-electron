import React, { useState, useMemo, useRef } from "react";
import { useList } from "effector-react";
import {
  Text,
  Stage,
  SimpleRope,
  Graphics,
  Container,
  useTick,
} from "@pixi/react";
import * as PIXI from "pixi.js";
import { $tasks } from "@lib/entities/tasks/model";

const width = 500;
const height = 240;
const backgroundColor = 0x1d2330;
const ropeLength = 45;

export const MainStage = () => {
  const tasks = useList($tasks, ({ title }, index) => (
    <Text
      text={title}
      anchor={0}
      x={10}
      y={65 * index}
      style={
        new PIXI.TextStyle({
          align: "center",
          fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
          fontSize: 50,
          fontWeight: "400",
          fill: ["#ffffff", "#00ff99"], // gradient
          stroke: "#01d27e",
          strokeThickness: 5,
          letterSpacing: 20,
          dropShadow: true,
          dropShadowColor: "#ccced2",
          dropShadowBlur: 4,
          dropShadowAngle: Math.PI / 6,
          dropShadowDistance: 6,
          wordWrap: true,
          wordWrapWidth: 440,
        })
      }
    />
  ));
  return <Container>{tasks}</Container>;
};
