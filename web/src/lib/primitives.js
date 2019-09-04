import { extend } from "rebass-extend";
import {
  display,
  height,
  maxWidth,
  textAlign,
  fontStyle,
  borders
} from "styled-system";
import styled from "styled-components";

const {
  Box,
  Flex,
  Text,
  Heading,
  Button: RealButton,
  Link,
  Image,
  Card
} = extend({
  Box: [display, textAlign, maxWidth, height, borders],
  Text: [fontStyle]
});

const Button = styled(RealButton)`
  padding: 0 8px;
  border-radius: 3px;
  line-height: 26px;
  font-weight: normal;
  height: 28px;
  background: white;
  color: blue;
  border: 1px blue solid;

  &:hover {
    opacity: 0.9;
  }
`;

export { Box, Flex, Text, Heading, Button, Link, Image, Card };
